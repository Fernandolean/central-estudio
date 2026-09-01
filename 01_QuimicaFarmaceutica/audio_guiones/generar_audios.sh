#!/usr/bin/env bash
# Convierte los guiones de esta carpeta (NN_Tema..._descripcion.txt) a MP3
# usando edge-tts.
#
# Instalacion previa (una sola vez):
#     pip install edge-tts
#
# Para ver otras voces disponibles:
#     edge-tts --list-voices
#
# Uso:
#     ./generar_audios.sh
#     VOZ="es-ES-ElviraNeural" ./generar_audios.sh

set -euo pipefail

VOZ="${VOZ:-es-ES-AlvaroNeural}"
CARPETA_SALIDA="${CARPETA_SALIDA:-mp3}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SALIDA="$SCRIPT_DIR/$CARPETA_SALIDA"

if ! command -v edge-tts >/dev/null 2>&1; then
  echo "No se encontro 'edge-tts' en el PATH."
  echo "Instalalo con:  pip install edge-tts"
  echo "Si acabas de instalarlo, abre una terminal nueva para que el PATH se actualice."
  exit 1
fi

mkdir -p "$SALIDA"

shopt -s nullglob
txt_files=("$SCRIPT_DIR"/[0-9][0-9]_*.txt)
shopt -u nullglob

if [ ${#txt_files[@]} -eq 0 ]; then
  echo "No se encontraron pistas .txt (esperaba nombres tipo 01_Tema...txt) en $SCRIPT_DIR"
  exit 0
fi

total=${#txt_files[@]}
echo "Generando $total pista(s) de audio con la voz '$VOZ'..."
echo "(Otras voces disponibles: edge-tts --list-voices)"
echo ""

i=0
for f in "${txt_files[@]}"; do
  i=$((i + 1))
  base="$(basename "$f" .txt)"
  mp3="$SALIDA/$base.mp3"

  if [ -f "$mp3" ]; then
    echo "[$i/$total] $base.mp3 ya existe, se omite."
    continue
  fi

  echo "[$i/$total] $(basename "$f") -> $base.mp3"
  if ! edge-tts --voice "$VOZ" --file "$f" --write-media "$mp3"; then
    echo "  aviso: edge-tts devolvio un error para este archivo, revisa el texto."
  fi
done

echo ""
echo "Listo. MP3 generados en: $SALIDA"
