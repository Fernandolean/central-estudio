# Central de Estudio

Centro de control académico para tus 6 asignaturas: dashboard con progreso,
temario por asignatura, reproductor de audio, buscador global, filtros,
recomendación de "qué estudio ahora" y estadísticas. Es una aplicación web
100% local — HTML + CSS + JavaScript, sin servidor, sin build, sin
dependencias que instalar para usarla.

No mueve, renombra ni borra ningún archivo original: todo lo que hace es
leer un índice generado por un script de Python y guardar tu progreso en el
propio navegador. Hay una única excepción, aditiva y reversible: los 6
`simulador/app.js` de cada asignatura llevan un pequeño parche para poder
abrirse directamente en un tema concreto (ver "Enlaces directos a
flashcards y simulador" más abajo) — el resto del contenido (PDFs, audios,
Word, etc.) no se toca en absoluto.

## Cómo abrir la aplicación

Haz doble clic en `index.html` (dentro de esta carpeta `CENTRAL_ESTUDIO/`).
Se abre directamente en tu navegador — no hace falta arrancar ningún
servidor ni instalar nada para usarla día a día.

Funciona en Chrome, Edge y Firefox. Recomendado: Chrome o Edge, porque
reproducen mejor el audio y los PDF directamente desde `file://`.

## Cómo actualizar los archivos

Simplemente añade, edita o borra material dentro de las carpetas de cada
asignatura (PDFs, MP3, DOCX, lo que sea) como haces normalmente. La app no
se entera de esos cambios hasta que regeneras el índice (siguiente
sección) — no hace falta tocar nada de `CENTRAL_ESTUDIO/` a mano.

## Cómo regenerar el índice

Cada vez que añadas material nuevo y quieras que aparezca en la web,
ejecuta desde esta carpeta (`CENTRAL_ESTUDIO/`):

```
python scripts/actualizar_indice.py
```

Requiere Python 3 y estas librerías (una sola vez):

```
pip install mutagen pypdf python-docx
```

El script:

- Recorre las 6 carpetas de asignaturas de forma recursiva.
- Detecta el temario oficial de cada asignatura a partir de
  `guia_estudio/guia.html`.
- Clasifica cada recurso por tema: primero por el nombre de archivo, y si
  no hay pistas ahí, abre el PDF/DOCX y busca menciones al tema dentro del
  contenido (con una segunda pasada por palabras clave del título del tema
  cuando la numeración interna del documento no coincide con la oficial).
- Genera nombres legibles a partir de nombres de archivo crípticos,
  conservando siempre la ruta real para poder abrir el original.
- Escribe `data/academic_index.json` (formato estándar) y
  `data/academic_index.js` (lo que carga realmente `index.html`, para
  evitar problemas de los navegadores al leer archivos locales) y
  `data/INFORME_INDICE.txt` con un resumen de lo indexado y lo que haya
  quedado sin clasificar por tema.
- Es de solo lectura sobre tus archivos: nunca escribe, mueve ni borra
  nada fuera de `CENTRAL_ESTUDIO/data/`.

## Enlaces directos a flashcards y simulador

Cada tema tiene DOS accesos directos al simulador, ya filtrados a sus
preguntas — no hace falta elegir tema ni configurar nada a mano, ni
siquiera la primera vez:

- **🧠 Flashcards** → modo repaso (SRS): revela la respuesta al momento,
  sin cronómetro. Para estudiar.
- **📝 Evaluación** → modo examen: cronómetro en marcha, no revela nada
  hasta terminar todas las preguntas. Para ponerte a prueba de verdad.

El enlace general "Simulador de examen" de la cabecera de la asignatura
(sin tema concreto) sigue abriendo la pantalla de inicio del simulador,
con las seis pruebas especiales (repasar fallos, examen final, etc.).

**Esto también funciona directamente dentro de cada simulador**, sin pasar
por Central de Estudio: en la pantalla de inicio, bajo "Temario cubierto",
cada tema tiene sus propios botones 🧠 **Repasar** / 📝 **Evaluar**, que
saltan directo a la sesión de ese tema sin tocar la pantalla de
configuración manual.

Esto funciona gracias a tres piezas trabajando juntas:

- `scripts/actualizar_indice.py` añade a cada enlace de flashcards los
  parámetros `?modo=srs&tema=...`, y a cada enlace de evaluación
  `?modo=exam&tema=...` — con el nombre exacto del tema tal como aparece en
  `questions_data.js` (puede haber varios `tema=` si tu tema agrupa más de
  un bloque del simulador).
- Cada `simulador/app.js` (de las 6 asignaturas) tiene un pequeño añadido
  al final: la función `tryDeepLink()` lee esos parámetros al cargar y, si
  existen, salta directo a la sesión ya filtrada; y las funciones
  `startTopicSrs()`/`startTopicExam()` hacen lo mismo cuando pulsas
  Repasar/Evaluar en un tema de "Temario cubierto". Si abres
  `simulador/index.html` normal (sin parámetros, con doble clic), el
  comportamiento es exactamente el de siempre: pantalla de inicio y
  configuración manual.
- Cada `simulador/style.css` tiene el estilo de esos dos botones nuevos.

Si en el futuro reemplazas o regeneras el `simulador/app.js` o
`simulador/style.css` de alguna asignatura (por ejemplo, si vuelves a
generar el simulador desde cero), perderás este añadido en esos archivos
concretos — los enlaces seguirán apuntando a `index.html?modo=srs&tema=...`
o `?modo=exam&tema=...` pero sin el parche caerán en la pantalla de inicio
normal en vez de saltar directo, y los botones de "Temario cubierto"
desaparecerán. Puedes volver a aplicarlo pidiendo que se repita el parche
para esa asignatura.

Si algún recurso queda en "sin clasificar por tema" (verás un aviso en la
propia página de la asignatura), puedes asignarlo tú a mano con un
desplegable — esa asignación manual se guarda en tu navegador y sobrevive
a futuras regeneraciones del índice.

## Dónde se almacena mi progreso

Todo tu progreso (visto/en progreso/completado, audios escuchados,
porcentaje de flashcards, intentos de simulador, asignaciones manuales de
tema y el historial de actividad) se guarda en `localStorage`, dentro del
propio navegador que usas para abrir `index.html`. No se sube a ningún
sitio ni se guarda en ningún archivo de esta carpeta.

Esto tiene dos implicaciones prácticas:

- Si abres la app en otro navegador o en otro ordenador, empezarás sin
  progreso ahí hasta que importes una copia de seguridad (ver abajo).
- Si borras el historial/datos de navegación de ese navegador, perderás el
  progreso guardado — por eso conviene hacer copias de seguridad de vez en
  cuando.

## Cómo hacer una copia de seguridad

En la cabecera de la app:

- **💾 (Descargar copia de seguridad)**: descarga un archivo
  `progreso-central-estudio-AAAA-MM-DD.json` con todo tu progreso actual.
  Guárdalo donde quieras (por ejemplo, dentro de tu OneDrive).
- **📤 (Restaurar)**: carga un archivo de copia de seguridad previamente
  descargado y reemplaza el progreso actual por el de ese archivo. Útil si
  cambias de ordenador o quieres recuperar un estado anterior.

## Estructura de la carpeta

```
CENTRAL_ESTUDIO/
├── index.html                 Aplicación (ábrelo con doble clic)
├── css/styles.css              Estilos
├── js/
│   ├── data.js                 Combina el índice con tus overrides y calcula progreso
│   ├── store.js                Progreso en localStorage (persistencia)
│   ├── recommend.js            Motor de "¿Qué estudio ahora?" (reglas simples)
│   └── app.js                  Router y renderizado de las vistas
├── data/
│   ├── academic_index.json     Índice generado (formato estándar)
│   ├── academic_index.js       El mismo índice, cargado por index.html
│   └── INFORME_INDICE.txt      Resumen de la última generación del índice
└── scripts/
    └── actualizar_indice.py    Script que regenera el índice
```

## Por qué HTML/CSS/JS puro y no React/Vite

Con ~320 recursos indexados no hace falta un framework: una app estática
bien organizada carga instantáneamente, no necesita `npm install` ni un
paso de compilación, y se abre con doble clic igual que cualquier archivo.
Añadir React/Vite habría exigido Node.js instalado y, para evitar montar
un servidor de desarrollo, un paso de build antes de cada uso — justo la
fricción que pedías evitar.

## Limitaciones conocidas

- Unos pocos recursos (exámenes que mezclan varios temas en un mismo PDF,
  algún documento escaneado sin texto, un `.doc` en formato antiguo) no se
  pudieron clasificar por tema automáticamente. Aparecen igualmente,
  agrupados al final de cada asignatura, listos para asignar a mano.
- La reproducción de audio y apertura de PDF/DOCX desde `file://` depende
  de tu navegador. Si algo no abre, prueba con Chrome o Edge.
