#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Escanea las 6 carpetas de asignaturas y genera el indice academico que
alimenta CENTRAL_ESTUDIO (data/academic_index.json y data/academic_index.js).

Es de solo lectura sobre el material original: nunca mueve, renombra,
borra ni sobrescribe nada fuera de CENTRAL_ESTUDIO/data/.

Ejecutar de nuevo este script en cualquier momento para reflejar archivos
nuevos o modificados:

    python scripts/actualizar_indice.py

Requiere: pip install mutagen pypdf python-docx
"""

import json
import re
import sys
import unicodedata
from datetime import datetime
from pathlib import Path
from urllib.parse import urlencode, quote

from mutagen.mp3 import MP3

try:
    from pypdf import PdfReader
except ImportError:
    PdfReader = None

try:
    import docx as docx_lib
except ImportError:
    docx_lib = None

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

SCRIPT_DIR = Path(__file__).resolve().parent
APP_DIR = SCRIPT_DIR.parent
BASE_DIR = APP_DIR.parent
DATA_DIR = APP_DIR / "data"

# ---------------------------------------------------------------------------
# Configuracion de asignaturas
# ---------------------------------------------------------------------------

SUBJECTS = [
    {
        "folder": "01_QuimicaFarmaceutica",
        "id": "quimica-farmaceutica",
        "name": "Química Farmacéutica",
        "color": "#7c5cff",
        "emoji": "🧪",
    },
    {
        "folder": "bioquimica clinica",
        "id": "bioquimica-clinica",
        "name": "Bioquímica Clínica",
        "color": "#e0527a",
        "emoji": "🩸",
    },
    {
        "folder": "Farmacologia",
        "id": "farmacologia",
        "name": "Farmacología",
        "color": "#2f9e6b",
        "emoji": "💊",
    },
    {
        "folder": "Metodologia investigacion",
        "id": "metodologia-investigacion",
        "name": "Metodología de la Investigación",
        "color": "#d68f1f",
        "emoji": "📊",
    },
    {
        "folder": "Microbiologia y parasitologia clinica",
        "id": "microbiologia-parasitologia",
        "name": "Microbiología y Parasitología Clínica",
        "color": "#1f9bd6",
        "emoji": "🦠",
    },
    {
        "folder": "tecnologia farmaceutica",
        "id": "tecnologia-farmaceutica",
        "name": "Tecnología Farmacéutica",
        "color": "#5c6bc0",
        "emoji": "⚗️",
    },
]

# Carpetas que nunca se indexan (config de herramientas, papeleras, fuentes
# intermedias ya derivadas en otros documentos)
DISCARD_DIR_EXACT = {
    ".claude", "extracted", "_extraidos", "_fuentes_txt",
    "__pycache__", ".git", "node_modules",
}
DISCARD_DIR_SUBSTRING = {"duplicad"}

# Extensiones que nunca son "material de estudio"
DISCARD_EXTENSIONS = {".ps1", ".sh", ".py", ".pyc"}
DISCARD_FILENAMES = {"manifiesto.md", "settings.local.json"}
DISCARD_FILENAME_PREFIXES = ("_leeme",)

RESOURCE_TYPE_LABELS = {
    "guia_docente": "Guía docente",
    "guia_estudio": "Guía de estudio",
    "chuleta": "Chuleta",
    "ficha": "Ficha académica",
    "apuntes": "Apuntes",
    "video": "Vídeo",
    "audio": "Audio",
    "flashcards": "Flashcards",
    "simulador": "Simulador",
    "test": "Test",
    "examen": "Examen",
    "practica": "Práctica",
    "seminario": "Seminario",
    "tarea": "Tarea",
    "plantilla": "Plantilla",
    "ejemplo": "Ejemplo de compañero",
    "excel": "Excel",
    "imagen": "Imagen",
    "otro": "Documento",
}

TOPIC_TOKEN_RE = re.compile(
    r"(Tema|Bloque|Pr[aá]ctica)\s*0*(\d+)(?:\s*[-–]\s*0*(\d+))?",
    re.IGNORECASE,
)

ROMAN_TO_ARABIC = {
    "I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8,
    "IX": 9, "X": 10, "XI": 11, "XII": 12, "XIII": 13, "XIV": 14, "XV": 15,
    "XVI": 16, "XVII": 17, "XVIII": 18, "XIX": 19, "XX": 20,
}


# ---------------------------------------------------------------------------
# Utilidades generales
# ---------------------------------------------------------------------------

def strip_accents(text):
    nfkd = unicodedata.normalize("NFKD", text)
    return "".join(c for c in nfkd if not unicodedata.combining(c))


def read_text(path):
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        try:
            return path.read_text(encoding="latin-1")
        except Exception:
            return ""
    except Exception:
        return ""


def strip_html_tags(html):
    html = re.sub(r"<script[^>]*>.*?</script>", " ", html, flags=re.S | re.I)
    html = re.sub(r"<style[^>]*>.*?</style>", " ", html, flags=re.S | re.I)
    html = re.sub(r"<[^>]+>", " ", html)
    return re.sub(r"\s+", " ", html)


def rel_from_app(path):
    """Ruta relativa a CENTRAL_ESTUDIO/ (para usar como href en la web)."""
    rel_from_base = path.resolve().relative_to(BASE_DIR.resolve())
    return "../" + rel_from_base.as_posix()


def rel_from_base_dir(path):
    return path.resolve().relative_to(BASE_DIR.resolve()).as_posix()


def is_discarded_dir(name):
    lname = name.lower()
    if lname in DISCARD_DIR_EXACT:
        return True
    return any(sub in lname for sub in DISCARD_DIR_SUBSTRING)


def is_discarded_file(path):
    if path.suffix.lower() in DISCARD_EXTENSIONS:
        return True
    lname = path.name.lower()
    if lname in DISCARD_FILENAMES:
        return True
    if lname.startswith(DISCARD_FILENAME_PREFIXES):
        return True
    return False


# ---------------------------------------------------------------------------
# Deteccion de temas ("Tema N", "Bloque N", "Practica N") en texto
# ---------------------------------------------------------------------------

def find_topic_tokens(text):
    results = []
    for m in TOPIC_TOKEN_RE.finditer(text):
        prefix = m.group(1).lower()
        prefix = "practica" if prefix.startswith("pr") else prefix
        nums = [int(m.group(2))]
        if m.group(3):
            nums.append(int(m.group(3)))
        results.append((prefix, nums))
    return results


def topic_key(prefix, nums):
    return f"{prefix}-" + "-".join(str(n) for n in nums)


def resolve_topic_keys(tokens, topic_lookup):
    resolved = set()
    for prefix, nums in tokens:
        compound = topic_key(prefix, nums)
        if compound in topic_lookup:
            resolved.add(topic_lookup[compound])
            continue
        for n in nums:
            single = topic_key(prefix, [n])
            if single in topic_lookup:
                resolved.add(topic_lookup[single])
    return resolved


# ---------------------------------------------------------------------------
# Extraccion de texto (para clasificacion por contenido)
# ---------------------------------------------------------------------------

def extract_pdf_text(path, max_pages=40, max_chars=250_000):
    if PdfReader is None:
        return ""
    try:
        reader = PdfReader(str(path))
    except Exception:
        return ""
    chunks = []
    total = 0
    for i, page in enumerate(reader.pages):
        if i >= max_pages or total >= max_chars:
            break
        try:
            t = page.extract_text() or ""
        except Exception:
            t = ""
        chunks.append(t)
        total += len(t)
    return "\n".join(chunks)


def extract_docx_text(path):
    if docx_lib is None:
        return ""
    try:
        d = docx_lib.Document(str(path))
        return "\n".join(p.text for p in d.paragraphs)
    except Exception:
        return ""


def extract_text_best_effort(path, sniff_dirs):
    stem = path.stem
    for sniff_dir in sniff_dirs:
        if sniff_dir and sniff_dir.is_dir():
            candidate = sniff_dir / f"{stem}.txt"
            if candidate.exists():
                return read_text(candidate)
    ext = path.suffix.lower()
    if ext == ".pdf":
        return extract_pdf_text(path)
    if ext == ".docx":
        return extract_docx_text(path)
    if ext in (".txt", ".md"):
        return read_text(path)
    if ext == ".html":
        return strip_html_tags(read_text(path))
    return ""


def find_topics_by_number(text, topics, warn_ratio=0.6):
    if not text:
        return set()
    text_upper = text.upper()
    found = set()
    for t in topics:
        prefix_word = t["prefix"].upper()
        if prefix_word == "PRACTICA":
            prefix_word = "PR[AÁ]CTICA"
        hit = False
        for n in t["numbers"]:
            pattern = rf"\b{prefix_word}\s*0*{n}\b"
            if re.search(pattern, text_upper):
                hit = True
                break
            if t["prefix"] == "bloque":
                roman = next((r for r, a in ROMAN_TO_ARABIC.items() if a == n), None)
                if roman and re.search(rf"\bBLOQUE\s+{roman}\b", text_upper):
                    hit = True
                    break
        if hit:
            found.add(t["key"])
    # Si el documento "menciona" casi todos los temas (p.ej. un indice/TOC),
    # la señal no es fiable -> mejor no clasificar automaticamente.
    if topics and len(found) / len(topics) >= warn_ratio and len(topics) > 3:
        return set()
    return found


STOPWORDS_KEYWORDS = {
    "PRIMER", "SEGUNDO", "TERCER", "CUARTO", "PARCIAL", "TEMA", "BLOQUE",
    "PRACTICA", "PRÁCTICA", "INTRODUCCION", "INTRODUCCIÓN", "GENERAL",
    "GENERALES", "FUNDAMENTOS", "REPASO", "RESUMEN", "ESTUDIO", "EXAMEN",
    "LABORATORIO", "EJERCICIOS", "CALCULOS", "CÁLCULOS", "TEORIA", "TEORÍA",
    "SEMINARIO", "CONTENIDO", "MATERIAL", "APUNTES", "DOCUMENTO", "CLASE",
    "GUION", "GUIÓN", "ASIGNATURA",
}


def raw_title_words(topic):
    words = set()
    for text in [topic["title"]] + topic["subtitles"]:
        for w in re.findall(r"[A-Za-zÁÉÍÓÚÑáéíóúñ]{6,}", text):
            w_norm = strip_accents(w.upper())
            if w_norm not in STOPWORDS_KEYWORDS:
                words.add(w_norm)
    return words


def build_unique_keywords(topics, subject_name):
    """Palabras del titulo de cada tema que NO aparecen en el titulo de
    ningun otro tema de la misma asignatura (evita falsos positivos con
    palabras genericas como 'quimica' cuando esa es la propia asignatura)."""
    subject_words = {strip_accents(w.upper()) for w in re.findall(r"[A-Za-zÁÉÍÓÚÑáéíóúñ]{6,}", subject_name)}
    word_to_topics = {}
    per_topic_words = {}
    for t in topics:
        words = raw_title_words(t) - subject_words
        per_topic_words[t["key"]] = words
        for w in words:
            word_to_topics.setdefault(w, set()).add(t["key"])
    unique_kw = {}
    for t in topics:
        unique_kw[t["key"]] = {w for w in per_topic_words[t["key"]] if len(word_to_topics[w]) == 1}
    return unique_kw


def find_topics_by_keywords(text, topics, unique_keywords, min_hits=2):
    """Respaldo cuando el numero de tema en el contenido no coincide con la
    numeracion canonica (p.ej. un documento dice 'TEMA 4' pero la asignatura
    numera por 'Bloque'), o cuando el nombre del archivo usa un apodo interno
    (p.ej. 'LAD' = LADME) en vez del numero de tema."""
    if not text:
        return set()
    text_norm = strip_accents(text.upper())
    scores = {}
    for t in topics:
        kws = unique_keywords.get(t["key"])
        if not kws:
            continue
        hits = sum(1 for k in kws if k in text_norm)
        if hits >= min_hits:
            scores[t["key"]] = hits
    if not scores:
        return set()
    best = max(scores.values())
    return {k for k, v in scores.items() if v == best}


def find_topics_in_document(text, topics, unique_keywords):
    found = find_topics_by_number(text, topics)
    if found:
        return found, "numero"
    found = find_topics_by_keywords(text, topics, unique_keywords)
    if found:
        return found, "palabras_clave"
    return set(), None


# ---------------------------------------------------------------------------
# Titulos amigables
# ---------------------------------------------------------------------------

VERSION_SUFFIX_RE = re.compile(
    r"[\s_-]*\(?\b(final\d*|copia|corregid[oa]s?|v\d+|alternativ[oa]|definitiv[oa])\b\)?\s*$",
    re.IGNORECASE,
)


def friendly_title(original_stem, resource_type):
    s = original_stem
    s = re.sub(r"^(wuolah[-_]free[-_]?|wuolah[-_]app[-_ ]?|wuolah[-_])", "", s, flags=re.I)
    s = re.sub(r"^QF_?\d+[a-zA-Z]?_", "", s)
    s = re.sub(r"^DOC-\d{6,8}-WA\d+", "Documento", s)
    s = re.sub(r"\(\d+\)\s*$", "", s).strip()
    s = VERSION_SUFFIX_RE.sub("", s).strip()

    def _tema_fmt(m):
        word = m.group(1)
        word = "Práctica" if word.lower().startswith("pr") else word.capitalize()
        nums = re.sub(r"\s*[-–]\s*", "\x00", m.group(2))
        return f"{word} {nums}"

    s = re.sub(r"(Tema|Bloque|Pr[aá]ctica)\s*0*(\d+(?:\s*[-–]\s*\d+)*)", _tema_fmt, s, flags=re.I)
    s = s.replace("_", " ").replace("-", " - ")
    s = s.replace("\x00", "-")
    s = re.sub(r"\s+", " ", s).strip(" -")
    if not s:
        s = RESOURCE_TYPE_LABELS.get(resource_type, "Documento")
    return s[0].upper() + s[1:] if s else s


# ---------------------------------------------------------------------------
# Clasificacion de tipo de recurso (fase generica)
# ---------------------------------------------------------------------------

def classify_generic_type(rel_path_lower, filename_lower, ext):
    hay = f"{rel_path_lower} {filename_lower}"
    hay_norm = strip_accents(hay)

    def has(*words):
        return any(w in hay_norm for w in words)

    if has("examen", "exam"):
        return "examen"
    if has("test"):
        return "test"
    if has("practica"):
        return "practica"
    if has("seminario"):
        return "seminario"
    if has("tarea", "trabajo"):
        return "tarea"
    if has("plantilla"):
        return "plantilla"
    if has("ejemplo"):
        return "ejemplo"
    if has("ficha") or "guiasestudio" in hay_norm.replace(" ", ""):
        return "ficha"
    if ext == ".mp4" or ext == ".mov" or ext == ".avi":
        return "video"
    if ext in (".xlsx", ".xls", ".csv"):
        return "excel"
    if ext in (".png", ".jpg", ".jpeg", ".gif", ".webp"):
        return "imagen"
    if has("wuolah", "apuntes", "resumen", "chuleta_conceptos"):
        return "apuntes"
    if ext in (".pdf", ".docx", ".doc", ".txt"):
        return "apuntes"
    return "otro"


# ---------------------------------------------------------------------------
# Parseo de guia_estudio/guia.html -> temario canonico
# ---------------------------------------------------------------------------

def find_file_containing(folder, must_have, must_not_have=(), exts=None):
    if not folder.is_dir():
        return None
    best = None
    for f in sorted(folder.iterdir()):
        if not f.is_file():
            continue
        if exts and f.suffix.lower() not in exts:
            continue
        name_norm = strip_accents(f.stem.lower())
        if must_have not in name_norm:
            continue
        if any(bad in name_norm for bad in must_not_have):
            continue
        if best is None or f.suffix.lower() == ".html":
            best = f
    return best


PARCIAL_RE = re.compile(r"[-–—]\s*((?:Primer|Segundo|Tercer|Cuarto)\s*Parcial)", re.IGNORECASE)


def parse_guia_topics(subject_dir):
    guia_dir = subject_dir / "guia_estudio"
    guia_html = find_file_containing(guia_dir, "guia", must_not_have=("chuleta",), exts={".html"})
    if guia_html is None:
        return []
    html = read_text(guia_html)
    topics_by_key = {}
    order = 0
    for m in re.finditer(r'<h1 class="tema"(?:\s+id="[^"]*")?><span class="num">([^<]+)</span>([^<]+)</h1>', html):
        num_text = m.group(1).strip()
        title = m.group(2).strip()
        tokens = find_topic_tokens(num_text)
        if not tokens:
            continue
        prefix, nums = tokens[0]
        key = topic_key(prefix, nums)
        parcial_m = PARCIAL_RE.search(num_text)
        parcial = parcial_m.group(1).strip() if parcial_m else None
        clean_label = PARCIAL_RE.sub("", num_text).strip(" -–—")
        if key in topics_by_key:
            topics_by_key[key]["subtitles"].append(title)
        else:
            order += 1
            topics_by_key[key] = {
                "key": key,
                "prefix": prefix,
                "numbers": nums,
                "numLabel": clean_label,
                "numText": num_text,
                "title": title,
                "subtitles": [title],
                "parcial": parcial,
                "order": order,
                "resources": [],
            }
    return list(topics_by_key.values())


def build_topic_lookup(topics):
    lookup = {}
    for t in topics:
        lookup[t["key"]] = t["key"]
    for t in topics:
        for n in t["numbers"]:
            alias = topic_key(t["prefix"], [n])
            lookup.setdefault(alias, t["key"])
    return lookup


# ---------------------------------------------------------------------------
# MANIFIESTO.md (audio_guiones) -> titulos de pista
# ---------------------------------------------------------------------------

MANIFEST_ROW_RE = re.compile(r"^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*([^|]+?)\s*\|")


def parse_manifest_titles(manifest_path):
    titles = {}
    if not manifest_path.exists():
        return titles
    for line in read_text(manifest_path).splitlines():
        m = MANIFEST_ROW_RE.match(line)
        if m:
            txt_filename, title = m.groups()
            title = title.replace("—", " - ").replace("–", " - ")
            titles[txt_filename] = re.sub(r"\s+", " ", title).strip()
    return titles


# ---------------------------------------------------------------------------
# questions_data.js -> banco de preguntas / flashcards por tema
# ---------------------------------------------------------------------------

def parse_questions_data(path):
    if not path.exists():
        return []
    text = read_text(path)
    m = re.search(r"=\s*(\[.*\])\s*;?\s*$", text, re.DOTALL)
    if not m:
        return []
    try:
        return json.loads(m.group(1))
    except Exception:
        return []


def normalize_title(text):
    return re.sub(r"[^a-z0-9]+", "", strip_accents(text.lower()))


def build_flashcards_by_topic(questions, topics):
    """Para cada tema devuelve cuantas preguntas tiene y, crucialmente, el
    valor EXACTO (tal cual, sin normalizar) del campo "tema" de cada
    pregunta -- lo necesita el enlace directo al simulador, que filtra por
    igualdad exacta de cadena, no por una version normalizada."""
    title_index = {}
    for t in topics:
        for candidate in t["subtitles"] + [t["title"]]:
            title_index[normalize_title(candidate)] = t["key"]

    result = {}
    for q in questions:
        tema_text = q.get("tema", "")
        key = title_index.get(normalize_title(tema_text))
        if key is None:
            # intento parcial: castellano "tema" suele ser subcadena
            for norm_title, tkey in title_index.items():
                if norm_title and (norm_title in normalize_title(tema_text) or normalize_title(tema_text) in norm_title):
                    key = tkey
                    break
        if key is None:
            # ultimo intento: numero de tema en el propio texto
            tokens = find_topic_tokens(tema_text)
            if tokens:
                prefix, nums = tokens[0]
                candidate_key = topic_key(prefix, nums)
                if any(t["key"] == candidate_key for t in topics):
                    key = candidate_key
        if key is None:
            continue
        entry = result.setdefault(key, {"count": 0, "temas": set()})
        entry["count"] += 1
        entry["temas"].add(tema_text)
    return result


# ---------------------------------------------------------------------------
# Construccion de recursos individuales
# ---------------------------------------------------------------------------

class ResourceBuilder:
    def __init__(self, subject):
        self.subject = subject
        self.resources = []
        self.problems = []

    def make_id(self, path, discriminator=None):
        base = f"{self.subject['id']}::{rel_from_base_dir(path)}"
        if discriminator:
            base += f"::{discriminator}"
        return base

    def add(self, path, rtype, title, topic_keys=None, extra=None, discriminator=None):
        try:
            stat = path.stat()
            size = stat.st_size
        except OSError:
            size = None
        res = {
            "id": self.make_id(path, discriminator),
            "type": rtype,
            "title": title,
            "originalName": path.name,
            "path": rel_from_app(path),
            "topics": sorted(topic_keys) if topic_keys else [],
            "sizeBytes": size,
        }
        if extra:
            res.update(extra)
        self.resources.append(res)
        return res


def audio_duration_seconds(path):
    try:
        return round(MP3(str(path)).info.length)
    except Exception:
        return None


def process_audio_guiones(subject_dir, topics, topic_lookup, builder, claimed):
    audio_dir = subject_dir / "audio_guiones"
    mp3_dir = audio_dir / "mp3"
    if not mp3_dir.is_dir():
        return
    manifest_titles = parse_manifest_titles(audio_dir / "MANIFIESTO.md")

    for f in sorted(audio_dir.rglob("*")):
        if f.is_file():
            claimed.add(f.resolve())

    for mp3_path in sorted(mp3_dir.glob("*.mp3")):
        txt_key = mp3_path.stem + ".txt"
        title = manifest_titles.get(txt_key)
        tokens = find_topic_tokens(mp3_path.stem)
        topic_keys = resolve_topic_keys(tokens, topic_lookup)
        if not title:
            title = friendly_title(mp3_path.stem, "audio")

        guion_path = audio_dir / txt_key
        extra = {
            "durationSeconds": audio_duration_seconds(mp3_path),
        }
        if guion_path.exists():
            extra["guionPath"] = rel_from_app(guion_path)

        res = builder.add(mp3_path, "audio", title, topic_keys, extra)
        for key in topic_keys:
            for t in topics:
                if t["key"] == key:
                    t["resources"].append(res["id"])


CHULETA_SECTION_RE = re.compile(r'<div class="section-title">([^<]+)</div>')


def find_matching_topic_key(text, topics, topic_lookup):
    """Empareja el titulo de una seccion de guia/chuleta con un tema.
    Primero intenta un token explicito ('Tema 3', 'Bloque 2'...); si no lo
    hay (la chuleta suele agrupar por concepto, no por tema), cae a una
    coincidencia de texto contra el titulo/subtitulos del tema -- solo si
    uno contiene enteramente al otro, para no enlazar temas por error."""
    tokens = find_topic_tokens(text)
    if tokens:
        keys = resolve_topic_keys(tokens, topic_lookup)
        return next(iter(keys)) if len(keys) == 1 else None
    norm_text = normalize_title(text)
    if not norm_text:
        return None
    best_key, best_len = None, 0
    for t in topics:
        for candidate in [t["title"]] + t["subtitles"]:
            norm_c = normalize_title(candidate)
            if norm_c and len(norm_c) >= 8 and (norm_c in norm_text or norm_text in norm_c):
                if len(norm_c) > best_len:
                    best_key, best_len = t["key"], len(norm_c)
    return best_key


def parse_chuleta_sections(chuleta_html_path, topics, topic_lookup):
    """{topic_key: texto_de_la_seccion} usando el primer bloque de la
    chuleta que se pueda emparejar con cada tema. Si la chuleta agrupa
    varios temas en un solo bloque (frecuente), ese bloque no se
    empareja con ninguno -- mejor no enlazar que enlazar mal."""
    html = read_text(chuleta_html_path)
    result = {}
    for m in CHULETA_SECTION_RE.finditer(html):
        text = m.group(1).strip()
        key = find_matching_topic_key(text, topics, topic_lookup)
        if key and key not in result:
            result[key] = text
    return result


def text_fragment_href(base_href, target_text):
    """Enlace directo a la seccion exacta de un guia.html/chuleta.html
    usando "Scroll To Text Fragment" (#:~:text=...), soportado por
    Chrome/Edge. No requiere tocar el HTML original: el navegador busca
    el texto y hace scroll+resalta el sitio el solo. Si el navegador no
    lo soporta, sencillamente abre el documento por arriba como antes."""
    return f"{base_href}#:~:text={quote(target_text, safe='')}"


def process_guia_estudio_bundle(subject_dir, builder, general_resources, topics, topic_lookup):
    guia_dir = subject_dir / "guia_estudio"
    if not guia_dir.is_dir():
        return set()
    claimed = set()
    guia_html = find_file_containing(guia_dir, "guia", must_not_have=("chuleta",), exts={".html"})
    guia_pdf = find_file_containing(guia_dir, "guia", must_not_have=("chuleta",), exts={".pdf"})
    chuleta_html = find_file_containing(guia_dir, "chuleta", exts={".html"})
    chuleta_pdf = find_file_containing(guia_dir, "chuleta", exts={".pdf"})

    if guia_html or guia_pdf:
        primary = guia_html or guia_pdf
        extra = {}
        if guia_pdf and guia_pdf != primary:
            extra["altPath"] = rel_from_app(guia_pdf)
        res = builder.add(primary, "guia_estudio", "Guía de estudio", extra=extra)
        general_resources.append(res["id"])
        for f in (guia_html, guia_pdf):
            if f:
                claimed.add(f.resolve())

        if guia_html:
            # El temario entero viene de las cabeceras de guia.html, asi que
            # todos los temas tienen aqui un enlace directo a su seccion.
            # El objetivo es el "numText" tal cual aparece en el <span
            # class="num"> del <h1> (p.ej. "Tema 6 — Segundo Parcial"): la
            # portada tiene un indice ("Contenido") que repite "Tema N —
            # Titulo" solo con el titulo (sin el sufijo de parcial ni el
            # propio numero en algunas asignaturas), asi que el numText
            # completo no coincide con esa entrada del indice y el
            # navegador salta directo a la cabecera real de la seccion.
            base_href = rel_from_app(guia_html)
            for t in topics:
                target = t.get("numText") or t.get("numLabel")
                if not target:
                    continue
                tres = builder.add(
                    guia_html, "guia_estudio", "Ver en la guía de estudio",
                    topic_keys=[t["key"]],
                    extra={"path": text_fragment_href(base_href, target)},
                    discriminator=f"topic-{t['key']}",
                )
                t["resources"].append(tres["id"])

    if chuleta_html or chuleta_pdf:
        primary = chuleta_html or chuleta_pdf
        extra = {}
        if chuleta_pdf and chuleta_pdf != primary:
            extra["altPath"] = rel_from_app(chuleta_pdf)
        res = builder.add(primary, "chuleta", "Chuleta de mnemotecnias", extra=extra)
        general_resources.append(res["id"])
        for f in (chuleta_html, chuleta_pdf):
            if f:
                claimed.add(f.resolve())

        if chuleta_html:
            base_href = rel_from_app(chuleta_html)
            sections = parse_chuleta_sections(chuleta_html, topics, topic_lookup)
            for t in topics:
                text = sections.get(t["key"])
                if not text:
                    continue
                tres = builder.add(
                    chuleta_html, "chuleta", "Ver en la chuleta de mnemotecnias",
                    topic_keys=[t["key"]],
                    extra={"path": text_fragment_href(base_href, text)},
                    discriminator=f"topic-{t['key']}",
                )
                t["resources"].append(tres["id"])

    for f in guia_dir.iterdir():
        if f.is_file():
            claimed.add(f.resolve())
    return claimed


def process_simulador_bundle(subject_dir, topics, builder, general_resources):
    sim_dir = subject_dir / "simulador"
    claimed = set()
    if not sim_dir.is_dir():
        return claimed, {}
    index_html = sim_dir / "index.html"
    entry = index_html if index_html.exists() else next(iter(sorted(sim_dir.glob("*.html"))), None)
    questions_path = sim_dir / "questions_data.js"
    questions = parse_questions_data(questions_path)

    if entry:
        res = builder.add(
            entry, "simulador", "Simulador de examen",
            extra={"questionCount": len(questions)},
            discriminator="simulador",
        )
        general_resources.append(res["id"])

    for f in sim_dir.iterdir():
        if f.is_file():
            claimed.add(f.resolve())

    flashcard_counts = build_flashcards_by_topic(questions, topics) if questions else {}
    return claimed, flashcard_counts


def process_guia_docente(subject_dir, builder, general_resources, claimed):
    for f in subject_dir.iterdir():
        if not f.is_file() or f in claimed:
            continue
        name_norm = strip_accents(f.name.lower())
        if f.suffix.lower() == ".pdf" and ("programa" in name_norm or "guia_docente" in name_norm or "guiadocente" in name_norm or "syllabus" in name_norm):
            res = builder.add(f, "guia_docente", "Guía docente oficial")
            general_resources.append(res["id"])
            claimed.add(f.resolve())


def build_flashcard_resources(subject_dir, topics, flashcard_data, builder):
    sim_dir = subject_dir / "simulador"
    index_html = sim_dir / "index.html"
    if not index_html.exists() or not flashcard_data:
        return
    for t in topics:
        info = flashcard_data.get(t["key"])
        if not info or not info["count"]:
            continue
        temas_ordenados = sorted(info["temas"])

        # Flashcards: enlace directo a modo repaso (SRS), filtrado a este tema.
        res = builder.add(
            index_html, "flashcards", f"Flashcards — {info['count']} preguntas",
            topic_keys={t["key"]},
            extra={"questionCount": info["count"], "shared": True},
            discriminator=f"flashcards-{t['key']}",
        )
        query = urlencode([("modo", "srs")] + [("tema", tema) for tema in temas_ordenados])
        res["path"] = f"{res['path']}?{query}"
        t["resources"].append(res["id"])

        # Simulador en modo evaluacion: mismo tema, cronometro activado y sin
        # revelar respuesta al momento -- una evaluacion de verdad, no repaso.
        res_eval = builder.add(
            index_html, "simulador", f"Evaluación — {info['count']} preguntas",
            topic_keys={t["key"]},
            extra={"questionCount": info["count"], "shared": True},
            discriminator=f"evaluacion-{t['key']}",
        )
        query_eval = urlencode([("modo", "exam")] + [("tema", tema) for tema in temas_ordenados])
        res_eval["path"] = f"{res_eval['path']}?{query_eval}"
        t["resources"].append(res_eval["id"])


DUPLICATE_NOTE_RE = re.compile(r"transcrita\s+dos\s+veces", re.IGNORECASE)


def has_duplicate_note(path):
    """Algunas fichas llevan una nota propia diciendo que son la misma clase
    transcrita dos veces por un fallo del reconocimiento de voz -- lo dice el
    documento, no es una suposicion nuestra. Solo miramos la primera pagina
    (PDF) o el arranque del documento (docx): esa nota siempre va al principio."""
    ext = path.suffix.lower()
    if ext == ".pdf":
        text = extract_pdf_text(path, max_pages=1, max_chars=3000)
    elif ext == ".docx":
        text = extract_docx_text(path)[:3000]
    else:
        return False
    return bool(DUPLICATE_NOTE_RE.search(text or ""))


def strip_chatgpt_suffix(stem_key):
    return re.sub(r"[_\s]*chatgpt$", "", stem_key)


def process_generic_files(subject_dir, topics, topic_lookup, builder, claimed, unclassified, sniff_dirs, unique_keywords):
    candidates = []
    for f in sorted(subject_dir.rglob("*")):
        if f.is_dir():
            continue
        resolved = f.resolve()
        if resolved in claimed:
            continue
        if any(is_discarded_dir(part) for part in f.relative_to(subject_dir).parts[:-1]):
            continue
        if is_discarded_file(f):
            continue
        if f.suffix.lower() not in {
            ".pdf", ".docx", ".doc", ".txt", ".md", ".html",
            ".xlsx", ".xls", ".csv", ".png", ".jpg", ".jpeg", ".gif", ".pptx",
        }:
            continue

        rel_lower = f.relative_to(subject_dir).as_posix().lower()
        rtype = classify_generic_type(rel_lower, f.name.lower(), f.suffix.lower())
        is_chatgpt = "chatgpt" in rel_lower
        is_dup = (not is_chatgpt) and has_duplicate_note(f)

        tokens = find_topic_tokens(f.stem)
        topic_keys = resolve_topic_keys(tokens, topic_lookup)
        topic_source = "nombre" if topic_keys else None
        if not topic_keys and f.suffix.lower() in (".pdf", ".docx", ".txt", ".md", ".html"):
            text = extract_text_best_effort(f, sniff_dirs)
            topic_keys, method = find_topics_in_document(text, topics, unique_keywords)
            if topic_keys:
                topic_source = "contenido:" + method

        candidates.append({
            "path": f, "rtype": rtype, "rel_lower": rel_lower,
            "topic_keys": topic_keys, "topic_source": topic_source,
            "is_chatgpt": is_chatgpt, "is_dup": is_dup,
            "stem_key": strip_accents(f.stem.lower()), "ia_path": None,
        })

    # Herencia entre "hermanos": mismo nombre base y misma carpeta -> mismo
    # tema, es evidencia real, no una suposicion.
    siblings = {}
    for c in candidates:
        siblings.setdefault(c["stem_key"], []).append(c)
    for group in siblings.values():
        combined = set()
        for c in group:
            combined |= c["topic_keys"]
        if combined:
            for c in group:
                if not c["topic_keys"]:
                    c["topic_keys"] = combined
                    c["topic_source"] = "heredado_de_archivo_hermano"

    # Transcripciones duplicadas (la propia ficha avisa de que es la misma
    # clase transcrita dos veces) -> se descartan del todo, junto con su
    # version IA si la tiene (reescribir un duplicado no deja de serlo).
    # Version IA (carpeta chatgpt) de un archivo que SI se queda -> no se
    # anade como fila aparte, se cuelga como enlace secundario del original.
    duplicate_stems = {c["stem_key"] for c in candidates if c["is_dup"]}
    originals_by_stem = {
        c["stem_key"]: c for c in candidates if not c["is_chatgpt"] and not c["is_dup"]
    }

    final_candidates = []
    for c in candidates:
        if c["is_dup"]:
            continue
        if c["is_chatgpt"]:
            base_stem = strip_chatgpt_suffix(c["stem_key"])
            if base_stem in duplicate_stems:
                continue
            original = originals_by_stem.get(base_stem)
            if original:
                original["ia_path"] = c["path"]
                continue
        final_candidates.append(c)

    for c in final_candidates:
        f = c["path"]
        rtype = c["rtype"]
        topic_keys = c["topic_keys"]
        variant = "chatgpt" if c["is_chatgpt"] else None

        title = friendly_title(f.stem, rtype)
        if variant == "chatgpt":
            title += " (versión IA)"

        extra = {}
        if c["topic_source"]:
            extra["topicSource"] = c["topic_source"]
        if variant:
            extra["variant"] = variant
        if c["ia_path"]:
            extra["iaPath"] = rel_from_app(c["ia_path"])

        res = builder.add(f, rtype, title, topic_keys, extra)

        if topic_keys:
            for key in topic_keys:
                for t in topics:
                    if t["key"] == key:
                        t["resources"].append(res["id"])
        else:
            unclassified.append(res["id"])


# ---------------------------------------------------------------------------
# Procesamiento por asignatura
# ---------------------------------------------------------------------------

def process_subject(subject, report):
    subject_dir = BASE_DIR / subject["folder"]
    if not subject_dir.is_dir():
        report["notes"].append(f"{subject['name']}: no se encontró la carpeta '{subject['folder']}'.")
        return None

    topics = parse_guia_topics(subject_dir)
    topics.sort(key=lambda t: (t["numbers"][0], t["order"]))
    topic_lookup = build_topic_lookup(topics)

    builder = ResourceBuilder(subject)
    general_resources = []
    claimed = set()

    process_audio_guiones(subject_dir, topics, topic_lookup, builder, claimed)
    claimed |= process_guia_estudio_bundle(subject_dir, builder, general_resources, topics, topic_lookup)
    sim_claimed, flashcard_counts = process_simulador_bundle(subject_dir, topics, builder, general_resources)
    claimed |= sim_claimed
    process_guia_docente(subject_dir, builder, general_resources, claimed)
    build_flashcard_resources(subject_dir, topics, flashcard_counts, builder)

    sniff_dirs = [subject_dir / "extracted", subject_dir / "_extraidos", subject_dir / "_fuentes_txt"]
    unclassified = []
    unique_keywords = build_unique_keywords(topics, subject["name"])
    process_generic_files(subject_dir, topics, topic_lookup, builder, claimed, unclassified, sniff_dirs, unique_keywords)

    for t in topics:
        t["resources"] = sorted(set(t["resources"]))

    total_resources = len(builder.resources)
    report["total_found"] += total_resources
    report["per_subject"][subject["name"]] = {
        "resources": total_resources,
        "topics": len(topics),
        "unclassified": len(unclassified),
    }
    if builder.problems:
        report["problems"].extend(builder.problems)

    return {
        "id": subject["id"],
        "name": subject["name"],
        "folder": subject["folder"],
        "color": subject["color"],
        "emoji": subject["emoji"],
        "topics": sorted(topics, key=lambda t: (t["numbers"][0], t["order"])),
        "generalResources": general_resources,
        "unclassified": unclassified,
        "resources": {r["id"]: r for r in builder.resources},
    }


def write_report(report, index):
    lines = []
    lines.append("=" * 72)
    lines.append("INFORME - Generacion del indice academico (CENTRAL_ESTUDIO)")
    lines.append("=" * 72)
    lines.append(f"Generado: {report['generated_at']}")
    lines.append("")
    lines.append(f"Total de recursos indexados: {report['total_found']}")
    lines.append("")
    lines.append("Por asignatura:")
    for name, stats in report["per_subject"].items():
        lines.append(
            f"  - {name}: {stats['resources']} recursos, {stats['topics']} temas, "
            f"{stats['unclassified']} sin clasificar por tema"
        )
    if report["problems"]:
        lines.append("")
        lines.append(f"Archivos con problemas ({len(report['problems'])}):")
        for p in report["problems"]:
            lines.append(f"  - {p}")
    if report["notes"]:
        lines.append("")
        lines.append("Notas:")
        for n in report["notes"]:
            lines.append(f"  - {n}")
    lines.append("")
    lines.append("Detalle de 'sin clasificar por tema' (revisables a mano en la web):")
    for subj in index["subjects"]:
        if subj["unclassified"]:
            lines.append(f"\n  [{subj['name']}] ({len(subj['unclassified'])})")
            for rid in subj["unclassified"]:
                r = subj["resources"][rid]
                lines.append(f"    - {r['originalName']}  ({r['type']})")
    text = "\n".join(lines)
    print(text)
    (DATA_DIR / "INFORME_INDICE.txt").write_text(text, encoding="utf-8")


def main():
    report = {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "total_found": 0,
        "per_subject": {},
        "problems": [],
        "notes": [],
    }

    subjects_out = []
    for subject in SUBJECTS:
        result = process_subject(subject, report)
        if result:
            subjects_out.append(result)

    index = {
        "generatedAt": report["generated_at"],
        "subjects": subjects_out,
        "resourceTypeLabels": RESOURCE_TYPE_LABELS,
    }

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    (DATA_DIR / "academic_index.json").write_text(
        json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    js_content = "window.ACADEMIC_INDEX = " + json.dumps(index, ensure_ascii=False) + ";\n"
    (DATA_DIR / "academic_index.js").write_text(js_content, encoding="utf-8")

    # Version de cache-busting en index.html: sin esto, el navegador (o el
    # CDN de GitHub Pages) puede seguir sirviendo un academic_index.js
    # cacheado despues de actualizar el indice, y la web parece "no
    # actualizada" aunque el commit sea el correcto.
    version = re.sub(r"[^0-9]", "", report["generated_at"])
    index_html_path = APP_DIR / "index.html"
    if index_html_path.exists():
        html = index_html_path.read_text(encoding="utf-8")
        new_html = re.sub(
            r'src="data/academic_index\.js(?:\?v=[^"]*)?"',
            f'src="data/academic_index.js?v={version}"',
            html,
        )
        if new_html != html:
            index_html_path.write_text(new_html, encoding="utf-8")

    write_report(report, index)


if __name__ == "__main__":
    main()
