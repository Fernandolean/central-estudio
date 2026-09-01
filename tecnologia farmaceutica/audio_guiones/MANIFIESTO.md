# Audio-repaso — Tecnología Farmacéutica (Primer Parcial)

Generado a partir del material en `c:\Users\fleandro\Videos\FARMACIA3\tecnologia farmaceutica`. Contiene 12 pistas, duración total estimada de 1 hora y 49 minutos (estimación a 165 palabras/minuto de locución).

Para generar el audio: instala `edge-tts` (`pip install edge-tts`) si no lo tienes, y ejecuta `generar_audios.ps1` (Windows) o `generar_audios.sh` (macOS/Linux) desde esta misma carpeta. Los MP3 se guardan en `mp3/`. Voz por defecto: `es-ES-AlvaroNeural` — para probar otras, `edge-tts --list-voices`.

> Aviso sobre el tema 12 (Filtración): es el bloque con menos material de toda la asignatura en las fuentes disponibles (solo 5 preguntas en el simulador, ninguna repetida entre convocatorias, y las mismas ideas de vocabulario y de la trampa "gas-gas" en los tres exámenes de años anteriores). La pista quedó por debajo del rango habitual, 1054 palabras en vez de 1300-1900, a propósito: es preferible una pista más corta y sin relleno que estirarla artificialmente repitiendo lo mismo con otras palabras. Si tienes apuntes propios de filtración/extracción/granulación, añádelos a la carpeta y se puede regenerar esta pista con más profundidad.

## Índice de pistas

| # | Archivo | Tema | Duración est. | Fuentes |
|---|---------|------|----------------|---------|
| 01 | `01_Tema1_introduccion-tecnologia-farmaceutica.txt` | Introducción a la Tecnología Farmacéutica | 8 min | `guia_estudio/guia.html` (Tema 1), `simulador/questions_data.js` (12 preguntas, 10 repetidas) |
| 02 | `02_Tema2_legislacion-farmaceutica-garantias-medicamento.txt` | Legislación farmacéutica y medicamentos legalmente reconocidos | 10 min | `guia_estudio/guia.html` (Tema 2), `simulador/questions_data.js` (29 preguntas, 22 repetidas), `guia_estudio/chuleta.html` (mnemotecnia de las 5 garantías) |
| 03 | `03_Tema3_historia-de-la-farmacia.txt` | Historia de la Farmacia | 8 min | `guia_estudio/guia.html` (Tema 3), `simulador/questions_data.js` (19 preguntas, 7 repetidas), `guia_estudio/chuleta.html` (mnemotecnia Hahnemann/Paracelso) |
| 04 | `04_Tema4_preformulacion-y-biofarmacia.txt` | Preformulación y Biofarmacia | 8 min | `guia_estudio/guia.html` (Tema 4), `simulador/questions_data.js` (16 preguntas, 7 repetidas) |
| 05 | `05_Tema5_estado-solido-cristalinidad-polimorfismo.txt` | Estado sólido: cristalinidad y polimorfismo | 11 min | `guia_estudio/guia.html` (Tema 5), `simulador/questions_data.js` (13 preguntas, 3 repetidas) |
| 06 | `06_Tema6_reduccion-tamano-particula-fundamentos.txt` | Reducción de tamaño de partícula: fundamentos | 9 min | `guia_estudio/guia.html` (Tema 6), `simulador/questions_data.js` (23 preguntas, 17 repetidas) |
| 07 | `07_Tema7_dispositivos-de-pulverizacion.txt` | Dispositivos de pulverización | 11 min | `guia_estudio/guia.html` (Tema 7), `simulador/questions_data.js` (43 preguntas, 18 repetidas — el bloque con más preguntas de toda la asignatura), `guia_estudio/chuleta.html` (mnemotecnias de molinos y tamaños) |
| 08 | `08_Tema8_tamano-forma-particula-granulometria.txt` | Tamaño y forma de partícula. Granulometría | 10 min | `guia_estudio/guia.html` (Tema 8), `simulador/questions_data.js` (15 preguntas, 6 repetidas, incluye el ejercicio de mediana ya resuelto) |
| 09 | `09_Tema9_propiedades-flujo-de-polvos.txt` | Propiedades de flujo de polvos | 10 min | `guia_estudio/guia.html` (Tema 9), `simulador/questions_data.js` (9 preguntas, 3 repetidas) |
| 10 | `10_Tema10_mezclado-de-solidos.txt` | Mezclado de sólidos | 9 min | `guia_estudio/guia.html` (Tema 10), `simulador/questions_data.js` (9 preguntas, 1 repetida) |
| 11 | `11_Tema11_desecacion-y-liofilizacion.txt` | Desecación y liofilización | 8 min | `guia_estudio/guia.html` (Tema 11), `simulador/questions_data.js` (9 preguntas, 0 repetidas), `guia_estudio/chuleta.html` (mnemotecnia de las fases de Newitt) |
| 12 | `12_Tema12_filtracion.txt` | Filtración | 6 min | `guia_estudio/guia.html` (Tema 12), `simulador/questions_data.js` (5 preguntas, 0 repetidas) |

## Cobertura por bloque/tema

Los 12 temas del temario de la asignatura (mismos nombres y orden que en la guía de estudio y en el simulador de test) quedan cubiertos, uno por pista, sin ningún bloque sin material.

## Cómo se ponderó el contenido

Se usó `simulador/questions_data.js` (esquema `study-kit-builder`, 202 preguntas en total) como fuente de ponderación: se contaron preguntas por tema y, sobre todo, la proporción de preguntas marcadas `"repetida": true` (las que aparecen, en esencia, en dos o tres exámenes reales de convocatorias anteriores). Los temas con mayor proporción de repetidas — Introducción (83%), Legislación (76%) y Reducción de tamaño de partícula (74%) — y el tema con más preguntas en términos absolutos — Dispositivos de pulverización (43) — recibieron el desarrollo más extenso y las preguntas de recuperación activa más cargadas. La guía de estudio (`guia_estudio/guia.html`, ya depurada de las mismas fuentes) fue la base de contenido de cada pista; los tres bancos de exámenes en texto plano (`wuolah-*.txt`) se usaron solo como referencia cruzada puntual, no como fuente reprocesada de cero.
