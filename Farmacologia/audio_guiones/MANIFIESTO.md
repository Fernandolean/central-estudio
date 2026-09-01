# Audio-repaso — Farmacología (3P)

Generado a partir del material en `c:\Users\fleandro\Videos\FARMACIA3\Farmacologia`.
Contiene 13 pistas, duración total estimada de 2 horas y 19 minutos
(estimación a ~165 palabras/minuto de locución).

Para generar el audio: instala `edge-tts` (`pip install edge-tts`) si no lo
tienes, y ejecuta `generar_audios.ps1` (Windows) o `generar_audios.sh`
(macOS/Linux) desde esta misma carpeta. Los MP3 se guardan en `mp3/`. Voz
por defecto: `es-ES-AlvaroNeural` — para probar otras, `edge-tts --list-voices`.

## Índice de pistas

| # | Archivo | Tema | Duración est. |
|---|---------|------|----------------|
| 01 | `01_Tema1_introduccion-a-la-farmacologia.txt` | Introducción a la Farmacología | 10 min |
| 02 | `02_Tema2_farmacocinetica-absorcion.txt` | Farmacocinética: Absorción | 12 min |
| 03 | `03_Tema3_farmacocinetica-distribucion.txt` | Farmacocinética: Distribución | 8 min |
| 04 | `04_Tema4_farmacocinetica-metabolismo-excrecion.txt` | Farmacocinética: Metabolismo y Excreción | 10 min |
| 05 | `05_Tema5_farmacodinamia-dianas-y-receptores.txt` | Farmacodinamia: Dianas y receptores | 10 min |
| 06 | `06_Tema6_farmacodinamia-union-farmaco-receptor.txt` | Farmacodinamia: Unión fármaco-receptor y curvas dosis-respuesta | 12 min |
| 07 | `07_Tema7_sna-fundamentos.txt` | Sistema Nervioso Autónomo: Fundamentos | 12 min |
| 08 | `08_Tema8_sistema-nervioso-parasimpatico.txt` | Sistema Nervioso Parasimpático | 12 min |
| 09 | `09_Tema9_sistema-nervioso-simpatico-receptores.txt` | Sistema Nervioso Simpático (receptores) | 10 min |
| 10 | `10_Tema9_sistema-nervioso-simpatico-farmacos.txt` | Sistema Nervioso Simpático (fármacos) | 9 min |
| 11 | `11_Tema10_bnm-y-anestesicos-generales.txt` | Bloqueantes neuromusculares y anestésicos generales | 11 min |
| 12 | `12_Tema11_snc-neurotransmisores-y-opioides.txt` | Farmacología del SNC: neurotransmisores y analgésicos opioides | 11 min |
| 13 | `13_Tema12-13_aines-fame-y-anticuerpos-monoclonales.txt` | AINEs, FAME y anticuerpos monoclonales | 12 min |

Fuentes: las pistas 01, 02 y 05-13 se generaron en una sesión previa (fuentes
concretas no documentadas en este manifiesto). Las pistas 03 y 04 se
generaron a partir de `guia_estudio/guia.html`, secciones "Tema 3 —
Farmacocinética: Distribución" y "Tema 4 — Farmacocinética: Metabolismo y
Excreción".

## Cobertura por bloque/tema

Los 13 temas del temario detectado en `guia_estudio/guia.html` están
cubiertos, uno por pista (el bloque Sistema Nervioso Simpático se reparte en
dos pistas, 09 y 10, y AINEs/FAME/anticuerpos monoclonales se agrupan en una
sola pista, la 13). No quedan bloques sin cubrir.

## Cómo se ponderó el contenido

Para las pistas 03 y 04 se consultó `simulador/questions_data.js` (esquema
`study-kit-builder`, campos `tema` y `repetida`): Distribución tiene quince
preguntas en el banco y Metabolismo y Excreción tiene veintitrés, el tema
individual más preguntado de todo el simulador, lo que justifica su
tratamiento extenso (recuperación activa con cinco preguntas en lugar de
las cuatro habituales). La ponderación usada en las pistas 01, 02 y 05-13
no quedó documentada en la sesión previa.
