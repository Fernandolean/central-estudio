# Audio-repaso — Química Farmacéutica

Generado a partir del material en `C:\Users\fleandro\Videos\FARMACIA3\01_QuimicaFarmaceutica`.
Contiene 11 pistas, cubriendo el Primer y Segundo Parcial (Tema 0 a Tema 7·fase I) más
la Práctica 3 de laboratorio — todo el temario dado hasta ahora. Duración total estimada:
**~120 minutos** (19 777 palabras a ~165 palabras/minuto).

Para generar el audio: instala `edge-tts` si no lo tienes todavía —

```
pip install edge-tts
```

— y ejecuta `generar_audios.ps1` (Windows) o `generar_audios.sh` (macOS/Linux) desde esta
misma carpeta. Los MP3 se guardan en `mp3/`. Voz por defecto: `es-ES-AlvaroNeural` — para
escuchar y probar otras voces: `edge-tts --list-voices`.

## Índice de pistas

| # | Archivo | Tema | Palabras | Duración est. | Prioridad | Fuentes |
|---|---------|------|----------|----------------|-----------|---------|
| 01 | `01_Tema0_repaso-quimica-organica.txt` | Tema 0 — Repaso de química orgánica | 1647 | ~10,0 min | Baja | guia.html (Tema 0); 00_TODAS_las_guias_ordenadas.txt |
| 02 | `02_Tema1-2_descubrimiento-nomenclatura-farmacos.txt` | Tema 1-2 — Descubrimiento y nomenclatura de fármacos | 1833 | ~11,1 min | Media | guia.html (Tema 1-2); 00_TODAS_las_guias_ordenadas.txt |
| 03 | `03_Tema3_especiacion-clasificacion-acido-base.txt` | Tema 3 — Especiación y clasificación ácido/base | 1887 | ~11,4 min | Alta | guia.html (Tema 3); questions_data.js (15 preguntas repetidas) |
| 04 | `04_Tema3_ladme-liberacion-absorcion.txt` | Tema 3 — LADME: Liberación y Absorción | 1804 | ~10,9 min | Alta | guia.html (Tema 3 LADME L/A); questions_data.js (10 preguntas repetidas) |
| 05 | `05_Tema3_ladme-distribucion-eliminacion.txt` | Tema 3 — LADME: Distribución y Eliminación | 1899 | ~11,5 min | Media | guia.html (Tema 3 LADME D/E); questions_data.js (8 preguntas repetidas) |
| 06 | `06_Tema4_farmacodinamia-fuerzas-intermoleculares.txt` | Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana | 1780 | ~10,8 min | Alta | guia.html (Tema 4 fuerzas); questions_data.js |
| 07 | `07_Tema4_farmacodinamia-estereoquimica-estereoselectividad.txt` | Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad | 1752 | ~10,6 min | Media | guia.html (Tema 4 estereoquímica); questions_data.js |
| 08 | `08_Tema5_grupo-farmacoforo-modificacion-molecular.txt` | Tema 5 — Grupo farmacóforo y modificación molecular | 1870 | ~11,3 min | Alta | guia.html (Tema 5); questions_data.js (12 preguntas repetidas) |
| 09 | `09_Tema6_enzimas-reacciones-enzimaticas.txt` | Tema 6 — Enzimas y reacciones enzimáticas | 1827 | ~11,1 min | Alta | guia.html (Tema 6); questions_data.js |
| 10 | `10_Tema7-faseI_metabolismo-oxidativo.txt` | Tema 7 (fase I) — Metabolismo oxidativo | 1692 | ~10,3 min | Alta | guia.html (Tema 7 fase I); questions_data.js |
| 11 | `11_Practica3_sintesis-fenitoina-calculos.txt` | Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio) | 1786 | ~10,8 min | Alta | resumen_clase_fenitoina.txt; questions_data.js (12 preguntas repetidas) |

Comprobación de estilo automática sobre las 11 pistas: 0 símbolos prohibidos (viñetas, `#`, `%`, `→`, "pKa" sin convertir), 0 decimales dejados en cifra, marca `[PAUSA 3s]` presente en cada pregunta de recuperación activa (entre 3 y 6 por pista).

## Avisos de contenido (transparencia sobre el material fuente)

- **Pista 07 (estereoquímica)**: la transcripción secundaria contenía una contradicción entre pasadas sobre qué enantiómero del ibuprofeno es el activo. Se resolvió con la farmacología real conocida (S activo, R inactivo con interconversión parcial), que además coincide con la mayoría de las pasadas de esa misma fuente. Para la talidomida, se evitó fijar qué enantiómero (R/S) causa cada efecto, porque la fuente no era consistente en ese detalle — el guion solo afirma lo verificable (un enantiómero sedante, el otro teratógeno).
- **Pista 08 (farmacóforo)**: se recortó deliberadamente el detalle de los efectos electrónicos de los sustituyentes no alquílicos y de la modificación de anillos, por no ser lo más preguntado y para respetar el límite de palabras. El resto del tema asignado quedó cubierto.
- **Pista 11 (Práctica 3)**: la masa teórica de fenitoína (~6 g) no aparece como cifra literal en el resumen de clase — se derivó multiplicando los 24 milimoles de bencilo (dato sí explícito en la fuente) por la masa molar de la fenitoína (~252 g/mol), también dada en la fuente. Es coherente con el resto del ejemplo, pero es un cálculo derivado, no una cita literal. No se dio un ejemplo numérico de rendimiento bruto/recristalización de la fenitoína en sí (solo las fórmulas), porque la fuente no liga una masa obtenida consistente a ese mismo ejemplo.

## Cobertura por bloque/tema

Cubierto por audio: todo lo dado hasta ahora, Tema 0 a Tema 7 (fase I) — Primer y Segundo
Parcial completos — más la Práctica 3 de laboratorio.

Sin cubrir (sin clases grabadas todavía en la carpeta de origen): Tema 7 (fase II), Tema 8
(dianas biológicas), Tema 9 (inhibidores enzimáticos), Tema 10 (agonistas/antagonistas de
receptores) y Tema 11 (DNA como diana biológica) — Tercer y Cuarto Parcial. Se puede ampliar
este audio-repaso con la misma skill cuando esas clases se graben y transcriban.

## Cómo se ponderó el contenido

La prioridad de cada pista se dedujo de `simulador/questions_data.js` (233 preguntas
generadas previamente con `study-kit-builder`, clasificadas por tema con un campo
`"repetida": true` para las que las fuentes marcan como muy preguntadas en examen): los
temas con más preguntas y más preguntas repetidas se trataron como prioridad alta. No hay
exámenes de convocatorias anteriores en esta carpeta para esta asignatura, así que no se usó
esa señal adicional. El contenido de cada pista se redactó a partir de
`guia_estudio/guia.html` (guía de estudio ya condensada y verificada en una sesión anterior)
como fuente principal, con `_fuentes_txt/00_TODAS_las_guias_ordenadas.txt` (transcripciones
de clase) como referencia secundaria para ejemplos y matices.
