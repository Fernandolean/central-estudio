const QUESTIONS = [

{
  "id": "t1-001",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "En la tabla de pKa que se usa durante todo el curso, un ácido carboxílico tiene un pKa aproximado de 5. ¿Qué significa esto, de forma simplificada, según la definición de pKa manejada en clase?",
  "opciones": { "a": "Que se trata de un grupo básico fuerte a pH fisiológico", "b": "Que el grupo está siempre ionizado, sea cual sea el pH", "c": "Que el grupo no puede perder ningún protón en ningún rango de pH", "d": "Que a partir de pH 5 el grupo empieza a estar protonado y neutro", "e": "Que hasta pH 5 el grupo está mayoritariamente en su forma neutra (COOH) y que, por encima de pH 5, empieza a predominar la forma ionizada (COO⁻)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecto: un pKa de 5 corresponde a un grupo ácido, no básico; con ese valor sería además un ácido fuerte a pH fisiológico (7,4) por estar por debajo de 7,4.",
    "b": "Incorrecto: un ácido con pKa 5 solo está mayoritariamente ionizado por encima de ese pH, no en todo el rango posible.",
    "c": "Incorrecto: todo ácido acaba perdiendo su protón al subir suficientemente el pH; con un pKa de 5 lo pierde bastante antes de llegar al pH fisiológico.",
    "d": "Incorrecto: es justo al revés. Por debajo del pKa domina la forma protonada (neutra) y, según sube el pH, el ácido va perdiendo el protón, no ganándolo.",
    "e": "Correcto: el pKa es, de forma simplificada, el pH al que el grupo pierde su hidrógeno. Por debajo de pH 5 predomina el COOH neutro y por encima predomina el COO⁻ ionizado (con el matiz de que la transición real ocurre en un intervalo de unas ±2 unidades alrededor del pKa)."
  },
  "repetida": false
},

{
  "id": "t1-002",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "Dentro de una misma columna de la tabla periódica, un tiol (S-H) es más ácido que un alcohol (O-H) equivalente. ¿Qué factor explica esta diferencia de acidez?",
  "opciones": { "a": "El azufre es menos electronegativo que el oxígeno, lo que estabiliza más la carga negativa de la base conjugada", "b": "El oxígeno tiene mayor efecto -I que el azufre en cualquier molécula", "c": "El azufre siempre forma más formas resonantes que el oxígeno", "d": "El mayor tamaño (número atómico) del azufre permite que la carga negativa de la base conjugada se reparta sobre un volumen mayor y sea más estable" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el oxígeno es más electronegativo que el azufre, no al revés; además, dentro de una misma columna la diferencia de acidez no se explica por electronegatividad.",
    "b": "Incorrecto: el criterio del efecto inductivo no es el relevante cuando se compara un mismo grupo funcional a lo largo de una columna de la tabla periódica; ahí manda el tamaño atómico.",
    "c": "Incorrecto: la mayor estabilidad del tiolato no depende del número de formas resonantes, sino del tamaño del átomo que soporta la carga.",
    "d": "Correcto: dentro de un mismo grupo de la tabla periódica, la acidez depende del tamaño del átomo; un átomo más grande como el azufre estabiliza mejor la carga negativa al repartirla sobre más volumen/electrones, por eso el tiol es más ácido que el alcohol equivalente."
  },
  "repetida": false
},

{
  "id": "t1-003",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "¿Cuál de los siguientes grupos NO puede dar un efecto -R (mesómero atractor) que estabilice por resonancia una carga negativa entrante?",
  "opciones": { "a": "Un grupo nitro (NO₂)", "b": "Un grupo nitrilo (C≡N)", "c": "Un carbonilo (C=O)", "d": "Un grupo metilo (CH₃)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el NO₂ es uno de los grupos -R más fuertes, con dos oxígenos capaces de repartir la carga negativa entrante.",
    "b": "Incorrecto: el nitrilo, con su triple enlace, también acepta y desloca­liza carga negativa por resonancia; es un grupo -R.",
    "c": "Incorrecto: el carbonilo es un grupo -R clásico; su doble enlace permite deslocalizar hacia el oxígeno la carga negativa que llega por resonancia.",
    "d": "Correcto: el CH₃ no tiene ningún enlace múltiple hacia el que deslocalizar una carga entrante, así que no puede dar efecto -R; de hecho es el único grupo con efecto +I, y sirve para estabilizar cargas positivas, no negativas."
  },
  "repetida": false
},

{
  "id": "t1-004",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "¿Cómo se define un grupo con efecto +R (mesómero dador) según lo explicado en clase?",
  "opciones": { "a": "Es un grupo con un enlace doble o triple que le permite aceptar una carga negativa entrante", "b": "Es un grupo con pares de electrones libres que puede ceder por resonancia, quedando él mismo con densidad de carga positiva", "c": "Es un efecto que solo puede darse en el grupo CH₃", "d": "Es, por definición, cualquier grupo más electronegativo que el carbono" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: esa es la definición de un grupo -R (aceptor), no de un +R; para aceptar carga negativa hace falta un enlace múltiple, no pares libres.",
    "b": "Correcto: un grupo +R cede sus propios electrones (pares libres) por resonancia hacia otro punto de la molécula y, al hacerlo, él mismo queda con densidad de carga positiva; los grupos +R dan basicidad y suben el pKa.",
    "c": "Incorrecto: el CH₃ es el único grupo con efecto +I (inductivo), no +R; el efecto +R lo dan grupos con pares libres, como aminas, alcoholes o éteres.",
    "d": "Incorrecto: ser más electronegativo que el carbono es el criterio del efecto inductivo (-I), no del efecto resonante +R."
  },
  "repetida": false
},

{
  "id": "t1-005",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "Según lo explicado sobre el efecto inductivo, ¿qué grupo es el único que presenta efecto +I?",
  "opciones": { "a": "El átomo de flúor", "b": "El grupo OH", "c": "El grupo CH₃", "d": "Cualquier grupo que contenga oxígeno" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el flúor es el elemento más electronegativo de la tabla y atrae los electrones hacia sí, por lo que tiene efecto -I (estabiliza cargas negativas), no +I.",
    "b": "Incorrecto: el grupo OH, al ser más electronegativo que el carbono, ejerce un efecto -I, no +I.",
    "c": "Correcto: el CH₃ es el único grupo con efecto +I, porque la diferencia de electronegatividad entre carbono e hidrógeno es prácticamente nula y no atrae electrones hacia sí, dejando densidad de carga positiva en el resto de la cadena; por eso estabiliza cargas positivas.",
    "d": "Incorrecto: todos los grupos con oxígeno son más electronegativos que el carbono y por tanto tienen efecto -I, no +I."
  },
  "repetida": false
},

{
  "id": "t1-006",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "Un alcohol tiene un pKa aproximado de 14 y un ácido carboxílico un pKa aproximado de 5, aunque en ambos casos el hidrógeno ácido está sobre un oxígeno. ¿A qué se debe esta gran diferencia?",
  "opciones": { "a": "A que el oxígeno del ácido carboxílico es más electronegativo que el del alcohol", "b": "A que la base conjugada del ácido carboxílico tiene un efecto -R del carbonilo que deslocaliza y estabiliza la carga negativa por resonancia, algo que la base conjugada del alcohol no tiene", "c": "A que el alcohol tiene un efecto -I mucho más fuerte que el ácido carboxílico", "d": "A que el ácido carboxílico tiene mayor número atómico en el átomo que soporta la carga" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el átomo que soporta la carga es el oxígeno en los dos casos, así que la electronegatividad del propio átomo no puede ser la diferencia; hay que buscar la explicación en las formas resonantes.",
    "b": "Correcto: cuando el átomo que soporta la carga es el mismo, hay que mirar las formas resonantes; el carbonilo del ácido carboxílico da un efecto -R que reparte la carga negativa entre los dos oxígenos (dos formas resonantes equivalentes), mientras que el alcohol no tiene ningún grupo para deslocalizar esa carga.",
    "c": "Incorrecto: es justo al revés: es el ácido carboxílico el que tiene el efecto -R que baja su pKa; el alcohol no presenta ningún efecto estabilizante especial sobre su base conjugada.",
    "d": "Incorrecto: en ambos casos el átomo que soporta la carga es un oxígeno con el mismo número atómico; el criterio del tamaño atómico solo se aplica al comparar elementos distintos de una misma columna."
  },
  "repetida": true
},

{
  "id": "t1-007",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "Comparando el metanol (CH₃-OH) con el trifluorometanol (CF₃-OH) —ninguno de los dos tiene formas resonantes posibles—, ¿cuál es más ácido y por qué?",
  "opciones": { "a": "El trifluorometanol, porque el flúor forma un enlace de hidrógeno adicional con el oxígeno", "b": "El trifluorometanol, porque los tres átomos de flúor ejercen un fuerte efecto -I que estabiliza la carga negativa de la base conjugada", "c": "El metanol, porque el CH₃ tiene efecto +I que estabiliza la carga negativa de la base conjugada", "d": "Los dos tienen la misma acidez, porque el átomo que soporta la carga es el mismo oxígeno en ambos casos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la razón enseñada en clase para este tipo de comparaciones es el efecto inductivo (-I del flúor), no la formación de enlaces de hidrógeno intramoleculares.",
    "b": "Correcto: como no hay formas resonantes en ninguno de los dos casos, hay que acudir al efecto inductivo; el flúor es el elemento más electronegativo y, con tres átomos tirando de los electrones, se estabiliza mucho la carga negativa de la base conjugada, bajando el pKa.",
    "c": "Incorrecto: el efecto +I del CH₃ dona densidad electrónica y desestabiliza una carga negativa cercana, lo que hace al metóxido menos estable, no más ácido.",
    "d": "Incorrecto: aunque el átomo que soporta la carga sea el mismo oxígeno en los dos casos, el efecto inductivo de los sustituyentes vecinos sí cambia la estabilidad de la base conjugada y, por tanto, la acidez."
  },
  "repetida": false
},

{
  "id": "t1-008",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "Al dibujar un movimiento de flechas de resonancia para justificar la acidez de un grupo, ¿cuál de las siguientes afirmaciones es correcta según la regla explicada en clase?",
  "opciones": { "a": "Una carga positiva puede atacar y formar un nuevo enlace, igual que lo haría un par libre", "b": "Los electrones que se desplazan pueden 'pasearse' libremente por cualquier parte de la cadena de carbonos", "c": "Una carga positiva nunca ataca, porque le faltan electrones; solo pueden moverse pares de electrones (de un enlace o un par libre) hacia un átomo adyacente", "d": "El movimiento de electrones puede dejar a cualquier átomo, no solo al carbono, con únicamente seis electrones sin que eso sea un problema" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: una carga positiva indica falta de electrones, así que nunca puede ser el origen de una flecha de resonancia; solo puede recibir electrones, nunca cederlos.",
    "b": "Incorrecto: los electrones solo se pueden mover hacia átomos adyacentes conectados por el sistema de enlaces múltiples (hacia arriba, a un heteroátomo, o hacia abajo, a un carbono); no pueden saltar libremente por toda la cadena.",
    "c": "Correcto: en resonancia siempre se mueven pares de electrones (de un par libre o de un enlace) hacia un átomo vecino; una carga positiva, al no tener electrones que ceder, nunca puede ser el punto de partida de una flecha.",
    "d": "Incorrecto: dejar a un átomo que no sea el carbono con solo seis electrones incumple la regla del octeto; esa forma resonante estaría mal dibujada."
  },
  "repetida": false
},

{
  "id": "t1-009",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "¿Cuál es la única excepción a la regla del octeto que se admite al dibujar formas resonantes en esta asignatura?",
  "opciones": { "a": "El oxígeno puede quedarse con seis electrones sin ningún problema", "b": "El nitrógeno puede quedarse con diez electrones", "c": "El carbono con carga positiva puede quedar rodeado de solo seis electrones", "d": "El azufre nunca puede superar los ocho electrones a su alrededor" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: un oxígeno con solo seis electrones incumpliría el octeto sin que exista esa excepción; ese movimiento de resonancia estaría mal dibujado.",
    "b": "Incorrecto: no se contempla esa excepción para el nitrógeno; el nitrógeno debe mantener siempre su octeto completo.",
    "c": "Correcto: la única excepción admitida es el carbono con carga positiva (carbocatión), que puede quedar rodeado de solo seis electrones; para cualquier otro átomo, quedarse con menos de ocho sería un movimiento incorrecto.",
    "d": "Incorrecto: el azufre, a partir del tercer periodo, sí puede sufrir expansión de octeto y rodearse de diez o incluso doce electrones, como ocurre en la base conjugada del ácido sulfónico."
  },
  "repetida": false
},

{
  "id": "t1-010",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "¿Qué efecto tienen, en general, los grupos con efecto -R y los grupos con efecto -I sobre la acidez y el pKa de un grupo funcional?",
  "opciones": { "a": "No afectan al pKa, solo a la velocidad con la que se pierde el protón", "b": "El -R sube el pKa y el -I lo baja", "c": "Ambos dan basicidad y suben el pKa", "d": "Ambos dan acidez y bajan el pKa, porque estabilizan la carga negativa de la base conjugada" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: estos efectos electrónicos son precisamente los que se usan en clase para justificar por qué sube o baja el pKa de un grupo respecto a su valor tabulado.",
    "b": "Incorrecto: ambos efectos, -R y -I, actúan en la misma dirección, dando acidez y bajando el pKa.",
    "c": "Incorrecto: los efectos +R y +I son los que dan basicidad y suben el pKa, no los efectos -R/-I.",
    "d": "Correcto: tanto el efecto -R (por resonancia, con enlaces múltiples) como el efecto -I (inductivo, por electronegatividad) estabilizan la carga negativa que queda en la base conjugada tras perder el protón, lo que favorece la ionización y baja el pKa."
  },
  "repetida": false
},

{
  "id": "t1-011",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "Un grupo ácido de un fármaco aparece con un pKa más alto de lo esperado según la tabla. ¿Qué tipo de efecto electrónico cercano podría justificar esa subida?",
  "opciones": { "a": "Un efecto -R o -I adicional cerca de la carga", "b": "Ningún efecto electrónico puede modificar el pKa tabulado de un grupo", "c": "Un efecto +R o +I cerca de la carga, que desestabiliza la base conjugada", "d": "La presencia de cualquier anillo aromático adicional, que siempre sube el pKa" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: un efecto -R o -I adicional estabilizaría todavía más la base conjugada y bajaría el pKa, justo lo contrario de lo que se observa en el enunciado.",
    "b": "Incorrecto: precisamente el curso insiste en que hay que saber justificar subidas y bajadas de pKa respecto al valor tabulado a partir de los efectos -R/-I y +R/+I cercanos.",
    "c": "Correcto: un grupo +R o +I cercano dona densidad electrónica y desestabiliza la carga negativa de la base conjugada, dificultando la ionización; eso se traduce en un pKa más alto (menos ácido) de lo tabulado.",
    "d": "Incorrecto: un anillo aromático puede estabilizar la carga por resonancia (efecto -R, bajando el pKa) si la carga puede deslocalizarse hacia él; su efecto depende de la posición relativa, no sube el pKa de forma automática."
  },
  "repetida": false
},

{
  "id": "t1-012",
  "tema": "Tema 0 — Repaso de química orgánica",
  "pregunta": "Para decidir cuál es el hidrógeno más ácido entre dos grupos funcionales, ¿en qué orden se deben aplicar los criterios explicados en clase?",
  "opciones": { "a": "Solo hay que fijarse en el efecto inductivo; los demás criterios no se usan en esta asignatura", "b": "El orden no importa: los tres criterios dan siempre el mismo resultado", "c": "Primero el átomo que soporta la carga en la base conjugada; si es el mismo átomo, se comparan las formas resonantes; si tampoco hay formas resonantes, se recurre al efecto inductivo", "d": "Primero el efecto inductivo, después el átomo que soporta la carga y, por último, las formas resonantes" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el efecto inductivo es el último criterio; se usa solo cuando el átomo que soporta la carga es el mismo y no hay formas resonantes posibles en ninguno de los dos casos.",
    "b": "Incorrecto: los tres criterios se aplican en cascada precisamente porque no siempre dan la misma respuesta; por eso hay que aplicarlos en el orden correcto.",
    "c": "Correcto: el criterio jerárquico es primero comparar el átomo que soporta la carga en la base conjugada (tamaño/columna); si es el mismo átomo, pasar a las formas resonantes (-R/+R); y solo si tampoco hay resonancia posible, acudir al efecto inductivo (-I/+I).",
    "d": "Incorrecto: el orden explicado en clase empieza por el átomo que soporta la carga, no por el efecto inductivo."
  },
  "repetida": true
},

{
  "id": "t2-001",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "¿Cuál es la diferencia fundamental entre fármaco y medicamento, tal como se explica en clase?",
  "opciones": { "a": "El fármaco es siempre el nombre comercial y el medicamento es el nombre IUPAC", "b": "El medicamento es la molécula pura y el fármaco es lo que se dispensa envasado en la farmacia", "c": "No hay ninguna diferencia real, son sinónimos que se usan indistintamente", "d": "El fármaco es la sustancia pura que llega a su diana biológica y ejerce la acción farmacológica; el medicamento es la forma farmacéutica de dosificación (fármaco más excipientes, recipiente, etc.) que vende el farmacéutico" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la diferencia fármaco/medicamento no tiene que ver con el tipo de nombre que reciban, sino con si se trata de la sustancia pura o de la forma farmacéutica completa.",
    "b": "Incorrecto: está invertido; la sustancia pura que actúa sobre la diana es el fármaco, no el medicamento.",
    "c": "Incorrecto: el curso insiste explícitamente en distinguir ambos conceptos porque suelen confundirse, y es una pregunta típica de examen.",
    "d": "Correcto: el fármaco es la sustancia pura responsable de la acción biológica sobre la diana; el medicamento incluye además los componentes y el recipiente necesarios para conformar una forma farmacéutica de dosificación administrable al paciente."
  },
  "repetida": true
},

{
  "id": "t2-002",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "¿Qué significan las siglas DCI aplicadas a un principio activo?",
  "opciones": { "a": "Denominación Comercial Interna del laboratorio fabricante", "b": "Documento de Calidad Industrial", "c": "Dosis Clínica Individual", "d": "Denominación Común Internacional, el nombre estandarizado que identifica a un principio activo a nivel internacional" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario: la DCI es una denominación común e internacional, no una denominación comercial ni interna de un único fabricante.",
    "b": "Incorrecto: ese desarrollo de las siglas no corresponde a ningún concepto usado en la asignatura.",
    "c": "Incorrecto: la DCI no tiene relación con la dosis del fármaco, sino con su denominación.",
    "d": "Correcto: la DCI (Denominación Común Internacional) es el nombre reconocido internacionalmente que identifica a un principio activo, independientemente del nombre comercial que le ponga cada laboratorio."
  },
  "repetida": false
},

{
  "id": "t2-003",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "En la nomenclatura ATC de un fármaco (por ejemplo, A02BA01), ¿qué indica la primera letra del código?",
  "opciones": { "a": "El órgano o sistema al que se dirige el fármaco", "b": "Si el fármaco es cabeza de serie o una copia posterior", "c": "El grupo químico del fármaco", "d": "El grupo terapéutico" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la letra inicial del código ATC indica el órgano o sistema al que se dirige el fármaco (por ejemplo, A para el aparato digestivo, N para el sistema nervioso central).",
    "b": "Incorrecto: esa información la da el último número del código (01 para el cabeza de serie, 02, 03… para las copias u optimizaciones), no la primera letra.",
    "c": "Incorrecto: el grupo químico lo indica la letra que aparece después del subgrupo terapéutico, no la primera letra del código.",
    "d": "Incorrecto: el grupo terapéutico lo indica el número que viene justo después de la primera letra, no la letra en sí."
  },
  "repetida": false
},

{
  "id": "t2-004",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "En el código ATC de un fármaco (por ejemplo, A02BA01), ¿qué indica el número final?",
  "opciones": { "a": "Si el fármaco es el cabeza de serie (habitualmente 01) o una copia/optimización posterior (02, 03…)", "b": "El grupo terapéutico al que pertenece", "c": "El órgano diana del fármaco", "d": "El peso molecular aproximado del fármaco" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el número final del código ATC indica la posición cronológica del fármaco dentro de su familia; el 01 corresponde al cabeza de serie y los números siguientes a las sucesivas copias u optimizaciones.",
    "b": "Incorrecto: el grupo terapéutico se indica con el número que va justo después de la primera letra, al principio del código, no al final.",
    "c": "Incorrecto: el órgano diana lo indica la primera letra del código, no el número final.",
    "d": "Incorrecto: el código ATC no codifica ninguna propiedad fisicoquímica del fármaco como el peso molecular."
  },
  "repetida": false
},

{
  "id": "t2-005",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "Dos fármacos tienen el mismo código ATC salvo por el número final (por ejemplo, N05BA01 frente a N05BA06). ¿Qué relación hay entre ellos?",
  "opciones": { "a": "No pueden existir dos fármacos con el mismo código salvo el último número", "b": "Son fármacos completamente distintos que actúan sobre órganos diferentes", "c": "El segundo (N05BA06) es una copia o fármaco 'me-too', una optimización del primero (el cabeza de serie); comparten actividad y biomolécula diana", "d": "El segundo es obligatoriamente el cabeza de serie, porque tiene el número más alto" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: esta situación es habitual y precisamente es la que sirve para reconocer una familia de fármacos derivados de un mismo cabeza de serie (por ejemplo, la fluoxetina y una optimización posterior).",
    "b": "Incorrecto: al compartir órgano, grupo terapéutico, subgrupo y grupo químico (las cuatro primeras posiciones del código), actúan sobre el mismo sistema, no sobre órganos distintos.",
    "c": "Correcto: cuando dos fármacos comparten todo el código salvo el número final, el de número más alto es una copia o fármaco me-too, una optimización posterior del cabeza de serie (número 01), con la misma actividad y la misma biomolécula diana.",
    "d": "Incorrecto: el cabeza de serie es, por convención, el que lleva el número 01; un número más alto indica una copia u optimización posterior, no el cabeza de serie."
  },
  "repetida": true
},

{
  "id": "t2-006",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "¿Es obligatorio que el fármaco cabeza de serie de una familia llegue a comercializarse?",
  "opciones": { "a": "Sí, siempre; si no se comercializa no puede considerarse cabeza de serie", "b": "Sí, pero solo si presenta toda la actividad terapéutica deseada", "c": "No, porque un cabeza de serie nunca presenta actividad biológica", "d": "No; el cabeza de serie no tiene por qué comercializarse, a veces directamente se comercializa una optimización posterior del mismo" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: se insiste varias veces en clase en que el cabeza de serie no tiene por qué haber sido comercializado.",
    "b": "Incorrecto: el cabeza de serie tiene actividad, pero precisamente puede no tener toda la actividad deseada; por eso se optimiza, y eso no impide que exista o no que se comercialice.",
    "c": "Incorrecto: si es cabeza de serie, seguro que tiene actividad biológica (aunque no necesariamente toda la que interesa); lo que puede faltar es la comercialización, no la actividad.",
    "d": "Correcto: el cabeza de serie es la molécula prototipo de una familia, pero muchas veces no llega a comercializarse; en su lugar se comercializa directamente una optimización posterior (una copia mejorada)."
  },
  "repetida": false
},

{
  "id": "t2-007",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "Sobre el fármaco cabeza de serie, ¿cuál de las siguientes afirmaciones es correcta?",
  "opciones": { "a": "Es la sustancia pura que llega a su diana biológica; esa es, en realidad, la definición general de fármaco, no la de cabeza de serie", "b": "Un cabeza de serie nunca puede tener ningún tipo de actividad biológica", "c": "Es la molécula prototipo de una familia de fármacos; tiene actividad biológica, aunque no necesariamente toda la actividad deseada (por eso se optimiza después)", "d": "Un cabeza de serie es, por definición, una copia (fármaco me-too) de otro fármaco anterior" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: aunque describe correctamente al fármaco en general, esa frase no es la definición específica de cabeza de serie, que es más concreta (molécula prototipo de una familia).",
    "b": "Incorrecto: si es cabeza de serie, seguro que tiene actividad; lo que puede no tener es toda la actividad que se busca conseguir con las optimizaciones posteriores.",
    "c": "Correcto: el cabeza de serie es la molécula prototipo a partir de la cual se desarrolla toda una familia de fármacos; tiene actividad, pero si no fuera la deseada al 100 % se procede a su optimización mediante estudios de relación estructura-actividad (REA).",
    "d": "Incorrecto: es justo al revés, el cabeza de serie es el número 01, el original; las copias o fármacos me-too son las optimizaciones que vienen después de él."
  },
  "repetida": false
},

{
  "id": "t2-008",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "El Viagra es un ejemplo clásico, citado en el tema 1, de fármaco descubierto por serendipia (casualidad). ¿Para qué se estaba investigando originalmente?",
  "opciones": { "a": "Como anestésico local", "b": "Como vasodilatador, y se observó de forma inesperada su efecto sobre la función eréctil", "c": "Como antibiótico", "d": "Como antiviral" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: no hay ninguna relación entre el desarrollo original del Viagra y la anestesia local.",
    "b": "Correcto: el Viagra (sildenafilo) se estaba investigando como vasodilatador para problemas cardiovasculares, y de forma accidental se descubrió su efecto sobre la función eréctil, por lo que acabó comercializándose con ese fin.",
    "c": "Incorrecto: el Viagra no se investigaba como antibiótico; ese uso corresponde, por ejemplo, a la penicilina.",
    "d": "Incorrecto: el Viagra no se desarrolló como antiviral; ese uso no corresponde a su historia de descubrimiento."
  },
  "repetida": true
},

{
  "id": "t2-009",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "¿Cómo se clasifica la penicilina según la distinción entre fármaco quimioterápico y fármaco farmacodinámico utilizada en clase?",
  "opciones": { "a": "Es un fármaco farmacodinámico porque, al unirse a proteínas, puede formar haptenos", "b": "Es un fármaco quimioterápico, porque es un antibiótico, categoría que en esta clasificación se agrupa junto a los antineoplásicos y los antivirales, dirigida a combatir un agente extraño", "c": "No pertenece a ninguna de las dos categorías, porque se descubrió por serendipia", "d": "Es un fármaco farmacodinámico, como el Viagra, porque modula una función fisiológica del organismo (por ejemplo, bajar la tensión o el colesterol)" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: formar haptenos al unirse a proteínas es una propiedad relacionada con las reacciones alérgicas, no el criterio que determina la clasificación quimioterápico/farmacodinámico.",
    "b": "Correcto: en la clasificación usada en clase, un fármaco quimioterápico es aquel que combate un agente extraño o anómalo (antibióticos, antivirales, antineoplásicos); la penicilina, como antibiótico, se clasifica ahí, y no como farmacodinámico.",
    "c": "Incorrecto: haber sido descubierta por serendipia (accidentalmente) es un hecho independiente de su clasificación como quimioterápico o farmacodinámico; ambos criterios no se excluyen.",
    "d": "Incorrecto: el farmacodinámico es el que regula una función fisiológica propia del organismo (como el Viagra o un fármaco para bajar la tensión), no el que combate un agente externo como hace la penicilina."
  },
  "repetida": true
},

{
  "id": "t2-010",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "Según el tema 1, cuando la penicilina se une a proteínas del organismo, ¿qué puede generar?",
  "opciones": { "a": "Metabolitos activos que multiplican su potencia terapéutica", "b": "Un profármaco que después se bioactiva en el hígado", "c": "Una mezcla racémica de dos enantiómeros", "d": "Haptenos, que pueden actuar como antígenos y desencadenar una respuesta inmunitaria (una reacción alérgica)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la unión a proteínas para formar haptenos no tiene que ver con generar metabolitos más potentes, sino con un fenómeno inmunológico.",
    "b": "Incorrecto: no se trata de un mecanismo de bioactivación de un profármaco, sino de una reacción con proteínas que desencadena una respuesta inmunitaria.",
    "c": "Incorrecto: la formación de haptenos no está relacionada con la estereoquímica ni con la existencia de mezclas racémicas.",
    "d": "Correcto: la unión de la penicilina a proteínas del organismo puede generar haptenos que funcionan como antígenos, lo que explica el fenómeno de las alergias a la penicilina, un dato explícitamente señalado en el tema 1."
  },
  "repetida": false
},

{
  "id": "t2-011",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "¿Cuál es la diferencia entre un fármaco farmacodinámico y uno quimioterápico según la distinción usada en clase?",
  "opciones": { "a": "El farmacodinámico regula cualquier función del organismo (por ejemplo, bajar la tensión o el colesterol); el quimioterápico se dirige a combatir un agente extraño o anómalo (bacterias, virus, células cancerosas)", "b": "Son sinónimos, ambos términos designan exactamente lo mismo", "c": "El quimioterápico es siempre un profármaco y el farmacodinámico nunca lo es", "d": "El farmacodinámico solo actúa sobre el sistema nervioso central; el quimioterápico solo sobre el aparato digestivo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: esta es la distinción explicada en clase: farmacodinámico para fármacos que modulan una función fisiológica propia (tensión, colesterol, función eréctil...), y quimioterápico para los que combaten un agente extraño (antibióticos, antivirales, antineoplásicos).",
    "b": "Incorrecto: son categorías distintas y mutuamente excluyentes; de hecho, distinguirlas es objeto de preguntas de examen (por ejemplo, penicilina frente a Viagra).",
    "c": "Incorrecto: ser profármaco o no es una característica independiente de la clasificación quimioterápico/farmacodinámico; hay fármacos de ambos tipos que pueden administrarse como profármacos.",
    "d": "Incorrecto: ninguno de los dos términos está restringido a un órgano o sistema concreto; la distinción es sobre el tipo de objetivo (función propia frente a agente extraño), no sobre la localización."
  },
  "repetida": false
},

{
  "id": "t2-012",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "Dos versiones de un mismo fármaco ácido se comercializan: el fármaco A como sal sódica y el fármaco B como sal con un contraión orgánico (una amina protonada). Ambos tienen la misma actividad farmacológica. ¿Qué ocurre con la biodisponibilidad del fármaco B?",
  "opciones": { "a": "Es idéntica a la del fármaco A, porque la liberación y la absorción son siempre iguales en cualquier sal", "b": "El fármaco B tiene peor liberación porque el contraión orgánico es insoluble en agua", "c": "El fármaco B presenta mejor biodisponibilidad: ambos se liberan igual de bien (los dos son sales con carga y por tanto solubles), pero en B el contraión orgánico puede neutralizarse con la carga del fármaco formando un par más lipófilo, lo que favorece su absorción", "d": "El fármaco A siempre se absorbe mejor porque el sodio es un ion más pequeño que una amina orgánica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: aunque la liberación (que depende de tener carga y ser soluble) es igual de buena en los dos casos, la absorción posterior sí puede diferir según el contraión.",
    "b": "Incorrecto: para la liberación (etapa acuosa), lo que importa es que la especie tenga carga, y ambas sales la tienen; el contraión orgánico no empeora la liberación, mejora la absorción posterior.",
    "c": "Correcto: con un contraión orgánico, el fármaco y el contraión pueden neutralizarse mutuamente formando un enlace iónico interno que hace al conjunto más lipófilo, lo que mejora el paso por la bicapa lipídica y por tanto la absorción, mejorando la biodisponibilidad global.",
    "d": "Incorrecto: el tamaño del contraión no es el criterio relevante en este razonamiento; lo importante es su capacidad de formar un par neutro más lipófilo con el fármaco."
  },
  "repetida": false
},

{
  "id": "t2-013",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "La acetanilida y la fenacetina son profármacos del paracetamol. ¿Qué significa esto?",
  "opciones": { "a": "Que son moléculas que se convierten en paracetamol —el fármaco realmente activo que llega a la diana— mediante un proceso de metabolismo a pH fisiológico", "b": "Que son sinónimos del paracetamol, con idéntica estructura química", "c": "Que el paracetamol es en realidad el profármaco y la acetanilida el fármaco activo", "d": "Que se absorben peor que el paracetamol por ser más polares" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: un profármaco es una forma que se bioactiva mediante metabolismo a pH fisiológico; tanto la acetanilida como la fenacetina se transforman en el organismo en paracetamol, que es el fármaco que realmente llega a la diana biológica.",
    "b": "Incorrecto: si tuvieran idéntica estructura no habría transformación metabólica ni distinción entre profármaco y fármaco.",
    "c": "Incorrecto: está invertido; el paracetamol es el fármaco activo, mientras que la acetanilida y la fenacetina son los profármacos que se transforman en él.",
    "d": "Incorrecto: es justo lo contrario, son más lipófilas que el paracetamol (que tiene un grupo OH extra que aporta hidrofilia), por lo que se absorben mejor, no peor."
  },
  "repetida": true
},

{
  "id": "t2-014",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "En un examen se afirmaba: 'La fenacetina es un profármaco del paracetamol y se absorberá peor que el paracetamol.' ¿Por qué es falsa esta afirmación?",
  "opciones": { "a": "Porque la fenacetina, al no tener el grupo OH del paracetamol (que aporta hidrofilia), es más lipófila y por tanto se absorbe mejor, no peor", "b": "Porque el paracetamol nunca llega a absorberse en el organismo", "c": "Porque la fenacetina no es en realidad un profármaco del paracetamol", "d": "Porque la fenacetina y el paracetamol tienen exactamente la misma estructura química" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el paracetamol tiene un grupo OH fenólico que aporta hidrofilia y dificulta algo su paso por la bicapa lipídica; la fenacetina, al carecer de ese grupo libre, es más lipófila y se absorbe mejor que el paracetamol, no peor.",
    "b": "Incorrecto: el paracetamol sí se absorbe (de hecho es el fármaco activo que debe llegar a su diana); el error de la frase original está en la comparación relativa de absorción con la fenacetina.",
    "c": "Incorrecto: la primera parte de la afirmación (que la fenacetina es profármaco del paracetamol) sí es correcta; el error está en la comparación de absorción.",
    "d": "Incorrecto: si tuvieran la misma estructura no existiría relación de profármaco/fármaco activo entre ellos ni la diferencia de polaridad que explica la distinta absorción."
  },
  "repetida": false
},

{
  "id": "t2-015",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "¿Cuál es el orden correcto, según el repaso de los temas 1 y 2, para el diseño de un fármaco desde cero?",
  "opciones": { "a": "Elección de la diana → optimización → estudio fisiológico → obtención del cabeza de serie", "b": "Optimización → obtención del cabeza de serie → elección de la diana → estudio fisiológico", "c": "Obtención del cabeza de serie → estudio fisiológico → elección de la diana → REA", "d": "Estudio fisiológico → elección de la diana → obtención del cabeza de serie y estudios de relación estructura-actividad (REA) → optimización" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la optimización no puede ir antes de tener siquiera un cabeza de serie sobre el que trabajar.",
    "b": "Incorrecto: presenta el proceso al revés; la optimización es siempre el último paso, no el primero.",
    "c": "Incorrecto: no se puede obtener un cabeza de serie sin haber estudiado antes la fisiología de la enfermedad y elegido la diana a la que debe dirigirse.",
    "d": "Correcto: el orden lógico es primero entender la fisiología de la enfermedad, después elegir la diana biológica implicada, luego obtener el cabeza de serie y estudiar su relación estructura-actividad (REA), y por último optimizarlo."
  },
  "repetida": false
},

{
  "id": "t2-016",
  "tema": "Tema 1-2 — Descubrimiento y nomenclatura de fármacos",
  "pregunta": "En los exámenes de esta asignatura, ¿qué significan las siglas REA cuando aparecen junto al proceso de obtención del cabeza de serie?",
  "opciones": { "a": "Reacción Enzimática Acoplada", "b": "Relación Específica de Afinidad", "c": "Régimen de Excreción Ácida", "d": "Relación Estructura-Actividad" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: no corresponde a ningún concepto usado con esas siglas en la asignatura.",
    "b": "Incorrecto: aunque suena relacionado con afinidad, las siglas REA se refieren específicamente a la relación estructura-actividad, no a la afinidad como tal.",
    "c": "Incorrecto: no tiene relación con las siglas REA tal como se usan en el diseño de fármacos.",
    "d": "Correcto: REA son las siglas de relación estructura-actividad, el estudio de cómo los cambios en la estructura de un fármaco afectan a su actividad biológica, paso clave tras obtener el cabeza de serie."
  },
  "repetida": true
},

{
  "id": "t3-001",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "¿Cuál es la regla general, repetida varias veces en las clases de especiación, para saber si un hidrógeno situado sobre azufre o sobre oxígeno es ácido?",
  "opciones": { "a": "Depende de si el azufre o el oxígeno tienen el par libre disponible, igual que ocurre con el nitrógeno", "b": "Solo es ácido si, además, hay un grupo -R cerca", "c": "Todo hidrógeno sobre un átomo de azufre o de oxígeno es siempre ácido, sin excepción, porque son enlaces muy polarizados", "d": "Nunca son ácidos: los hidrógenos sobre azufre u oxígeno siempre actúan como bases" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la disponibilidad del par libre es el criterio que se aplica específicamente al nitrógeno para decidir si es ácido, básico o neutro, no a los hidrógenos sobre O o S, que son ácidos de forma directa.",
    "b": "Incorrecto: no hace falta ningún grupo -R adicional; el simple hecho de estar sobre O o S ya garantiza que el hidrógeno es ácido, aunque un -R cercano pueda bajar aún más su pKa.",
    "c": "Correcto: se repite como regla fija en todas las clases de especiación: cualquier hidrógeno unido a azufre o a oxígeno es siempre ácido, porque son enlaces muy polarizados (gran diferencia de electronegatividad) que facilitan la pérdida del protón.",
    "d": "Incorrecto: es justo lo contrario; los hidrógenos sobre azufre u oxígeno son siempre ácidos, nunca básicos."
  },
  "repetida": true
},

{
  "id": "t3-002",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Comparando el alquiltiol (pKa ≈ 10-11) con el tiofenol (pKa ≈ 9-10), ¿por qué el tiofenol es más ácido?",
  "opciones": { "a": "Porque el tiofenol tiene mayor número atómico en el átomo de azufre", "b": "Porque el azufre del tiofenol es un átomo distinto del azufre del alquiltiol", "c": "Porque la base conjugada del tiofenol (el tiolato) se estabiliza por resonancia con el anillo bencénico (efecto -R), mientras que la base conjugada del alquiltiol solo tiene un CH₃ con efecto +I, que la desestabiliza", "d": "Porque, en realidad, no hay ninguna diferencia real de acidez entre ambos" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el número atómico del azufre es el mismo en ambos compuestos; ese criterio solo sirve para comparar átomos distintos de una misma columna.",
    "b": "Incorrecto: el átomo que soporta la carga (azufre) es el mismo en los dos casos; la diferencia de acidez no viene de ahí, sino de lo que rodea a ese azufre.",
    "c": "Correcto: como el átomo que soporta la carga es el mismo, hay que mirar las formas resonantes; el benceno del tiofenol estabiliza la carga negativa por resonancia (efecto -R), mientras que en el alquiltiol el CH₃ ni ayuda ni tiene con qué deslocalizar, e incluso desestabiliza ligeramente por su efecto +I.",
    "d": "Incorrecto: sí existe una diferencia de acidez, aunque ambos estén en rangos de pKa relativamente próximos (9-11); el tiofenol es sistemáticamente algo más ácido."
  },
  "repetida": false
},

{
  "id": "t3-003",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "El ácido sulfónico (-SO₃H) tiene un pKa extremadamente bajo (0-1), mucho menor que cualquier ácido carboxílico. ¿Por qué es tan ácido?",
  "opciones": { "a": "Porque tiene un efecto +R que estabiliza la carga negativa", "b": "Porque el azufre, a partir del tercer periodo, puede sufrir expansión de octeto, y su base conjugada puede repartir por resonancia la carga negativa entre varios oxígenos, no solo entre dos", "c": "Porque el azufre es menos electronegativo que el oxígeno", "d": "Porque, al perder el protón, no se forma ninguna base conjugada" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: un efecto +R desestabilizaría (no estabilizaría) una carga negativa; lo que opera aquí es justo lo contrario, un fuerte efecto -R por la deslocalización sobre varios oxígenos.",
    "b": "Correcto: el azufre del ácido sulfónico puede sufrir expansión de octeto (10 o 12 electrones), lo que le permite deslocalizar por resonancia la carga negativa de la base conjugada entre varios oxígenos equivalentes, dando una estabilización extrema y un pKa muy bajo.",
    "c": "Incorrecto: aunque es cierto que el azufre es algo menos electronegativo que el oxígeno, esa no es la razón dada en clase para la extrema acidez del ácido sulfónico; la clave es la expansión de octeto y el reparto de carga entre varios oxígenos.",
    "d": "Incorrecto: como cualquier ácido, al perder el protón sí se forma una base conjugada (el sulfonato); precisamente su gran estabilidad es la que explica la fortaleza del ácido."
  },
  "repetida": false
},

{
  "id": "t3-004",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "El ácido fosfónico tiene dos hidrógenos ácidos con pKa muy distintos: el primero en torno a 1-2, y el segundo sube hasta 5-6. ¿Por qué sube tanto el pKa del segundo protón?",
  "opciones": { "a": "Porque el segundo hidrógeno no está sobre un oxígeno, sino sobre un carbono", "b": "Porque el fósforo, a diferencia del azufre, no puede sufrir nunca expansión de octeto", "c": "Porque el segundo protón está protegido por un grupo +R muy fuerte que lo hace inaccesible", "d": "Porque, tras perder el primer protón, perder también el segundo generaría dos cargas negativas muy próximas entre sí, y esa repulsión electrostática hace que el compuesto retrase al máximo la salida del segundo protón" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: los dos hidrógenos ácidos del ácido fosfónico están sobre sendos grupos OH, no sobre carbonos.",
    "b": "Incorrecto: el fósforo, igual que el azufre, puede sufrir expansión de octeto; de hecho es precisamente lo que permite que el primer protón sea tan ácido (pKa 1-2).",
    "c": "Incorrecto: la explicación dada en clase no habla de ningún grupo protector, sino de la repulsión entre dos cargas negativas próximas tras la primera desprotonación.",
    "d": "Correcto: una vez perdido el primer protón, la molécula ya tiene una carga negativa; perder el segundo generaría dos cargas negativas muy próximas entre sí, con la consiguiente repulsión electrostática, así que el compuesto retrasa esa segunda pérdida subiendo su pKa efectivo."
  },
  "repetida": true
},

{
  "id": "t3-005",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Un fármaco tiene una sulfonamida en la que el nitrógeno está unido a dos grupos CH₃ (sin ningún hidrógeno directamente sobre él). ¿Cómo se clasifica ese grupo a pH fisiológico?",
  "opciones": { "a": "Como base fuerte, porque todo nitrógeno es básico por defecto", "b": "Como base fuerte, con un pKa mayor de 7,4", "c": "Como ácido débil, con un pKa entre 9 y 10, igual que una sulfonamida normal", "d": "Como grupo neutro: no puede ser base porque tiene dos -R fuertes próximos (el par no está disponible) y no puede ser ácido porque ya no le queda ningún hidrógeno que perder" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: antes de asumir que un nitrógeno es básico hay que comprobar si su par libre está disponible; en la sulfonamida no lo está, por los dos -R fuertes de la sulfona.",
    "b": "Incorrecto: precisamente por los -R fuertes de la sulfona, el par del nitrógeno no está disponible, así que este grupo nunca puede comportarse como base.",
    "c": "Incorrecto: para ser ácida, la sulfonamida necesita un hidrógeno que perder; si el nitrógeno está sustituido por dos CH₃ ya no tiene ningún hidrógeno, así que no puede comportarse como ácido.",
    "d": "Correcto: los dos -R fuertes de la sulfona impiden que el par esté disponible (no puede ser base), y al no quedar ningún hidrógeno sobre el nitrógeno tampoco puede perder ningún protón (no puede ser ácido); el resultado es un grupo neutro."
  },
  "repetida": false
},

{
  "id": "t3-006",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "La N-arilsulfonamida (una sulfonamida en la que, además, el nitrógeno está unido a un anillo aromático) tiene un pKa de 6-7, más bajo que el de una sulfonamida normal (9-10). ¿A qué se debe esta mayor acidez?",
  "opciones": { "a": "A que el nitrógeno deja de estar unido a la sulfona en este grupo", "b": "A que, además de los dos -R fuertes de la sulfona, aparece un -R débil adicional del anillo aromático que ayuda a estabilizar todavía más la base conjugada", "c": "A que el anillo aromático aporta un fuerte efecto +I que estabiliza la carga negativa", "d": "A que el anillo aromático elimina por completo la posibilidad de resonancia de la sulfona" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: en la N-arilsulfonamida el nitrógeno sigue unido a la sulfona; lo que cambia es que, además, se conecta a un anillo aromático.",
    "b": "Correcto: al añadir el anillo aromático, la base conjugada gana un canal de estabilización adicional (un -R más débil que el de la sulfona, pero que suma), lo que baja el pKa desde 9-10 hasta 6-7.",
    "c": "Incorrecto: el efecto que aporta el anillo aromático para estabilizar una carga negativa por resonancia es un efecto -R, no un efecto +I (que además estabilizaría cargas positivas, no negativas).",
    "d": "Incorrecto: el anillo aromático no elimina la resonancia de la sulfona, sino que añade una vía de estabilización adicional para la carga negativa."
  },
  "repetida": false
},

{
  "id": "t3-007",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Una imida (grupo con dos carbonilos flanqueando un mismo nitrógeno, como una 'doble amida') tiene un pKa en torno a 8-10, similar al de una sulfonamida. ¿Cuándo se comporta como grupo ácido y cuándo como grupo neutro?",
  "opciones": { "a": "Es ácida si el nitrógeno tiene un hidrógeno que perder; si en su lugar hay un CH₃, no le queda hidrógeno que perder y es neutra (nunca puede ser básica, por los dos -R fuertes de los carbonilos)", "b": "Es siempre neutra, tenga o no un hidrógeno sobre el nitrógeno", "c": "Es ácida únicamente si está sobre un anillo aromático", "d": "Es siempre básica, como cualquier grupo con nitrógeno" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: al igual que en la sulfonamida, los dos -R fuertes de los carbonilos impiden que el nitrógeno actúe como base; será ácida solo si conserva un hidrógeno que perder, y neutra si ese hidrógeno ha sido sustituido (por ejemplo, por un CH₃).",
    "b": "Incorrecto: si el nitrógeno conserva su hidrógeno, la imida es un ácido débil (pKa 8-10), no un grupo neutro.",
    "c": "Incorrecto: la acidez de la imida no depende de estar sobre un anillo aromático, sino de si conserva un hidrógeno sobre el nitrógeno.",
    "d": "Incorrecto: la imida nunca puede ser básica, precisamente porque tiene dos -R fuertes próximos que dejan el par del nitrógeno no disponible."
  },
  "repetida": false
},

{
  "id": "t3-008",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "¿Por qué una amida nunca puede actuar como base, a pesar de tener un nitrógeno con un par de electrones?",
  "opciones": { "a": "Porque el nitrógeno de una amida no tiene, en realidad, ningún par de electrones libre", "b": "Porque el par libre del nitrógeno está resonando constantemente hacia el carbonilo (un -R fuerte próximo), así que no está disponible para captar un protón", "c": "Porque las amidas tienen siempre carga negativa permanente", "d": "Porque el oxígeno del carbonilo capta todos los protones antes de que puedan llegar al nitrógeno" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el nitrógeno de la amida sí tiene un par de electrones; el problema no es su ausencia, sino que ese par está ocupado en la resonancia con el carbonilo.",
    "b": "Correcto: el par libre del nitrógeno de la amida resuena hacia el carbonilo (efecto -R fuerte, la carga cae en el oxígeno), por lo que ese par no está disponible para captar un protón y actuar como base.",
    "c": "Incorrecto: las amidas son grupos neutros (o, como mucho, ácidos muy débiles si tienen un hidrógeno sobre el nitrógeno), no tienen carga negativa permanente.",
    "d": "Incorrecto: no se trata de una competencia por captar protones, sino de que el par del nitrógeno está deslocalizado por resonancia y por tanto no disponible."
  },
  "repetida": true
},

{
  "id": "t3-009",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "La diarilamina (una amina con el nitrógeno unido a dos anillos bencénicos) aparece en la tabla de grupos neutros. ¿Por qué no es una base, a pesar de ser formalmente una amina?",
  "opciones": { "a": "Porque está siempre protonada de forma permanente, como una sal de amonio", "b": "Porque el nitrógeno de la diarilamina no tiene, en realidad, ningún par de electrones", "c": "Porque los anillos bencénicos son ácidos por sí mismos", "d": "Porque tiene dos efectos -R medios (uno hacia cada anillo), y esos dos efectos juntos dejan el par libre del nitrógeno no disponible para captar un protón" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: si estuviera protonada de forma permanente sería una sal de amonio con carga positiva fija, no un grupo neutro como aparece en la tabla.",
    "b": "Incorrecto: el nitrógeno de la diarilamina sí tiene un par de electrones; lo que ocurre es que ese par prefiere resonar hacia los anillos en lugar de estar disponible para protonarse.",
    "c": "Incorrecto: los anillos bencénicos no son ácidos en sí mismos; lo que hacen es ofrecer una vía de resonancia que compite con la capacidad del nitrógeno de captar un protón.",
    "d": "Correcto: aunque un solo -R medio hacia un anillo (como en la arilamina) no anula por sí solo la basicidad, dos efectos -R medios simultáneos (uno hacia cada benceno) sí dejan el par libre no disponible, por lo que la diarilamina resulta neutra."
  },
  "repetida": false
},

{
  "id": "t3-010",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "¿En qué dos situaciones, según la regla explicada en clase, el par libre de un nitrógeno deja de estar disponible para actuar como base?",
  "opciones": { "a": "Cuando la molécula completa tiene más de veinte átomos de carbono", "b": "Cuando hay un efecto -R fuerte próximo (la carga por resonancia cae en un heteroátomo), o cuando hay dos efectos -R medios próximos (la carga cae en un carbono en ambos casos)", "c": "Cuando el nitrógeno está unido a más de un átomo de hidrógeno", "d": "Cuando hay una carga negativa cerca, o cuando el nitrógeno está en un anillo de cinco miembros" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el tamaño total de la molécula no tiene ninguna relación con la disponibilidad del par libre de un nitrógeno concreto.",
    "b": "Correcto: el par del nitrógeno deja de estar disponible cuando existe un -R fuerte próximo (la carga por resonancia acaba en azufre, oxígeno o nitrógeno) o cuando hay dos -R medios próximos simultáneos (la carga por resonancia acaba en un carbono en ambos casos).",
    "c": "Incorrecto: el número de hidrógenos sobre el nitrógeno no determina la disponibilidad de su par libre; lo que importa es hacia dónde puede resonar ese par.",
    "d": "Incorrecto: ni la presencia de una carga negativa cercana ni el tamaño del anillo son los criterios usados; lo relevante son los efectos -R sobre el propio par del nitrógeno."
  },
  "repetida": true
},

{
  "id": "t3-011",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Los alcoholes y las amidas aparecen en la tabla de grupos neutros a pH fisiológico, aunque en realidad son ácidos muy débiles (pKa en torno a 14-15). ¿Cuándo hay que empezar a considerarlos como grupos ácidos en un ejercicio de especiación?",
  "opciones": { "a": "Solo si el alcohol o la amida están sobre un anillo aromático", "b": "Solo si el fármaco no tiene ningún otro grupo ionizable", "c": "Nunca, siempre se consideran neutros pase lo que pase", "d": "Cuando el enunciado del ejercicio da explícitamente un pKa de ese orden (14-15) para ese grupo concreto; entonces hay que incluirlo en el equilibrio de especiación, aunque en la práctica casi nunca llegue a ionizarse a pH fisiológico" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: estar sobre un anillo aromático (como en el fenol) cambia por completo el pKa del grupo OH, convirtiéndolo en un ácido normal de la tabla, no es el criterio que determina si un alcohol alifático o una amida deben incluirse en la especiación.",
    "b": "Incorrecto: la razón para incluirlos no depende de si hay otros grupos ionizables, sino de si el enunciado asigna explícitamente ese pKa al alcohol o a la amida.",
    "c": "Incorrecto: si el enunciado asigna explícitamente un pKa de 14-15 a ese grupo, hay que incorporarlo al equilibrio de especiación, aunque en la práctica esa forma ionizada nunca se alcance a pH fisiológico.",
    "d": "Correcto: por defecto se tratan como neutros porque nunca se alcanza un pH de 14-15 en el organismo, pero si el ejercicio da explícitamente ese pKa para el grupo, hay que incluirlo igualmente en la especiación completa, tal como se hizo en varios ejemplos de seminario."
  },
  "repetida": true
},

{
  "id": "t3-012",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Entre las alquilaminas primarias (pKa ≈ 9-10), secundarias (pKa ≈ 10-11) y terciarias, ¿cuál es la más básica, y por qué la terciaria no lo es a pesar de tener tres grupos con efecto +I?",
  "opciones": { "a": "Las tres tienen exactamente la misma basicidad", "b": "La secundaria es la más básica: aunque la terciaria acumula más efecto +I, sufre un mayor impedimento estérico que dificulta que su par libre alcance a atacar al protón, por lo que resulta menos básica de lo esperado", "c": "La terciaria es la más básica porque tiene tres efectos +I sumados", "d": "La primaria es siempre la más básica de las tres" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: existen diferencias de basicidad entre las tres, aunque sean relativamente pequeñas; todas están por encima de pH 7,4.",
    "b": "Correcto: la amina secundaria combina un buen efecto +I con menos impedimento estérico que la terciaria, lo que le permite ser la más básica de las tres; la terciaria, pese a tener más efecto +I, ve dificultado el ataque de su par libre al protón por el mayor volumen a su alrededor.",
    "c": "Incorrecto: aunque el razonamiento del efecto +I acumulado parece lógico, en la práctica el impedimento estérico de la amina terciaria contrarresta esa ventaja electrónica y la deja por debajo de la secundaria.",
    "d": "Incorrecto: la amina primaria, con un solo efecto +I, es la menos básica de las tres (aunque las tres siguen siendo bases fuertes a pH fisiológico)."
  },
  "repetida": false
},

{
  "id": "t3-013",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Una amina alifática primaria tiene un pKa aproximado de 9-10, mientras que una arilamina (una amina que cuelga de un benceno) tiene un pKa aproximado de 4-5, mucho más bajo. ¿A qué se debe esta diferencia?",
  "opciones": { "a": "A que la arilamina no tiene ningún par libre en el nitrógeno", "b": "A que en la arilamina el par libre del nitrógeno puede resonar hacia el anillo bencénico (un efecto -R medio), lo que reduce su disponibilidad para captar un protón", "c": "A que el nitrógeno de la arilamina tiene menor número atómico que el de la amina alifática", "d": "A que el benceno de la arilamina actúa como un grupo +I muy fuerte" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la arilamina sí tiene un par libre en el nitrógeno; de hecho, por eso sigue siendo una base (aunque débil), y no un grupo neutro como la diarilamina.",
    "b": "Correcto: en la arilamina, el par libre del nitrógeno puede resonar hacia el anillo bencénico (efecto -R medio, la carga cae en un carbono), lo que reduce la disponibilidad de ese par para actuar como base, bajando el pKa respecto a una amina alifática equivalente.",
    "c": "Incorrecto: el número atómico del nitrógeno es idéntico en ambos casos; la diferencia la marca la posibilidad de resonancia con el anillo, no el propio átomo de nitrógeno.",
    "d": "Incorrecto: el benceno no actúa aquí como grupo +I, sino que ofrece una vía de resonancia (-R medio) para el par libre del nitrógeno."
  },
  "repetida": false
},

{
  "id": "t3-014",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Una amina aromática de tipo piridina (el nitrógeno integrado dentro del propio anillo aromático) mantiene una basicidad moderada (pKa 4-6) a pesar de formar parte de un anillo. ¿Por qué, a diferencia de la arilamina, su par libre no se pierde por resonancia hacia el anillo?",
  "opciones": { "a": "Porque el anillo de la piridina no es aromático", "b": "Porque el nitrógeno de la piridina tiene hibridación sp, como ocurre en un alquino", "c": "Porque el nitrógeno de la piridina no tiene, en realidad, ningún par libre", "d": "Porque el nitrógeno de la piridina tiene hibridación sp2, con su par libre situado en un orbital en el plano del anillo (fuera del sistema π aromático), por lo que no puede resonar hacia el anillo sin romper la aromaticidad" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: con el criterio simplificado de aromaticidad usado en clase (anillo de seis con hasta tres dobles enlaces), la piridina sí es aromática, igual que el benceno.",
    "b": "Incorrecto: la hibridación sp correspondería a una geometría lineal (como en un alquino o un nitrilo); el nitrógeno de la piridina es sp2, con geometría trigonal plana.",
    "c": "Incorrecto: sí tiene un par libre; precisamente ese par disponible es el que se protona y hace de la piridina una base (aunque débil).",
    "d": "Correcto: el nitrógeno de tipo piridina tiene hibridación sp2 (geometría trigonal plana, típica de todo lo que forma parte de un anillo aromático); su par libre ocupa un orbital en el plano del anillo, fuera del sistema π, por lo que no puede resonar sin romper la aromaticidad del ciclo, y queda siempre disponible como base moderada."
  },
  "repetida": false
},

{
  "id": "t3-015",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Las iminas (C=N formado a partir de un carbonilo y una amina primaria) son bases débiles con un pKa aproximado de 3-4, de las más bajas entre las bases nitrogenadas no aromáticas vistas en clase. Sobre el par de electrones del nitrógeno de la imina, ¿qué es correcto afirmar?",
  "opciones": { "a": "El par del nitrógeno de la imina siempre está resonando hacia el doble enlace, igual que en una amida", "b": "Las iminas son las bases más fuertes de toda la tabla de pKa", "c": "Las iminas no tienen, en realidad, ningún par de electrones en el nitrógeno", "d": "El par del nitrógeno de la imina está totalmente disponible (no tiene ninguna resonancia posible que se lo quite), pero aun así se trata de una base débil" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: a diferencia de la amida, en la imina el par del nitrógeno no está implicado en ninguna resonancia con el doble enlace C=N; está disponible en su totalidad.",
    "b": "Incorrecto: las bases más fuertes de la tabla son la guanidina y la amidina (pKa 10-13); la imina, con pKa 3-4, es de las más débiles.",
    "c": "Incorrecto: el nitrógeno de la imina sí conserva un par de electrones libre, que es precisamente el que le confiere su (débil) carácter básico.",
    "d": "Correcto: el par del nitrógeno de la imina está completamente disponible (no hay ninguna forma resonante que se lo retire); aun así, las iminas son bases débiles, con un pKa bajo (3-4) simplemente por la naturaleza del propio grupo."
  },
  "repetida": false
},

{
  "id": "t3-016",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "En una amidina (un carbono con doble enlace a un nitrógeno y, unido al mismo carbono, otro nitrógeno con un par libre tipo amina), ¿cuál de los dos nitrógenos se protona a pH fisiológico y por qué?",
  "opciones": { "a": "El nitrógeno tipo amina (NH₂), simplemente porque tiene más hidrógenos disponibles", "b": "Se protonan los dos nitrógenos simultáneamente, dando siempre un dicatión", "c": "El nitrógeno del doble enlace, porque su par libre no tiene ninguna forma resonante que se lo retire, mientras que el par del nitrógeno tipo amina sí puede resonar hacia el otro nitrógeno (un heteroátomo, efecto -R fuerte) y perder disponibilidad", "d": "Ninguno de los dos, porque la amidina es, en conjunto, un grupo neutro" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el número de hidrógenos no es el criterio; lo decisivo es qué nitrógeno conserva el par disponible tras analizar las posibles resonancias.",
    "b": "Incorrecto: solo uno de los dos nitrógenos se protona en condiciones normales (dando un catión con una sola carga positiva sobre el grupo), no los dos a la vez.",
    "c": "Correcto: el nitrógeno tipo amina puede resonar su par hacia el otro nitrógeno (un heteroátomo, efecto -R fuerte), perdiendo disponibilidad; el nitrógeno del doble enlace no tiene ninguna resonancia que le retire su par, así que es el que queda disponible y se protona.",
    "d": "Incorrecto: la amidina es una de las bases más fuertes de la tabla (pKa 10-11) y a pH fisiológico está protonada, no es un grupo neutro."
  },
  "repetida": true
},

{
  "id": "t3-017",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "La guanidina (una amidina con un tercer nitrógeno adicional) es la base más fuerte de toda la tabla de pKa usada en clase, con un valor aproximado de 12-13. ¿Qué implica esto a pH fisiológico?",
  "opciones": { "a": "Que a pH fisiológico es prácticamente imposible que la guanidina esté desprotonada; está protonada con casi total seguridad", "b": "Que la guanidina se comporta como un ácido fuerte a pH fisiológico", "c": "Que la guanidina se comporta exactamente igual que un alcohol a pH fisiológico", "d": "Que la guanidina nunca puede llegar a protonarse en ningún compuesto" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: con un pKa tan alto (12-13), muy por encima del pH fisiológico (7,4), la guanidina está protonada prácticamente siempre; haría falta un pH extremadamente alto (inalcanzable en el organismo) para que perdiera su protón.",
    "b": "Incorrecto: la guanidina es la base más fuerte de la tabla, no un ácido; un pKa de 12-13 en una base indica basicidad extrema, no acidez.",
    "c": "Incorrecto: el alcohol es un ácido muy débil (pKa ≈ 14, neutro a pH fisiológico); la guanidina es una base extremadamente fuerte (protonada a pH fisiológico), su comportamiento es opuesto.",
    "d": "Incorrecto: es justo lo contrario; la guanidina está protonada de forma prácticamente constante a los pH que maneja el organismo."
  },
  "repetida": true
},

{
  "id": "t3-018",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Según la regla usada durante todo el curso para el pH fisiológico (7,4), ¿cómo se clasifican un ácido con pKa 4,5 y una base con pKa 9?",
  "opciones": { "a": "El ácido es débil y la base es débil", "b": "El ácido es débil y la base es fuerte", "c": "El ácido es fuerte y la base es débil", "d": "El ácido es fuerte (pKa < 7,4) y la base es fuerte (pKa > 7,4)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: con esos valores de pKa, ni el ácido ni la base cumplen el criterio de 'débil' según la regla del pH fisiológico.",
    "b": "Incorrecto: el ácido, con pKa 4,5 (menor que 7,4), se clasifica como fuerte, no como débil.",
    "c": "Incorrecto: la base, con pKa 9 (mayor que 7,4), se clasifica como fuerte, no como débil.",
    "d": "Correcto: para los ácidos, un pKa por debajo de 7,4 se considera ácido fuerte a pH fisiológico; para las bases, un pKa por encima de 7,4 se considera base fuerte. Con pKa 4,5 (ácido) y pKa 9 (base), ambos cumplen esa condición."
  },
  "repetida": true
},

{
  "id": "t3-019",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Al construir el equilibrio de especiación de un fármaco con un grupo ácido y un grupo básico, ¿cómo se representa siempre la especie de partida, a pH muy bajo?",
  "opciones": { "a": "Ambos grupos desprotonados desde el inicio", "b": "Ambos grupos con carga positiva desde el inicio", "c": "El grupo ácido protonado (neutro, con su hidrógeno) y el grupo básico también protonado (con carga positiva)", "d": "El grupo ácido ya desprotonado (con carga negativa) y el grupo básico en forma neutra" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: a pH bajo ningún grupo ácido está desprotonado todavía; la desprotonación ocurre al subir el pH, no en la especie inicial.",
    "b": "Incorrecto: solo el grupo básico protonado aporta carga positiva en la especie inicial; el grupo ácido, en su forma neutra de partida, no tiene carga.",
    "c": "Correcto: a pH muy bajo, los grupos ácidos siempre parten en su forma neutra protonada (con su hidrógeno) y los grupos básicos parten protonados con carga positiva; esta es la especie de partida de cualquier equilibrio de especiación.",
    "d": "Incorrecto: los grupos ácidos parten neutros (con su hidrógeno, sin ionizar), no desprotonados; se van desprotonando a medida que sube el pH, no al principio."
  },
  "repetida": true
},

{
  "id": "t3-020",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "En la especiación de un fármaco con un grupo ácido (pKa 9) y un grupo básico (pKa 5), ¿qué protón se pierde primero al ir subiendo el pH desde valores muy ácidos?",
  "opciones": { "a": "El del grupo ácido, porque los grupos ácidos siempre pierden su protón antes que los básicos", "b": "El del grupo con menor pKa —en este caso, el grupo básico, con pKa 5—, independientemente de si es un grupo ácido o uno básico", "c": "Los dos protones se pierden exactamente al mismo valor de pH", "d": "El del grupo con mayor pKa" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: no hay ninguna prioridad automática de los grupos ácidos sobre los básicos; lo que decide el orden es únicamente el valor del pKa, no el tipo de grupo.",
    "b": "Correcto: en clase se insiste en que se pierde primero el protón del grupo con menor pKa, sea este ácido o básico; en este ejemplo, el grupo básico (pKa 5) pierde su protón antes que el grupo ácido (pKa 9).",
    "c": "Incorrecto: cada protón se pierde en un rango de pH distinto, correspondiente a su propio pKa; solo coincidirían si ambos pKa fueran iguales.",
    "d": "Incorrecto: es justo al revés: se pierde primero el protón del grupo con menor pKa, no el de mayor pKa."
  },
  "repetida": true
},

{
  "id": "t3-021",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "En un fármaco con solo dos pKa reales se construye también una 'cuarta especie' que en la práctica casi nunca existe de verdad. ¿Cómo se obtiene esa especie y cómo hay que etiquetarla?",
  "opciones": { "a": "No hay que construir ninguna cuarta especie cuando el fármaco solo tiene dos pKa", "b": "Añadiendo un protón extra que la estructura real del fármaco no tiene", "c": "Haciendo el proceso de desprotonación contrario al orden real (dejando protonado el grupo de mayor pKa y desprotonado el de menor pKa); se indica como especie minoritaria en todo el rango de pH fisiológico", "d": "Quitando los dos protones a la vez; se etiqueta siempre como zwitterión" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente en fármacos con dos pKa (el caso más habitual en examen) es donde siempre hay que construir esta cuarta especie minoritaria, para completar las cuatro combinaciones posibles.",
    "b": "Incorrecto: no se añade ningún protón que la molécula no tenga; simplemente se reordena cuál de los dos protones reales se pierde primero.",
    "c": "Correcto: la cuarta especie se construye invirtiendo el orden real de desprotonación (el grupo que normalmente perdería su protón primero se deja protonado, y el que lo perdería después se desprotona); como en la práctica es muy improbable que ocurra así, se etiqueta siempre como minoritaria en todo el rango de pH fisiológico.",
    "d": "Incorrecto: no se quitan los dos protones a la vez, sino que se invierte el orden de pérdida; y esa cuarta especie no siempre es un zwitterión (depende de qué grupos tenga el fármaco, puede ser también un monocatión, por ejemplo)."
  },
  "repetida": true
},

{
  "id": "t3-022",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "En el equilibrio de especiación de un fármaco con un grupo ácido y un grupo básico, ¿cómo se llama la especie que conserva la carga positiva del grupo básico protonado a la vez que el grupo ácido ya está desprotonado (con carga negativa)?",
  "opciones": { "a": "Dianión", "b": "Monocatión", "c": "Especie neutra", "d": "Zwitterión (o anfolito)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el dianión tendría dos cargas negativas netas, sin ninguna carga positiva; aquí hay una carga positiva y una negativa simultáneas.",
    "b": "Incorrecto: el monocatión tiene una única carga positiva neta, sin ninguna carga negativa que la compense; aquí hay una carga positiva y una negativa a la vez.",
    "c": "Incorrecto: la especie neutra no tiene ninguna carga (ni el grupo ácido ni el básico están ionizados); aquí, en cambio, ambos grupos están ionizados a la vez, con cargas de signo opuesto.",
    "d": "Correcto: cuando una especie presenta simultáneamente una carga positiva (del grupo básico protonado) y una carga negativa (del grupo ácido desprotonado), se llama zwitterión o anfolito, del alemán."
  },
  "repetida": true
},

{
  "id": "t3-023",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Según la regla de predominio (regla del ±2) usada en las curvas de especiación, ¿qué diferencia hay entre que una especie 'domine' a un pH determinado y que sea 'única' a ese pH?",
  "opciones": { "a": "Una especie es única en cualquier punto donde exista, aunque sea en pequeña proporción", "b": "Son sinónimos: 'domina' y 'única' significan exactamente lo mismo", "c": "Una especie domina (es mayoritaria) ya desde el propio valor del pKa correspondiente hacia el lado que le toque; para ser única (prácticamente el 100 %) hace falta alejarse unas dos unidades de pH de ese pKa, y solo si ese rango no se solapa con la especie vecina", "d": "Una especie solo puede 'dominar' si tiene carga positiva" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: existir en pequeña proporción es justo lo contrario de ser única; para ser única, esa especie debe representar prácticamente el 100 % del total a ese pH.",
    "b": "Incorrecto: son conceptos distintos y la propia guía de estudio insiste en no confundirlos; 'domina' es simplemente ser mayoritaria, 'única' es estar prácticamente sola.",
    "c": "Correcto: la especie domina (más del 50 %) ya a partir del propio pKa de la transición; para ser única (prácticamente el 100 %) hace falta alejarse unas dos unidades de pH de ese pKa, y ese rango de unicidad solo se cumple si no se solapa con el intervalo de aparición de la especie vecina.",
    "d": "Incorrecto: cualquier especie, tenga carga positiva, negativa o sea neutra, puede dominar en su rango de pH correspondiente; la carga no es el criterio."
  },
  "repetida": false
},

{
  "id": "t3-024",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Un fármaco tiene una arilamina con pKa 2,17 y una N-arilsulfonamida con pKa 5,8. Aplicando la regla del ±2, ¿a partir de qué pH la especie más desprotonada (con la sulfonamida ionizada) se convierte en prácticamente única?",
  "opciones": { "a": "Esa especie nunca llega a ser única dentro del rango fisiológico", "b": "A partir de pH 7,8 (pKa 5,8 + 2 unidades)", "c": "A partir de pH 3,8 (pKa 5,8 − 2 unidades)", "d": "A partir de pH 5,8, justo en el valor del pKa" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: sí llega a ser única, concretamente a partir de pH 7,8, un valor dentro del rango de pH que se maneja en los ejercicios de la asignatura.",
    "b": "Correcto: aplicando la regla del ±2, la especie más desprotonada se hace prácticamente única dos unidades de pH por encima de su pKa (5,8 + 2 = 7,8).",
    "c": "Incorrecto: pH 3,8 (pKa − 2) es el punto en el que esa especie empieza a aparecer, no en el que se convierte en única.",
    "d": "Incorrecto: en el propio valor del pKa (5,8) hay un 50 % de cada una de las dos especies del equilibrio correspondiente, no el 100 % de la más desprotonada."
  },
  "repetida": false
},

{
  "id": "t3-025",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "En un fármaco, una arilamina tiene un pKa de 2,17, muy por debajo del valor típico de las arilaminas (4-5). ¿Cómo se justifica esa bajada de pKa?",
  "opciones": { "a": "Porque, además de resonar hacia su propio benceno, la carga negativa de la base conjugada de esta amina puede seguir resonando hasta un grupo vecino con efecto -R fuerte (por ejemplo, una sulfonamida próxima), que aporta una estabilización adicional", "b": "Porque las arilaminas nunca tienen un pKa fijo, varía de forma aleatoria de un fármaco a otro", "c": "Porque en este fármaco el grupo amina ha dejado por completo de tener el par disponible", "d": "Porque el benceno de la arilamina tiene, en este caso, efecto +R" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: cuando el pKa de una arilamina baja muy por debajo de su rango típico, hay que buscar un efecto -R o -I adicional cercano; en los ejemplos de clase, la carga de la base conjugada de la amina puede seguir resonando hasta un grupo vecino (como una sulfonamida), que aporta un -R fuerte extra y baja el pKa hasta valores como 2,17.",
    "b": "Incorrecto: el pKa de las arilaminas no es aleatorio; parte de un valor típico (4-5) y se justifica cualquier desviación mediante efectos -R/-I o +R/+I cercanos.",
    "c": "Incorrecto: si el par no estuviera disponible en absoluto, la arilamina sería un grupo neutro (como la diarilamina), no una base débil con un pKa concreto de 2,17.",
    "d": "Incorrecto: el efecto del benceno sobre el par de una arilamina es un -R medio (que ya está incluido en el rango típico de 4-5), no un efecto +R."
  },
  "repetida": true
},

{
  "id": "t3-026",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Un fármaco tiene un ácido aril-carboxílico y un fenol en una posición cercana. En vez de bajar respecto a su valor típico, el pKa del fenol SUBE. ¿Cuál es la explicación dada en clase para este caso poco habitual?",
  "opciones": { "a": "Porque se trata de un error de la tabla de pKa que nunca ocurre en la práctica", "b": "Porque el efecto -R de un carbonilo cercano siempre sube el pKa de cualquier grupo vecino", "c": "Porque al perder los dos protones (del carboxílico y del fenol) se generarían dos cargas negativas muy próximas entre sí, y esa repulsión electrostática hace que el fármaco retrase al máximo la pérdida del segundo protón, subiendo su pKa", "d": "Porque, en ese caso concreto, el fenol deja de ser un grupo ácido" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: se trata de un fenómeno real y explicado en clase, no de un error; de hecho se compara explícitamente con el comportamiento del segundo protón del ácido fosfónico/fosfórico.",
    "b": "Incorrecto: no es una regla general; normalmente un efecto -R baja el pKa (da acidez); esta subida es un caso particular explicado por la repulsión entre dos cargas negativas próximas, no por el efecto -R en sí.",
    "c": "Correcto: cuando ambos grupos ya están ionizados, tener dos cargas negativas muy próximas genera repulsión electrostática; para minimizar ese problema, el fármaco retrasa la salida del segundo protón, lo que se traduce en una subida de su pKa respecto al valor tabulado, exactamente el mismo fenómeno que ocurre con el segundo protón del ácido fosfórico/fosfónico.",
    "d": "Incorrecto: el fenol sigue siendo un grupo ácido; lo único que cambia es el valor concreto de su pKa, que sube por la repulsión de cargas, no su naturaleza ácida."
  },
  "repetida": false
},

{
  "id": "t3-027",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "¿Es cierto que todo fármaco de examen debe tener necesariamente un grupo ácido y un grupo básico?",
  "opciones": { "a": "Sí, es un requisito impuesto explícitamente por el guion de fármacos", "b": "Sí, siempre, porque si no la especiación no se podría llevar a cabo", "c": "No; un fármaco puede tener, por ejemplo, dos grupos básicos (dos aminas) o dos grupos ácidos, y la especiación se hace igualmente ordenando los pKa de menor a mayor", "d": "No, un fármaco de examen nunca puede tener dos grupos del mismo tipo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el guion de fármacos no exige tener un ácido y una base; simplemente pide identificar y especiar los grupos ionizables que realmente tenga el fármaco, sean del tipo que sean.",
    "b": "Incorrecto: se explica expresamente en clase que 'no siempre va a haber un ácido y una base en el mismo fármaco, a veces son dos bases'; la especiación se hace igual, solo cambia el tipo de grupos.",
    "c": "Correcto: en los ejemplos de seminario aparecen fármacos con dos grupos básicos (dos aminas) o con dos grupos ácidos; el procedimiento de especiación es el mismo: se ordenan los pKa de menor a mayor y se van perdiendo los protones en ese orden.",
    "d": "Incorrecto: hay ejemplos concretos trabajados en clase de fármacos con dos aminas o con dos grupos ácidos simultáneamente."
  },
  "repetida": false
},

{
  "id": "t3-028",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "De cara al tiempo disponible en el examen, ¿qué nivel de detalle se pide al justificar una subida o bajada de pKa mediante formas resonantes?",
  "opciones": { "a": "Basta con iniciar el primer movimiento de flechas y explicar brevemente si hay un efecto -R/-I o +R/+I responsable del cambio; no se exige un desarrollo exhaustivo", "b": "No hace falta justificar nunca ninguna subida o bajada de pKa", "c": "Solo se puede justificar una subida o bajada de pKa mediante cálculos numéricos con Henderson-Hasselbalch", "d": "Hay que dibujar el mecanismo de resonancia completo, con absolutamente todas las formas resonantes posibles" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la profesora explica que, dado el poco tiempo disponible en el examen, basta con hacer una 'minijustificación': iniciar el primer movimiento de flechas e indicar si el efecto responsable es -R, -I, +R o +I.",
    "b": "Incorrecto: si un pKa se ha movido de forma significativa respecto al valor tabulado, sí hay que justificarlo brevemente; solo no hace falta justificar los valores que ya están dentro del rango esperado.",
    "c": "Incorrecto: la ecuación de Henderson-Hasselbalch se usa para calcular porcentajes de ionización a un pH dado, no para justificar por qué el pKa de un grupo ha subido o bajado respecto a su valor tabulado.",
    "d": "Incorrecto: se insiste repetidamente en que no hace falta dibujar todas las formas resonantes, solo el primer movimiento, precisamente porque en el examen se va muy justo de tiempo."
  },
  "repetida": true
},

{
  "id": "t3-029",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "Para decidir de forma rápida si un anillo con heteroátomos es aromático (criterio simplificado usado en clase, sin entrar en la regla de Hückel formal), ¿qué regla se aplica?",
  "opciones": { "a": "Solo el benceno puro, sin ningún heteroátomo, puede considerarse aromático", "b": "Ningún anillo que contenga heteroátomos dentro puede ser aromático", "c": "Un anillo de seis miembros es aromático si tiene hasta tres dobles enlaces, y uno de cinco miembros si tiene hasta dos dobles enlaces", "d": "Cualquier anillo con al menos un doble enlace es automáticamente aromático" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el criterio de aromaticidad usado no se limita al benceno puro; anillos con nitrógeno, oxígeno o azufre dentro también pueden cumplirlo.",
    "b": "Incorrecto: se explica explícitamente que los anillos con heteroátomos dentro (como la piridina) sí pueden ser aromáticos, y de hecho van a aparecer con frecuencia este año.",
    "c": "Correcto: el criterio simplificado usado en clase es que un anillo de seis miembros es aromático si tiene todos los dobles enlaces que puede tener (hasta tres), y uno de cinco miembros lo es con hasta dos dobles enlaces; la mayoría de los anillos que aparecen en los fármacos de este curso llevan algún heteroátomo dentro y son igualmente aromáticos.",
    "d": "Incorrecto: tener un único doble enlace no basta; hace falta el número máximo de dobles enlaces posibles según el tamaño del anillo (tres para uno de seis, dos para uno de cinco)."
  },
  "repetida": false
},

{
  "id": "t3-030",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "¿Cuál es la primera pregunta que hay que hacerse ante cualquier hidrógeno de un grupo funcional para saber si es ácido, básico o neutro?",
  "opciones": { "a": "Si está sobre azufre u oxígeno (en cuyo caso es siempre ácido) o sobre nitrógeno (en cuyo caso hay que estudiar si el par libre está disponible)", "b": "Cuántos átomos de carbono tiene la molécula en total", "c": "Si el grupo se encuentra en la primera o en la segunda mitad de la molécula", "d": "Si el fármaco en su conjunto es una base de Lewis fuerte" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el primer criterio, repetido constantemente en clase, es identificar el átomo sobre el que está el hidrógeno: si es azufre u oxígeno, es siempre ácido sin discusión; si es nitrógeno, hay que estudiar caso por caso si su par libre está disponible.",
    "b": "Incorrecto: el número total de carbonos de la molécula es relevante para otros cálculos (como el de Lenke para solubilidad), no para decidir si un grupo concreto es ácido, básico o neutro.",
    "c": "Incorrecto: la posición del grupo dentro de la molécula (izquierda o derecha) no determina su carácter ácido, básico o neutro; lo que importa es el átomo sobre el que está el hidrógeno y su entorno electrónico.",
    "d": "Incorrecto: el concepto de 'base de Lewis fuerte' aplicado a todo el fármaco no es el criterio usado en clase; se analiza grupo por grupo según el átomo implicado."
  },
  "repetida": false
},

{
  "id": "t3-031",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "El fenol (pKa ≈ 9-11) es mucho menos ácido que un ácido carboxílico alifático (pKa ≈ 4-5), aunque en ambos casos hay resonancia posible en la base conjugada. ¿Por qué el ácido carboxílico es mucho más ácido?",
  "opciones": { "a": "Porque el fenol no tiene ninguna forma resonante posible en su base conjugada", "b": "Porque en el ácido carboxílico la base conjugada tiene dos formas resonantes equivalentes con la carga negativa repartida entre dos oxígenos, mientras que en el fenolato la carga por resonancia solo puede caer sobre carbonos del anillo, mucho menos estables soportando carga negativa", "c": "Porque el oxígeno del ácido carboxílico es un átomo distinto del oxígeno del fenol", "d": "Porque el fenol tiene un efecto +R muy fuerte que le sube el pKa" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el fenolato sí tiene formas resonantes (la carga puede pasar por varios carbonos del anillo); lo que ocurre es que esas formas son menos estabilizantes que las del carboxilato.",
    "b": "Correcto: la base conjugada del ácido carboxílico reparte la carga negativa por resonancia entre dos oxígenos (dos formas resonantes equivalentes, muy estables); en el fenolato, en cambio, la carga solo puede deslocalizarse hacia carbonos del anillo, que son mucho menos capaces de soportar carga negativa, de ahí la diferencia de acidez.",
    "c": "Incorrecto: el átomo que soporta la carga es un oxígeno en ambos casos; la diferencia de acidez viene de las formas resonantes disponibles, no de que sean oxígenos distintos.",
    "d": "Incorrecto: no hay ningún efecto +R operando aquí; la explicación es que la resonancia del fenolato termina sobre carbonos (poco estabilizantes), no sobre otro oxígeno como en el carboxilato."
  },
  "repetida": false
},

{
  "id": "t3-032",
  "tema": "Tema 3 — Especiación y clasificación ácido/base",
  "pregunta": "En un fármaco de seminario con tres pKa reales (algo que, según la profesora, 'no va a pasar nunca en examen', pero sí puede aparecer en los seminarios), ¿en qué se diferencia la construcción de la cuarta especie respecto al caso habitual de dos pKa?",
  "opciones": { "a": "Con tres pKa, la cuarta especie es siempre obligatoriamente un zwitterión", "b": "Con tres pKa solo puede haber tres especies en total, nunca cuatro", "c": "No hace falta construir ninguna cuarta especie cuando el fármaco tiene tres pKa", "d": "La cuarta especie sale directamente de la propia secuencia de ionización (se pierden los tres protones reales, uno a uno, en orden de menor a mayor pKa), sin necesidad de inventar ninguna especie minoritaria artificial como en el caso de dos pKa" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: qué tipo de especie resulta (zwitterión, dianión, etc.) depende de la combinación concreta de grupos ácidos y básicos del fármaco, no es automáticamente un zwitterión en todos los casos.",
    "b": "Incorrecto: con tres pKa reales se obtienen igualmente cuatro especies (una más que el número de pKa), igual que ocurre con dos pKa.",
    "c": "Incorrecto: también hay una cuarta especie con tres pKa, pero a diferencia del caso de dos pKa, esta sale de forma natural del propio proceso de ionización, no hay que inventarla.",
    "d": "Correcto: con tres pKa reales, las cuatro especies (catión, neutra, monoanión y dianión, por ejemplo) surgen directamente de ir perdiendo los tres protones en orden de menor a mayor pKa; no hace falta construir artificialmente ninguna especie minoritaria 'al revés', como sí ocurre cuando solo hay dos pKa."
  },
  "repetida": false
},

{
  "id": "t4-001",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "En el apartado de liberación del examen, quien no incluya la definición del proceso no puntúa nada de ese apartado, aunque el resto esté bien resuelto. Dado el poco tiempo disponible, ¿qué se recomienda hacer con esa definición?",
  "opciones": { "a": "Omitirla siempre, porque no es realmente necesaria", "b": "Resumirla al máximo —una definición mínima— porque no da tiempo a desarrollarla entera, pero incluirla siempre", "c": "Sustituirla por el cálculo numérico de Henderson-Hasselbalch", "d": "Copiarla textualmente y sin resumir, dedicándole varios minutos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: se insiste explícitamente en que quien no ponga la definición no puntúa nada de ese apartado; omitirla es la peor opción posible.",
    "b": "Correcto: dado que en el examen se va muy justo de tiempo, la recomendación es tener preparada una versión mínima y resumida de la definición, pero incluirla siempre, porque su ausencia anula la puntuación del apartado completo.",
    "c": "Incorrecto: el cálculo numérico es una parte distinta y adicional del apartado; no sustituye a la definición teórica exigida.",
    "d": "Incorrecto: dedicarle varios minutos a una definición extensa deja sin tiempo el resto del apartado, que incluye cálculos con más peso en la nota."
  },
  "repetida": true
},

{
  "id": "t4-002",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Cuál es el esquema general que hay que plantear siempre al desarrollar el proceso de liberación de un fármaco por vía oral?",
  "opciones": { "a": "Fármaco en sangre → fármaco en orina → fármaco eliminado", "b": "Fármaco ionizado → fármaco sólido → fármaco neutro", "c": "Fármaco neutro → fármaco sólido → fármaco ionizado", "d": "Fármaco sólido → fármaco neutro disuelto → especies ionizadas en disolución" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: ese esquema correspondería más bien a la etapa de eliminación (orina) o distribución (sangre), no a la liberación oral inicial.",
    "b": "Incorrecto: el esquema no empieza por la forma ionizada; el fármaco parte siempre como sólido.",
    "c": "Incorrecto: el orden está invertido; el fármaco sólido es siempre el punto de partida, no un paso intermedio.",
    "d": "Correcto: la liberación se plantea siempre como el paso de fármaco sólido a fármaco disuelto (partiendo del análisis de la especie neutra) y de ahí a las especies ionizadas presentes en la disolución acuosa correspondiente (saliva)."
  },
  "repetida": false
},

{
  "id": "t4-003",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Qué tipo de especie interesa, de forma general, para la etapa de liberación (una disolución acuosa) y cuál para la etapa de absorción (atravesar la bicapa lipídica)?",
  "opciones": { "a": "En ambos procesos interesa siempre la especie ionizada", "b": "Para liberación interesa la especie neutra; para absorción, la especie ionizada", "c": "Para liberación interesa la especie ionizada, porque polar disuelve a polar; para absorción interesa la especie neutra, para atravesar una membrana apolar", "d": "En ambos procesos interesa siempre la especie neutra" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la especie ionizada no atraviesa bien la bicapa lipídica; para la absorción interesa la especie neutra.",
    "b": "Incorrecto: está invertido; es precisamente al revés de lo que se necesita en cada etapa.",
    "c": "Correcto: en un medio acuoso como la saliva interesa que el fármaco tenga carga (mayor solubilidad); para atravesar después la bicapa lipídica, totalmente apolar, interesa la especie sin carga.",
    "d": "Incorrecto: si en ambos procesos interesara la especie neutra, no existiría el compromiso entre liberación y absorción que se explica repetidamente en clase."
  },
  "repetida": true
},

{
  "id": "t4-004",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Qué compara la tabla de Lenke (Leque) al estudiar la etapa de disolución de un fármaco?",
  "opciones": { "a": "El punto de fusión del fármaco", "b": "El número de enantiómeros posibles del fármaco", "c": "La velocidad de la reacción enzimática que sufre el fármaco", "d": "El número de carbonos 'equivalentes' de hidrofilia que aportan los grupos funcionales de la especie estudiada frente al número total de carbonos del fármaco, para decidir si predomina la hidrofilia o la lipofilia" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la tabla de Lenke no tiene relación con el punto de fusión del compuesto.",
    "b": "Incorrecto: el número de enantiómeros depende de los carbonos quirales del fármaco, no de la tabla de Lenke, que es un criterio de solubilidad.",
    "c": "Incorrecto: la tabla de Lenke se usa en el primer parcial (farmacocinética), no tiene relación con la velocidad de reacciones enzimáticas, que se estudia en el tercer parcial.",
    "d": "Correcto: la tabla de Lenke asigna a cada grupo funcional un número de carbonos 'equivalentes' de hidrofilia; sumándolos y comparándolos con el número total de carbonos de la molécula se decide si la especie es más hidrófila (soluble) o más lipófila (insoluble)."
  },
  "repetida": false
},

{
  "id": "t4-005",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "En la etapa de disolución, ¿a qué especie hay que aplicar primero la tabla de Lenke, independientemente de si domina o no al pH de trabajo?",
  "opciones": { "a": "A la especie con mayor carga (el catión o anión más ionizado)", "b": "Nunca se aplica la tabla de Lenke a la especie neutra", "c": "A la especie neutra, siempre, para valorar si el sólido de partida se disuelve bien o mal", "d": "A la especie con mayor número de carbonos totales" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la especie con carga se analiza después, solo si la especie neutra resulta insoluble y hace falta comprobar si alguna forma ionizada compensa la liberación.",
    "b": "Incorrecto: es justo lo contrario; la especie neutra es la primera y obligatoria a la que se le aplica la tabla de Lenke en la etapa de disolución.",
    "c": "Correcto: la regla explicada en clase es aplicar Lenke siempre primero a la especie neutra (el punto de partida del sólido disolviéndose), independientemente de qué especie domine realmente al pH de saliva.",
    "d": "Incorrecto: el número de carbonos totales del fármaco es un dato fijo que se usa para comparar con la hidrofilia calculada, no una especie a la que se le 'aplique' Lenke."
  },
  "repetida": true
},

{
  "id": "t4-006",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "En la tabla de Lenke, ¿cuántos átomos de carbono 'equivalentes' de hidrofilia aporta, aproximadamente, tener una carga (por ejemplo, una amina protonada o un carboxilato)?",
  "opciones": { "a": "Ninguno; una carga no aporta hidrofilia en esta tabla", "b": "Entre 1 y 2", "c": "Más de 100", "d": "Entre 20 y 30" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario, una carga es de los factores que más hidrofilia aportan en la tabla de Lenke.",
    "b": "Incorrecto: ese rango es demasiado bajo; una carga aporta muchísima más hidrofilia que un grupo neutro típico como un alcohol o una amida.",
    "c": "Incorrecto: el rango dado en clase es de 20 a 30, no una cifra superior a 100.",
    "d": "Correcto: en la tabla de Lenke, una sal (cualquier grupo con carga, ya sea catión amonio o carboxilato) aporta entre 20 y 30 átomos de carbono equivalentes de hidrofilia, cantidad casi siempre suficiente por sí sola para hacer soluble a la especie."
  },
  "repetida": true
},

{
  "id": "t4-007",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Cuando en un pH determinado coexisten una especie soluble y otra insoluble, ¿qué porcentaje debe alcanzar la especie soluble, según el guion de fármacos, para considerar buena la liberación?",
  "opciones": { "a": "Más del 60%", "b": "Exactamente el 50%", "c": "El 100%; no se admite ningún porcentaje intermedio", "d": "Más del 10%" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el criterio del guion de fármacos es que la especie soluble debe superar el 60% para considerar que la liberación es buena; por debajo de ese valor hay que proponer una sal.",
    "b": "Incorrecto: el 50% no es el criterio usado; el umbral que marca el guion es del 60%.",
    "c": "Incorrecto: no hace falta el 100%; basta con superar el 60% de especie soluble para dar por buena la liberación.",
    "d": "Incorrecto: un 10% sería claramente insuficiente según el criterio explicado; hace falta superar el 60%."
  },
  "repetida": true
},

{
  "id": "t4-008",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Cuándo es necesario aplicar la ecuación de Henderson-Hasselbalch en la etapa de liberación?",
  "opciones": { "a": "Siempre, en todos los casos, sin excepción", "b": "Solo cuando, al pH de saliva, coexisten una especie soluble y otra insoluble y ninguna de las dos está al 100%, para calcular el porcentaje exacto de cada una", "c": "Solo si el fármaco no tiene ningún grupo ionizable", "d": "Nunca; el porcentaje de cada especie se estima siempre a ojo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: si a pH de saliva solo existe una especie (por ejemplo, al 100%), no hace falta ningún cálculo adicional.",
    "b": "Correcto: cuando coexisten especie soluble e insoluble en proporciones no evidentes a simple vista, hay que calcular con Henderson-Hasselbalch el porcentaje exacto de cada una, para poder compararlo con el umbral del 60%.",
    "c": "Incorrecto: si el fármaco no tuviera ningún grupo ionizable no habría equilibrio de especiación posible y la pregunta no tendría sentido.",
    "d": "Incorrecto: precisamente cuando la intuición no basta (por ejemplo, cuando ambas especies coexisten en proporciones no evidentes) es cuando se exige el cálculo numérico exacto."
  },
  "repetida": false
},

{
  "id": "t4-009",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "En la ecuación de Henderson-Hasselbalch aplicada a un equilibrio de especiación (pH = pKa + log(base/ácido)), ¿cómo se identifica cuál de las dos especies del equilibrio es el 'ácido' y cuál la 'base'?",
  "opciones": { "a": "El ácido es siempre la especie situada a la izquierda del equilibrio de especiación, la que todavía conserva el protón (un hidrógeno más); la base es la especie de la derecha, la que ya lo ha perdido", "b": "El ácido es siempre la especie con carga positiva, y la base la especie con carga negativa", "c": "El ácido y la base se pueden intercambiar libremente sin que cambie el resultado del cálculo", "d": "El ácido es siempre el fármaco entero, y la base es siempre la molécula de agua" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en cualquier equilibrio de especiación, el ácido es la especie de la izquierda (con un hidrógeno de más) y la base conjugada es la especie de la derecha (tras perder ese hidrógeno); este criterio se aplica igual para transiciones entre grupos ácidos o básicos.",
    "b": "Incorrecto: el criterio no es el signo de la carga (una especie protonada de un grupo básico tiene carga positiva y actúa como 'ácido' del par, pero una especie protonada de un grupo ácido es neutra); lo que cuenta es cuál conserva el protón.",
    "c": "Incorrecto: intercambiarlos invierte el signo del logaritmo y da un resultado erróneo; hay que respetar cuál es cada uno según el equilibrio concreto.",
    "d": "Incorrecto: el ácido y la base del equilibrio de Henderson-Hasselbalch son las dos especies consecutivas del propio fármaco, no el fármaco entero frente al agua."
  },
  "repetida": false
},

{
  "id": "t4-010",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Un fármaco tiene un grupo amina con pKa 5. A pH de saliva (6,8), aplicando Henderson-Hasselbalch (log(base/ácido) = pH − pKa = 1,8; base/ácido = 10^1,8 ≈ 63), ¿qué porcentaje aproximado de especie protonada (soluble) y de especie neutra (insoluble) se obtiene?",
  "opciones": { "a": "100% de especie protonada", "b": "Aproximadamente 50% y 50%", "c": "Aproximadamente 98,4% de especie protonada (soluble) y 1,6% de especie neutra (insoluble)", "d": "Aproximadamente 1,6% de especie protonada (soluble) y 98,4% de especie neutra (insoluble)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: a un pH tan alejado por encima del pKa, la amina está mayoritariamente desprotonada (neutra), no protonada al 100%.",
    "b": "Incorrecto: un reparto 50/50 solo se daría si el pH de trabajo coincidiera exactamente con el pKa (5), y aquí el pH de saliva es 6,8, bastante más alejado.",
    "c": "Incorrecto: los porcentajes están invertidos; como el pH (6,8) está muy por encima del pKa (5), predomina ampliamente la especie neutra (desprotonada), no la protonada.",
    "d": "Correcto: con pH = pKa + log(base/ácido), 6,8 = 5 + log(base/ácido), de donde log(base/ácido) = 1,8 y base/ácido = 10^1,8 ≈ 63,1. Resolviendo la proporción (base + ácido = 100), la especie neutra (base, insoluble) resulta ≈98,4% y la especie protonada (ácido, soluble) ≈1,6%."
  },
  "repetida": true
},

{
  "id": "t4-011",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Siguiendo el ejemplo anterior (solo 1,6% de especie soluble en saliva, muy por debajo del 60% necesario), ¿qué solución de laboratorio se propone para mejorar la liberación de ese fármaco básico?",
  "opciones": { "a": "Enfrentar el fármaco a un ácido (por ejemplo, HCl) para crear una carga positiva permanente y comercializarlo como hidrocloruro", "b": "Enfrentar el fármaco a una base, como el hidróxido sódico", "c": "Aumentar el número de carbonos de la molécula", "d": "No existe ninguna solución posible; el fármaco no podría comercializarse" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: como el problema está en un grupo básico (la amina), se le enfrenta a un ácido en el laboratorio para generar una carga positiva permanente, comercializándose habitualmente como hidrocloruro.",
    "b": "Incorrecto: enfrentar a una base solo tendría sentido si el problema estuviera en un grupo ácido, no en uno básico como en este caso.",
    "c": "Incorrecto: aumentar el número de carbonos incrementaría la lipofilia y empeoraría todavía más la solubilidad, en la dirección opuesta a lo que se necesita.",
    "d": "Incorrecto: la formación de una sal permanente es precisamente la solución estándar de la industria farmacéutica para este tipo de problemas de liberación."
  },
  "repetida": false
},

{
  "id": "t4-012",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "De forma general, ¿cómo se elige el tipo de sal a preparar en el laboratorio para mejorar la liberación de un fármaco con problemas de solubilidad?",
  "opciones": { "a": "Siempre se enfrenta a ácido clorhídrico, sea cual sea el grupo problemático", "b": "Si el problema está en un grupo básico, se enfrenta a un ácido para crear carga positiva permanente (por ejemplo, un hidrocloruro); si está en un grupo ácido, se enfrenta a una base como el hidróxido sódico, para crear carga negativa permanente (una sal sódica)", "c": "Siempre se enfrenta a hidróxido sódico, sea cual sea el grupo problemático", "d": "No se puede elegir; la sal la determina siempre el fabricante al azar" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: usar siempre ácido clorhídrico solo tendría sentido para grupos básicos, no para los ácidos.",
    "b": "Correcto: la elección del contraión depende de qué tipo de grupo está causando el problema de solubilidad; un grupo básico se enfrenta a un ácido (hidrocloruro, por ejemplo) y un grupo ácido se enfrenta a una base como el NaOH (sal sódica, fosfato, etc.).",
    "c": "Incorrecto: usar siempre hidróxido sódico solo tendría sentido para grupos ácidos, no para los básicos, que necesitan lo contrario.",
    "d": "Incorrecto: la elección de la sal sigue una lógica química precisa (contraión de signo contrario al grupo problemático), no es una decisión arbitraria."
  },
  "repetida": false
},

{
  "id": "t4-013",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "El ibuprofeno con arginina se libera y hace efecto más rápido que el ibuprofeno solo. ¿Por qué?",
  "opciones": { "a": "Porque la arginina reduce el número de carbonos del ibuprofeno", "b": "Porque la arginina hace que el ibuprofeno deje de ionizarse por completo", "c": "Porque la arginina inactiva químicamente al ibuprofeno", "d": "Porque la arginina contiene una guanidina, una de las bases más fuertes de la tabla (pKa 12-13), que garantiza una carga positiva prácticamente permanente y aumenta mucho la solubilidad y la velocidad de liberación" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la arginina no elimina carbonos del ibuprofeno, se le añade como contraión formando una sal, sin alterar la estructura del fármaco en sí.",
    "b": "Incorrecto: es justo lo contrario, la arginina favorece que el conjunto tenga carga (ionización) de forma permanente, no que deje de ionizarse.",
    "c": "Incorrecto: la formación de la sal con arginina no inactiva al ibuprofeno; sigue siendo el mismo principio activo, solo cambia su forma de comercialización.",
    "d": "Correcto: la arginina lleva una guanidina, de las bases más fuertes de toda la tabla; al reaccionar con el ácido carboxílico del ibuprofeno, garantiza una carga permanente que aumenta mucho la hidrofilia del conjunto, acelerando la liberación y por tanto el inicio del efecto."
  },
  "repetida": true
},

{
  "id": "t4-014",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Por qué se dice que la liberación y la absorción de un fármaco 'tiran en direcciones opuestas' en cuanto a la polaridad necesaria?",
  "opciones": { "a": "Porque ambas etapas requieren exactamente la misma especie del fármaco", "b": "Porque la absorción siempre ocurre antes que la liberación", "c": "Porque para una buena liberación (medio acuoso) interesa una especie con carga, mientras que para atravesar después la bicapa lipídica en la absorción interesa la especie neutra; hay que buscar un equilibrio entre ambas necesidades", "d": "Porque no existe ninguna relación entre ambas etapas" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: si ambas etapas requirieran la misma especie no existiría ningún compromiso ni sería necesario formular sales con cuidado.",
    "b": "Incorrecto: el orden del proceso LADME es liberación primero y absorción después, no al revés.",
    "c": "Correcto: la liberación necesita una especie ionizada (polar) para disolverse bien en un medio acuoso, mientras que la absorción necesita la especie neutra (apolar) para atravesar la bicapa lipídica; formular un fármaco implica equilibrar ambas necesidades opuestas.",
    "d": "Incorrecto: ambas etapas están directamente relacionadas y condicionan la biodisponibilidad final del fármaco; por eso hay que estudiarlas juntas."
  },
  "repetida": false
},

{
  "id": "t4-015",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Por qué la vía intravenosa no presenta el problema de liberación que sí existe en la vía oral?",
  "opciones": { "a": "Porque por vía intravenosa el fármaco se absorbe directamente en el estómago", "b": "Porque por vía intravenosa el fármaco entra directamente en la sangre, sin necesidad de pasar antes por la etapa de disolución en un medio acuoso previo (como la saliva)", "c": "Porque la vía intravenosa usa siempre fármacos en forma de sal, nunca en forma libre", "d": "Porque por vía intravenosa el fármaco no necesita tener ningún grupo ionizable" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la vía intravenosa, por definición, evita precisamente el paso por el tracto gastrointestinal, incluido el estómago.",
    "b": "Correcto: al administrarse directamente en sangre, el fármaco intravenoso se salta la etapa de disolución/liberación oral por completo, un problema que solo existe cuando hay que pasar primero por saliva y tracto digestivo.",
    "c": "Incorrecto: no es un requisito que los fármacos intravenosos sean siempre sales; lo relevante es que se evita la etapa previa de disolución oral.",
    "d": "Incorrecto: seguir teniendo grupos ionizables no tiene relación con la ausencia del problema de liberación; lo que cambia es la vía de administración, no la estructura química del fármaco."
  },
  "repetida": false
},

{
  "id": "t4-016",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿En qué tres puntos del tracto gastrointestinal (TGI) hay que estudiar la especiación de un fármaco para analizar su absorción?",
  "opciones": { "a": "Sangre materna (pH 7,4) y sangre fetal (pH 7,2), únicamente", "b": "Hígado, riñón y pulmón", "c": "Saliva (pH 6,8), sangre (pH 7,4) y orina (pH 6)", "d": "Estómago (pH 2), duodeno (pH 5,5) e íleon (pH 8)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: esos dos valores de pH se usan para estudiar el atrapamiento iónico fetal (distribución), no para estudiar la absorción en el TGI.",
    "b": "Incorrecto: esos son órganos relacionados con metabolismo y eliminación, no puntos del tracto gastrointestinal con pH característico usados en absorción.",
    "c": "Incorrecto: la saliva corresponde a la etapa de liberación, la sangre a distribución y la orina a eliminación; ninguno de los tres es un tramo del tracto gastrointestinal usado para el estudio de la absorción.",
    "d": "Correcto: los tres puntos de referencia del tracto gastrointestinal que se manejan durante todo el curso son el estómago (pH 2), el duodeno (pH 5,5) y el íleon (pH 8)."
  },
  "repetida": true
},

{
  "id": "t4-017",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Qué especie del equilibrio de especiación es la que atraviesa la bicapa lipídica y se absorbe, y por qué?",
  "opciones": { "a": "La especie ionizada, porque las cargas facilitan el paso por la membrana", "b": "Cualquier especie se absorbe exactamente igual de bien, con carga o sin ella", "c": "La especie neutra, porque la bicapa lipídica es totalmente apolar y solo las especies sin carga la atraviesan bien", "d": "Únicamente los dicationes son capaces de absorberse" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario, la carga dificulta (no facilita) el paso por una membrana apolar como la bicapa lipídica.",
    "b": "Incorrecto: la carga de una especie condiciona directamente su capacidad para atravesar una membrana apolar; no todas se absorben igual.",
    "c": "Correcto: la bicapa lipídica es totalmente apolar, así que solo la especie neutra (sin carga) puede atravesarla con facilidad por difusión pasiva; es la base de todo el razonamiento de absorción del curso.",
    "d": "Incorrecto: los dicationes, al tener doble carga positiva, son de las especies que peor atraviesan la bicapa lipídica, no de las que mejor lo hacen."
  },
  "repetida": true
},

{
  "id": "t4-018",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Se suele decir que 'en el estómago no se absorbe nada'. ¿Cómo matiza esta idea la explicación dada en clase?",
  "opciones": { "a": "Es totalmente cierto: en el estómago la absorción es exactamente cero en todos los casos", "b": "En el estómago se absorbe siempre el 100% del fármaco, nunca en el intestino", "c": "En el estómago sí se puede llegar a absorber algo, pero la mayor parte de la absorción de casi cualquier fármaco ocurre en el intestino, entre otras razones porque tiene mucha más superficie de contacto (unos 10 metros de longitud)", "d": "La absorción no depende en ningún caso de la superficie de contacto disponible" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: se explica explícitamente en clase que esa afirmación tradicional 'no es del todo exacta, ya que algo sí se absorbe' en el estómago.",
    "b": "Incorrecto: es justo lo contrario de lo explicado; la mayor parte de la absorción ocurre en el intestino, no en el estómago.",
    "c": "Correcto: aunque en el estómago puede absorberse algo de fármaco, la mayoría de la absorción ocurre en el intestino, tanto por la mayor proporción de especie neutra a pH más altos como por la enorme superficie de contacto de sus aproximadamente 10 metros de longitud.",
    "d": "Incorrecto: la superficie de contacto se menciona explícitamente como una de las razones por las que la absorción es mayoritariamente intestinal."
  },
  "repetida": false
},

{
  "id": "t4-019",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Según el guion de fármacos, ¿qué conclusión teórica hay que escribir siempre, de forma literal, en el apartado de absorción, independientemente de los cálculos numéricos?",
  "opciones": { "a": "Basta con escribir el resultado numérico final, sin ninguna frase adicional", "b": "No hace falta escribir ninguna conclusión teórica en este apartado", "c": "Hay que copiar la definición de liberación en vez de la de absorción", "d": "Una frase del tipo: a ese pH domina la especie menos polar, luego hay mayor fuerza de atracción con la bicapa lipídica, mayor difusión pasiva y mayor absorción" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: se insiste en que esos dos renglones de conclusión teórica son obligatorios y puntúan de forma independiente al cálculo numérico.",
    "b": "Incorrecto: la conclusión teórica final es un punto explícito del guion que se pide de forma obligatoria.",
    "c": "Incorrecto: cada apartado necesita su propia definición y conclusión; no se puede sustituir la de absorción por la de liberación.",
    "d": "Correcto: el guion exige escribir explícitamente esa conclusión (domina la especie menos polar → mayor fuerza de atracción con la bicapa lipídica → mayor difusión pasiva → mayor absorción); es teoría que puntúa aparte del cálculo y hay que ponerla sí o sí."
  },
  "repetida": true
},

{
  "id": "t4-020",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "¿Cuándo NO es necesario calcular el porcentaje de ionización con Henderson-Hasselbalch al estudiar la absorción en un tramo del TGI?",
  "opciones": { "a": "Nunca hace falta calcularlo, ni siquiera cuando compiten dos especies distintas", "b": "Siempre hace falta calcularlo, en todos los tramos del TGI, sin ninguna excepción", "c": "Cuando una única especie ya está presente al 100% en ese tramo (no compite con ninguna otra), no hace falta ningún cálculo", "d": "Solo hace falta calcularlo en el estómago, nunca en el íleon" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: cuando compiten dos especies a un mismo pH, sí es necesario el cálculo para saber cuál domina y en qué proporción.",
    "b": "Incorrecto: precisamente se explica en varios ejemplos que, cuando una especie domina al 100%, el cálculo se puede omitir.",
    "c": "Correcto: si a un pH determinado una sola especie está presente al 100% (por ejemplo, el monocatión puro a pH de estómago), no hace falta calcular nada, porque no hay ninguna otra especie con la que competir.",
    "d": "Incorrecto: la necesidad de calcular depende de si coexisten varias especies en ese tramo concreto, no del tramo en sí (estómago, duodeno o íleon)."
  },
  "repetida": false
},

{
  "id": "t4-021",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Un fármaco de seminario (el fármaco 172) tiene un grupo básico con pKa 6,9. En el duodeno (pH 5,5), aplicando Henderson-Hasselbalch (10^(6,9−5,5) = 10^1,4 ≈ 25), ¿qué reparto aproximado de especies se obtiene?",
  "opciones": { "a": "Aproximadamente 96% de especie ionizada (monocatión) y 4% de especie neutra", "b": "Aproximadamente 4% de especie ionizada y 96% de especie neutra", "c": "100% de especie neutra", "d": "Aproximadamente 50% y 50%" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: con ácido/base = 10^(pKa−pH) = 10^(6,9−5,5) = 10^1,4 ≈ 25, resolviendo la proporción se obtiene aproximadamente un 96% de especie ionizada (el monocatión, ácido de este equilibrio) y un 4% de especie neutra (base conjugada).",
    "b": "Incorrecto: los porcentajes están invertidos; como el pH (5,5) está por debajo del pKa (6,9), predomina la especie protonada (ionizada), no la neutra.",
    "c": "Incorrecto: a pH 5,5, todavía por debajo del pKa 6,9, predomina claramente la especie ionizada, no la neutra.",
    "d": "Incorrecto: un reparto 50/50 solo ocurriría si el pH de trabajo coincidiera con el pKa (6,9), y aquí el pH del duodeno es 5,5, más de una unidad por debajo."
  },
  "repetida": false
},

{
  "id": "t4-022",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Con el mismo fármaco (grupo básico, pKa 6,9), en el íleon (pH 8) se obtiene aproximadamente un 93% de especie neutra frente a un 7% de ionizada. Comparando estómago (100% ionizado), duodeno (4% neutro) e íleon (93% neutro), ¿dónde se absorbe mayoritariamente este fármaco?",
  "opciones": { "a": "En el estómago, porque ahí hay más cantidad total de fármaco disuelto", "b": "En el íleon, porque es donde hay mayor proporción de especie neutra, la única capaz de atravesar bien la bicapa lipídica", "c": "La absorción es idéntica en los tres tramos del tracto gastrointestinal", "d": "En el duodeno, por ser un punto intermedio del recorrido" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: en el estómago el fármaco está 100% ionizado, la peor situación posible para atravesar la bicapa lipídica; la cantidad total disuelta no compensa esa falta casi total de especie neutra.",
    "b": "Correcto: al comparar los tres tramos, el íleon presenta la mayor proporción de especie neutra (93%), la única capaz de atravesar bien la membrana apolar, por lo que es el tramo donde se produce la mayor absorción.",
    "c": "Incorrecto: las proporciones de especie neutra varían mucho entre los tres tramos (0%, 4% y 93%, aproximadamente), así que la absorción no puede ser igual en los tres.",
    "d": "Incorrecto: en el duodeno solo hay un 4% de especie neutra, muy por debajo del 93% del íleon."
  },
  "repetida": true
},

{
  "id": "t4-023",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Al calcular el llamado 'incremento de pH' entre el tramo intestinal donde se absorbe el fármaco y la sangre, ¿hacia dónde se dirige la flecha del equilibrio, según la regla explicada en clase?",
  "opciones": { "a": "Siempre hacia el compartimento donde hay mayor proporción de especie neutra", "b": "Siempre hacia el compartimento donde hay mayor proporción de especie ionizada", "c": "La dirección de la flecha no depende del pH ni de la ionización", "d": "Siempre hacia la sangre, sea cual sea el resultado del cálculo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo al revés; la flecha se dirige hacia la mayor ionización, no hacia la mayor proporción de especie neutra.",
    "b": "Correcto: la regla usada en todos los ejemplos es dirigir la flecha del equilibrio hacia el compartimento con mayor proporción de especie ionizada; si ese compartimento es la sangre, se dice que el paso a sangre favorece la absorción, porque retiene parte del fármaco allí.",
    "c": "Incorrecto: la dirección de la flecha depende directamente de en qué compartimento hay mayor proporción de especie ionizada, calculada a partir del pH de cada uno.",
    "d": "Incorrecto: la dirección de la flecha depende del cálculo concreto en cada fármaco; no siempre apunta hacia la sangre (puede ocurrir lo contrario si hay más ionización en el tramo intestinal)."
  },
  "repetida": false
},

{
  "id": "t4-024",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "En el fármaco con pKa básico 6,9, en el íleon hay un 7% de especie ionizada y en sangre (pH 7,4) hay un 24% de especie ionizada. ¿Qué se concluye sobre el paso del íleon a la sangre?",
  "opciones": { "a": "Que el fármaco no puede pasar nunca del íleon a la sangre", "b": "Que el paso a sangre favorece la absorción, porque la flecha se dirige hacia la sangre (mayor ionización) y eso retiene ahí una parte del fármaco, evitando que vuelva al íleon", "c": "Que no se puede sacar ninguna conclusión sin conocer previamente el logP del fármaco", "d": "Que el paso a sangre perjudica la absorción, porque en sangre hay más especie ionizada que en el íleon" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el fármaco sí pasa del íleon a la sangre (es el objetivo de la absorción); lo que se analiza es si ese paso está favorecido o no por el equilibrio de ionización.",
    "b": "Correcto: como en sangre hay más proporción de especie ionizada (24%) que en el íleon (7%), la flecha del equilibrio se dirige hacia la sangre; eso significa que, una vez que el fármaco pasa a sangre, una parte queda 'atrapada' en forma ionizada, favoreciendo que el proceso de absorción avance en esa dirección.",
    "c": "Incorrecto: esta conclusión sobre el incremento de pH se obtiene únicamente a partir de comparar los porcentajes de ionización en ambos compartimentos, sin necesidad del logP (que se usa para otra condición distinta, la de atravesar la barrera hematoencefálica).",
    "d": "Incorrecto: mayor ionización en el compartimento de destino (sangre) es justo lo que se interpreta como favorable para el proceso de absorción, no como un perjuicio."
  },
  "repetida": false
},

{
  "id": "t4-025",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "La regla de los cinco de Lipinski, mencionada en el repaso de biodisponibilidad como contenido de examen tipo test, establece una serie de límites orientativos para que un fármaco tenga buena biodisponibilidad oral. ¿Cuál de los siguientes es uno de esos criterios?",
  "opciones": { "a": "Un peso molecular superior a 1000 g/mol", "b": "Que el fármaco tenga obligatoriamente más de cinco carbonos quirales", "c": "Que el fármaco no pueda tener ningún grupo ionizable", "d": "Un peso molecular no mayor de 500 g/mol, junto con límites en el número de grupos dadores y aceptores de enlace de hidrógeno y en la lipofilia (logP)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la regla de Lipinski precisamente pone un límite superior de 500 g/mol de peso molecular, no exige superarlo.",
    "b": "Incorrecto: la regla no exige ningún número mínimo de carbonos quirales; de hecho, cuantos más carbonos quirales, más cara suele ser la síntesis del fármaco, algo independiente de esta regla.",
    "c": "Incorrecto: la mayoría de los fármacos estudiados en la asignatura sí tienen grupos ionizables; la regla de Lipinski no prohíbe su existencia.",
    "d": "Correcto: la regla de los cinco (o de Lipinski) establece, de forma orientativa, un peso molecular ≤500 g/mol, un logP ≤5, no más de 5 grupos dadores de enlace de hidrógeno y no más de 10 aceptores, como predictores generales de una buena biodisponibilidad oral."
  },
  "repetida": false
},

{
  "id": "t4-026",
  "tema": "Tema 3 — LADME: Liberación y Absorción",
  "pregunta": "Igual que en la liberación, en el apartado de absorción del examen hay que incluir siempre una definición breve del proceso y de qué depende. ¿Por qué se insiste tanto en mantenerla corta?",
  "opciones": { "a": "Porque las definiciones largas siempre se consideran incorrectas, independientemente de su contenido", "b": "Porque solo hay que definir la liberación; la absorción nunca requiere definición", "c": "Porque el tiempo de examen es muy limitado y una definición demasiado larga puede impedir terminar el resto del apartado; aun así, omitirla por completo hace que no se puntúe ese apartado", "d": "Porque esa definición no forma parte de la nota del apartado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el problema de una definición larga no es su corrección, sino el tiempo que consume en un examen muy ajustado.",
    "b": "Incorrecto: cada apartado del proceso LADME (liberación, absorción, etc.) exige su propia definición breve al principio.",
    "c": "Correcto: con el tiempo tan ajustado del examen, se recomienda tener preparada una versión mínima de cada definición (liberación, absorción, etc.) para no perder minutos valiosos, pero sin omitirla nunca, porque su ausencia anula la puntuación del apartado.",
    "d": "Incorrecto: se explica justo lo contrario: no incluir la definición hace que no se puntúe nada de ese apartado."
  },
  "repetida": false
},

{
  "id": "t5-001",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Qué dos condiciones deben cumplirse simultáneamente para que un fármaco atraviese la barrera hematoencefálica (BHE), especialmente lipófila, y llegue al sistema nervioso central?",
  "opciones": { "a": "Que el fármaco esté completamente ionizado a pH 7,4 y que tenga menos de cinco carbonos", "b": "Que el fármaco sea siempre un ácido fuerte", "c": "Que el fármaco tenga, necesariamente, un carbono quiral", "d": "Que a pH sanguíneo (7,4) exista especie neutra (aunque sea en pequeña proporción) y que el logaritmo de P (LogP) del fármaco sea mayor que 2" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: estar completamente ionizado es justo lo contrario de lo que se necesita, ya que la barrera hematoencefálica solo la atraviesa bien la especie neutra.",
    "b": "Incorrecto: ser ácido fuerte no garantiza nada respecto a esta barrera; lo relevante es la existencia de especie neutra a pH sanguíneo y la lipofilia, no el carácter ácido/básico en sí.",
    "c": "Incorrecto: tener un carbono quiral no tiene relación con la capacidad de atravesar la barrera hematoencefálica, que depende de la polaridad y la lipofilia de la especie neutra.",
    "d": "Correcto: para atravesar la barrera hematoencefálica hacen falta dos condiciones simultáneas: que exista especie neutra a pH sanguíneo (aunque sea en pequeña proporción) y que el LogP del fármaco sea mayor que 2, es decir, que sea suficientemente lipófilo."
  },
  "repetida": true
},

{
  "id": "t5-002",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Sobre la primera condición para atravesar la barrera hematoencefálica (presencia de especie neutra a pH sanguíneo), ¿qué proporción mínima de especie neutra hace falta?",
  "opciones": { "a": "Esta condición no depende en absoluto del porcentaje de especie neutra", "b": "Hace falta que la especie neutra sea mayoritaria, por encima del 50%", "c": "Hace falta el 100% de especie neutra", "d": "Basta con que exista algo de especie neutra, aunque sea en pequeña proporción (por ejemplo, un 4-5%); no se exige ningún porcentaje mínimo" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la condición sí depende de que exista especie neutra (aunque sea mínima); si no hubiera absolutamente nada de especie neutra, no se cumpliría esta primera condición.",
    "b": "Incorrecto: no se exige que la especie neutra sea mayoritaria; basta con que exista, aunque sea en pequeña proporción.",
    "c": "Incorrecto: exigir el 100% es un requisito mucho más estricto del que realmente se pide; basta con que exista una proporción, por pequeña que sea.",
    "d": "Correcto: se insiste explícitamente en que no hace falta ningún porcentaje mínimo de especie neutra para esta condición; con que exista algo ya se cumple, como demuestra el ejemplo de los antihistamínicos de primera generación con solo un 4-5% de especie neutra."
  },
  "repetida": true
},

{
  "id": "t5-003",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Cómo se puede estimar, sin datos experimentales directos, si el LogP de la especie neutra de un fármaco es mayor que 2 (segunda condición para atravesar la barrera hematoencefálica)?",
  "opciones": { "a": "Midiendo directamente el pKa del grupo básico del fármaco", "b": "Comparando el número total de carbonos del fármaco con los carbonos 'compensados' por sus grupos hidrofílicos según la tabla de Lenke: si ese incremento de carbonos lipófilos es de 5 o más, se estima LogP > 2; si es menor de 5, se estima LogP < 2", "c": "Contando el número de enantiómeros posibles del fármaco", "d": "El LogP no se puede estimar nunca sin medirlo experimentalmente en el laboratorio" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el pKa del grupo básico se usa para calcular el porcentaje de ionización a un pH dado, no para estimar directamente el LogP de la especie neutra.",
    "b": "Correcto: se usa la regla del incremento de carbonos (ΔC = carbonos totales − carbonos compensados por los grupos hidrofílicos de la especie neutra según Lenke); si ΔC ≥ 5, se estima LogP > 2, y si ΔC < 5, se estima LogP < 2.",
    "c": "Incorrecto: el número de enantiómeros no tiene ninguna relación con la estimación del LogP.",
    "d": "Incorrecto: precisamente se enseña un método de estimación indirecta a partir de la tabla de Lenke, sin necesidad de medición experimental."
  },
  "repetida": false
},

{
  "id": "t5-004",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Los antihistamínicos de primera generación (los más antiguos) producían mucho sueño porque atravesaban con facilidad la barrera hematoencefálica, a pesar de tener solo un 4-5% de especie neutra a pH sanguíneo. ¿Qué enseña este ejemplo?",
  "opciones": { "a": "Que el sueño que producen esos fármacos no tiene ninguna relación con el sistema nervioso central", "b": "Que hace falta que la especie neutra sea mayoritaria para atravesar la barrera hematoencefálica", "c": "Que basta con que exista especie neutra, aunque sea en pequeña proporción, para que un fármaco muy lipófilo pueda atravesar una barrera tan lipófila como la hematoencefálica", "d": "Que los antihistamínicos nunca atraviesan la barrera hematoencefálica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el efecto de somnolencia es una consecuencia directa de que el fármaco llega al sistema nervioso central al atravesar la barrera hematoencefálica.",
    "b": "Incorrecto: este ejemplo demuestra justo lo contrario, que un pequeño porcentaje de especie neutra (4-5%) ya es suficiente si se cumple también la condición de lipofilia.",
    "c": "Correcto: con solo un 4-5% de especie neutra, y siendo fármacos muy lipófilos (LogP > 2), estos antihistamínicos atravesaban la barrera hematoencefálica y llegaban al sistema nervioso central, produciendo somnolencia como efecto secundario.",
    "d": "Incorrecto: es justo lo contrario; el ejemplo se usa precisamente para ilustrar que sí la atraviesan, y por eso producen sueño."
  },
  "repetida": true
},

{
  "id": "t5-005",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Si un fármaco cumple la condición de tener especie neutra suficiente a pH sanguíneo, pero su LogP estimado es menor de 2, ¿atraviesa la barrera hematoencefálica?",
  "opciones": { "a": "Sí, siempre que el fármaco tenga carga positiva", "b": "Sí, porque solo hace falta cumplir una de las dos condiciones", "c": "Depende exclusivamente del pKa del grupo ácido, no del LogP", "d": "No; con que falle una sola de las dos condiciones (aquí la del LogP), ya no atraviesa la barrera y no llega al sistema nervioso central" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: tener carga positiva es justo lo contrario de lo que ayuda a atravesar una barrera muy lipófila; la especie con carga no la atraviesa bien.",
    "b": "Incorrecto: las dos condiciones (especie neutra y LogP > 2) son necesarias simultáneamente; cumplir solo una no es suficiente.",
    "c": "Incorrecto: el pKa del grupo ácido no es el criterio decisivo aquí; lo son la presencia de especie neutra y el LogP estimado.",
    "d": "Correcto: en varios ejemplos de clase se insiste en que, con que falle una sola de las dos condiciones, ya no hace falta seguir calculando: el fármaco no atraviesa la barrera hematoencefálica."
  },
  "repetida": false
},

{
  "id": "t5-006",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Cómo se define el atrapamiento iónico en el contexto del paso placentario de un fármaco?",
  "opciones": { "a": "Es la acumulación de un fármaco en el compartimento fetal porque allí queda más ionizado que en la madre, lo que le impide atravesar de nuevo la placenta para volver a la circulación materna", "b": "Es la incapacidad de cualquier fármaco para atravesar la placenta en cualquier circunstancia", "c": "Es un fenómeno que solo afecta a fármacos administrados por vía intravenosa", "d": "Es la eliminación acelerada de un fármaco por vía renal en la madre" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el atrapamiento iónico ocurre cuando un fármaco, que ha cruzado la placenta en su forma neutra, se ioniza en mayor proporción en el compartimento fetal que en el materno; al quedar cargado, ya no puede regresar con facilidad a la circulación de la madre y se acumula en el feto.",
    "b": "Incorrecto: el fármaco sí atraviesa la placenta (en su forma neutra); el problema del atrapamiento aparece después, al quedar retenido en su forma ionizada.",
    "c": "Incorrecto: el atrapamiento iónico depende de las propiedades ácido-base del fármaco y de la diferencia de pH entre feto y madre, no de la vía de administración.",
    "d": "Incorrecto: el atrapamiento iónico ocurre en el compartimento fetal, no tiene relación con la eliminación renal materna."
  },
  "repetida": false
},

{
  "id": "t5-007",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Comparando el pH de la sangre materna (7,4) con el de la sangre fetal (7,2), y dado que las bases parten protonadas y se van desprotonando al subir el pH, ¿por qué los fármacos básicos son, en general, los que principalmente dan problemas de atrapamiento iónico fetal?",
  "opciones": { "a": "Porque las bases son siempre insolubles en la sangre fetal", "b": "Porque el feto tiene, en realidad, un pH mayor que la madre", "c": "Porque las bases nunca pueden atravesar la placenta en ninguna forma", "d": "Porque al ser el feto el compartimento más ácido (menor pH), un fármaco básico se ioniza (se protona) más en el feto que en la madre, quedando 'atrapado' allí en su forma cargada" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la solubilidad de la especie ionizada de una base no es el criterio relevante aquí; lo es la diferencia de grado de ionización entre feto y madre.",
    "b": "Incorrecto: el pH del feto (7,2) es menor, no mayor, que el de la madre (7,4); ese dato es la base de todo el razonamiento del atrapamiento iónico.",
    "c": "Incorrecto: las bases sí pueden atravesar la placenta, precisamente en su forma neutra; el problema surge después, al ionizarse más en el feto.",
    "d": "Correcto: como las bases se ionizan más cuanto menor es el pH, y el feto es el compartimento más ácido de los dos (pH 7,2 frente a 7,4 de la madre), un fármaco básico tiende a estar más protonado (más ionizado) en el feto, lo que dificulta su regreso a la circulación materna."
  },
  "repetida": true
},

{
  "id": "t5-008",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Por qué, en general, los fármacos ácidos dan muchos menos problemas de atrapamiento iónico fetal que los fármacos básicos?",
  "opciones": { "a": "Porque los fármacos ácidos nunca tienen carga a ningún valor de pH", "b": "Porque, para los fármacos ácidos, el feto tiene siempre mayor pH que la madre", "c": "Porque los ácidos parten neutros y se ionizan más al subir el pH; como el feto tiene menor pH que la madre, un ácido tiende a estar menos ionizado (más neutro) en el feto, por lo que puede regresar con más facilidad a la circulación materna", "d": "Porque los fármacos ácidos no pueden atravesar ninguna membrana biológica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: los ácidos sí pueden ionizarse (de hecho, se ionizan más a pH alto, como el de la sangre materna); lo relevante para el atrapamiento es la diferencia entre ambos compartimentos, no la ausencia total de carga.",
    "b": "Incorrecto: el pH del feto es siempre menor que el de la madre (7,2 frente a 7,4), independientemente de que el fármaco sea ácido o básico.",
    "c": "Correcto: al contrario que las bases, los ácidos se ionizan más cuanto mayor es el pH; como el feto tiene menor pH que la madre, un fármaco ácido está menos ionizado (más neutro) en el feto, lo que le permite regresar con facilidad a la circulación materna sin quedar atrapado.",
    "d": "Incorrecto: los fármacos ácidos sí pueden atravesar membranas biológicas, en su forma neutra, igual que ocurre con las bases."
  },
  "repetida": true
},

{
  "id": "t5-009",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "En un fármaco básico (pKa ≈ 6,9), a pH 7,2 (feto) y pH 7,4 (madre) la proporción de especie ionizada resulta ser prácticamente la misma en ambos compartimentos. ¿Qué conclusión se obtiene sobre el atrapamiento iónico en este caso concreto?",
  "opciones": { "a": "Que este fármaco tiene que ser necesariamente ácido, no básico", "b": "Que el fármaco no puede estar presente en la sangre fetal en absoluto", "c": "Que hay un atrapamiento iónico máximo, precisamente porque las dos proporciones son iguales", "d": "Que no hay atrapamiento iónico relevante, porque para que se produzca hace falta una diferencia apreciable de ionización entre el feto y la madre, y aquí prácticamente no la hay" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el ejemplo describe explícitamente un fármaco básico (con pKa de un grupo protonable); ser básico no impide, por sí solo, tener una diferencia de ionización pequeña entre feto y madre.",
    "b": "Incorrecto: el fármaco sí puede estar presente en sangre fetal; lo que no ocurre es que quede retenido allí de forma desproporcionada.",
    "c": "Incorrecto: es justo lo contrario; el atrapamiento requiere una diferencia significativa de ionización entre feto y madre, no una igualdad.",
    "d": "Correcto: cuando la ionización es prácticamente idéntica en ambos compartimentos, no hay ninguna fuerza neta que retenga al fármaco en el feto, así que no se produce atrapamiento iónico relevante, tal y como concluye este ejemplo de seminario."
  },
  "repetida": false
},

{
  "id": "t5-010",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Un fármaco tiene una amina aromática con pKa 6,2 (una base débil). Comparando feto (pH 7,2) y madre (pH 7,4), ¿puede dar problemas de atrapamiento iónico?",
  "opciones": { "a": "Sí: al ser una base, se ioniza más cuanto menor es el pH, y como el feto tiene menor pH que la madre, este fármaco estará más ionizado en el feto, lo que sí puede dar atrapamiento iónico", "b": "Sí, pero únicamente si el fármaco fuera además un ácido fuerte", "c": "No se puede saber nada sin conocer antes el LogP del fármaco", "d": "No, porque es una base y, según la regla general, las bases nunca dan atrapamiento iónico" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: con un pKa de 6,2 relativamente próximo al rango fisiológico, esta base ya muestra un equilibrio de ionización activo; al ser el feto más ácido que la madre, la base estará más protonada (más ionizada) en el feto, lo que sí puede producir atrapamiento iónico, tal como se concluye en este ejemplo de clase.",
    "b": "Incorrecto: la afirmación mezcla dos conceptos incompatibles (que sea básico y a la vez ácido fuerte); el atrapamiento iónico de este fármaco concreto se debe precisamente a su carácter básico.",
    "c": "Incorrecto: el atrapamiento iónico se decide comparando el grado de ionización a los dos pH (feto y madre) a partir del pKa, no depende del LogP, que se usa para otra condición distinta (atravesar la barrera hematoencefálica).",
    "d": "Incorrecto: es justo lo contrario; las bases son precisamente el tipo de fármaco que con más facilidad da problemas de atrapamiento iónico fetal."
  },
  "repetida": false
},

{
  "id": "t5-011",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "En clase se comenta que, cuando las embarazadas pueden tomar algo, suelen tomar paracetamol. ¿Qué relación tiene esto con lo estudiado sobre distribución y atrapamiento iónico?",
  "opciones": { "a": "El paracetamol, con un comportamiento de tipo ácido débil, no presenta el mismo riesgo de atrapamiento iónico fetal que tendría un fármaco básico equivalente, lo que lo hace relativamente más seguro durante el embarazo", "b": "El paracetamol es un fármaco básico muy fuerte, con un pKa mayor de 12", "c": "El paracetamol no tiene ningún grupo ionizable, por lo que nunca se distribuye por el organismo", "d": "El paracetamol solo se puede administrar por vía intravenosa durante el embarazo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: al comportarse esencialmente como un ácido débil, el paracetamol no presenta el mismo riesgo de atrapamiento iónico fetal que un fármaco básico, lo que explica por qué suele recomendarse frente a otras alternativas durante el embarazo.",
    "b": "Incorrecto: el paracetamol no se comporta como una base fuerte; el comentario en clase lo asocia a un comportamiento de tipo ácido, no básico.",
    "c": "Incorrecto: el paracetamol sí tiene grupos ionizables (por ejemplo, un fenol) y se distribuye con normalidad por el organismo; lo relevante aquí es su bajo riesgo de atrapamiento iónico fetal.",
    "d": "Incorrecto: no hay ninguna restricción de este tipo comentada en clase; el paracetamol se toma habitualmente por vía oral."
  },
  "repetida": false
},

{
  "id": "t5-012",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Cuál es el objetivo principal del apartado de eliminación en el examen, en relación con la orina (pH ≈ 6)?",
  "opciones": { "a": "Determinar si el fármaco se puede eliminar directamente por vía renal sin necesidad de ser metabolizado antes en el hígado", "b": "Determinar si el fármaco atraviesa la barrera hematoencefálica", "c": "Calcular el peso molecular exacto del fármaco", "d": "Determinar el número de carbonos quirales del fármaco" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el objetivo del apartado de eliminación es comprobar, mediante la especiación del fármaco a pH de orina, si puede eliminarse directamente por vía renal; si no es posible, el fármaco tendrá que pasar antes por un proceso de metabolismo hepático.",
    "b": "Incorrecto: la barrera hematoencefálica corresponde al apartado de distribución, no al de eliminación.",
    "c": "Incorrecto: el peso molecular no se calcula en este apartado; es un dato que se usa, en todo caso, como referencia teórica adicional en algunos seminarios (junto al LogP).",
    "d": "Incorrecto: el número de carbonos quirales no tiene relación con el apartado de eliminación renal; es relevante en el estudio de la estereoquímica (segundo parcial)."
  },
  "repetida": false
},

{
  "id": "t5-013",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Según el guion de fármacos, ¿qué porcentaje de especie ionizada (soluble) en orina se necesita, aproximadamente, para considerar que la eliminación renal directa de un fármaco es posible?",
  "opciones": { "a": "No hace falta ningún porcentaje mínimo; la eliminación directa siempre es posible", "b": "Más del 90%", "c": "Más del 45-50%", "d": "Exactamente el 25%" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente hay ejemplos de clase donde la eliminación directa NO es posible porque la especie soluble no llega al umbral necesario, lo que obliga a modificar el pH de la orina.",
    "b": "Incorrecto: el umbral usado es bastante más bajo, del 45-50%, no del 90%.",
    "c": "Correcto: el criterio manejado en clase es que, si la especie soluble en orina supera aproximadamente el 45-50%, la eliminación directa del fármaco es posible.",
    "d": "Incorrecto: el 25% está por debajo del umbral necesario (45-50%) para dar por buena la eliminación directa."
  },
  "repetida": true
},

{
  "id": "t5-014",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Un fármaco ácido tiene problemas para eliminarse directamente por orina, porque a pH 6 está poco ionizado. ¿Qué se recomienda para favorecer su eliminación?",
  "opciones": { "a": "Subir el pH de la orina, por ejemplo administrando bicarbonato sódico, para desplazar el equilibrio hacia la forma ionizada (más soluble) del ácido", "b": "Bajar el pH de la orina, por ejemplo con zumo de limón", "c": "Aumentar la dosis del fármaco sin modificar en ningún caso el pH de la orina", "d": "No existe ninguna forma de favorecer la eliminación de un fármaco ácido" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: como los ácidos se ionizan más al subir el pH, administrar algo que alcalinice la orina (como el bicarbonato sódico, con pH en torno a 8) desplaza el equilibrio hacia la forma ionizada y soluble, favoreciendo su eliminación.",
    "b": "Incorrecto: bajar el pH de la orina disminuiría todavía más la ionización de un ácido, empeorando el problema; esa recomendación es la que se usa para fármacos básicos, no para ácidos.",
    "c": "Incorrecto: la estrategia explicada en clase consiste exactamente en modificar el pH de la orina, no en cambiar la dosis del fármaco.",
    "d": "Incorrecto: sí existe una solución práctica, precisamente modificar el pH de la orina en la dirección adecuada según el tipo de grupo problemático."
  },
  "repetida": true
},

{
  "id": "t5-015",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Un fármaco básico tiene problemas para eliminarse directamente por orina. ¿Qué se recomienda para favorecer su eliminación?",
  "opciones": { "a": "No existe ninguna forma de favorecer la eliminación de un fármaco básico", "b": "Bajar el pH de la orina, por ejemplo dándole al paciente zumo de limón, para desplazar el equilibrio hacia la forma protonada (más soluble) de la base", "c": "Aumentar directamente el número de carbonos del fármaco", "d": "Subir el pH de la orina con bicarbonato sódico" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la solución consiste precisamente en acidificar la orina para favorecer la forma cargada y soluble de la base.",
    "b": "Correcto: en un examen resuelto en clase se afirma explícitamente que la incorrecta es 'favorecer la eliminación de bases débiles con bicarbonato sódico', porque lo correcto es justo lo contrario: bajar el pH de la orina (por ejemplo con zumo de limón) para mantener protonada, y por tanto soluble, a la base.",
    "c": "Incorrecto: aumentar el número de carbonos subiría la lipofilia, lo que dificultaría todavía más la eliminación renal, en la dirección contraria a la deseada.",
    "d": "Incorrecto: subir el pH de la orina disminuiría la ionización de una base, empeorando su eliminación; esa estrategia se reserva para fármacos ácidos, no básicos."
  },
  "repetida": true
},

{
  "id": "t5-016",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Qué es la cristaluria, en el sentido explicado en esta asignatura, y qué condición general hace falta para que se produzca?",
  "opciones": { "a": "Es la eliminación completa e inmediata de cualquier fármaco por la orina", "b": "Es un efecto secundario que solo puede ocurrir en fármacos que atraviesan la barrera hematoencefálica", "c": "Es la precipitación del fármaco en el riñón (formación de 'piedras') que ocurre cuando, no siendo posible la eliminación directa, el fármaco resulta ser más soluble en sangre que en orina", "d": "Es un sinónimo exacto de atrapamiento iónico" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario, la cristaluria es un problema que aparece cuando la eliminación NO es directa ni sencilla.",
    "b": "Incorrecto: la cristaluria es un fenómeno renal, relacionado con la solubilidad relativa en sangre y orina, sin relación con la barrera hematoencefálica.",
    "c": "Correcto: la cristaluria (formación de piedras en el riñón) se produce cuando la eliminación directa no es posible y, además, el fármaco es más soluble en sangre (pH 7,4) que en orina (pH 6); al llegar al riñón en forma poco soluble, precipita.",
    "d": "Incorrecto: son fenómenos distintos y, de hecho, se explica que se comportan de forma opuesta según el tipo de fármaco (ácido o básico)."
  },
  "repetida": false
},

{
  "id": "t5-017",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Para decidir si hay riesgo de cristaluria comparando la proporción de especie soluble en sangre frente a en orina, ¿qué regla del cociente se aplica?",
  "opciones": { "a": "Si ese cociente es menor de 1, se considera que habrá cristaluria", "b": "Si el cociente es exactamente igual a 1, siempre hay cristaluria", "c": "El cociente entre ambos porcentajes nunca se usa para decidir sobre la cristaluria", "d": "Si el cociente (porcentaje soluble en sangre entre porcentaje soluble en orina) es mayor de 10, se considera que sí habrá cristaluria" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: un cociente menor que 1 significaría que la especie es más soluble en orina que en sangre, justo la situación que NO produce cristaluria.",
    "b": "Incorrecto: un cociente de 1 indicaría igual solubilidad en ambos medios, una situación intermedia que no corresponde al criterio de alarma (cociente > 10) explicado en clase.",
    "c": "Incorrecto: este cociente es precisamente el criterio numérico explicado en clase para decidir sobre el riesgo de cristaluria cuando la eliminación directa no es posible.",
    "d": "Correcto: se calcula el cociente entre el porcentaje de especie soluble en sangre y en orina; si ese cociente supera 10 (por ejemplo, 60% en sangre frente a 5% en orina), se concluye que sí habrá cristaluria."
  },
  "repetida": false
},

{
  "id": "t5-018",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Por qué los fármacos ácidos son, en general, los que más problemas de cristaluria pueden dar, y los básicos los que menos?",
  "opciones": { "a": "Porque los ácidos, al ionizarse más según sube el pH, están más ionizados (más solubles) en sangre (pH 7,4) que en orina (pH 6), lo que favorece que precipiten en el riñón; las bases, en cambio, están más ionizadas en orina que en sangre, lo que las protege de este problema", "b": "Porque los fármacos ácidos nunca se disuelven en ningún medio acuoso", "c": "Porque las bases son siempre completamente insolubles en sangre", "d": "Porque el riesgo de cristaluria no depende en absoluto del carácter ácido o básico del fármaco" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: como los ácidos se ionizan más a pH alto, están más solubles en sangre que en orina, con lo que tienden a precipitar al llegar al riñón (más insolubles allí); las bases, al ionizarse más a pH bajo, son más solubles precisamente en orina, lo que evita ese problema de precipitación.",
    "b": "Incorrecto: los ácidos sí se disuelven en medio acuoso, especialmente en su forma ionizada; el problema de la cristaluria surge de la diferencia de solubilidad entre sangre y orina, no de una insolubilidad absoluta.",
    "c": "Incorrecto: las bases son solubles en sangre en la proporción que les corresponda según su pKa; lo relevante es la comparación relativa entre sangre y orina, no una insolubilidad total.",
    "d": "Incorrecto: se explica de forma explícita que el riesgo de cristaluria es sistemáticamente mayor en fármacos ácidos que en básicos, precisamente por su comportamiento opuesto frente al pH."
  },
  "repetida": true
},

{
  "id": "t5-019",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "Se afirma en clase que 'en cuanto a cristaluria pasa justo lo contrario que con el atrapamiento iónico'. ¿Qué significa esta afirmación?",
  "opciones": { "a": "Que ninguno de los dos fenómenos tiene relación con el carácter ácido o básico del fármaco", "b": "Que, mientras los fármacos ácidos son los que más riesgo de cristaluria presentan, son los fármacos básicos los que más riesgo de atrapamiento iónico fetal presentan; cada fenómeno afecta principalmente al tipo de fármaco opuesto", "c": "Que la cristaluria y el atrapamiento iónico ocurren siempre a la vez, en el mismo fármaco", "d": "Que ambos fenómenos afectan exactamente por igual a los fármacos ácidos y a los básicos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: ambos fenómenos dependen directamente del carácter ácido o básico del fármaco y de cómo varía su ionización con el pH.",
    "b": "Correcto: los fármacos ácidos son los que más riesgo de cristaluria presentan (más solubles en sangre que en orina) mientras que los básicos son los que más riesgo de atrapamiento iónico fetal presentan (más ionizados en el feto, más ácido, que en la madre); por eso se dice que ambos fenómenos son 'opuestos' en cuanto a qué tipo de fármaco afectan principalmente.",
    "c": "Incorrecto: no tienen por qué ocurrir a la vez; de hecho, por ser fenómenos opuestos, es más habitual que un fármaco tienda a uno de los dos problemas, no a ambos simultáneamente.",
    "d": "Incorrecto: es precisamente lo contrario de lo que se afirma; cada fenómeno se asocia mayoritariamente a un tipo de fármaco distinto."
  },
  "repetida": false
},

{
  "id": "t5-020",
  "tema": "Tema 3 — LADME: Distribución y Eliminación",
  "pregunta": "¿Cuáles son, aproximadamente, los valores de pH de referencia que se manejan durante todo el curso para la sangre materna, la sangre fetal y la orina?",
  "opciones": { "a": "Sangre materna 6,8; sangre fetal 7,4; orina 2", "b": "Sangre materna 7,2; sangre fetal 7,4; orina 8", "c": "Sangre materna 2; sangre fetal 5,5; orina 8", "d": "Sangre materna 7,4; sangre fetal 7,2; orina 6" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: 6,8 es el pH de la saliva (usado en liberación) y 2 es el del estómago; ninguno de los dos corresponde a sangre materna, fetal ni orina.",
    "b": "Incorrecto: los valores de madre y feto están intercambiados; es la sangre fetal la que tiene menor pH (7,2), no la materna.",
    "c": "Incorrecto: esos valores (2 y 5,5) corresponden al estómago y al duodeno, tramos del tracto gastrointestinal usados para absorción, no a sangre materna ni fetal.",
    "d": "Correcto: estos son los valores de referencia usados de forma constante durante todo el curso: sangre materna pH 7,4, sangre fetal pH 7,2 (ligeramente más ácida) y orina pH 6."
  },
  "repetida": true
},

{
  "id": "t6-001",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Cómo se define la afinidad entre un fármaco y su diana, y de qué depende que sea mayor?",
  "opciones": { "a": "Es sinónimo exacto de selectividad", "b": "Es un concepto que depende únicamente del tamaño del fármaco", "c": "Es la atracción entre fármaco y diana; sube cuanto mayor es el número de fuerzas intermoleculares que se establecen y mayor es la fuerza de cada una de ellas", "d": "Es la velocidad a la que el fármaco se metaboliza en el hígado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: son conceptos distintos; la selectividad la aporta la diana (según con qué fármaco tenga mayor afinidad), mientras que la afinidad es la fuerza de atracción en sí.",
    "b": "Incorrecto: el tamaño influye en el requisito estérico de encaje, pero la afinidad depende sobre todo del número y la fuerza de las interacciones establecidas, no solo del tamaño.",
    "c": "Correcto: la afinidad es la atracción entre fármaco y diana; aumenta cuantas más fuerzas intermoleculares se establezcan y cuanto más fuerte sea cada una de ellas, lo que se traduce en menor energía (mayor estabilidad) del complejo fármaco-diana.",
    "d": "Incorrecto: la velocidad de metabolismo es un concepto de farmacocinética (parcial 1 y 3), no de afinidad fármaco-diana en farmacodinamia."
  },
  "repetida": false
},

{
  "id": "t6-002",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Cuáles son los tres requisitos que deben cumplirse para que haya un buen reconocimiento molecular entre un fármaco y su diana?",
  "opciones": { "a": "Peso molecular, número de anillos aromáticos y presencia de un carbono quiral", "b": "Solubilidad, punto de fusión y color del fármaco", "c": "Grupos funcionales complementarios; requisitos estéricos de tamaño, forma y conformación; y estereoquímica correcta", "d": "Que el fármaco sea siempre ácido y la diana siempre básica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: esos factores pueden influir de forma indirecta, pero no son los tres requisitos formales del reconocimiento molecular enseñados en clase.",
    "b": "Incorrecto: ninguna de esas tres propiedades físicas son los criterios de reconocimiento molecular explicados en clase.",
    "c": "Correcto: los tres requisitos explicados son grupos funcionales complementarios (si el fármaco es ácido, interesa que la diana tenga un grupo básico, y viceversa), requisitos estéricos de tamaño/forma/conformación, y una estereoquímica adecuada (enantioselectividad y diastereoselectividad).",
    "d": "Incorrecto: no hace falta que el fármaco sea siempre ácido; puede tener cualquier tipo de grupo, lo importante es que sea complementario al de la diana en cada punto de unión."
  },
  "repetida": true
},

{
  "id": "t6-003",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "Ordenando de menor a mayor fuerza, ¿cuál es la secuencia de interacciones intermoleculares estudiada en este parcial, antes de llegar al enlace de coordinación y al enlace covalente (que se estudian en el parcial siguiente)?",
  "opciones": { "a": "Stacking < Van der Waals < enlace iónico reforzado < ion-dipolo < dipolo-dipolo < enlace de hidrógeno < enlace iónico", "b": "Enlace iónico reforzado < enlace iónico < enlace de hidrógeno < ion-dipolo < dipolo-dipolo < stacking < Van der Waals", "c": "Todas las fuerzas intermoleculares vistas en este parcial tienen exactamente la misma intensidad", "d": "Van der Waals (London) < stacking < dipolo-dipolo < ion-dipolo < enlace de hidrógeno < enlace iónico < enlace iónico reforzado" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: coloca el enlace iónico reforzado en una posición intermedia, cuando en realidad es la interacción más fuerte de toda la escala.",
    "b": "Incorrecto: presenta la escala en orden inverso; Van der Waals es la más débil y el enlace iónico reforzado la más fuerte, no al revés.",
    "c": "Incorrecto: precisamente se ordenan de menor a mayor fuerza porque tienen intensidades claramente distintas, y esa escala se usa para decidir qué fármaco tiene mayor afinidad.",
    "d": "Correcto: esta es la escala de menor a mayor fuerza vista en clase: Van der Waals (London), stacking, dipolo-dipolo, ion-dipolo, enlace de hidrógeno, enlace iónico y, por último, el enlace iónico reforzado como el más fuerte de todos."
  },
  "repetida": true
},

{
  "id": "t6-004",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Qué aminoácidos de la diana dan lugar a fuerzas de Van der Waals (London) al enfrentarse a una zona apolar del fármaco?",
  "opciones": { "a": "Los aminoácidos ácidos: aspártico y glutámico", "b": "Los aminoácidos con OH: serina, treonina y tirosina", "c": "Los aminoácidos apolares: alanina, valina, leucina, isoleucina y prolina", "d": "Únicamente la histidina" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el aspártico y el glutámico, al estar cargados a pH fisiológico, dan lugar a enlaces iónicos (o iónicos reforzados), no a Van der Waals.",
    "b": "Incorrecto: los aminoácidos con OH dan enlaces de hidrógeno (flip-flop), una interacción mucho más fuerte que Van der Waals.",
    "c": "Correcto: los aminoácidos apolares (alanina, valina, leucina, isoleucina y prolina) solo tienen cadenas de carbono e hidrógeno en su cadena lateral, por lo que dan fuerzas de Van der Waals (las más débiles) con zonas apolares del fármaco.",
    "d": "Incorrecto: la histidina no es un aminoácido apolar; su cadena lateral contiene nitrógenos capaces de dar y aceptar enlaces de hidrógeno."
  },
  "repetida": false
},

{
  "id": "t6-005",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Qué es el stacking y por qué se considera una interacción más 'grande' que un Van der Waals normal, aunque en el fondo sea el mismo tipo de fuerza?",
  "opciones": { "a": "Es la superposición de moléculas planas (como bencenos o anillos aromáticos), que al tener una superficie de contacto mucho mayor generan, en realidad, muchísimas fuerzas de Van der Waals simultáneas", "b": "Es un tipo de enlace covalente exclusivo de los anillos aromáticos", "c": "Es exactamente lo mismo que un enlace iónico reforzado", "d": "Solo puede darse entre dos cargas de signo opuesto" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el stacking ocurre cuando dos superficies planas y apolares (como dos bencenos) se apilan una encima de otra; al ser superficies planas, la zona de contacto es mucho mayor que en una molécula lineal que puede girar, lo que se traduce en muchas fuerzas de Van der Waals acumuladas.",
    "b": "Incorrecto: el stacking no implica ningún enlace covalente; sigue siendo una interacción débil de tipo Van der Waals, solo que multiplicada por la gran superficie de contacto.",
    "c": "Incorrecto: son interacciones de fuerza radicalmente distinta; el stacking está entre las más débiles de la escala y el iónico reforzado es la más fuerte.",
    "d": "Incorrecto: el stacking se da entre superficies apolares (como dos anillos aromáticos), no requiere ninguna carga real."
  },
  "repetida": false
},

{
  "id": "t6-006",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Qué aminoácidos dan lugar a interacciones de tipo dipolo-dipolo con una zona polar del fármaco?",
  "opciones": { "a": "Los aminoácidos polares sin carga: la cisteína (con su SH) y las dos amidas de cadena lateral, asparagina y glutamina", "b": "Únicamente la lisina y la arginina", "c": "Únicamente los aminoácidos apolares (alanina, valina, leucina...)", "d": "Ningún aminoácido puede dar una interacción de tipo dipolo-dipolo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la cisteína (con su SH, que no da enlace de hidrógeno) y las dos amidas de cadena lateral (asparagina y glutamina, sin carga a pH fisiológico) son los aminoácidos polares sin carga que dan lugar a interacciones dipolo-dipolo con el fármaco.",
    "b": "Incorrecto: la lisina y la arginina están cargadas positivamente a pH fisiológico, por lo que dan lugar a enlaces iónicos (o iónicos reforzados), no a dipolo-dipolo.",
    "c": "Incorrecto: los aminoácidos apolares no tienen ningún átomo distinto de carbono e hidrógeno, así que no generan ningún dipolo; solo dan Van der Waals.",
    "d": "Incorrecto: sí existen aminoácidos capaces de dar esta interacción, precisamente los polares sin carga mencionados en la opción correcta."
  },
  "repetida": false
},

{
  "id": "t6-007",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿En qué consiste una interacción de tipo ion-dipolo entre un fármaco y su diana?",
  "opciones": { "a": "Es la interacción entre una parte del fármaco que está ionizada (con carga real) y una zona polar de la diana que solo tiene un dipolo (sin carga real), como el CH₂-SH de una cisteína", "b": "Solo puede darse cuando tanto el fármaco como la diana tienen carga real", "c": "Es la interacción entre dos zonas completamente apolares del fármaco y de la diana", "d": "Es una interacción exclusiva de los anillos aromáticos planos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en una interacción ion-dipolo, la parte ionizada del fármaco (por ejemplo, un grupo ácido desprotonado o una amina protonada) se acerca a la densidad de carga (dipolo) de un aminoácido polar sin carga real, como el SH de la cisteína.",
    "b": "Incorrecto: es justo lo que distingue al ion-dipolo del enlace iónico: en el ion-dipolo solo una de las dos partes tiene carga real, la otra solo tiene un dipolo.",
    "c": "Incorrecto: para que haya un ion-dipolo hace falta al menos una carga real en una de las dos partes; entre dos zonas apolares solo se da Van der Waals.",
    "d": "Incorrecto: el ion-dipolo no está restringido a anillos aromáticos; se da entre cualquier fragmento ionizado y cualquier dipolo, sea plano o no."
  },
  "repetida": false
},

{
  "id": "t6-008",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Entre qué tipo de grupos se establece un enlace de hidrógeno, según lo explicado en clase?",
  "opciones": { "a": "Entre dos átomos de carbono cualesquiera de la cadena principal", "b": "Únicamente entre dos cargas del mismo signo", "c": "Entre un grupo que tiene un hidrógeno para dar (siempre sobre un átomo de oxígeno o de nitrógeno) y un grupo que acepta ese hidrógeno con sus pares libres (también sobre oxígeno o nitrógeno)", "d": "Solo puede darse dentro de un mismo anillo aromático" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: los átomos de carbono de la cadena principal, sin heteroátomos implicados, no participan en enlaces de hidrógeno.",
    "b": "Incorrecto: dos cargas del mismo signo se repelerían; el enlace de hidrógeno no depende de cargas reales del mismo signo, sino de un hidrógeno dador y un par libre aceptor.",
    "c": "Correcto: un enlace de hidrógeno necesita un grupo dador (con un hidrógeno sobre O o N) y un grupo aceptor (con pares libres disponibles, también sobre O o N); en farmacéutica se llama siempre 'enlace de hidrógeno', no 'puente de hidrógeno'.",
    "d": "Incorrecto: el enlace de hidrógeno puede darse entre cualquier grupo dador y aceptor adecuados, estén o no dentro de un anillo aromático."
  },
  "repetida": false
},

{
  "id": "t6-009",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Por qué el nitrógeno de una amida nunca actúa como aceptor de enlace de hidrógeno, a pesar de tener un par de electrones libre?",
  "opciones": { "a": "Porque el nitrógeno de la amida no tiene, en realidad, ningún par de electrones", "b": "Porque el oxígeno del carbonilo repele siempre cualquier enlace de hidrógeno", "c": "Porque las amidas nunca tienen ningún hidrógeno en su estructura", "d": "Porque ese par libre está permanentemente implicado en la resonancia con el carbonilo (efecto -R fuerte) y prefiere estar ahí antes que aceptar un enlace de hidrógeno; en su lugar, es el oxígeno del carbonilo el que actúa como aceptor" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el nitrógeno de la amida sí tiene un par de electrones; el problema es que está ocupado en la resonancia, no que no exista.",
    "b": "Incorrecto: el oxígeno del carbonilo no repele el enlace de hidrógeno; de hecho es precisamente el que actúa como aceptor en las amidas y los ésteres.",
    "c": "Incorrecto: algunas amidas sí tienen un hidrógeno sobre el nitrógeno (por ejemplo, las amidas primarias o secundarias), que en ese caso puede actuar como dador de enlace de hidrógeno.",
    "d": "Correcto: como en la amida el par del nitrógeno resuena constantemente hacia el carbonilo, ese par no está disponible para aceptar un enlace de hidrógeno; es el oxígeno del carbonilo quien asume ese papel de aceptor."
  },
  "repetida": true
},

{
  "id": "t6-010",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Qué condición es imprescindible para que se forme un enlace iónico (par iónico) entre fármaco y diana?",
  "opciones": { "a": "Que las dos partes implicadas tengan carga positiva", "b": "Que ninguna de las dos partes tenga ningún tipo de carga", "c": "Que ambas partes sean completamente apolares", "d": "Que haya un grupo con carga real positiva por un lado y un grupo con carga real negativa por el otro, sin que importe si es el fármaco o la diana quien aporta cada carga" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: dos cargas del mismo signo (ambas positivas) se repelerían, no formarían un enlace iónico estable.",
    "b": "Incorrecto: sin ninguna carga real en ninguna de las dos partes no puede haber enlace iónico; como mucho, podría darse una interacción más débil como Van der Waals o dipolo-dipolo.",
    "c": "Incorrecto: el enlace iónico requiere precisamente cargas reales, no zonas apolares (que darían Van der Waals, no un enlace iónico).",
    "d": "Correcto: para que haya un enlace iónico hace falta una carga real positiva por un lado y una carga real negativa por el otro; es indiferente si es el fármaco o la diana quien aporta cada una de las dos cargas."
  },
  "repetida": false
},

{
  "id": "t6-011",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Qué es un enlace iónico reforzado, la interacción más fuerte de las estudiadas en este parcial?",
  "opciones": { "a": "Es la coexistencia, en el mismo punto de unión, de un enlace iónico y un enlace de hidrógeno (dador o aceptor, da igual) entre el fármaco y la diana", "b": "Es la suma de dos fuerzas de Van der Waals en el mismo punto", "c": "Es simplemente un enlace iónico normal, sin ninguna diferencia respecto a un enlace iónico simple", "d": "Es un enlace covalente que se forma entre el fármaco y la diana" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: cuando en el mismo sitio de unión coinciden un enlace iónico (diferencia de cargas reales) y un enlace de hidrógeno adicional (sea dador o aceptor por parte del fármaco), se obtiene un enlace iónico reforzado, la mayor interacción de todas las estudiadas en este parcial.",
    "b": "Incorrecto: el enlace iónico reforzado combina un enlace iónico y un enlace de hidrógeno, no dos fuerzas de Van der Waals.",
    "c": "Incorrecto: precisamente lo que lo distingue de un enlace iónico simple es la presencia adicional y simultánea de un enlace de hidrógeno en el mismo punto de unión.",
    "d": "Incorrecto: el enlace covalente es una interacción distinta (mucho más fuerte todavía, y exclusiva de las enzimas, que se ve en el parcial siguiente), no lo mismo que un enlace iónico reforzado."
  },
  "repetida": true
},

{
  "id": "t6-012",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "Cuando la diana tiene una arginina (con su guanidina) y el fármaco trae un grupo ácido, se puede llegar a formar un 'anillo de ocho miembros' con dos enlaces de hidrógeno además del enlace iónico. ¿Qué representa este anillo de ocho miembros?",
  "opciones": { "a": "Un nuevo anillo aromático que se forma como producto de una reacción química", "b": "La interacción más fuerte de todas las estudiadas en este parcial: un enlace iónico reforzado con un enlace de hidrógeno adicional por el otro lado de la guanidina", "c": "Una forma de enlace covalente exclusiva de las enzimas", "d": "Un tipo de isomería estructural del fármaco" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: no se forma ningún nuevo enlace covalente ni ningún anillo aromático real; es simplemente la disposición geométrica de las interacciones no covalentes al contar los átomos implicados.",
    "b": "Correcto: cuando un grupo ácido del fármaco se enfrenta a la guanidina de una arginina, además del enlace iónico y el enlace de hidrógeno del nitrógeno protonado, se forma un segundo enlace de hidrógeno adicional por el otro lado de la guanidina, cerrando un anillo de ocho átomos que representa la unión más fuerte posible en este parcial.",
    "c": "Incorrecto: no hay ningún enlace covalente en esta interacción; son fuerzas no covalentes (iónicas y de hidrógeno) las que forman este anillo.",
    "d": "Incorrecto: no se trata de ninguna forma de isomería; es una descripción geométrica de cómo se disponen las interacciones no covalentes entre fármaco y diana."
  },
  "repetida": true
},

{
  "id": "t6-013",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Hace falta que un fármaco tenga exactamente una guanidina completa (como la de la arginina) para poder formar el anillo de ocho miembros con un enlace iónico reforzado y un enlace de hidrógeno adicional?",
  "opciones": { "a": "No, esa interacción nunca puede darse partiendo de un grupo aportado por el fármaco, solo desde la diana", "b": "Sí, es imprescindible tener los tres nitrógenos completos de la guanidina", "c": "No; basta con que el fármaco tenga una amidina (dos nitrógenos), que puede formar exactamente la misma unión reforzada con un aspártico o un glutámico de la diana", "d": "Sí, y además el fármaco necesita tener obligatoriamente un anillo aromático" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: en el ejemplo trabajado en clase es precisamente el fármaco el que aporta la amidina, mientras que la diana aporta el aspártico o glutámico; la interacción es simétrica en cuanto a qué lado aporta cada grupo.",
    "b": "Incorrecto: se explica expresamente que no hace falta tener una guanidina completa; una amidina (con solo dos nitrógenos) es suficiente para formar la misma unión.",
    "c": "Correcto: con que el fármaco lleve una amidina protonada (habitual en muchos fármacos), se puede formar la misma unión de anillo de ocho miembros al enfrentarla a un aspártico o glutámico de la diana, obteniendo un enlace iónico reforzado con un enlace de hidrógeno adicional.",
    "d": "Incorrecto: no se exige ningún anillo aromático adicional para esta interacción; basta con el grupo amidina protonado del fármaco."
  },
  "repetida": false
},

{
  "id": "t6-014",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "A la hora de comparar dos posibles fármacos frente a la misma diana para ver cuál tiene mayor afinidad, ¿qué dos criterios generales hay que aplicar?",
  "opciones": { "a": "El orden o tipo de las interacciones nunca influye en la afinidad", "b": "Buscar el fármaco con mayor número de puntos de unión y, en igualdad de número, el que tenga las interacciones individuales más fuertes", "c": "Elegir siempre el fármaco con más átomos de carbono, sin fijarse en ninguna otra propiedad", "d": "Elegir siempre el fármaco con menor peso molecular, sin analizar las interacciones" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente el tipo de interacción (por ejemplo, Van der Waals frente a enlace iónico reforzado) es determinante para decidir cuál de dos fármacos tiene mayor afinidad.",
    "b": "Correcto: para maximizar la afinidad hay que buscar, primero, el mayor número posible de puntos de unión entre fármaco y diana, y, ante una igualdad en el número de puntos, elegir siempre la interacción individual más fuerte disponible.",
    "c": "Incorrecto: el número de carbonos no es en sí mismo un criterio de afinidad; lo relevante son los grupos funcionales complementarios y las fuerzas que puedan establecer.",
    "d": "Incorrecto: el peso molecular por sí solo no determina la afinidad; lo hacen el número y la fuerza de las interacciones establecidas."
  },
  "repetida": false
},

{
  "id": "t6-015",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Cómo se encuentran los aminoácidos ácidos (aspártico y glutámico) en su cadena lateral a pH fisiológico?",
  "opciones": { "a": "Formando siempre un enlace covalente con el fármaco", "b": "Siempre neutros; nunca llegan a ionizarse", "c": "Desprotonados, con carga negativa, preparados para dar un enlace iónico (o iónico reforzado) con una zona positiva del fármaco", "d": "Protonados, con carga positiva" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la interacción típica con estos aminoácidos es de tipo no covalente (iónica o iónica reforzada), no un enlace covalente.",
    "b": "Incorrecto: precisamente están ionizados (desprotonados) a pH fisiológico; por eso se les clasifica como aminoácidos ácidos/iónicos en el esquema de interacciones.",
    "c": "Correcto: el aspártico y el glutámico tienen un ácido carboxílico en su cadena lateral que, a pH fisiológico, está desprotonado (carga negativa), preparado para dar un enlace iónico, e incluso reforzado si además se produce un enlace de hidrógeno simultáneo.",
    "d": "Incorrecto: los grupos ácido carboxílico de sus cadenas laterales están desprotonados (con carga negativa) a pH fisiológico, no protonados."
  },
  "repetida": false
},

{
  "id": "t6-016",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "En esta asignatura se consideran tres aminoácidos básicos. ¿Cuáles son, y qué matiz importante hay que recordar sobre uno de ellos respecto a lo visto en Bioquímica?",
  "opciones": { "a": "Lisina, arginina e histidina; a diferencia de lo visto en Bioquímica, en esta asignatura la histidina se considera neutra (no protonada) a pH fisiológico", "b": "Lisina, arginina y cisteína, y las tres se consideran siempre protonadas", "c": "Aspártico, glutámico e histidina", "d": "Solo la lisina se considera básica en esta asignatura" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los tres aminoácidos básicos considerados son lisina, arginina e histidina; sin embargo, a diferencia del criterio usado en Bioquímica (donde a veces se ioniza), en esta asignatura la histidina se trata siempre como neutra a pH fisiológico, por convenio del curso.",
    "b": "Incorrecto: la cisteína no es un aminoácido básico, es un aminoácido polar sin carga (da dipolo-dipolo, no enlace iónico); el tercer básico es la histidina.",
    "c": "Incorrecto: el aspártico y el glutámico son aminoácidos ácidos, no básicos; se clasifican en el grupo opuesto de la tabla.",
    "d": "Incorrecto: se consideran tres aminoácidos básicos, no solo uno; la lisina es uno de ellos, pero no el único."
  },
  "repetida": false
},

{
  "id": "t6-017",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Cómo se encuentra el grupo amino terminal de la cadena lateral de la lisina a pH fisiológico?",
  "opciones": { "a": "Siempre neutro; nunca llega a protonarse", "b": "Formando siempre un puente disulfuro con otro aminoácido", "c": "Protonado, con carga positiva, listo para dar un enlace iónico o iónico reforzado con un grupo ácido del fármaco", "d": "Desprotonado, con carga negativa" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente su carácter básico hace que esté protonado a pH fisiológico, no neutro.",
    "b": "Incorrecto: los puentes disulfuro se forman entre cisteínas, no tienen ninguna relación con la cadena lateral de la lisina.",
    "c": "Correcto: el grupo amino terminal de la lisina está protonado (con carga positiva) a pH fisiológico, lo que le permite formar un enlace iónico, o iónico reforzado si además coincide un enlace de hidrógeno, con un grupo ácido del fármaco.",
    "d": "Incorrecto: al ser un grupo amino (base), está protonado con carga positiva, no desprotonado con carga negativa."
  },
  "repetida": false
},

{
  "id": "t6-018",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "En la cadena lateral de la arginina, que contiene una guanidina (el grupo más básico de todos), ¿cuál de los nitrógenos se protona a pH fisiológico?",
  "opciones": { "a": "Ninguno se protona nunca en la arginina", "b": "Cualquiera de los tres nitrógenos, indistintamente", "c": "Solo se protonan los dos nitrógenos de tipo NH₂ simultáneamente", "d": "El nitrógeno del doble enlace, porque es el único cuyo par libre no tiene ninguna forma resonante posible que se lo retire" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la guanidina de la arginina, al ser la base más fuerte de la tabla, está protonada de forma prácticamente constante a pH fisiológico.",
    "b": "Incorrecto: no es indiferente; el nitrógeno concreto que se protona es siempre el del doble enlace, no cualquiera de los tres.",
    "c": "Incorrecto: solo se protona un nitrógeno (el del doble enlace); los otros dos nitrógenos tipo amina pueden resonar hacia ese primero y pierden disponibilidad para protonarse ellos mismos.",
    "d": "Correcto: al igual que en la amidina, en la guanidina el nitrógeno del doble enlace es el único cuyo par libre no puede resonar hacia otro heteroátomo, así que queda totalmente disponible y es el que se protona."
  },
  "repetida": false
},

{
  "id": "t6-019",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "La cisteína tiene un grupo SH en su cadena lateral. ¿Por qué da una interacción de tipo dipolo-dipolo con el fármaco, en lugar de un enlace de hidrógeno como haría un OH?",
  "opciones": { "a": "Porque la cisteína nunca puede interaccionar con ningún fármaco", "b": "Porque el SH de la cisteína no tiene ningún tipo de polaridad", "c": "Porque el azufre siempre forma enlaces iónicos, nunca enlaces de hidrógeno ni dipolo-dipolo", "d": "Porque el azufre, a diferencia del oxígeno o el nitrógeno, no se considera capaz de dar o aceptar enlaces de hidrógeno según la clasificación usada en clase, aunque el enlace S-H sigue siendo lo bastante polar como para dar una interacción dipolo-dipolo" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la cisteína sí puede interaccionar con el fármaco, mediante una fuerza dipolo-dipolo, aunque más débil que un enlace de hidrógeno.",
    "b": "Incorrecto: el enlace S-H sí es polar (hay diferencia de electronegatividad), lo que permite precisamente la interacción dipolo-dipolo descrita.",
    "c": "Incorrecto: la cisteína, sin carga real a pH fisiológico, no da lugar a un enlace iónico; da dipolo-dipolo, no enlace iónico.",
    "d": "Correcto: en la clasificación de interacciones usada en clase, el enlace de hidrógeno se reserva a dadores y aceptores sobre oxígeno o nitrógeno; el azufre de la cisteína queda fuera de esa categoría, pero al ser un enlace polarizado, sigue dando lugar a una interacción dipolo-dipolo."
  },
  "repetida": false
},

{
  "id": "t6-020",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "La tirosina tiene tanto un anillo bencénico como un grupo OH en su cadena lateral. ¿Qué dos tipos de interacción distinta puede dar, según la parte del fármaco con la que se enfrente?",
  "opciones": { "a": "Solo puede dar dipolo-dipolo, igual que la cisteína", "b": "Solo puede dar un enlace iónico, nunca stacking ni enlace de hidrógeno", "c": "No puede dar ningún tipo de interacción; es un aminoácido completamente inerte", "d": "Puede dar stacking (a través de su anillo aromático) o enlace de hidrógeno de tipo flip-flop (a través de su OH), según qué zona del fármaco tenga enfrente" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: a diferencia de la cisteína, la tirosina sí puede dar un enlace de hidrógeno completo a través de su OH, además del stacking por su anillo aromático.",
    "b": "Incorrecto: la tirosina no tiene carga real en su cadena lateral a pH fisiológico, así que no puede dar un enlace iónico; sus interacciones típicas son el stacking y el enlace de hidrógeno.",
    "c": "Incorrecto: la tirosina es uno de los aminoácidos con mayor capacidad de interacción, precisamente por combinar dos tipos de fuerza distintos en la misma cadena lateral.",
    "d": "Correcto: la tirosina combina un anillo aromático plano (capaz de dar stacking frente a otro anillo del fármaco) y un grupo OH (capaz de dar enlace de hidrógeno flip-flop, dador y aceptor a la vez); por eso hay que fijarse en qué parte del fármaco encaja mejor con cada zona de la tirosina."
  },
  "repetida": false
},

{
  "id": "t6-021",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "En el contexto del reconocimiento molecular fármaco-diana, ¿quién es realmente 'selectivo': el fármaco o la diana?",
  "opciones": { "a": "Ambos son igual de selectivos y el concepto no se puede aplicar a uno solo de los dos", "b": "El fármaco, porque elige libremente a qué diana unirse", "c": "Ninguno de los dos; la unión ocurre siempre completamente al azar", "d": "La diana, porque es ella la que selecciona con qué fármaco (o ligando) tiene mayor afinidad; en sentido estricto, los fármacos no son 'selectivos'" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: se distingue explícitamente entre ambos papeles, atribuyendo la selectividad a la diana, no al fármaco.",
    "b": "Incorrecto: se insiste expresamente en clase en que los fármacos no son selectivos por sí mismos; es la diana la que 'elige' según la afinidad que cada fármaco pueda ofrecerle.",
    "c": "Incorrecto: la unión no es azarosa; depende directamente de la afinidad, que a su vez depende de la complementariedad de grupos, el tamaño/forma y la estereoquímica.",
    "d": "Correcto: en el sentido explicado en clase, la selectividad reside en la diana: dependiendo de sus aminoácidos y su geometría, tendrá mayor o menor afinidad por distintos fármacos o ligandos; la única forma de 'selección' es esa diferencia de afinidad."
  },
  "repetida": false
},

{
  "id": "t6-022",
  "tema": "Tema 4 — Farmacodinamia: fuerzas intermoleculares fármaco-diana",
  "pregunta": "¿Qué se entiende por 'adaptación inducida' y 'conformación activa' de un fármaco al unirse a su diana?",
  "opciones": { "a": "Que el fármaco, si tiene enlaces sencillos que le permiten girar, tiende a adoptar la disposición espacial (conformación) que maximiza el número de interacciones favorables con la diana", "b": "Que la conformación tridimensional del fármaco nunca influye en su afinidad por la diana", "c": "Que la diana cambia su secuencia de aminoácidos cada vez que se une un fármaco distinto", "d": "Que el fármaco siempre debe estar completamente rígido, sin ningún enlace sencillo, para poder unirse a cualquier diana" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los fármacos con enlaces sencillos pueden girar y adoptar distintas conformaciones; buscan siempre la conformación activa, la que genera el mayor número de interacciones posibles con la diana, produciendo lo que se llama una unión productiva.",
    "b": "Incorrecto: la conformación es precisamente uno de los tres requisitos del reconocimiento molecular; una mala conformación puede impedir que se den las interacciones necesarias.",
    "c": "Incorrecto: la adaptación inducida se refiere a un cambio conformacional del fármaco (o, en otros contextos, de la propia diana), no a un cambio en la secuencia de aminoácidos de la diana.",
    "d": "Incorrecto: es justo lo contrario; tener enlaces sencillos que permitan girar es lo que permite al fármaco alcanzar su conformación activa óptima."
  },
  "repetida": false
},

{
  "id": "t7-001",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "¿Cuáles son los dos tipos de estereoisómeros que se estudian en este tema, y a qué tipo de isomería da lugar cada uno?",
  "opciones": { "a": "Los tautómeros y los isómeros conformacionales", "b": "En esta asignatura solo existe un tipo de estereoisómero", "c": "Los que tienen un carbono quiral (dan lugar a enantiómeros, isómeros R/S) y los que tienen un doble enlace (dan lugar a diastereómeros, isómeros E/Z)", "d": "Los isómeros de posición y los isómeros de cadena" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: ni los tautómeros ni los isómeros conformacionales son el objeto de estudio de este tema, que se centra en enantiómeros y diastereómeros.",
    "b": "Incorrecto: se estudian explícitamente dos tipos de estereoisomería, relacionados con carbonos quirales y con dobles enlaces respectivamente.",
    "c": "Correcto: los estereoisómeros estudiados en este tema son, por un lado, los que surgen de un carbono quiral (enantiómeros, con isomería R/S), y por otro, los que surgen de un doble enlace (diastereómeros, con isomería E/Z).",
    "d": "Incorrecto: los isómeros de posición y de cadena son isómeros estructurales (constitucionales), un concepto distinto de la estereoisomería que se trabaja en este tema."
  },
  "repetida": true
},

{
  "id": "t7-002",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "¿Qué establece el modelo de los tres puntos de Easson-Stedman sobre el reconocimiento quiral de un fármaco por parte de su diana?",
  "opciones": { "a": "Que, para que haya reconocimiento quiral (enantioselectividad), el fármaco debe establecer al menos tres puntos de unión con tres aminoácidos distintos de la diana, en relación con su centro quiral", "b": "Que todos los fármacos con un carbono quiral son, automáticamente, reconocidos de forma distinta por cualquier diana", "c": "Que hacen falta cuatro puntos de unión con la diana, no tres", "d": "Que la diana solo distingue entre enantiómeros si se mide directamente su rotación óptica en el laboratorio" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: este es el enunciado exacto del modelo, muy susceptible de aparecer en examen: se necesitan como mínimo tres puntos de unión hacia tres aminoácidos distintos de la diana, en relación con el centro quiral del fármaco, para que se produzca reconocimiento quiral.",
    "b": "Incorrecto: tener un carbono quiral es una condición necesaria pero no suficiente; además hace falta que se cumplan los tres puntos de unión a aminoácidos distintos.",
    "c": "Incorrecto: el modelo exige tres puntos de unión, no cuatro; de ahí su nombre.",
    "d": "Incorrecto: el modelo de Easson-Stedman no se basa en medir la rotación óptica, sino en contar los puntos de unión reales entre el fármaco y aminoácidos concretos de la diana."
  },
  "repetida": true
},

{
  "id": "t7-003",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "Un fármaco tiene un carbono quiral del que salen tres puntos de unión hacia la diana, pero dos de esos tres puntos van a parar al mismo tipo de aminoácido (por ejemplo, dos residuos de tirosina distintos). Según el modelo de Easson-Stedman, ¿es esta unión enantioselectiva?",
  "opciones": { "a": "Sí, siempre que haya tres puntos de unión, sin importar si se repite el tipo de aminoácido", "b": "Sí, porque la tirosina es, por sí misma, un aminoácido especialmente enantioselectivo", "c": "No, porque el modelo exige que los tres puntos de unión sean con tres aminoácidos distintos; si dos de ellos son del mismo tipo, no se cumple la condición y la unión no es enantioselectiva", "d": "No se puede saber sin conocer la secuencia completa de la proteína diana" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el modelo exige explícitamente que los tres puntos de unión sean con tres aminoácidos distintos, no solo que existan tres puntos cualesquiera.",
    "b": "Incorrecto: la tirosina no es especial por ser 'enantioselectiva' en sí misma; el problema es que, si aparece repetida en dos de los tres puntos, deja de cumplirse el requisito de tres aminoácidos distintos.",
    "c": "Correcto: este es precisamente el caso especial señalado en clase (usando la tirosina como ejemplo, con su doble capacidad de stacking y enlace de hidrógeno); si dos de los tres puntos de unión coinciden en el mismo tipo de aminoácido, no se cumple el modelo de los tres puntos y la unión no es enantioselectiva.",
    "d": "Incorrecto: con la información de qué aminoácidos concretos participan en cada punto de unión ya se puede aplicar directamente el criterio del modelo, sin necesitar la secuencia completa de la proteína."
  },
  "repetida": true
},

{
  "id": "t7-004",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "¿En qué se diferencia la diastereoselectividad de la enantioselectividad, en cuanto al tipo de isomería que evalúa?",
  "opciones": { "a": "La diastereoselectividad evalúa isómeros procedentes de un carbono quiral, igual que la enantioselectividad", "b": "La diastereoselectividad y la enantioselectividad son, en realidad, exactamente el mismo concepto", "c": "La diastereoselectividad no tiene ninguna relación con la estereoquímica del fármaco", "d": "La diastereoselectividad evalúa la unión de fármacos con dobles enlaces (isómeros E/Z); si al pasar de E a Z se pierde algún punto de anclaje con la diana, se dice que esa unión es diastereoselectiva" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la isomería en torno a un carbono quiral (R/S) es la que da lugar a la enantioselectividad, no a la diastereoselectividad.",
    "b": "Incorrecto: son conceptos paralelos pero distintos, uno relacionado con carbonos quirales (enantioselectividad) y otro con dobles enlaces (diastereoselectividad).",
    "c": "Incorrecto: la diastereoselectividad es, precisamente, uno de los dos tipos de estereoselectividad estudiados en este tema.",
    "d": "Correcto: la diastereoselectividad se refiere a fármacos con dobles enlaces (isómeros E/Z); si cambiar de E a Z hace que se pierda algún punto de anclaje con la diana (porque un sustituyente cambia de posición espacial), se dice que la unión es diastereoselectiva."
  },
  "repetida": false
},

{
  "id": "t7-005",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "Al asignar la configuración R o S de un carbono quiral, si el sustituyente de menor prioridad (el número 4) queda dibujado en una cuña hacia delante (en vez de hacia atrás), ¿qué hay que hacer?",
  "opciones": { "a": "Asignar directamente R o S, sin realizar ningún ajuste adicional", "b": "Invertir el resultado obtenido: si al mirar el giro 1→2→3 parecía R, la configuración real es S, y viceversa", "c": "Descartar la molécula, porque no se puede asignar configuración R/S en ese caso", "d": "Asignar siempre la configuración R, con independencia del giro observado" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: si el grupo de menor prioridad no está orientado hacia atrás (lejos del observador), el giro observado directamente no corresponde a la configuración real; hay que corregirlo.",
    "b": "Correcto: la regla explicada es que, cuando el sustituyente de menor prioridad (el 4) está en cuña hacia delante en vez de hacia atrás, hay que invertir el resultado que se obtendría mirando el giro 1→2→3 directamente: lo que parecía R es en realidad S, y viceversa.",
    "c": "Incorrecto: sí se puede asignar la configuración en ese caso, simplemente requiere invertir el resultado observado a simple vista.",
    "d": "Incorrecto: no hay ninguna regla que asigne siempre R en ese caso; depende del giro real observado y de si hace falta invertirlo o no."
  },
  "repetida": false
},

{
  "id": "t7-006",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "Al asignar la configuración E o Z de un doble enlace, si los dos sustituyentes de mayor prioridad (uno en cada carbono del doble enlace) quedan en el mismo lado (por ejemplo, los dos hacia arriba), ¿qué isómero es?",
  "opciones": { "a": "Isómero E", "b": "No se puede determinar sin conocer más datos de la molécula", "c": "Isómero Z", "d": "Ninguno de los dos; esa disposición no es posible en un doble enlace" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: cuando los dos sustituyentes prioritarios quedan en el mismo lado (el mismo plano), la configuración es Z, no E.",
    "b": "Incorrecto: con solo saber en qué lado queda cada sustituyente prioritario ya se puede determinar la configuración, sin necesitar datos adicionales.",
    "c": "Correcto: si los sustituyentes prioritarios de ambos carbonos del doble enlace están en el mismo lado (los dos arriba o los dos abajo), la configuración es Z; si estuvieran en lados opuestos, sería E.",
    "d": "Incorrecto: esta disposición sí es perfectamente posible en un doble enlace; de hecho, es la que define precisamente al isómero Z."
  },
  "repetida": false
},

{
  "id": "t7-007",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "¿Cómo se define una mezcla racémica, y qué margen de proporciones se sigue considerando racémica en la práctica?",
  "opciones": { "a": "Una mezcla que contiene exclusivamente el distómero (el enantiómero menos activo)", "b": "Una mezcla con exactamente el 100% de un único enantiómero", "c": "Una mezcla de dos fármacos completamente distintos, sin relación estructural entre ellos", "d": "Una mezcla con aproximadamente 50% de cada enantiómero; en la práctica, incluso una proporción de 40/60 se sigue considerando mezcla racémica" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: una mezcla racémica contiene ambos enantiómeros en proporciones similares, no exclusivamente el distómero.",
    "b": "Incorrecto: el 100% de un único enantiómero sería un compuesto ópticamente puro, no una mezcla racémica.",
    "c": "Incorrecto: los dos enantiómeros de una mezcla racémica son estereoisómeros de la misma molécula (misma conectividad), no dos fármacos distintos.",
    "d": "Correcto: una mezcla racémica contiene, en principio, un 50% de cada enantiómero, aunque en clase se aclara que incluso una proporción de 40/60 se sigue considerando, a efectos prácticos, una mezcla racémica."
  },
  "repetida": false
},

{
  "id": "t7-008",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "En la síntesis de un fármaco con un carbono quiral, ¿qué suele ser lo más caro para un laboratorio farmacéutico, y qué alternativas existen?",
  "opciones": { "a": "Lo más caro suele ser separar (resolver) los dos enantiómeros de la mezcla racémica; las alternativas son una síntesis enantiocontrolada (más fácil que separar) o, si tampoco es posible, vender directamente el racémico, origen de muchos fármacos genéricos", "b": "No existe ninguna alternativa a la resolución de mezclas racémicas", "c": "Lo más barato siempre es separar los enantiómeros uno a uno", "d": "Sintetizar un fármaco con un carbono quiral cuesta siempre lo mismo que uno sin ningún carbono quiral" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: se explica que la resolución de racémicos (separar los enantiómeros R y S) es difícil y cara; es más fácil (y barato) conseguir una síntesis enantiocontrolada que dé directamente el enantiómero deseado, y si eso tampoco es viable, lo más barato de todo es vender el racémico, de donde surgieron muchos fármacos genéricos.",
    "b": "Incorrecto: sí existen alternativas, como la síntesis enantiocontrolada o la comercialización directa del racémico.",
    "c": "Incorrecto: es justo lo contrario; separar los enantiómeros es la opción más cara, no la más barata.",
    "d": "Incorrecto: se explica expresamente que los carbonos quirales, los dobles enlaces y los ciclos encarecen la síntesis del fármaco respecto a una molécula sin esas complicaciones estructurales."
  },
  "repetida": false
},

{
  "id": "t7-009",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "El ibuprofeno tiene un carbono quiral: el enantiómero R es inactivo y el S es el activo. A pesar de ello, se puede seguir comercializando como mezcla racémica sin perder toda la eficacia. ¿Por qué?",
  "opciones": { "a": "Porque, en realidad, el enantiómero R del ibuprofeno también es completamente activo", "b": "Porque el ibuprofeno no tiene, en realidad, ningún carbono quiral", "c": "Porque, por 'suerte' para quien lo descubrió, existe una enzima capaz de transformar el enantiómero R en el S dentro del organismo, de modo que parte del enantiómero inicialmente inactivo acaba convirtiéndose en activo", "d": "Porque la mezcla racémica de ibuprofeno nunca contiene el enantiómero R" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el enantiómero R del ibuprofeno es inactivo; solo el S presenta actividad terapéutica.",
    "b": "Incorrecto: el ibuprofeno sí tiene un carbono quiral, que es precisamente la base de todo este ejemplo de eutómero/distómero.",
    "c": "Correcto: se cita explícitamente en clase que quien descubrió el ibuprofeno 'se cubrió de gloria' porque existe una enzima capaz de convertir el enantiómero R (inactivo) en S (activo) dentro del organismo, lo que permite seguir comercializándolo como mezcla racémica sin perder toda la actividad.",
    "d": "Incorrecto: la mezcla racémica de ibuprofeno contiene, en principio, un 50% de R y un 50% de S; lo que ocurre es que parte del R se convierte en S dentro del organismo."
  },
  "repetida": true
},

{
  "id": "t7-010",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "La indacrinona es un ejemplo, citado en clase, del caso en que los dos enantiómeros de un fármaco son activos pero con actividades terapéuticas distintas. ¿En qué consiste este caso concreto?",
  "opciones": { "a": "Los dos enantiómeros de la indacrinona tienen exactamente la misma actividad diurética", "b": "Los dos enantiómeros de la indacrinona son completamente inactivos", "c": "El isómero R actúa como diurético, mientras que el otro sirve para bajar el ácido úrico, aunque provoca retención de líquidos", "d": "Uno de los enantiómeros de la indacrinona es mutagénico y produce malformaciones congénitas" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente lo que distingue este ejemplo es que cada enantiómero tiene una actividad terapéutica diferente, no idéntica.",
    "b": "Incorrecto: ambos enantiómeros de la indacrinona tienen actividad biológica, cada uno con una función terapéutica distinta.",
    "c": "Correcto: la indacrinona ilustra el caso en que ambos enantiómeros tienen actividad, pero de tipo distinto: el isómero R es diurético, y el otro sirve para bajar el ácido úrico, aunque con el efecto adverso de la retención de líquidos.",
    "d": "Incorrecto: la mutagenicidad de un enantiómero es el ejemplo característico de la talidomida, no de la indacrinona."
  },
  "repetida": false
},

{
  "id": "t7-011",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "La talidomida es el ejemplo histórico, citado en clase, del caso en que los dos enantiómeros de un fármaco son activos pero uno de ellos resulta tóxico. ¿Qué ocurrió con este fármaco?",
  "opciones": { "a": "Los dos enantiómeros de la talidomida eran completamente inactivos, sin ningún efecto biológico", "b": "Los dos enantiómeros de la talidomida tenían exactamente el mismo perfil de seguridad", "c": "Un enantiómero era antiemético (evitaba el vómito en el embarazo) y el otro era mutagénico, lo que provocó, en los años setenta, el nacimiento de niños con graves malformaciones", "d": "La talidomida no tiene, en realidad, ningún carbono quiral" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: ambos enantiómeros presentaban actividad biológica; el problema era que una de esas actividades era tóxica, no que fueran inactivos.",
    "b": "Incorrecto: precisamente lo trágico del caso es que ambos enantiómeros tenían perfiles completamente distintos, uno terapéutico y otro gravemente tóxico.",
    "c": "Correcto: uno de los enantiómeros de la talidomida evitaba el vómito en mujeres embarazadas (efecto terapéutico buscado), pero el otro era mutagénico, lo que causó un grave problema de salud pública en los años setenta, con el nacimiento de niños con importantes malformaciones.",
    "d": "Incorrecto: la talidomida sí tiene un carbono quiral, que es la base de este ejemplo clásico de toxicidad estereoselectiva."
  },
  "repetida": true
},

{
  "id": "t7-012",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "En el caso en que solo uno de los dos enantiómeros de un fármaco presenta actividad biológica (como ocurre con el ibuprofeno), ¿cómo se llama el enantiómero activo?",
  "opciones": { "a": "Eutómero", "b": "Distómero", "c": "Isómero cis", "d": "Racemato" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el eutómero es, por definición, el enantiómero de mayor actividad biológica (en el caso del ibuprofeno, el S).",
    "b": "Incorrecto: el distómero es justo lo contrario, el enantiómero de menor actividad (o incluso inactivo, como el R del ibuprofeno).",
    "c": "Incorrecto: 'cis' es terminología de isomería en dobles enlaces (relacionada con Z), no de enantiómeros procedentes de un carbono quiral.",
    "d": "Incorrecto: 'racemato' (o mezcla racémica) se refiere a la mezcla de ambos enantiómeros, no a uno solo de ellos."
  },
  "repetida": false
},

{
  "id": "t7-013",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "La noradrenalina es un ejemplo, citado en clase, en el que los dos enantiómeros son activos pero con distinta potencia (uno más activo que el otro). ¿Cómo se llama el cociente entre la actividad del enantiómero más activo y la del menos activo?",
  "opciones": { "a": "Coeficiente de partición (LogP)", "b": "Índice eudísmico", "c": "Constante de disociación (pKa)", "d": "Rendimiento de recristalización" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el LogP es una medida de lipofilia, sin relación con la comparación de actividad entre enantiómeros.",
    "b": "Correcto: el índice eudísmico es, precisamente, el cociente entre la actividad del eutómero y la del distómero; en el ejemplo de la noradrenalina, ilustra el caso de dos enantiómeros activos con distinta potencia.",
    "c": "Incorrecto: el pKa mide la acidez o basicidad de un grupo funcional, no la relación de actividad entre dos enantiómeros.",
    "d": "Incorrecto: el rendimiento de recristalización es un concepto de la práctica de laboratorio (síntesis de fenitoína), sin relación con la estereoquímica de fármacos."
  },
  "repetida": true
},

{
  "id": "t7-014",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "Sobre el índice eudísmico (cociente entre la actividad del eutómero y la del distómero), ¿qué valor puede tomar, por definición, y qué significa un valor mayor?",
  "opciones": { "a": "Es siempre exactamente igual a 1, para cualquier fármaco con un carbono quiral", "b": "Siempre es mayor que la unidad, porque el eutómero, por definición, es más activo que el distómero; cuanto mayor sea su valor, mayor será la enantioselectividad de la diana", "c": "Siempre es menor que 1, y cuanto más pequeño, mayor es la enantioselectividad de la diana", "d": "Puede ser negativo si el distómero resulta ser tóxico" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el valor de 1 correspondería a una diana no enantioselectiva (misma actividad para ambos enantiómeros); en la mayoría de los casos estudiados el índice es mayor que 1.",
    "b": "Correcto: como el eutómero se define como el enantiómero de mayor actividad, el índice eudísmico (eutómero/distómero) siempre será mayor que la unidad; cuanto mayor sea ese valor, mayor será la diferencia de actividad entre los dos enantiómeros, es decir, mayor enantioselectividad por parte de la diana.",
    "c": "Incorrecto: es justo lo contrario; al ser el eutómero más activo por definición, el cociente siempre es mayor que 1, no menor.",
    "d": "Incorrecto: el índice eudísmico es un cociente de actividades biológicas, siempre positivo; la toxicidad del distómero no convierte el cociente en negativo."
  },
  "repetida": false
},

{
  "id": "t7-015",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "Al dividir la actividad del enantiómero R entre la actividad de la mezcla racémica (R/RS) se obtiene un valor de 2. ¿Qué significa este resultado?",
  "opciones": { "a": "Que la diana no es, en absoluto, enantioselectiva", "b": "Que los dos enantiómeros, R y S, son igual de activos", "c": "Que este resultado no tiene ningún significado interpretable", "d": "Que la actividad de R es el doble que la de la mezcla racémica, lo que significa que el enantiómero S no tiene ninguna actividad biológica" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: un cociente de 2 (distinto de 1) indica precisamente que sí hay diferencia de actividad entre enantiómeros, es decir, que la diana sí es enantioselectiva (de hecho, al máximo, con S totalmente inactivo).",
    "b": "Incorrecto: si los dos enantiómeros fueran igual de activos, el cociente R/mezcla racémica sería igual a 1, no a 2.",
    "c": "Incorrecto: este cociente tiene una interpretación clara y precisa, explicada en clase, sobre la contribución de cada enantiómero a la actividad total de la mezcla.",
    "d": "Correcto: como la mezcla racémica contiene un 50% de R y un 50% de S, si R por sí solo tiene el doble de actividad que la mezcla, eso implica que toda la actividad de la mezcla procede de R, es decir, que S no aporta ninguna actividad."
  },
  "repetida": true
},

{
  "id": "t7-016",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "Al dividir la actividad del enantiómero R entre la actividad de la mezcla racémica se obtiene un valor entre 1 y 2 (por ejemplo, 1,5). ¿Qué indica este resultado?",
  "opciones": { "a": "Que este resultado nunca puede darse en la práctica real", "b": "Que los dos enantiómeros tienen exactamente la misma actividad biológica", "c": "Que R sigue siendo el eutómero, pero que el enantiómero S también conserva algo de actividad; en este caso, la diana sí es enantioselectiva, porque hay mayor actividad de un enantiómero que del otro", "d": "Que el enantiómero S es completamente inactivo, exactamente igual que si el cociente fuera 2" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: esta es precisamente una situación habitual en la práctica, con muchos fármacos donde ambos enantiómeros aportan algo de actividad, aunque en distinta medida.",
    "b": "Incorrecto: si tuvieran exactamente la misma actividad, el cociente sería igual a 1, no un valor entre 1 y 2.",
    "c": "Correcto: un cociente entre 1 y 2 indica una situación intermedia: R sigue siendo más activo (eutómero), pero S conserva algo de actividad (no es cero); como hay diferencia de actividad entre ambos, la diana se considera enantioselectiva.",
    "d": "Incorrecto: la inactividad total de S corresponde a un cociente de 2, no a un valor intermedio entre 1 y 2, donde S sí conserva algo de actividad."
  },
  "repetida": false
},

{
  "id": "t7-017",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "¿Es correcto usar 'estereoisómero' como sinónimo exacto de 'enantiómero'?",
  "opciones": { "a": "No, porque los estereoisómeros no tienen ninguna relación con los enantiómeros", "b": "No; 'estereoisómero' es el término general que engloba tanto a los enantiómeros (isomería en torno a un carbono quiral) como a los diastereómeros (isomería E/Z en dobles enlaces); 'enantiómero' es más específico", "c": "Sí, porque los diastereómeros no se consideran estereoisómeros", "d": "Sí, son términos completamente intercambiables en cualquier contexto" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: los enantiómeros son, precisamente, uno de los dos tipos de estereoisómeros que existen.",
    "b": "Correcto: 'estereoisómero' es el término general (isomería espacial) que incluye tanto a los enantiómeros como a los diastereómeros; decir simplemente 'enantiómero' cuando se debería decir 'estereoisómero' (o al revés) se señala como un error típico en los ejercicios de examen.",
    "c": "Incorrecto: es justo lo contrario; los diastereómeros sí son un tipo de estereoisómero, junto con los enantiómeros.",
    "d": "Incorrecto: se advierte explícitamente en clase que no son sinónimos exactos; usar uno por otro en una pregunta de examen puede ser motivo de error, como se explica en varios ejercicios resueltos."
  },
  "repetida": true
},

{
  "id": "t7-018",
  "tema": "Tema 4 — Farmacodinamia: estereoquímica y estereoselectividad",
  "pregunta": "Comparando el GABA (un neurotransmisor, ligando endógeno) con sus análogos gabapentina y pregabalina, ¿cuáles de ellos tienen al menos un carbono quiral?",
  "opciones": { "a": "Ninguno de los tres compuestos tiene ningún carbono quiral", "b": "El GABA, pero no la gabapentina ni la pregabalina", "c": "La gabapentina y la pregabalina sí tienen un carbono quiral (con una cadena, un sustituyente cíclico y un hidrógeno, entre otros, como sustituyentes distintos); el GABA no, porque sus carbonos tienen dos hidrógenos cada uno (son CH₂)", "d": "Los tres compuestos tienen exactamente dos carbonos quirales cada uno" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: tanto la gabapentina como la pregabalina sí presentan un carbono quiral, ejemplo trabajado explícitamente en clase.",
    "b": "Incorrecto: es justo al revés; el GABA no tiene ningún carbono quiral (sus dos carbonos centrales son CH₂, con dos hidrógenos cada uno, así que no pueden tener cuatro sustituyentes distintos).",
    "c": "Correcto: tanto la gabapentina como la pregabalina incorporan un carbono con cuatro sustituyentes distintos (una cadena, un grupo cíclico o ramificado, y un hidrógeno, entre otros), lo que les da un carbono quiral y la posibilidad de enantioselectividad; el GABA, con sus carbonos CH₂, carece de esa posibilidad.",
    "d": "Incorrecto: cada uno de estos análogos presenta un único carbono quiral, no dos; y el GABA no presenta ninguno."
  },
  "repetida": false
},

{
  "id": "t8-001",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Cómo se define el grupo farmacóforo de un fármaco?",
  "opciones": { "a": "Es el grupo que determina exclusivamente la solubilidad del fármaco en agua", "b": "Es la parte de la molécula que interacciona directamente con la diana biológica y que es responsable de su acción farmacológica", "c": "Es el nombre que recibe el fármaco cabeza de serie de una familia", "d": "Es cualquier grupo funcional del fármaco, tenga o no relación con la unión a la diana" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la solubilidad se estudia con la tabla de Lenke en el primer parcial (farmacocinética); el grupo farmacóforo es un concepto de farmacodinamia, centrado en la unión a la diana.",
    "b": "Correcto: el grupo farmacóforo se define, tal como se pide aprender de memoria en clase por ser una definición muy susceptible de examen, como la parte del fármaco responsable de las uniones fundamentales con la diana y, por tanto, de su acción farmacológica.",
    "c": "Incorrecto: 'cabeza de serie' es un concepto distinto (la molécula prototipo de una familia de fármacos), no sinónimo de grupo farmacóforo.",
    "d": "Incorrecto: no todos los grupos funcionales del fármaco pertenecen al farmacóforo; algunos pueden cambiarse sin afectar a la actividad, lo que demuestra que no son esenciales para la unión."
  },
  "repetida": true
},

{
  "id": "t8-002",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Cómo se estudia experimentalmente cuál es el grupo farmacóforo de un fármaco?",
  "opciones": { "a": "Se cuenta el número de átomos de carbono de la molécula", "b": "Se pregunta directamente al paciente qué efecto nota tras tomar el fármaco", "c": "Se hacen cambios sucesivos en los grupos que se sospecha que pertenecen al farmacóforo y se mide cómo varía la actividad biológica tras cada cambio", "d": "Se mide directamente el peso molecular del fármaco" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: contar carbonos es relevante para otros cálculos (como la tabla de Lenke), no para identificar el grupo farmacóforo.",
    "b": "Incorrecto: el estudio del grupo farmacóforo se basa en medir actividad biológica de forma sistemática tras modificaciones estructurales, no en percepciones subjetivas del paciente.",
    "c": "Correcto: la estrategia es ir haciendo cambios en los grupos sospechosos de pertenecer al farmacóforo (cambiándolos por otros con distinta capacidad de interacción) y observar si la actividad se mantiene o disminuye tras cada cambio.",
    "d": "Incorrecto: el peso molecular no informa por sí solo sobre qué grupos son responsables de la unión a la diana."
  },
  "repetida": false
},

{
  "id": "t8-003",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Al estudiar el grupo farmacóforo mediante cambios sucesivos en la molécula, ¿qué es lo único que puede ocurrir con la actividad del fármaco modificado, según se explica en clase?",
  "opciones": { "a": "Solo puede mantenerse igual o bajar; nunca puede subir, porque no se está diseñando un fármaco nuevo, solo investigando cuál es el farmacóforo", "b": "Puede subir, bajar o mantenerse; las tres opciones son igual de posibles", "c": "Siempre sube, porque cualquier cambio estructural mejora automáticamente el fármaco", "d": "Siempre baja hasta cero; el fármaco modificado siempre queda completamente inactivo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en la búsqueda del grupo farmacóforo, los cambios que se hacen son para investigar, no para mejorar el fármaco; por eso la actividad del compuesto modificado solo puede mantenerse igual (el grupo cambiado no era esencial) o bajar (el grupo sí era esencial), nunca subir.",
    "b": "Incorrecto: se insiste repetidamente en clase en que, en este contexto concreto (búsqueda del grupo farmacóforo), la actividad nunca sube; solo puede mantenerse o bajar.",
    "c": "Incorrecto: es justo lo contrario de lo que se explica; en este contexto de estudio del farmacóforo, la actividad nunca mejora respecto al original.",
    "d": "Incorrecto: no siempre baja a cero; puede bajar en distinto grado, o incluso mantenerse igual si el grupo cambiado no pertenecía al farmacóforo."
  },
  "repetida": true
},

{
  "id": "t8-004",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Si, tras cambiar un grupo del fármaco (por ejemplo, un alcohol por un éter), la actividad del compuesto se mantiene igual que la del original, ¿qué se concluye sobre ese grupo?",
  "opciones": { "a": "Que el fármaco ha perdido toda su actividad biológica", "b": "Que ese grupo no pertenece al grupo farmacóforo, ya que su cambio no ha afectado a la actividad", "c": "Que ese grupo sí pertenece al grupo farmacóforo", "d": "Que no se puede concluir absolutamente nada sobre ese grupo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: mantener la actividad significa justo lo contrario de perderla; el fármaco modificado sigue siendo tan activo como el original.",
    "b": "Correcto: esta es la regla básica de interpretación: si tras cambiar un grupo la actividad no varía, ese grupo no formaba parte de las interacciones fundamentales con la diana (no pertenece al grupo farmacóforo).",
    "c": "Incorrecto: si la actividad se mantiene tras el cambio, significa precisamente que ese grupo no era imprescindible para la unión, es decir, que no pertenece al farmacóforo.",
    "d": "Incorrecto: sí se puede concluir algo concreto y bien definido: que ese grupo concreto no pertenece al farmacóforo."
  },
  "repetida": false
},

{
  "id": "t8-005",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Si, tras cambiar un grupo del fármaco, la actividad baja de forma apreciable, ¿qué se concluye?",
  "opciones": { "a": "Que ese grupo no tenía ninguna relación con la unión a la diana", "b": "Que el fármaco se ha convertido automáticamente en un profármaco", "c": "Que se ha producido, con toda seguridad, un error experimental que hay que descartar sin más", "d": "Que ese grupo formaba parte del grupo farmacóforo, es decir, que contribuía a una interacción importante con la diana" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario; que la actividad baje demuestra que sí tenía relación con la unión a la diana.",
    "b": "Incorrecto: el concepto de profármaco no tiene relación con la identificación del grupo farmacóforo mediante cambios de actividad.",
    "c": "Incorrecto: una bajada de actividad tras un cambio estructural dirigido es precisamente el resultado esperado y significativo, no un error a descartar.",
    "d": "Correcto: si la actividad disminuye al cambiar un grupo, es señal de que ese grupo participaba en una interacción relevante con la diana, es decir, que formaba parte del grupo farmacóforo."
  },
  "repetida": false
},

{
  "id": "t8-006",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Cuáles son los tres fines generales de la modificación molecular de un fármaco explicados en clase?",
  "opciones": { "a": "Fines estéticos, fines legales y fines publicitarios", "b": "Fines farmacodinámicos (puntos de unión), fines farmacocinéticos (mejorar liberación, absorción, distribución, metabolismo o eliminación) y fines económico-sintéticos", "c": "Fines exclusivamente relacionados con el diseño del envase del medicamento", "d": "El único fin posible es aumentar el precio de venta del fármaco" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: ninguno de esos tres términos corresponde a los fines de modificación molecular estudiados en la asignatura.",
    "b": "Correcto: los tres fines de la modificación molecular explicados son los farmacodinámicos (mejorar los puntos de unión con la diana), los farmacocinéticos (mejorar cualquiera de las etapas del proceso LADME) y los económico-sintéticos (abaratar la síntesis industrial).",
    "c": "Incorrecto: el diseño del envase pertenece al ámbito de la tecnología farmacéutica, no a la modificación molecular de la estructura del fármaco.",
    "d": "Incorrecto: el precio no es en sí mismo un 'fin' de la modificación molecular, sino una consecuencia relacionada con el objetivo económico-sintético (abaratar costes de producción)."
  },
  "repetida": false
},

{
  "id": "t8-007",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "En este segundo parcial, centrado en el grupo farmacóforo, ¿qué tipo de objetivos de la modificación molecular se pueden trabajar realmente?",
  "opciones": { "a": "Únicamente los objetivos económicos, sin ninguna relación con la actividad del fármaco", "b": "Los objetivos farmacodinámicos: optimizar la actividad farmacológica aumentando la afinidad, y aumentar la selectividad (lo que reduce los efectos secundarios); los objetivos relacionados con receptores se estudian en un parcial posterior", "c": "Únicamente los objetivos farmacocinéticos, como mejorar la absorción del fármaco", "d": "Únicamente los objetivos relacionados con receptores agonistas y antagonistas" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: aunque el objetivo económico-sintético también se menciona en el tema, el foco de los ejercicios de este parcial son los objetivos farmacodinámicos de afinidad y selectividad.",
    "b": "Correcto: en este parcial solo se pueden trabajar los dos primeros objetivos farmacodinámicos (aumentar afinidad y aumentar selectividad, disminuyendo así los efectos secundarios); el tercer objetivo, relacionado con receptores, se deja para más adelante.",
    "c": "Incorrecto: los objetivos farmacocinéticos corresponden al primer parcial (proceso LADME); en este bloque, centrado en el grupo farmacóforo, se trabaja principalmente con los objetivos farmacodinámicos.",
    "d": "Incorrecto: el estudio de agonistas y antagonistas se deja explícitamente para un parcial posterior (el cuarto), no para este bloque centrado en el grupo farmacóforo."
  },
  "repetida": false
},

{
  "id": "t8-008",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Qué es una modificación molecular fija (MMF), término que aparece constantemente en los ejercicios de este tema?",
  "opciones": { "a": "Una transformación química permanente que se hace sobre la estructura del fármaco (por ejemplo, cambiar un grupo funcional o una porción estructural)", "b": "Una técnica de laboratorio exclusiva de la síntesis de enzimas", "c": "El nombre que recibe cualquier fármaco que, por definición, nunca se puede modificar", "d": "Un cambio temporal y reversible que sufre el fármaco dentro del organismo, como su ionización a distintos pH" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: una modificación molecular fija es una transformación química permanente de la estructura del fármaco; prácticamente todas las técnicas estudiadas en este tema (homología, ramificación, bioisosterismo, cambio de grupos funcionales...) son ejemplos de MMF.",
    "b": "Incorrecto: la modificación molecular fija se aplica al diseño y la optimización de fármacos en general, no es una técnica exclusiva de las enzimas.",
    "c": "Incorrecto: es justo lo contrario; MMF describe precisamente los fármacos que sí se modifican de forma permanente en su estructura.",
    "d": "Incorrecto: la ionización a distintos pH es un equilibrio reversible propio del primer parcial (especiación), no una modificación molecular fija de la estructura."
  },
  "repetida": false
},

{
  "id": "t8-009",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Qué caracteriza a la aproximación conjuntiva dentro de la modificación molecular fija?",
  "opciones": { "a": "Consiste únicamente en cambiar un grupo funcional por otro con capacidad enlazante equivalente", "b": "Consiste en aumentar el número de anillos aromáticos del fármaco", "c": "Consiste en simplificar al máximo una molécula compleja, eliminando ciclos y centros quirales innecesarios", "d": "Consiste en unir dos fármacos (dos moléculas activas) en una sola molécula; es la aproximación menos habitual y resulta muy fácil de identificar" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: cambiar un grupo funcional manteniendo capacidad enlazante equivalente es un tipo de bioisosterismo, dentro de la aproximación moduladora, no de la conjuntiva.",
    "b": "Incorrecto: la aproximación conjuntiva no consiste en añadir anillos aromáticos, sino en unir dos moléculas activas completas en una sola.",
    "c": "Incorrecto: esa descripción corresponde a la aproximación disyuntiva, no a la conjuntiva.",
    "d": "Correcto: la aproximación conjuntiva une dos fármacos (por ejemplo, paracetamol y aspirina) en una única molécula, mediante enlace covalente o iónico; es fácil de reconocer porque de dos moléculas activas se pasa a una sola, y es la menos habitual de las tres aproximaciones."
  },
  "repetida": false
},

{
  "id": "t8-010",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "La cocaína, con toda su estructura de biciclos, se simplificó hasta llegar a la procaína (un anestésico local), conservando el nitrógeno positivo, un benceno y una cadena intermedia con la distancia adecuada entre ambos. ¿Qué tipo de aproximación ilustra este ejemplo?",
  "opciones": { "a": "Aproximación conjuntiva", "b": "Bioisosterismo clásico según la ley del hidruro", "c": "Aproximación disyuntiva: una simplificación apreciable del fármaco, con eliminación de ciclos complejos, centros quirales o dobles enlaces innecesarios una vez conocido el grupo farmacóforo", "d": "Aproximación moduladora por cambio de sustituyentes no alquílicos" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la aproximación conjuntiva consiste en unir dos fármacos, no en simplificar uno solo; aquí solo hay una molécula de partida (la cocaína) que se simplifica.",
    "b": "Incorrecto: el bioisosterismo clásico implica sustituir átomos manteniendo el número de electrones de valencia; aquí lo que ocurre es una eliminación de partes enteras de la molécula, no una sustitución átomo a átomo.",
    "c": "Correcto: una vez conocido el grupo farmacóforo de la cocaína (el nitrógeno positivo, el benceno y la distancia entre ambos), se eliminó todo el biciclo carísimo de sintetizar, quedándose solo con lo esencial; esta simplificación apreciable es el ejemplo clásico de aproximación disyuntiva.",
    "d": "Incorrecto: aunque técnicamente es una modificación moduladora en sentido amplio, el ejemplo se cita expresamente en clase como el caso paradigmático de aproximación disyuntiva, por tratarse de una simplificación drástica de la molécula."
  },
  "repetida": true
},

{
  "id": "t8-011",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Cuáles son los tres grupos funcionales del fármaco que dan lugar a las interacciones más fuertes con la diana, y que por eso son los que principalmente se estudian al buscar el grupo farmacóforo?",
  "opciones": { "a": "El éter, el éster y la cetona", "b": "Cualquier grupo que solo tenga un único átomo de carbono", "c": "Los derivados halogenados y los alcanos simples", "d": "El alcohol (enlace de hidrógeno flip-flop), la amina (posibilidad de enlace iónico reforzado) y el ácido carboxílico (posibilidad de enlace iónico reforzado)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el éter, el éster y la cetona son, precisamente, algunos de los grupos 'empobrecidos' a los que se transforman el alcohol y el ácido para comprobar si pierden capacidad de interacción, no los grupos de partida más interesantes.",
    "b": "Incorrecto: el número de átomos de carbono no es el criterio que determina la importancia de un grupo para el reconocimiento molecular.",
    "c": "Incorrecto: los derivados halogenados y los alcanos no aportan las interacciones más fuertes (como mucho, Van der Waals); no son los grupos protagonistas del estudio del farmacóforo.",
    "d": "Correcto: el alcohol, la amina y el ácido carboxílico son los tres grupos que dan las interacciones más fuertes (enlace de hidrógeno flip-flop en el caso del alcohol, y posibilidad de enlace iónico reforzado en amina y ácido), por eso son los primeros que se estudian al investigar el grupo farmacóforo."
  },
  "repetida": true
},

{
  "id": "t8-012",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Si un alcohol del fármaco (capaz de dar y aceptar enlace de hidrógeno, flip-flop) se transforma en un éter, ¿qué capacidad de interacción se pierde?",
  "opciones": { "a": "Se pierde toda posibilidad de interacción; el éter no puede dar ni aceptar nada", "b": "Se pierde la capacidad de ser dador de enlace de hidrógeno; el éter conserva solo la capacidad de ser aceptor, gracias a sus pares libres", "c": "No se pierde nada; el éter mantiene exactamente las mismas capacidades que el alcohol original", "d": "Se gana la capacidad de formar un enlace iónico" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el éter sigue teniendo capacidad de interacción como aceptor de enlace de hidrógeno, no pierde absolutamente toda capacidad.",
    "b": "Correcto: al perder el hidrógeno sobre el oxígeno (que se sustituye por un grupo alquilo), el éter ya no puede ser dador de enlace de hidrógeno, pero conserva los pares libres del oxígeno, que le siguen permitiendo actuar como aceptor.",
    "c": "Incorrecto: precisamente el cambio de alcohol a éter se usa para comprobar si se pierde algo (la capacidad de ser dador), y si la actividad baja, es señal de que ese carácter dador era importante.",
    "d": "Incorrecto: transformar un alcohol en éter no introduce ninguna carga real; ambos grupos son neutros y no dan lugar a un enlace iónico."
  },
  "repetida": true
},

{
  "id": "t8-013",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Si un ácido carboxílico del fármaco (preparado para un enlace iónico reforzado) se transforma en un éster, ¿qué ocurre con su capacidad de interacción?",
  "opciones": { "a": "El éster mantiene exactamente la misma capacidad de dar un enlace iónico reforzado que el ácido original", "b": "Se pierde la posibilidad de ionizarse (y por tanto el enlace iónico); el éster conserva solo la capacidad de ser aceptor de enlace de hidrógeno a través del carbonilo", "c": "El éster pierde toda posibilidad de interaccionar con la diana", "d": "El éster se vuelve más ácido que el ácido carboxílico de partida" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el éster, al no tener carga a pH fisiológico, no puede dar ningún enlace iónico, así que pierde por completo esa capacidad respecto al ácido original.",
    "b": "Correcto: al transformar el ácido carboxílico en éster se pierde el hidrógeno ionizable, y con él la posibilidad de enlace iónico (y por tanto de enlace iónico reforzado); lo único que conserva el éster es la capacidad de aceptar un enlace de hidrógeno a través de los pares libres de su carbonilo.",
    "c": "Incorrecto: el éster conserva cierta capacidad de interacción, concretamente como aceptor de enlace de hidrógeno a través del oxígeno del carbonilo.",
    "d": "Incorrecto: el éster no es un grupo ácido en absoluto (no tiene ningún hidrógeno ionizable en esa posición), así que no tiene sentido decir que es 'más ácido' que el ácido carboxílico."
  },
  "repetida": false
},

{
  "id": "t8-014",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Si una amina del fármaco (protonada a pH fisiológico, capaz de un enlace iónico reforzado) se transforma en una sal de amonio (amina cuaternaria), ¿qué ocurre con su capacidad de interacción?",
  "opciones": { "a": "Pierde por completo la posibilidad de dar cualquier tipo de enlace iónico", "b": "Gana la posibilidad de formar un enlace covalente con la diana", "c": "Mantiene la posibilidad de dar un enlace iónico (sigue teniendo carga positiva permanente), pero pierde la posibilidad de reforzarlo con un enlace de hidrógeno, porque ya no le queda ningún par libre ni ningún hidrógeno que dar", "d": "No cambia absolutamente nada respecto a la amina original" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la sal de amonio sí conserva su carga positiva de forma permanente y, por tanto, la capacidad de dar un enlace iónico simple; lo que pierde es solo el refuerzo del enlace de hidrógeno.",
    "b": "Incorrecto: no se gana ninguna capacidad de enlace covalente por transformar una amina en sal de amonio; ese tipo de enlace no forma parte de las interacciones estudiadas en este parcial.",
    "c": "Correcto: la sal de amonio (amina cuaternaria) mantiene su carga positiva de forma permanente, por lo que sigue dando un enlace iónico simple; pero al tener sus cuatro sustituyentes ocupados (sin par libre ni hidrógeno disponible), pierde la posibilidad del enlace de hidrógeno adicional que convertía la unión en un enlace iónico reforzado.",
    "d": "Incorrecto: sí cambia algo relevante, precisamente la pérdida de la capacidad de dar el enlace de hidrógeno adicional que reforzaba la unión iónica."
  },
  "repetida": true
},

{
  "id": "t8-015",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Si una amina del fármaco se transforma en una amida, ¿qué ocurre con su capacidad de interacción con la diana?",
  "opciones": { "a": "No cambia absolutamente nada respecto a la amina original", "b": "La amida se vuelve más básica que la amina original", "c": "La amida sigue estando protonada a pH fisiológico exactamente igual que la amina original", "d": "Se pierde la posibilidad de ionizarse a pH fisiológico (las amidas son neutras) y, por tanto, el enlace iónico reforzado; como mucho, la amida podrá dar o aceptar un enlace de hidrógeno simple" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: transformar una amina en amida supone un cambio drástico en su capacidad de interacción, al perder la posibilidad de ionizarse.",
    "b": "Incorrecto: la amida es mucho menos básica que la amina (de hecho, prácticamente neutra o incluso ligeramente ácida si tiene un NH), no más básica.",
    "c": "Incorrecto: es justo lo contrario; la amida, a diferencia de la amina, nunca está protonada a pH fisiológico porque su par libre no está disponible.",
    "d": "Correcto: la amida es un grupo neutro a pH fisiológico (su par libre resuena hacia el carbonilo), por lo que pierde por completo la posibilidad del enlace iónico reforzado que tenía la amina protonada; como mucho, podrá actuar como dador o aceptor de un enlace de hidrógeno sencillo."
  },
  "repetida": true
},

{
  "id": "t8-016",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Un ácido carboxílico del fármaco (con posibilidad de enlace iónico reforzado) se transforma, alternativamente, en éster, en cetona o en alcohol. ¿Qué tienen en común los tres cambios en cuanto a la interacción con la diana?",
  "opciones": { "a": "En los tres casos el fármaco se vuelve más ácido que el original", "b": "En los tres casos se mantiene intacta la posibilidad de enlace iónico reforzado", "c": "En los tres casos se pierde la posibilidad de ionizarse (el enlace iónico), quedando como mucho la posibilidad de un enlace de hidrógeno", "d": "En los tres casos se gana la posibilidad de un enlace covalente" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: ninguno de los tres (éster, cetona, alcohol) es más ácido que el ácido carboxílico de partida; de hecho, todos son bastante menos ácidos o directamente neutros a pH fisiológico.",
    "b": "Incorrecto: es justo lo contrario; ninguno de los tres grupos resultantes conserva la capacidad de ionizarse del ácido carboxílico original.",
    "c": "Correcto: tanto el éster como la cetona y el alcohol carecen de la posibilidad de ionizarse como lo hacía el ácido carboxílico original, así que en los tres casos se pierde el enlace iónico (y con él el reforzado); lo máximo que puede quedar es un enlace de hidrógeno simple.",
    "d": "Incorrecto: ninguno de estos cambios introduce la posibilidad de un enlace covalente con la diana, que es un tipo de interacción distinto reservado a las enzimas."
  },
  "repetida": false
},

{
  "id": "t8-017",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿En qué consiste la homología como modificación de una porción estructural del fármaco, y para qué se utiliza principalmente?",
  "opciones": { "a": "Consiste en cambiar un anillo aromático por otro heterociclo distinto", "b": "Consiste en romper un enlace covalente sin sustituirlo por ningún otro grupo", "c": "Consiste exclusivamente en cambiar la estereoquímica de un carbono quiral", "d": "Consiste en meter o sacar un grupo CH₂ de una cadena; se usa sobre todo para buscar un posible bolsillo hidrofóbico en la diana y ver cómo mejoran los contactos de tipo Van der Waals al alargar la cadena" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: cambiar un anillo aromático por un heterociclo corresponde más bien al bioisosterismo o a la modificación de anillos, no a la homología en sentido estricto.",
    "b": "Incorrecto: la homología implica siempre sustituir o añadir un grupo CH₂ concreto, no simplemente romper un enlace sin poner nada en su lugar.",
    "c": "Incorrecto: cambiar la configuración de un carbono quiral es un concepto de estereoquímica, distinto de la homología (que trata sobre el número de carbonos de una cadena).",
    "d": "Correcto: la homología consiste en meter o sacar carbonos (CH₂) de una cadena, comparando siempre antes y después; se usa principalmente para explorar si existe un bolsillo hidrofóbico en la diana y cuántos contactos adicionales de Van der Waals se pueden ganar al alargar la cadena."
  },
  "repetida": true
},

{
  "id": "t8-018",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Por qué la ramificación de una cadena se hace siempre después de la homología, y no antes?",
  "opciones": { "a": "Porque la ramificación y la homología son, en realidad, el mismo proceso con dos nombres distintos", "b": "Porque primero hay que alargar la cadena (homología) para averiguar aproximadamente la longitud óptima del bolsillo hidrofóbico, y solo después se ramifica para estudiar su anchura o forma", "c": "Porque la ramificación siempre tiene que hacerse antes de conocer la actividad del fármaco original", "d": "Porque no existe ninguna relación de orden entre homología y ramificación; se pueden hacer en cualquier secuencia" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: son dos técnicas distintas: la homología alarga o acorta la cadena principal, mientras que la ramificación añade sustituyentes laterales sobre esa cadena ya alargada.",
    "b": "Correcto: primero se va alargando la cadena carbono a carbono, midiendo la actividad en cada paso, hasta encontrar la longitud óptima del posible bolsillo hidrofóbico; una vez conocida esa longitud, se procede a ramificar para explorar la anchura o forma de ese bolsillo, no al revés.",
    "c": "Incorrecto: para poder comparar los efectos de la ramificación hace falta conocer primero la actividad de referencia obtenida tras la homología, no antes de ella.",
    "d": "Incorrecto: se insiste explícitamente en clase en que no existe algo así como 'ramificación por homología' como paso único; el orden correcto es primero homología y después ramificación."
  },
  "repetida": true
},

{
  "id": "t8-019",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Se inserta un doble enlace en la cadena de un fármaco. ¿Cuándo se puede llamar correctamente 'vinilogía' a ese cambio, y cuándo es simplemente una rigidificación de la molécula?",
  "opciones": { "a": "Cualquier doble enlace insertado en cualquier posición de la molécula se considera automáticamente vinilogía", "b": "La vinilogía y la simple rigidificación son exactamente el mismo concepto en todos los casos", "c": "Es vinilogía únicamente si ese doble enlace mantiene o amplía un camino de resonancia ya existente en la molécula; si solo introduce rigidez sin conservar ninguna resonancia, es simplemente una inserción de doble enlace (rigidificación), no vinilogía", "d": "La vinilogía nunca tiene ninguna relación con la resonancia de la molécula" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: se insiste repetidamente en varios ejercicios resueltos en que no todo doble enlace insertado es vinilogía; hay que comprobar específicamente si mantiene una resonancia.",
    "b": "Incorrecto: aunque ambos conceptos pueden coincidir en rigidificar la molécula, no son lo mismo; la vinilogía exige además mantener la resonancia, cosa que la simple inserción de un doble enlace no garantiza.",
    "c": "Correcto: la vinilogía se define específicamente como la introducción de un doble enlace que mantiene (o amplía) un camino de resonancia ya existente en la molécula, como en el ejemplo de la procaína; si el doble enlace solo aporta rigidez, sin conservar ninguna resonancia previa, se trata de una simple inserción de doble enlace (rigidificación), un concepto distinto aunque relacionado.",
    "d": "Incorrecto: la resonancia es precisamente el criterio definitorio de la vinilogía; sin conservar un camino de resonancia, no se puede llamar vinilogía al cambio."
  },
  "repetida": true
},

{
  "id": "t8-020",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Dentro de la modificación de anillos, ¿qué tipos de cambio se pueden aplicar sobre un fármaco, según lo explicado en clase?",
  "opciones": { "a": "Los anillos de un fármaco nunca se pueden modificar bajo ninguna circunstancia", "b": "Abrir un anillo (lo que siempre simplifica el fármaco), formar uno nuevo, cambiar su tamaño, reorganizarlo o sustituirlo por otro distinto", "c": "Solo se puede cambiar el color visual del anillo aromático", "d": "Únicamente se puede abrir un anillo; ninguna otra modificación de anillo está contemplada" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: los anillos sí se modifican con frecuencia en la optimización de fármacos, y de hecho es una de las técnicas más trabajadas en los ejercicios resueltos de este tema.",
    "b": "Correcto: dentro de la modificación de anillos se contemplan varias posibilidades: abrirlo (lo que siempre simplifica la molécula), formar un anillo nuevo, cambiar su tamaño, reorganizarlo o sustituirlo por otro distinto, jugando también con los efectos -R/-I o +R/+I dentro del propio anillo.",
    "c": "Incorrecto: el color no es una propiedad relevante en la modificación molecular de fármacos estudiada en esta asignatura.",
    "d": "Incorrecto: se explican explícitamente varias posibilidades más allá de la apertura, como formar, agrandar, reorganizar o sustituir un anillo."
  },
  "repetida": false
},

{
  "id": "t8-021",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "El bioisosterismo clásico se basa en la 'ley del hidruro' (o de la cabecera de grupo), que mantiene el mismo número de electrones de valencia al sustituir un átomo. Por ejemplo, el oxígeno de un éter se puede sustituir por azufre (mismo grupo), o por NH o CH₂. ¿Por qué hace falta añadir hidrógenos al sustituir por NH o por CH₂?",
  "opciones": { "a": "Porque el nitrógeno y el carbono tienen más electrones de valencia que el oxígeno", "b": "Porque, en realidad, no hace falta añadir ningún hidrógeno en ninguno de los dos casos", "c": "Porque el nitrógeno y el carbono tienen menos electrones de valencia que el oxígeno, y añadir uno o dos hidrógenos, respectivamente, compensa esa diferencia para mantener el mismo número total de electrones", "d": "Porque la ley del hidruro no tiene ninguna relación con el número de electrones de valencia" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo al revés; tanto el nitrógeno como el carbono tienen menos electrones de valencia que el oxígeno, de ahí la necesidad de compensar con hidrógenos.",
    "b": "Incorrecto: precisamente es necesario añadir esos hidrógenos para cumplir el criterio de isosteria clásica (mismo número de electrones de valencia).",
    "c": "Correcto: el oxígeno tiene seis electrones de valencia, el nitrógeno cinco y el carbono cuatro; para que un NH (nitrógeno + un hidrógeno) o un CH₂ (carbono + dos hidrógenos) 'sustituyan' al oxígeno manteniendo el mismo número total de electrones de valencia, hay que añadir los hidrógenos que compensen esa diferencia, según la ley del hidruro.",
    "d": "Incorrecto: la ley del hidruro se basa exactamente en mantener el mismo número de electrones de valencia al hacer la sustitución atómica."
  },
  "repetida": false
},

{
  "id": "t8-022",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Además del bioisosterismo clásico (ley del hidruro), existen los bioisósteros no clásicos. ¿En qué dos aspectos se fijan principalmente estos últimos?",
  "opciones": { "a": "En la capacidad enlazante (que se mantengan las mismas fuerzas intermoleculares con la diana) y en el pKa del grupo sustituido", "b": "Únicamente en el precio de los reactivos necesarios para la síntesis en el laboratorio", "c": "Únicamente en el color de la molécula resultante", "d": "Únicamente en el número de átomos de carbono, sin considerar ningún otro factor" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los bioisósteros no clásicos se estudian atendiendo a si mantienen la capacidad enlazante (el mismo tipo de fuerzas intermoleculares con la diana) y/o a si conservan un pKa similar al del grupo original, aunque los átomos implicados sean distintos.",
    "b": "Incorrecto: aunque el coste de síntesis es relevante en el objetivo económico-sintético general, no es el criterio que define el bioisosterismo no clásico.",
    "c": "Incorrecto: el color no es un criterio de bioisosterismo empleado en la asignatura.",
    "d": "Incorrecto: el número de carbonos es más relevante para conceptos como la homología o el cálculo de Lenke, no para definir el bioisosterismo no clásico."
  },
  "repetida": false
},

{
  "id": "t8-023",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Al comparar un cabeza de serie con dos análogos —uno donde el oxígeno de un éter se ha sustituido por CH₂ (resultando inactivo) y otro donde se ha sustituido por NH, que conserva la capacidad de dar enlace de hidrógeno (resultando activo)—, ¿qué conclusión se extrae sobre el grupo farmacóforo?",
  "opciones": { "a": "Que el CH₂ y el NH tienen exactamente la misma capacidad de dar enlaces de hidrógeno", "b": "Que el oxígeno del éter no tenía ninguna relación con la actividad del fármaco", "c": "Que ninguno de los dos cambios aporta información alguna sobre el grupo farmacóforo", "d": "Que el oxígeno del éter formaba parte del grupo farmacóforo, y su papel fundamental era el enlace de hidrógeno que sí conserva el sustituto NH pero no el CH₂" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente la diferencia de resultado entre ambos sustituyentes (inactivo con CH₂, activo con NH) demuestra que no tienen la misma capacidad de dar enlaces de hidrógeno.",
    "b": "Incorrecto: es justo lo contrario; la pérdida de actividad al sustituir por CH₂ (que no puede dar enlace de hidrógeno) demuestra que el oxígeno sí era relevante para la actividad.",
    "c": "Incorrecto: comparar ambos resultados es exactamente el método usado en clase para deducir con precisión cuál es el grupo farmacóforo y por qué tipo de interacción.",
    "d": "Correcto: como el compuesto solo mantiene actividad cuando el sustituto (NH) conserva la capacidad de dar enlace de hidrógeno, y la pierde cuando el sustituto (CH₂) no puede darlo, se concluye que el enlace de hidrógeno del oxígeno original era la interacción fundamental, es decir, que ese oxígeno pertenecía al grupo farmacóforo."
  },
  "repetida": false
},

{
  "id": "t8-024",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Al comparar un fármaco con un ácido carboxílico (pKa ≈ 5, con posibilidad de enlace iónico reforzado) frente a un análogo con una sulfonamida o una imida (pKa ≈ 6-7, también ionizables a pH fisiológico) en el mismo punto de unión, ¿qué tipo de bioisosterismo ilustra este cambio, y qué cabe esperar de la actividad?",
  "opciones": { "a": "Este cambio siempre inactiva por completo al fármaco", "b": "Isosteria de pKa: ambos grupos son ácidos con un pKa relativamente parecido, por lo que ambos están ionizados a pH fisiológico y pueden dar un punto de unión similar; la actividad debería variar poco", "c": "Este cambio no tiene ninguna relación con el concepto de bioisosterismo", "d": "Isosteria clásica según la ley del hidruro, sin ninguna relación con el pKa de los grupos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente lo que ilustra este ejemplo es que la actividad puede variar poco (no inactivarse por completo), porque el punto de unión iónico se mantiene gracias a la similitud de pKa.",
    "b": "Correcto: como ambos grupos (ácido carboxílico y sulfonamida/imida) son ácidos con pKa dentro de un rango relativamente próximo, los dos están ionizados a pH fisiológico y pueden dar un enlace iónico similar con la diana; este tipo de sustitución, que preserva el comportamiento ácido-base, es un ejemplo típico de isosteria de pKa, y suele afectar poco a la actividad.",
    "c": "Incorrecto: esta comparación es, precisamente, uno de los ejemplos típicos de bioisosterismo (concretamente de pKa) que suele repetirse en los exámenes.",
    "d": "Incorrecto: la isosteria clásica se basa en mantener el número de electrones de valencia (ley del hidruro), no en la similitud de pKa entre grupos distintos como el ácido carboxílico y la sulfonamida."
  },
  "repetida": true
},

{
  "id": "t8-025",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "En la evolución del GABA a la pregabalina, se emplea primero homología (se añaden carbonos a la cadena) y después ramificación. ¿Es correcto decir que la pregabalina se obtiene 'mediante apertura de anillo' a partir del GABA?",
  "opciones": { "a": "Sí, la apertura de anillo es el paso principal en esta transformación", "b": "No se puede determinar sin conocer el peso molecular exacto del GABA", "c": "No; el GABA no tiene ningún anillo que abrir, y el proceso real es homología seguida de ramificación, no apertura de un anillo", "d": "Sí, porque toda modificación molecular fija implica necesariamente abrir algún anillo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el GABA es una cadena abierta sin ningún anillo, así que no hay ningún anillo que abrir en esta transformación.",
    "b": "Incorrecto: no hace falta conocer el peso molecular para responder; basta con comparar las estructuras del GABA y la pregabalina, que no comparten ningún anillo en la molécula de partida.",
    "c": "Correcto: se explica expresamente, como corrección de un examen resuelto, que la afirmación 'apertura de anillo' es falsa en este caso; el proceso real que lleva del GABA a la pregabalina es primero homología (se añaden carbonos) y después ramificación.",
    "d": "Incorrecto: no toda modificación molecular fija implica abrir un anillo; de hecho, muchas técnicas (como la homología o la ramificación) no tienen ninguna relación con anillos."
  },
  "repetida": true
},

{
  "id": "t8-026",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "En una serie de análogos de la acetilcolina, se sustituye el oxígeno de un grupo éster por azufre. ¿Qué tipo de cambio es este, y qué capacidad de interacción se pierde?",
  "opciones": { "a": "Es un isóstero clásico (mismo número de electrones de valencia); se pierde la capacidad de aceptar un enlace de hidrógeno, ya que el azufre, a diferencia del oxígeno, no actúa como aceptor de este tipo de enlace en la clasificación usada en clase", "b": "No se pierde ninguna capacidad de interacción al cambiar oxígeno por azufre", "c": "Es un ejemplo de vinilogía, porque se mantiene la resonancia", "d": "Es un ejemplo de aproximación conjuntiva" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el azufre, al estar en la misma columna que el oxígeno (misma familia), es un isóstero clásico según la ley del hidruro; sin embargo, en la clasificación de interacciones usada en clase el azufre no da enlace de hidrógeno como aceptor (queda en dipolo-dipolo), a diferencia del oxígeno, por lo que se pierde esa capacidad.",
    "b": "Incorrecto: precisamente el objetivo de este cambio es comprobar si se pierde o no la capacidad de aceptar enlace de hidrógeno, y la respuesta es que sí se pierde.",
    "c": "Incorrecto: cambiar un átomo dentro de un grupo funcional no implica ninguna resonancia adicional; no hay ningún camino de conjugación que se mantenga o amplíe con este cambio.",
    "d": "Incorrecto: la aproximación conjuntiva implica unir dos fármacos completos, no cambiar un único átomo dentro de la misma molécula."
  },
  "repetida": false
},

{
  "id": "t8-027",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "¿Por qué una cadena flexible (con muchos enlaces sencillos que permiten girar, sin dobles enlaces ni ciclos) tiende a hacer que un fármaco sea menos selectivo, y por tanto más propenso a dar efectos secundarios?",
  "opciones": { "a": "La flexibilidad de una cadena no tiene ninguna relación con la selectividad del fármaco", "b": "Porque una cadena flexible nunca puede adoptar la conformación activa necesaria para unirse a ninguna diana", "c": "Porque una cadena flexible puede adoptar distintas conformaciones que le permiten encajar en varias dianas biológicas distintas, no solo en la deseada, lo que aumenta la probabilidad de interacciones no buscadas", "d": "Porque una cadena flexible siempre reacciona químicamente con la diana, formando un enlace covalente no deseado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: se explica expresamente en clase que la flexibilidad reduce la selectividad, al permitir adaptarse a dianas distintas de la deseada.",
    "b": "Incorrecto: es justo lo contrario; una cadena flexible tiene más facilidad, no menos, para alcanzar la conformación activa necesaria en cada diana con la que se encuentre, precisamente por eso pierde selectividad.",
    "c": "Correcto: al poder girar libremente por sus enlaces sencillos, una cadena flexible puede adaptar su forma para encajar en dianas biológicas distintas de la deseada, lo que reduce la selectividad de la diana hacia ese fármaco y aumenta la probabilidad de efectos secundarios por unión a otros sitios no buscados.",
    "d": "Incorrecto: la flexibilidad de una cadena no implica que se forme un enlace covalente; ese tipo de unión, cuando existe, es propio de las enzimas y depende de la reactividad química, no de la simple flexibilidad conformacional."
  },
  "repetida": false
},

{
  "id": "t8-028",
  "tema": "Tema 5 — Grupo farmacóforo y modificación molecular",
  "pregunta": "Desde el punto de vista económico-sintético, ¿qué tipo de elementos estructurales suelen encarecer más la síntesis de un fármaco en la industria farmacéutica?",
  "opciones": { "a": "El número de átomos de hidrógeno de la molécula, sin relación con ningún otro factor", "b": "Los anillos complejos, los centros quirales (que obligan a resolver mezclas racémicas) y los dobles enlaces adicionales", "c": "Únicamente el color del compuesto final", "d": "Ningún elemento estructural influye en el coste de síntesis de un fármaco" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el número de átomos de hidrógeno por sí solo no es el factor determinante del coste; lo son los elementos estructurales más complejos de sintetizar, como ciclos, centros quirales y dobles enlaces.",
    "b": "Correcto: se explica repetidamente que los ciclos complejos, los centros quirales (que obligan a resolver o controlar la síntesis de un solo enantiómero) y los dobles enlaces adicionales encarecen la síntesis de un fármaco, motivo por el cual la industria busca simplificar estas estructuras siempre que sea posible (por ejemplo, mediante la aproximación disyuntiva).",
    "c": "Incorrecto: el color del compuesto no tiene ninguna relación con el coste de su síntesis en la industria farmacéutica.",
    "d": "Incorrecto: se insiste explícitamente en que la industria farmacéutica 'mira la pela sí o sí', y ciertos elementos estructurales sí influyen claramente en el coste final de producción."
  },
  "repetida": false
},

{
  "id": "t9-001",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "Dentro del centro activo de una enzima, ¿qué dos tipos de aminoácidos hay que distinguir?",
  "opciones": { "a": "Solo existe un tipo de aminoácido relevante dentro del centro activo", "b": "Los aminoácidos ácidos y los aminoácidos neutros, únicamente", "c": "Los aminoácidos apolares y los aromáticos, exclusivamente", "d": "Los aminoácidos de unión (las mismas fuerzas intermoleculares estudiadas en el tema de farmacodinamia) y los aminoácidos catalíticos (los que producen la reacción)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: precisamente se distinguen dos tipos con funciones distintas dentro del centro activo, no un único tipo.",
    "b": "Incorrecto: la clasificación relevante no es ácido/neutro, sino unión frente a catalítico; dentro de cada grupo puede haber aminoácidos de distinto carácter.",
    "c": "Incorrecto: los aminoácidos apolares y aromáticos son solo un subconjunto de los aminoácidos de unión (dan Van der Waals o stacking); no representan toda la clasificación del centro activo.",
    "d": "Correcto: en el centro activo de una enzima hay que distinguir los aminoácidos de unión (los que dan las fuerzas intermoleculares ya vistas en el tema de farmacodinamia: iónico reforzado, enlace de hidrógeno, etc.) y los aminoácidos catalíticos (los que llevan a cabo la reacción química propiamente dicha)."
  },
  "repetida": false
},

{
  "id": "t9-002",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Qué tres aminoácidos forman la llamada 'tríada catalítica' en el mecanismo estrella de este tema?",
  "opciones": { "a": "Histidina, serina y aspártico", "b": "Aspártico, glutámico y tirosina", "c": "Alanina, valina y leucina", "d": "Lisina, arginina e histidina" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la tríada catalítica está formada por la histidina y la serina, que participan directamente en la reacción, junto con el aspártico, que ayuda apoyando y estabilizando el conjunto sin participar directamente en el ataque.",
    "b": "Incorrecto: el glutámico y la tirosina no forman parte de la tríada catalítica explicada; el aspártico sí, pero junto a histidina y serina, no junto a estos otros dos.",
    "c": "Incorrecto: esos son aminoácidos apolares, de los que solo dan fuerzas de Van der Waals como aminoácidos de unión, no aminoácidos catalíticos.",
    "d": "Incorrecto: la arginina no forma parte de la tríada catalítica en este mecanismo; la lisina sí participa, pero en un papel distinto (catálisis electrostática), no como parte de la tríada."
  },
  "repetida": true
},

{
  "id": "t9-003",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "En el mecanismo ping-pong, ¿qué papel desempeña la lisina cuando aparece una carga negativa en algún intermedio de la reacción?",
  "opciones": { "a": "Ataca directamente al sustrato formando un enlace covalente, sustituyendo el papel de la serina", "b": "Elimina por completo la molécula de agua del medio de reacción", "c": "Realiza una catálisis electrostática, estabilizando esa carga negativa, que a pH fisiológico no podría existir libremente", "d": "La lisina no participa nunca en este mecanismo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el ataque covalente al sustrato lo realiza la serina, no la lisina; la lisina cumple un papel distinto, de estabilización de cargas.",
    "b": "Incorrecto: la lisina no interviene eliminando el agua del medio; el agua sigue estando disponible y participa más adelante en el propio mecanismo.",
    "c": "Correcto: cuando en algún intermedio de la reacción aparece una carga negativa (algo 'mortal' a pH fisiológico si quedara libre), la lisina, con su grupo amino protonado cercano, estabiliza esa carga mediante lo que se llama catálisis electrostática.",
    "d": "Incorrecto: la lisina sí tiene un papel específico y explícitamente señalado en este mecanismo, la catálisis electrostática."
  },
  "repetida": true
},

{
  "id": "t9-004",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Qué es un enlace de coordinación, una de las interacciones que aparecen en dianas de tipo enzima (por ejemplo, las metaloproteasas)?",
  "opciones": { "a": "Es un sinónimo exacto de enlace de hidrógeno", "b": "Solo puede darse entre dos átomos de carbono", "c": "Es la interacción más débil de toda la escala de fuerzas intermoleculares", "d": "Es, esencialmente, un enlace de tipo iónico pero en el que una de las partes es un metal (como el zinc) en lugar de un grupo orgánico con carga" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el enlace de coordinación implica un metal, mientras que el enlace de hidrógeno se da entre un grupo dador (sobre O o N) y uno aceptor, sin necesidad de ningún metal.",
    "b": "Incorrecto: el enlace de coordinación implica necesariamente un metal (como el zinc), no dos átomos de carbono.",
    "c": "Incorrecto: el enlace de coordinación no es la interacción más débil; se presenta junto al enlace covalente como una de las interacciones más fuertes, propias ya del tercer parcial.",
    "d": "Correcto: el enlace de coordinación se produce entre un metal presente en la diana (como el zinc de las metaloproteasas) y la parte del fármaco con carga negativa; se explica como 'un enlace iónico, pero con un metal', distinto del enlace iónico clásico entre dos grupos orgánicos."
  },
  "repetida": false
},

{
  "id": "t9-005",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Por qué el enlace covalente se considera la interacción más fuerte a pH fisiológico, y por qué solo se estudia en el contexto de las enzimas?",
  "opciones": { "a": "Porque el enlace covalente solo puede darse entre dos moléculas de agua", "b": "Porque los receptores siempre forman enlaces covalentes con su ligando, igual que las enzimas", "c": "Porque para que se forme un enlace covalente entre fármaco y diana tiene que producirse una reacción química real entre ambos, algo que solo ocurre en las enzimas (no en los receptores, donde no hay reacción)", "d": "Porque el enlace covalente es, en realidad, más débil que un simple enlace de Van der Waals" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el enlace covalente en este contexto se forma entre el fármaco (o sustrato) y la enzima, no entre dos moléculas de agua.",
    "b": "Incorrecto: es precisamente lo contrario; los receptores, por definición, no forman enlaces covalentes con su ligando, porque no hay reacción química, solo unión.",
    "c": "Correcto: el enlace covalente exige que fármaco y diana reaccionen químicamente entre sí, algo que por definición solo ocurre en las enzimas; en los receptores no hay reacción, así que nunca se llega a formar un enlace covalente entre el ligando y el receptor.",
    "d": "Incorrecto: es justo lo contrario, el enlace covalente es la interacción más fuerte de todas las estudiadas a pH fisiológico, muy por encima de Van der Waals."
  },
  "repetida": false
},

{
  "id": "t9-006",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Cuál es la diferencia fundamental entre una enzima y un receptor como dianas biológicas?",
  "opciones": { "a": "En la enzima se produce una reacción química entre el sustrato/fármaco y la diana; en el receptor no hay ninguna reacción, solo unión", "b": "Las enzimas nunca tienen aminoácidos de unión, solo aminoácidos catalíticos", "c": "Los receptores siempre son metaloproteínas y las enzimas nunca lo son", "d": "No existe ninguna diferencia real entre una enzima y un receptor" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: se explica explícitamente que hay que diferenciar receptores (donde no hay reacción, solo un fenómeno de unión, con posible agonismo o antagonismo estudiado más adelante) de enzimas (que catalizan una reacción real entre el sustrato endógeno o el fármaco y la propia enzima).",
    "b": "Incorrecto: las enzimas también tienen aminoácidos de unión (para el reconocimiento inicial del sustrato), además de los aminoácidos catalíticos que llevan a cabo la reacción.",
    "c": "Incorrecto: no todos los receptores son metaloproteínas ni todas las enzimas carecen de metales; el criterio distintivo es si hay o no reacción química, no la presencia de un metal.",
    "d": "Incorrecto: la distinción entre enzima y receptor es un punto central del tercer parcial, precisamente por la diferencia de si hay o no una reacción química implicada."
  },
  "repetida": false
},

{
  "id": "t9-007",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "El mecanismo 'estrella' de este tema, llamado ping-pong, describe una hidrólisis (por ejemplo, de una amida). ¿Qué papel juega la molécula de agua en este mecanismo?",
  "opciones": { "a": "El agua actúa como catalizador ácido desde el primer paso del mecanismo, sustituyendo a la histidina", "b": "El agua no participa en ningún momento del mecanismo ping-pong", "c": "Es el único nucleófilo disponible a pH fisiológico y es la que, en la segunda parte del mecanismo, ataca a la enzima unida al sustrato para liberar finalmente el segundo producto y regenerar la enzima", "d": "El agua sustituye por completo a la histidina en todos los pasos del mecanismo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: en el primer paso quien realiza la catálisis básica es la histidina, no el agua; el agua actúa más adelante, como nucleófilo que ataca al intermedio.",
    "b": "Incorrecto: el agua es un elemento imprescindible del mecanismo, aunque solo entra en juego en la segunda parte (el 'pong'), no en la primera.",
    "c": "Correcto: a pH fisiológico, la molécula de agua es el único nucleófilo disponible; en la segunda mitad del mecanismo ping-pong ataca al intermedio unido covalentemente a la serina, liberando finalmente el segundo producto y regenerando la enzima tal cual entró.",
    "d": "Incorrecto: la histidina y el agua tienen papeles distintos y complementarios; el agua no sustituye a la histidina en ningún momento del mecanismo."
  },
  "repetida": false
},

{
  "id": "t9-008",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "En el primer paso del mecanismo ping-pong, la histidina de la enzima le quita un hidrógeno a la serina. ¿Cómo se llama este tipo de catálisis, y qué hace justo después el oxígeno de la serina que ha quedado sin su hidrógeno?",
  "opciones": { "a": "Es una catálisis electrostática realizada directamente por la histidina", "b": "Es un enlace de coordinación entre la histidina y la serina", "c": "Es una catálisis básica; el oxígeno de la serina, ya sin su hidrógeno, ataca al carbonilo del sustrato en lo que se llama primera adición", "d": "Es una catálisis ácida; el oxígeno de la serina no vuelve a participar en el resto del mecanismo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la catálisis electrostática es el papel específico de la lisina al estabilizar cargas negativas, no el de la histidina al quitar un protón.",
    "b": "Incorrecto: no hay ningún metal implicado en esta interacción entre histidina y serina; se trata de una transferencia de protón (catálisis básica), no de un enlace de coordinación.",
    "c": "Correcto: al quitarle un hidrógeno a la serina, la histidina está actuando como una base (catálisis básica); inmediatamente después, el oxígeno de la serina, ya sin ese hidrógeno, ataca al carbonilo del sustrato, en lo que se denomina primera adición.",
    "d": "Incorrecto: quitar un hidrógeno es propio de una base, no de un ácido; además, el oxígeno de la serina sí vuelve a participar de forma central en el resto del mecanismo, atacando al sustrato."
  },
  "repetida": true
},

{
  "id": "t9-009",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "Cuando la serina de la enzima ataca con su oxígeno al carbonilo del sustrato y queda unida covalentemente a él, ¿cómo se llama este tipo de catálisis?",
  "opciones": { "a": "Enlace de coordinación", "b": "Catálisis básica", "c": "Catálisis covalente", "d": "Catálisis electrostática" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: no interviene ningún metal en este paso; es un ataque nucleofílico directo de la serina, que forma un enlace covalente propiamente dicho con el sustrato.",
    "b": "Incorrecto: la catálisis básica es el paso previo, en el que la histidina le quita el hidrógeno a la serina; el ataque de la serina al carbonilo es un paso distinto, la catálisis covalente.",
    "c": "Correcto: cuando la enzima (a través de la serina) se une covalentemente al sustrato, se denomina catálisis covalente; es el paso en el que la enzima queda temporalmente unida de forma covalente al sustrato antes de completar la hidrólisis.",
    "d": "Incorrecto: la catálisis electrostática corresponde a la estabilización de cargas negativas por la lisina, no al ataque nucleofílico de la serina."
  },
  "repetida": false
},

{
  "id": "t9-010",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "En el mecanismo ping-pong, ¿por qué siempre que hay una catálisis básica (la histidina quita un hidrógeno) viene después una catálisis ácida (la histidina lo vuelve a ceder)?",
  "opciones": { "a": "Porque a pH fisiológico no se pueden tener cargas negativas libres; antes de que un grupo saliente abandone la molécula con carga negativa, tiene que captar primero un hidrógeno de la histidina protonada", "b": "Porque la histidina solo puede actuar como base en este mecanismo, nunca como ácido", "c": "Porque el agua nunca participa en la segunda mitad del mecanismo", "d": "Porque el catalizador tiene que quedar cargado al final de la reacción, distinto de como empezó" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: como no se pueden tener cargas negativas libres a pH fisiológico, cualquier grupo que vaya a salir de la molécula con una carga negativa debe neutralizarla antes, captando un protón de la histidina (que quedó protonada tras la catálisis básica previa); por eso toda catálisis básica va seguida de una catálisis ácida.",
    "b": "Incorrecto: precisamente el mecanismo demuestra que la histidina puede actuar tanto como base (quitando un protón) como, poco después, como ácido (cediéndolo de nuevo).",
    "c": "Incorrecto: el agua sí participa en la segunda mitad del mecanismo (el 'pong'), atacando al intermedio unido a la serina.",
    "d": "Incorrecto: al final del ciclo completo, la histidina y el resto de la enzima quedan regenerados exactamente igual que al principio, como corresponde a cualquier catalizador."
  },
  "repetida": true
},

{
  "id": "t9-011",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Por qué el mecanismo de hidrólisis de amidas/ésteres catalizado por la tríada histidina-serina-aspártico se llama, vulgarmente, mecanismo 'ping-pong'?",
  "opciones": { "a": "Porque literalmente se necesita una pelota de ping-pong en el laboratorio para representarlo", "b": "Porque solo tiene un único paso de adición, sin ninguna eliminación", "c": "Porque el mecanismo consta de dos ciclos consecutivos de adición-eliminación (uno con el sustrato inicial y otro con la molécula de agua), como si la reacción rebotara de un lado a otro", "d": "Porque es un mecanismo exclusivo de las reacciones de reducción-oxidación de alcoholes" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el nombre es simplemente una analogía descriptiva del ir y venir de la reacción en dos ciclos, no implica ningún material de laboratorio real.",
    "b": "Incorrecto: el mecanismo tiene precisamente dos secuencias completas de adición-eliminación, no una única adición sin eliminación.",
    "c": "Correcto: la primera adición-eliminación (con el sustrato inicial, liberando el primer producto) se llama coloquialmente 'ping', y la segunda adición-eliminación (con la molécula de agua, liberando el segundo producto y regenerando la enzima) se llama 'pong'; de ahí el nombre del mecanismo.",
    "d": "Incorrecto: las reducciones-oxidaciones de alcoholes son un mecanismo distinto (con la alcohol/aldehído deshidrogenasa), no el mecanismo ping-pong de hidrólisis."
  },
  "repetida": true
},

{
  "id": "t9-012",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "Según la nomenclatura de enzimas explicada en clase, ¿qué relación hay entre una amidasa, una esterasa y una peptidasa?",
  "opciones": { "a": "Ninguna de estas tres enzimas utiliza una molécula de agua en su mecanismo", "b": "Los tres términos son sinónimos exactos entre sí", "c": "La amidasa rompe amidas y la esterasa rompe ésteres; la peptidasa es un tipo particular de amidasa (rompe específicamente enlaces peptídicos): todas las peptidasas son amidasas, pero no todas las amidasas son peptidasas", "d": "La esterasa rompe amidas y la amidasa rompe ésteres, al contrario de lo que sugieren sus propios nombres" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: las tres son hidrolasas, es decir, todas ellas utilizan una molécula de agua para romper el enlace correspondiente.",
    "b": "Incorrecto: cada término se refiere a un tipo de enlace concreto que rompe la enzima; no son sinónimos intercambiables.",
    "c": "Correcto: la amidasa hidroliza amidas y la esterasa hidroliza ésteres; como un enlace peptídico es, químicamente, un tipo particular de amida, la peptidasa es un caso concreto de amidasa (por eso 'todas las peptidasas son amidasas, pero no todas las amidasas son peptidasas').",
    "d": "Incorrecto: es justo al revés, cada nombre corresponde exactamente al tipo de enlace que hidroliza (amidasa-amida, esterasa-éster)."
  },
  "repetida": false
},

{
  "id": "t9-013",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Por qué la mayoría de los fármacos que se administran como profármacos de tipo éster se bioactivan con tanta facilidad en el organismo?",
  "opciones": { "a": "Porque a pH fisiológico no existe ninguna molécula de agua disponible para la hidrólisis", "b": "Porque las esterasas solo actúan dentro del sistema nervioso central", "c": "Porque la esterasa es, con diferencia, la enzima hidrolítica más abundante a pH fisiológico, por lo que un fármaco con un éster se hidroliza con facilidad", "d": "Porque los ésteres nunca pueden ser hidrolizados por ninguna enzima del organismo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: el agua es abundante en el medio fisiológico y es precisamente el nucleófilo necesario para que la hidrólisis tenga lugar.",
    "b": "Incorrecto: las esterasas están presentes de forma general en el organismo (hígado, tracto gastrointestinal, plasma sanguíneo...), no restringidas al sistema nervioso central.",
    "c": "Correcto: se explica expresamente que la esterasa es la enzima mayoritaria a pH fisiológico, 'por goleada'; por eso un fármaco administrado como éster (un profármaco muy habitual, del tipo '...oato de...') se hidroliza con facilidad y se bioactiva rápidamente.",
    "d": "Incorrecto: precisamente los ésteres son uno de los sustratos más fácilmente hidrolizables a pH fisiológico, gracias a la gran abundancia de esterasas."
  },
  "repetida": false
},

{
  "id": "t9-014",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Qué caracteriza a una enzima como catalizador biológico?",
  "opciones": { "a": "Sube la energía de activación de la reacción para hacerla más lenta y controlada", "b": "Se consume por completo durante la reacción y no puede volver a utilizarse", "c": "Baja la energía de activación de la reacción, aumenta su velocidad, y al final del ciclo catalítico se regenera exactamente igual que como entró", "d": "Cambia permanentemente de estructura tras cada uso, sin volver nunca a su forma original" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario; un catalizador reduce la energía de activación para acelerar la reacción, no la sube.",
    "b": "Incorrecto: las enzimas no se consumen en la reacción; se regeneran al final de cada ciclo catalítico y pueden volver a actuar sobre nuevas moléculas de sustrato.",
    "c": "Correcto: un catalizador, y las enzimas son los catalizadores biológicos por excelencia, hace que baje la energía de activación y aumente la velocidad de la reacción; al final de todo el ciclo (como en el mecanismo ping-pong), la enzima queda exactamente igual que al principio, lista para un nuevo ciclo catalítico.",
    "d": "Incorrecto: se insiste explícitamente en que un catalizador tiene que salir del ciclo tal cual entró, sin cambios permanentes en su estructura."
  },
  "repetida": false
},

{
  "id": "t9-015",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "En este tema se distinguen dos grandes tipos de mecanismos de reacción enzimática. ¿Cuáles son?",
  "opciones": { "a": "En este tema solo existe un único tipo de mecanismo enzimático", "b": "Mecanismos de sustitución nucleófila aromática y mecanismos de adición electrófila", "c": "Mecanismos exclusivamente relacionados con la formación de enlaces covalentes irreversibles con el fármaco", "d": "Mecanismos de reducción-oxidación del carbonilo, y mecanismos de hidrólisis (el mecanismo 'estrella' del tema)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: se distinguen explícitamente dos grandes tipos de mecanismos en este tema, no uno solo.",
    "b": "Incorrecto: esos son mecanismos propios de la química orgánica general (sustitución y adición electrófila en aromáticos), no la clasificación usada en este tema de enzimas.",
    "c": "Incorrecto: aunque el mecanismo de hidrólisis pasa por un intermedio unido covalentemente a la enzima, el resultado final no es un enlace covalente irreversible, sino la liberación de los productos y la regeneración de la enzima.",
    "d": "Correcto: se explican dos grandes tipos de mecanismos: los de reducción-oxidación del carbonilo (por ejemplo, relacionados con alcoholes y aldehídos) y, como mecanismo central del tema, las hidrólisis, que engloban la mayoría de las reacciones que realmente importan a pH fisiológico."
  },
  "repetida": false
},

{
  "id": "t9-016",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Por qué se dice que la hidrólisis (mediante el mecanismo ping-pong) es el mecanismo 'estrella' de este tema?",
  "opciones": { "a": "Porque es el único mecanismo que puede llegar a ocurrir dentro del organismo", "b": "Porque es la reacción que se da realmente en torno al 70-80% de los casos a pH fisiológico", "c": "Porque es, con diferencia, el mecanismo menos frecuente de todos los estudiados en este tema", "d": "Porque nunca aparece en los exámenes de esta asignatura" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: también existen mecanismos de reducción-oxidación del carbonilo, aunque son minoritarios en comparación con la hidrólisis.",
    "b": "Correcto: se destaca expresamente que esta reacción de hidrólisis es la que realmente ocurre en torno al 70-80% de los casos a pH fisiológico, lo que justifica que sea el mecanismo central de todo el tema y del siguiente.",
    "c": "Incorrecto: es justo lo contrario, se trata del mecanismo mayoritario y más relevante de los estudiados en este tema.",
    "d": "Incorrecto: se señala explícitamente que este mecanismo 'va a estar en el examen sí o sí', precisamente por su importancia y frecuencia."
  },
  "repetida": true
},

{
  "id": "t9-017",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "Dentro de las reacciones de hidrólisis, ¿según qué criterio se distinguen la hidrólisis de amida, la de éster y la de fosfoéster?",
  "opciones": { "a": "Según el color del producto final que se obtiene en cada caso", "b": "Según el tipo de enlace concreto que se rompe junto al carbonilo (o, en el caso del fosfoéster, junto al fósforo), aunque el mecanismo general de ataque por agua es equivalente en los tres casos", "c": "No existe ninguna diferencia real entre estos tres tipos de hidrólisis", "d": "Según si la reacción ocurre en presencia o en ausencia total de agua" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el color del producto no es un criterio químico relevante para clasificar el tipo de hidrólisis.",
    "b": "Correcto: las tres hidrólisis comparten la misma lógica de mecanismo (ataque de agua sobre un carbono electrofílico y ruptura del enlace adyacente), pero se nombran según el tipo de enlace concreto que se rompe: amida, éster o fosfoéster (este último, típico de los ácidos nucleicos).",
    "c": "Incorrecto: sí existe una diferencia real, relacionada con el tipo de enlace que se rompe y el tipo de producto que se obtiene en cada caso, aunque el mecanismo general sea equivalente.",
    "d": "Incorrecto: las tres son reacciones de hidrólisis, por lo que las tres requieren necesariamente una molécula de agua como nucleófilo."
  },
  "repetida": false
},

{
  "id": "t9-018",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "¿Por qué se destaca la hidrólisis de fosfoésteres como especialmente importante en este tema?",
  "opciones": { "a": "Porque los fosfoésteres nunca pueden hidrolizarse dentro del organismo", "b": "Porque los fosfoésteres solo aparecen en fármacos completamente sintéticos, nunca en moléculas endógenas", "c": "Porque la hidrólisis de fosfoésteres es la única que no requiere ninguna molécula de agua", "d": "Porque es la reacción que rompe los extremos 3' y 5' del ADN, donde existe una unión de tipo éster fosfórico" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario, los fosfoésteres sí se hidrolizan en el organismo, y ese proceso es clave, por ejemplo, en la ruptura de ácidos nucleicos.",
    "b": "Incorrecto: el ADN, una molécula claramente endógena, contiene enlaces de tipo fosfoéster en sus extremos 3' y 5'.",
    "c": "Incorrecto: al ser un tipo de hidrólisis, la reacción sí requiere necesariamente una molécula de agua, igual que la hidrólisis de amidas o ésteres.",
    "d": "Correcto: se señala expresamente que los fosfoésteres son muy importantes porque, al romperse moléculas de ADN, la unión en los extremos 3' y 5' es precisamente un éster fosfórico que también puede hidrolizarse por este tipo de mecanismo."
  },
  "repetida": false
},

{
  "id": "t9-019",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "En cualquier hidrólisis (de amida, éster o fosfoéster) catalizada por una molécula de agua, ¿qué ocurre, de forma general, al romperse el enlace situado junto al carbonilo?",
  "opciones": { "a": "Nunca se forma ningún grupo OH nuevo en ninguno de los dos productos de la hidrólisis", "b": "El oxígeno de la molécula de agua se coloca en el lugar del enlace roto, junto al carbonilo, mientras que el hidrógeno de esa misma agua se lo lleva la otra parte de la molécula que sale (el grupo saliente)", "c": "El grupo carbonilo desaparece siempre de la molécula tras la hidrólisis", "d": "El agua desaparece por completo de la reacción, sin dejar ningún átomo en los productos finales" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: sí se forma un nuevo grupo OH en el fragmento que conserva el carbonilo, precisamente porque el oxígeno del agua se incorpora ahí.",
    "b": "Correcto: en cualquiera de las tres hidrólisis, al romperse el enlace adyacente al carbonilo, el oxígeno del agua queda unido a esa posición (regenerando, por ejemplo, un ácido carboxílico), mientras que el hidrógeno de esa misma agua se transfiere al grupo que sale (por ejemplo, formando una amina o un alcohol).",
    "c": "Incorrecto: el carbonilo no desaparece, sigue presente en uno de los dos productos (por ejemplo, como parte de un ácido carboxílico regenerado).",
    "d": "Incorrecto: el agua no desaparece sin dejar rastro; sus átomos (oxígeno e hidrógeno) terminan repartidos entre los dos productos de la hidrólisis."
  },
  "repetida": false
},

{
  "id": "t9-020",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "Durante el mecanismo ping-pong, la histidina de la tríada catalítica se protona y desprotona varias veces (catálisis básica seguida de catálisis ácida). Al final de todo el ciclo, ¿en qué estado queda la histidina?",
  "opciones": { "a": "Se destruye químicamente al final del mecanismo y no puede volver a utilizarse", "b": "Exactamente igual que como entró (neutra, con su par libre disponible), porque un catalizador tiene que regenerarse tal cual empezó", "c": "Queda transformada en un aminoácido distinto, como la serina", "d": "Queda protonada de forma permanente al final del ciclo completo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la enzima, incluida su histidina catalítica, se regenera y puede seguir catalizando nuevos ciclos de reacción sobre otras moléculas de sustrato.",
    "b": "Correcto: aunque durante el mecanismo la histidina se protona y desprotona varias veces (haciendo de base y luego de ácido, tanto con la serina como con el agua), al finalizar el ciclo completo queda exactamente igual que al principio, como corresponde a cualquier catalizador.",
    "c": "Incorrecto: la histidina conserva su identidad como aminoácido a lo largo de todo el mecanismo; solo cambia transitoriamente su estado de protonación, no su naturaleza química.",
    "d": "Incorrecto: si quedara protonada de forma permanente, la enzima no podría regenerarse ni volver a catalizar un nuevo ciclo con otra molécula de sustrato."
  },
  "repetida": false
},

{
  "id": "t9-021",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "Como tarea, se propone repetir el mecanismo ping-pong para la hidrólisis de un éster catalizada por una esterasa, en lugar de la hidrólisis de una amida vista en clase con una amidasa. ¿Qué cabe esperar sobre este nuevo mecanismo?",
  "opciones": { "a": "Que la hidrólisis de un éster sigue un mecanismo completamente distinto, sin ninguna relación con el de la amida", "b": "Que el razonamiento y los pasos (catálisis básica, primera adición/catálisis covalente, primera eliminación, segunda adición con agua, segunda eliminación) son esencialmente los mismos que en la hidrólisis de amida, cambiando únicamente el tipo de enlace atacado", "c": "Que en la hidrólisis de ésteres nunca participa la serina de la enzima", "d": "Que la hidrólisis de ésteres no requiere ninguna molécula de agua, a diferencia de la hidrólisis de amidas" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: se indica expresamente que 'pasaría exactamente igual si fuera un éster'; el mecanismo general es equivalente al de la hidrólisis de amida.",
    "b": "Correcto: se propone explícitamente repetir 'exactamente igual' el razonamiento del mecanismo ping-pong pero sobre un éster en vez de una amida, precisamente porque la lógica de la tríada catalítica y de las sucesivas catálisis básica/covalente/electrostática/ácida es la misma, cambiando solo el sustrato concreto.",
    "c": "Incorrecto: la serina sigue siendo la pieza clave que ataca covalentemente al sustrato, sea este una amida o un éster.",
    "d": "Incorrecto: al tratarse igualmente de una hidrólisis, la reacción sigue necesitando una molécula de agua como nucleófilo en la segunda parte del mecanismo."
  },
  "repetida": false
},

{
  "id": "t9-022",
  "tema": "Tema 6 — Enzimas y reacciones enzimáticas",
  "pregunta": "En la tríada catalítica histidina-serina-aspártico, ¿cuál es el papel específico atribuido al aspártico?",
  "opciones": { "a": "Es el aminoácido que aporta la carga positiva permanente necesaria para la catálisis electrostática", "b": "Es el aminoácido que se une covalentemente al sustrato durante toda la reacción", "c": "Es el aminoácido que ataca directamente al carbonilo del sustrato, sustituyendo el papel de la serina", "d": "Apoya y estabiliza al conjunto de la tríada, sin participar directamente en el ataque nucleofílico al sustrato" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: la carga positiva que estabiliza los intermedios cargados negativamente (catálisis electrostática) la aporta la lisina, un aminoácido distinto del aspártico.",
    "b": "Incorrecto: es la serina, con su grupo OH, la que queda unida covalentemente de forma transitoria al sustrato durante el mecanismo, no el aspártico.",
    "c": "Incorrecto: el ataque nucleofílico directo al carbonilo del sustrato lo realiza la serina, no el aspártico.",
    "d": "Correcto: se explica que el aspártico 'da un poco igual' en cuanto a participación directa, porque su función es apoyar y estabilizar el conjunto de la tríada catalítica (por ejemplo, ayudando a orientar o estabilizar a la histidina), sin ser quien ataca directamente al sustrato."
  },
  "repetida": false
},

{
  "id": "t10-001",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Cuándo se manda un fármaco al proceso de metabolismo, según lo explicado al inicio del tema 7?",
  "opciones": { "a": "Siempre, todos los fármacos se metabolizan obligatoriamente antes de poder eliminarse", "b": "Nunca; el metabolismo y la eliminación son procesos completamente independientes entre sí", "c": "Cuando no se puede lograr su eliminación directa por vía renal (orina), se manda a metabolizarse para generar metabolitos más fáciles de eliminar", "d": "Únicamente cuando el fármaco tiene al menos un carbono quiral" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: hay fármacos que sí se eliminan directamente por orina sin pasar por metabolismo, precisamente cuando cumplen el criterio de porcentaje de especie ionizada visto en el primer parcial.",
    "b": "Incorrecto: metabolismo y eliminación están directamente relacionados; una de las finalidades explícitas del metabolismo es precisamente mejorar la eliminación del fármaco.",
    "c": "Correcto: se retoma explícitamente la idea del primer parcial (si la eliminación directa del fármaco por orina no es posible) para explicar que, en ese caso, el fármaco se manda a metabolizarse, generando metabolitos que buscan sobre todo facilitar su eliminación final.",
    "d": "Incorrecto: la necesidad de metabolizarse no depende de la presencia de un carbono quiral, sino de si el fármaco se puede eliminar directamente o no."
  },
  "repetida": false
},

{
  "id": "t10-002",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Cuáles son las posibles finalidades del metabolismo de un fármaco, según lo explicado en clase?",
  "opciones": { "a": "Conducir a un fármaco activo (si se ingirió como profármaco), inactivar el fármaco (si ya no es útil o resulta tóxico), o simplemente mejorar su eliminación", "b": "Únicamente cambiar el color de la disolución donde se encuentra el fármaco", "c": "El metabolismo no tiene ninguna finalidad concreta, es un proceso completamente aleatorio", "d": "Únicamente aumentar el peso molecular del fármaco, sin ningún otro efecto" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: se explican tres finalidades posibles del metabolismo: bioactivar un profármaco hasta el fármaco realmente activo, inactivar un fármaco que ya no interesa mantener activo, o simplemente facilitar su eliminación transformándolo en metabolitos más hidrófilos.",
    "b": "Incorrecto: el color no es un criterio relevante en las finalidades del metabolismo estudiadas en esta asignatura.",
    "c": "Incorrecto: el metabolismo sigue una lógica química y biológica bien definida, dirigida a alguna de las tres finalidades explicadas, no es aleatorio.",
    "d": "Incorrecto: aunque a veces el metabolismo añade grupos (como un OH), su finalidad no es simplemente 'aumentar el peso molecular' sin más; busca activar, inactivar o eliminar."
  },
  "repetida": false
},

{
  "id": "t10-003",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿En qué se diferencian, de forma general, las reacciones de fase I y las de fase II del metabolismo?",
  "opciones": { "a": "Las de fase I pueden activar o inactivar el fármaco y ocurren mayoritariamente en el hígado (aunque las hidrólisis pueden darse también en el tracto gastrointestinal o el plasma); las de fase II solo ocurren en el hígado, uniendo una pequeña molécula endógena al fármaco o a un metabolito de fase I, y casi siempre inactivan", "b": "Las reacciones de fase II ocurren siempre antes que las de fase I, nunca después", "c": "Las reacciones de fase I solo pueden inactivar un fármaco, nunca activarlo", "d": "Las reacciones de fase I y las de fase II son exactamente el mismo tipo de reacción, solo cambia el nombre que reciben" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: las reacciones de fase I (hidrólisis, oxidación, reducción) pueden tanto activar como inactivar, y aunque predominan en el hígado, las hidrólisis pueden ocurrir en otros lugares como el TGI o el plasma sanguíneo; las de fase II, en cambio, ocurren exclusivamente en el hígado, uniendo una pequeña molécula endógena al fármaco (o a un metabolito previo) y casi siempre lo inactivan.",
    "b": "Incorrecto: la fase II se activa precisamente 'cuando la fase I no ha sido suficiente', es decir, después de ella, no antes.",
    "c": "Incorrecto: las reacciones de fase I también pueden activar un fármaco, por ejemplo cuando se administra en forma de profármaco.",
    "d": "Incorrecto: son categorías de reacciones distintas, con mecanismos y objetivos diferentes, no sinónimos con distinto nombre."
  },
  "repetida": false
},

{
  "id": "t10-004",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Cuáles son los tres tipos de reacciones de fase I resumidos en clase?",
  "opciones": { "a": "Hidrólisis, oxidación y reducción", "b": "Liberación, absorción y distribución", "c": "Homología, ramificación y vinilogía", "d": "Conjugación, glucuronidación y sulfatación" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: las reacciones de fase I se agrupan en hidrólisis (ya vistas en el tema anterior, mayoritarias cuando hay un éster), oxidación (protagonizada por el citocromo P450) y reducción (minoritaria, pero de la que hay que memorizar algún ejemplo).",
    "b": "Incorrecto: esos son procesos del primer parcial (farmacocinética), no reacciones de metabolismo de fase I.",
    "c": "Incorrecto: esos son términos de modificación molecular fija (tema 5), no de las reacciones de metabolismo de fase I.",
    "d": "Incorrecto: la conjugación con moléculas endógenas (glucuronidación, sulfatación, etc.) corresponde a las reacciones de fase II, no a las de fase I."
  },
  "repetida": false
},

{
  "id": "t10-005",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Qué enzima y qué cofactores intervienen en la mayoría de las reacciones de oxidación de fase I estudiadas en este tema?",
  "opciones": { "a": "Ninguna enzima interviene en estas oxidaciones; ocurren de forma completamente espontánea", "b": "La ADN polimerasa, acompañada de ATP", "c": "El citocromo P450, acompañado siempre de NADPH y oxígeno", "d": "La acetilcolinesterasa, sin necesidad de ningún cofactor adicional" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: estas oxidaciones requieren de forma constante la acción del citocromo P450 junto con sus cofactores; no son reacciones espontáneas sin catálisis enzimática.",
    "b": "Incorrecto: la ADN polimerasa no tiene relación con las reacciones de metabolismo oxidativo de fármacos estudiadas en este tema.",
    "c": "Correcto: prácticamente todas las reacciones de oxidación de fase I estudiadas en este tema (C-hidroxilación, N-desalquilación, etc.) están catalizadas por el citocromo P450, que actúa siempre junto con NADPH y oxígeno.",
    "d": "Incorrecto: la acetilcolinesterasa es una enzima que degrada la acetilcolina (relacionada con la unión fármaco-diana del segundo parcial), no la protagonista de las oxidaciones de fase I."
  },
  "repetida": true
},

{
  "id": "t10-006",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿En qué consiste, de forma general, una C-hidroxilación de un carbono sp3?",
  "opciones": { "a": "En que se forma un nuevo doble enlace entre dos carbonos consecutivos", "b": "En que, allí donde el compuesto tenga al menos un hidrógeno sobre ese carbono, ese hidrógeno se pierde y en su lugar entra un grupo OH", "c": "En que se elimina por completo ese carbono de la cadena del fármaco", "d": "En que se añade un grupo amino en el lugar donde antes había un hidrógeno" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la C-hidroxilación no forma ningún doble enlace nuevo; el carbono sigue siendo sp3, solo cambia su sustituyente.",
    "b": "Correcto: la C-hidroxilación consiste, de forma general, en sustituir un hidrógeno de un carbono (con hibridación sp3, de enlace sencillo) por un grupo OH, catalizada por el citocromo P450 junto con NADPH y oxígeno.",
    "c": "Incorrecto: el carbono no desaparece de la cadena; simplemente cambia uno de sus sustituyentes (un hidrógeno por un OH).",
    "d": "Incorrecto: el grupo que se introduce en una C-hidroxilación es un OH, no un grupo amino."
  },
  "repetida": false
},

{
  "id": "t10-007",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "En el contexto del metabolismo oxidativo, ¿qué es la quimioselectividad?",
  "opciones": { "a": "La velocidad global a la que transcurre la reacción enzimática", "b": "La elección de una posición concreta dentro de un mismo grupo funcional", "c": "La elección entre dos grupos idénticos de la molécula (por ejemplo, si el fármaco tiene dos bencenos, decidir en cuál de los dos entra la reacción)", "d": "La formación de un nuevo enantiómero durante la reacción" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la velocidad de la reacción no es lo que define la quimioselectividad; esta se refiere a la elección entre grupos equivalentes, no a la cinética de la reacción.",
    "b": "Incorrecto: elegir una posición concreta dentro de un mismo grupo (por ejemplo, la posición 'para' de un benceno) es regioselectividad, no quimioselectividad.",
    "c": "Correcto: la quimioselectividad se define como la elección entre dos grupos iguales presentes en la misma molécula (por ejemplo, dos bencenos, o dos posiciones de alcano equivalentes), decidiendo por cuál de los dos entra preferentemente la reacción.",
    "d": "Incorrecto: la formación de un nuevo estereoisómero es el criterio de estereoselectividad, un concepto distinto de la quimioselectividad."
  },
  "repetida": true
},

{
  "id": "t10-008",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Qué es la regioselectividad, dentro de los tres tipos de selectividad estudiados en el metabolismo oxidativo?",
  "opciones": { "a": "Es exactamente lo mismo que la quimioselectividad, con otro nombre", "b": "La elección de una posición concreta dentro de un mismo grupo (por ejemplo, si el fármaco tiene un benceno, elegir entrar en una posición del anillo, como la posición 'para', en vez de en otra)", "c": "La elección entre dos grupos funcionales completamente distintos, como un benceno y un ciclohexano", "d": "La capacidad de formar un nuevo estereoisómero R o S durante la reacción" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: son conceptos claramente distintos: la quimioselectividad elige entre grupos iguales, y la regioselectividad elige una posición dentro de un mismo grupo.",
    "b": "Correcto: la regioselectividad se refiere a elegir una posición concreta dentro de un mismo grupo o cadena (por ejemplo, qué posición concreta de un anillo aromático, o qué carbono concreto de una cadena, es atacado por la reacción).",
    "c": "Incorrecto: elegir entre dos grupos completamente distintos no encaja en ninguna de las tres selectividades explicadas de la misma manera que elegir entre posiciones equivalentes o dentro del mismo grupo.",
    "d": "Incorrecto: formar un nuevo estereoisómero es el criterio de estereoselectividad, un concepto distinto de la regioselectividad."
  },
  "repetida": false
},

{
  "id": "t10-009",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Qué es la estereoselectividad en las reacciones de metabolismo oxidativo, y qué ejemplo se pone en clase para ilustrarla?",
  "opciones": { "a": "Es la velocidad con la que se consume el NADPH durante la reacción de oxidación", "b": "Es un concepto exclusivo de la hidrólisis de amidas, que no se aplica a las reacciones de oxidación", "c": "Es la elección entre dos grupos iguales presentes en la molécula del fármaco", "d": "Es la posibilidad de formar un enantiómero (R/S) o un diastereómero (Z/E) durante la reacción; se ilustra con la apertura de epóxidos, que ocurre preferentemente por el carbono menos impedido" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el consumo de NADPH es parte del mecanismo general de oxidación, pero no es lo que define el concepto de estereoselectividad.",
    "b": "Incorrecto: el concepto de estereoselectividad se aplica de forma general a cualquier reacción que pueda generar un nuevo centro estereogénico, incluidas las reacciones de oxidación.",
    "c": "Incorrecto: elegir entre dos grupos iguales es el criterio de quimioselectividad, no de estereoselectividad.",
    "d": "Correcto: la estereoselectividad se refiere a la posibilidad de que la reacción genere un nuevo centro estereogénico (un carbono quiral, dando R o S, o un doble enlace, dando E o Z); se ilustra con la apertura de un epóxido, que transcurre preferentemente por el carbono menos impedido de los dos."
  },
  "repetida": false
},

{
  "id": "t10-010",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "En el mecanismo de la C-hidroxilación catalizada por el citocromo P450, la primera etapa es una ruptura homolítica del enlace C-H. ¿Qué significa esto?",
  "opciones": { "a": "Que el enlace C-H no llega a romperse en ningún momento de la reacción", "b": "Que de los dos electrones del enlace C-H, uno se lo lleva el carbono y el otro se lo lleva el citocromo P450, quedando un electrón 'desapareado' en cada fragmento", "c": "Que los dos electrones del enlace se van juntos hacia el citocromo P450, dejando al carbono con una carga positiva completa", "d": "Que se rompen simultáneamente todos los enlaces C-H de la molécula a la vez" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el enlace C-H sí se rompe; es precisamente el primer paso del mecanismo de C-hidroxilación.",
    "b": "Correcto: en una ruptura homolítica cada átomo implicado se queda con uno de los dos electrones del enlace roto (representado con una flecha de una sola punta), a diferencia de una ruptura heterolítica, donde los dos electrones se van juntos a uno de los dos átomos.",
    "c": "Incorrecto: esa descripción correspondería a una ruptura heterolítica (con los dos electrones yéndose juntos), no a la ruptura homolítica que se produce en este mecanismo.",
    "d": "Incorrecto: solo se rompe el enlace C-H concreto donde va a entrar el grupo OH, no todos los enlaces C-H de la molécula a la vez."
  },
  "repetida": false
},

{
  "id": "t10-011",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "El intermedio que se forma tras la ruptura homolítica en la C-hidroxilación es un intermedio radicálico. ¿Por qué se dice que 'se parece' a un carbocatión sin llegar a serlo?",
  "opciones": { "a": "Porque el intermedio radicálico tiene, de hecho, una carga positiva completa, idéntica a la de un carbocatión", "b": "Porque, aunque no tiene carga positiva real, al carbono 'le falta' un electrón para completar su par, de forma similar a como un carbocatión tiene un orbital vacío, lo que hace que se estabilice con lógicas parecidas (por ejemplo, por resonancia con anillos aromáticos o dobles enlaces cercanos)", "c": "No existe ninguna relación entre un intermedio radicálico y un carbocatión", "d": "Porque el intermedio radicálico tiene dos electrones de más, en vez de electrones de menos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: se insiste explícitamente en que el intermedio radicálico no tiene carga real, ni positiva ni negativa; simplemente le falta un electrón para completar su par.",
    "b": "Correcto: se explica expresamente que el intermedio radicálico, aunque no es un carbocatión (no tiene carga positiva real), 'se parece' en el sentido de que al carbono le falta un electrón para completar su par, lo que hace que se beneficie de las mismas vías de estabilización por resonancia (con anillos aromáticos, dobles o triples enlaces) que estabilizarían a un carbocatión.",
    "c": "Incorrecto: se establece expresamente una analogía entre ambos, en cuanto a las vías de estabilización por resonancia que comparten, aunque no sean exactamente lo mismo.",
    "d": "Incorrecto: es justo lo contrario, al intermedio radicálico le falta un electrón, no le sobran dos."
  },
  "repetida": false
},

{
  "id": "t10-012",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "En una cadena alifática sin ningún grupo activante cercano (posiciones 'no activadas'), cuando hay que elegir entre dos carbonos CH₂ distintos para la C-hidroxilación, ¿qué determina la regioselectividad?",
  "opciones": { "a": "El menor impedimento estérico: por simple probabilidad, es más fácil que el citocromo P450 saque un hidrógeno de la posición menos impedida (por ejemplo, la más alejada del resto de sustituyentes)", "b": "Se elige siempre el carbono más cercano al grupo carboxilo terminal de la molécula, sin excepción", "c": "La posición siempre la determina un efecto +R fuerte, igual que ocurre en las posiciones activadas", "d": "La regioselectividad en posiciones no activadas es siempre completamente imposible de predecir" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en posiciones no activadas (sin ningún doble enlace, triple enlace, anillo aromático o heteroátomo cercano que dé efecto +R), la regioselectividad la determina el menor impedimento estérico, favorecido además por el efecto +I de los carbonos vecinos.",
    "b": "Incorrecto: no existe esa regla fija; el criterio que rige la elección es el impedimento estérico relativo entre las posiciones candidatas.",
    "c": "Incorrecto: precisamente lo que caracteriza a una posición 'no activada' es la ausencia de un efecto +R fuerte; ese efecto es el que sí opera en las posiciones activadas (bencílica, alílica, etc.).",
    "d": "Incorrecto: sí se puede predecir, aplicando el criterio del menor impedimento estérico entre las posiciones disponibles."
  },
  "repetida": false
},

{
  "id": "t10-013",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Por qué la C-hidroxilación entra preferentemente en la posición bencílica (el carbono justo después de un anillo aromático) en vez de en otras posiciones de la misma cadena?",
  "opciones": { "a": "Porque el intermedio radicálico que se forma ahí es más estable, gracias a que puede deslocalizarse por resonancia con el anillo aromático", "b": "Porque el citocromo P450 solo puede actuar sobre anillos aromáticos, nunca sobre cadenas alifáticas", "c": "Porque la posición bencílica nunca tiene ningún hidrógeno disponible para reaccionar", "d": "Porque en la posición bencílica nunca llega a formarse ningún intermedio radicálico" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: al estar junto a un anillo aromático, el intermedio radicálico formado en posición bencílica puede deslocalizarse por resonancia con el anillo, ganando mucha más estabilidad que un intermedio radicálico 'aislado' en una posición no activada, por lo que es la posición preferida para la C-hidroxilación.",
    "b": "Incorrecto: el citocromo P450 actúa tanto sobre cadenas alifáticas (posiciones no activadas) como sobre posiciones activadas junto a anillos aromáticos, dobles enlaces, etc.",
    "c": "Incorrecto: la posición bencílica sí tiene hidrógenos disponibles (por ejemplo, en un grupo CH₃ o CH₂ unido al anillo), que son precisamente los que se sustituyen por el OH.",
    "d": "Incorrecto: en la posición bencílica sí se forma un intermedio radicálico, precisamente el que resulta especialmente estable por la resonancia con el anillo."
  },
  "repetida": true
},

{
  "id": "t10-014",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Qué se entiende por 'posición alílica' en el contexto de las posiciones activadas para la C-hidroxilación?",
  "opciones": { "a": "El carbono situado justo al lado de un doble enlace, donde el intermedio radicálico se estabiliza por resonancia con ese doble enlace", "b": "El carbono situado junto a un anillo aromático", "c": "Cualquier carbono de la molécula, sin ninguna condición estructural adicional", "d": "El carbono situado junto a un triple enlace" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la posición alílica es el carbono contiguo a un doble enlace; el intermedio radicálico que se forma ahí se estabiliza por resonancia con ese doble enlace, de forma análoga a lo que ocurre en la posición bencílica con el anillo aromático.",
    "b": "Incorrecto: el carbono junto a un anillo aromático es la posición bencílica, un caso distinto de la alílica.",
    "c": "Incorrecto: no cualquier carbono cuenta como posición alílica; se requiere específicamente la proximidad a un doble enlace.",
    "d": "Incorrecto: el carbono junto a un triple enlace es la posición propargílica, no la alílica."
  },
  "repetida": false
},

{
  "id": "t10-015",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿En qué se diferencia la posición propargílica de la posición alílica?",
  "opciones": { "a": "La posición propargílica nunca puede sufrir una reacción de C-hidroxilación", "b": "La posición propargílica y la alílica son exactamente lo mismo, solo que con dos nombres distintos", "c": "La posición propargílica es el carbono contiguo a un triple enlace, mientras que la alílica es el carbono contiguo a un doble enlace; en ambos casos la lógica de estabilización por resonancia del intermedio radicálico es la misma", "d": "La posición propargílica se refiere siempre a un carbono unido a un anillo aromático" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la posición propargílica sí puede sufrir C-hidroxilación, precisamente porque el intermedio radicálico formado ahí se estabiliza por resonancia con el triple enlace.",
    "b": "Incorrecto: aunque comparten la misma lógica de estabilización, se diferencian en el tipo de enlace múltiple implicado (triple frente a doble), por lo que reciben nombres distintos.",
    "c": "Correcto: ambas posiciones (propargílica y alílica) siguen la misma lógica de estabilización por resonancia del intermedio radicálico, pero difieren en el tipo de enlace múltiple adyacente: triple enlace en la propargílica, doble enlace en la alílica.",
    "d": "Incorrecto: la posición junto a un anillo aromático es la bencílica, un caso distinto tanto de la alílica como de la propargílica."
  },
  "repetida": false
},

{
  "id": "t10-016",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Qué es la posición 'alfa al carbonilo' como posición activada para la C-hidroxilación?",
  "opciones": { "a": "El propio átomo de carbono que forma parte del grupo carbonilo", "b": "El carbono más alejado posible de cualquier grupo carbonilo presente en la molécula", "c": "Una posición que, por definición, nunca puede sufrir ninguna reacción de oxidación", "d": "El carbono situado justo al lado de un grupo carbonilo, donde también se estabiliza el intermedio radicálico formado" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el propio carbono del carbonilo no es la posición 'alfa'; la posición alfa es el carbono vecino a él, no el carbonilo en sí.",
    "b": "Incorrecto: la posición alfa al carbonilo es, por definición, la más próxima al grupo carbonilo, no la más alejada.",
    "c": "Incorrecto: es justo lo contrario; se trata de una de las posiciones activadas, favorecidas frente a las posiciones no activadas.",
    "d": "Correcto: la posición alfa al carbonilo es el carbono inmediatamente contiguo a un grupo carbonilo (C=O); el intermedio radicálico formado ahí también se ve favorecido, siguiendo la misma lógica general de las posiciones activadas."
  },
  "repetida": false
},

{
  "id": "t10-017",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "La C-hidroxilación en posición 'alfa a un heteroátomo' (nitrógeno, oxígeno o azufre) es un caso especial: la reacción 'no puede parar ahí'. ¿A qué reacción conduce directamente esta C-hidroxilación inicial?",
  "opciones": { "a": "A una reacción de X-desalquilación (N-desalquilación, O-desalquilación o S-desalquilación, según el heteroátomo implicado)", "b": "A la formación directa de un nuevo anillo aromático", "c": "A una reacción de reducción del grupo carbonilo", "d": "A ninguna reacción adicional; el proceso siempre se detiene en el alcohol formado" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: cuando el citocromo P450 introduce un OH en la posición alfa a un heteroátomo (nitrógeno, oxígeno o azufre), la reacción no se detiene ahí, sino que continúa de forma prácticamente inevitable hacia una reacción de X-desalquilación (N-, O- o S-desalquilación, según cuál sea el heteroátomo).",
    "b": "Incorrecto: la X-desalquilación rompe un enlace carbono-heteroátomo, dando lugar a un aldehído y a una amina/alcohol/tiol, no a la formación de un anillo aromático nuevo.",
    "c": "Incorrecto: no hay ninguna reducción implicada en este proceso; al contrario, se trata de una secuencia de reacciones de oxidación.",
    "d": "Incorrecto: se insiste explícitamente en que esta reacción concreta 'no puede parar ahí' en el simple alcohol formado; continúa necesariamente hacia la desalquilación."
  },
  "repetida": true
},

{
  "id": "t10-018",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "En el mecanismo de una N-desalquilación (tras la C-hidroxilación previa en posición alfa al nitrógeno), ¿cómo se completa la ruptura del enlace carbono-nitrógeno?",
  "opciones": { "a": "La ruptura del enlace carbono-nitrógeno no requiere la participación de ninguna otra molécula", "b": "El par libre de la base ataca, obligando a salir al nitrógeno; como el nitrógeno no puede salir con carga negativa, antes tiene que captar un protón de otra molécula (catálisis ácida), completando así la ruptura de forma neutra", "c": "El nitrógeno sale siempre en forma de anión, conservando una carga negativa permanente", "d": "El enlace se rompe espontáneamente, sin necesidad de ninguna catálisis básica ni ácida" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la ruptura requiere tanto la intervención de una base (para iniciar el ataque) como de un ácido (para neutralizar la carga negativa antes de que el nitrógeno salga).",
    "b": "Correcto: al igual que en el mecanismo ping-pong del tema anterior, primero hay una catálisis básica (el par libre de la base ataca, forzando la ruptura del enlace C-N), y como el nitrógeno no puede salir con carga negativa a pH fisiológico, capta un protón de otra molécula (catálisis ácida) para completar la ruptura de forma neutra.",
    "c": "Incorrecto: precisamente porque el nitrógeno no puede quedar con carga negativa a pH fisiológico, capta un protón antes de completar su salida, saliendo de forma neutra (como amina).",
    "d": "Incorrecto: se explica un mecanismo concreto, con catálisis básica seguida de catálisis ácida, no una ruptura espontánea sin ninguna intervención catalítica."
  },
  "repetida": false
},

{
  "id": "t10-019",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Qué dos tipos de producto se obtienen siempre al completar una reacción de X-desalquilación (por ejemplo, una N-desalquilación)?",
  "opciones": { "a": "Siempre dos moléculas exactamente idénticas entre sí", "b": "Siempre dos moléculas de agua, sin ningún otro producto adicional", "c": "Un aldehído, por el lado donde había entrado el grupo OH, y el resto de la molécula en forma de amina (o alcohol, o tiol, según el heteroátomo implicado) por el otro lado", "d": "Siempre un ácido carboxílico y un alcano, sin ninguna excepción" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: los dos productos de una X-desalquilación son, por definición, distintos entre sí (un fragmento pequeño tipo aldehído y el resto de la molécula original).",
    "b": "Incorrecto: aunque el agua participa como reactivo en pasos anteriores del metabolismo (por ejemplo, en hidrólisis), el producto característico de una X-desalquilación es el par aldehído/amina (u homólogos), no agua.",
    "c": "Correcto: se insiste en clase en que 'siempre, si digo siempre, es siempre' el resultado de una X-desalquilación es un aldehído (en el fragmento donde había entrado el OH) y, por el otro lado, el resto de la cadena liberado como amina, alcohol o tiol, según cuál fuera el heteroátomo implicado.",
    "d": "Incorrecto: el producto típico no es un ácido carboxílico y un alcano, sino un aldehído y una amina (o alcohol o tiol), como se explica de forma reiterada en clase."
  },
  "repetida": true
},

{
  "id": "t10-020",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "Un fármaco tiene dos carbonos distintos, ambos en posición alfa a la misma amina, con igual capacidad de estabilización por resonancia (mismo efecto +R del nitrógeno). ¿Qué determina, en ese caso, cuál de los dos sufre la C-hidroxilación inicial?",
  "opciones": { "a": "El citocromo P450 nunca puede actuar si existen dos posiciones posibles con igual efecto +R", "b": "Siempre entra en el carbono más alejado del nitrógeno, nunca en uno cercano a él", "c": "Se elige siempre al azar, sin aplicar ningún criterio químico", "d": "El menor impedimento estérico entre ambas posiciones (por ejemplo, un carbono con más hidrógenos disponibles frente a otro más sustituido)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: el citocromo P450 sí puede actuar en ese escenario; simplemente el criterio de elección pasa del efecto electrónico (igual en ambos casos) al impedimento estérico.",
    "b": "Incorrecto: no hay una regla fija de 'elegir siempre la posición más alejada'; lo que decide es el impedimento estérico relativo entre ambas posiciones concretas.",
    "c": "Incorrecto: sí existe un criterio químico claro (el impedimento estérico) para decidir entre las dos posiciones cuando el efecto electrónico es idéntico.",
    "d": "Correcto: cuando dos posiciones tienen la misma estabilización por resonancia (mismo efecto +R del heteroátomo), la regioselectividad pasa a decidirse por el menor impedimento estérico, igual que ocurre en las posiciones no activadas, tal como se explica en el ejemplo del fármaco con dos posiciones posibles junto a la misma amina."
  },
  "repetida": false
},

{
  "id": "t10-021",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "En una posición bencílica con una cadena de más de un carbono (por ejemplo, un propilo en vez de un simple metilo), ¿hasta dónde puede llegar la oxidación por el citocromo P450, y por qué no se detiene en el alcohol?",
  "opciones": { "a": "Se detiene siempre en el primer alcohol formado, sin ninguna excepción posible", "b": "Puede llegar hasta un ácido carboxílico, porque el citocromo P450 sigue oxidando ese carbono progresivamente hasta alcanzar el grado de oxidación máximo posible, en vez de detenerse en el primer alcohol formado", "c": "Se detiene siempre en una cetona, exactamente igual que ocurriría con un alcohol secundario", "d": "La oxidación nunca puede progresar más allá de una simple C-hidroxilación inicial" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: es precisamente el caso contrario al que se destaca en clase como excepción: en esta situación concreta, la oxidación va más allá del simple alcohol.",
    "b": "Correcto: se explica expresamente que, en una posición bencílica con más de un carbono en la cadena (por ejemplo, un CH₂ o CH₃ terminal más allá del primer carbono bencílico), la oxidación no se detiene en el alcohol, sino que continúa hasta llegar al ácido carboxílico, la molécula más oxidada posible en esa posición.",
    "c": "Incorrecto: el comportamiento de detenerse en cetona es el que corresponde a un alcohol secundario normal, no al caso especial de la posición bencílica con cadena larga, que llega hasta ácido carboxílico.",
    "d": "Incorrecto: se explica de forma expresa que la oxidación puede continuar más allá de la C-hidroxilación inicial, llegando hasta el ácido carboxílico."
  },
  "repetida": false
},

{
  "id": "t10-022",
  "tema": "Tema 7 (fase I) — Metabolismo oxidativo",
  "pregunta": "¿Cómo se compara la oxidación de una posición bencílica con una cadena larga (que puede llegar hasta un ácido carboxílico) con la oxidación típica de un alcohol secundario (que se detiene en cetona)?",
  "opciones": { "a": "El alcohol secundario siempre llega hasta ácido carboxílico, igual que ocurre en la posición bencílica", "b": "Ambos casos se detienen exactamente en el mismo grado de oxidación, sin ninguna diferencia entre ellos", "c": "Son casos distintos: el alcohol secundario, al oxidarse, solo puede llegar hasta cetona (no le quedan más hidrógenos que perder en ese carbono para seguir oxidando), mientras que en una posición bencílica con más de un carbono en la cadena, la oxidación puede progresar hasta el ácido carboxílico", "d": "Ninguno de los dos casos puede oxidarse nunca más allá del primer alcohol formado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: es justo lo contrario de lo explicado; el alcohol secundario se detiene en cetona, mientras que la posición bencílica con cadena larga puede llegar hasta ácido carboxílico.",
    "b": "Incorrecto: se trata de dos situaciones distintas, con distinto grado final de oxidación (cetona frente a ácido carboxílico), no del mismo resultado.",
    "c": "Correcto: un alcohol secundario, al oxidarse, solo puede llegar hasta cetona porque ese carbono ya no conserva ningún hidrógeno adicional que perder para seguir oxidándose más; en cambio, en una posición bencílica con una cadena de más de un carbono, sí queda margen para seguir oxidando hasta llegar al ácido carboxílico, el grado de oxidación más alto posible en esa posición.",
    "d": "Incorrecto: ambos casos, de hecho, van más allá del primer alcohol formado (uno hasta cetona, el otro hasta ácido carboxílico), no se quedan detenidos en ese primer paso."
  },
  "repetida": false
},

{
  "id": "t11-001",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "En la síntesis de la fenitoína a partir de bencilo y urea, la fenitoína se forma con una estequiometría de 1 mol de bencilo por 1 mol de urea. El producto secundario de la reacción, en cambio, se forma con una estequiometría distinta. ¿Cuál?",
  "opciones": { "a": "1 mol de bencilo por 1 mol de urea, exactamente igual que para la fenitoína", "b": "1 mol de bencilo por 2 moles de urea", "c": "3 moles de bencilo por 3 moles de urea", "d": "2 moles de bencilo por 1 mol de urea" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: si la estequiometría fuese idéntica a la de la fenitoína, el reactivo limitante nunca podría cambiar entre ambos productos, y precisamente ese cambio es la clave del ejercicio.",
    "b": "Correcto: para formar el producto secundario hace falta 1 mol de bencilo por cada 2 moles de urea, a diferencia de la proporción 1:1 de la fenitoína; esta diferencia es, según se insiste en clase, la idea más importante de todo el problema, porque determina cuál es el reactivo limitante en cada caso.",
    "c": "Incorrecto: esa proporción no corresponde a ninguno de los dos productos de esta reacción.",
    "d": "Incorrecto: la proporción está invertida; es la urea la que se necesita en mayor cantidad (el doble), no el bencilo."
  },
  "repetida": true
},

{
  "id": "t11-002",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Para la síntesis de fenitoína se pesan 4,8 g de bencilo con una pureza del 98%. ¿Cuántos gramos de bencilo puro contiene esa muestra?",
  "opciones": { "a": "9,6 g, el doble de lo pesado", "b": "2,4 g, la mitad de lo pesado", "c": "4,704 g (resultado de 4,8 g × 98/100)", "d": "4,8 g exactos; la pureza no afecta a este cálculo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la corrección por pureza reduce la masa pesada (multiplicando por un porcentaje menor que 100), nunca la duplica.",
    "b": "Incorrecto: con un 98% de pureza, la masa pura debe ser muy cercana a la masa pesada, no la mitad.",
    "c": "Correcto: como la muestra pesada es impura, hay que corregir por el porcentaje de riqueza: masa pura = masa pesada × (%pureza/100) = 4,8 g × 0,98 = 4,704 g de bencilo puro.",
    "d": "Incorrecto: precisamente porque el reactivo pesado es impuro, hay que aplicar el factor de pureza antes de calcular los moles; ignorar ese paso es un error habitual."
  },
  "repetida": true
},

{
  "id": "t11-003",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Con los 4,704 g de bencilo puro obtenidos (masa molar del bencilo ≈ 210 g/mol), ¿cuántos moles de bencilo hay disponibles para la reacción?",
  "opciones": { "a": "Aproximadamente 4,704 mol", "b": "Aproximadamente 2,24 mol", "c": "Aproximadamente 0,224 mol", "d": "Aproximadamente 0,0224 mol (4,704 g ÷ 210 g/mol)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: este es, simplemente, el valor de la masa en gramos sin dividir entre la masa molar; falta completar el cálculo.",
    "b": "Incorrecto: este valor es 100 veces mayor que el resultado correcto; probablemente por un error al mover la coma decimal.",
    "c": "Incorrecto: este valor es 10 veces mayor que el resultado correcto de la división.",
    "d": "Correcto: los moles se calculan dividiendo la masa pura entre la masa molar: n = m/M = 4,704 g ÷ 210 g/mol ≈ 0,0224 mol de bencilo."
  },
  "repetida": true
},

{
  "id": "t11-004",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Para la urea se pesan 2,4 g con una pureza del 95%, y su masa molar es 60 g/mol. ¿Cuántos moles de urea pura hay disponibles?",
  "opciones": { "a": "Aproximadamente 2,28 mol", "b": "Aproximadamente 0,038 mol (2,4 g × 95/100 = 2,28 g puros; 2,28 g ÷ 60 g/mol ≈ 0,038 mol)", "c": "Aproximadamente 0,4 mol", "d": "Aproximadamente 0,04 mol, calculado sin corregir por la pureza (2,4 g ÷ 60 g/mol)" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: este es simplemente el valor de la masa pura en gramos, sin dividir todavía entre la masa molar.",
    "b": "Correcto: primero se corrige la masa por la pureza (2,4 g × 0,95 = 2,28 g de urea pura), y después se calculan los moles dividiendo entre la masa molar (2,28 g ÷ 60 g/mol ≈ 0,038 mol).",
    "c": "Incorrecto: este valor es 10 veces mayor que el resultado correcto.",
    "d": "Incorrecto: este resultado (0,04 mol) se obtiene si se olvida corregir por la pureza del 95%; aunque es un valor cercano, no es el correcto, y en un ejercicio con menor pureza el error sería más significativo."
  },
  "repetida": true
},

{
  "id": "t11-005",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Con 0,0224 mol de bencilo y 0,038 mol de urea disponibles, y una estequiometría 1:1 para formar fenitoína, ¿cuál es el reactivo limitante, y cuántos moles teóricos de fenitoína se obtienen?",
  "opciones": { "a": "El bencilo es el reactivo limitante, pero se obtienen 0,038 mol teóricos de fenitoína, igual que los moles de urea", "b": "El bencilo es el reactivo limitante (0,0224 < 0,038, dividiendo ambos entre su coeficiente estequiométrico, que es 1 en los dos casos); se obtienen aproximadamente 0,0224 mol teóricos de fenitoína", "c": "No hay ningún reactivo limitante, porque los dos reactivos están en exceso", "d": "La urea es el reactivo limitante, porque hay menos moles de bencilo en la mezcla que de urea" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: los moles teóricos del producto se calculan a partir de los moles del reactivo limitante (el bencilo, con 0,0224 mol), no a partir de los del reactivo en exceso (la urea).",
    "b": "Correcto: al dividir los moles de cada reactivo entre su coeficiente estequiométrico (1 para ambos en la formación de fenitoína), el bencilo da el valor más pequeño (0,0224 frente a 0,038 de la urea), así que es el reactivo limitante, y los moles teóricos de fenitoína coinciden con los del bencilo, al ser la proporción 1:1.",
    "c": "Incorrecto: en cualquier reacción con cantidades finitas de reactivos, siempre existe un reactivo limitante (el que se consume primero), salvo que las proporciones sean exactamente estequiométricas.",
    "d": "Incorrecto: el criterio del reactivo limitante no es simplemente 'quién tiene menos moles' sin dividir entre el coeficiente estequiométrico; en este caso, además, es precisamente el bencilo el que tiene menos moles disponibles."
  },
  "repetida": true
},

{
  "id": "t11-006",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Para calcular cuánto se puede llegar a formar del producto secundario (estequiometría 1 bencilo : 2 urea) con esos mismos 0,0224 mol de bencilo y 0,038 mol de urea, ¿cuál es ahora el reactivo limitante?",
  "opciones": { "a": "Los dos reactivos son limitantes a la vez, con idéntico valor en ambos casos", "b": "No se puede determinar el reactivo limitante sin conocer la masa molar del producto secundario", "c": "La urea, porque al dividir sus moles entre el coeficiente estequiométrico 2 (0,038 ÷ 2 = 0,019) se obtiene un valor menor que el del bencilo dividido entre 1 (0,0224 ÷ 1 = 0,0224)", "d": "El bencilo, exactamente igual que en el caso de la fenitoína" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: los dos valores obtenidos (0,0224 para el bencilo y 0,019 para la urea) son distintos entre sí, así que solo uno de los dos reactivos es el limitante.",
    "b": "Incorrecto: el reactivo limitante se determina exclusivamente a partir de los moles disponibles y los coeficientes estequiométricos, sin necesidad de conocer la masa molar del producto final.",
    "c": "Correcto: al cambiar el coeficiente estequiométrico de la urea de 1 a 2 (porque ahora hacen falta 2 moles de urea por cada mol de bencilo), el valor de la urea dividida entre su coeficiente (0,019) pasa a ser menor que el del bencilo (0,0224), por lo que la urea se convierte en el reactivo limitante para este producto.",
    "d": "Incorrecto: precisamente este ejercicio ilustra que el reactivo limitante puede cambiar según el producto que se calcule; para el producto secundario, es la urea, no el bencilo."
  },
  "repetida": true
},

{
  "id": "t11-007",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Comparando los dos casos anteriores (síntesis de fenitoína frente a síntesis del producto secundario, a partir de las mismas cantidades iniciales de bencilo y urea), ¿qué idea fundamental ilustran?",
  "opciones": { "a": "Que el reactivo limitante es siempre el mismo, independientemente del producto que se calcule", "b": "Que solo puede haber reactivo limitante si se parte de cantidades idénticas, en moles, de cada reactivo", "c": "Que la pureza de los reactivos no influye nunca en el cálculo del reactivo limitante", "d": "Que el reactivo limitante de una reacción puede cambiar según cuál sea el producto concreto que se esté calculando, porque la estequiometría (y por tanto el coeficiente por el que se divide cada reactivo) es distinta para cada producto" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: es precisamente lo contrario de lo que demuestran ambos cálculos, donde el reactivo limitante cambia de bencilo a urea según el producto.",
    "b": "Incorrecto: el concepto de reactivo limitante se aplica precisamente cuando las cantidades de los reactivos no están en la proporción exacta que exige la estequiometría, no solo cuando son moles idénticos.",
    "c": "Incorrecto: aunque en este ejemplo concreto la pureza no es la causa del cambio de reactivo limitante, sí influye siempre en el cálculo de los moles disponibles de cada reactivo, paso previo indispensable.",
    "d": "Correcto: esta es, según se insiste en clase, una de las ideas más importantes del ejercicio: con las mismas cantidades de partida, el reactivo limitante puede ser distinto según a qué producto (fenitoína o producto secundario) se aplique el cálculo, porque cada uno tiene su propia estequiometría."
  },
  "repetida": false
},

{
  "id": "t11-008",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Con 0,0224 mol teóricos de fenitoína y una masa molar de la fenitoína de 252 g/mol, ¿cuántos gramos teóricos de fenitoína se esperan obtener?",
  "opciones": { "a": "Aproximadamente 252 g", "b": "Aproximadamente 56,45 g", "c": "Aproximadamente 0,0224 g", "d": "Aproximadamente 5,645 g (0,0224 mol × 252 g/mol)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: 252 g/mol es la masa molar de la fenitoína, no la masa teórica obtenida en esta síntesis concreta con estas cantidades de reactivo.",
    "b": "Incorrecto: este valor es 10 veces mayor que el resultado correcto, posiblemente por un error al situar la coma decimal.",
    "c": "Incorrecto: ese valor corresponde solo a los moles teóricos, sin multiplicar por la masa molar.",
    "d": "Correcto: la masa teórica se obtiene multiplicando los moles teóricos por la masa molar: 0,0224 mol × 252 g/mol ≈ 5,645 g de fenitoína."
  },
  "repetida": true
},

{
  "id": "t11-009",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Con 0,019 mol teóricos del producto secundario se obtiene una masa teórica de aproximadamente 5,586 g. Si en el laboratorio se obtuvieran experimentalmente 0,594 g de producto secundario bruto, ¿cuál sería, aproximadamente, su rendimiento porcentual?",
  "opciones": { "a": "Aproximadamente 10,64% (0,594 g ÷ 5,586 g × 100)", "b": "Aproximadamente 1,064%", "c": "Exactamente el 100%, porque toda síntesis de laboratorio se considera de rendimiento completo", "d": "Aproximadamente 104%, sin dividir antes entre la masa teórica" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el rendimiento porcentual es (masa obtenida ÷ masa teórica) × 100 = (0,594 g ÷ 5,586 g) × 100 ≈ 10,64%; este es el valor real de este ejercicio, aclarado expresamente para no confundirlo con un 104%.",
    "b": "Incorrecto: este valor sería 10 veces menor que el resultado correcto de la división.",
    "c": "Incorrecto: el rendimiento real depende de la masa efectivamente obtenida en el laboratorio frente a la teórica, y en la práctica casi nunca es del 100%.",
    "d": "Incorrecto: este resultado surge de un error de cálculo (probablemente de coma decimal) al aplicar la fórmula del rendimiento; el valor correcto para estos datos es 10,64%, no 104%."
  },
  "repetida": true
},

{
  "id": "t11-010",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "En esta práctica se advierte de que, a veces, un cálculo de rendimiento puede salir superior al 100%. ¿Cuáles son las causas más habituales que se mencionan para explicar este resultado aparentemente imposible?",
  "opciones": { "a": "Que el producto obtenido esté húmedo, contenga impurezas o restos de disolvente, o que se haya cometido algún error experimental o de pesada", "b": "Que un rendimiento superior al 100% es matemáticamente imposible en cualquier caso, y siempre indica un error en el enunciado del problema", "c": "Que la fórmula del rendimiento porcentual está mal planteada en esta práctica concreta", "d": "Que el reactivo limitante se calculó siempre con un coeficiente estequiométrico erróneo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: se explica expresamente que un rendimiento superior al 100% suele deberse a que el producto obtenido no está completamente seco (retiene agua u otro disolvente), a la presencia de impurezas que aumentan la masa pesada, o a errores experimentales o de pesada, no a que la reacción haya producido más sustancia de la teóricamente posible.",
    "b": "Incorrecto: se explica precisamente que sí puede aparecer, en la práctica real de laboratorio, un valor superior al 100%, y se dan las razones habituales para ello.",
    "c": "Incorrecto: la fórmula del rendimiento (masa obtenida entre masa teórica, por cien) es correcta; el problema, cuando aparece, es de origen experimental, no de la fórmula en sí.",
    "d": "Incorrecto: un rendimiento superior al 100% no tiene por qué deberse a un error en el reactivo limitante; puede perfectamente calcularse bien el reactivo limitante y aun así obtener ese resultado por las razones experimentales mencionadas."
  },
  "repetida": false
},

{
  "id": "t11-011",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "¿Cuál es la diferencia entre el 'rendimiento bruto' y el 'rendimiento de recristalización' en esta práctica de síntesis?",
  "opciones": { "a": "El rendimiento bruto nunca se puede comparar con ningún valor teórico", "b": "El rendimiento bruto compara la masa de producto bruto obtenida con la masa teórica calculada a partir de la estequiometría; el rendimiento de recristalización compara la masa ya purificada (recristalizada) con la masa de producto bruto de partida", "c": "El rendimiento de recristalización siempre se calcula sobre la masa teórica, nunca sobre la masa de producto bruto", "d": "Son exactamente el mismo cálculo, solo cambia el nombre que se le da" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: el rendimiento bruto se define exactamente como la comparación entre la masa obtenida y la masa teórica calculada a partir de la estequiometría.",
    "b": "Correcto: el rendimiento bruto es (masa de producto bruto obtenida ÷ masa teórica) × 100, mientras que el rendimiento de recristalización es (masa recristalizada ÷ masa de producto bruto) × 100; son dos comparaciones distintas, encadenadas una tras otra en el proceso de purificación.",
    "c": "Incorrecto: es precisamente al revés; el rendimiento de recristalización se calcula sobre la masa de producto bruto (el sólido antes de purificar), no sobre la masa teórica.",
    "d": "Incorrecto: aunque ambos son porcentajes de tipo 'obtenido entre referencia', las referencias son distintas (masa teórica en un caso, masa de producto bruto en el otro), así que no son el mismo cálculo."
  },
  "repetida": false
},

{
  "id": "t11-012",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "En un ejercicio de la práctica, se recristalizan 4,3 g de fenitoína a partir de 4,8 g de producto bruto obtenido previamente. ¿Cuál es, aproximadamente, el rendimiento de la recristalización?",
  "opciones": { "a": "Aproximadamente 111,6%", "b": "Aproximadamente 100%, porque toda recristalización se considera siempre completa", "c": "Aproximadamente 4,3%", "d": "Aproximadamente 89,6% (4,3 g ÷ 4,8 g × 100)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: un rendimiento de recristalización superior al 100% no tendría sentido lógico, porque implicaría recristalizar más sólido del que había disponible en el producto bruto de partida.",
    "b": "Incorrecto: la recristalización siempre implica alguna pérdida de producto durante la purificación, así que el rendimiento real casi nunca alcanza el 100%.",
    "c": "Incorrecto: ese valor correspondería a olvidar multiplicar por 100 y, además, a invertir accidentalmente los datos del cálculo.",
    "d": "Correcto: el rendimiento de recristalización es (masa recristalizada ÷ masa de producto bruto) × 100 = (4,3 g ÷ 4,8 g) × 100 ≈ 89,6%, un valor lógico porque es menor del 100% (se recristaliza menos de lo que había en bruto, como cabe esperar tras un proceso de purificación)."
  },
  "repetida": true
},

{
  "id": "t11-013",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "En el mecanismo de síntesis de la fenitoína, la urea es un nucleófilo relativamente débil, porque el par de electrones del nitrógeno está parcialmente deslocalizado por resonancia con el carbonilo. ¿Qué función cumple la catálisis básica en este mecanismo?",
  "opciones": { "a": "No cumple ninguna función real en este mecanismo; es un paso meramente decorativo", "b": "Elimina por completo el átomo de nitrógeno de la urea antes de que pueda reaccionar", "c": "Arranca un protón de la urea, generando una especie con carga negativa que es más nucleófila que la urea neutra, y que ataca con más facilidad al carbono del grupo carbonilo", "d": "Añade un protón adicional a la urea, disminuyendo todavía más su nucleofilia" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecto: la catálisis básica es un paso mecanísticamente necesario, ya que sin ella la urea neutra sería un nucleófilo demasiado débil para atacar con facilidad al carbonilo.",
    "b": "Incorrecto: el nitrógeno de la urea no desaparece de la molécula; sigue presente y es precisamente el átomo que, ya con carga negativa, ataca al carbonilo.",
    "c": "Correcto: la catálisis básica le quita un protón a la urea, dejándola con carga negativa; como una especie con carga negativa pura es siempre más nucleófila que una neutra con un simple par libre, esto facilita el ataque de la urea al carbono electrofílico del carbonilo, en un mecanismo de adición-eliminación.",
    "d": "Incorrecto: es justo lo contrario; la catálisis básica quita un protón (no añade ninguno), y precisamente esa pérdida es lo que aumenta la nucleofilia de la urea."
  },
  "repetida": true
},

{
  "id": "t11-014",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Al dibujar las flechas curvas de un mecanismo de reacción, como el de la síntesis de fenitoína, ¿de dónde pueden partir esas flechas, y de dónde nunca pueden partir?",
  "opciones": { "a": "Solo pueden partir de un átomo de hidrógeno, nunca de un par de electrones libre", "b": "Pueden partir indistintamente de una carga positiva o de una negativa, sin ninguna diferencia entre ambas", "c": "Nunca pueden partir de un par de electrones libre, solo de un enlace covalente completo", "d": "Pueden partir de un par de electrones libre, de una carga negativa o de un enlace; nunca pueden partir de una carga positiva" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecto: un átomo de hidrógeno con carga positiva (un protón) no puede ser el origen de una flecha; en una protonación, es el oxígeno (con su par libre) el que ataca al protón, no al revés.",
    "b": "Incorrecto: una carga positiva, por definición, carece de electrones disponibles para ceder, así que nunca puede ser el origen de una flecha curva, a diferencia de una carga negativa.",
    "c": "Incorrecto: es justo lo contrario; los pares de electrones libres son, precisamente, uno de los orígenes habituales de las flechas curvas en un mecanismo.",
    "d": "Correcto: se recuerda expresamente que las flechas curvas representan el movimiento de electrones, así que siempre parten de un par de electrones libre, de una carga negativa o de un enlace; nunca pueden partir de una carga positiva, porque a esta le faltan electrones que ceder."
  },
  "repetida": true
},

{
  "id": "t11-015",
  "tema": "Práctica 3 — Síntesis de fenitoína (cálculos de laboratorio)",
  "pregunta": "Al final de la síntesis de la fenitoína, tras dejar transcurrir la reacción en medio básico, se añade HCl hasta alcanzar un pH bajo (en torno a 2, claramente por debajo del pKa del grupo ácido de la fenitoína). ¿Qué función cumple esta acidificación?",
  "opciones": { "a": "Transforma directamente la fenitoína en el producto secundario de la reacción", "b": "Protona la fenitoína, favoreciendo su forma neutra (menos soluble en agua que la forma ionizada), lo que provoca su precipitación y permite separarla por filtración", "c": "No tiene ningún efecto sobre la solubilidad de la fenitoína; solo sirve para neutralizar la urea sobrante", "d": "Ioniza aún más la fenitoína, aumentando su solubilidad en agua para evitar que precipite" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecto: la acidificación es un paso de purificación física (precipitación y filtración), no una transformación química de la fenitoína en el producto secundario.",
    "b": "Correcto: al bajar el pH muy por debajo del pKa de la fenitoína, predomina su forma ácida neutra, que es insoluble en agua; esto hace que precipite y se pueda separar del resto de la mezcla de reacción mediante filtración, un ejemplo directo de aplicación del principio de Le Chatelier al modificar el pH del medio.",
    "c": "Incorrecto: la acidificación tiene un efecto directo y buscado sobre la propia fenitoína (su forma neutra e insoluble), no es un paso dirigido a la urea sobrante.",
    "d": "Incorrecto: es justo lo contrario; acidificar por debajo del pKa favorece la forma neutra (protonada) de la fenitoína, no la forma ionizada, que sería la más soluble."
  },
  "repetida": true
}
];
