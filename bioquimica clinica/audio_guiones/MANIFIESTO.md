# Audio-repaso — Bioquímica Clínica y Hematología

Generado a partir del material en `C:\Users\fleandro\Videos\FARMACIA3\bioquimica clinica`. Contiene
12 pistas, duración total estimada de 2 horas y 12 minutos (~132 minutos, estimación a 165 palabras/minuto de locución).

Para generar el audio: instala `edge-tts` (`pip install edge-tts`) si no lo
tienes, y ejecuta `generar_audios.ps1` (Windows) o `generar_audios.sh`
(macOS/Linux) desde esta misma carpeta. Los MP3 se guardan en `mp3/`. Voz
por defecto: `es-ES-AlvaroNeural` — para probar otras, `edge-tts --list-voices`.

No hubo bloques con contenido pobre por falta de material aprovechable. La
única fuente puramente visual del temario (una hoja escaneada con dos
ejercicios de cálculo de aclaramiento de creatinina, sin capa de texto) se
transcribió a mano leyéndola como imagen, por ser de una sola página, y
alimenta la pista 10.

## Índice de pistas

| # | Archivo | Tema | Duración est. | Fuentes |
|---|---------|------|----------------|---------|
| 01 | `01_Bloque1_fundamentos-bioquimica-clinica.txt` | Fundamentos de la Bioquímica Clínica: espécimen, fases del proceso analítico, sensibilidad/especificidad | 10 min | `guia_estudio/guia.html` (Bloque 1), `simulador/questions_data.js` (33 preguntas del tema, 19 repetidas) |
| 02 | `02_Bloque2_equilibrio-hidroelectrolitico-acido-base.txt` | Compartimentos, balance hídrico, ejes hormonales, equilibrio ácido-base | 12 min | `guia_estudio/guia.html` (Bloque 2), `simulador/questions_data.js` (38 preguntas, 15 repetidas) |
| 03 | `03_Bloque3_hidratos-carbono-digestion-fructosa-galactosa.txt` | Digestión de hidratos de carbono, alteraciones de fructosa y galactosa | 12 min | `guia_estudio/guia.html` (Bloque 3), `simulador/questions_data.js` (subconjunto de las 83 preguntas del bloque) |
| 04 | `04_Bloque3_hidratos-carbono-glucosa-diabetes.txt` | Metabolismo de la glucosa: diabetes, hipoglucemia, pruebas diagnósticas | 10 min | `guia_estudio/guia.html` (Bloque 3), `simulador/questions_data.js` (subconjunto de las 83 preguntas del bloque) |
| 05 | `05_Bloque3_hidratos-carbono-disacaridos-polisacaridos.txt` | Intolerancias a disacáridos, glucogenosis y mucopolisacaridosis | 10 min | `guia_estudio/guia.html` (Bloque 3), `simulador/questions_data.js` (resto de las 83 preguntas del bloque, 33 repetidas en total) |
| 06 | `06_Bloque4_lipidos-lipoproteinas-dislipemias.txt` | Lipoproteínas, apoproteínas, dislipemias, clasificación de Frederickson | 12 min | `guia_estudio/guia.html` (Bloque 4), `simulador/questions_data.js` (subconjunto de las 50 preguntas del bloque) |
| 07 | `07_Bloque4_lipidos-acidos-grasos-cetonicos-fosfolipidos.txt` | Ácidos grasos, cuerpos cetónicos, triglicéridos, fosfolípidos y esfingolípidos | 12 min | `guia_estudio/guia.html` (Bloque 4), `simulador/questions_data.js` (resto de las 50 preguntas del bloque, 7 repetidas en total) |
| 08 | `08_Bloque5_compuestos-nitrogenados-urea-purinas.txt` | Aminoacidopatías, ciclo de la urea, purinas y pirimidinas | 13 min | `guia_estudio/guia.html` (Bloque 5), `simulador/questions_data.js` (62 preguntas, 6 repetidas) |
| 09 | `09_Bloque6_funcion-hepatica.txt` | Magnitudes bioquímicas hepáticas y enfermedades del hígado | 9 min | `guia_estudio/guia.html` (Bloque 6), `simulador/questions_data.js` (subconjunto de las 59 preguntas del bloque) |
| 10 | `10_Bloque6_funcion-renal-aclaramiento-creatinina.txt` | Función glomerular y tubular, enfermedades renales, cálculo del aclaramiento de creatinina | 12 min | `guia_estudio/guia.html` (Bloque 6), `03_Tema6_Funcion_Renal_calculos/Tema6_calculo_aclaramiento_creatinina.pdf` (transcrito a mano), `simulador/questions_data.js` (resto de las 59 preguntas del bloque, 8 repetidas en total) |
| 11 | `11_Bloque7_proteinas-plasmaticas.txt` | Proteinograma, albúmina, proteínas de fase aguda, enzimología clínica | 11 min | `guia_estudio/guia.html` (Bloque 7), `simulador/questions_data.js` (35 preguntas, 9 repetidas) |
| 12 | `12_Bloque8_hematologia-hemostasia.txt` | Células sanguíneas, índices eritrocitarios, hemostasia, hematopoyesis | 10 min | `guia_estudio/guia.html` (Bloque 8), `simulador/questions_data.js` (40 preguntas, 4 repetidas) |

## Cobertura por bloque/tema

Los 8 bloques oficiales de la asignatura (los mismos que usan `guia_estudio/guia.html` y el simulador de test de `simulador/`) quedan cubiertos íntegramente por al menos una pista:

1. Fundamentos de la Bioquímica Clínica — pista 01
2. Equilibrio Hidroelectrolítico y Ácido-Base — pista 02
3. Metabolismo de los Hidratos de Carbono — pistas 03, 04, 05
4. Metabolismo de los Lípidos — pistas 06, 07
5. Metabolismo de los Compuestos Nitrogenados — pista 08
6. Función Hepática y Renal — pistas 09, 10
7. Proteínas Plasmáticas — pista 11
8. Hematología y Hemostasia — pista 12

No queda ningún bloque del temario sin cubrir.

## Cómo se ponderó el contenido

El número de pistas por bloque y el énfasis dentro de cada una se basó en tres señales combinadas: el campo `repetida: true` de las 400 preguntas de `simulador/questions_data.js` (construido a partir del análisis de varias convocatorias de examen anteriores de esta misma asignatura, con `study-kit-builder`), el volumen de contenido ya sintetizado en `guia_estudio/guia.html`, y los avisos ("callouts") que esa misma guía marca explícitamente como trampas de examen frecuentes. Los bloques de Hidratos de Carbono (83 preguntas, 40% repetidas) y Función Hepática/Renal (59 preguntas) recibieron más pistas por ser los de mayor volumen; Fundamentos y Equilibrio Ácido-Base, aunque más pequeños, se trataron con prioridad alta por tener la proporción de preguntas repetidas más alta de toda la asignatura (57% y 39%). Las explicaciones de por qué cada opción de respuesta es correcta o incorrecta, ya redactadas en `questions_data.js`, se usaron como fuente adicional verificada para engordar el desarrollo y la recuperación activa en los bloques con guía más escueta (Proteínas Plasmáticas y la segunda mitad de Lípidos).
