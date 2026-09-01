#!/usr/bin/env python3
"""
Prepara los MP3 de audio_guiones de cada asignatura para importarlos en
BookPlayer (iOS) via OneDrive.

Qué hace:
- Recorre las carpetas de asignaturas definidas en SUBJECTS.
- Copia (nunca mueve ni modifica) los MP3 de <asignatura>/audio_guiones/mp3
  a MP3_BookPlayer/<Asignatura>/, con nombres normalizados "NN - Título.mp3".
- Añade/completa etiquetas ID3 (título, álbum = asignatura, número de pista,
  nombre de archivo original) sin recodificar el audio.
- Genera un informe (consola + MP3_BookPlayer/INFORME.txt).

Es seguro volver a ejecutarlo: solo escribe dentro de MP3_BookPlayer/ y
sobrescribe las copias anteriores; jamás toca los MP3 originales.

Requiere: pip install mutagen
"""

import re
import shutil
import sys
from pathlib import Path

from mutagen.id3 import COMM, ID3, ID3NoHeaderError, TALB, TIT2, TRCK

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = BASE_DIR / "MP3_BookPlayer"

# Carpeta de la asignatura -> nombre limpio (álbum ID3 y subcarpeta de salida)
SUBJECTS = {
    "01_QuimicaFarmaceutica": "Química Farmacéutica",
    "bioquimica clinica": "Bioquímica Clínica",
    "Farmacologia": "Farmacología",
    "Microbiologia y parasitologia clinica": "Microbiología y Parasitología Clínica",
    "tecnologia farmaceutica": "Tecnología Farmacéutica",
    "Metodologia investigacion": "Metodología de la Investigación",
}

MANIFEST_ROW_RE = re.compile(r"^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*([^|]+?)\s*\|")

INVALID_FS_CHARS = {
    ":": " -",
    "/": "-",
    "\\": "-",
    "*": "",
    "?": "",
    '"': "'",
    "<": "(",
    ">": ")",
    "|": "-",
}


def clean_title(text: str) -> str:
    text = text.replace("—", " - ").replace("–", " - ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def sanitize_filename(name: str) -> str:
    for old, new in INVALID_FS_CHARS.items():
        name = name.replace(old, new)
    name = re.sub(r"\s+", " ", name).strip()
    name = name.rstrip(". ")
    return name


def parse_manifest_titles(manifest_path: Path) -> dict:
    """Lee MANIFIESTO.md y devuelve {nombre_guion.txt: título limpio}."""
    titles = {}
    if not manifest_path.exists():
        return titles
    for line in manifest_path.read_text(encoding="utf-8").splitlines():
        m = MANIFEST_ROW_RE.match(line)
        if m:
            txt_filename, title = m.groups()
            titles[txt_filename] = clean_title(title)
    return titles


def fallback_title(mp3_path: Path) -> str:
    """Deriva un título legible del nombre de archivo si no hay MANIFIESTO."""
    stem = re.sub(r"^\d+_?", "", mp3_path.stem)
    stem = stem.replace("_", " ").replace("-", " ")
    stem = re.sub(r"\s+", " ", stem).strip()
    return (stem[:1].upper() + stem[1:]) if stem else mp3_path.stem


def tag_mp3(dest_path: Path, title: str, album: str, track: int, total: int, original_name: str) -> None:
    try:
        tags = ID3(dest_path)
    except ID3NoHeaderError:
        tags = ID3()

    if "TIT2" not in tags or not str(tags["TIT2"]).strip():
        tags["TIT2"] = TIT2(encoding=3, text=title)
    if "TALB" not in tags or not str(tags["TALB"]).strip():
        tags["TALB"] = TALB(encoding=3, text=album)
    tags["TRCK"] = TRCK(encoding=3, text=f"{track}/{total}")

    tags.delall("COMM")
    tags.add(COMM(encoding=3, lang="spa", desc="", text=f"Archivo original: {original_name}"))

    tags.save(dest_path)


def process_subject(folder_name: str, display_name: str, report: dict) -> None:
    subject_dir = BASE_DIR / folder_name
    audio_dir = subject_dir / "audio_guiones"
    mp3_dir = audio_dir / "mp3"

    mp3_files = sorted(mp3_dir.glob("*.mp3")) if mp3_dir.is_dir() else []

    report["total_found"] += len(mp3_files)
    report["per_subject"][display_name] = len(mp3_files)

    if not mp3_files:
        report["notes"].append(
            f"{display_name}: no se encontraron MP3 en "
            f"'{folder_name}/audio_guiones/mp3' (carpeta de salida no creada)."
        )
        return

    titles = parse_manifest_titles(audio_dir / "MANIFIESTO.md")
    out_dir = OUTPUT_DIR / display_name
    out_dir.mkdir(parents=True, exist_ok=True)

    total = len(mp3_files)
    for idx, mp3_path in enumerate(mp3_files, start=1):
        try:
            txt_key = mp3_path.stem + ".txt"
            title = titles.get(txt_key) or fallback_title(mp3_path)
            dest_name = f"{idx:02d} - {sanitize_filename(title)}.mp3"
            dest_path = out_dir / dest_name

            shutil.copy2(mp3_path, dest_path)
            tag_mp3(dest_path, title, display_name, idx, total, mp3_path.name)

            report["renamed"].append((display_name, mp3_path.name, dest_name))
        except Exception as e:
            report["problems"].append((display_name, mp3_path.name, str(e)))


def write_report(report: dict) -> None:
    lines = []
    lines.append("=" * 70)
    lines.append("INFORME - Preparacion de audios para BookPlayer")
    lines.append("=" * 70)
    lines.append("")
    lines.append(f"Total de MP3 encontrados: {report['total_found']}")
    lines.append("")
    lines.append("MP3 por asignatura:")
    for subject, count in report["per_subject"].items():
        lines.append(f"  - {subject}: {count}")
    lines.append("")
    lines.append(f"Archivos copiados y renombrados: {len(report['renamed'])}")
    if report["renamed"]:
        lines.append("")
        lines.append("Detalle de renombrado (original -> nuevo):")
        current_subject = None
        for subject, old, new in report["renamed"]:
            if subject != current_subject:
                lines.append(f"\n  [{subject}]")
                current_subject = subject
            lines.append(f"    {old}  ->  {new}")
    lines.append("")
    lines.append(f"Archivos con problemas: {len(report['problems'])}")
    for subject, name, err in report["problems"]:
        lines.append(f"  - [{subject}] {name}: {err}")
    if report["notes"]:
        lines.append("")
        lines.append("Notas:")
        for note in report["notes"]:
            lines.append(f"  - {note}")
    lines.append("")
    lines.append(f"Carpeta final lista para copiar a OneDrive:\n  {OUTPUT_DIR}")
    lines.append("")

    report_text = "\n".join(lines)
    print(report_text)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUTPUT_DIR / "INFORME.txt").write_text(report_text, encoding="utf-8")


def main() -> None:
    report = {
        "total_found": 0,
        "per_subject": {},
        "renamed": [],
        "problems": [],
        "notes": [],
    }

    for folder_name, display_name in SUBJECTS.items():
        process_subject(folder_name, display_name, report)

    write_report(report)


if __name__ == "__main__":
    main()
