const QUESTIONS = [

{
  "id": "t1-001",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Cuál es la principal diferencia entre una infección y una enfermedad infecciosa?",
  "opciones": { "a": "La infección es siempre sintomática y la enfermedad infecciosa siempre asintomática", "b": "No existe diferencia, son términos sinónimos usados indistintamente en microbiología clínica", "c": "La infección implica multiplicación del microorganismo en los tejidos, mientras que la enfermedad infecciosa añade el conjunto de manifestaciones clínicas producidas por esa infección", "d": "La enfermedad infecciosa puede darse sin que exista ningún microorganismo implicado", "e": "La infección solo puede estar producida por bacterias, mientras que la enfermedad infecciosa puede estar producida por virus u hongos" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Es al revés de lo habitual: la infección puede ser asintomática (colonización o infección inaparente) mientras que la enfermedad infecciosa es, por definición, sintomática.",
    "b": "Son conceptos distintos: se puede tener una infección inaparente (sin apenas respuesta inmune ni síntomas) sin llegar a desarrollar enfermedad infecciosa.",
    "c": "Correcto: infección es la invasión y multiplicación del microorganismo en los tejidos del huésped, mientras que enfermedad infecciosa añade los síntomas (fiebre, edema, etc.) asociados a esa infección; se puede estar infectado sin estar enfermo, como ocurre en muchos casos de SARS-CoV-2.",
    "d": "Por definición, la enfermedad infecciosa es un conjunto de manifestaciones clínicas producidas precisamente por una infección, por lo que siempre hay un microorganismo implicado.",
    "e": "Ambos términos son aplicables a bacterias, virus y hongos por igual; la diferencia no está en el tipo de agente sino en la presencia o no de clínica."
  },
  "repetida": false
},

{
  "id": "t1-002",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "Respecto a la obtención y el transporte de las muestras clínicas para el diagnóstico microbiológico, ¿cuál de las siguientes afirmaciones es INCORRECTA?",
  "opciones": { "a": "Las muestras deben tomarse siempre después de haber iniciado el tratamiento antibiótico", "b": "Los posibles agentes etiológicos implicados condicionan el sistema de transporte que se debe emplear", "c": "Las muestras deben enviarse al laboratorio lo antes posible y en las condiciones de temperatura y seguridad adecuadas", "d": "El síndrome clínico del paciente condiciona el tipo de muestra que se debe recoger", "e": "El tipo de paciente (niño, paciente intubado, sondado…) condiciona el procedimiento de obtención de la muestra" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Es la afirmación INCORRECTA y por tanto la respuesta a marcar: siempre que sea posible las muestras deben tomarse ANTES de iniciar el tratamiento antibiótico, para no reducir artificialmente el número de bacterias viables y así poder detectar el agente etiológico.",
    "b": "Es correcta: hay patógenos muy lábiles (p. ej. gonococo) que requieren sistemas de transporte específicos para no morir antes de llegar al laboratorio.",
    "c": "Es correcta: el envío rápido y en condiciones adecuadas de temperatura y seguridad es imprescindible para no perder viabilidad de los microorganismos ni comprometer la seguridad del personal.",
    "d": "Es correcta: el síndrome clínico (p. ej. otitis, faringitis) determina qué muestra concreta hay que recoger (exudado ótico, exudado faríngeo, etc.).",
    "e": "Es correcta: el procedimiento de obtención varía según se trate de un bebé, un paciente intubado o sondado, etc."
  },
  "repetida": true
},

{
  "id": "t1-003",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Cuál es el orden correcto en el que hay que añadir los reactivos para realizar la tinción de Gram?",
  "opciones": { "a": "Safranina - Lugol - Alcohol acetona - Cristal violeta", "b": "Cristal violeta - Lugol - Alcohol acetona - Safranina", "c": "Lugol - Safranina - Alcohol acetona - Cristal violeta", "d": "Cristal violeta - Lugol - Safranina - Alcohol acetona", "e": "Cristal violeta - Safranina - Lugol - Alcohol acetona" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Orden incorrecto: la safranina es el colorante de contraste final, no el primero; no puede aplicarse antes que el cristal violeta.",
    "b": "Es el orden correcto: primero cristal violeta (colorante que se une al peptidoglicano), después lugol (mordiente que fija el complejo cristal violeta-peptidoglicano), a continuación alcohol-acetona (decolorante, el paso crítico por el tiempo de exposición) y por último safranina (colorante de contraste que tiñe de rosa las Gram negativas ya decoloradas).",
    "c": "Incorrecto: coloca el cristal violeta al final, cuando en realidad es el primer colorante que se aplica, ya que es el que se une inicialmente al peptidoglicano.",
    "d": "Incorrecto: intercambia el orden de la safranina y el alcohol-acetona; la decoloración con alcohol-acetona siempre debe preceder a la tinción de contraste con safranina.",
    "e": "Incorrecto: la safranina no puede ir antes que el lugol y el alcohol-acetona, ya que estos pasos son los que determinan si la muestra retiene o no el cristal violeta."
  },
  "repetida": true
},

{
  "id": "t1-004",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "Sobre la tinción de Gram, ¿cuál de los siguientes grupos de microorganismos NO se observa correctamente con esta técnica pese a no ser técnicamente ácido-alcohol resistentes?",
  "opciones": { "a": "Streptococcus pneumoniae y Streptococcus pyogenes", "b": "Clamidias, rickettsias, micoplasmas y espiroquetas", "c": "Escherichia coli y Klebsiella pneumoniae", "d": "Staphylococcus aureus y Staphylococcus epidermidis", "e": "Neisseria meningitidis y Neisseria gonorrhoeae" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Los estreptococos son cocos Gram positivos que se visualizan perfectamente con la tinción de Gram habitual.",
    "b": "Correcto: las clamidias son intracelulares facultativas, los micoplasmas carecen de pared celular, y las rickettsias y espiroquetas (como Treponema pallidum) no se visualizan bien con la tinción de Gram por su tamaño o estructura particular, por lo que requieren otras técnicas (PCR, microscopía de campo oscuro, cultivo celular).",
    "c": "Las enterobacterias como E. coli y K. pneumoniae son bacilos Gram negativos que se observan sin problema con esta tinción.",
    "d": "Los estafilococos son cocos Gram positivos en racimo que se tiñen con normalidad mediante la técnica de Gram.",
    "e": "Las especies de Neisseria son diplococos Gram negativos claramente visibles con la tinción de Gram convencional."
  },
  "repetida": false
},

{
  "id": "t1-005",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Sobre qué tipo de muestras clínicas tiene sentido realizar una tinción de Gram directa para orientar el diagnóstico?",
  "opciones": { "a": "Únicamente sobre muestras de esputo, nunca sobre otras muestras", "b": "Sobre cualquier muestra clínica, sin excepción, porque la tinción de Gram tiene una sensibilidad muy alta", "c": "Sobre heces, porque contienen gran cantidad de bacterias fáciles de diferenciar", "d": "Sobre muestras estériles en condiciones normales, como el líquido cefalorraquídeo, ya que la presencia de bacterias en ellas es siempre patológica", "e": "Sobre exudados vaginales exclusivamente, por su alta concentración microbiana" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El esputo sí se usa para Gram (valorando su calidad por el número de leucocitos y células epiteliales), pero no es la única muestra válida; también se emplean LCR, líquido sinovial, orina, biopsias, etc.",
    "b": "No es cierto: en muestras muy contaminadas por flora normal (heces, orofaringe) la tinción de Gram pierde utilidad porque no permite discriminar el patógeno entre la multitud de comensales.",
    "c": "Las heces están masivamente colonizadas por microbiota normal, por lo que resulta prácticamente imposible distinguir en un Gram qué bacteria concreta está produciendo la infección; por eso no se realiza Gram rutinario de heces.",
    "d": "Correcto: en muestras normalmente estériles como el LCR, la simple presencia de bacterias en la tinción ya es indicativa de infección (p. ej. meningitis), lo que aporta un gran valor diagnóstico inmediato.",
    "e": "El exudado vaginal contiene flora comensal abundante, lo que limita la interpretación directa de un Gram salvo para hallazgos concretos como las 'clue cells' de la vaginosis bacteriana."
  },
  "repetida": false
},

{
  "id": "t1-007",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Cuál de los siguientes NO es un método de identificación bacteriana a partir de un cultivo puro?",
  "opciones": { "a": "PCR", "b": "Tiras API", "c": "ELISA indirecto", "d": "Sistemas automatizados (Wider, Vitek…)", "e": "Técnicas proteómicas (MALDI-TOF)" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La PCR con cebadores específicos (o la secuenciación de un gen como el 16S rRNA) sí permite identificar bacterias a partir de un aislado puro.",
    "b": "Las tiras API sí identifican bacterias a partir de cultivo puro mediante un panel de pruebas bioquímicas manuales.",
    "c": "El ELISA indirecto no es un método de identificación bacteriana a partir de cultivo puro: es una técnica serológica que detecta anticuerpos del paciente en su suero frente a un antígeno, no identifica bacterias aisladas en placa.",
    "d": "Los sistemas automatizados como Wider o Vitek identifican bacterias a partir de cultivo puro mediante paneles de microdilución y además ofrecen el perfil de sensibilidad antibiótica.",
    "e": "El MALDI-TOF sí es un método de identificación a partir de cultivo puro: compara el perfil proteico de la bacteria con una base de datos y da la especie en minutos."
  },
  "repetida": true
},

{
  "id": "t1-008",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿En qué consiste fundamentalmente la técnica de MALDI-TOF para la identificación bacteriana y fúngica?",
  "opciones": { "a": "En detectar anticuerpos específicos frente al microorganismo en el suero del paciente", "b": "En comparar el perfil de proteínas del microorganismo, obtenido por espectrometría de masas, con una base de datos de referencia", "c": "En observar la morfología del microorganismo al microscopio óptico tras una tinción especial", "d": "En amplificar un fragmento específico de material genético del microorganismo", "e": "En sembrar el microorganismo en un medio selectivo y observar el color de las colonias" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Eso describe una técnica serológica (ELISA, IFI); el MALDI-TOF no trabaja con suero del paciente sino con la bacteria o el hongo en cultivo puro.",
    "b": "Correcto: se toma una colonia pura, se añade una matriz que rompe las bacterias liberando sus proteínas, y el espectrómetro de masas genera un perfil proteico característico de cada especie que se compara con una base de datos; su principal inconveniente es que no aporta información sobre sensibilidad antibiótica.",
    "c": "El MALDI-TOF no se basa en la observación microscópica sino en un perfil proteico obtenido por espectrometría de masas.",
    "d": "Eso describe la PCR, no el MALDI-TOF; el MALDI-TOF no amplifica ácidos nucleicos sino que analiza proteínas.",
    "e": "Eso describiría una prueba de identificación en medios cromogénicos, no el fundamento del MALDI-TOF."
  },
  "repetida": false
},

{
  "id": "t1-009",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "Un laboratorio necesita identificar bacterias cuya identificación por otras técnicas resulta imposible o muy laboriosa, empleando para ello un gen presente en todas las bacterias que combina regiones muy conservadas con regiones hipervariables específicas de especie. ¿De qué técnica se trata?",
  "opciones": { "a": "Prueba de la coagulasa", "b": "Aglutinación directa con partículas de látex", "c": "Detección de antígeno por inmunocromatografía", "d": "Secuenciación del gen ADNr 16S", "e": "Tinción de Ziehl-Neelsen" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La prueba de la coagulasa es una prueba bioquímica sencilla para diferenciar Staphylococcus aureus de otros estafilococos, no una técnica de secuenciación.",
    "b": "La aglutinación con látex es una técnica de detección antigénica cualitativa, no se basa en la secuencia genética del microorganismo.",
    "c": "La inmunocromatografía detecta antígenos concretos con anticuerpos comerciales, pero no identifica bacterias por su secuencia genética.",
    "d": "Correcto: el gen que codifica el ARN ribosomal 16S actúa como un 'DNI' bacteriano, con regiones muy conservadas en los extremos (iguales en todas las bacterias, útiles para diseñar cebadores universales) y una región central hipervariable específica de cada especie; solo sirve para identificar bacterias, no hongos ni virus.",
    "e": "La tinción de Ziehl-Neelsen es una técnica microscópica para detectar micobacterias, no una técnica de secuenciación genética."
  },
  "repetida": false
},

{
  "id": "t1-010",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "Respecto a la identificación mediante secuenciación del ADNr 16S, señale la afirmación correcta",
  "opciones": { "a": "Es una técnica muy específica y rápida, requiere personal especializado en biología molecular, y no permite obtener perfiles de sensibilidad antibiótica", "b": "Requiere personal especializado en biología molecular", "c": "Es un método rápido y eficaz para bacterias difíciles de identificar por otros métodos", "d": "Al no requerir necesariamente un antibiograma asociado, no permite establecer perfiles de sensibilidad a los antibióticos", "e": "Es una técnica muy específica" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Es la respuesta correcta: la secuenciación del 16S rRNA es una técnica muy específica y rápida, que requiere personal especializado en biología molecular, y que —al no requerir cultivar la bacteria de forma completa para el antibiograma— no permite obtener directamente un perfil de sensibilidad antibiótica.",
    "b": "Es cierto que requiere personal cualificado en técnicas de biología molecular para su realización e interpretación, pero es solo una parte de lo que hay que saber sobre esta técnica.",
    "c": "Es cierto que es rápida y eficaz, especialmente útil en bacterias de difícil o lento crecimiento en cultivo convencional, pero hay más afirmaciones correctas sobre esta técnica.",
    "d": "Es cierto que esta técnica identifica la especie por su material genético pero no informa sobre el fenotipo de sensibilidad a antibióticos, que requeriría un antibiograma adicional a partir del aislado, pero no es la única característica relevante.",
    "e": "Es cierto que es una técnica muy específica, ya que se basa en la secuencia génica propia de cada especie, pero no recoge toda la información relevante sobre esta técnica."
  },
  "repetida": true
},

{
  "id": "t1-011",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Cuál de las siguientes técnicas es la más habitual para el diagnóstico rutinario de infecciones víricas en un laboratorio de diagnóstico clínico ordinario?",
  "opciones": { "a": "Microscopía electrónica", "b": "Aislamiento del virus mediante cultivo celular tradicional", "c": "Tinción de auramina-rodamina", "d": "Pruebas serológicas y de detección de antígeno", "e": "Sistema de Shell-vial" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La microscopía electrónica no se emplea con fines diagnósticos rutinarios porque es costosa, lenta y requiere equipos e infraestructura muy especializados.",
    "b": "El cultivo celular tradicional de virus ha sido en gran medida sustituido en la rutina diagnóstica por técnicas comerciales más rápidas y sencillas.",
    "c": "La tinción de auramina-rodamina se utiliza para el diagnóstico de tuberculosis (detección de micobacterias fluorescentes), no para el diagnóstico habitual de infecciones víricas.",
    "d": "Correcto: en la práctica clínica habitual se recurre sobre todo a pruebas serológicas (detección de anticuerpos) y de detección directa de antígeno vírico, por su rapidez, sencillez y bajo coste frente a otras técnicas más laboriosas.",
    "e": "El Shell-vial es una técnica más específica y de uso más restringido (combina cultivo con inmunofluorescencia), no la técnica más habitual del día a día."
  },
  "repetida": true
},

{
  "id": "t1-012",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "El sistema de Shell-vial para el diagnóstico de infecciones víricas se caracteriza porque",
  "opciones": { "a": "Se basa en la amplificación del genoma viral mediante PCR en tiempo real", "b": "Requiere obligatoriamente una biopsia de tejido del paciente como única muestra válida", "c": "Permite ver directamente las partículas víricas al microscopio óptico", "d": "Es una prueba puramente serológica que detecta anticuerpos en el suero del paciente", "e": "Combina el cultivo en una monocapa celular con la detección de antígeno por inmunofluorescencia, acelerando la infección celular mediante centrifugación" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El Shell-vial no se basa en amplificación genética, sino en un cultivo celular acelerado combinado con inmunofluorescencia.",
    "b": "Puede emplearse con distintas muestras clínicas (p. ej. exudado nasal) según el tropismo del virus sospechado, no exclusivamente con biopsias.",
    "c": "El virus en sí no se observa directamente; lo que se visualiza al microscopio de fluorescencia son las células infectadas marcadas con anticuerpos fluorescentes, no las partículas víricas.",
    "d": "No es una prueba serológica: no se emplea suero del paciente para buscar anticuerpos, sino la muestra clínica directa puesta en contacto con células en cultivo.",
    "e": "Correcto: la muestra clínica se centrifuga sobre una monocapa de células comerciales sensibles al virus sospechado, lo que acelera la adsorción y penetración viral, y tras 24-48 h se detectan proteínas virales mediante anticuerpos monoclonales marcados con fluoresceína, es decir, una inmunofluorescencia directa sobre células infectadas."
  },
  "repetida": false
},

{
  "id": "t1-014",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "La observación de adenovirus en células del exudado faríngeo mediante anticuerpos marcados con fluoresceína:",
  "opciones": { "a": "Es una técnica que no requiere ningún tipo de microscopio", "b": "Es una prueba bioquímica", "c": "Debe realizarse en un microscopio de fluorescencia", "d": "Es una inmunofluorescencia indirecta", "e": "Es una prueba serológica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Es incorrecta porque, al ser una técnica de fluorescencia, requiere necesariamente un microscopio de fluorescencia para poder leer el resultado.",
    "b": "No es una prueba bioquímica; se basa en el reconocimiento antígeno-anticuerpo visualizado por fluorescencia, no en reacciones enzimáticas o metabólicas.",
    "c": "Correcto: al emplear anticuerpos marcados con un fluorocromo, la lectura del resultado exige observar la preparación en un microscopio de fluorescencia para poder visualizar la señal emitida.",
    "d": "Es una inmunofluorescencia DIRECTA, no indirecta: se emplea un único anticuerpo marcado directamente con fluoróforo que reconoce el antígeno viral en la célula infectada, sin necesidad de un segundo anticuerpo (anti-anticuerpo).",
    "e": "No es una prueba serológica porque no se busca la presencia de anticuerpos del paciente en su suero, sino la presencia del antígeno viral directamente en las células de la muestra clínica."
  },
  "repetida": true
},

{
  "id": "t1-015",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Cuál de las siguientes es una característica de la técnica de aglutinación directa (por ejemplo, la prueba de la coagulasa con partículas de látex)?",
  "opciones": { "a": "Es una técnica muy sensible pero poco específica", "b": "Es una técnica cualitativa, poco sensible pero bastante específica", "c": "Es una técnica exclusivamente cuantitativa que mide la absorbancia de una reacción coloreada", "d": "Requiere obligatoriamente un microscopio de fluorescencia para su lectura", "e": "Solo puede emplearse para el diagnóstico de infecciones fúngicas" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Es justo al revés: la aglutinación directa es una técnica poco sensible (necesita bastante cantidad de antígeno para dar grumos visibles), aunque bastante específica.",
    "b": "Correcto: los anticuerpos fijados sobre partículas de látex reconocen al antígeno y forman una red visible como grumos; el resultado se interpreta de forma cualitativa (positivo/negativo), con sensibilidad baja pero especificidad relativamente alta.",
    "c": "La aglutinación se lee visualmente por la aparición de grumos, no mide absorbancia como el ELISA; es una técnica cualitativa, no cuantitativa.",
    "d": "El resultado se observa a simple vista sobre un porta (aparición o no de grumos), no requiere microscopio de fluorescencia.",
    "e": "Se emplea de forma amplia para detección de antígenos bacterianos (como la coagulasa de S. aureus) y de otros microorganismos, no está restringida a hongos."
  },
  "repetida": false
},

{
  "id": "t1-017",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "En el ELISA indirecto, ¿qué está fijado inicialmente en los pocillos de la placa?",
  "opciones": { "a": "El antígeno frente al que se quiere detectar la presencia de anticuerpos en el suero del paciente", "b": "Anticuerpos específicos marcados con un fluorocromo", "c": "Anticuerpos anti-anticuerpo marcados con un isótopo radiactivo", "d": "Partículas de látex recubiertas de anticuerpos", "e": "El suero completo del paciente sin diluir" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en el ELISA indirecto los pocillos contienen el antígeno fijado; se añade el suero del paciente y, si existen anticuerpos específicos, se unirán a ese antígeno, y posteriormente se detectan con un anti-anticuerpo marcado con enzima.",
    "b": "En el ELISA se emplean anticuerpos marcados con un enzima (no con un fluorocromo, eso sería inmunofluorescencia), y además no son lo que se fija inicialmente en el pocillo.",
    "c": "El ELISA no emplea marcaje radiactivo, sino enzimático (produce un cambio de color con un sustrato).",
    "d": "Las partículas de látex recubiertas de anticuerpo corresponden a la técnica de aglutinación, no al ELISA.",
    "e": "El suero del paciente se añade después, en un paso posterior, no es lo que recubre inicialmente el pocillo."
  },
  "repetida": false
},

{
  "id": "t1-018",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Qué diferencia principal existe entre la inmunofluorescencia indirecta (IFI) y la inmunofluorescencia directa (IFD)?",
  "opciones": { "a": "La IFD siempre necesita dos anticuerpos y la IFI solo necesita uno", "b": "La IFI se emplea únicamente para diagnosticar tuberculosis", "c": "La IFD detecta antígeno en la muestra clínica del paciente con un único anticuerpo marcado, y la IFI detecta anticuerpos del suero del paciente empleando un anticuerpo secundario marcado", "d": "La IFD detecta anticuerpos del paciente sobre un antígeno fijado en un porta, y la IFI detecta antígenos directamente sobre la muestra clínica", "e": "No existe ninguna diferencia real entre ambas técnicas, solo cambia el nombre" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Está invertido: la IFD necesita un único anticuerpo (el primario, ya marcado) y la IFI necesita dos (el del paciente y el secundario marcado).",
    "b": "La IFI se emplea en el diagnóstico de múltiples infecciones (p. ej. sífilis con FTA-ABS, mononucleosis), no está limitada a la tuberculosis.",
    "c": "Correcto: en la IFD la muestra del paciente contiene el antígeno, que se detecta con un único anticuerpo primario ya marcado con fluorocromo; en la IFI el porta contiene el antígeno de referencia, se añade el suero del paciente (que aportará el anticuerpo si existe) y se revela con un anticuerpo secundario (anti-anticuerpo) marcado con fluorocromo.",
    "d": "Está invertido: es la IFD la que se realiza sobre la muestra clínica directa buscando antígeno, mientras que la IFI parte del suero del paciente buscando anticuerpos frente a un antígeno fijado en el porta.",
    "e": "Sí existe una diferencia real y relevante: el tipo de muestra (clínica vs. suero), lo que se detecta (antígeno vs. anticuerpo) y el número de anticuerpos empleados en el proceso (uno vs. dos) son distintos entre ambas técnicas."
  },
  "repetida": false
},

{
  "id": "t1-019",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "La técnica de diagnóstico por inmunocromatografía directa (por ejemplo, un test rápido de antígeno) es una prueba de:",
  "opciones": { "a": "Detección de anticuerpos exclusivamente", "b": "Una técnica que se emplea únicamente para el diagnóstico de infecciones fúngicas", "c": "Detección de antígenos, cualitativa, en la que la aparición de dos líneas coloreadas (control y reactiva) indica un resultado positivo", "d": "Detección de antígenos que es positiva solo cuando se observa fluorescencia", "e": "Cuantificación exacta de la carga microbiana presente en la muestra" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La inmunocromatografía DIRECTA detecta antígenos, no anticuerpos; existe una variante indirecta (lateral flow para anticuerpos) que sí detecta IgM/IgG, pero no es lo que describe esta pregunta sobre la técnica directa.",
    "b": "Se emplea ampliamente para bacterias (S. pyogenes, neumococo) y virus (SARS-CoV-2, gripe), no está restringida a hongos.",
    "c": "Correcto: en la inmunocromatografía de flujo lateral la muestra migra por capilaridad sobre una tira de nitrocelulosa; si el antígeno buscado está presente, se une a un conjugado y se detiene en la línea reactiva coloreada, mientras que la línea de control (anti-anticuerpo del conejo) debe aparecer siempre para validar la prueba; es una técnica rápida, sensible, específica y cualitativa.",
    "d": "El resultado se visualiza como líneas coloreadas (con un conjugado cromógeno), no mediante fluorescencia, por lo que no requiere microscopio de fluorescencia.",
    "e": "Es una técnica cualitativa (da un resultado positivo o negativo), no permite cuantificar exactamente la cantidad de antígeno presente."
  },
  "repetida": true
},

{
  "id": "t1-020",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "La técnica de la PCR (reacción en cadena de la polimerasa) convencional:",
  "opciones": { "a": "Es una prueba de detección de antígeno", "b": "Sirve para amplificar anticuerpos presentes en el paciente", "c": "Permite detectar una proteína compuesta radiactiva", "d": "Permite la detección directa de un fragmento específico de una proteína bacteriana", "e": "Permite amplificar un fragmento específico de material genético (ADN o ARN retrotranscrito) del microorganismo" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La detección de antígeno es una técnica distinta (inmunocromatografía, ELISA, aglutinación); la PCR se basa en la detección/amplificación de secuencias de ácidos nucleicos.",
    "b": "La PCR trabaja sobre ácidos nucleicos (ADN o ARN), nunca sobre anticuerpos, que son proteínas del sistema inmune del paciente.",
    "c": "La PCR no emplea marcaje radiactivo ni trabaja con proteínas; su fundamento es la replicación in vitro de fragmentos de ADN.",
    "d": "La PCR detecta secuencias de ácidos nucleicos, no fragmentos de proteínas bacterianas; eso correspondería a técnicas proteómicas como el MALDI-TOF.",
    "e": "Correcto: la PCR permite replicar (amplificar) in vitro un fragmento específico de ADN característico del microorganismo, empleando cebadores específicos y la enzima Taq-polimerasa; para detectar ARN es necesario un paso previo de retrotranscripción (RT-PCR)."
  },
  "repetida": true
},

{
  "id": "t1-021",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "En la primera etapa de cada uno de los ciclos de la PCR se produce:",
  "opciones": { "a": "La hibridación de dos moléculas de ADN de cadena sencilla para formar una doble hélice de ADN", "b": "La desnaturalización de las dos hebras de ADN, separándolas mediante calor a 94ºC", "c": "La elongación de la nueva cadena mediante la Taq-polimerasa", "d": "La hibridación de una molécula de ADN con otra de ARN", "e": "La unión de los primers a sus secuencias complementarias" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Esto describiría el proceso inverso (renaturalización), que no forma parte de los pasos habituales del ciclo de PCR.",
    "b": "Correcto: la primera etapa de cada ciclo es la desnaturalización, en la que se calienta la muestra a unos 94ºC durante aproximadamente 1 minuto para separar las dos hebras de ADN molde.",
    "c": "La elongación mediante la Taq-polimerasa es la tercera y última etapa de cada ciclo, que ocurre a 72ºC, después de la desnaturalización y la hibridación de los primers.",
    "d": "La PCR trabaja con ADN de doble cadena; no se produce hibridación de ADN con ARN durante el ciclo (eso ocurriría en la retrotranscripción previa si se parte de ARN, un paso anterior al ciclo de PCR en sí).",
    "e": "La unión de los primers (hibridación o anillamiento) es la segunda etapa del ciclo, que ocurre tras la desnaturalización, cuando la temperatura desciende a unos 55ºC."
  },
  "repetida": true
},

{
  "id": "t1-022",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Cuál de los siguientes reactivos es el que hace específica a una reacción de PCR frente a un microorganismo concreto?",
  "opciones": { "a": "Los dNTPs", "b": "La Taq-polimerasa", "c": "La solución tampón (buffer)", "d": "Los oligonucleótidos, primers o cebadores", "e": "Los anticuerpos frente a las regiones específicas del microorganismo" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Los dNTPs son los nucleótidos que se van incorporando a la nueva cadena; son iguales en cualquier reacción de PCR y no aportan especificidad frente a un microorganismo concreto.",
    "b": "La Taq-polimerasa es la enzima que sintetiza la nueva hebra de ADN, pero es la misma en cualquier PCR, no aporta especificidad frente a un microorganismo en concreto.",
    "c": "El tampón y el cloruro de magnesio optimizan la actividad de la Taq-polimerasa, pero no determinan la especificidad de la reacción frente a un microorganismo concreto.",
    "d": "Correcto: los primers son fragmentos pequeños de ADN (15-30 nucleótidos) diseñados como secuencia complementaria específica de la región del genoma del microorganismo que se quiere detectar; son ellos los que delimitan y confieren la especificidad de la reacción.",
    "e": "La PCR no emplea anticuerpos en ningún paso; eso correspondería a técnicas inmunológicas, no moleculares."
  },
  "repetida": false
},

{
  "id": "t1-023",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "La PCR en tiempo real (qPCR), a diferencia de la PCR convencional, se caracteriza principalmente porque:",
  "opciones": { "a": "Solo puede emplearse para detectar hongos, nunca bacterias ni virus", "b": "No necesita ningún tipo de control positivo ni negativo", "c": "Permite cuantificar el producto de amplificación en tiempo real gracias a una sonda marcada con un fluoróforo (reporter) y un quencher, lo que la hace útil para medir la carga viral", "d": "No requiere cebadores específicos del microorganismo", "e": "Es menos específica que la PCR convencional porque no emplea primers" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La qPCR se emplea igualmente para bacterias, virus y hongos; no está restringida a ningún grupo taxonómico concreto.",
    "b": "Al igual que la PCR convencional, la qPCR requiere controles positivos y negativos para poder validar el resultado obtenido.",
    "c": "Correcto: la qPCR añade una sonda con un fluoróforo (reporter) en un extremo y un quencher en el otro; cuando la Taq-polimerasa avanza y rompe la sonda por su actividad exonucleasa, se libera el reporter y emite fluorescencia proporcional a la cantidad de material genético amplificado, lo que permite cuantificar en tiempo real (por ejemplo, la carga viral).",
    "d": "La qPCR emplea los mismos cebadores específicos que la PCR convencional; la diferencia está en la incorporación de una sonda fluorescente adicional.",
    "e": "La qPCR sí emplea primers, exactamente igual que la PCR convencional; de hecho también incorpora una sonda adicional, por lo que no es menos específica, sino igual o más."
  },
  "repetida": false
},

{
  "id": "t1-024",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Qué indica un valor de Ct (umbral de ciclo) muy bajo en una PCR cuantitativa (qPCR)?",
  "opciones": { "a": "Que la muestra estaba contaminada con ADN de otro paciente", "b": "Que la cantidad de material genético de partida en la muestra era muy baja", "c": "Que la reacción de PCR ha fallado por completo", "d": "Que la cantidad de material genético (por ejemplo, carga viral) de partida en la muestra era muy alta", "e": "Que no existe ningún tipo de relación entre el Ct y la cantidad de ADN de partida" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Una contaminación se sospecharía sobre todo si el control negativo de la reacción (sin ADN molde) diera positivo, no simplemente por observar un Ct bajo en la muestra del paciente.",
    "b": "Es justo lo contrario: cuanto menos material genético de partida, más ciclos son necesarios para alcanzar el umbral de detección, por lo que el Ct sería alto, no bajo.",
    "c": "Un Ct bajo no indica fallo de la reacción; al contrario, indica una amplificación temprana y eficiente por la abundancia inicial de la diana.",
    "d": "Correcto: el Ct es el número de ciclos necesarios para detectar fluorescencia por encima de un umbral; si se detecta pronto (Ct bajo, por ejemplo en el ciclo 2) es porque había mucho material genético desde el inicio (alta carga viral), mientras que un Ct alto indica poca cantidad de partida.",
    "e": "Existe una relación inversa clara y bien establecida entre el Ct y la cantidad de ADN/ARN de partida, que es precisamente el fundamento de la cuantificación en la qPCR."
  },
  "repetida": false
},

{
  "id": "t1-025",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "Entre otras aplicaciones, el Western-blot se utiliza como prueba confirmatoria de la infección por el virus del VIH. Indique cuál de las siguientes afirmaciones sobre el método es INCORRECTA",
  "opciones": { "a": "Los anticuerpos anti-VIH, si existen, se ligan a las proteínas virales contenidas en la tira", "b": "Los anticuerpos ligados se visualizan con un conjugado (anti-inmunoglobulina que porta un enzima) y posterior observación de líneas de color en la tira", "c": "Se transfieren las proteínas separadas por electroforesis del gel de poliacrilamida a tiras de nitrocelulosa que se incuban con el suero del individuo", "d": "Los anticuerpos ligados se visualizan con el microscopio de fluorescencia", "e": "Las proteínas componentes del virus VIH se separan por electroforesis en gel de poliacrilamida" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Es correcta: si el suero contiene anticuerpos específicos frente al VIH, estos se unirán a las proteínas virales fijadas en la tira.",
    "b": "Es correcta: describe exactamente el método real de revelado del Western-blot, mediante un conjugado con enzima y la aparición de bandas coloreadas (se consideran positivas cuando aparecen 3 o más bandas).",
    "c": "Es correcta: tras la electroforesis, las proteínas se transfieren a una tira de nitrocelulosa que después se incuba con el suero diluido del paciente.",
    "d": "Es la afirmación INCORRECTA (y por tanto la respuesta a marcar): los anticuerpos ligados NO se visualizan con microscopio de fluorescencia, sino mediante un conjugado enzimático (anti-inmunoglobulina humana marcada con un enzima) que, tras revelado, produce bandas de color visibles a simple vista en la tira.",
    "e": "Es correcta: las proteínas víricas purificadas se separan por electroforesis en gel de poliacrilamida según su peso molecular, un primer paso necesario del Western-blot."
  },
  "repetida": true
},

{
  "id": "t1-026",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "Señale la afirmación verdadera entre las siguientes:",
  "opciones": { "a": "El MALDI-TOF permite detectar anticuerpos frente a un virus", "b": "Es posible la visualización de células infectadas por virus mediante inmunofluorescencia directa", "c": "La técnica de secuenciación del 16S rRNA sirve para identificar bacterias, virus y hongos por igual", "d": "La PCR convencional permite conocer la carga viral de una muestra", "e": "En el ELISA indirecto los pocillos están recubiertos de anticuerpo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El MALDI-TOF analiza perfiles de proteínas del propio microorganismo (bacteria u hongo) en cultivo puro; no detecta anticuerpos del paciente ni se emplea de forma rutinaria para virus.",
    "b": "Correcto: mediante inmunofluorescencia directa, empleando anticuerpos marcados con fluorocromo frente a antígenos virales, se pueden visualizar al microscopio de fluorescencia las células de la muestra que están infectadas por el virus (no se ve el virus en sí, sino la célula marcada).",
    "c": "El 16S rRNA es un gen exclusivamente bacteriano; esta técnica solo sirve para identificar bacterias, no virus ni hongos.",
    "d": "La PCR convencional es una técnica cualitativa (indica presencia o ausencia de material genético), no cuantitativa; para conocer la carga viral se necesita la PCR en tiempo real (qPCR).",
    "e": "Es al revés: en el ELISA indirecto los pocillos están recubiertos de ANTÍGENO, y es el suero del paciente el que aporta el anticuerpo, si existe."
  },
  "repetida": true
},

{
  "id": "t1-027",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "Sobre el diagnóstico microscópico directo de las infecciones fúngicas, señale la respuesta correcta",
  "opciones": { "a": "El examen microscópico directo no suele emplearse porque no aporta gran información", "b": "Los hongos levaduriformes se pueden cultivar en Agar-Sabouraud", "c": "Las técnicas proteómicas como el MALDI-TOF no se pueden emplear para hongos", "d": "Los dermatofitos crecen muy rápido, dando colonias visibles en 24 horas", "e": "Las características macroscópicas y microscópicas de los hongos filamentosos crecidos en cultivo no permiten su identificación" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Es incorrecta: el examen microscópico directo (con KOH al 30%, azul de lactofenol o blanco de calcoflúor) sí aporta información valiosa, permitiendo observar levaduras, hifas y esporas características.",
    "b": "Correcto: el medio de Sabouraud es el medio de cultivo más utilizado tanto para hongos levaduriformes como filamentosos; contiene cloranfenicol para inhibir contaminación bacteriana.",
    "c": "Es incorrecta: las técnicas proteómicas como el MALDI-TOF sí pueden emplearse también para la identificación de hongos, analizando su perfil proteico.",
    "d": "Es incorrecta: los dermatofitos son de crecimiento lento, requiriendo entre 6 y 15 días de incubación, no 24 horas.",
    "e": "Es incorrecta: precisamente el estudio de las características macroscópicas (aspecto, pigmentación, velocidad de crecimiento) y microscópicas (hifas, esporas) de los hongos filamentosos es la base fundamental para su identificación."
  },
  "repetida": true
},

{
  "id": "t1-028",
  "tema": "Diagnóstico de laboratorio de las enfermedades infecciosas",
  "pregunta": "¿Qué prueba de identificación resulta característica de Candida albicans frente al resto de especies del género Candida?",
  "opciones": { "a": "La sensibilidad al disco de optoquina", "b": "El crecimiento en medio de Löwenstein-Jensen", "c": "La producción de la toxina exfoliatina", "d": "La prueba del CAMP", "e": "La prueba de filamentación, ya que C. albicans es la única especie de Candida capaz de formar filamentos (pseudohifas) en presencia de suero" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La sensibilidad a la optoquina se emplea para diferenciar Streptococcus pneumoniae de otros estreptococos alfa-hemolíticos, no para identificar Candida.",
    "b": "El medio de Löwenstein-Jensen es específico para el cultivo de micobacterias, no tiene relación con la identificación de Candida.",
    "c": "La toxina exfoliatina es producida por cepas de Staphylococcus aureus (síndrome de la piel escaldada), no tiene relación con la identificación de Candida.",
    "d": "La prueba de CAMP se emplea para identificar Streptococcus agalactiae, no está relacionada con la identificación de levaduras.",
    "e": "Correcto: la prueba de filamentación (tubo germinativo) se basa en que C. albicans, al incubarse en presencia de suero, es la única especie del género capaz de generar filamentos o pseudohifas, lo que permite diferenciarla rápidamente de otras Candida."
  },
  "repetida": false
},

{
  "id": "t2-001",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "¿Cuál es la etiología más frecuente de la faringoamigdalitis en general, considerando conjuntamente niños y adultos?",
  "opciones": { "a": "Fúngica por Candida albicans en la mayoría de los casos", "b": "Por Mycoplasma pneumoniae en más de la mitad de los casos", "c": "Bacteriana por Streptococcus pyogenes en más del 90% de los casos", "d": "Vírica, siendo responsable de aproximadamente el 70-90% de los casos", "e": "Parasitaria en la mayoría de los casos en países desarrollados" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La candidiasis orofaríngea es una causa poco frecuente de faringitis, típica de pacientes inmunodeprimidos o con factores predisponentes, no la etiología habitual.",
    "b": "Mycoplasma pneumoniae se asocia sobre todo a neumonía atípica, no es la causa principal de faringoamigdalitis.",
    "c": "S. pyogenes es la causa bacteriana más importante, pero solo representa una minoría del total de los casos de faringoamigdalitis (10-30% según la edad), no la mayoría.",
    "d": "Correcto: la mayoría de las faringoamigdalitis (70-90%) son de etiología vírica (virus de la gripe, VRS, adenovirus, etc.), siendo la causa bacteriana por Streptococcus pyogenes bastante menos frecuente (10-15% en adultos, 15-30% en niños).",
    "e": "Las causas parasitarias de faringoamigdalitis son excepcionales y no representan la etiología habitual en ningún contexto."
  },
  "repetida": false
},

{
  "id": "t2-002",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "Al plantear el diagnóstico de la faringoamigdalitis estreptocócica, debe tenerse en cuenta que el microorganismo que la produce:",
  "opciones": { "a": "Es alfa-hemolítico en agar sangre", "b": "Es un coco Gram positivo, catalasa positivo, resistente a la bacitracina", "c": "Es un coco Gram positivo, catalasa negativo, beta-hemolítico y sensible a la bacitracina", "d": "No crece en agar sangre", "e": "Es un bacilo Gram negativo que requiere factores V y X para crecer" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "S. pyogenes es beta-hemolítico (hemólisis total, halo transparente), no alfa-hemolítico; el patrón alfa-hemolítico es típico de S. pneumoniae y los estreptococos del grupo viridans.",
    "b": "Streptococcus pyogenes es catalasa NEGATIVO (como todos los estreptococos, a diferencia de los estafilococos) y es SENSIBLE, no resistente, a la bacitracina; esta es una de las pruebas clave para diferenciarlo de otros estreptococos beta-hemolíticos.",
    "c": "Correcto: S. pyogenes es un coco Gram positivo que se dispone en cadenas, catalasa negativo, produce beta-hemólisis total en agar sangre (halo transparente) y es sensible al disco de bacitracina, característica que se usa en el laboratorio para identificarlo presuntivamente.",
    "d": "S. pyogenes crece perfectamente en agar sangre, de hecho el agar sangre es el medio de elección para su cultivo, donde se observa su característica beta-hemólisis.",
    "e": "El requerimiento de factores V y X es característico de Haemophilus influenzae, no de Streptococcus pyogenes."
  },
  "repetida": true
},

{
  "id": "t2-003",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "¿Cuál es la muestra clínica y la técnica de referencia para el diagnóstico rápido de la faringoamigdalitis estreptocócica?",
  "opciones": { "a": "Líquido cefalorraquídeo obtenido por punción lumbar", "b": "Exudado faríngeo, evitando el contacto con la saliva, procesado mediante test rápido de inmunocromatografía para antígeno de S. pyogenes", "c": "Muestra de orina para detección de antígeno", "d": "Muestra de sangre para hemocultivo exclusivamente", "e": "Biopsia amigdalar obligatoria en todos los casos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El LCR es la muestra para el diagnóstico de meningitis, no tiene relación con el diagnóstico de la faringoamigdalitis.",
    "b": "Correcto: la muestra es el exudado faríngeo, tomado evitando el contacto con la saliva y las zonas más anteriores de la boca para minimizar la contaminación con flora oral saprofita; el test rápido de detección de antígeno de S. pyogenes por inmunocromatografía es muy específico aunque de sensibilidad limitada, por lo que si es negativo conviene confirmar con cultivo.",
    "c": "La detección de antígeno en orina se emplea para otras infecciones (neumococo, Legionella), no para la faringoamigdalitis estreptocócica.",
    "d": "El hemocultivo no es la muestra habitual para el diagnóstico de la faringoamigdalitis, que es una infección localizada en la faringe, no sistémica.",
    "e": "La biopsia amigdalar no es necesaria de rutina; el exudado faríngeo con hisopo es suficiente y mucho menos invasivo."
  },
  "repetida": false
},

{
  "id": "t2-004",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "Ante la sospecha de una mononucleosis infecciosa, ¿qué prueba de laboratorio sería la más adecuada para confirmarla?",
  "opciones": { "a": "Un test de aglutinación frente a rinovirus", "b": "Una inmunocromatografía para detectar antígeno de Mycoplasma", "c": "Un ELISA para la detección de IgM contra el antígeno de la cápside (VCA) del virus de Epstein-Barr", "d": "Un cultivo de la muestra en agar McConkey", "e": "Una tinción de Ziehl-Neelsen del esputo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El rinovirus es el agente del catarro común, no está implicado en la mononucleosis infecciosa, que está causada por el virus de Epstein-Barr.",
    "b": "Mycoplasma no es el agente causal de la mononucleosis infecciosa (causada por el virus de Epstein-Barr), por lo que buscar su antígeno no aportaría el diagnóstico correcto.",
    "c": "Correcto: la mononucleosis infecciosa está causada por el virus de Epstein-Barr (VEB), y el diagnóstico serológico se basa en la detección de IgM frente al antígeno de la cápside viral (VCA) mediante IFI o ELISA, indicativa de infección aguda/reciente; también puede emplearse el monospot test (detección de anticuerpos heterófilos).",
    "d": "El agar McConkey es un medio selectivo para bacterias Gram negativas (enterobacterias); el virus de Epstein-Barr no se cultiva en medios bacterianos convencionales.",
    "e": "La tinción de Ziehl-Neelsen se emplea para el diagnóstico de tuberculosis, no tiene ninguna relación con la mononucleosis infecciosa."
  },
  "repetida": true
},

{
  "id": "t2-005",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "El monospot test, empleado en el diagnóstico de la mononucleosis infecciosa, se basa en:",
  "opciones": { "a": "La amplificación por PCR del genoma del virus de Epstein-Barr", "b": "La detección de anticuerpos heterófilos del paciente mediante hemaglutinación de eritrocitos equinos, anticuerpos inespecíficos que se producen en respuesta a la infección por el virus de Epstein-Barr", "c": "La tinción de Gram del exudado faríngeo", "d": "La detección específica y exclusiva de anticuerpos anti-VCA de tipo IgG", "e": "El cultivo del virus en medio Sabouraud" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El monospot test no se basa en amplificación de ácidos nucleicos, sino en una reacción de hemaglutinación con eritrocitos de otra especie.",
    "b": "Correcto: el monospot test es una prueba de hemaglutinación que emplea eritrocitos equinos como sustrato para detectar anticuerpos heterófilos (no específicos del virus, sino inducidos de forma inespecífica por la infección) producidos por el sistema inmune humano en respuesta a la infección por el virus de Epstein-Barr; estos mismos anticuerpos heterófilos pueden aparecer también en otras infecciones, como la producida por citomegalovirus.",
    "c": "La tinción de Gram sirve para visualizar bacterias, no tiene ninguna aplicación en el diagnóstico serológico de la mononucleosis.",
    "d": "El monospot test detecta anticuerpos heterófilos inespecíficos, no anticuerpos anti-VCA específicos del virus (esa sería una prueba distinta, más específica).",
    "e": "Sabouraud es un medio de cultivo para hongos; el virus de Epstein-Barr no se cultiva mediante este método."
  },
  "repetida": false
},

{
  "id": "t2-006",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "El laringotraqueobronquitis o crup se caracteriza por:",
  "opciones": { "a": "Ser una infección exclusiva de adultos mayores de 65 años", "b": "Ser indistinguible clínicamente de la epiglotitis en todos los casos", "c": "Estar producido casi exclusivamente por el virus parainfluenza tipo 1 y afectar principalmente a niños de 3 meses a 5 años, con tos 'perruna' característica", "d": "Estar producida siempre por Streptococcus pyogenes", "e": "Requerir siempre diagnóstico por PCR de exudado faríngeo antes de iniciar tratamiento" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Es exactamente lo contrario: el crup es una entidad exclusiva de la infancia, entre los 3 meses y los 5 años, no afecta a adultos mayores.",
    "b": "Aunque ambas pueden causar dificultad respiratoria en niños, tienen características clínicas diferenciadoras (etiología vírica y tos perruna en el crup frente a etiología bacteriana grave y riesgo de asfixia súbita en la epiglotitis por H. influenzae tipo b).",
    "c": "Correcto: el crup está producido casi exclusivamente por agentes víricos, sobre todo el virus parainfluenza tipo 1 (hasta el 75% de los casos), afecta a niños entre 3 meses y 5 años, y se caracteriza por tos 'perruna' y dificultad respiratoria por la inflamación alrededor de las cuerdas vocales; el diagnóstico suele ser clínico, basado en la descripción de los síntomas y la exploración física.",
    "d": "El crup es producido fundamentalmente por virus (parainfluenza tipo 1), no por bacterias como S. pyogenes.",
    "e": "El diagnóstico del crup es habitualmente clínico, basado en los síntomas descritos por los padres y la exploración física, sin necesidad de PCR de rutina."
  },
  "repetida": false
},

{
  "id": "t2-007",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "La epiglotitis aguda, que puede producir un cuadro grave de asfixia por obstrucción laríngea, está causada generalmente por:",
  "opciones": { "a": "Haemophilus influenzae tipo B, un cocobacilo Gram negativo", "b": "Mycoplasma pneumoniae", "c": "Corynebacterium diphtheriae", "d": "Bordetella pertussis", "e": "Streptococcus pneumoniae" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la epiglotitis aguda está causada generalmente por Haemophilus influenzae tipo B, un cocobacilo Gram negativo; es hoy en día muy poco frecuente gracias a la vacunación sistemática frente a Hib.",
    "b": "Mycoplasma pneumoniae se asocia principalmente a neumonía atípica, no a epiglotitis.",
    "c": "Corynebacterium diphtheriae es el agente causal de la difteria, que también puede comprometer la vía aérea por edema y pseudomembranas, pero es una entidad clínica distinta de la epiglotitis clásica.",
    "d": "Bordetella pertussis es el agente de la tosferina, no de la epiglotitis.",
    "e": "S. pneumoniae es sobre todo agente de neumonía, otitis media y sinusitis, no la causa típica de la epiglotitis aguda."
  },
  "repetida": false
},

{
  "id": "t2-008",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "La difteria es una infección toxigénica grave producida por Corynebacterium diphtheriae. ¿Cuál es el mecanismo por el que produce daño al paciente?",
  "opciones": { "a": "Por hipersensibilidad tipo I frente a un antígeno bacteriano", "b": "Por la invasión masiva de la bacteria en el torrente sanguíneo", "c": "Por reacción cruzada con el sistema inmune del huésped exclusivamente", "d": "Por la formación de biofilm en las válvulas cardiacas", "e": "Por la producción de una toxina responsable del daño, capaz de producir pseudomembranas, miocarditis y neuritis, aunque la bacteria permanezca localizada en la faringe" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El mecanismo no es una hipersensibilidad inmunológica tipo I, sino la acción tóxica directa de la toxina diftérica sobre distintos tejidos.",
    "b": "La causa de la enfermedad no es la invasión bacteriana generalizada, sino la acción de la toxina diftérica que se disemina desde el foco faríngeo local.",
    "c": "No se trata de una reacción de reactividad cruzada como en la fiebre reumática, sino de la acción directa y a distancia de una exotoxina bacteriana.",
    "d": "La difteria no se caracteriza por formación de biofilm en válvulas cardiacas; ese mecanismo es propio de la endocarditis infecciosa.",
    "e": "Correcto: la causa de la enfermedad es la toxina que produce la bacteria, la cual puede formar pseudomembranas en la faringe/laringe (con riesgo de obstrucción de la vía aérea) y diseminarse produciendo miocarditis y neuritis, mientras que la propia bacteria permanece generalmente localizada en el foco faríngeo."
  },
  "repetida": false
},

{
  "id": "t2-009",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "¿Cuál es el método diagnóstico de elección para la tosferina (Bordetella pertussis)?",
  "opciones": { "a": "El cultivo convencional en agar sangre, por su alta sensibilidad", "b": "La PCR sobre una muestra de exudado nasofaríngeo, ya que el cultivo es complicado y las técnicas de detección de anticuerpos tienen poca sensibilidad", "c": "La detección de antígeno de neumococo en orina", "d": "La tinción de Ziehl-Neelsen del esputo", "e": "El test de la bacitracina" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El cultivo de Bordetella pertussis es complicado y de baja sensibilidad, por lo que no es la técnica habitual de elección en la práctica clínica.",
    "b": "Correcto: dado que el cultivo es difícil y las pruebas serológicas tienen poca sensibilidad, la PCR sobre exudado nasofaríngeo es la técnica de elección para el diagnóstico de la tosferina.",
    "c": "La detección de antígeno de neumococo en orina se utiliza en el diagnóstico de la neumonía neumocócica, no en el de la tosferina.",
    "d": "La tinción de Ziehl-Neelsen se emplea para micobacterias, no tiene relación con el diagnóstico de Bordetella pertussis.",
    "e": "El test de la bacitracina se utiliza para identificar Streptococcus pyogenes, no Bordetella pertussis."
  },
  "repetida": false
},

{
  "id": "t2-010",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "¿Cuáles son los tres agentes etiológicos principales de la sinusitis aguda y la otitis media aguda?",
  "opciones": { "a": "Streptococcus pneumoniae, Haemophilus influenzae y Moraxella catarrhalis", "b": "Streptococcus pyogenes exclusivamente", "c": "Escherichia coli, Klebsiella pneumoniae y Proteus mirabilis", "d": "Mycobacterium tuberculosis, Legionella pneumophila y Coxiella burnetii", "e": "Neisseria gonorrhoeae, Chlamydia trachomatis y Treponema pallidum" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: tanto la sinusitis aguda como la otitis media aguda tienen como principales agentes etiológicos a Streptococcus pneumoniae (diplococo Gram positivo), Haemophilus influenzae (cocobacilo Gram negativo) y Moraxella catarrhalis (diplococo Gram negativo).",
    "b": "S. pyogenes no es el agente principal de la sinusitis ni de la otitis media; esa asociación (frecuente en algunos exámenes tipo test) es una afirmación incorrecta, ya que los agentes principales son S. pneumoniae, H. influenzae y M. catarrhalis.",
    "c": "Estas son enterobacterias típicas de infecciones urinarias o gastrointestinales, no son los agentes habituales de sinusitis u otitis media.",
    "d": "Estos microorganismos producen tuberculosis, legionelosis o fiebre Q, no son la causa habitual de sinusitis u otitis media.",
    "e": "Estos son los agentes de infecciones de transmisión sexual (gonorrea, clamidia, sífilis), no tienen relación con sinusitis ni otitis media."
  },
  "repetida": true
},

{
  "id": "t2-011",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "En un exudado purulento de seno maxilar se observa un diplococo Gram positivo. ¿De qué bacteria se trata con mayor probabilidad?",
  "opciones": { "a": "Streptococcus pneumoniae", "b": "Pseudomonas aeruginosa", "c": "Haemophilus influenzae", "d": "Moraxella catarrhalis", "e": "Neisseria meningitidis" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: Streptococcus pneumoniae es un diplococo Gram positivo (lanceolado), y su observación en un exudado sinusal purulento es muy sugestiva de sinusitis neumocócica.",
    "b": "Pseudomonas aeruginosa es un bacilo Gram negativo, morfológicamente muy distinto de un diplococo Gram positivo.",
    "c": "Haemophilus influenzae es un cocobacilo Gram NEGATIVO, no un diplococo Gram positivo.",
    "d": "Moraxella catarrhalis es un diplococo Gram NEGATIVO, no Gram positivo.",
    "e": "Neisseria meningitidis es un diplococo Gram NEGATIVO (con morfología de 'grano de café'), no Gram positivo."
  },
  "repetida": false
},

{
  "id": "t2-012",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "En los niños, la otitis media aguda es tan frecuente en parte porque:",
  "opciones": { "a": "Los niños tienen una cantidad de moco mucho mayor que los adultos", "b": "El oído medio de los niños carece por completo de mucosa respiratoria", "c": "La otitis media en niños siempre es de origen fúngico", "d": "Los niños no tienen tubo de Eustaquio", "e": "El tubo de Eustaquio es más corto, más horizontal y está a nivel similar al oído medio, lo que facilita que la infección de la nasofaringe ascienda con mayor facilidad" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "No es que tengan mucha más cantidad de moco en términos absolutos, sino que ese moco se concentra en un espacio anatómico mucho más pequeño y desfavorable, lo que facilita la progresión de la infección.",
    "b": "El oído medio está revestido de mucosa respiratoria tanto en niños como en adultos; la diferencia está en la anatomía del tubo de Eustaquio, no en la ausencia de mucosa.",
    "c": "La otitis media aguda está producida principalmente por bacterias (S. pneumoniae, H. influenzae, M. catarrhalis), no por hongos.",
    "d": "Todos los seres humanos, niños y adultos, tienen tubo de Eustaquio; lo que cambia con la edad es su longitud, inclinación y calibre.",
    "e": "Correcto: el tubo de Eustaquio comunica la nasofaringe con el oído medio; en los niños es proporcionalmente más corto y horizontal, lo que facilita que las secreciones y bacterias de una infección respiratoria alta asciendan con más facilidad hasta el oído medio que en los adultos."
  },
  "repetida": false
},

{
  "id": "t2-013",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "Ante una otitis media aguda, ¿en qué situaciones está indicado el estudio microbiológico?",
  "opciones": { "a": "Se recoge únicamente una muestra de sangre para hemocultivo en todos los casos", "b": "El diagnóstico habitualmente es clínico y no requiere estudios microbiológicos, reservándose el cultivo de pus obtenido por timpanocentesis solo para casos graves", "c": "Se debe hacer siempre una PCR de exudado faríngeo", "d": "Siempre es obligatorio realizar un cultivo antes de iniciar cualquier tratamiento", "e": "Nunca está indicado ningún tipo de estudio microbiológico, ni siquiera en casos graves" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El hemocultivo no es la muestra habitual en la otitis media no complicada; se reservaría para sospecha de complicaciones sistémicas, algo poco frecuente.",
    "b": "Correcto: el diagnóstico de la otitis media aguda suele basarse en la clínica (dolor de oído tras un catarro, irritabilidad en bebés) y no requiere habitualmente estudios microbiológicos; en casos graves o de mala evolución se puede recoger pus, si el oído supura o mediante timpanocentesis.",
    "c": "El exudado faríngeo no es la muestra adecuada para el diagnóstico de la otitis media; en los casos que requieren estudio se recoge directamente pus del oído medio.",
    "d": "No es obligatorio realizar cultivo en todos los casos; la mayoría de las otitis medias agudas se diagnostican y tratan de forma clínica.",
    "e": "Sí está indicado el estudio microbiológico en casos graves, de mala evolución o cuando hay supuración, mediante recogida de pus o timpanocentesis."
  },
  "repetida": false
},

{
  "id": "t2-014",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "¿Cuál de las siguientes NO es una infección nosocomial?",
  "opciones": { "a": "Una neumonía en un paciente intubado en la UCI", "b": "Una sinusitis adquirida en la comunidad", "c": "La otitis media y la sinusitis adquiridas en la comunidad, ninguna de las dos son nosocomiales", "d": "Una otitis media adquirida en la comunidad", "e": "Una ITU en un paciente ingresado y sondado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La neumonía asociada a ventilación mecánica en un paciente intubado en la UCI es un ejemplo clásico de infección nosocomial, adquirida durante la asistencia hospitalaria.",
    "b": "Una sinusitis adquirida en la comunidad tampoco es nosocomial por definición, pero de nuevo la opción más completa incluye también la otitis media.",
    "c": "Correcto: tanto la otitis media como la sinusitis, cuando se adquieren en la comunidad (no durante el ingreso hospitalario), son infecciones de adquisición comunitaria y no nosocomiales, a diferencia de la neumonía en un paciente intubado o la ITU en un paciente sondado ingresado, que sí son ejemplos característicos de infección nosocomial.",
    "d": "Una otitis media adquirida en la comunidad, de forma aislada, no es nosocomial, ya que el paciente no la ha adquirido durante un ingreso hospitalario; pero la respuesta más completa recoge también la sinusitis.",
    "e": "La ITU asociada a sondaje en un paciente hospitalizado es la infección nosocomial más frecuente en el ámbito hospitalario, ligada al uso de sondas urinarias."
  },
  "repetida": true
},

{
  "id": "t2-015",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "¿Qué virus es el principal responsable del catarro común (rinitis) en adultos?",
  "opciones": { "a": "El virus de Epstein-Barr", "b": "El virus de la parainfluenza tipo 1", "c": "El virus varicela-zóster", "d": "El virus respiratorio sincitial", "e": "Los rinovirus" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El virus de Epstein-Barr causa la mononucleosis infecciosa, no el catarro común.",
    "b": "El virus parainfluenza tipo 1 está asociado principalmente al crup (laringotraqueobronquitis) en niños, no al catarro común de los adultos.",
    "c": "El virus varicela-zóster produce varicela y herpes zóster, no el catarro común.",
    "d": "El virus respiratorio sincitial es especialmente importante en el catarro común y la bronquiolitis en niños pequeños, pero no es el principal agente en adultos.",
    "e": "Correcto: los rinovirus son los principales agentes implicados en el catarro común en adultos; en niños pueden intervenir además otros muchos tipos de virus."
  },
  "repetida": false
},

{
  "id": "t2-017",
  "tema": "Infecciones del tracto respiratorio superior y estructuras pararrespiratorias",
  "pregunta": "Al cultivar un exudado faríngeo en agar sangre y observar colonias beta-hemolíticas, se realiza una prueba con un disco de bacitracina para confirmar la identificación de Streptococcus pyogenes. ¿Qué resultado se espera si la bacteria es efectivamente S. pyogenes?",
  "opciones": { "a": "La aparición de un precipitado de látex", "b": "Crecimiento normal alrededor del disco, sin ningún halo de inhibición (resistencia)", "c": "Un cambio de color de la placa a color negro", "d": "Inhibición del crecimiento alrededor del disco de bacitracina (sensibilidad)", "e": "Ausencia total de crecimiento en toda la placa" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La aparición de un precipitado de látex correspondería a una prueba de aglutinación, no a la prueba de sensibilidad a la bacitracina.",
    "b": "Un crecimiento sin inhibición indicaría resistencia a la bacitracina, lo cual descartaría que se trate de S. pyogenes, ya que este es característicamente sensible.",
    "c": "El cambio a color negro sería indicativo de producción de H2S, típico de Salmonella en medios entéricos, sin relación con la prueba de la bacitracina en agar sangre.",
    "d": "Correcto: S. pyogenes es sensible a la bacitracina, por lo que alrededor del disco impregnado con este antibiótico no habrá crecimiento bacteriano (halo de inhibición), lo que ayuda a diferenciarlo presuntivamente de otros estreptococos beta-hemolíticos.",
    "e": "No se espera ausencia total de crecimiento en toda la placa, sino solo inhibición localizada alrededor del disco de antibiótico, mientras el resto de la placa muestra crecimiento normal (césped bacteriano)."
  },
  "repetida": false
},

{
  "id": "t3-001",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "En un paciente con neumonía, la radiografía de tórax muestra la condensación de un único lóbulo pulmonar (afectación unilateral). ¿Qué tipo de neumonía sugiere este hallazgo?",
  "opciones": { "a": "Una neumonía por Chlamydophila pneumoniae", "b": "Una neumonía vírica por virus de la gripe", "c": "Una neumonía atípica por Mycoplasma pneumoniae", "d": "Una neumonía por Coxiella burnetii", "e": "Una neumonía típica, generalmente por Streptococcus pneumoniae" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Chlamydophila pneumoniae produce típicamente neumonía atípica, con infiltrados bilaterales, no condensación lobar unilateral.",
    "b": "Las neumonías víricas suelen presentar un patrón más difuso y bilateral, similar al de las atípicas, no una condensación lobar única.",
    "c": "La neumonía atípica por Mycoplasma suele mostrar infiltrados bilaterales, no una condensación lobar unilateral.",
    "d": "Coxiella burnetii (fiebre Q) también produce un cuadro de neumonía atípica con infiltrados más difusos, no la condensación lobar característica de la neumonía típica.",
    "e": "Correcto: la neumonía neumocócica típica suele presentarse radiológicamente como una condensación localizada y unilateral de un único lóbulo pulmonar."
  },
  "repetida": false
},

{
  "id": "t3-002",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "En la radiografía de un paciente con sospecha de neumonía se observan infiltrados bilaterales. En las placas convencionales solo aparece crecimiento de flora normal. ¿Cuál es el diagnóstico más probable?",
  "opciones": { "a": "Neumonía atípica por Haemophilus influenzae", "b": "Neumonía típica por Streptococcus pneumoniae", "c": "Neumonía por aspiración por Klebsiella pneumoniae", "d": "Neumonía atípica por Mycoplasma pneumoniae", "e": "Neumonía atípica por Streptococcus pneumoniae" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Haemophilus influenzae es una causa de neumonía típica que sí crece en los medios de cultivo convencionales (agar chocolate); no encaja con un cultivo negativo ni con la etiqueta de 'atípica'.",
    "b": "S. pneumoniae produce neumonía típica, no atípica, y además sí crece en los cultivos convencionales (agar sangre), lo que no encaja con el hallazgo de solo flora normal.",
    "c": "La neumonía por aspiración suele mostrar un patrón radiológico distinto (afectación de lóbulos declive) y las enterobacterias como Klebsiella sí crecen en cultivo convencional (agar McConkey).",
    "d": "Correcto: los infiltrados bilaterales junto con un cultivo convencional negativo (solo flora normal) son muy sugestivos de una neumonía atípica por un agente que no crece en los medios habituales, como Mycoplasma pneumoniae, cuyo diagnóstico se basa en PCR o serología.",
    "e": "S. pneumoniae es la causa típica por excelencia (no atípica) y sí es cultivable en medios convencionales, por lo que esta combinación no es coherente con el enunciado."
  },
  "repetida": true
},

{
  "id": "t3-003",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Cuál de las siguientes bacterias se suele aislar con mayor frecuencia en neumonías por aspiración?",
  "opciones": { "a": "Mycoplasma pneumoniae", "b": "Klebsiella pneumoniae", "c": "Haemophilus influenzae", "d": "Legionella pneumophila", "e": "Mycobacterium tuberculosis" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Mycoplasma pneumoniae es agente de neumonía atípica en adultos jóvenes sanos, sin relación particular con la aspiración de contenido orofaríngeo.",
    "b": "Correcto: la neumonía por aspiración, producida por el paso de contenido orofaríngeo o gástrico al tracto respiratorio en personas con bajo nivel de consciencia, se asocia clásicamente a Klebsiella pneumoniae, frecuentemente acompañada de E. coli y flora mixta aerobia y anaerobia.",
    "c": "Haemophilus influenzae es más característico de neumonías en pacientes con EPOC o en pacientes intubados, no es el agente más típico de la neumonía por aspiración.",
    "d": "Legionella pneumophila produce legionelosis por inhalación de aerosoles de reservorios acuáticos contaminados, no está especialmente asociada a la aspiración de contenido orofaríngeo.",
    "e": "Mycobacterium tuberculosis produce tuberculosis pulmonar, una entidad clínica y epidemiológica distinta de la neumonía por aspiración aguda."
  },
  "repetida": true
},

{
  "id": "t3-004",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Qué características debe cumplir una muestra de esputo para considerarse de buena calidad y apta para el diagnóstico microbiológico de una neumonía?",
  "opciones": { "a": "Contener abundante flora mixta de la cavidad oral sin discriminar su origen", "b": "Ser en realidad una muestra de saliva recogida por la mañana", "c": "No contener ningún leucocito, ya que su presencia indica contaminación", "d": "Tener más de 50 células epiteliales por campo, lo que indica que procede de las vías respiratorias bajas", "e": "Tener menos de 10 células epiteliales y más de 25 leucocitos por campo (aumento 100x)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La abundante flora mixta de origen oral es precisamente lo que se quiere evitar, ya que dificulta identificar el verdadero agente causal de la neumonía.",
    "b": "El esputo debe diferenciarse claramente de la saliva; la saliva no es una muestra válida para el diagnóstico de neumonía porque no procede del tracto respiratorio inferior.",
    "c": "Los leucocitos son deseables en un esputo de calidad, ya que su presencia indica que la muestra procede realmente de un proceso infeccioso/inflamatorio pulmonar; cuantos más, mejor, hasta el umbral indicado.",
    "d": "Un número elevado de células epiteliales indica justo lo contrario de lo que se busca: que la muestra está muy contaminada por el paso a través de la cavidad oral, no que proceda de vías bajas.",
    "e": "Correcto: un esputo de calidad, representativo del tracto respiratorio inferior, debe tener menos de 10 células epiteliales (indicativas de contaminación por la orofaringe) y más de 25 leucocitos por campo (indicativos de que procede realmente de un proceso inflamatorio pulmonar), a 100 aumentos."
  },
  "repetida": false
},

{
  "id": "t3-005",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "En la tinción de Gram de un esputo de calidad se observan diplococos Gram positivos lanceolados. ¿Cuál es el diagnóstico presuntivo más probable?",
  "opciones": { "a": "Neumonía por Chlamydophila pneumoniae", "b": "Neumonía por Mycoplasma pneumoniae", "c": "Neumonía vírica por virus de la gripe", "d": "Neumonía por Legionella pneumophila", "e": "Neumonía neumocócica (Streptococcus pneumoniae)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Chlamydophila pneumoniae es un patógeno intracelular obligado que no se observa mediante Gram convencional en el esputo.",
    "b": "Mycoplasma pneumoniae carece de pared celular, por lo que no se tiñe ni se visualiza con la tinción de Gram; su diagnóstico requiere PCR o serología.",
    "c": "Los virus no se visualizan con la tinción de Gram, ya que son demasiado pequeños para el microscopio óptico y no son bacterias.",
    "d": "Legionella pneumophila se tiñe muy débilmente con la tinción de Gram convencional y no se visualiza fácilmente de esta manera; su diagnóstico se basa en la detección de antígeno en orina o PCR.",
    "e": "Correcto: la presencia de diplococos Gram positivos en un esputo de calidad es muy sugestiva de Streptococcus pneumoniae, el agente más importante de la neumonía típica de la comunidad."
  },
  "repetida": false
},

{
  "id": "t3-006",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "En el cultivo de un esputo se observa crecimiento en agar chocolate pero no en agar sangre, con un diplococo/cocobacilo Gram negativo. ¿Qué microorganismo es el más probable?",
  "opciones": { "a": "Staphylococcus aureus", "b": "Haemophilus influenzae, que requiere los factores V y X presentes de forma libre en el agar chocolate", "c": "Streptococcus pneumoniae", "d": "Klebsiella pneumoniae", "e": "Mycoplasma pneumoniae" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "S. aureus es un coco Gram positivo en racimos que crece perfectamente en agar sangre; no encaja con la descripción de un cocobacilo Gram negativo que solo crece en chocolate.",
    "b": "Correcto: Haemophilus influenzae necesita los factores V (NAD) y X (hemina), que en el agar sangre están contenidos dentro de los eritrocitos intactos y no disponibles, mientras que en el agar chocolate los eritrocitos están lisados y estos factores quedan libres, permitiendo su crecimiento; por eso crece en chocolate pero no en sangre.",
    "c": "S. pneumoniae sí crece en agar sangre, produciendo colonias alfa-hemolíticas, por lo que no encajaría con un crecimiento exclusivo en agar chocolate.",
    "d": "Klebsiella pneumoniae es una enterobacteria Gram negativa que crece tanto en agar sangre como en agar chocolate y en McConkey; no está limitada al agar chocolate.",
    "e": "Mycoplasma pneumoniae no crece en los medios de cultivo convencionales como el agar chocolate, requiere medios muy especiales enriquecidos."
  },
  "repetida": false
},

{
  "id": "t3-007",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "Para diferenciar Streptococcus pneumoniae de los estreptococos del grupo viridans, ambos alfa-hemolíticos en agar sangre, se emplea:",
  "opciones": { "a": "La prueba del CAMP", "b": "Un disco de bacitracina: S. pneumoniae es sensible y los viridans resistentes", "c": "El requerimiento de los factores V y X", "d": "Un disco de optoquina: S. pneumoniae es sensible, mientras que los del grupo viridans son resistentes", "e": "La prueba de la coagulasa" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La prueba de CAMP se utiliza para la identificación de Streptococcus agalactiae, no para diferenciar S. pneumoniae de los estreptococos viridans.",
    "b": "La bacitracina se emplea para diferenciar S. pyogenes (sensible) de otros estreptococos beta-hemolíticos, no para diferenciar S. pneumoniae de los viridans.",
    "c": "El requerimiento de factores V y X es característico de Haemophilus influenzae, no tiene relación con la diferenciación entre S. pneumoniae y S. viridans.",
    "d": "Correcto: S. pneumoniae es sensible al disco de optoquina, mientras que los estreptococos del grupo viridans son resistentes a ella; esta prueba, junto con la morfología en diplococos frente a cadenas, permite diferenciarlos en el laboratorio.",
    "e": "La prueba de la coagulasa se emplea para diferenciar Staphylococcus aureus (coagulasa positivo) de otros estafilococos, no para estreptococos."
  },
  "repetida": false
},

{
  "id": "t3-008",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Cuál es la prueba de elección para el diagnóstico rápido de la legionelosis?",
  "opciones": { "a": "El test de la optoquina", "b": "La detección de antígeno de Legionella en orina mediante inmunocromatografía", "c": "La prueba de la coagulasa", "d": "La tinción de Gram del esputo", "e": "El cultivo en agar sangre convencional" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El test de la optoquina se emplea para diferenciar S. pneumoniae de estreptococos viridans, no tiene ninguna aplicación en el diagnóstico de Legionella.",
    "b": "Correcto: la 'prueba estrella' para el diagnóstico de la legionelosis es la detección del antígeno de Legionella en orina (antigenuria) mediante inmunocromatografía; en casos de sospecha de brote también puede cultivarse en el medio específico BCYE.",
    "c": "La prueba de la coagulasa se emplea para identificar Staphylococcus aureus, no tiene relación con el diagnóstico de Legionella.",
    "d": "Legionella se tiñe muy débilmente con la tinción de Gram y no se visualiza bien de esta manera, por lo que no es una técnica útil para su diagnóstico rutinario.",
    "e": "Legionella pneumophila NO crece en el agar sangre convencional, requiere un medio específico como el BCYE con suplementos especiales."
  },
  "repetida": false
},

{
  "id": "t3-009",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Cuál de los siguientes es el medio de cultivo específico y característico para el aislamiento de Legionella pneumophila?",
  "opciones": { "a": "El medio BCYE", "b": "El medio de Sabouraud", "c": "El medio de Thayer-Martin", "d": "El agar Hektoen", "e": "El agar McConkey" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el medio BCYE (buffered charcoal yeast extract) es el medio característico y específico para el cultivo de Legionella pneumophila, empleado sobre todo en casos de sospecha de brote.",
    "b": "El medio de Sabouraud es específico para hongos, no tiene ninguna relación con el cultivo de Legionella.",
    "c": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, no para Legionella.",
    "d": "El agar Hektoen es un medio entérico moderadamente selectivo para Salmonella, Shigella y Yersinia, no tiene relación con el cultivo de Legionella.",
    "e": "El agar McConkey es selectivo para bacterias Gram negativas entéricas (enterobacterias), no permite el crecimiento de Legionella."
  },
  "repetida": false
},

{
  "id": "t3-010",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Qué grupo de agentes causa característicamente las llamadas 'neumonías atípicas'?",
  "opciones": { "a": "Enterobacterias como Klebsiella pneumoniae", "b": "Únicamente hongos dimórficos", "c": "Streptococcus pneumoniae exclusivamente", "d": "Mycoplasma pneumoniae, Chlamydophila pneumoniae y Coxiella burnetii, que no se visualizan en el Gram ni se recogen fácilmente en los medios de cultivo tradicionales", "e": "Staphylococcus aureus exclusivamente" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Las enterobacterias como Klebsiella se asocian sobre todo a neumonía nosocomial o por aspiración, no son la causa típica de neumonía atípica de la comunidad.",
    "b": "Los hongos dimórficos (histoplasma, coccidioides, blastomyces) son una causa infrecuente e importada de neumonía de la comunidad, distinta del grupo clásico de agentes 'atípicos'.",
    "c": "S. pneumoniae es precisamente el agente más importante de la neumonía TÍPICA, no de la atípica.",
    "d": "Correcto: las neumonías atípicas están producidas fundamentalmente por Mycoplasma pneumoniae (10-30% de las neumonías de la comunidad), Chlamydophila pneumoniae y Coxiella burnetii (fiebre Q, asociada a zoonosis); son bacterias que no se ven bien al Gram ni crecen en los medios de cultivo tradicionales, por lo que su diagnóstico se basa en PCR o serología.",
    "e": "S. aureus se asocia sobre todo a neumonía en pacientes con factores predisponentes (EPOC, tras gripe), no es el agente definitorio de la neumonía atípica."
  },
  "repetida": false
},

{
  "id": "t3-011",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Cuál es la clínica característica de las neumonías atípicas frente a la neumonía neumocócica típica?",
  "opciones": { "a": "Aparición exclusiva en pacientes mayores de 80 años", "b": "Ausencia total de fiebre en todos los casos", "c": "Fiebre poco elevada, tos no productiva y frecuente sintomatología extrapulmonar (cefalea, vómitos, diarrea)", "d": "Hemoptisis masiva como síntoma guía principal", "e": "Fiebre muy elevada con escalofríos y esputo herrumbroso, siempre con afectación unilateral" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Las neumonías atípicas afectan sobre todo a adultos jóvenes (Mycoplasma) y no están restringidas a mayores de 80 años.",
    "b": "Puede haber cierta fiebre en las neumonías atípicas, aunque suele ser menos intensa que en la típica; no es correcto afirmar ausencia total.",
    "c": "Correcto: las neumonías atípicas suelen ser más leves, con poca fiebre, signos auscultatorios menos alterados, tos no productiva y con frecuencia presentan síntomas extrapulmonares como cefalea, vómitos o diarrea.",
    "d": "La hemoptisis masiva no es el síntoma guía típico de las neumonías atípicas; es más característica de otras entidades como la tuberculosis.",
    "e": "La fiebre elevada con escalofríos y el esputo herrumbroso (marronáceo, purulento) son característicos de la neumonía TÍPICA neumocócica, no de la atípica."
  },
  "repetida": false
},

{
  "id": "t3-012",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "En un paciente intubado en la UCI que desarrolla neumonía, ¿qué agentes son especialmente frecuentes tras el periodo inicial (más allá de los primeros días de ventilación mecánica)?",
  "opciones": { "a": "Enterobacterias como E. coli y Klebsiella pneumoniae, Pseudomonas aeruginosa y otros bacilos Gram negativos no fermentadores", "b": "Exclusivamente hongos dimórficos importados", "c": "Exclusivamente virus respiratorios", "d": "Treponema pallidum", "e": "Mycoplasma genitalium" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los pacientes intubados suelen comenzar con neumonía por H. influenzae o S. aureus, pero según se prolonga la ventilación mecánica pasan a predominar enterobacterias como E. coli y Klebsiella pneumoniae, Pseudomonas aeruginosa y otros bacilos Gram negativos no fermentadores, típicos del ambiente hospitalario.",
    "b": "Los hongos dimórficos importados son causa infrecuente de neumonía de la comunidad en zonas geográficas concretas, no son el perfil típico de la neumonía nosocomial en pacientes intubados.",
    "c": "Aunque los virus pueden causar infecciones respiratorias, la neumonía asociada a ventilación mecánica prolongada está dominada por bacterias hospitalarias, no exclusivamente por virus.",
    "d": "Treponema pallidum es el agente de la sífilis, no tiene ninguna relación con la neumonía asociada a ventilación mecánica.",
    "e": "Mycoplasma genitalium es un agente de infecciones genitales, no está implicado en la neumonía nosocomial de pacientes intubados."
  },
  "repetida": false
},

{
  "id": "t3-013",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "En pacientes con fibrosis quística o EPOC, tras descartar inicialmente Streptococcus pneumoniae y Haemophilus influenzae, ¿qué microorganismo cobra especial protagonismo en las reagudizaciones respiratorias?",
  "opciones": { "a": "Trichomonas vaginalis", "b": "Pseudomonas aeruginosa", "c": "Treponema pallidum", "d": "Neisseria gonorrhoeae", "e": "Clostridium botulinum" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Trichomonas vaginalis es un parásito de transmisión sexual sin relación con la patología respiratoria.",
    "b": "Correcto: en pacientes con EPOC, bronquiectasias o fibrosis quística, tras descartar S. pneumoniae, H. influenzae o S. aureus, cobran especial importancia Pseudomonas aeruginosa y otros bacilos Gram negativos no fermentadores, incluyendo cepas de SARM.",
    "c": "Treponema pallidum causa sífilis, una infección de transmisión sexual sin ninguna relación con la patología respiratoria en pacientes con EPOC o fibrosis quística.",
    "d": "Neisseria gonorrhoeae es el agente de la gonorrea, no está implicado en las infecciones respiratorias de pacientes con enfermedad pulmonar crónica.",
    "e": "Clostridium botulinum produce botulismo por toxina alimentaria, no tiene relación con las infecciones respiratorias crónicas."
  },
  "repetida": false
},

{
  "id": "t3-014",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Cómo se realiza habitualmente el diagnóstico etiológico de la gripe estacional (virus Influenza)?",
  "opciones": { "a": "Cultivo obligatorio en agar sangre en todos los casos", "b": "Prueba de la coagulasa", "c": "Tinción de Ziehl-Neelsen del esputo en todos los casos", "d": "Test de CAMP", "e": "Es fundamentalmente clínico, y cuando está indicado el diagnóstico microbiológico se emplean técnicas de detección de antígeno o PCR sobre exudado/aspirado nasofaríngeo" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El virus de la gripe no crece en agar sangre, que es un medio bacteriano; los virus requieren cultivo celular, técnica hoy poco usada en el diagnóstico rutinario de la gripe.",
    "b": "La prueba de la coagulasa se emplea para Staphylococcus aureus, no tiene relación con el diagnóstico vírico de la gripe.",
    "c": "La tinción de Ziehl-Neelsen detecta micobacterias ácido-alcohol resistentes, no tiene ninguna utilidad en el diagnóstico de la gripe.",
    "d": "El test de CAMP se emplea para identificar Streptococcus agalactiae, sin relación con el diagnóstico de la gripe.",
    "e": "Correcto: en la mayoría de los casos el diagnóstico de la gripe es clínico, ya que se trata de un cuadro leve y autolimitado; cuando está indicado el diagnóstico etiológico (casos graves, pacientes de riesgo) se recurre a técnicas de detección de antígeno o PCR sobre una muestra respiratoria (nasofaríngea o de tracto inferior)."
  },
  "repetida": false
},

{
  "id": "t3-015",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Cuál es el patrón de detección de antígeno neumocócico en orina, útil en el diagnóstico de la neumonía neumocócica?",
  "opciones": { "a": "Es una técnica de tipo indirecto o serológico", "b": "Detecta únicamente anticuerpos frente al neumococo, no antígeno", "c": "Solo es aplicable en niños menores de 2 años", "d": "Requiere obligatoriamente cultivo previo en agar Sabouraud", "e": "Es útil sobre todo en pacientes de los que no se puede obtener un esputo de calidad, ya que parte del polisacárido capsular se elimina por vía urinaria" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Es una técnica directa (detecta al propio antígeno del microorganismo en la muestra), no una técnica serológica indirecta que buscaría anticuerpos del paciente.",
    "b": "Detecta el antígeno (polisacárido capsular) del neumococo, no anticuerpos del paciente; por eso se considera una técnica directa.",
    "c": "No hay una restricción de edad concreta a niños menores de 2 años; la prueba se utiliza en la población general con sospecha de neumonía neumocócica.",
    "d": "No requiere cultivo en Sabouraud (medio de hongos); es una prueba directa de aglutinación con látex sobre la propia muestra de orina, sin cultivo previo.",
    "e": "Correcto: parte del polisacárido capsular del neumococo se dispersa por los líquidos corporales y se excreta por la orina; su detección mediante aglutinación con látex es una técnica directa muy útil especialmente en pacientes de los que no se puede obtener esputo, o que ya han recibido antibiótico."
  },
  "repetida": false
},

{
  "id": "t3-017",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "La bronquiolitis, infección viral muy frecuente en niños pequeños, está producida principalmente por:",
  "opciones": { "a": "Treponema pallidum", "b": "Candida albicans", "c": "Neisseria gonorrhoeae", "d": "Mycobacterium tuberculosis", "e": "El virus respiratorio sincitial (VRS)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Treponema pallidum es el agente de la sífilis, sin ninguna relación con la bronquiolitis infantil.",
    "b": "Candida albicans es una levadura que puede producir candidiasis oral o vaginal, no es el agente causal de la bronquiolitis.",
    "c": "Neisseria gonorrhoeae es el agente de la gonorrea, sin relación con las infecciones respiratorias bajas en la infancia.",
    "d": "Mycobacterium tuberculosis produce tuberculosis, una entidad clínica completamente distinta de la bronquiolitis aguda vírica.",
    "e": "Correcto: el virus respiratorio sincitial (VRS) es el principal agente de la bronquiolitis en niños pequeños, una infección vírica muy frecuente que afecta a los bronquiolos."
  },
  "repetida": false
},

{
  "id": "t3-018",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Por qué el diagnóstico etiológico de una bronquitis o bronquiolitis se puede realizar sobre una muestra de aspirado nasofaríngeo, aunque la infección afecte a los bronquios y bronquiolos?",
  "opciones": { "a": "Porque el patógeno, para llegar a los bronquios, ha tenido que pasar previamente por la faringe, por lo que también estará presente allí", "b": "Porque siempre es necesario realizar una broncoscopia en su lugar", "c": "Porque el aspirado nasofaríngeo permite ver directamente el interior de los bronquios", "d": "Porque los bronquios están anatómicamente conectados con la nariz mediante el tubo de Eustaquio", "e": "Porque no existe ninguna otra muestra respiratoria disponible en niños" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: dado que el patógeno respiratorio debe atravesar la vía aérea superior (incluida la nasofaringe) para llegar a los bronquios y bronquiolos, también se encuentra presente en las secreciones nasofaríngeas, lo que permite emplear una muestra mucho menos invasiva (aspirado nasofaríngeo) que otras técnicas más agresivas.",
    "b": "La broncoscopia es una técnica invasiva que se reserva para casos concretos, no es necesaria de rutina cuando el aspirado nasofaríngeo resulta suficiente.",
    "c": "El aspirado nasofaríngeo es una muestra de secreciones, no permite la visualización directa del interior de los bronquios; para eso se necesitaría una técnica de imagen o endoscópica.",
    "d": "El tubo de Eustaquio comunica la nasofaringe con el oído medio, no con los bronquios; esta conexión anatómica no es la razón de la utilidad del aspirado nasofaríngeo.",
    "e": "Existen otras muestras del tracto respiratorio inferior (lavado broncoalveolar, broncoaspirado) pero son más invasivas y se reservan para casos concretos; el aspirado nasofaríngeo es una alternativa válida y menos agresiva."
  },
  "repetida": false
},

{
  "id": "t3-020",
  "tema": "Infecciones del tracto respiratorio inferior",
  "pregunta": "¿Cómo se diferencian en el laboratorio Haemophilus influenzae de Haemophilus parainfluenzae?",
  "opciones": { "a": "Mediante la prueba del CAMP", "b": "Mediante la prueba de la coagulasa", "c": "Mediante el crecimiento en agar Sabouraud", "d": "Mediante la prueba del requerimiento de los factores V y X: H. influenzae necesita ambos factores, mientras que H. parainfluenzae solo necesita el factor V", "e": "Mediante la sensibilidad a la optoquina" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La prueba de CAMP se emplea para la identificación de Streptococcus agalactiae, sin relación con la diferenciación de especies de Haemophilus.",
    "b": "La prueba de la coagulasa se emplea para Staphylococcus aureus, no para diferenciar especies de Haemophilus.",
    "c": "El agar Sabouraud es un medio para hongos; Haemophilus no crece en este medio y no es útil para diferenciar sus especies.",
    "d": "Correcto: se colocan discos con los factores V, X y V+X en una placa sembrada en césped; H. influenzae solo crece alrededor del disco que contiene ambos factores V y X juntos, mientras que H. parainfluenzae crece alrededor de los discos que contienen el factor V (solo o combinado), pero no alrededor del disco que contiene únicamente el factor X.",
    "e": "La sensibilidad a la optoquina se emplea para diferenciar S. pneumoniae de los estreptococos viridans, no tiene relación con la diferenciación entre especies de Haemophilus."
  },
  "repetida": false
},

{
  "id": "t4-001",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "La tinción de Ziehl-Neelsen:",
  "opciones": { "a": "Permite observar Mycobacterium tuberculosis, ya que sus ácidos micólicos retienen la fucsina fenicada frente a la decoloración con alcohol-ácido", "b": "Permite observar Haemophilus influenzae", "c": "Permite observar tanto Mycobacterium tuberculosis como Legionella pneumophila por igual", "d": "Permite observar Legionella pneumophila", "e": "Permite observar Mycoplasma pneumoniae" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los ácidos micólicos de la pared de las micobacterias actúan como un escudo que impide la decoloración con alcohol-ácido tras la tinción con fucsina fenicada en caliente, por lo que estas bacterias 'ácido-alcohol resistentes' se observan de color rojo sobre un fondo azul (contrateñido con azul de metileno).",
    "b": "Haemophilus influenzae es un cocobacilo Gram negativo convencional, se observa con la tinción de Gram, no con la de Ziehl-Neelsen, que es específica de micobacterias.",
    "c": "Ziehl-Neelsen es específica de micobacterias ácido-alcohol resistentes; Legionella no comparte esta propiedad de la pared celular y no se visualiza con esta técnica.",
    "d": "Legionella pneumophila no es ácido-alcohol resistente; se tiñe muy débilmente con la tinción de Gram y no se detecta mediante Ziehl-Neelsen, sino mediante detección de antígeno en orina o cultivo en medio BCYE.",
    "e": "Mycoplasma pneumoniae carece de pared celular y por tanto no puede retener ningún colorante de las tinciones habituales, incluida la de Ziehl-Neelsen."
  },
  "repetida": true
},

{
  "id": "t4-003",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "La tinción con fluorocromos (auramina-rodamina):",
  "opciones": { "a": "Permite visualizar Mycoplasma pneumoniae", "b": "Presenta mayor sensibilidad que el Ziehl-Neelsen y es de gran utilidad para el diagnóstico de la tuberculosis pulmonar, requiriendo microscopio de fluorescencia", "c": "Permite diagnosticar una neumonía por Streptococcus pneumoniae", "d": "Permite diagnosticar una infección producida por hongos", "e": "Permite visualizar Legionella pneumophila" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Mycoplasma pneumoniae carece de pared celular y de ácidos micólicos, por lo que no se tiñe con fluorocromos como la auramina-rodamina.",
    "b": "Correcto: la tinción con auramina-rodamina se basa en la afinidad de los ácidos micólicos por estos fluorocromos; presenta mayor sensibilidad que el Ziehl-Neelsen (es más fácil detectar un punto amarillo brillante sobre fondo oscuro que uno rojo sobre fondo azul), por lo que es de gran utilidad en el diagnóstico de tuberculosis, aunque requiere microscopio de fluorescencia.",
    "c": "S. pneumoniae se diagnostica mediante Gram convencional o cultivo, no mediante tinciones específicas de micobacterias como la auramina-rodamina.",
    "d": "Esta tinción es específica para detectar micobacterias ácido-alcohol resistentes, no para el diagnóstico de infecciones fúngicas, que emplean KOH, lactofenol o calcoflúor.",
    "e": "Legionella pneumophila no es ácido-alcohol resistente y no se detecta con esta tinción específica de micobacterias."
  },
  "repetida": true
},

{
  "id": "t4-004",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "¿Cuál es la localización más frecuente de la tuberculosis en el adulto inmunocompetente, y qué porcentaje aproximado representa respecto a las formas extrapulmonares?",
  "opciones": { "a": "La localización cutánea, en el 90% de los casos", "b": "La localización meníngea exclusivamente, en el 100% de los casos", "c": "La localización pulmonar, que representa aproximadamente el 80% de los casos, frente a un 20% de formas extrapulmonares, generalmente ligadas a inmunodepresión", "d": "La localización ósea exclusivamente", "e": "La tuberculosis nunca afecta a órganos distintos del pulmón" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La afectación cutánea por tuberculosis es muy infrecuente, no representa el 90% de los casos.",
    "b": "La meningitis tuberculosa es una forma extrapulmonar posible pero minoritaria dentro del conjunto de la enfermedad, no representa el 100% de los casos.",
    "c": "Correcto: la tuberculosis pulmonar representa aproximadamente el 80% de los casos en el adulto inmunocompetente, mientras que la tuberculosis extrapulmonar (SNC, sistema linfático, óseo, genitourinario, etc.) supone el 20% restante y suele estar ligada a situaciones de inmunodepresión.",
    "d": "La afectación ósea es una posible localización extrapulmonar, pero no es la única ni la más frecuente; la localización pulmonar sigue siendo predominante.",
    "e": "La tuberculosis sí puede afectar a múltiples órganos además del pulmón (SNC, huesos, articulaciones, aparato genitourinario, piel), aunque la localización pulmonar sea la más frecuente."
  },
  "repetida": false
},

{
  "id": "t4-005",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "¿Cuál es el principal factor de patogenicidad de Mycobacterium tuberculosis una vez es fagocitado por los macrófagos alveolares?",
  "opciones": { "a": "Su incapacidad total de resistir dentro del macrófago, que siempre lo destruye en minutos", "b": "Su capacidad de formar esporas resistentes al calor", "c": "Su capacidad de sobrevivir y multiplicarse dentro del macrófago, al ser un patógeno intracelular facultativo", "d": "La producción de hemolisinas que rompen los eritrocitos", "e": "La producción de una potente exotoxina que destruye el macrófago inmediatamente" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Es justo lo contrario: la característica clave de M. tuberculosis es precisamente su capacidad de resistir y multiplicarse dentro del macrófago, evadiendo su destrucción.",
    "b": "Las micobacterias no forman esporas, a diferencia de géneros como Bacillus o Clostridium.",
    "c": "Correcto: M. tuberculosis es un patógeno intracelular facultativo capaz no solo de sobrevivir dentro del macrófago alveolar que lo ha fagocitado, sino también de multiplicarse en su interior, lo que le permite diseminarse a través de los macrófagos que pasan a la circulación y alcanzar otros órganos.",
    "d": "La producción de hemolisinas no es el mecanismo patogénico principal descrito para M. tuberculosis en los apuntes de la asignatura.",
    "e": "No se conoce ninguna exotoxina potente como principal mecanismo patogénico de M. tuberculosis; su virulencia se relaciona sobre todo con su capacidad de supervivencia intracelular y su lento crecimiento, que dificulta su eliminación por el sistema inmune."
  },
  "repetida": false
},

{
  "id": "t4-006",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "El granuloma que se forma en el pulmón como respuesta a la infección por Mycobacterium tuberculosis:",
  "opciones": { "a": "Es exclusivo de la tuberculosis extrapulmonar", "b": "Es una estructura que aísla al patógeno, dentro de la cual la micobacteria puede permanecer viva en estado latente durante años, y reactivarse si el paciente sufre una inmunodepresión", "c": "Está compuesto exclusivamente por eosinófilos", "d": "Solo se forma en pacientes vacunados con BCG", "e": "Elimina siempre y por completo a la micobacteria en cuestión de horas" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El granuloma es una respuesta característica también de la tuberculosis pulmonar (la localización más frecuente), no es exclusivo de las formas extrapulmonares.",
    "b": "Correcto: el granuloma es una estructura de defensa que el organismo forma para aislar al patógeno difícil de eliminar; dentro de él, la micobacteria puede permanecer viva en estado latente durante años debido a su lento crecimiento, y si el paciente sufre posteriormente una inmunodepresión, puede reactivarse y salir a circulación produciendo enfermedad activa (incluida la meningitis tuberculosa).",
    "c": "El granuloma tuberculoso está compuesto fundamentalmente por macrófagos y linfocitos reclutados, no por eosinófilos, que son más característicos de las respuestas frente a parásitos.",
    "d": "El granuloma se forma como respuesta inmune general frente a la infección micobacteriana, independientemente de que el paciente esté o no vacunado con BCG.",
    "e": "No siempre se elimina la micobacteria; en muchos casos la bacteria sobrevive de forma latente dentro del granuloma durante años, sin llegar a ser eliminada por completo."
  },
  "repetida": false
},

{
  "id": "t4-007",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "Para el diagnóstico microbiológico de la tuberculosis pulmonar mediante examen de esputo, ¿cuántas muestras consecutivas se recomienda recoger y por qué?",
  "opciones": { "a": "Diez muestras consecutivas como mínimo", "b": "Tres muestras consecutivas, porque a nivel pulmonar suele haber poca cantidad de micobacterias y es posible que no aparezcan en una única muestra", "c": "Únicamente una biopsia pulmonar, nunca esputo", "d": "Solo se puede usar sangre, nunca esputo, para el diagnóstico de tuberculosis pulmonar", "e": "Una única muestra siempre es suficiente y representativa" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "No se exige un número tan elevado como diez muestras; el estándar recomendado son tres muestras consecutivas.",
    "b": "Correcto: se recomiendan tres muestras de esputo consecutivas, ya que a nivel pulmonar suele haber poca cantidad de micobacterias y cabe la posibilidad de que en una sola muestra no se detecten, aumentando así la sensibilidad global del diagnóstico.",
    "c": "El esputo es la muestra de primera línea, no invasiva; la biopsia pulmonar sería una opción mucho más agresiva reservada para casos concretos, no la técnica habitual.",
    "d": "El esputo es la muestra habitual de elección para el diagnóstico de la tuberculosis pulmonar; la sangre no es la muestra estándar para esta finalidad.",
    "e": "Una única muestra puede dar un falso negativo precisamente por la escasa cantidad de bacilos presentes, por eso se recomiendan varias muestras."
  },
  "repetida": false
},

{
  "id": "t4-008",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "Antes de sembrar una muestra de esputo para el cultivo de micobacterias, ¿qué paso previo de procesamiento es necesario?",
  "opciones": { "a": "No se necesita ningún tratamiento previo, se siembra la muestra directamente", "b": "Congelar la muestra a -80ºC antes de sembrarla", "c": "Hervir la muestra a 100ºC durante una hora", "d": "Añadir formaldehído directamente al esputo antes de sembrarlo", "e": "Descontaminar la muestra con NaOH y posteriormente neutralizarla, antes de centrifugar" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Sí se necesita un tratamiento previo de descontaminación, ya que el esputo contiene abundante flora acompañante que podría sobrecrecer e impedir el aislamiento de la micobacteria, de crecimiento mucho más lento.",
    "b": "La congelación no es el paso de procesamiento habitual antes del cultivo de micobacterias; lo relevante es la descontaminación química con NaOH.",
    "c": "Hervir la muestra destruiría también a las micobacterias, que son las que se quieren cultivar; el paso de descontaminación con NaOH está pensado para eliminar la flora acompañante sin matar completamente a las micobacterias.",
    "d": "El formaldehído es un fijador/conservante que mataría los microorganismos, incompatible con el objetivo de cultivar micobacterias viables.",
    "e": "Correcto: el esputo se descontamina con NaOH (que elimina la flora bacteriana acompañante, más sensible que la micobacteria) y se neutraliza posteriormente antes de centrifugar y sembrar, dado que debe manipularse siempre en laboratorios de nivel 3 de bioseguridad por su alta infectividad."
  },
  "repetida": false
},

{
  "id": "t4-009",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "El medio Löwenstein-Jensen permite el crecimiento de:",
  "opciones": { "a": "Vibrio cholerae", "b": "Legionella pneumophila", "c": "Mycobacterium tuberculosis y Mycobacterium bovis, ambas especies del complejo M. tuberculosis", "d": "Streptococcus pneumoniae", "e": "Neisseria gonorrhoeae" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Vibrio cholerae se cultiva en medio TCBS tras enriquecimiento en agua de peptona, no en el medio Löwenstein-Jensen.",
    "b": "Legionella pneumophila requiere el medio específico BCYE, no crece en el medio Löwenstein-Jensen, que está diseñado para micobacterias.",
    "c": "Correcto: el medio Löwenstein-Jensen es uno de los medios de cultivo sólidos más utilizados para micobacterias, permitiendo el crecimiento tanto de Mycobacterium tuberculosis como de Mycobacterium bovis, ambas pertenecientes al complejo M. tuberculosis; se recomienda incubar al menos 6 semanas.",
    "d": "Streptococcus pneumoniae crece en agar sangre y agar chocolate, no requiere ni crece adecuadamente en el medio Löwenstein-Jensen.",
    "e": "Neisseria gonorrhoeae requiere el medio de Thayer-Martin, no el Löwenstein-Jensen, que está reservado para micobacterias."
  },
  "repetida": true
},

{
  "id": "t4-010",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "¿Cuál es la ventaja de los sistemas rápidos de cultivo líquido para micobacterias frente a los medios sólidos clásicos como el Löwenstein-Jensen?",
  "opciones": { "a": "Permiten prescindir por completo del examen microscópico previo", "b": "Son mucho más baratos y no requieren ningún tipo de sensor", "c": "Permiten detectar el crecimiento en 1-2 semanas mediante sensores fluorescentes que detectan la desaparición del oxígeno del medio, frente a las varias semanas de incubación de los medios sólidos", "d": "No requieren laboratorio de bioseguridad de nivel 3", "e": "Detectan directamente el ADN de la micobacteria" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El examen microscópico (Ziehl-Neelsen o auramina-rodamina) sigue siendo útil como técnica rápida complementaria, aunque el cultivo se mantenga como método de confirmación por su mayor sensibilidad.",
    "b": "Estos sistemas automatizados con sensores son tecnológicamente más sofisticados y costosos que un simple medio sólido, no más baratos.",
    "c": "Correcto: los sistemas rápidos de cultivo líquido emplean sensores fluorescentes que detectan la desaparición del oxígeno consumido por el metabolismo bacteriano, permitiendo detectar el crecimiento en 1-2 semanas, mucho más rápido que las 3-6 semanas necesarias en medios sólidos como el Löwenstein-Jensen.",
    "d": "Al tratarse igualmente de cultivo de Mycobacterium tuberculosis, siguen requiriendo un laboratorio de nivel 3 de bioseguridad por el riesgo de transmisión aérea.",
    "e": "Estos sistemas se basan en la detección del consumo de oxígeno por el metabolismo bacteriano (crecimiento), no en la detección directa del ADN, que correspondería a una técnica molecular distinta (PCR)."
  },
  "repetida": false
},

{
  "id": "t4-011",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "Respecto a la prueba de la tuberculina, de Mantoux o PPD, señale la afirmación correcta",
  "opciones": { "a": "El resultado se lee de forma inmediata, a los pocos minutos de la inyección", "b": "Una prueba de Mantoux positiva indica que el individuo ha tenido contacto con el bacilo tuberculoso en algún momento, pero no diagnostica enfermedad activa en el momento actual", "c": "Es una prueba diagnóstica que confirma la presencia de enfermedad tuberculosa activa en el momento de realizarla", "d": "Se basa en la inyección intramuscular de un antígeno derivado del bacilo", "e": "Nunca da un resultado positivo en personas vacunadas con BCG" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El resultado (aparición de una pápula) se observa a las 24, 48 y 72 horas tras la inyección, no de forma inmediata.",
    "b": "Correcto: la prueba de Mantoux (inyección intradérmica de PPD) puede contribuir al diagnóstico, pero fundamentalmente indica si el individuo ha tenido contacto previo con el bacilo (pudiendo tratarse de una infección latente controlada hace años); no es una prueba diagnóstica de enfermedad activa, sino orientativa de contacto.",
    "c": "No confirma enfermedad activa; una respuesta positiva únicamente indica contacto previo con el bacilo, que puede corresponder a infección latente sin enfermedad.",
    "d": "La prueba de Mantoux se realiza mediante inyección INTRADÉRMICA (no intramuscular) de 0,1 ml de derivado proteico purificado (PPD).",
    "e": "Las personas vacunadas con BCG suelen dar un resultado positivo en la prueba de Mantoux, ya que la vacuna también genera una respuesta inmune de tipo celular frente a antígenos micobacterianos similares."
  },
  "repetida": true
},

{
  "id": "t4-012",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "Indica cuál es la afirmación correcta respecto a la tuberculosis",
  "opciones": { "a": "El esputo se siembra directamente sin ningún tipo de procesamiento previo", "b": "La ausencia de bacilos ácido-alcohol resistentes en el esputo descarta siempre la tuberculosis", "c": "La tinción con fluorocromos nunca se emplea en el diagnóstico de tuberculosis", "d": "La tinción con fluorocromos es de gran utilidad, la muestra de esputo debe descontaminarse con NaOH antes de sembrar, la observación de bacilos ácido-alcohol resistentes permite confirmar el diagnóstico, y una prueba de Mantoux positiva indica que se ha tenido contacto con el bacilo", "e": "Una prueba de Mantoux positiva confirma siempre enfermedad tuberculosa activa" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Es falsa: el esputo requiere descontaminación previa con NaOH y neutralización antes de sembrarse en los medios de cultivo para micobacterias.",
    "b": "Es falsa: la ausencia de BAAR en una muestra clínica no permite descartar la tuberculosis, ya que la tinción tiene sensibilidad limitada (se necesita una concentración mínima de bacilos para poder visualizarlos).",
    "c": "Es falsa: la tinción con fluorocromos (auramina-rodamina) sí se emplea de forma habitual en el diagnóstico de tuberculosis por su mayor sensibilidad frente al Ziehl-Neelsen.",
    "d": "Correcto: todas estas afirmaciones son ciertas según los apuntes de la asignatura: la tinción con fluorocromos (auramina-rodamina) es útil por su mayor sensibilidad, el esputo debe descontaminarse con NaOH antes de cultivarse, la observación de BAAR en una muestra clínica confirma el diagnóstico (aunque su ausencia no lo descarta), y el Mantoux positivo indica contacto previo con el bacilo.",
    "e": "Es falsa: un Mantoux positivo únicamente indica contacto previo con el bacilo, no confirma enfermedad activa en el momento actual, que requiere otras pruebas (radiografía, cultivo, síntomas)."
  },
  "repetida": true
},

{
  "id": "t4-013",
  "tema": "Tuberculosis pulmonar",
  "pregunta": "Un cuarto de la población mundial se estima que tiene tuberculosis latente. ¿Qué significa esto?",
  "opciones": { "a": "Que están infectadas por el bacilo pero aún no han enfermado ni pueden transmitir la infección", "b": "Que nunca han estado en contacto con Mycobacterium tuberculosis", "c": "Que están completamente curadas y libres del bacilo", "d": "Que han sido vacunadas recientemente con la vacuna BCG", "e": "Que padecen enfermedad tuberculosa activa y contagiosa" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la infección tuberculosa latente implica que la persona está infectada por el bacilo (con Mantoux positivo) pero aún no ha desarrollado enfermedad activa ni puede transmitir la infección a otras personas; el riesgo de enfermar a lo largo de la vida en estas personas es del 5-15%.",
    "b": "Justamente lo contrario: para tener una infección latente es necesario haber estado en contacto y haberse infectado por el bacilo previamente.",
    "c": "No están curadas ni libres del bacilo; el bacilo permanece viable dentro de los granulomas en estado de latencia, con el riesgo de reactivarse en el futuro.",
    "d": "La infección tuberculosa latente no equivale a estar recién vacunado; se refiere a personas que han adquirido el bacilo de forma natural y lo mantienen controlado por su sistema inmune.",
    "e": "La enfermedad activa y contagiosa es un concepto distinto de la infección latente; las personas con infección latente no presentan síntomas ni son contagiosas mientras el bacilo permanezca controlado."
  },
  "repetida": false
},

{
  "id": "t5-001",
  "tema": "Infecciones urinarias",
  "pregunta": "Ante la sospecha de una ITU en una mujer, y con el fin de que la muestra de orina sea apta para ser cultivada, se recomienda:",
  "opciones": { "a": "Que se recoja la primera porción de la orina", "b": "Que la muestra se tome a última hora de la tarde", "c": "Que se recoja la porción media de la micción (chorro medio), tras un lavado y aclarado previo de la zona genital", "d": "No lavar la zona genital, ya que así hay mayor concentración de microorganismos y facilitaría el diagnóstico", "e": "Que se ingieran diuréticos para favorecer la micción" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La primera porción de la micción arrastra la flora que coloniza la uretra distal, aumentando el riesgo de contaminación de la muestra; por eso se descarta esa primera porción.",
    "b": "Se recomienda la primera orina de la mañana porque ha permanecido más tiempo en la vejiga (mínimo unas 4 horas) y por tanto tiene mayor concentración de bacterias, lo que aumenta la sensibilidad del cultivo, no la de última hora de la tarde.",
    "c": "Correcto: tras un lavado y aclarado de la zona genital, se debe recoger la porción media de la micción ('chorro medio' o 'micción media'), descartando el primer y el último chorro, para minimizar la contaminación con la flora uretral y perineal.",
    "d": "Justo lo contrario: no lavar la zona genital aumentaría el riesgo de contaminación de la muestra con flora externa, dificultando la correcta interpretación del cultivo.",
    "e": "Los diuréticos diluyen la orina, lo que puede falsear a la baja el recuento de UFC/mL y dificultar la interpretación diagnóstica del urocultivo."
  },
  "repetida": true
},

{
  "id": "t5-002",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Cuál es el agente etiológico más frecuente de las infecciones urinarias no complicadas en la comunidad?",
  "opciones": { "a": "Neisseria gonorrhoeae", "b": "Escherichia coli, responsable de aproximadamente el 85% de los casos", "c": "Mycobacterium tuberculosis", "d": "Pseudomonas aeruginosa", "e": "Candida albicans" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Neisseria gonorrhoeae produce uretritis de transmisión sexual, no la ITU típica ascendente por flora intestinal.",
    "b": "Correcto: E. coli es, con diferencia, el agente etiológico más frecuente de las ITU no complicadas (alrededor del 85%), seguido de Proteus spp., Klebsiella spp. y Staphylococcus saprophyticus (este último especialmente en mujeres jóvenes de 15-25 años).",
    "c": "Mycobacterium tuberculosis puede producir tuberculosis genitourinaria, pero es una entidad muy infrecuente, no el agente habitual de la ITU.",
    "d": "Pseudomonas aeruginosa es más característica de infecciones urinarias complicadas, nosocomiales o en pacientes con factores predisponentes, no de la ITU no complicada de la comunidad.",
    "e": "Candida albicans puede producir ITU en pacientes inmunodeprimidos o sondados, pero no es el agente principal de la ITU no complicada de la comunidad."
  },
  "repetida": false
},

{
  "id": "t5-003",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Qué microorganismo Gram positivo es especialmente frecuente como causa de ITU en mujeres jóvenes sexualmente activas de entre 15 y 25 años?",
  "opciones": { "a": "Corynebacterium diphtheriae", "b": "Streptococcus pyogenes", "c": "Clostridium perfringens", "d": "Staphylococcus saprophyticus", "e": "Listeria monocytogenes" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Corynebacterium diphtheriae produce difteria, sin relación con las infecciones urinarias.",
    "b": "Streptococcus pyogenes no es un uropatógeno característico; se asocia principalmente a infecciones faríngeas y cutáneas.",
    "c": "Clostridium perfringens se asocia a infecciones de tejidos blandos (gangrena gaseosa) y enteritis, no es un uropatógeno típico.",
    "d": "Correcto: Staphylococcus saprophyticus es un coco Gram positivo especialmente asociado a ITU en mujeres jóvenes de 15-25 años, sexualmente activas; se considera significativo un recuento ≥10.000 UFC/mL en mujeres, menor que el umbral habitual de otros uropatógenos.",
    "e": "Listeria monocytogenes se asocia a meningitis (sobre todo en inmunodeprimidos, embarazadas y neonatos), no es un uropatógeno frecuente."
  },
  "repetida": false
},

{
  "id": "t5-004",
  "tema": "Infecciones urinarias",
  "pregunta": "En una tira reactiva de orina se observa la presencia de nitritos. ¿Qué tipo de microorganismo es el responsable más probable?",
  "opciones": { "a": "Una enterobacteria, como Escherichia coli, capaz de convertir los nitratos en nitritos mediante la enzima nitrato reductasa", "b": "Pseudomonas aeruginosa", "c": "Cualquier microorganismo, ya que todos producen nitritos por igual", "d": "Staphylococcus aureus", "e": "Un hongo como Candida albicans" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: las enterobacterias (como E. coli) son bacterias anaerobias facultativas que poseen la enzima nitrato reductasa, capaz de transformar los nitratos normalmente presentes en la orina en nitritos; en una persona sana no hay nitritos en orina, solo nitratos, por lo que su presencia es altamente sugestiva de infección por enterobacterias.",
    "b": "Pseudomonas aeruginosa no pertenece a la familia Enterobacteriaceae y generalmente no produce nitritos positivos en la tira reactiva, aunque puede dar esterasas positivas.",
    "c": "No todos los microorganismos producen nitritos; solo las bacterias con capacidad de nitrato reductasa (fundamentalmente enterobacterias) lo hacen, mientras que Pseudomonas, estafilococos y enterococos suelen dar nitritos negativos.",
    "d": "Staphylococcus aureus no es una enterobacteria y no suele dar lugar a nitritos positivos en la tira reactiva; su ITU cursa habitualmente con nitritos negativos.",
    "e": "Candida albicans es una levadura, no tiene la maquinaria enzimática bacteriana (nitrato reductasa) para producir nitritos en la orina."
  },
  "repetida": false
},

{
  "id": "t5-005",
  "tema": "Infecciones urinarias",
  "pregunta": "La prueba de cribado de ITU mediante tira reactiva ha dado negativa (nitritos negativos, esterasas negativas) en una muestra de orina de una mujer joven sintomática. ¿Qué podrías concluir con mayor rigor?",
  "opciones": { "a": "Que probablemente tiene una ITU por Escherichia coli", "b": "Que probablemente tiene una ITU por Klebsiella pneumoniae", "c": "Que definitivamente tiene una meningitis bacteriana", "d": "Que probablemente tiene una ITU por Proteus mirabilis", "e": "Que no tiene infección de orina, ya que ambos parámetros son negativos y no hay signos de piuria ni bacteriuria por enterobacterias" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "E. coli es una enterobacteria con nitrato reductasa, por lo que una infección activa por E. coli habitualmente daría nitritos positivos, no negativos.",
    "b": "Klebsiella pneumoniae también es una enterobacteria productora de nitritos; una infección activa por esta bacteria tendería a dar nitritos positivos, no negativos.",
    "c": "La tira reactiva de orina no tiene ninguna relación con el diagnóstico de meningitis, que requiere el análisis del líquido cefalorraquídeo.",
    "d": "Proteus mirabilis es igualmente una enterobacteria con capacidad de producir nitritos positivos en caso de infección activa.",
    "e": "Correcto: al ser negativos tanto los nitritos como las esterasas leucocitarias, no hay indicios de bacteriuria por enterobacterias ni de piuria, lo que orienta a que probablemente no existe infección urinaria en ese momento (aunque hay que recordar que la tira reactiva tiene limitaciones, por ejemplo, en infecciones por microorganismos que no reducen nitratos, como S. saprophyticus)."
  },
  "repetida": true
},

{
  "id": "t5-006",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Qué significa un resultado de nitritos negativos combinado con esterasas leucocitarias positivas en una tira reactiva de orina?",
  "opciones": { "a": "Que con toda seguridad no existe ningún tipo de infección urinaria", "b": "Que el paciente tiene una meningitis vírica", "c": "Que se trata siempre de una infección por Escherichia coli", "d": "Que la muestra está necesariamente contaminada y debe descartarse por completo", "e": "Que existe piuria pero probablemente no está producida por enterobacterias, sino por microorganismos como Pseudomonas, Staphylococcus o Enterococcus" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La presencia de esterasas positivas (piuria) es compatible con infección urinaria, aunque el agente causal probablemente no sea una enterobacteria; no permite descartar infección con seguridad.",
    "b": "La tira reactiva de orina no guarda relación con el diagnóstico de meningitis vírica, que se basa en el análisis del LCR.",
    "c": "E. coli, al ser una enterobacteria productora de nitrato reductasa, típicamente daría nitritos positivos si estuviera produciendo la infección, no negativos.",
    "d": "No implica necesariamente contaminación de la muestra; puede reflejar una infección real por un microorganismo distinto de las enterobacterias, que no produce nitritos.",
    "e": "Correcto: la presencia de esterasas (indicativas de leucocitos, es decir, piuria) con nitritos negativos sugiere que, si hay infección, esta está producida por microorganismos que no reducen nitratos a nitritos, como Pseudomonas, Staphylococcus o Enterococcus, en lugar de por enterobacterias."
  },
  "repetida": false
},

{
  "id": "t5-007",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Cuál es el medio de cultivo de elección para el urocultivo, y qué características tiene?",
  "opciones": { "a": "El medio de Thayer-Martin, exclusivamente selectivo para Neisseria", "b": "El caldo de selenito, un medio líquido de enriquecimiento", "c": "El medio de Sabouraud, selectivo únicamente para hongos", "d": "El medio CLED, un medio diferencial (lactosa+ amarillo, lactosa- azul o color de la placa) pero no selectivo, ya que permite el crecimiento tanto de Gram positivos como de Gram negativos y levaduras", "e": "El agar Hektoen, selectivo para Salmonella y Shigella" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El medio de Thayer-Martin es específico para el cultivo de Neisseria gonorrhoeae, no es el medio habitual para el urocultivo.",
    "b": "El caldo de selenito es un medio de enriquecimiento para Salmonella en el coprocultivo, no el medio empleado en el urocultivo.",
    "c": "El Sabouraud es un medio específico para hongos; el urocultivo estándar emplea el medio CLED, no Sabouraud, aunque en él también puedan crecer algunas levaduras.",
    "d": "Correcto: el agar CLED (cistina-lactosa-electrolito deficiente) es el medio de elección para el urocultivo; es diferencial de lactosa (colonias amarillas si fermentan la lactosa, azules o del color de la placa si no la fermentan) pero no selectivo, ya que su baja concentración de electrolitos inhibe el 'swarming' de Proteus sin impedir el crecimiento de otros microorganismos, incluidos Gram positivos y levaduras.",
    "e": "El agar Hektoen es un medio entérico para heces (coprocultivo), no el medio habitual para el diagnóstico de la ITU."
  },
  "repetida": false
},

{
  "id": "t5-008",
  "tema": "Infecciones urinarias",
  "pregunta": "En una mujer con síntomas de ITU, el urocultivo semicuantitativo con asa calibrada muestra un recuento de 120.000 UFC/mL de colonias lactosa positivas (amarillas en CLED). ¿Cómo se interpreta este resultado?",
  "opciones": { "a": "Es un recuento significativo de bacteriuria (por encima de 100.000 UFC/mL en mujeres), compatible con infección urinaria, probablemente por una enterobacteria como E. coli", "b": "Es indicativo de bacteriuria asintomática que nunca requiere tratamiento", "c": "No es significativo porque está por debajo del umbral diagnóstico", "d": "Indica necesariamente una contaminación de la muestra", "e": "Solo sería significativo si se tratara de un varón" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el criterio clásico de Kass considera significativo, en mujeres, un recuento igual o superior a 100.000 UFC/mL para enterobacterias; 120.000 UFC/mL de colonias lactosa positivas (amarillas en CLED) es compatible con infección por una enterobacteria como E. coli, la causa más frecuente.",
    "b": "La bacteriuria asintomática se define como un recuento elevado en ausencia de síntomas; en este caso la paciente es sintomática, por lo que se trataría de una ITU sintomática, no de una bacteriuria asintomática.",
    "c": "El umbral en mujeres para enterobacterias es de 100.000 UFC/mL; 120.000 UFC/mL supera ese umbral y por tanto sí es significativo.",
    "d": "Un recuento elevado de un único microorganismo por encima del umbral es indicativo de infección real, no necesariamente de contaminación (que se sospecharía ante crecimiento mixto de varios microorganismos en baja cantidad).",
    "e": "El umbral de 100.000 UFC/mL se aplica precisamente a la mayoría de las ITU en mujeres; en varones el umbral significativo es incluso menor (≥1.000 UFC/mL), no mayor."
  },
  "repetida": false
},

{
  "id": "t5-009",
  "tema": "Infecciones urinarias",
  "pregunta": "En un varón, ¿a partir de qué recuento de UFC/mL se considera significativa la bacteriuria en un urocultivo?",
  "opciones": { "a": "≥10 UFC/mL", "b": "No existe ningún umbral definido para varones", "c": "≥1.000 UFC/mL, un umbral menor que en mujeres porque la contaminación de la muestra es menos probable en varones", "d": "≥100.000 UFC/mL, el mismo umbral que en mujeres siempre", "e": "≥1.000.000 UFC/mL" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Un umbral de 10 UFC/mL sería demasiado bajo y daría lugar a numerosos falsos positivos por contaminación de la muestra.",
    "b": "Sí existe un umbral definido para varones (≥1.000 UFC/mL), distinto del aplicado a mujeres.",
    "c": "Correcto: en varones, en los que la obtención de la muestra de orina es menos susceptible de contaminarse (por la mayor longitud de la uretra y la ausencia de proximidad vaginal), se consideran significativos recuentos iguales o superiores a 1.000 UFC/mL.",
    "d": "El umbral de 100.000 UFC/mL se aplica a la mayoría de las ITU en mujeres por enterobacterias, no es el criterio aplicado en varones, donde el umbral es menor.",
    "e": "Un millón de UFC/mL es un umbral excesivamente alto; el criterio establecido para varones es mucho menor (≥1.000 UFC/mL)."
  },
  "repetida": false
},

{
  "id": "t5-010",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Qué característica tiene Proteus mirabilis al crecer en agar sangre que lo diferencia de otras enterobacterias?",
  "opciones": { "a": "Nunca produce infección urinaria", "b": "Crece en forma de 'olas' concéntricas cubriendo toda la placa, un fenómeno conocido como 'swarming', en lugar de formar colonias individuales aisladas", "c": "Requiere obligatoriamente atmósfera anaerobia estricta", "d": "Es un coco Gram positivo", "e": "Solo crece en agar Sabouraud" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Proteus mirabilis es un uropatógeno frecuente, especialmente asociado a litiasis por su capacidad ureasa (que alcaliniza la orina y favorece la formación de cálculos de estruvita).",
    "b": "Correcto: Proteus mirabilis presenta un fenómeno de migración característico llamado 'swarming', por el que se extiende en oleadas concéntricas cubriendo la superficie del agar sangre, en lugar de dar colonias individuales bien delimitadas como la mayoría de enterobacterias; en el medio CLED, con baja concentración de electrolitos, este swarming queda inhibido, permitiendo obtener colonias aisladas.",
    "c": "Proteus mirabilis es una bacteria anaerobia facultativa, no requiere atmósfera anaerobia estricta para crecer.",
    "d": "Proteus mirabilis es un bacilo Gram NEGATIVO perteneciente a la familia Enterobacteriaceae, no un coco Gram positivo.",
    "e": "El agar Sabouraud es un medio para hongos; Proteus mirabilis, como el resto de enterobacterias, crece en medios bacterianos convencionales como agar sangre, McConkey o CLED."
  },
  "repetida": false
},

{
  "id": "t5-011",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Cuáles son los tres tipos principales de ITU según la localización anatómica de la infección?",
  "opciones": { "a": "Faringitis, sinusitis y otitis", "b": "Gastritis, enteritis y colitis", "c": "Meningitis, encefalitis y absceso cerebral", "d": "Cistitis (vejiga), pielonefritis (riñón) y uretritis (uretra)", "e": "Foliculitis, celulitis y fascitis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Estas son entidades del tracto respiratorio superior, no tienen relación con la clasificación de las infecciones urinarias.",
    "b": "Estas son entidades del tracto gastrointestinal, sin relación con la clasificación anatómica de la ITU.",
    "c": "Estas son infecciones del sistema nervioso central, no guardan relación con la clasificación de las ITU.",
    "d": "Correcto: la cistitis es la ITU inferior más frecuente, especialmente en mujeres, y afecta a la vejiga; la pielonefritis es la ITU superior, mucho más grave, con afectación renal; y la uretritis afecta exclusivamente a la uretra.",
    "e": "Estas son infecciones de la piel y tejidos blandos, sin relación con la clasificación anatómica de las infecciones urinarias."
  },
  "repetida": false
},

{
  "id": "t5-012",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Cuál es la vía de infección más frecuente por la que los microorganismos alcanzan el tracto urinario?",
  "opciones": { "a": "La vía hematógena, en la práctica totalidad de los casos", "b": "La vía ascendente, desde la uretra hacia la vejiga y, en ocasiones, hacia los uréteres y el riñón, sobre todo en mujeres", "c": "La vía respiratoria", "d": "La vía digestiva directa sin paso por la uretra", "e": "La vía transplacentaria exclusivamente" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La vía hematógena existe (sobre todo en el contexto de una bacteriemia) pero es mucho menos frecuente que la vía ascendente como origen de la ITU.",
    "b": "Correcto: la mayoría de las ITU se producen por vía ascendente, con microorganismos de la flora intestinal (fundamentalmente E. coli) que ascienden desde la uretra hasta la vejiga y, en algunos casos, hasta los uréteres y el riñón; esto es especialmente frecuente en mujeres por la menor longitud de la uretra y su proximidad al ano.",
    "c": "La vía respiratoria no es una ruta de infección del tracto urinario.",
    "d": "No existe una vía digestiva directa que evite la uretra; la contaminación desde el tracto digestivo se produce a través de la región perineal y después de forma ascendente por la uretra.",
    "e": "La vía transplacentaria es relevante en infecciones de transmisión vertical al feto, no en el mecanismo habitual de infección del tracto urinario."
  },
  "repetida": false
},

{
  "id": "t5-014",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Cuál es el agente etiológico más habitual de la prostatitis?",
  "opciones": { "a": "Cryptococcus neoformans", "b": "Escherichia coli, ya que la mayoría de las prostatitis provienen de una infección urinaria previa", "c": "Treponema pallidum", "d": "Clostridium difficile", "e": "Mycoplasma genitalium exclusivamente" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Cryptococcus neoformans es una levadura capsulada asociada a meningitis en pacientes con inmunodepresión severa, no un agente habitual de la prostatitis.",
    "b": "Correcto: Escherichia coli es el agente etiológico más habitual de la prostatitis, ya que la mayoría de los casos derivan de una infección del tracto urinario, del cual E. coli es también el principal agente causal.",
    "c": "Treponema pallidum es el agente de la sífilis, una infección de transmisión sexual, no el agente habitual de la prostatitis bacteriana clásica.",
    "d": "Clostridium difficile produce colitis pseudomembranosa asociada a antibióticos, sin relación con la prostatitis.",
    "e": "Mycoplasma genitalium puede causar uretritis no gonocócica, pero no es el agente más habitual de la prostatitis, que se relaciona sobre todo con la flora que causa ITU."
  },
  "repetida": false
},

{
  "id": "t5-015",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Qué diferencia principal existe entre la recogida de orina por punción suprapúbica y la recogida por micción media espontánea?",
  "opciones": { "a": "En la orina obtenida por punción suprapúbica, al evitar por completo el paso por la uretra, cualquier recuento de bacterias se considera indicativo de infección", "b": "Ambas técnicas dan exactamente los mismos umbrales diagnósticos de significación", "c": "La punción suprapúbica es la técnica habitual de primera elección en todos los pacientes", "d": "La punción suprapúbica solo puede realizarse en adultos, nunca en niños", "e": "La micción media siempre es más fiable que la punción suprapúbica" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: al obtenerse la orina directamente de la vejiga sin atravesar la uretra (estéril en condiciones normales por definición si no hay infección), cualquier recuento de bacterias en la orina obtenida por punción suprapúbica se considera indicativo de infección, sin necesidad de aplicar los umbrales habituales de UFC/mL.",
    "b": "El umbral es distinto: en la micción media espontánea se aplican los criterios clásicos de Kass (≥100.000 UFC/mL en mujeres, por ejemplo), mientras que en la punción suprapúbica cualquier crecimiento es indicativo de infección.",
    "c": "La punción suprapúbica es una técnica invasiva reservada para situaciones concretas (niños pequeños con difícil interpretación de otros métodos, sospecha de anaerobios), no la técnica de primera elección habitual.",
    "d": "La punción suprapúbica se emplea sobre todo en niños pequeños, precisamente para el diagnóstico de certeza de ITU cuando otros métodos son de difícil interpretación.",
    "e": "No es una afirmación general correcta; la punción suprapúbica, al evitar la contaminación uretral, puede ser más fiable en determinadas situaciones concretas, aunque sea mucho más invasiva."
  },
  "repetida": false
},

{
  "id": "t5-016",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Cuál es la utilidad de la tinción de Gram directa de una orina sin centrifugar en el contexto de una ITU?",
  "opciones": { "a": "Nunca se utiliza en la práctica clínica", "b": "Es la técnica de elección y sustituye por completo al urocultivo en todos los casos", "c": "Requiere obligatoriamente centrifugar previamente la muestra", "d": "Solo permite detectar hongos, nunca bacterias", "e": "Aporta información inmediata sobre la naturaleza de la infección y ayuda a orientar el tratamiento empírico, sobre todo ante sospecha de pielonefritis, aunque tiene baja sensibilidad para concentraciones bajas de bacterias" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Sí se utiliza en la práctica, aunque de forma más restringida (urgencias, sospecha de pielonefritis), no de forma rutinaria en todos los casos de ITU.",
    "b": "El urocultivo sigue siendo la técnica de elección para el diagnóstico definitivo de la ITU (permite cuantificar, identificar el microorganismo y hacer antibiograma); el Gram es solo una técnica orientativa rápida, no sustituye al cultivo.",
    "c": "Se extiende una gota de orina homogeneizada SIN centrifugar directamente en el porta, no se requiere centrifugación previa para esta técnica concreta.",
    "d": "El Gram de orina permite observar tanto bacterias (bacilos Gram negativos, cocos en racimo Gram positivos) como levaduras, no está limitado a hongos.",
    "e": "Correcto: la tinción de Gram de orina sin centrifugar puede orientar rápidamente el tratamiento empírico, especialmente en pacientes con sospecha de pielonefritis en un contexto de urgencia, aunque su sensibilidad es baja (necesita una concentración relativamente alta, por debajo de 10⁵ UFC/mL puede no detectarse)."
  },
  "repetida": false
},

{
  "id": "t5-017",
  "tema": "Infecciones urinarias",
  "pregunta": "Una embarazada presenta diabetes gestacional. ¿Por qué la diabetes se considera un factor predisponente para la ITU?",
  "opciones": { "a": "Porque los diabéticos nunca pueden tener infecciones urinarias", "b": "Porque la diabetes elimina por completo la flora intestinal", "c": "Porque la glucosa presente en la orina de estos pacientes actúa como nutriente que favorece el desarrollo bacteriano", "d": "Porque la diabetes hace que la orina sea completamente estéril de forma permanente", "e": "Porque la diabetes reduce la longitud de la uretra" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Los pacientes diabéticos tienen, de hecho, mayor riesgo de infecciones urinarias que la población general, no menos.",
    "b": "La diabetes no elimina la flora intestinal; el mecanismo predisponente a la ITU está relacionado con la glucosuria, no con la eliminación de la microbiota.",
    "c": "Correcto: en los pacientes diabéticos, especialmente si el control glucémico es deficiente, puede aparecer glucosa en la orina (glucosuria); esta glucosa actúa como nutriente adicional que favorece el desarrollo y la multiplicación bacteriana en el tracto urinario.",
    "d": "Es justo lo contrario: la diabetes predispone precisamente a la infección urinaria, no protege de ella.",
    "e": "La diabetes no modifica la longitud anatómica de la uretra; el mecanismo de predisposición está relacionado con la glucosuria como sustrato nutritivo bacteriano."
  },
  "repetida": false
},

{
  "id": "t5-018",
  "tema": "Infecciones urinarias",
  "pregunta": "¿Cuál es la temperatura de conservación recomendada para una muestra de orina que no puede procesarse de inmediato para el urocultivo, y por qué?",
  "opciones": { "a": "4ºC en nevera, ya que a esa temperatura las bacterias no mueren pero tampoco se multiplican, preservando así el recuento real de UFC/mL", "b": "37ºC en estufa, para favorecer su multiplicación", "c": "Temperatura ambiente durante 48 horas", "d": "-80ºC en congelador ultra-frío", "e": "100ºC en autoclave" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: si la orina no puede procesarse de inmediato, se conserva en nevera a 4ºC; a esta temperatura las bacterias no mueren pero tampoco se multiplican, lo cual es esencial porque el urocultivo es una técnica cuantitativa (UFC/mL) y una proliferación descontrolada falsearía el resultado.",
    "b": "Incubar a 37ºC favorecería precisamente la multiplicación bacteriana no controlada, falseando al alza el recuento de UFC/mL y comprometiendo la interpretación cuantitativa del urocultivo.",
    "c": "Mantener la muestra a temperatura ambiente durante mucho tiempo permitiría la multiplicación bacteriana, falseando el recuento real; por eso se recomienda refrigerar si no se procesa de inmediato.",
    "d": "La congelación no es necesaria ni recomendada para la conservación rutinaria de una muestra de orina destinada a urocultivo; con la refrigeración a 4ºC es suficiente.",
    "e": "El autoclave esterilizaría por completo la muestra, matando a todas las bacterias, lo cual haría imposible el diagnóstico mediante cultivo."
  },
  "repetida": false
},

{
  "id": "t6-001",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "Una muestra de endocérvix se siembra en medio de Thayer-Martin y al día siguiente se observan colonias. ¿Cuál es el microorganismo más probable?",
  "opciones": { "a": "Streptococcus agalactiae", "b": "Neisseria gonorrhoeae", "c": "Escherichia coli", "d": "Candida albicans", "e": "Chlamydia trachomatis" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Streptococcus agalactiae no crece en el medio de Thayer-Martin, que está diseñado específicamente para el aislamiento selectivo de Neisseria patógenas, inhibiendo el crecimiento de otras bacterias.",
    "b": "Correcto: el medio de Thayer-Martin es rico y selectivo, contiene antibióticos (como vancomicina) que inhiben el crecimiento de la flora comensal vaginal e intestinal, mientras que permite el crecimiento de las Neisserias patógenas como N. gonorrhoeae, causante de la gonorrea/cervicitis gonocócica.",
    "c": "Escherichia coli, como el resto de la flora comensal intestinal y vaginal, está inhibida por los antibióticos que contiene el medio de Thayer-Martin.",
    "d": "Candida albicans es una levadura que no crece de forma característica en el medio de Thayer-Martin, diseñado para bacterias del género Neisseria.",
    "e": "Chlamydia trachomatis es un patógeno intracelular obligado que no puede crecer en ningún medio de cultivo bacteriano artificial como el Thayer-Martin, requiere cultivo celular o PCR."
  },
  "repetida": true
},

{
  "id": "t6-002",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "En el Gram de una muestra uretral de un paciente con secreción purulenta se observan diplococos Gram negativos intracelulares junto con abundantes polimorfonucleares. ¿Qué diagnóstico establece este hallazgo?",
  "opciones": { "a": "Candidiasis vaginal", "b": "Vaginosis bacteriana", "c": "Uretritis gonocócica, ya que la observación de diplococos Gram negativos intracelulares junto con PMN es diagnóstica de infección por Neisseria gonorrhoeae", "d": "Sífilis primaria", "e": "Uretritis no gonocócica por Chlamydia trachomatis" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La candidiasis vaginal se caracteriza por la observación de levaduras y pseudohifas en la tinción de Gram, no diplococos Gram negativos.",
    "b": "La vaginosis bacteriana se caracteriza por la presencia de 'clue cells' (cocobacilos adheridos a células epiteliales), en ausencia de leucocitos, no por diplococos intracelulares.",
    "c": "Correcto: la observación de más de 5 leucocitos PMN por campo junto con diplococos Gram negativos intracelulares en el examen directo de la secreción uretral establece el diagnóstico de uretritis gonocócica.",
    "d": "La sífilis primaria se caracteriza por un chancro indoloro; su diagnóstico directo se basa en la observación de espiroquetas por microscopía de campo oscuro, no en diplococos Gram negativos.",
    "e": "La uretritis no gonocócica se sospecha precisamente cuando hay PMN pero AUSENCIA de diplococos Gram negativos, ya que Chlamydia y Mycoplasma no se visualizan al Gram por ser intracelulares o carecer de pared celular."
  },
  "repetida": false
},

{
  "id": "t6-003",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuáles son los principales agentes etiológicos de la uretritis y cervicitis no gonocócica (UNG)?",
  "opciones": { "a": "Candida albicans exclusivamente", "b": "Neisseria gonorrhoeae exclusivamente", "c": "Chlamydia trachomatis (serotipos D-K), Mycoplasma genitalium y Ureaplasma urealyticum", "d": "Treponema pallidum exclusivamente", "e": "Streptococcus agalactiae exclusivamente" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Candida albicans produce vulvovaginitis candidiásica y balanitis, pero no es la causa típica de la uretritis no gonocócica clásica.",
    "b": "N. gonorrhoeae produce la uretritis GONOCÓCICA, no la no gonocócica, que por definición está causada por otros agentes distintos del gonococo.",
    "c": "Correcto: la UNG está producida principalmente por Chlamydia trachomatis (serotipos D-K, intracelular obligado que solo crece en cultivo celular), Mycoplasma genitalium y Ureaplasma urealyticum (ambos sin pared celular, requieren medios ricos en ácidos grasos para su cultivo); es frecuente la coinfección con N. gonorrhoeae.",
    "d": "Treponema pallidum causa sífilis, una entidad clínica distinta de la uretritis/cervicitis, aunque ambas sean ITS.",
    "e": "Streptococcus agalactiae se asocia sobre todo a colonización vaginal en el embarazo y sepsis/meningitis neonatal, no a la uretritis no gonocócica del adulto."
  },
  "repetida": false
},

{
  "id": "t6-004",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuál es la técnica de elección para el diagnóstico de la uretritis no gonocócica por Chlamydia trachomatis?",
  "opciones": { "a": "Prueba de la coagulasa", "b": "PCR, ya que Chlamydia es un parásito intracelular obligado que no crece en los medios de cultivo bacterianos convencionales", "c": "Cultivo directo en agar sangre", "d": "Cultivo en medio de Thayer-Martin", "e": "Tinción de Gram convencional" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La prueba de la coagulasa se emplea para identificar Staphylococcus aureus, no tiene ninguna relación con el diagnóstico de Chlamydia trachomatis.",
    "b": "Correcto: dado que Chlamydia trachomatis es un parásito intracelular obligado, no puede aislarse en medios de cultivo bacterianos convencionales (necesitaría cultivo celular, muy laborioso), por lo que la PCR es la técnica de elección para su diagnóstico.",
    "c": "Chlamydia trachomatis no crece en agar sangre, al ser un patógeno intracelular obligado que necesita el interior de una célula viva para replicarse.",
    "d": "El medio de Thayer-Martin es específico para el aislamiento de Neisseria gonorrhoeae, no permite el crecimiento de Chlamydia trachomatis.",
    "e": "Chlamydia no se visualiza bien con la tinción de Gram convencional debido a su ciclo intracelular; la ausencia de diplococos Gram negativos con presencia de PMN es lo que hace sospechar precisamente de este agente."
  },
  "repetida": false
},

{
  "id": "t6-005",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Qué caracteriza a la sífilis primaria?",
  "opciones": { "a": "Un periodo completamente asintomático desde el inicio", "b": "Un exantema maculopapular que afecta a palmas y plantas", "c": "Fiebre muy alta con petequias generalizadas", "d": "La presencia de una lesión papular solitaria e indolora que evoluciona a una úlcera denominada chancro, generalmente acompañada de adenopatías, y que cura espontáneamente", "e": "La aparición de gomas sifilíticas en la piel y afectación del sistema nervioso central" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La sífilis primaria SÍ es sintomática, precisamente por la aparición del chancro; el periodo asintomático (de latencia) ocurre DESPUÉS, entre las distintas fases clínicas.",
    "b": "El exantema maculopapular con afectación de palmas y plantas (las llamadas 'sifílides') es característico de la sífilis SECUNDARIA, no de la primaria.",
    "c": "La fiebre alta con petequias generalizadas es más característica de un cuadro de sepsis meningocócica, no de la sífilis primaria.",
    "d": "Correcto: la sífilis primaria se caracteriza por una lesión papular solitaria e indolora que evoluciona rápidamente a una úlcera (chancro), generalmente acompañada de adenopatías; la lesión cura espontáneamente aunque el treponema ya se ha diseminado por la sangre.",
    "e": "Las gomas sifilíticas y la afectación grave del SNC y sistema cardiovascular son propias de la sífilis TERCIARIA, la fase tardía de la enfermedad."
  },
  "repetida": false
},

{
  "id": "t6-006",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuál es la técnica de elección para el diagnóstico directo de la sífilis primaria, aprovechando la presencia del chancro?",
  "opciones": { "a": "La prueba de la optoquina", "b": "El cultivo en agar Sabouraud", "c": "La tinción de Gram convencional, en la que se observan espiroquetas Gram positivas", "d": "El examen con microscopio de campo oscuro del exudado del chancro, dado que Treponema pallidum no puede cultivarse de forma rutinaria y no se observa con la tinción de Gram", "e": "El test de CAMP" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La prueba de la optoquina se emplea para diferenciar S. pneumoniae de los estreptococos viridans, sin relación con el diagnóstico de la sífilis.",
    "b": "El agar Sabouraud es un medio de cultivo para hongos, no permite el crecimiento de Treponema pallidum, que no es cultivable de forma rutinaria en ningún medio artificial.",
    "c": "Los treponemas NO se observan con la tinción de Gram convencional, precisamente por eso se recurre al microscopio de campo oscuro para su visualización directa.",
    "d": "Correcto: dado que el cultivo de T. pallidum no es viable en la práctica clínica habitual, el examen microscópico de campo oscuro (o de contraste de fases) de una gota de exudado del chancro permite observar los treponemas, que aparecen brillantes y móviles; también puede emplearse inmunofluorescencia directa o PCR.",
    "e": "El test de CAMP se emplea para identificar Streptococcus agalactiae, sin ninguna relación con el diagnóstico de la sífilis."
  },
  "repetida": false
},

{
  "id": "t6-007",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "Respecto al diagnóstico serológico indirecto de la sífilis, ¿cuál es la diferencia entre las pruebas no treponémicas (RPR, VDRL) y las treponémicas (FTA-ABS, TPHA)?",
  "opciones": { "a": "Las pruebas treponémicas se emplean como cribado inicial y las no treponémicas como confirmación", "b": "Las no treponémicas son siempre más específicas que las treponémicas", "c": "Las pruebas no treponémicas se negativizan siempre tras el tratamiento correcto en cuestión de horas", "d": "Las no treponémicas son pruebas de cribado, rápidas y sensibles pero poco específicas, mientras que las treponémicas son pruebas de confirmación, mucho más específicas", "e": "Ambas detectan directamente al treponema en la muestra, no anticuerpos" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Es al contrario: las pruebas no treponémicas (más sensibles, menos específicas) se usan como cribado inicial, y las treponémicas (más específicas) se emplean para confirmar un resultado positivo.",
    "b": "Es justo al revés: las pruebas treponémicas son las más específicas, mientras que las no treponémicas son más sensibles pero menos específicas, de ahí su uso como cribado y no como confirmación.",
    "c": "Las pruebas no treponémicas pueden tardar meses en negativizarse tras un tratamiento eficaz, no se negativizan en cuestión de horas.",
    "d": "Correcto: las pruebas no treponémicas (RPR, VDRL) detectan anticuerpos inespecíficos (reagínicos) frente a un antígeno lipoideo generado por la interacción del treponema con los tejidos del huésped; son rápidas y sensibles (útiles como cribado) pero poco específicas, por lo que un resultado positivo debe confirmarse con una prueba treponémica (FTA-ABS, TPHA, ELISA), mucho más específica al emplear como antígeno el propio T. pallidum.",
    "e": "Ninguna de las dos detecta directamente al treponema; ambas son técnicas indirectas (serológicas) que detectan anticuerpos en el suero del paciente, aunque frente a antígenos distintos."
  },
  "repetida": false
},

{
  "id": "t6-008",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "El linfogranuloma venéreo está causado por:",
  "opciones": { "a": "Neisseria gonorrhoeae", "b": "El virus del papiloma humano", "c": "Chlamydia trachomatis, en este caso por los serotipos L1, L2 y L3", "d": "Treponema pallidum", "e": "Gardnerella vaginalis" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Neisseria gonorrhoeae causa la gonorrea (uretritis/cervicitis gonocócica), una entidad clínica distinta del linfogranuloma venéreo.",
    "b": "El VPH produce verrugas genitales (condilomas) o lesiones precancerosas de cérvix, sin relación con el linfogranuloma venéreo.",
    "c": "Correcto: el linfogranuloma venéreo está producido por los serotipos L1, L2 y L3 de Chlamydia trachomatis, distintos de los serotipos D-K (causantes de uretritis/cervicitis no gonocócica); su diagnóstico se realiza también mediante PCR, al tratarse de un patógeno intracelular obligado.",
    "d": "Treponema pallidum es el agente causal de la sífilis, no del linfogranuloma venéreo.",
    "e": "Gardnerella vaginalis es el agente asociado a la vaginosis bacteriana, una infección endógena no relacionada con el linfogranuloma venéreo."
  },
  "repetida": false
},

{
  "id": "t6-009",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuál de las siguientes afirmaciones sobre la candidiasis vaginal es correcta?",
  "opciones": { "a": "Se caracteriza por 'clue cells' en el Gram", "b": "Está producida por Trichomonas vaginalis", "c": "Es siempre una ITS estricta que nunca puede aparecer sin contacto sexual", "d": "No se considera una infección de transmisión sexual, sino endógena, aunque puede transmitirse por vía sexual y producir balanitis en la pareja", "e": "Requiere obligatoriamente cultivo en medio de Thayer-Martin para su diagnóstico" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Las 'clue cells' son características de la vaginosis bacteriana por Gardnerella vaginalis, no de la candidiasis.",
    "b": "La candidiasis vaginal está producida por la levadura Candida albicans, no por el protozoo Trichomonas vaginalis, que causa una entidad clínica distinta.",
    "c": "No es una ITS estricta: puede aparecer sin ningún contacto sexual, por ejemplo tras un tratamiento antibiótico que altere el equilibrio de la flora vaginal normal.",
    "d": "Correcto: la candidiasis vaginal, causada por Candida albicans (levadura que forma parte de la flora comensal normal), se considera una infección endógena, no una ITS estricta, ya que suele aparecer por desequilibrio de la flora vaginal (antibióticos, embarazo, anticonceptivos); no obstante, hasta el 12-15% de las parejas sexuales de mujeres infectadas pueden desarrollar balanitis por contacto.",
    "e": "El diagnóstico de la candidiasis se realiza mediante Gram (observación de levaduras) y cultivo en agar Sabouraud, no en el medio de Thayer-Martin, que es específico para Neisseria."
  },
  "repetida": true
},

{
  "id": "t6-010",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Qué hallazgo característico en la tinción de Gram de un exudado vaginal es diagnóstico de vaginosis bacteriana por Gardnerella vaginalis?",
  "opciones": { "a": "La presencia de hifas y pseudohifas", "b": "La presencia de espiroquetas móviles", "c": "La presencia exclusiva de abundantes polimorfonucleares sin ningún otro hallazgo", "d": "La presencia de 'clue cells' (células epiteliales tapizadas de cocobacilos adheridos) en ausencia de leucocitos polimorfonucleares", "e": "La presencia de abundantes diplococos Gram negativos intracelulares" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La presencia de hifas y pseudohifas es característica de la candidiasis vaginal, producida por Candida albicans, no de la vaginosis bacteriana.",
    "b": "Las espiroquetas móviles se observarían en la sífilis mediante microscopía de campo oscuro, no son el hallazgo característico de la vaginosis bacteriana.",
    "c": "Precisamente lo característico de la vaginosis bacteriana es la AUSENCIA de leucocitos PMN, ya que no genera una reacción inflamatoria clásica; su hallazgo diagnóstico son las 'clue cells', no simplemente PMN.",
    "d": "Correcto: las 'clue cells' son células epiteliales vaginales cubiertas de cocobacilos adheridos a su superficie, características de la vaginosis bacteriana; a diferencia de una vaginitis inflamatoria clásica, en la vaginosis bacteriana no hay reacción inflamatoria y por tanto no se observan PMN.",
    "e": "Los diplococos Gram negativos intracelulares son característicos de la infección gonocócica, no de la vaginosis bacteriana."
  },
  "repetida": false
},

{
  "id": "t6-011",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Qué caracteriza a la vaginosis bacteriana desde el punto de vista de la flora vaginal?",
  "opciones": { "a": "Se caracteriza por el aumento masivo de lactobacilos protectores", "b": "Está producida por el virus del herpes simple", "c": "Es siempre secundaria a una infección por Neisseria gonorrhoeae", "d": "Es una disbacteriosis en la que desaparecen los lactobacilos normales y aparece una flora mixta con predominio de Gardnerella vaginalis, Mycoplasma hominis y anaerobios", "e": "Cursa siempre con intensa reacción inflamatoria con abundantes PMN" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Es justo lo contrario: en la vaginosis bacteriana DISMINUYEN los lactobacilos protectores, lo que permite el sobrecrecimiento de la flora mixta anómala.",
    "b": "La vaginosis bacteriana está producida por un desequilibrio bacteriano de la flora vaginal (predominio de Gardnerella y anaerobios), no por el virus del herpes simple, que causa una entidad clínica distinta (infección herpética genital).",
    "c": "La vaginosis bacteriana es una entidad endógena independiente, no secundaria a una infección gonocócica previa.",
    "d": "Correcto: la vaginosis bacteriana es una disbacteriosis (desequilibrio de la flora) en la que disminuyen o desaparecen los lactobacilos normales de la flora vaginal, apareciendo en su lugar una flora mixta con predominio de Gardnerella vaginalis, Mycoplasma hominis y bacterias anaerobias.",
    "e": "A diferencia de una vaginitis inflamatoria clásica, la vaginosis bacteriana no cursa con reacción inflamatoria significativa, por lo que no se observan abundantes PMN."
  },
  "repetida": false
},

{
  "id": "t6-012",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuál es la muestra y la técnica adecuada para el diagnóstico de la infección genital por herpes simple (VHS-2)?",
  "opciones": { "a": "Orina para tira reactiva", "b": "Biopsia de médula ósea", "c": "Heces para coprocultivo", "d": "Sangre para hemocultivo", "e": "Líquido vesicular, a partir del cual se realiza inmunofluorescencia directa o PCR" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La tira reactiva de orina se emplea en el cribado de infecciones urinarias, sin relación con el diagnóstico del herpes genital.",
    "b": "La biopsia de médula ósea se emplea, por ejemplo, en el diagnóstico de la leishmaniosis visceral, sin relación con el diagnóstico del herpes genital.",
    "c": "El coprocultivo se emplea para el diagnóstico de enteritis bacterianas, sin relación con las lesiones vesiculares del herpes genital.",
    "d": "El hemocultivo se emplea para el diagnóstico de bacteriemia, no es la técnica ni la muestra adecuada para el diagnóstico del herpes genital, una infección localizada.",
    "e": "Correcto: se toma una muestra de líquido vesicular de las lesiones genitales características, a partir de la cual se puede realizar inmunofluorescencia directa (detección de antígeno) o PCR (detección de material genético), siendo estas las técnicas habituales para el diagnóstico de virus."
  },
  "repetida": false
},

{
  "id": "t6-013",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "Los genotipos 16 y 18 del virus del papiloma humano (VPH) se asocian principalmente a:",
  "opciones": { "a": "Verrugas genitales o condilomas acuminados exclusivamente benignos", "b": "Lesiones precancerosas y carcinoma de cérvix", "c": "La aparición de vesículas dolorosas típicas del herpes genital", "d": "La colitis pseudomembranosa", "e": "La aparición de un chancro sifilítico" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Las verrugas genitales o condilomas acuminados (con forma de cresta de gallo o coliflor) están producidos fundamentalmente por los genotipos 6 y 11, considerados de bajo riesgo oncogénico, no por los genotipos 16 y 18.",
    "b": "Correcto: aunque existen múltiples genotipos de VPH, los genotipos 16 y 18 son los que con mayor frecuencia se asocian a lesiones que pueden evolucionar a carcinoma de cuello uterino, por lo que están incluidos en los programas de cribado (qPCR en cepillado endocervical) y en las vacunas.",
    "c": "Las vesículas dolorosas son típicas de la infección por el virus del herpes simple, no del VPH.",
    "d": "La colitis pseudomembranosa está producida por Clostridium difficile, sin ninguna relación con el VPH.",
    "e": "El chancro sifilítico está producido por Treponema pallidum, sin ninguna relación con el virus del papiloma humano."
  },
  "repetida": false
},

{
  "id": "t6-014",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuáles son las principales vías de transmisión del VIH?",
  "opciones": { "a": "Únicamente vía feco-oral", "b": "Únicamente por contacto directo con la piel intacta", "c": "Únicamente vía respiratoria", "d": "Únicamente por picadura de mosquito", "e": "Vía parenteral (sangre y derivados), vía sexual (la más frecuente) y vía vertical (congénita, perinatal o por lactancia)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El VIH no se transmite por vía feco-oral, a diferencia de virus como el de la hepatitis A o algunas enteritis bacterianas.",
    "b": "El contacto con piel intacta no transmite el VIH; se requiere contacto con fluidos corporales infectados a través de mucosas o soluciones de continuidad en la piel.",
    "c": "El VIH no se transmite por vía respiratoria (aerosoles o gotas), a diferencia de otros patógenos respiratorios estudiados en la asignatura.",
    "d": "A diferencia de otras enfermedades como la malaria, el VIH no se transmite por la picadura de mosquitos ni de otros vectores.",
    "e": "Correcto: el VIH se transmite por vía parenteral (sangre y hemoderivados contaminados), vía sexual (la vía más frecuente de transmisión) y vía vertical (transmisión de la madre al hijo, ya sea intraútero, durante el parto o mediante la lactancia)."
  },
  "repetida": false
},

{
  "id": "t6-015",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "Durante la primoinfección por VIH (primer estadio), ¿qué se puede detectar en el paciente?",
  "opciones": { "a": "Un recuento de linfocitos T CD4 siempre normal en todos los casos", "b": "Ausencia total de carga viral en sangre", "c": "Una carga viral muy elevada (hasta 10⁶ copias de ARN/mL) y el antígeno p24, mientras que aún no se detectan anticuerpos específicos frente al virus", "d": "Anticuerpos específicos frente al VIH desde el primer día de la infección", "e": "Nunca se detecta ningún marcador virológico en esta fase" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El recuento de linfocitos T CD4 puede disminuir transitoriamente por debajo de su cifra normal durante la primoinfección, no se mantiene siempre normal.",
    "b": "Es justo lo contrario: la carga viral está muy elevada durante la primoinfección, precisamente porque el virus se está multiplicando sin control inmune todavía desarrollado.",
    "c": "Correcto: en la primoinfección (primer estadio) la carga viral es muy elevada (el virus se replica sin oposición inmune aún desarrollada) y se detecta el antígeno p24, pero todavía no se han generado anticuerpos específicos, que aparecerán 1-2 semanas después cuando el cuadro revierte espontáneamente; esta es la fase de mayor contagiosidad.",
    "d": "Los anticuerpos específicos tardan en aparecer (periodo ventana); no están presentes desde el primer día de la infección, precisamente por eso el antígeno p24 es tan útil en esta fase precoz.",
    "e": "Sí se detectan marcadores virológicos en esta fase, como la carga viral (ARN) muy elevada y el antígeno p24, aunque los anticuerpos aún no sean detectables."
  },
  "repetida": false
},

{
  "id": "t6-016",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuál es el protocolo diagnóstico habitual para confirmar la infección por VIH en un paciente?",
  "opciones": { "a": "Realizar la prueba de RPR o VDRL como confirmación", "b": "Realizar únicamente una prueba rápida sin ninguna confirmación posterior en caso positivo", "c": "Realizar un ELISA y, solo si es negativo, confirmar con Western-blot", "d": "Realizar un ELISA de cribado y, en caso de resultado positivo, confirmar con un Western-blot", "e": "Realizar directamente un Western-blot sin ninguna prueba previa de cribado" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "RPR y VDRL son pruebas serológicas para la sífilis, no tienen ninguna relación con la confirmación diagnóstica de la infección por VIH.",
    "b": "Un resultado positivo en una prueba rápida siempre requiere confirmación posterior con una técnica de laboratorio más específica antes de establecer el diagnóstico definitivo.",
    "c": "Es al revés: el Western-blot de confirmación se realiza cuando el ELISA es POSITIVO, no cuando es negativo (un ELISA negativo, en ausencia de sospecha de periodo ventana, descarta la infección).",
    "d": "Correcto: el protocolo estándar es realizar primero un ELISA de cribado (alta sensibilidad, capaz de detectar anticuerpos y, en los de cuarta generación, también el antígeno p24) y, si resulta positivo, confirmar el diagnóstico mediante Western-blot, una técnica más específica.",
    "e": "El Western-blot no se realiza como primera prueba; se reserva como técnica confirmatoria tras un resultado positivo en la prueba de cribado (ELISA), ya que es más laboriosa y costosa."
  },
  "repetida": true
},

{
  "id": "t6-017",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Qué ventaja aportan los ELISA de cuarta generación en el diagnóstico del VIH frente a los de generaciones anteriores?",
  "opciones": { "a": "Se emplean exclusivamente para el diagnóstico de la sífilis", "b": "Detectan simultáneamente anticuerpos y el antígeno p24, lo que permite diagnosticar la infección en estadios muy iniciales, reduciendo el periodo ventana a 13-15 días", "c": "No requieren ninguna muestra de sangre del paciente", "d": "Son pruebas de confirmación definitivas que sustituyen al Western-blot", "e": "Solo detectan anticuerpos, nunca antígeno" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Los ELISA de cuarta generación se emplean para el diagnóstico del VIH, no para la sífilis, que emplea otras pruebas serológicas específicas (RPR, VDRL, FTA-ABS, TPHA).",
    "b": "Correcto: los ELISA de cuarta generación son capaces de detectar simultáneamente anticuerpos (Ac) frente al VIH y el antígeno p24, lo que permite diagnosticar la infección en fases muy iniciales, cuando aún no hay anticuerpos pero sí antígeno circulante, reduciendo el periodo ventana a 13-15 días.",
    "c": "Los ELISA requieren una muestra de suero del paciente, obtenida a partir de una extracción de sangre, para poder analizarla.",
    "d": "El ELISA (incluido el de cuarta generación) es una prueba de CRIBADO, no de confirmación; un resultado positivo debe confirmarse siempre con Western-blot.",
    "e": "Precisamente su ventaja frente a generaciones anteriores es que detectan también el antígeno p24, no solo anticuerpos."
  },
  "repetida": false
},

{
  "id": "t6-018",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "Sobre las pruebas rápidas de VIH (inmunocromatográficas, realizadas en sangre capilar o fluido oral), señale la afirmación correcta",
  "opciones": { "a": "Un resultado positivo nunca necesita confirmarse", "b": "Detectan directamente el ARN viral mediante PCR", "c": "Solo pueden realizarse en un laboratorio hospitalario especializado", "d": "Son la prueba de elección para la confirmación diagnóstica definitiva", "e": "Un resultado positivo siempre requiere confirmación posterior de laboratorio, mientras que un resultado negativo no requiere confirmación si ya ha pasado el periodo ventana" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Un resultado positivo en una prueba rápida siempre debe confirmarse con técnicas de laboratorio más específicas antes de dar un diagnóstico definitivo.",
    "b": "Las pruebas rápidas habituales detectan anticuerpos frente al VIH mediante inmunocromatografía, no se basan en la amplificación por PCR del ARN viral.",
    "c": "Una de las ventajas de las pruebas rápidas es precisamente que pueden realizarse en entornos no clínicos, como farmacias, gracias a su simplicidad, bajo coste y rapidez de respuesta.",
    "d": "Las pruebas rápidas son pruebas de cribado, no de confirmación; la confirmación definitiva requiere técnicas de laboratorio más específicas como el Western-blot.",
    "e": "Correcto: las pruebas rápidas de VIH son técnicas de cribado inmunocromatográficas; un resultado positivo siempre debe confirmarse posteriormente en el laboratorio (ELISA/Western-blot), mientras que un resultado negativo no requiere confirmación adicional siempre que hayan transcurrido los 3 meses del periodo ventana desde la posible exposición de riesgo."
  },
  "repetida": false
},

{
  "id": "t6-019",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "En el tercer estadio de la infección por VIH (SIDA), ¿qué produce finalmente la muerte del paciente?",
  "opciones": { "a": "El virus destruye directamente el corazón del paciente en todos los casos", "b": "La subida masiva de linfocitos T CD4 por encima de lo normal", "c": "El VIH nunca produce complicaciones graves ni mortalidad", "d": "Una reacción alérgica inmediata al virus", "e": "No es el virus en sí mismo, sino las enfermedades oportunistas y neoplasias que aparecen como consecuencia de la inmunodepresión severa, cuando los linfocitos T CD4 caen por debajo de 200/microlitro" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El VIH no destruye directamente el corazón; su mecanismo patogénico principal es la destrucción progresiva de los linfocitos T CD4, lo que abre la puerta a infecciones oportunistas y neoplasias.",
    "b": "Es justo lo contrario: en la progresión de la enfermedad los linfocitos T CD4 disminuyen progresivamente, no aumentan, siendo esta caída la que marca la evolución hacia el SIDA.",
    "c": "El VIH, sin tratamiento antirretroviral, puede evolucionar hacia el SIDA y producir mortalidad significativa por las complicaciones asociadas a la inmunodepresión.",
    "d": "El mecanismo de la enfermedad no es una reacción alérgica inmediata, sino un proceso lento y progresivo de destrucción del sistema inmune a lo largo de años.",
    "e": "Correcto: en el estadio de SIDA, cuando los linfocitos T CD4 caen por debajo de 200/microlitro, el paciente desarrolla enfermedades oportunistas (micobacterias, candidiasis, toxoplasmosis, criptosporidiosis) y neoplasias (sarcoma de Kaposi, linfomas), que son las que finalmente conducen a la muerte, no el virus por sí mismo."
  },
  "repetida": false
},

{
  "id": "t6-020",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "La enfermedad inflamatoria pélvica (EIP) se produce por:",
  "opciones": { "a": "Una infección exclusivamente vírica sin ninguna implicación bacteriana", "b": "El consumo de alimentos contaminados", "c": "Nunca produce complicaciones a largo plazo", "d": "El ascenso de microorganismos desde el cérvix hacia el endometrio, las trompas de Falopio, los ovarios y las estructuras pélvicas contiguas, con Neisseria gonorrhoeae y Chlamydia trachomatis como principales implicados", "e": "Está producida siempre por Treponema pallidum" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La EIP es predominantemente de causa bacteriana (gonococo, clamidia, flora mixta), no vírica.",
    "b": "La EIP no tiene relación con el consumo de alimentos contaminados; es una infección ascendente desde el tracto genital inferior.",
    "c": "La EIP puede tener consecuencias graves a largo plazo, como embarazo ectópico, infertilidad y dolor pélvico crónico, por las adherencias que genera en las trompas de Falopio.",
    "d": "Correcto: la EIP ocurre cuando microorganismos ascienden desde el cérvix hasta el endometrio (endometritis), las trompas de Falopio (salpingitis), los ovarios y estructuras pélvicas contiguas; N. gonorrhoeae y C. trachomatis están implicados en la mayoría de los casos, aunque también puede participar flora vaginal mixta tras procedimientos ginecológicos.",
    "e": "Treponema pallidum causa sífilis, una entidad clínica distinta de la enfermedad inflamatoria pélvica, cuyos principales agentes son N. gonorrhoeae y C. trachomatis."
  },
  "repetida": false
},

{
  "id": "t6-022",
  "tema": "Infecciones de transmisión sexual e infecciones del tracto genital",
  "pregunta": "¿Cuál de las siguientes asociaciones entre microorganismo y patología del tracto genital es CORRECTA?",
  "opciones": { "a": "Vaginosis bacteriana – Streptococcus pyogenes", "b": "Sífilis – Neisseria gonorrhoeae", "c": "Uretritis gonocócica – Neisseria gonorrhoeae", "d": "Uretritis gonocócica – Chlamydia trachomatis", "e": "Candidiasis vaginal – Trichomonas vaginalis" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La vaginosis bacteriana está asociada a Gardnerella vaginalis (junto a Mycoplasma hominis y anaerobios), no a Streptococcus pyogenes.",
    "b": "La sífilis está producida por Treponema pallidum, una espiroqueta, no por Neisseria gonorrhoeae, que produce la gonorrea.",
    "c": "Correcto: la uretritis/cervicitis gonocócica está causada específicamente por Neisseria gonorrhoeae, un diplococo Gram negativo, transmitido por vía sexual.",
    "d": "Chlamydia trachomatis es la causa de la uretritis NO gonocócica, no de la gonocócica, que por definición está producida por el gonococo.",
    "e": "La candidiasis vaginal está producida por la levadura Candida albicans, no por el protozoo Trichomonas vaginalis, que causa la tricomoniasis, una entidad clínica distinta."
  },
  "repetida": false
},

{
  "id": "t7-001",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Qué diferencia principal existe entre la diarrea acuosa (secretora) y la diarrea invasiva (disentérica)?",
  "opciones": { "a": "La diarrea acuosa siempre contiene sangre visible", "b": "La diarrea invasiva se limita exclusivamente al intestino delgado proximal", "c": "La diarrea acuosa afecta al intestino delgado proximal alterando la absorción de fluidos, mientras que la diarrea invasiva afecta al colon, produciendo heces con sangre, moco y pus, pero de menor volumen", "d": "La diarrea invasiva nunca cursa con fiebre", "e": "No existe ninguna diferencia real entre ambos tipos de diarrea" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La diarrea acuosa, por definición, es líquida y no suele contener sangre visible; la presencia de sangre es más característica de la diarrea invasiva.",
    "b": "Es justo lo contrario: la diarrea invasiva se centra en el COLON, mientras que la diarrea acuosa es la que afecta principalmente al intestino delgado proximal.",
    "c": "Correcto: la diarrea acuosa o secretora está producida por mecanismos que afectan al intestino delgado proximal (donde ocurre más del 90% de la absorción fisiológica de fluidos), dando lugar a heces líquidas abundantes; la diarrea invasiva o disentérica se centra en el colon, con rotura de la mucosa, dando heces de menor volumen pero con sangre, moco y pus.",
    "d": "La diarrea invasiva, al asociarse a bacterias invasivas del colon, con frecuencia sí cursa con fiebre, a diferencia de muchos cuadros de diarrea enterotoxigénica.",
    "e": "Sí existe una diferencia clínica y fisiopatológica clara entre ambos tipos de diarrea, que además orienta hacia distintos grupos de agentes etiológicos."
  },
  "repetida": false
},

{
  "id": "t7-002",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuáles son los agentes que con mayor frecuencia causan la diarrea del viajero?",
  "opciones": { "a": "Rotavirus exclusivamente", "b": "Vibrio cholerae exclusivamente", "c": "Clostridium botulinum", "d": "Escherichia coli enterotoxigénica (ECET) y enteroagregativa (ECEA)", "e": "Trichinella spiralis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Rotavirus es la causa más frecuente de gastroenteritis vírica INFANTIL, no específicamente de la diarrea del viajero en adultos.",
    "b": "Vibrio cholerae causa cólera, una entidad más grave y de distribución geográfica más específica, pero no es el agente más frecuente de la diarrea del viajero clásica.",
    "c": "Clostridium botulinum produce botulismo por toxina preformada en alimentos mal conservados, un cuadro neurológico grave, no la diarrea del viajero clásica.",
    "d": "Correcto: entre los microorganismos que con mayor frecuencia causan la diarrea del viajero destacan las cepas de E. coli enterotoxigénica (ECET) y enteroagregativa (ECEA), adquiridas por consumo de alimentos crudos o poco cocinados, o agua contaminada.",
    "e": "Trichinella spiralis es un nematodo que se localiza en el músculo tras ingerir carne contaminada, no es un agente típico de la diarrea del viajero."
  },
  "repetida": true
},

{
  "id": "t7-003",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuál es la causa más frecuente de diarrea nosocomial, especialmente en personas mayores hospitalizadas tras tratamiento antibiótico prolongado?",
  "opciones": { "a": "Clostridium difficile, que puede ocasionar colitis pseudomembranosa", "b": "Trichuris trichiura", "c": "Vibrio cholerae", "d": "Staphylococcus saprophyticus", "e": "Rotavirus" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la causa más importante de diarrea nosocomial es Clostridium difficile, un anaerobio estricto que forma parte de nuestra propia flora y que, tras la eliminación de la flora protectora por un tratamiento antibiótico prolongado, prolifera libremente y produce una toxina causante de la colitis pseudomembranosa.",
    "b": "Trichuris trichiura es un nematodo intestinal, sin relación con la diarrea nosocomial asociada al tratamiento antibiótico.",
    "c": "Vibrio cholerae causa el cólera, de distribución más epidémica y no asociado típicamente al uso hospitalario de antibióticos.",
    "d": "Staphylococcus saprophyticus es un uropatógeno, no está relacionado con la diarrea nosocomial.",
    "e": "Rotavirus es la causa más frecuente de gastroenteritis vírica infantil (autolimitada, más frecuente en invierno), no de la diarrea nosocomial asociada a antibióticos en adultos mayores."
  },
  "repetida": false
},

{
  "id": "t7-004",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuáles de las siguientes son bacterias enteroinvasivas, es decir, que actúan invadiendo directamente la mucosa intestinal?",
  "opciones": { "a": "Clostridium perfringens exclusivamente", "b": "Clostridium botulinum exclusivamente", "c": "Salmonella entérica, Campylobacter jejuni, Shigella spp., Yersinia enterocolitica y Escherichia coli enteroinvasiva", "d": "Staphylococcus aureus y Bacillus cereus, por toxinas preformadas en el alimento", "e": "Vibrio cholerae exclusivamente" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Clostridium perfringens produce una toxina formada en el tubo digestivo (mecanismo enterotoxigénico), no actúa invadiendo directamente la mucosa intestinal.",
    "b": "Clostridium botulinum produce la toxina botulínica al multiplicarse en atmósfera anaerobia en alimentos, causando botulismo, un cuadro neurológico, no una gastroenteritis invasiva.",
    "c": "Correcto: las bacterias invasivas producen cambios inflamatorios y destructivos en la mucosa del colon, ya sea por invasión directa o mediante citotoxinas; los apuntes destacan explícitamente a Salmonella entérica (serotipos Typhimurium y Enteritidis), Campylobacter jejuni, Shigella, Yersinia enterocolitica y E. coli enteroinvasiva (ECIE) como el grupo clásico de bacterias invasivas.",
    "d": "S. aureus y B. cereus producen toxinas preformadas en el alimento, dando lugar a un cuadro afebril de náuseas y vómitos, no a un mecanismo invasivo sobre la mucosa intestinal.",
    "e": "Vibrio cholerae actúa mediante una toxina que provoca diarrea secretora masiva (mecanismo enterotoxigénico), no mediante invasión de la mucosa."
  },
  "repetida": false
},

{
  "id": "t7-005",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "Un paciente presenta náuseas y vómitos de comienzo muy rápido (menos de 6 horas tras la ingesta), sin fiebre, tras consumir un alimento en mal estado. ¿Qué mecanismo es el más probable?",
  "opciones": { "a": "Una infección invasiva por Shigella, con un periodo de incubación de varios días", "b": "Una infección por Mycobacterium tuberculosis", "c": "Una infección por Treponema pallidum", "d": "Una toxina termoestable ya preformada en el alimento, típicamente producida por Staphylococcus aureus o Bacillus cereus", "e": "Una fiebre tifoidea por Salmonella Typhi" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Las bacterias invasivas como Shigella requieren que la bacteria se multiplique primero en el intestino, por lo que el inicio de los síntomas es mucho más tardío (al menos 24 horas), y suele acompañarse de fiebre.",
    "b": "Mycobacterium tuberculosis no produce toxiinfecciones alimentarias agudas; es el agente de la tuberculosis, con un curso clínico completamente distinto.",
    "c": "Treponema pallidum es el agente de la sífilis, sin ninguna relación con las toxiinfecciones alimentarias.",
    "d": "Correcto: cuando el microorganismo ya ha crecido en el alimento y ha generado la toxina antes de su ingesta (toxina preformada), el cuadro de náuseas y vómitos aparece de forma casi inmediata (menos de 6 horas), sin fiebre, como ocurre típicamente con Staphylococcus aureus y Bacillus cereus.",
    "e": "La fiebre tifoidea por Salmonella Typhi tiene un curso mucho más prolongado y sistémico, con bacteriemia persistente, no un cuadro brusco de vómitos en menos de 6 horas."
  },
  "repetida": false
},

{
  "id": "t7-006",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuál es el medio de transporte recomendado para las muestras de heces cuando no pueden procesarse en las 2 horas siguientes a su emisión?",
  "opciones": { "a": "El medio Cary-Blair, manteniéndose a 4ºC hasta su siembra", "b": "El medio BCYE", "c": "El medio de Thayer-Martin", "d": "El medio Löwenstein-Jensen", "e": "El medio Stuart, exclusivamente a temperatura ambiente" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: si la muestra de heces no puede procesarse dentro de las 2 horas siguientes a su emisión, se recomienda conservarla en el medio de transporte Cary-Blair, manteniéndola a 4ºC hasta su siembra; si se van a realizar estudios de toxinas o técnicas moleculares, es preferible congelarla a -20ºC.",
    "b": "El medio BCYE es específico para el cultivo de Legionella pneumophila, sin relación con el transporte de heces.",
    "c": "El medio de Thayer-Martin es específico para el cultivo de Neisseria gonorrhoeae, no es un medio de transporte para muestras de heces.",
    "d": "El medio Löwenstein-Jensen es específico para el cultivo de micobacterias, sin relación con el transporte de heces.",
    "e": "El medio Stuart se emplea como medio de transporte para muestras genitales u óticas, no es el medio característico para el transporte de heces (ese es el Cary-Blair)."
  },
  "repetida": false
},

{
  "id": "t7-007",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Por qué generalmente no se realiza tinción de Gram de rutina en una muestra de heces para el diagnóstico de enteritis bacterianas?",
  "opciones": { "a": "Porque las heces están tan cargadas de múltiples y diversas bacterias de la flora normal que resulta prácticamente imposible distinguir el patógeno entre ellas", "b": "Porque las heces son estériles en condiciones normales", "c": "Porque el Gram nunca aporta información útil en ningún tipo de muestra", "d": "Porque está prohibido legalmente realizar tinciones sobre heces", "e": "Porque las bacterias entéricas no se tiñen con los reactivos del Gram" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: las heces contienen una enorme cantidad y diversidad de flora bacteriana normal, lo que hace prácticamente imposible discriminar visualmente al agente patógeno concreto entre tanta población mixta; por eso el Gram de heces solo tiene utilidad limitada para visualizar morfologías muy características, como la forma de gaviota de Campylobacter o de coma de Vibrio.",
    "b": "Las heces no son estériles en condiciones normales, al contrario que el LCR o la orina vesical; contienen abundante microbiota intestinal normal, lo que precisamente dificulta la interpretación del Gram.",
    "c": "El Gram sí aporta información útil en muchas otras muestras (LCR, hemocultivo, esputo de calidad); el problema específico de las heces es su enorme carga de flora comensal.",
    "d": "No existe ninguna prohibición legal; simplemente la utilidad diagnóstica del Gram en heces es muy limitada por la razón biológica explicada.",
    "e": "Las bacterias entéricas se tiñen perfectamente con el Gram; el problema no es técnico de tinción sino de interpretación, dada la enorme cantidad de flora mixta presente."
  },
  "repetida": false
},

{
  "id": "t7-008",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Para qué se utiliza el caldo de selenito o el caldo de tetrationato en el procesamiento de una muestra de heces?",
  "opciones": { "a": "Se emplean para el cultivo de virus entéricos", "b": "Son medios líquidos de enriquecimiento que incrementan la cantidad de Salmonella presente en la muestra antes de sembrar en medios sólidos, especialmente útiles en portadores asintomáticos", "c": "Se emplean exclusivamente para el diagnóstico de la tuberculosis", "d": "Son medios que inhiben el crecimiento de Salmonella", "e": "Son medios selectivos y diferenciales para hongos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Estos son medios de enriquecimiento bacteriano líquidos; los virus entéricos no se cultivan en este tipo de medios, su diagnóstico se basa en detección de antígeno o PCR.",
    "b": "Correcto: el caldo de selenito y el caldo de tetrationato son medios líquidos de enriquecimiento que favorecen específicamente la multiplicación de Salmonella (y otras patógenas) frente a la flora comensal, aumentando la probabilidad de detectarla, algo especialmente relevante en portadores asintomáticos con poca cantidad de bacteria en heces (por ejemplo, manipuladores de alimentos).",
    "c": "No tienen relación con el diagnóstico de tuberculosis, que emplea medios como Löwenstein-Jensen o Middlebrook, completamente distintos.",
    "d": "Es justo lo contrario: favorecen específicamente el crecimiento de Salmonella, inhibiendo relativamente el de la flora comensal, no al revés.",
    "e": "Estos medios están diseñados para bacterias entéricas patógenas (Salmonella), no para hongos."
  },
  "repetida": false
},

{
  "id": "t7-009",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "En los medios de cultivo entéricos diferenciales, las bacterias patógenas de interés (Salmonella, Shigella, Yersinia) se caracterizan generalmente por ser:",
  "opciones": { "a": "Gram positivas", "b": "Ácido-alcohol resistentes", "c": "Lactosa positivas siempre", "d": "Lactosa negativas", "e": "Anaerobias estrictas siempre" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Salmonella, Shigella y Yersinia son bacterias Gram NEGATIVAS, pertenecientes a la familia Enterobacteriaceae, no Gram positivas.",
    "b": "La propiedad de ácido-alcohol resistencia es característica de las micobacterias, no de las enterobacterias entéricas patógenas.",
    "c": "Las bacterias comensales de la flora normal (E. coli, Klebsiella, Enterobacter, Citrobacter) son las que suelen ser lactosa positivas; las patógenas de interés son lactosa negativas.",
    "d": "Correcto: Salmonella, Shigella y Yersinia son las tres bacterias patógenas clásicas que interesa detectar en el coprocultivo, y las tres son lactosa negativas, lo que permite diferenciarlas presuntivamente de la flora comensal lactosa positiva (E. coli, Klebsiella) en los medios diferenciales.",
    "e": "Estas enterobacterias son anaerobias facultativas, no anaerobias estrictas; pueden crecer tanto en presencia como en ausencia de oxígeno."
  },
  "repetida": false
},

{
  "id": "t7-010",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "En el medio Hektoen-enteric, ¿qué aspecto presentan las colonias de Salmonella típicamente?",
  "opciones": { "a": "Colonias negras, por ser lactosa negativa y productora de H2S, que precipita con las sales de hierro del medio", "b": "Colonias amarillas intensas", "c": "Colonias completamente incoloras y transparentes en todos los casos", "d": "Colonias rosas fucsia, por ser lactosa positiva", "e": "Colonias verde metalizado brillante" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: al igual que Shigella, Salmonella es lactosa negativa en el medio Hektoen, pero al ser además productora de ácido sulfhídrico (H2S), este reacciona con las sales de hierro del medio dando lugar a un precipitado negro característico en el centro de la colonia.",
    "b": "En el medio XLD, las colonias lactosa positivas dan un color amarillo, pero Salmonella (lactosa negativa y H2S positiva) da colonias del color de la placa con centro negro, no amarillas.",
    "c": "Shigella (que no produce H2S) sí puede dar colonias transparentes/del color de la placa en Hektoen, pero Salmonella se distingue precisamente por el precipitado negro debido a la producción de H2S.",
    "d": "Las colonias rosa fucsia por fermentación de la lactosa corresponderían a enterobacterias comensales (E. coli, Klebsiella), no a Salmonella, que es lactosa negativa.",
    "e": "El brillo verde metalizado es característico de Escherichia coli en el medio EMB (eosina-azul de metileno), no de Salmonella en el medio Hektoen."
  },
  "repetida": false
},

{
  "id": "t7-011",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Qué prueba bioquímica presuntiva permite diferenciar a Escherichia coli O157:H7 (serotipo enterohemorrágico) del resto de cepas de E. coli comensales?",
  "opciones": { "a": "La producción de coagulasa", "b": "La resistencia a la bacitracina", "c": "La capacidad de fermentar la lactosa", "d": "La sensibilidad a la optoquina", "e": "La incapacidad de fermentar el sorbitol, lo que se aprovecha empleando el medio agar McConkey-sorbitol" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La prueba de la coagulasa se emplea para Staphylococcus aureus, sin ninguna aplicación en la diferenciación de serotipos de E. coli.",
    "b": "La resistencia a la bacitracina se emplea en la identificación de estreptococos, sin relación con la diferenciación de E. coli O157:H7.",
    "c": "Tanto E. coli O157:H7 como el resto de E. coli comensales son lactosa positivas; esta propiedad no permite diferenciar el serotipo enterohemorrágico del resto.",
    "d": "La sensibilidad a la optoquina se emplea para diferenciar S. pneumoniae de estreptococos viridans, sin relación con la identificación de E. coli O157:H7.",
    "e": "Correcto: E. coli O157:H7 tiene la peculiaridad de no fermentar el sorbitol, a diferencia de la mayoría de las cepas comensales de E. coli, por lo que el agar McConkey-sorbitol permite su identificación presuntiva (las colonias sorbitol negativas se confirman después mediante aglutinación con anticuerpos anti-O157 o PCR de sus factores de virulencia)."
  },
  "repetida": false
},

{
  "id": "t7-012",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Qué complicación grave puede asociarse a la infección por Escherichia coli enterohemorrágico (ECEH) del serotipo O157:H7?",
  "opciones": { "a": "La colitis pseudomembranosa", "b": "El botulismo", "c": "La enfermedad de Chagas", "d": "La fiebre tifoidea", "e": "El síndrome hemolítico urémico, debido a la producción de una toxina similar a la Shiga-toxina (verotoxina)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La colitis pseudomembranosa está producida por Clostridium difficile, no por E. coli O157:H7.",
    "b": "El botulismo está producido por la toxina de Clostridium botulinum, sin relación con E. coli O157:H7.",
    "c": "La enfermedad de Chagas está producida por el protozoo Trypanosoma cruzi, sin ninguna relación con E. coli.",
    "d": "La fiebre tifoidea está producida por Salmonella entérica serotipo Typhi, una entidad clínica distinta de la infección por E. coli O157:H7.",
    "e": "Correcto: E. coli O157:H7 puede causar una colitis hemorrágica grave asociada a la producción de verotoxina (Shiga-toxina), similar a la producida por Shigella dysenteriae, que puede desencadenar el síndrome hemolítico urémico, una complicación grave y potencialmente mortal."
  },
  "repetida": true
},

{
  "id": "t7-013",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuál es el procedimiento óptimo para el diagnóstico de la infección por Clostridium difficile en un paciente con diarrea nosocomial?",
  "opciones": { "a": "Sembrar en medio de Thayer-Martin", "b": "Realizar únicamente una tinción de Gram de heces", "c": "Realizar una serología indirecta con IgG específica en suero exclusivamente", "d": "Realizar únicamente un urocultivo", "e": "Realizar simultáneamente la detección de toxinas en heces mediante EIA (ELISA directo) y el cultivo en medio CCFA en condiciones de anaerobiosis estricta" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, sin ninguna relación con el diagnóstico de C. difficile.",
    "b": "La tinción de Gram de heces tiene utilidad limitada por la enorme cantidad de flora mixta presente; no es la técnica óptima para el diagnóstico específico de C. difficile.",
    "c": "La infección por C. difficile es local en el intestino, y su diagnóstico se basa en la detección directa de la toxina y el cultivo específico en heces, no en una serología indirecta en suero.",
    "d": "El urocultivo se emplea para el diagnóstico de infecciones urinarias, sin relación con la infección intestinal por C. difficile.",
    "e": "Correcto: dado que C. difficile es un patógeno anaerobio estricto, el procedimiento óptimo combina la detección de sus toxinas en heces mediante EIA (ELISA directo) con el cultivo en medio CCFA, que debe incubarse en condiciones de anaerobiosis estricta."
  },
  "repetida": false
},

{
  "id": "t7-014",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuáles son los medios de cultivo selectivos característicos para el aislamiento de Campylobacter jejuni?",
  "opciones": { "a": "El agar Sabouraud, incubado en anaerobiosis", "b": "El medio de Löwenstein-Jensen, incubado durante 6 semanas", "c": "El medio de Thayer-Martin, incubado a temperatura ambiente", "d": "El medio TCBS, incubado a 4ºC", "e": "El medio de Skirrow y el medio Campy-BAP, con alta carga antibiótica que solo permite el crecimiento de Campylobacter, incubados en atmósfera microaerofílica a 42ºC" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El agar Sabouraud es un medio para hongos, no para Campylobacter, que además requiere atmósfera microaerofílica, no anaerobiosis estricta.",
    "b": "El medio de Löwenstein-Jensen es específico para micobacterias, con una incubación de varias semanas, muy distinto del cultivo de Campylobacter (48-72 horas en Skirrow o Campy-BAP).",
    "c": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, no para Campylobacter, y este último requiere condiciones microaerofílicas y una temperatura de 42ºC, no temperatura ambiente.",
    "d": "El medio TCBS es específico para Vibrio, no para Campylobacter, que además requiere 42ºC, no 4ºC.",
    "e": "Correcto: el medio de Skirrow y el medio Campy-BAP contienen antibióticos que restringen el crecimiento de la microbiota intestinal acompañante, permitiendo solo el crecimiento de Campylobacter; se incuban en atmósfera microaerofílica a 42ºC (temperatura corporal de las aves, su principal reservorio) durante 48-72 horas."
  },
  "repetida": false
},

{
  "id": "t7-015",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuál es el principal agente bacteriano causante de enteritis en países desarrollados, con forma característica curvada o espirilar en el Gram, adquirido sobre todo por consumo de pollo o pavo poco cocinados?",
  "opciones": { "a": "Vibrio cholerae", "b": "Clostridium botulinum", "c": "Treponema pallidum", "d": "Staphylococcus aureus", "e": "Campylobacter jejuni" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Vibrio cholerae, causante del cólera, tiene una distribución geográfica y epidemiológica distinta, sin ser el principal agente de enteritis en países desarrollados.",
    "b": "Clostridium botulinum produce el botulismo, un cuadro neurológico grave por toxina, no la enteritis bacteriana habitual de países desarrollados.",
    "c": "Treponema pallidum es el agente de la sífilis, sin relación con la enteritis bacteriana.",
    "d": "Staphylococcus aureus produce toxiinfección alimentaria por toxina preformada, pero no es el principal agente causal de enteritis en general en países desarrollados.",
    "e": "Correcto: Campylobacter jejuni es el principal agente bacteriano causante de enteritis en países desarrollados; es una bacteria Gram negativa con forma curvada o espirilar característica, transmitida por vía feco-oral, fundamentalmente a través del consumo de pollo o pavo poco cocinados."
  },
  "repetida": false
},

{
  "id": "t7-016",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Qué microorganismo se debe sospechar ante colonias muy pequeñas, lactosa negativas, en medio McConkey o SS, procedentes de una infección adquirida por consumo de carne de cerdo poco cocinada, y que crecen bien en el medio selectivo específico agar CIN?",
  "opciones": { "a": "Neisseria meningitidis", "b": "Vibrio cholerae", "c": "Yersinia enterocolitica", "d": "Treponema pallidum", "e": "Legionella pneumophila" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Neisseria meningitidis produce meningitis y sepsis meningocócica, sin relación con la enteritis alimentaria ni con el agar CIN.",
    "b": "Vibrio cholerae se diagnostica mediante siembra en agua de peptona seguida de medio TCBS, no en agar CIN, y no se asocia al consumo de carne de cerdo.",
    "c": "Correcto: Yersinia enterocolitica está ampliamente distribuida en la naturaleza, siendo el cerdo (crudo o poco cocinado) su principal reservorio de infección; da colonias lactosa negativas muy pequeñas en McConkey y SS, que pueden pasar desapercibidas, por lo que se emplea el medio selectivo específico agar CIN para mejorar su recuperación.",
    "d": "Treponema pallidum es el agente de la sífilis, sin ninguna relación con la enteritis por consumo de carne de cerdo.",
    "e": "Legionella pneumophila se cultiva en medio BCYE y se adquiere por inhalación de aerosoles contaminados, sin relación con el consumo de carne de cerdo ni con el agar CIN."
  },
  "repetida": false
},

{
  "id": "t7-017",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "En la sospecha de cólera por Vibrio cholerae, ¿cuál es el procedimiento de siembra recomendado?",
  "opciones": { "a": "No es necesario ningún tipo de cultivo, el diagnóstico es siempre exclusivamente clínico", "b": "Sembrar primero un tubo de agua de peptona y, tras 6 horas de incubación, subcultivar en el medio TCBS", "c": "Sembrar directamente en agar Sabouraud", "d": "Sembrar directamente en medio de Thayer-Martin", "e": "Sembrar en medio Löwenstein-Jensen durante 6 semanas" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El diagnóstico microbiológico mediante cultivo sí es relevante, especialmente en casos de sospecha de brote epidémico de cólera, para confirmar el diagnóstico e identificar el serogrupo.",
    "b": "Correcto: para el diagnóstico de la infección por Vibrio se recomienda sembrar primero un tubo de agua de peptona (medio de enriquecimiento) y, tras 6 horas, subcultivar en el medio selectivo TCBS (tiosulfato-citrato-sales biliares-sacarosa), específico para este género.",
    "c": "El agar Sabouraud es un medio para hongos, no es el procedimiento adecuado para el diagnóstico de Vibrio cholerae.",
    "d": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, sin relación con el diagnóstico de Vibrio cholerae.",
    "e": "El medio Löwenstein-Jensen con incubación prolongada es específico para micobacterias, un procedimiento completamente distinto al requerido para Vibrio."
  },
  "repetida": false
},

{
  "id": "t7-018",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cómo se realiza habitualmente el diagnóstico de las enteritis víricas (rotavirus, norovirus)?",
  "opciones": { "a": "Mediante cultivo en agar McConkey", "b": "Mediante métodos directos de detección de antígeno en heces (inmunocromatografía, ELISA o aglutinación de partículas de látex), y si son negativos, mediante PCR", "c": "Mediante tinción de Ziehl-Neelsen de las heces", "d": "Mediante la prueba de la coagulasa", "e": "Exclusivamente mediante hemocultivo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El agar McConkey es un medio bacteriano; los virus, al ser parásitos intracelulares obligados, no crecen en medios de cultivo bacterianos convencionales.",
    "b": "Correcto: el diagnóstico de las enteritis víricas se basa en métodos directos de detección de antígeno en heces (inmunocromatografía, ELISA, aglutinación de partículas de látex), y si estas técnicas no son concluyentes, se puede recurrir a la PCR para detectar fragmentos génicos característicos de cada virus.",
    "c": "La tinción de Ziehl-Neelsen se emplea para detectar micobacterias, sin relación con el diagnóstico de las enteritis víricas.",
    "d": "La prueba de la coagulasa es una prueba bacteriana (para S. aureus), sin ninguna relación con el diagnóstico de virus entéricos.",
    "e": "El hemocultivo se emplea para detectar bacteriemia, no es la técnica empleada para el diagnóstico de las enteritis víricas, que son infecciones localizadas en el intestino."
  },
  "repetida": false
},

{
  "id": "t7-020",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "Un paciente hospitalizado y tratado con antibióticos desde hace varios días comienza a presentar diarrea. ¿Cuál es el agente etiológico más probable?",
  "opciones": { "a": "Escherichia coli O157:H7", "b": "Campylobacter jejuni", "c": "Salmonella entérica", "d": "Shigella spp.", "e": "Clostridium difficile" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "E. coli O157:H7 se asocia a brotes de toxiinfección alimentaria (carne poco cocinada), no al contexto específico de diarrea tras antibioterapia hospitalaria prolongada.",
    "b": "Campylobacter jejuni se adquiere típicamente por consumo de aves poco cocinadas, no está especialmente asociado al contexto hospitalario ni al uso prolongado de antibióticos.",
    "c": "Salmonella entérica se adquiere típicamente por alimentos de origen animal contaminados, no es la causa más probable en el contexto descrito de hospitalización con antibioterapia prolongada.",
    "d": "Shigella se adquiere por vía feco-oral en contextos de baja higiene, no es la causa típica de diarrea asociada a tratamiento antibiótico hospitalario.",
    "e": "Correcto: en un paciente hospitalizado con tratamiento antibiótico prolongado que desarrolla diarrea, el agente etiológico más probable es Clostridium difficile, ya que el antibiótico elimina la flora protectora normal permitiendo su proliferación y la producción de toxinas."
  },
  "repetida": true
},

{
  "id": "t7-021",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Cuál de los siguientes es el binomio CORRECTO entre medio de cultivo entérico y su grado de selectividad?",
  "opciones": { "a": "Agar SS y agar XLD – medios diferenciales moderadamente selectivos, que dificultan el crecimiento de la flora comensal favoreciendo el de Salmonella, Shigella y Yersinia", "b": "Agar McConkey con sorbitol – medio para el aislamiento de Vibrio cholerae", "c": "Agar McConkey – no selectivo en absoluto, crecen tanto Gram positivos como negativos", "d": "Caldo selenito – medio sólido diferencial", "e": "El agar Hektoen es un medio líquido de enriquecimiento" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los medios SS (Salmonella-Shigella) y XLD (xilosa-lisina-desoxicolato) son medios diferenciales moderadamente selectivos, que dificultan el crecimiento de las enterobacterias de la flora normal, mientras favorecen el crecimiento de Salmonella, Shigella y Yersinia (esta última de forma más lenta, con colonias pequeñas).",
    "b": "El agar McConkey con sorbitol se emplea para la identificación presuntiva de E. coli O157:H7 (por su incapacidad de fermentar el sorbitol), no está relacionado con el aislamiento de Vibrio cholerae, que requiere el medio TCBS.",
    "c": "El agar McConkey sí es selectivo (por su contenido en cristal violeta y sales biliares, que inhiben a las bacterias Gram positivas), permitiendo el crecimiento únicamente de bacterias Gram negativas.",
    "d": "El caldo de selenito es un medio LÍQUIDO de enriquecimiento, no un medio sólido diferencial.",
    "e": "El agar Hektoen es un medio SÓLIDO diferencial moderadamente selectivo, no un medio líquido de enriquecimiento (ese sería el caldo de selenito o el de tetrationato)."
  },
  "repetida": false
},

{
  "id": "t7-022",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Qué es la toxiinfección alimentaria, en sentido estricto, y qué agentes son los más frecuentes según los apuntes de la asignatura?",
  "opciones": { "a": "Un cuadro que nunca se asocia a brotes", "b": "Una gastroenteritis que afecta simultáneamente a varias personas asociada al consumo colectivo de alimentos en un mismo punto de restauración, siendo norovirus y salmonelas los agentes más frecuentes", "c": "Una infección que solo puede estar producida por parásitos", "d": "Un término reservado exclusivamente para la fiebre tifoidea", "e": "Una infección exclusiva de países en vías de desarrollo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Por definición, la toxiinfección alimentaria SÍ se asocia típicamente a brotes, ya que afecta a varias personas simultáneamente por el consumo colectivo del mismo alimento contaminado.",
    "b": "Correcto: el término toxiinfección alimentaria se reserva para los casos en los que la gastroenteritis afecta a varias personas de forma simultánea, asociada al consumo colectivo de alimentos en un mismo punto de restauración (banquetes, comidas laborales), siendo los norovirus y las salmonelas los microorganismos más frecuentes en este contexto.",
    "c": "Está producida fundamentalmente por bacterias y virus (norovirus, salmonelas), no exclusivamente por parásitos.",
    "d": "La fiebre tifoidea es una entidad clínica distinta, producida por Salmonella Typhi con bacteriemia persistente, no es sinónimo del concepto general de toxiinfección alimentaria.",
    "e": "Puede ocurrir en cualquier país, incluidos los desarrollados, siempre que se den las condiciones de consumo colectivo de alimentos contaminados."
  },
  "repetida": false
},

{
  "id": "t7-024",
  "tema": "Infecciones del tracto gastrointestinal",
  "pregunta": "¿Qué tipo de gastroenteritis vírica es la principal causa de gastroenteritis infantil, más frecuente en los meses de invierno, con un cuadro de fiebre, náuseas y vómitos seguidos de diarrea de corta duración?",
  "opciones": { "a": "La producida por Trichomonas vaginalis", "b": "La producida por Treponema pallidum", "c": "La producida por Neisseria meningitidis", "d": "La producida por Mycobacterium tuberculosis", "e": "La producida por rotavirus del grupo A" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Trichomonas vaginalis es un parásito de transmisión sexual, sin relación con la gastroenteritis infantil por rotavirus.",
    "b": "Treponema pallidum es el agente de la sífilis, una infección de transmisión sexual sin relación con la gastroenteritis infantil.",
    "c": "Neisseria meningitidis produce meningitis y sepsis meningocócica, sin relación con la gastroenteritis vírica infantil.",
    "d": "Mycobacterium tuberculosis produce tuberculosis, una entidad clínica completamente distinta de la gastroenteritis infantil por rotavirus.",
    "e": "Correcto: los rotavirus del grupo A son los principales agentes etiológicos de gastroenteritis infantiles, con una clínica de corta duración (fiebre, náuseas y vómitos seguidos de diarrea) y mayor incidencia en los meses de invierno."
  },
  "repetida": false
},

{
  "id": "t8-001",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuál es la distribución aproximada de la etiología de las meningitis según los apuntes de la asignatura?",
  "opciones": { "a": "El 100% de las meningitis son siempre víricas", "b": "La mayoría de las meningitis están producidas por hongos en pacientes inmunocompetentes", "c": "Aproximadamente un 80% son víricas (la mayoría asintomáticas o autolimitadas) y un 20% son bacterianas (graves, con alta mortalidad), existiendo también una pequeña proporción de origen fúngico", "d": "No existen meningitis de causa vírica", "e": "El 100% de las meningitis son siempre bacterianas" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "No es correcto: aunque la mayoría son víricas, también existe un porcentaje relevante de meningitis bacterianas y una pequeña proporción fúngica.",
    "b": "Las meningitis fúngicas son infrecuentes y ocurren casi siempre en el contexto de inmunodepresión severa (p. ej. VIH avanzado), no en pacientes inmunocompetentes ni representan la mayoría de los casos.",
    "c": "Correcto: aproximadamente el 80% de las meningitis son víricas (la mayoría de curso autolimitado y asintomático, con la excepción grave del virus herpes simple tipo 1) y el 20% son bacterianas, mucho más graves y con alta tasa de mortalidad; existe además una pequeña proporción de meningitis fúngicas, típicamente por Cryptococcus neoformans en pacientes con inmunodepresión severa.",
    "d": "Sí existen, y de hecho representan la mayoría de los casos de meningitis (alrededor del 80%), aunque suelen ser más benignas que las bacterianas.",
    "e": "No es correcto: aunque las meningitis bacterianas son las más graves, representan solo alrededor del 20% del total, siendo las víricas mucho más frecuentes."
  },
  "repetida": false
},

{
  "id": "t8-002",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "En un recién nacido con sospecha de meningitis bacteriana neonatal, ¿cuáles son los tres agentes etiológicos más característicos?",
  "opciones": { "a": "Treponema pallidum, Neisseria gonorrhoeae y Candida albicans exclusivamente", "b": "Cryptococcus neoformans, Mycobacterium tuberculosis y Brucella", "c": "Vibrio cholerae, Shigella y Yersinia", "d": "Legionella pneumophila, Coxiella burnetii y Chlamydophila pneumoniae", "e": "Listeria monocytogenes, Escherichia coli (serotipo K1) y Streptococcus agalactiae" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Estos microorganismos no son la tríada característica de la meningitis bacteriana neonatal; Treponema pallidum causa sífilis congénita, no meningitis neonatal aguda típica.",
    "b": "Cryptococcus neoformans se asocia a meningitis fúngica en pacientes con inmunodepresión severa (VIH avanzado), Mycobacterium tuberculosis a meningitis tuberculosa por reactivación, y Brucella a meningitis en el contexto de brucelosis; ninguno es el perfil característico de la meningitis bacteriana neonatal clásica.",
    "c": "Estos son agentes gastrointestinales, sin relación con la meningitis bacteriana neonatal.",
    "d": "Estos son agentes de neumonía atípica, no de meningitis neonatal.",
    "e": "Correcto: las meningitis bacterianas neonatales, adquiridas de la madre intraútero, poco antes o durante el parto, están producidas fundamentalmente por Listeria monocytogenes, Escherichia coli tipo K1 y Streptococcus agalactiae, este último adquirido durante el paso por el canal del parto en madres colonizadas (hasta un 20% de las gestantes)."
  },
  "repetida": false
},

{
  "id": "t8-004",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuáles son los dos agentes etiológicos más importantes de la meningitis bacteriana en niños mayores, jóvenes y adultos (fuera del periodo neonatal)?",
  "opciones": { "a": "Cryptococcus neoformans y Candida albicans", "b": "Listeria monocytogenes y Escherichia coli", "c": "Bordetella pertussis y Corynebacterium diphtheriae", "d": "Treponema pallidum y Chlamydia trachomatis", "e": "Neisseria meningitidis y Streptococcus pneumoniae" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Cryptococcus neoformans y Candida albicans son agentes fúngicos que producen meningitis casi exclusivamente en el contexto de inmunodepresión severa, no son los agentes bacterianos más importantes en general.",
    "b": "Listeria monocytogenes y E. coli son más característicos de la meningitis del periodo neonatal o en pacientes inmunodeprimidos, no los agentes principales en niños mayores y adultos sanos.",
    "c": "Bordetella pertussis produce tosferina y Corynebacterium diphtheriae produce difteria; ninguno de los dos es agente típico de meningitis.",
    "d": "Treponema pallidum y Chlamydia trachomatis no son causas típicas de meningitis bacteriana aguda; T. pallidum puede afectar al SNC en la sífilis terciaria (neurosífilis), un cuadro distinto y mucho menos frecuente.",
    "e": "Correcto: Neisseria meningitidis (el meningococo, diplococo Gram negativo con morfología de 'grano de café') y Streptococcus pneumoniae (el neumococo, diplococo Gram positivo) son los dos agentes bacterianos más importantes de la meningitis fuera del periodo neonatal, aunque existen otros microorganismos implicados con menor frecuencia."
  },
  "repetida": false
},

{
  "id": "t8-005",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuál es la morfología característica de Neisseria meningitidis que ayuda a su reconocimiento en el Gram del sedimento del LCR?",
  "opciones": { "a": "Bacilo Gram negativo curvado en forma de coma", "b": "Diplococo Gram negativo con morfología de 'grano de café'", "c": "Bacilo Gram positivo", "d": "Cocobacilo Gram negativo", "e": "Diplococo Gram positivo lanceolado" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La forma de coma es característica de Vibrio, no de Neisseria meningitidis.",
    "b": "Correcto: Neisseria meningitidis es un diplococo Gram negativo con la morfología característica descrita como 'grano de café', que es capsulado y muy lábil, y se transmite de persona a persona por secreciones respiratorias.",
    "c": "Un bacilo Gram positivo en el LCR sería más sugestivo de Listeria monocytogenes, no de Neisseria meningitidis.",
    "d": "Un cocobacilo Gram negativo en el LCR es más característico de Haemophilus influenzae, no de N. meningitidis.",
    "e": "Un diplococo Gram POSITIVO lanceolado corresponde a Streptococcus pneumoniae, no a Neisseria meningitidis, que es Gram negativo."
  },
  "repetida": false
},

{
  "id": "t8-006",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "En un Gram de LCR se observan bacilos Gram positivos. En un adulto o un neonato, ¿qué microorganismo se debe sospechar en primer lugar?",
  "opciones": { "a": "Streptococcus pneumoniae", "b": "Haemophilus influenzae", "c": "Escherichia coli", "d": "Neisseria meningitidis", "e": "Listeria monocytogenes" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Streptococcus pneumoniae es un diplococo Gram POSITIVO, no un bacilo, por lo que su morfología no coincide con la descripción del enunciado.",
    "b": "Haemophilus influenzae es un bacilo/cocobacilo Gram NEGATIVO, no Gram positivo.",
    "c": "Escherichia coli es un bacilo Gram NEGATIVO, no Gram positivo; en el LCR de un neonato un bacilo Gram negativo orientaría más bien a E. coli, pero el enunciado especifica Gram positivo, que corresponde a Listeria.",
    "d": "Neisseria meningitidis es un diplococo Gram NEGATIVO, no un bacilo Gram positivo.",
    "e": "Correcto: Listeria monocytogenes es un bacilo Gram POSITIVO, y su observación en el LCR debe hacer sospechar meningitis listeriósica, que puede afectar a neonatos, embarazadas, ancianos e inmunodeprimidos, adquirida por ingesta de lácteos o alimentos envasados contaminados."
  },
  "repetida": false
},

{
  "id": "t8-007",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "Si en un LCR se observa un recuento muy elevado de linfocitos con una glucosa normal, ¿qué tipo de meningitis se debe sospechar en primer lugar?",
  "opciones": { "a": "Endocarditis", "b": "Meningitis vírica", "c": "Meningitis meningocócica", "d": "Meningitis por Staphylococcus epidermidis", "e": "Meningitis neumocócica" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La endocarditis no se diagnostica mediante el análisis del LCR, sino mediante hemocultivo y ecocardiograma; no guarda relación con el patrón celular descrito.",
    "b": "Correcto: en la meningitis vírica el LCR muestra predominio de linfocitos (indicativo de agentes de comportamiento más bien intracelular o de respuesta inmune de tipo vírico) y la glucosa se mantiene NORMAL, ya que los virus no consumen glucosa como lo hacen las bacterias extracelulares.",
    "c": "La meningitis meningocócica es bacteriana; se caracteriza por predominio de polimorfonucleares (neutrófilos) y glucosa DISMINUIDA, no por linfocitos con glucosa normal.",
    "d": "S. epidermidis produce meningitis asociada a shunts/catéteres de drenaje, un cuadro bacteriano que también cursaría con predominio de PMN y glucosa baja, no con el patrón linfocitario y glucosa normal típico de la meningitis vírica.",
    "e": "La meningitis neumocócica es bacteriana; se caracteriza por predominio de polimorfonucleares y glucosa baja, un patrón distinto del descrito en el enunciado."
  },
  "repetida": true
},

{
  "id": "t8-008",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "En el LCR, un predominio de linfocitos en el recuento de leucocitos sugiere que el agente causal es de comportamiento intracelular, mientras que un predominio de polimorfonucleares sugiere un agente extracelular. ¿Cuál de los siguientes es un ejemplo clásico de agente que produce meningitis con predominio LINFOCITARIO pese a ser bacteriano?",
  "opciones": { "a": "Neisseria meningitidis", "b": "Escherichia coli", "c": "Listeria monocytogenes", "d": "Streptococcus agalactiae", "e": "Streptococcus pneumoniae" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Neisseria meningitidis es un patógeno de comportamiento extracelular, por lo que su meningitis cursa con predominio de polimorfonucleares (neutrófilos), no de linfocitos.",
    "b": "Escherichia coli, como bacteria extracelular, produce meningitis con predominio de PMN, no de linfocitos.",
    "c": "Correcto: aunque la mayoría de las meningitis bacterianas cursan con predominio de PMN (extracelulares), la meningitis por Listeria monocytogenes, un patógeno intracelular facultativo, cursa característicamente con predominio de linfocitos, al igual que las meningitis víricas y la tuberculosa.",
    "d": "Streptococcus agalactiae también es un patógeno extracelular clásico, asociado a predominio de PMN en el LCR, no de linfocitos.",
    "e": "Streptococcus pneumoniae es un patógeno extracelular que produce meningitis con predominio de PMN, no de linfocitos."
  },
  "repetida": false
},

{
  "id": "t8-009",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Qué alteraciones se esperan en el estudio del LCR de una meningitis BACTERIANA, en comparación con una meningitis VÍRICA?",
  "opciones": { "a": "En la meningitis vírica el LCR es siempre mucho más turbio que en la bacteriana", "b": "En la bacteriana el LCR está turbio, con glucosa disminuida y proteínas muy elevadas (>100 mg/dL); en la vírica el aspecto es opalino, la glucosa se mantiene normal y las proteínas están menos elevadas (50-100 mg/dL)", "c": "Ambas presentan exactamente los mismos valores de glucosa, proteínas y aspecto", "d": "En la meningitis bacteriana la glucosa siempre está elevada por encima de lo normal", "e": "Las proteínas nunca se alteran en ninguno de los dos tipos de meningitis" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Es al revés: el LCR es más turbio en la meningitis BACTERIANA (por la mayor cantidad de leucocitos y bacterias), mientras que en la vírica el aspecto es más opalino (menos turbio).",
    "b": "Correcto: en la meningitis bacteriana el LCR se vuelve turbio (por los leucocitos y las bacterias), la glucosa disminuye (las bacterias la consumen para su metabolismo) y las proteínas se elevan intensamente (>100 mg/dL) por la alteración de la permeabilidad de la barrera hematoencefálica; en la vírica el aspecto es opalino (menos turbio, solo hay leucocitos), la glucosa se mantiene normal y las proteínas están algo menos elevadas (50-100 mg/dL).",
    "c": "Existen diferencias claras y clínicamente muy relevantes entre ambos tipos de meningitis en el estudio bioquímico y citológico del LCR, que son fundamentales para orientar el diagnóstico y el tratamiento inicial.",
    "d": "Es justo lo contrario: en la meningitis bacteriana la glucosa DISMINUYE, porque las bacterias la consumen para su metabolismo, no se eleva por encima de lo normal.",
    "e": "Las proteínas sí se alteran en ambos tipos de meningitis, aunque de forma más marcada en la bacteriana (>100 mg/dL) que en la vírica (50-100 mg/dL), debido a la alteración de la permeabilidad de la barrera hematoencefálica."
  },
  "repetida": false
},

{
  "id": "t8-010",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuál es la técnica de elección para el diagnóstico microbiológico de las meningitis víricas?",
  "opciones": { "a": "El cultivo en agar sangre", "b": "La tinción de Ziehl-Neelsen", "c": "La PCR", "d": "La tinción de tinta china", "e": "La prueba de la coagulasa" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El agar sangre es un medio bacteriano; los virus no crecen en él, ya que son parásitos intracelulares obligados que requieren cultivo celular.",
    "b": "La tinción de Ziehl-Neelsen se emplea para detectar micobacterias en la sospecha de meningitis tuberculosa, no en la meningitis vírica.",
    "c": "Correcto: la PCR es la técnica de elección para el diagnóstico de las meningitis víricas, permitiendo detectar de forma rápida y específica el material genético del virus responsable (enterovirus, herpesvirus, etc.) directamente en el LCR.",
    "d": "La tinción de tinta china se emplea para visualizar la cápsula de Cryptococcus neoformans en la meningitis fúngica, sin relación con el diagnóstico de la meningitis vírica.",
    "e": "La prueba de la coagulasa se emplea para identificar Staphylococcus aureus, sin relación con el diagnóstico de las meningitis víricas."
  },
  "repetida": false
},

{
  "id": "t8-011",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Qué tinción específica se emplea para visualizar la cápsula de Cryptococcus neoformans en una muestra de LCR ante la sospecha de meningitis fúngica?",
  "opciones": { "a": "La tinción de azul de metileno", "b": "La tinción de Gram exclusivamente", "c": "La tinción de tinta china", "d": "La tinción de Papanicolaou", "e": "La tinción de Ziehl-Neelsen" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El azul de metileno se emplea como colorante de contraste en otras tinciones (como en la de Ziehl-Neelsen), no es la técnica específica para visualizar la cápsula de Cryptococcus.",
    "b": "El Gram no es la técnica más útil para poner de manifiesto la cápsula del criptococo; la tinción de tinta china es la técnica específica y característica para este fin.",
    "c": "Correcto: la tinción de tinta china permite observar de forma característica el halo correspondiente a la cápsula polisacarídica de Cryptococcus neoformans, una levadura capsulada que produce meningitis fúngica sobre todo en pacientes con inmunodepresión severa (por ejemplo, VIH avanzado).",
    "d": "La tinción de Papanicolaou se emplea en citología ginecológica (cribado de cáncer de cérvix), sin relación con el diagnóstico de la meningitis fúngica.",
    "e": "La tinción de Ziehl-Neelsen se emplea para detectar micobacterias ácido-alcohol resistentes, no para visualizar la cápsula de Cryptococcus."
  },
  "repetida": false
},

{
  "id": "t8-012",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿En qué contexto clínico aparece típicamente la meningitis fúngica por Cryptococcus neoformans?",
  "opciones": { "a": "En pacientes con un sistema inmune completamente normal, siendo la causa más frecuente de meningitis en la población general", "b": "Exclusivamente en pacientes vacunados frente al neumococo", "c": "En pacientes con inmunodepresión severa, especialmente en el contexto de infección por VIH avanzada", "d": "Exclusivamente tras una intervención dental", "e": "En recién nacidos sanos sin ningún factor de riesgo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Es justo lo contrario: la meningitis fúngica es muy infrecuente y ocurre específicamente en el contexto de inmunodepresión severa, no en personas inmunocompetentes ni es la causa más frecuente de meningitis en general.",
    "b": "La vacunación frente al neumococo no tiene relación con el riesgo de meningitis por Cryptococcus, que depende del grado de inmunodepresión del paciente, no de esta vacuna concreta.",
    "c": "Correcto: Cryptococcus neoformans es una levadura capsulada que produce meningitis fúngica de forma casi exclusiva en pacientes con inmunodepresión severa, siendo el contexto clásico la infección por VIH avanzada (SIDA).",
    "d": "La meningitis por Cryptococcus no está relacionada con intervenciones dentales; ese contexto se asocia más bien a bacteriemias por flora oral (endocarditis, abscesos cerebrales por streptococcus del grupo milleri).",
    "e": "Los recién nacidos sanos no son el contexto característico de la meningitis por Cryptococcus, que requiere una inmunodepresión severa subyacente, generalmente no presente en un neonato sin otros factores."
  },
  "repetida": false
},

{
  "id": "t8-013",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cómo se produce típicamente la meningitis tuberculosa?",
  "opciones": { "a": "Nunca puede afectar al sistema nervioso central", "b": "Exclusivamente por contagio directo de persona a persona por vía respiratoria hacia el LCR", "c": "Es siempre una infección aguda que aparece en minutos tras el contagio", "d": "Únicamente en pacientes que nunca han estado en contacto con Mycobacterium tuberculosis", "e": "Por diseminación hematógena de un foco activo de tuberculosis o por la reactivación de un foco latente en las leptomeninges, típicamente en pacientes inmunodeprimidos" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Sí puede afectar al SNC; de hecho, la meningitis tuberculosa es una de las formas extrapulmonares posibles de la tuberculosis.",
    "b": "El mecanismo no es un contagio directo instantáneo hacia el LCR; requiere diseminación hematógena o reactivación de un foco latente que puede haberse establecido meses o años antes.",
    "c": "No es un proceso agudo instantáneo; la meningitis tuberculosa suele desarrollarse de forma progresiva, tras meses o años de una infección latente previa que se reactiva.",
    "d": "Es justo lo contrario: para que exista una reactivación en las leptomeninges es necesario haber estado infectado previamente por M. tuberculosis, aunque fuera hace tiempo y de forma latente.",
    "e": "Correcto: la meningitis tuberculosa se produce por diseminación hematógena desde un foco activo (por ejemplo pulmonar) o por la reactivación de un foco latente localizado en las leptomeninges, que había quedado allí tras una infección previa; ocurre típicamente en pacientes con inmunodepresión, en los que el sistema inmune ya no controla adecuadamente a la micobacteria."
  },
  "repetida": false
},

{
  "id": "t8-014",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Qué microorganismos son los más frecuentes causantes de meningitis/ventriculitis asociada a shunts o catéteres de drenaje de LCR (por ejemplo, en el tratamiento de la hidrocefalia)?",
  "opciones": { "a": "Staphylococcus epidermidis y otros estafilococos coagulasa negativos, así como Pseudomonas aeruginosa", "b": "Bordetella pertussis", "c": "Vibrio cholerae", "d": "Trichomonas vaginalis", "e": "Neisseria gonorrhoeae exclusivamente" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los catéteres de drenaje (shunts), empleados para tratar el aumento de LCR en la hidrocefalia, se contaminan con bacterias que colonizan la piel, fundamentalmente Staphylococcus epidermidis y otros estafilococos coagulasa negativos, así como Pseudomonas aeruginosa, de forma análoga a lo que ocurre con las sondas urinarias o los catéteres intravasculares.",
    "b": "Bordetella pertussis produce tosferina, una infección respiratoria, sin relación con la contaminación de shunts de LCR.",
    "c": "Vibrio cholerae produce cólera por consumo de agua/alimentos contaminados, sin relación con la infección de catéteres de drenaje intracraneal.",
    "d": "Trichomonas vaginalis es un parásito de transmisión sexual, sin ninguna relación con las infecciones de shunts de LCR.",
    "e": "Neisseria gonorrhoeae no está asociada a la colonización de catéteres o shunts, sino a la infección de transmisión sexual (gonorrea)."
  },
  "repetida": false
},

{
  "id": "t8-015",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cómo debe recogerse y transportarse una muestra de LCR ante la sospecha de meningitis bacteriana, respecto a la temperatura?",
  "opciones": { "a": "Debe enviarse inmediatamente al laboratorio, y si no es posible, se mantiene a temperatura ambiente hasta su envío, ya que la refrigeración podría dificultar la supervivencia de algunas bacterias exigentes", "b": "Debe calentarse a 100ºC antes de su envío", "c": "Debe refrigerarse siempre a 4ºC en todos los casos", "d": "No importa en absoluto el tiempo ni la temperatura de conservación", "e": "Debe congelarse a -20ºC de forma sistemática" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el LCR debe enviarse inmediatamente al laboratorio; si esto no es posible, se mantiene a temperatura ambiente (no en nevera, salvo que se vaya a realizar cultivo de virus, detección de antígeno o técnicas genéticas, en cuyo caso sí se guarda una alícuota refrigerada o congelada), ya que algunos de los patógenos bacterianos implicados son exigentes y podrían no sobrevivir bien a la refrigeración.",
    "b": "Calentar la muestra destruiría a los microorganismos presentes, haciendo imposible su cultivo e identificación posterior.",
    "c": "La refrigeración sistemática no es la recomendación general para el cultivo bacteriano del LCR; se reserva para alícuotas destinadas a técnicas específicas como PCR o cultivo vírico.",
    "d": "El tiempo y la temperatura de conservación son críticos, ya que de ellos depende la viabilidad de los microorganismos y por tanto la sensibilidad del cultivo posterior.",
    "e": "La congelación sistemática no es la norma general para el LCR destinado a cultivo bacteriano; podría comprometer la viabilidad de algunas bacterias exigentes."
  },
  "repetida": false
},

{
  "id": "t8-016",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿En qué medios de cultivo se siembra habitualmente el LCR para el diagnóstico de una meningitis bacteriana, y en qué atmósfera se incuban?",
  "opciones": { "a": "Únicamente en agar McConkey en anaerobiosis estricta", "b": "Únicamente en medio de Thayer-Martin", "c": "Únicamente en agar Sabouraud a 28ºC", "d": "Agar sangre y agar chocolate, incubados en atmósfera con 5-7% de CO2", "e": "Únicamente en caldo de selenito" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El agar McConkey en anaerobiosis no es el procedimiento estándar para el cultivo del LCR; se emplean agar sangre y chocolate en atmósfera con CO2, no anaerobiosis estricta.",
    "b": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, no es el medio habitual de siembra para el diagnóstico general de la meningitis bacteriana.",
    "c": "El agar Sabouraud a 28ºC se emplea de forma adicional cuando se sospecha una etiología fúngica, no es el medio único ni principal para el diagnóstico bacteriano general del LCR.",
    "d": "Correcto: las muestras de LCR se siembran en agar sangre y agar chocolate, incubándose en atmósfera enriquecida con 5-7% de CO2, condiciones que favorecen especialmente el crecimiento de microorganismos exigentes como Neisseria, Streptococcus pneumoniae y Haemophilus influenzae.",
    "e": "El caldo de selenito es un medio de enriquecimiento para Salmonella en heces, sin relación con el cultivo de LCR."
  },
  "repetida": false
},

{
  "id": "t8-017",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuál es el programa de prevención sistemático de la meningitis neonatal por Streptococcus agalactiae en las gestantes?",
  "opciones": { "a": "Una intervención quirúrgica preventiva en el primer trimestre", "b": "Ningún tipo de cribado, ya que S. agalactiae nunca coloniza a las embarazadas", "c": "El uso sistemático de PPD en todas las gestantes", "d": "La vacunación obligatoria frente a la varicela en el primer trimestre", "e": "El cribado de la colonización vagino-rectal entre las semanas 35-37 de gestación, seguido de profilaxis antibiótica intraparto en las portadoras" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "No se realiza ninguna intervención quirúrgica preventiva para este fin; el cribado se basa en un análisis microbiológico y la prevención en profilaxis antibiótica durante el parto.",
    "b": "S. agalactiae sí coloniza la flora vagino-rectal de aproximadamente el 20% de las gestantes en nuestro medio, de ahí la importancia de realizar el cribado sistemático.",
    "c": "El PPD (Mantoux) se emplea para el estudio del contacto con Mycobacterium tuberculosis, sin relación con el cribado de S. agalactiae en el embarazo.",
    "d": "La vacunación frente a la varicela no tiene relación con la prevención de la meningitis neonatal por S. agalactiae, que se previene mediante cribado microbiológico y profilaxis antibiótica intraparto.",
    "e": "Correcto: se realiza un estudio sistemático de la colonización vagino-rectal en las gestantes entre las semanas 35-37, mediante escobillones en medio de transporte, que se procesan en caldos de enriquecimiento selectivos y se subcultivan en medio Granada (colonias de pigmento naranja) o agar sangre (colonias beta-hemolíticas confirmadas por test de CAMP); las portadoras reciben profilaxis antibiótica intraparto para prevenir la transmisión al neonato."
  },
  "repetida": false
},

{
  "id": "t8-019",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿En qué se fundamenta la prueba de CAMP, empleada entre otras aplicaciones para identificar Streptococcus agalactiae?",
  "opciones": { "a": "En una reacción sinérgica entre dos hemolisinas, la de S. agalactiae y la beta-hemolisina de S. aureus, que produce una zona de hemólisis potenciada donde ambas se cruzan", "b": "En la sensibilidad a la bacitracina", "c": "En la detección de anticuerpos maternos frente al estreptococo", "d": "En la amplificación por PCR de un fragmento del genoma bacteriano", "e": "En el crecimiento exclusivo en medio de Sabouraud" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la prueba de CAMP se basa en una reacción sinérgica entre la hemolisina de Streptococcus agalactiae y la beta-hemolisina (esfingomielinasa) producida por una cepa de Staphylococcus aureus; al sembrar ambas bacterias perpendicularmente en agar sangre, se genera una zona de hemólisis potenciada en forma de 'punta de flecha' donde las dos estrías se cruzan.",
    "b": "La sensibilidad a la bacitracina es una prueba distinta empleada para S. pyogenes, no el fundamento del test de CAMP.",
    "c": "El test de CAMP se basa en un fenómeno de la propia bacteria (interacción de hemolisinas), no en la detección de anticuerpos del paciente o de la madre.",
    "d": "El test de CAMP no es una técnica molecular ni implica amplificación de ácidos nucleicos; es una prueba bioquímica/fenotípica basada en la interacción de dos hemolisinas.",
    "e": "El test de CAMP se realiza sobre agar sangre, no en medio de Sabouraud, que es específico para hongos."
  },
  "repetida": false
},

{
  "id": "t8-020",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuál es la diferencia principal entre la meningitis y la encefalitis?",
  "opciones": { "a": "La encefalitis es una infección exclusivamente producida por bacterias, nunca por virus", "b": "Son términos exactamente sinónimos", "c": "La meningitis siempre afecta al parénquima cerebral, no a las meninges", "d": "La encefalitis nunca puede coexistir con la meningitis", "e": "La meningitis es la inflamación de las meninges, mientras que la encefalitis es un proceso inflamatorio difuso del propio encéfalo; cuando ambas coexisten se habla de meningoencefalitis" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La encefalitis está producida fundamentalmente por virus con tropismo por el SNC (varicela-zóster, VHS, enterovirus, arbovirus), no es exclusiva de bacterias.",
    "b": "No son sinónimos; afectan a estructuras anatómicas distintas (las meninges frente al parénquima encefálico), aunque puedan coexistir.",
    "c": "Es justo al revés: la meningitis afecta a las MENINGES, no directamente al parénquima cerebral (eso sería más propio de la encefalitis o del absceso cerebral).",
    "d": "Es frecuente que ambos procesos coexistan, dando lugar precisamente al cuadro de meningoencefalitis.",
    "e": "Correcto: la meningitis es la inflamación de las meninges (membranas que rodean el cerebro y la médula espinal), mientras que la encefalitis es un proceso inflamatorio difuso del propio tejido encefálico; cuando ambos procesos coexisten (algo frecuente) se denomina meningoencefalitis."
  },
  "repetida": false
},

{
  "id": "t8-021",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "En la encefalitis vírica, ¿qué se espera encontrar en el estudio del LCR?",
  "opciones": { "a": "Valores normales de glucosa y proteínas ligeramente elevadas, con predominio de células mononucleares", "b": "Ausencia total de cualquier alteración citológica", "c": "Proteínas siempre por debajo de lo normal", "d": "Predominio absoluto de polimorfonucleares", "e": "Glucosa muy disminuida, como en la meningitis bacteriana clásica" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en la encefalitis, el LCR suele tener valores normales de glucosa y proteínas discretamente elevadas, con predominio de células mononucleares; la PCR es la técnica diagnóstica de elección para identificar el virus responsable.",
    "b": "Sí se observan alteraciones citológicas y bioquímicas leves en el LCR de la encefalitis (aumento discreto de proteínas y predominio mononuclear), aunque menos marcadas que en una meningitis bacteriana.",
    "c": "Las proteínas suelen estar discretamente elevadas en la encefalitis, no por debajo de lo normal.",
    "d": "El predominio de polimorfonucleares es más característico de infecciones bacterianas extracelulares; en la encefalitis vírica predominan las células mononucleares.",
    "e": "La glucosa muy disminuida es característica de la meningitis BACTERIANA, no de la encefalitis vírica, en la que se mantiene normal."
  },
  "repetida": false
},

{
  "id": "t8-022",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuál es la contraindicación clásica para el diagnóstico de un absceso cerebral?",
  "opciones": { "a": "Los abscesos cerebrales son siempre monomicrobianos", "b": "Los abscesos cerebrales solo pueden estar producidos por virus", "c": "La punción lumbar está contraindicada; el diagnóstico se basa en técnicas de imagen (TAC, RMN)", "d": "El absceso cerebral se diagnostica siempre y exclusivamente por punción lumbar", "e": "Nunca puede realizarse ninguna prueba de imagen en la sospecha de absceso cerebral" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Los abscesos cerebrales suelen ser polimicrobianos con frecuencia, con participación importante de bacterias anaerobias, no monomicrobianos de forma sistemática.",
    "b": "Los abscesos cerebrales están producidos por bacterias u hongos, pero NUNCA por virus, según los apuntes de la asignatura.",
    "c": "Correcto: en la sospecha de absceso cerebral está CONTRAINDICADA la punción lumbar (por el riesgo de herniación cerebral ante la presión intracraneal elevada asociada a una lesión ocupante de espacio); el diagnóstico se basa en técnicas de imagen como el TAC o la RMN, y en ocasiones el estudio microbiológico del pus obtenido directamente del absceso.",
    "d": "Es justo lo contrario: la punción lumbar está contraindicada en la sospecha de absceso cerebral, precisamente por el riesgo asociado a la lesión ocupante de espacio.",
    "e": "Las técnicas de imagen (TAC, RMN) son precisamente el pilar fundamental del diagnóstico del absceso cerebral, no están contraindicadas."
  },
  "repetida": false
},

{
  "id": "t8-023",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Qué microorganismos NUNCA producen un absceso cerebral, según los apuntes de la asignatura?",
  "opciones": { "a": "Los virus", "b": "Los estreptococos del grupo milleri", "c": "Las bacterias anaerobias", "d": "Los hongos", "e": "Enterobacterias y Pseudomonas aeruginosa" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los abscesos cerebrales están producidos por bacterias u hongos, pero nunca por virus, según se indica explícitamente en los apuntes de la asignatura.",
    "b": "Los estreptococos del grupo milleri son un agente etiológico clásico del absceso cerebral por contigüidad, en pacientes inmunocompetentes.",
    "c": "Las bacterias anaerobias sí pueden producir abscesos cerebrales, y de hecho su presencia es muy importante en este tipo de infecciones, con frecuencia polimicrobianas.",
    "d": "Los hongos sí pueden producir abscesos cerebrales, especialmente en el contexto de determinados factores de riesgo del huésped.",
    "e": "Las enterobacterias y Pseudomonas aeruginosa pueden causar abscesos cerebrales por contigüidad desde un foco ótico o de forma secundaria a bacteriemias o cirugía neurológica."
  },
  "repetida": false
},

{
  "id": "t8-025",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "En un LCR de un adulto se observa un diplococo Gram positivo. ¿Cuál es el diagnóstico presuntivo más probable?",
  "opciones": { "a": "Meningitis por Neisseria meningitidis", "b": "Meningitis por Escherichia coli", "c": "Meningitis vírica", "d": "Meningitis por Haemophilus influenzae", "e": "Meningitis por Streptococcus pneumoniae" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Neisseria meningitidis es un diplococo Gram NEGATIVO, no positivo, por lo que su morfología no encaja con lo descrito en el enunciado.",
    "b": "Escherichia coli es un bacilo Gram negativo, no un diplococo Gram positivo.",
    "c": "En la meningitis vírica no se observan microorganismos en el Gram, ya que los virus no se visualizan con esta tinción.",
    "d": "Haemophilus influenzae es un cocobacilo Gram negativo, no un diplococo Gram positivo.",
    "e": "Correcto: un diplococo Gram POSITIVO en el LCR es muy sugestivo de Streptococcus pneumoniae, uno de los dos agentes bacterianos más importantes de la meningitis en adultos."
  },
  "repetida": false
},

{
  "id": "t8-026",
  "tema": "Infecciones del sistema nervioso central",
  "pregunta": "¿Cuáles son los principales agentes causantes de meningitis vírica en niños y adultos jóvenes en nuestro medio, y cuál es su vía de transmisión?",
  "opciones": { "a": "Únicamente el VIH", "b": "Únicamente el virus de la rabia, transmitido por mordedura animal", "c": "Los enterovirus (Echovirus y Coxsackie), de transmisión feco-oral y también por secreciones respiratorias", "d": "Únicamente el virus del sarampión", "e": "Únicamente el virus de la hepatitis A" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El VIH no es el agente principal de la meningitis vírica típica en niños y adultos jóvenes descrita en los apuntes; puede producir manifestaciones neurológicas en el contexto de la infección crónica, pero no es el perfil descrito.",
    "b": "El virus de la rabia produce una encefalitis muy grave tras mordedura de un animal infectado, pero no es el agente principal de la meningitis vírica habitual en nuestro medio.",
    "c": "Correcto: en niños y adultos jóvenes, los principales agentes de la meningitis vírica (a veces llamada 'aséptica') en nuestro medio son los enterovirus (géneros Echovirus y Coxsackie), que al ser virus entéricos se transmiten fundamentalmente por vía feco-oral, aunque también por contacto de secreciones respiratorias; les siguen en frecuencia los virus del grupo herpes (VHS y varicela-zóster).",
    "d": "El virus del sarampión produce un cuadro exantemático característico, no es el principal agente de meningitis vírica descrito en los apuntes.",
    "e": "El virus de la hepatitis A produce hepatitis, no meningitis; su vía de transmisión feco-oral es compartida con los enterovirus, pero no es agente de meningitis."
  },
  "repetida": false
},

{
  "id": "t9-001",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cómo se define la bacteriemia?",
  "opciones": { "a": "La presencia de bacterias en la orina", "b": "La presencia de virus en la sangre", "c": "El conjunto de manifestaciones clínicas de la sepsis grave", "d": "La presencia de bacterias en la sangre, demostrada por un hemocultivo positivo, sin que el término describa por sí mismo el cuadro clínico del paciente", "e": "La presencia de hongos en la sangre" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La presencia de bacterias en la orina se denomina bacteriuria, no bacteriemia, que es un término específico para la sangre.",
    "b": "La presencia de virus en sangre se denomina viremia, un término distinto de la bacteriemia.",
    "c": "La bacteriemia es un hallazgo microbiológico (hemocultivo positivo), no un síndrome clínico como la sepsis grave, que implica disfunción orgánica.",
    "d": "Correcto: la bacteriemia se define simplemente como la presencia de bacterias en la sangre, demostrada por un hemocultivo positivo; no describe por sí misma el cuadro clínico del paciente, que puede oscilar entre una bacteriemia transitoria asintomática y una sepsis grave.",
    "e": "La presencia de hongos en sangre se denomina fungemia, un término distinto de la bacteriemia."
  },
  "repetida": false
},

{
  "id": "t9-003",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cuál es la diferencia entre el Síndrome de Respuesta Inflamatoria Sistémica (SRIS) y la sepsis?",
  "opciones": { "a": "Son términos exactamente sinónimos en todos los casos", "b": "La sepsis es un SRIS causado específicamente por un agente infeccioso; si el SRIS está producido por otra causa (traumatismo, quemadura, pancreatitis) no se considera sepsis", "c": "El SRIS se define exclusivamente por la presencia de hipotensión", "d": "El SRIS nunca puede estar producido por una infección", "e": "La sepsis nunca cumple los criterios de SRIS" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "No son sinónimos exactos: la sepsis es un subtipo de SRIS, concretamente el causado por una infección; el SRIS es un concepto más amplio que incluye también causas no infecciosas.",
    "b": "Correcto: el SRIS es una reacción generalizada desencadenada por diversos procesos patológicos graves (traumatismo, quemaduras, pancreatitis, infección); cuando el SRIS está producido específicamente por un agente infeccioso, se denomina sepsis o septicemia, y no simplemente SRIS.",
    "c": "El SRIS se define por la presencia de al menos 2 de varios criterios (temperatura, frecuencia cardiaca, frecuencia respiratoria, recuento leucocitario), no exclusivamente por la hipotensión, que es más propia de estadios más avanzados como el shock séptico.",
    "d": "El SRIS sí puede estar producido por una infección; en ese caso concreto pasa a denominarse sepsis.",
    "e": "La sepsis, por definición, cumple los criterios de SRIS (al menos 2 de los indicados: fiebre/hipotermia, taquicardia, taquipnea, leucocitosis/leucopenia), además de tener un origen infeccioso demostrado o sospechado."
  },
  "repetida": false
},

{
  "id": "t9-004",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Qué diferencia a la sepsis grave del shock séptico?",
  "opciones": { "a": "El shock séptico nunca es mortal", "b": "En la sepsis grave hay disfunción orgánica o hipotensión reversible con fluidoterapia, mientras que en el shock séptico las alteraciones no se corrigen a pesar de los tratamientos y se produce colapso vascular y fallo multiorgánico", "c": "Son exactamente lo mismo, sin ninguna diferencia clínica", "d": "El shock séptico se define únicamente por la presencia de fiebre", "e": "La sepsis grave siempre es más grave que el shock séptico" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El shock séptico es precisamente el estadio más grave, con alta mortalidad asociada, ya que las alteraciones no responden a los tratamientos habituales.",
    "b": "Correcto: en la sepsis grave existe disfunción orgánica (insuficiencia renal, cardiaca, etc.), signos de hipoperfusión o hipotensión, pero esta última es reversible con fluidoterapia; en el shock séptico, en cambio, las alteraciones NO se corrigen a pesar de los tratamientos, produciéndose colapso vascular, fallo multiorgánico y, con frecuencia, la muerte.",
    "c": "Son estadios de gravedad progresiva distintos, con implicaciones pronósticas y terapéuticas diferentes.",
    "d": "El shock séptico se caracteriza por colapso vascular y fallo multiorgánico refractario al tratamiento, no simplemente por la presencia de fiebre.",
    "e": "Es justo al revés: el shock séptico es el estadio MÁS grave de todos, por encima de la sepsis grave en la escala de gravedad de estas entidades."
  },
  "repetida": false
},

{
  "id": "t9-005",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Qué caracteriza a una bacteriemia PRIMARIA, según su clasificación por el foco de origen?",
  "opciones": { "a": "Solo puede darse en pacientes con endocarditis", "b": "Es sinónimo exacto de bacteriemia secundaria", "c": "Nunca puede estar producida por catéteres endovasculares", "d": "Aquella en la que la bacteria causa bacteriemia persistente sin haber dado signos previos de infección focal evidente en su punto de entrada", "e": "Aquella que siempre se origina a partir de un foco evidente, como una neumonía o una infección urinaria" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La endocarditis es un ejemplo de bacteriemia primaria, pero no la única causa posible; existen otras (fiebre tifoidea, brucelosis, catéteres endovasculares).",
    "b": "No son sinónimos: son las dos categorías opuestas de clasificación de la bacteriemia según su foco de origen (con o sin foco evidente previo).",
    "c": "Precisamente la bacteriemia asociada a catéter endovascular se clasifica como PRIMARIA, ya que la bacteria entra directamente al torrente circulatorio sin un foco de infección previo evidente en otra localización.",
    "d": "Correcto: la bacteriemia primaria es aquella en la que la bacteria causa una bacteriemia persistente sin que se hayan detectado previamente signos de infección focal evidente en su punto de entrada; ejemplos clásicos son la fiebre tifoidea, la brucelosis, la infección por catéter endovascular y la endocarditis.",
    "e": "Esto describe precisamente la bacteriemia SECUNDARIA, que sí se produce a partir de un foco infeccioso claramente identificado y previo."
  },
  "repetida": false
},

{
  "id": "t9-006",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cuál de las siguientes es una bacteriemia primaria clásica y su cuadro clínico asociado?",
  "opciones": { "a": "La celulitis por Staphylococcus aureus", "b": "Salmonella entérica serotipo Typhi, que causa la fiebre tifoidea con bacteriemia persistente, fiebre alta y esplenomegalia, con diarrea presente solo en una pequeña proporción de casos", "c": "La pielonefritis por Escherichia coli", "d": "La colecistitis por enterobacterias", "e": "La neumonía por Streptococcus pneumoniae, siempre clasificada como bacteriemia secundaria a un foco cutáneo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La celulitis por S. aureus, si se complica con bacteriemia, tendría un foco cutáneo evidente previo, lo que la haría más bien secundaria, no el ejemplo clásico de bacteriemia primaria.",
    "b": "Correcto: Salmonella entérica serotipo Typhi (y los serotipos Paratyphi) se transmiten por vía oral y, desde el intestino, pasan a la sangre dando lugar a una bacteriemia persistente (fiebre tifoidea/paratifoidea), con fiebre alta, cefalea, obnubilación y esplenomegalia; la diarrea aparece solo en un pequeño porcentaje de los casos, a pesar de tratarse de una infección de origen intestinal.",
    "c": "La pielonefritis por E. coli, si se acompaña de bacteriemia, tendría un foco urinario evidente previo, encajando más en el concepto de bacteriemia secundaria.",
    "d": "La colecistitis por enterobacterias, si se complica con bacteriemia, tendría un foco biliar evidente, por lo que se clasificaría como secundaria, no como ejemplo de bacteriemia primaria.",
    "e": "La neumonía neumocócica, cuando se complica con bacteriemia, se clasifica generalmente en el contexto de una infección con foco respiratorio evidente, no como el ejemplo clásico de bacteriemia primaria estudiado en los apuntes."
  },
  "repetida": false
},

{
  "id": "t9-007",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Qué caracteriza clínicamente a la brucelosis, una bacteriemia primaria producida por cocobacilos Gram negativos del género Brucella?",
  "opciones": { "a": "Es actualmente la causa más frecuente de bacteriemia en España", "b": "Nunca puede afectar al sistema nervioso central", "c": "Bacteriemia persistente, fiebre ondulante, artromialgias, esplenomegalia y sudoración nocturna, con posibles localizaciones metastásicas en huesos, SNC y válvulas cardiacas", "d": "Se transmite exclusivamente por vía sexual", "e": "Se diagnostica exclusivamente por coprocultivo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "En la actualidad la brucelosis es poco frecuente en nuestro medio, precisamente por la reducción del contacto directo con animales y la pasteurización sistemática de la leche.",
    "b": "La brucelosis sí puede producir localización a nivel del SNC, dando lugar a meningitis, como una de sus posibles complicaciones metastásicas.",
    "c": "Correcto: la brucelosis, adquirida por contacto con animales (zoonosis, sobre todo ganado vacuno) o consumo de leche no pasteurizada, cursa con bacteriemia persistente, fiebre ondulante (que va y viene), artromialgias, esplenomegalia, sudoración nocturna y postración; puede producir localizaciones metastásicas graves en huesos (espondilitis), SNC (meningitis) y válvulas cardiacas.",
    "d": "La brucelosis se transmite fundamentalmente por contacto con animales infectados o consumo de productos lácteos no pasteurizados (zoonosis), no por vía sexual.",
    "e": "El diagnóstico de la brucelosis se realiza mediante hemocultivo (manipulado en laboratorios de nivel 3 de bioseguridad, con crecimiento lento en 3-5 días), no mediante coprocultivo."
  },
  "repetida": false
},

{
  "id": "t9-008",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿En qué medio de cultivo bifásico específico se recomienda a veces sembrar el hemocultivo ante la sospecha de brucelosis?",
  "opciones": { "a": "El medio TCBS", "b": "El medio de Thayer-Martin", "c": "El medio CLED", "d": "El agar Sabouraud", "e": "El agar-Castañeda" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El medio TCBS es específico para Vibrio, sin relación con el diagnóstico de Brucella.",
    "b": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, no para el diagnóstico de la brucelosis.",
    "c": "El medio CLED es el empleado en el urocultivo, sin relación con el diagnóstico de la brucelosis.",
    "d": "El agar Sabouraud es un medio para hongos, sin relación con el diagnóstico microbiológico de la brucelosis.",
    "e": "Correcto: el hemocultivo ante sospecha de brucelosis puede emplear medios bifásicos como el agar-Castañeda, dado que Brucella crece lentamente (3-5 días) y requiere atmósfera capnófila (más CO2 de lo habitual)."
  },
  "repetida": false
},

{
  "id": "t9-009",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Qué es la meningococemia y qué tipo de bacteriemia representa habitualmente?",
  "opciones": { "a": "Un sinónimo de la fiebre tifoidea", "b": "La presencia de Streptococcus pneumoniae en el LCR", "c": "Un tipo de infección urinaria", "d": "Una infección cutánea localizada sin repercusión sistémica", "e": "La presencia de Neisseria meningitidis en circulación sanguínea, un cuadro grave que puede acompañarse de shock séptico y coagulación intravascular diseminada, siendo habitualmente una bacteriemia primaria" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La fiebre tifoidea está producida por Salmonella Typhi, una entidad clínica y microbiológica distinta de la meningococemia.",
    "b": "La meningococemia se refiere específicamente a Neisseria meningitidis en sangre, no a S. pneumoniae en LCR, que sería un concepto distinto (meningitis neumocócica).",
    "c": "La meningococemia no tiene relación con las infecciones urinarias; es un cuadro de bacteriemia grave por el meningococo.",
    "d": "La meningococemia implica precisamente diseminación sistémica grave (sepsis), no una infección cutánea localizada sin repercusión sistémica.",
    "e": "Correcto: la meningococemia es la presencia de Neisseria meningitidis circulando en sangre, tras colonizar asintomáticamente la faringe y pasar al torrente circulatorio; puede producir una sepsis meningocócica muy grave, con shock séptico, coagulación intravascular diseminada (petequias y equimosis) y elevada mortalidad si no se trata; habitualmente se comporta como una bacteriemia primaria, aunque en ocasiones puede haber una fase transitoria seguida de una secundaria si el meningococo alcanza después el SNC."
  },
  "repetida": false
},

{
  "id": "t9-010",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Qué tipo de bacteriemia se produce típicamente cuando la infección está asociada a un catéter endovascular?",
  "opciones": { "a": "Secundaria, ya que siempre existe un foco infeccioso previo bien definido en otro órgano", "b": "Primaria, ya que la bacteria entra directamente al torrente circulatorio a través del punto de inserción o la conexión del catéter, sin un foco infeccioso previo evidente en otra localización", "c": "Es indistinguible clínicamente de una infección urinaria", "d": "Solo puede ocurrir en pacientes ambulatorios, nunca en hospitalizados", "e": "Nunca puede producirse bacteriemia por esta vía" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Es justo lo contrario: no existe un foco previo evidente en otro órgano; la bacteria entra directamente por el propio catéter, lo que la clasifica como bacteriemia primaria.",
    "b": "Correcto: la bacteriemia asociada a catéter endovascular se clasifica como PRIMARIA, ya que la bacteria (habitualmente de la flora cutánea, sobre todo Staphylococcus epidermidis) entra directamente al torrente circulatorio a través del punto de inserción del catéter o de su conexión manipulada, sin que exista un foco infeccioso previo en otra localización del organismo.",
    "c": "Se trata de entidades clínicas y microbiológicas completamente distintas, con diferente foco anatómico, agentes etiológicos y manejo diagnóstico.",
    "d": "Es especialmente frecuente en pacientes HOSPITALIZADOS, que son quienes suelen llevar catéteres endovasculares arteriales o venosos de forma prolongada.",
    "e": "Sí puede producirse, y de hecho los pacientes con catéteres endovasculares tienen mucho mayor riesgo de bacteriemia asociada a catéter que la población general."
  },
  "repetida": false
},

{
  "id": "t9-011",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cuál es el agente etiológico más frecuente en la endocarditis de válvula natural adquirida en la comunidad, procedente de infecciones cutáneas, y cuál en la procedente de la boca (extracciones dentales)?",
  "opciones": { "a": "Treponema pallidum en ambos casos", "b": "Candida albicans en ambos casos", "c": "Staphylococcus aureus (procedente de la piel) y estreptococos del grupo viridans (procedentes de la boca)", "d": "Mycobacterium tuberculosis en ambos casos", "e": "Escherichia coli en ambos casos" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Treponema pallidum causa sífilis, sin ser el agente típico descrito para la endocarditis de válvula natural en los apuntes de la asignatura.",
    "b": "Candida albicans puede producir endocarditis en contextos concretos (por ejemplo, en usuarios de drogas por vía parenteral o pacientes con catéteres prolongados), pero no es el agente clásico descrito para la endocarditis de válvula natural comunitaria.",
    "c": "Correcto: en la endocarditis de válvula natural o en la infección tardía de válvula protésica (más de un año), Staphylococcus aureus proviene típicamente de infecciones cutáneas, mientras que los estreptococos del grupo viridans provienen de la cavidad oral, por ejemplo tras una extracción dental que permite el paso de la bacteria al torrente circulatorio.",
    "d": "Mycobacterium tuberculosis no es el agente típico de la endocarditis; produce fundamentalmente enfermedad pulmonar y, con menor frecuencia, formas extrapulmonares distintas.",
    "e": "Escherichia coli no es el agente más característico de la endocarditis de válvula natural en este contexto; los agentes clásicos descritos son S. aureus y los estreptococos viridans."
  },
  "repetida": false
},

{
  "id": "t9-012",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cuál es el agente etiológico más frecuente en la endocarditis protésica precoz (menos de un año tras la cirugía) y en la endocarditis de pacientes adictos a drogas por vía parenteral (ADVP)?",
  "opciones": { "a": "Neisseria gonorrhoeae en ambos casos", "b": "Mycobacterium tuberculosis en ambos casos", "c": "Vibrio cholerae en ambos casos", "d": "Treponema pallidum en ambos casos", "e": "En la protésica precoz, los estafilococos coagulasa negativos (procedentes de la piel o de la cirugía); en los ADVP, Staphylococcus aureus, que entra a través de la piel con los pinchazos" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Neisseria gonorrhoeae produce gonorrea, sin ser el agente característico de la endocarditis protésica precoz ni de la asociada a ADVP.",
    "b": "Mycobacterium tuberculosis no es un agente característico de la endocarditis protésica precoz ni de la asociada a ADVP.",
    "c": "Vibrio cholerae produce el cólera por vía digestiva, sin relación con la endocarditis protésica ni con los ADVP.",
    "d": "Treponema pallidum causa sífilis, sin relación directa con la endocarditis protésica precoz ni con la asociada a ADVP como agentes clásicos descritos en los apuntes.",
    "e": "Correcto: en la endocarditis protésica precoz (menos de un año desde la cirugía) predominan los estafilococos coagulasa negativos, procedentes de la piel o de una asepsia insuficiente durante la intervención quirúrgica; en los pacientes ADVP, S. aureus es el agente más frecuente, ya que entra al organismo a través de la piel con las inyecciones repetidas."
  },
  "repetida": false
},

{
  "id": "t9-013",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cuál es el mecanismo por el que Streptococcus pyogenes puede producir fiebre reumática tras episodios repetidos de faringoamigdalitis?",
  "opciones": { "a": "La fiebre reumática está producida por una toxina exfoliativa", "b": "No existe ninguna relación entre S. pyogenes y la fiebre reumática", "c": "Se produce exclusivamente por contacto directo con agua contaminada", "d": "S. pyogenes invade directamente y de forma masiva las válvulas cardiacas", "e": "Determinados antígenos de S. pyogenes comparten epítopos con componentes de las válvulas cardiacas, generando anticuerpos que reaccionan de forma cruzada con el propio tejido valvular" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La toxina exfoliativa (exfoliatina) es producida por Staphylococcus aureus y causa el síndrome de la piel escaldada, no la fiebre reumática, que tiene un mecanismo inmunológico distinto asociado a S. pyogenes.",
    "b": "Sí existe una relación bien establecida: la fiebre reumática es una complicación tardía de la faringoamigdalitis estreptocócica de repetición no tratada adecuadamente.",
    "c": "La fiebre reumática se relaciona con episodios repetidos de faringoamigdalitis por S. pyogenes, no con el contacto directo con agua contaminada.",
    "d": "El mecanismo no es de invasión bacteriana directa del tejido valvular, sino inmunológico (reactividad cruzada de anticuerpos), es decir, un mecanismo de autoinmunidad secundaria a la infección estreptocócica.",
    "e": "Correcto: algunos antígenos de S. pyogenes comparten epítopos con componentes de las válvulas cardiacas; el sistema inmune genera anticuerpos frente a esos antígenos bacterianos que, por reactividad cruzada, también atacan al propio tejido valvular, explicando por qué niños con faringoamigdalitis estreptocócica de repetición podían acabar desarrollando fiebre reumática."
  },
  "repetida": false
},

{
  "id": "t9-014",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cuántas extracciones de sangre se recomiendan, y de qué manera, para diagnosticar correctamente una bacteriemia mediante hemocultivo?",
  "opciones": { "a": "Diez extracciones del mismo brazo en el mismo punto de venopunción", "b": "Nunca se debe repartir la sangre entre distintos frascos", "c": "De 2 a 3 extracciones, utilizando siempre lugares diferentes de venopunción, repartiendo la sangre a partes iguales en frascos para aerobios y para anaerobios", "d": "La extracción debe hacerse siempre coincidiendo con un periodo afebril", "e": "Una única extracción es siempre suficiente y representativa" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "No se recomiendan tantas extracciones ni del mismo punto; el estándar son 2-3 extracciones en lugares DIFERENTES de venopunción, no repetidas en el mismo sitio.",
    "b": "Sí se debe repartir la sangre entre dos frascos distintos (aerobio y anaerobio) para poder detectar tanto microorganismos aerobios como anaerobios estrictos.",
    "c": "Correcto: para el diagnóstico de bacteriemia se recomienda realizar entre 2 y 3 extracciones, utilizando siempre lugares diferentes de venopunción; se extraen unos 10 mL de sangre de cada brazo (menos en niños) y se reparten a partes iguales en dos frascos, uno con medio de cultivo para aerobios y otro para anaerobios.",
    "d": "Se recomienda extraer la muestra preferiblemente coincidiendo con un PICO FEBRIL con escalofríos, no en un periodo afebril, ya que es cuando hay mayor probabilidad de detectar la bacteria circulante.",
    "e": "Una única extracción puede no ser representativa, sobre todo en bacteriemias intermitentes, por lo que se recomiendan varias extracciones en lugares diferentes para aumentar la sensibilidad diagnóstica."
  },
  "repetida": false
},

{
  "id": "t9-015",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿Cómo detectan los sistemas automatizados de hemocultivo el crecimiento bacteriano en los frascos?",
  "opciones": { "a": "Mediante la detección de anticuerpos en el frasco", "b": "Mediante sensores fluorescentes que detectan la producción de CO2 derivada del metabolismo de los microorganismos", "c": "Mediante radiografía simple del frasco", "d": "Mediante observación visual directa de las bacterias con microscopio óptico cada hora", "e": "Mediante la medición directa del pH sanguíneo del paciente" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Los sistemas automatizados no se basan en la detección de anticuerpos, sino en un fenómeno metabólico del propio microorganismo (producción de CO2).",
    "b": "Correcto: los sistemas automatizados de hemocultivo incuban y agitan continuamente los frascos, detectando el crecimiento bacteriano mediante sensores que se basan en la producción de CO2 por el metabolismo de los microorganismos; el CO2 reacciona con un material fluorescente en el fondo del frasco, modulando la luz absorbida por un fotosensor, lo que permite una monitorización continua con notificación de los resultados positivos.",
    "c": "No se emplea radiografía para la detección de crecimiento bacteriano en los frascos de hemocultivo.",
    "d": "No se realiza observación visual directa con microscopio de forma horaria; la detección automatizada se basa en sensores de producción de CO2, y la observación microscópica (Gram) se realiza solo una vez que el frasco se marca como positivo.",
    "e": "Los sistemas de hemocultivo no miden el pH sanguíneo del paciente, sino cambios en el propio frasco de cultivo relacionados con el metabolismo bacteriano (producción de CO2)."
  },
  "repetida": false
},

{
  "id": "t9-016",
  "tema": "Infecciones sistémicas",
  "pregunta": "En la tinción de Gram realizada sobre el caldo de un frasco de hemocultivo positivo de un anciano de 70 años con neumonía previa, se observan diplococos Gram positivos. ¿Cuál es el diagnóstico presuntivo más probable?",
  "opciones": { "a": "Bacteriemia por Salmonella", "b": "Bacteriemia por Klebsiella pneumoniae", "c": "Bacteriemia por Neisseria meningitidis", "d": "Bacteriemia por Streptococcus pneumoniae", "e": "Bacteriemia por Escherichia coli" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Salmonella es un bacilo Gram negativo (enterobacteria), no un diplococo Gram positivo, por lo que no encaja con la morfología descrita.",
    "b": "Klebsiella pneumoniae es un bacilo Gram negativo (enterobacteria), no un diplococo Gram positivo.",
    "c": "Neisseria meningitidis es un diplococo Gram NEGATIVO, no positivo, por lo que su morfología no encaja con la descripción del enunciado.",
    "d": "Correcto: en el contexto de una neumonía previa y con la observación de diplococos Gram positivos en el hemocultivo, el diagnóstico presuntivo más probable es Streptococcus pneumoniae, causa frecuente tanto de neumonía como de bacteriemia secundaria a ella.",
    "e": "Escherichia coli es un bacilo Gram negativo, no un diplococo Gram positivo."
  },
  "repetida": false
},

{
  "id": "t9-017",
  "tema": "Infecciones sistémicas",
  "pregunta": "¿En qué muestra se realiza directamente la tinción de Gram cuando se sospecha una bacteriemia, en lugar de sobre la sangre fresca del paciente?",
  "opciones": { "a": "Sobre las heces del paciente", "b": "Nunca se realiza tinción de Gram en el contexto de una bacteriemia", "c": "Sobre la orina del paciente", "d": "Sobre el LCR del paciente en todos los casos", "e": "Sobre el caldo del propio frasco de hemocultivo, una vez que este ha dado positivo, ya que en la sangre fresca directa no se aprecia nada por la baja concentración de bacterias" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Las heces no son la muestra adecuada para el diagnóstico de una bacteriemia, que se centra en el estudio de la sangre mediante hemocultivo.",
    "b": "Sí se realiza tinción de Gram en el contexto de una bacteriemia, pero sobre el caldo del hemocultivo positivo, no sobre la sangre directa del paciente.",
    "c": "La orina no es la muestra empleada para el diagnóstico directo de la bacteriemia; la muestra de referencia es la sangre, procesada mediante hemocultivo.",
    "d": "El LCR se estudia específicamente en la sospecha de meningitis, no es la muestra habitual para investigar directamente una bacteriemia, salvo que exista sospecha concomitante de afectación meníngea.",
    "e": "Correcto: la sangre en una bacteriemia contiene una cantidad muy baja de bacterias respecto al volumen total de sangre circulante, por lo que en una gota de sangre fresca no se observaría nada; por eso el Gram se realiza directamente sobre el caldo del frasco de hemocultivo una vez que este ha sido señalado como positivo por el sistema automatizado, momento en el que la concentración bacteriana ya es mucho mayor."
  },
  "repetida": true
},

{
  "id": "t9-019",
  "tema": "Infecciones sistémicas",
  "pregunta": "Para asumir con seguridad que una bacteria aislada en el hemocultivo es la verdadera causante de una endocarditis (donde el criterio de positividad es más exigente que en otras infecciones), ¿qué se requiere?",
  "opciones": { "a": "Solo es válido si se obtiene de una muestra de LCR", "b": "Solo es válido si se obtiene de una muestra de orina", "c": "Que el mismo microorganismo se aísle de forma positiva en, al menos, dos hemocultivos separados, ya que si solo aparece en uno de ellos es posible que se trate de una contaminación", "d": "Basta con un único hemocultivo positivo, sin necesidad de repetirlo", "e": "No es necesario realizar ningún hemocultivo para el diagnóstico de la endocarditis" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El LCR se emplea en el diagnóstico de la meningitis, no en el de la endocarditis, cuyo diagnóstico microbiológico se basa en el hemocultivo.",
    "b": "La orina no es la muestra empleada para el diagnóstico de la endocarditis, que se basa en el estudio de la sangre mediante hemocultivo.",
    "c": "Correcto: para poder asumir que un hemocultivo positivo refleja realmente una endocarditis y no una contaminación, se exige que el mismo microorganismo se aísle en al menos dos hemocultivos independientes; si solo aparece en uno de ellos, es más probable que se trate de una contaminación de la muestra.",
    "d": "Un único hemocultivo positivo no es suficiente para confirmar con seguridad una endocarditis, precisamente por el riesgo de contaminación de una única muestra.",
    "e": "El hemocultivo es una pieza fundamental y prácticamente indispensable en el diagnóstico de la endocarditis infecciosa."
  },
  "repetida": false
},

{
  "id": "t10-001",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué microorganismo produce típicamente la foliculitis, la hidrosadenitis, el orzuelo y la paroniquia?",
  "opciones": { "a": "Streptococcus pyogenes exclusivamente", "b": "Clostridium perfringens", "c": "Malassezia furfur", "d": "Propionibacterium acnes", "e": "Staphylococcus aureus" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "S. pyogenes puede producir algunas de estas infecciones ocasionalmente (como el impétigo, junto a S. aureus), pero el agente clásico y más característico de este conjunto de infecciones piógenas superficiales es S. aureus.",
    "b": "Clostridium perfringens se asocia a la gangrena gaseosa, una infección necrotizante grave, no a estas infecciones piógenas superficiales de la piel.",
    "c": "Malassezia furfur es el hongo causante de la pitiriasis versicolor, sin relación con estas infecciones piógenas bacterianas.",
    "d": "Propionibacterium acnes se asocia específicamente al acné, no a la foliculitis, hidrosadenitis, orzuelo o paroniquia.",
    "e": "Correcto: Staphylococcus aureus es el agente etiológico clásico de la foliculitis (infección del folículo piloso), la hidrosadenitis (infección de las glándulas sudoríparas), el orzuelo (infección de las glándulas sebáceas del párpado) y la paroniquia (infección de la piel que rodea a las uñas)."
  },
  "repetida": false
},

{
  "id": "t10-002",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué caracteriza al impétigo, una infección localizada de la epidermis frecuente en niños que viven en condiciones insalubres?",
  "opciones": { "a": "Está producido exclusivamente por Clostridium perfringens", "b": "Nunca es contagioso", "c": "Lesión eritematosa indolora que evoluciona a vesículas y pústulas, formando una costra dorada con aspecto de miel, producida por Streptococcus pyogenes o Staphylococcus aureus", "d": "Está producido por el virus varicela-zóster", "e": "Afecta exclusivamente al tejido muscular profundo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Clostridium perfringens no es el agente del impétigo; se asocia a infecciones necrotizantes profundas como la gangrena gaseosa, no a esta infección superficial de la epidermis.",
    "b": "El impétigo sí es contagioso, precisamente por eso es más frecuente en niños que viven en condiciones insalubres, favoreciendo su transmisión.",
    "c": "Correcto: el impétigo es una infección localizada de la epidermis que produce una lesión eritematosa indolora que evoluciona a vesículas y después pústulas, que al romperse dejan una costra dorada característica con aspecto de miel; está producido por la penetración de Streptococcus pyogenes o Staphylococcus aureus a través de pequeñas microlesiones cutáneas, y es más frecuente en niños con condiciones de higiene deficientes.",
    "d": "El impétigo está producido por bacterias (S. pyogenes o S. aureus), no por el virus varicela-zóster, que produce un cuadro clínico completamente distinto.",
    "e": "El impétigo afecta a la epidermis, una capa muy superficial de la piel, no al tejido muscular profundo."
  },
  "repetida": false
},

{
  "id": "t10-003",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "El síndrome de la piel escaldada está causado por cepas de Staphylococcus aureus productoras de:",
  "opciones": { "a": "Una toxina exfoliatina, que causa el desprendimiento de la epidermis", "b": "Una toxina botulínica", "c": "Coagulasa negativa exclusivamente", "d": "Ácido micólico", "e": "Ureasa" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el síndrome de la piel escaldada está ocasionado por cepas de S. aureus que producen la toxina exfoliatina, la cual exfolia la piel produciendo el desprendimiento completo de la epidermis, con aparición de ampollas que se rompen fácilmente y posterior descamación; es más frecuente en bebés y niños menores de 5 años.",
    "b": "La toxina botulínica es producida por Clostridium botulinum y causa botulismo, un cuadro neurológico, no el síndrome de la piel escaldada.",
    "c": "S. aureus es coagulasa POSITIVO, no negativo; además, el síndrome de la piel escaldada está causado por la toxina exfoliatina, no por la propiedad de coagulasa.",
    "d": "El ácido micólico forma parte de la pared de las micobacterias, sin relación con el mecanismo del síndrome de la piel escaldada.",
    "e": "La ureasa es una enzima relevante en otras infecciones (como Proteus mirabilis en la ITU), sin relación con este síndrome cutáneo estafilocócico."
  },
  "repetida": false
},

{
  "id": "t10-004",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué caracteriza a la erisipela, una infección de la dermis?",
  "opciones": { "a": "Nunca cursa con fiebre", "b": "Está producida por Streptococcus pyogenes y se manifiesta con una inflamación papuloeritematosa dolorosa, con fiebre, localizada generalmente en cara y piernas de niños y ancianos", "c": "Es una infección exclusivamente vírica", "d": "Está producida por Clostridium botulinum", "e": "Afecta exclusivamente al hueso" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La erisipela sí suele acompañarse de fiebre, a diferencia de infecciones cutáneas más superficiales y leves como el impétigo simple.",
    "b": "Correcto: la erisipela está producida por Streptococcus pyogenes, afecta a la dermis (más profunda que el impétigo), y se manifiesta con una inflamación papuloeritematosa dolorosa que acaba descamándose, con fiebre asociada, localizándose generalmente en la cara y las piernas de niños y ancianos.",
    "c": "La erisipela es una infección bacteriana, producida por Streptococcus pyogenes, no una infección vírica.",
    "d": "Clostridium botulinum produce botulismo, un cuadro neurológico por toxina alimentaria, sin ninguna relación con la erisipela.",
    "e": "La erisipela afecta a la dermis, una capa cutánea, no directamente al hueso (eso sería más propio de una osteomielitis)."
  },
  "repetida": false
},

{
  "id": "t10-005",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué bacteria produce típicamente el acné, y qué tipo de bacteria es en cuanto a su tinción y requerimiento de oxígeno?",
  "opciones": { "a": "Vibrio cholerae, un bacilo Gram negativo curvado", "b": "Propionibacterium acnes, un bacilo Gram positivo anaerobio estricto", "c": "Treponema pallidum, una espiroqueta", "d": "Neisseria gonorrhoeae, un diplococo Gram negativo", "e": "Mycobacterium tuberculosis, un bacilo ácido-alcohol resistente" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Vibrio cholerae produce el cólera, sin relación con el acné cutáneo.",
    "b": "Correcto: el acné, una retención de grasa de las glándulas pilosebáceas asociada a inflamación e infección, está causado por Propionibacterium acnes, un bacilo Gram POSITIVO anaerobio ESTRICTO.",
    "c": "Treponema pallidum causa la sífilis, sin ninguna relación con el acné.",
    "d": "Neisseria gonorrhoeae produce gonorrea, una infección de transmisión sexual, sin relación con el acné.",
    "e": "Mycobacterium tuberculosis produce tuberculosis, sin relación con el acné."
  },
  "repetida": false
},

{
  "id": "t10-007",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cuál es la etiología clásica de la fascitis necrotizante cuando su origen es cutáneo, y qué la caracteriza clínicamente?",
  "opciones": { "a": "Es siempre una infección leve y autolimitada sin necesidad de tratamiento", "b": "Está producida exclusivamente por hongos dermatofitos", "c": "Está producida exclusivamente por virus", "d": "Nunca produce sepsis ni toxicidad sistémica", "e": "Cepas muy virulentas de Streptococcus pyogenes, produciendo necrosis tisular grave, toxicidad sistémica y alta mortalidad, con progresión rápida de la lesión de rojo a morado y aparición de ampollas y gangrena" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Es una infección muy grave y potencialmente mortal, que requiere tratamiento urgente (quirúrgico y antibiótico), no una infección leve y autolimitada.",
    "b": "Los hongos dermatofitos producen infecciones superficiales de la piel (tiñas), un cuadro clínico completamente distinto y mucho menos grave que la fascitis necrotizante.",
    "c": "La fascitis necrotizante de origen cutáneo es fundamentalmente bacteriana (S. pyogenes en las formas clásicas), no vírica.",
    "d": "Es justo lo contrario: la fascitis necrotizante se caracteriza precisamente por la toxicidad sistémica, con frecuencia acompañada de sepsis grave y alta mortalidad.",
    "e": "Correcto: la fascitis necrotizante, cuando el origen es cutáneo, suele estar causada por cepas muy virulentas de Streptococcus pyogenes (a veces llamada 'bacteria come carne'); es una infección aguda del tejido subcutáneo y las fascias con grave necrosis tisular, toxicidad sistémica (suele haber sepsis) y alta mortalidad, con progresión rápida de la coloración de la piel de rojo a morado, ampollas y gangrena."
  },
  "repetida": false
},

{
  "id": "t10-008",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué microorganismo es el responsable de la gangrena gaseosa, y qué signo clínico característico produce al palpar el tejido afectado?",
  "opciones": { "a": "Clostridium perfringens, un anaerobio estricto que produce una sensación crepitante al palpar el tejido hinchado, debido a la presencia de gas", "b": "Streptococcus pyogenes, sin producir ningún gas en el tejido", "c": "Escherichia coli, sin ninguna característica especial al tacto", "d": "Staphylococcus epidermidis", "e": "Candida albicans" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la gangrena gaseosa es una infección necrotizante del tejido subcutáneo producida por Clostridium perfringens, un anaerobio estricto; al presionar sobre el tejido hinchado se puede sentir una sensación crepitante debida a la presencia de gas, producto del metabolismo bacteriano, siendo una infección de progresión rápida y con frecuencia mortal.",
    "b": "S. pyogenes se asocia más bien a la fascitis necrotizante clásica, un cuadro necrotizante distinto en el que no es característica la producción de gas crepitante.",
    "c": "E. coli puede participar en infecciones necrotizantes polimicrobianas asociadas a úlceras crónicas, pero el agente clásico y característico de la gangrena gaseosa con producción de gas es Clostridium perfringens.",
    "d": "S. epidermidis es un contaminante habitual de la piel y catéteres, sin relación con el cuadro grave de la gangrena gaseosa.",
    "e": "Candida albicans es una levadura que no produce el cuadro necrotizante con producción de gas característico de la gangrena gaseosa."
  },
  "repetida": false
},

{
  "id": "t10-009",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cuál es la única especie de Candida capaz de formar filamentos (pseudohifas) en presencia de suero, característica que se aprovecha para su identificación mediante la prueba de filamentación?",
  "opciones": { "a": "Malassezia furfur", "b": "Cryptococcus neoformans", "c": "Candida albicans", "d": "Microsporum spp.", "e": "Trichophyton spp." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Malassezia furfur es el agente de la pitiriasis versicolor, una levadura lipofílica distinta del género Candida.",
    "b": "Cryptococcus neoformans es una levadura capsulada asociada a meningitis en inmunodeprimidos, no es la especie identificada por la prueba de filamentación.",
    "c": "Correcto: Candida albicans es la única especie del género Candida con la capacidad de formar filamentos o pseudohifas cuando se incuba en presencia de suero, propiedad que se emplea en la prueba de filamentación para su identificación presuntiva rápida.",
    "d": "Microsporum spp. es también un hongo dermatofito filamentoso, distinto de Candida albicans y sin relación con la prueba de filamentación.",
    "e": "Trichophyton spp. es un hongo dermatofito filamentoso, distinto de las levaduras del género Candida, y no se identifica mediante la prueba de filamentación."
  },
  "repetida": true
},

{
  "id": "t10-010",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "La pitiriasis versicolor, caracterizada por placas hipo o hiperpigmentadas en el pecho o la espalda, sin dolor ni picor, está producida por:",
  "opciones": { "a": "Streptococcus pyogenes", "b": "Malassezia furfur, una levadura comensal que sobrecrece favorecida por el exceso de lípidos en la piel de adultos jóvenes", "c": "Treponema pallidum", "d": "Staphylococcus aureus", "e": "El virus varicela-zóster" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Streptococcus pyogenes es una bacteria asociada a otras infecciones cutáneas (erisipela, impétigo), no el agente de la pitiriasis versicolor.",
    "b": "Correcto: la pitiriasis versicolor está producida por Malassezia furfur, una levadura comensal de la piel que, en determinadas circunstancias, sobrecrece favorecida por el exceso de lípidos disponibles en la piel de los adultos jóvenes, dando lugar a placas hipo o hiperpigmentadas sin dolor ni picor.",
    "c": "Treponema pallidum causa la sífilis, sin ninguna relación con la pitiriasis versicolor.",
    "d": "Staphylococcus aureus es una bacteria, no el agente fúngico causante de la pitiriasis versicolor.",
    "e": "El virus varicela-zóster produce la varicela y el herpes zóster, cuadros clínicos completamente distintos de la pitiriasis versicolor, que es de origen fúngico."
  },
  "repetida": false
},

{
  "id": "t10-011",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cuál de las siguientes infecciones cutáneas víricas está producida por un Poxvirus, formando pápulas con una diminuta depresión en el centro?",
  "opciones": { "a": "El sarampión", "b": "El molusco contagioso", "c": "La rubeola", "d": "La varicela", "e": "El impétigo" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El sarampión está producido por un Paramixovirus, un virus completamente distinto de la familia Poxviridae, y produce un cuadro exantemático generalizado, no las pápulas umbilicadas típicas del molusco.",
    "b": "Correcto: el molusco contagioso está causado por un Poxvirus, produciendo pápulas características con una diminuta depresión (umbilicación) en el centro; se transmite por contacto directo con la piel, por fómites y también por contacto sexual, siendo bastante frecuente en niños.",
    "c": "La rubeola está producida por un togavirus, no un Poxvirus, y da lugar a un exantema generalizado tras un cuadro sistémico previo.",
    "d": "La varicela está producida por el virus varicela-zóster, de la familia Herpesviridae, no por un Poxvirus.",
    "e": "El impétigo es una infección bacteriana (S. pyogenes o S. aureus), no una infección vírica por Poxvirus."
  },
  "repetida": false
},

{
  "id": "t10-012",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cuál de las siguientes enfermedades NO ES una enfermedad exantemática vírica?",
  "opciones": { "a": "El exantema súbito", "b": "La varicela", "c": "La rubeola", "d": "El herpes labial", "e": "El sarampión" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El exantema súbito (roséola infantum, sexta enfermedad) es una enfermedad exantemática vírica clásica, producida por el herpesvirus humano tipo 6 y 7.",
    "b": "La varicela es una enfermedad exantemática vírica producida por el virus varicela-zóster, con diseminación hematógena y siembra de la piel.",
    "c": "La rubeola es una enfermedad exantemática vírica clásica, producida por un togavirus, que afecta a niños mayores/púberes.",
    "d": "Correcto: el herpes labial es una manifestación LOCALIZADA de la reactivación del virus del herpes simple tipo 1 en la zona perioral, no un exantema generalizado producido por diseminación sistémica del virus, a diferencia de las verdaderas enfermedades exantemáticas.",
    "e": "El sarampión es la enfermedad exantemática vírica clásica por excelencia, producida por un Paramixovirus, con las características manchas de Koplik previas al exantema."
  },
  "repetida": true
},

{
  "id": "t10-014",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué caracteriza al sarampión y qué signo clínico previo al exantema es especialmente característico?",
  "opciones": { "a": "Está producido por un togavirus, siendo indistinguible de la rubeola", "b": "Está producido por Clostridium perfringens", "c": "Se transmite exclusivamente por vía sexual", "d": "Está producido por un Paramixovirus de transmisión aérea que afecta a niños de corta edad, precediendo al exantema un cuadro sistémico con las característicos manchas de Koplik", "e": "Nunca produce fiebre" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El sarampión está producido por un Paramixovirus, mientras que la rubeola está producida por un togavirus; son virus y entidades clínicas distintas, aunque ambas cursen con exantema.",
    "b": "Clostridium perfringens es una bacteria asociada a la gangrena gaseosa y a algunas toxiinfecciones alimentarias, sin ninguna relación con el sarampión, que es vírico.",
    "c": "El sarampión se transmite por vía AÉREA (secreciones respiratorias), no por vía sexual.",
    "d": "Correcto: el sarampión está causado por un Paramixovirus, se transmite por vía aérea y afecta principalmente a niños de corta edad; inicialmente aparece un cuadro sistémico (fiebre, catarro) y, antes del exantema propiamente dicho, es característica la aparición de las manchas de Koplick en la mucosa oral.",
    "e": "El sarampión sí produce fiebre, como parte del cuadro sistémico inicial que precede al exantema característico."
  },
  "repetida": false
},

{
  "id": "t10-015",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "El eritema infeccioso (quinta enfermedad o síndrome del niño abofeteado) está producido por:",
  "opciones": { "a": "El herpesvirus humano tipo 6", "b": "El virus varicela-zóster", "c": "El parvovirus B19", "d": "Un Paramixovirus", "e": "Un togavirus" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El herpesvirus humano tipo 6 (junto al tipo 7) es el agente del exantema súbito, no del eritema infeccioso.",
    "b": "El virus varicela-zóster produce la varicela y el herpes zóster, entidades clínicas distintas del eritema infeccioso.",
    "c": "Correcto: el eritema infeccioso, también llamado quinta enfermedad o síndrome del niño abofeteado (por el enrojecimiento característico de las mejillas), está causado por el parvovirus B19, afecta a niños de 5-15 años y se transmite por vía aérea.",
    "d": "Los Paramixovirus incluyen al virus del sarampión, no son el agente causal del eritema infeccioso.",
    "e": "Los togavirus incluyen al virus de la rubeola, no son el agente causal del eritema infeccioso, que está producido por el parvovirus B19."
  },
  "repetida": false
},

{
  "id": "t10-016",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "El exantema súbito (roséola infantum o fiebre de los tres días), la causa más frecuente de exantema en menores de 3 años, está producido por:",
  "opciones": { "a": "Un Paramixovirus", "b": "Un togavirus", "c": "Un Poxvirus", "d": "El herpesvirus humano tipo 6 y tipo 7", "e": "El parvovirus B19" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Los Paramixovirus incluyen al virus del sarampión, no son el agente del exantema súbito.",
    "b": "Los togavirus incluyen al virus de la rubeola, no son el agente del exantema súbito.",
    "c": "Los Poxvirus incluyen al agente del molusco contagioso, no son el agente del exantema súbito.",
    "d": "Correcto: el exantema súbito, también llamado roséola infantum o fiebre de los tres días, está causado por el herpesvirus humano tipo 6 y tipo 7, siendo la causa más frecuente de exantema en menores de 3 años; se transmite por contacto con secreciones (saliva), y el exantema aparece tras el cuadro sistémico previo.",
    "e": "El parvovirus B19 es el agente del eritema infeccioso (quinta enfermedad), un cuadro clínico distinto del exantema súbito."
  },
  "repetida": false
},

{
  "id": "t10-017",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué virus produce la enfermedad de manos, pies y boca, caracterizada por un cuadro sistémico seguido de exantema?",
  "opciones": { "a": "El virus de la hepatitis A", "b": "El enterovirus Coxsackie A16", "c": "El virus varicela-zóster", "d": "El virus del papiloma humano", "e": "El virus de Epstein-Barr" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El virus de la hepatitis A produce hepatitis, con transmisión feco-oral, sin relación con la enfermedad de manos, pies y boca.",
    "b": "Correcto: la enfermedad de manos, pies y boca está causada por el enterovirus Coxsackie A16, miembro de la familia de los enterovirus, dando lugar a un cuadro sistémico seguido de la aparición del exantema característico en manos, pies y boca.",
    "c": "El virus varicela-zóster produce la varicela, un cuadro exantemático distinto de la enfermedad de manos, pies y boca.",
    "d": "El virus del papiloma humano produce verrugas y lesiones asociadas al cáncer de cérvix, sin relación con la enfermedad de manos, pies y boca.",
    "e": "El virus de Epstein-Barr produce la mononucleosis infecciosa, sin relación con la enfermedad de manos, pies y boca."
  },
  "repetida": false
},

{
  "id": "t10-018",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Qué diferencia principal existe entre el VHS-1 y el VHS-2 en cuanto a su localización clásica de infección?",
  "opciones": { "a": "No existe ninguna diferencia clínica entre ambos", "b": "El VHS-1 solo afecta a los genitales", "c": "El VHS-1 causa típicamente infecciones en labios y cara, mientras que el VHS-2 causa típicamente infecciones genitales", "d": "El VHS-2 solo afecta a los labios", "e": "Ambos afectan exclusivamente a las uñas" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Sí existe una diferencia clásica de localización preferente entre ambos tipos, aunque no sea absoluta en la práctica clínica actual.",
    "b": "Es al revés: el VHS-1 se asocia clásicamente a la localización orofacial (labios, cara), no exclusivamente a los genitales.",
    "c": "Correcto: el virus del herpes simple tipo 1 (VHS-1) causa clásicamente infecciones en los labios y la cara (herpes labial, gingivoestomatitis vesiculosa en la primoinfección), mientras que el VHS-2 causa clásicamente infecciones a nivel genital, aunque en la práctica clínica actual pueden encontrarse ambos tipos en ambas localizaciones.",
    "d": "Es al revés: el VHS-2 se asocia clásicamente a la localización genital, no exclusivamente a los labios.",
    "e": "Ninguno de los dos tipos de VHS afecta característicamente a las uñas; sus localizaciones clásicas son la orofacial (VHS-1) y la genital (VHS-2)."
  },
  "repetida": false
},

{
  "id": "t10-019",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Dónde permanecen latentes los virus del herpes simple entre reactivaciones?",
  "opciones": { "a": "En los eritrocitos", "b": "En el riñón exclusivamente", "c": "Nunca permanecen latentes, se eliminan por completo tras la primera infección", "d": "En el hígado exclusivamente", "e": "En las neuronas sensitivas de los ganglios nerviosos, como el ganglio trigémino (VHS-1) o los ganglios lumbares/sacros (VHS-2)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Los eritrocitos no albergan la latencia del herpes simple; el reservorio de latencia son las neuronas sensitivas de los ganglios nerviosos.",
    "b": "El riñón no es el lugar de latencia de estos virus, que se establece específicamente en el tejido nervioso ganglionar.",
    "c": "El herpes simple, precisamente por su capacidad de latencia en neuronas sensitivas, puede reactivarse periódicamente a lo largo de la vida, no se elimina de forma definitiva tras la primoinfección.",
    "d": "El hígado no es el reservorio de latencia de los virus del herpes simple; su latencia se establece en el tejido nervioso, concretamente en las neuronas sensitivas de los ganglios.",
    "e": "Correcto: los virus del herpes simple permanecen latentes en las neuronas sensitivas de los ganglios nerviosos correspondientes a la zona de la primoinfección; el VHS-1 permanece latente en el ganglio trigémino, y al reactivarse produce las vesículas del herpes labial; el VHS-2 lo hace de forma análoga a nivel de los ganglios lumbares/sacros."
  },
  "repetida": false
},

{
  "id": "t10-020",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cómo se realiza habitualmente el diagnóstico de las enfermedades exantemáticas víricas de la infancia (sarampión, rubeola, exantema súbito, etc.)?",
  "opciones": { "a": "Se diagnostican exclusivamente mediante coprocultivo", "b": "Nunca es posible diagnosticar estas infecciones", "c": "Siempre se requiere biopsia cutánea en todos los casos", "d": "El diagnóstico de la mayoría de estas infecciones es clínico, y en caso de requerirse un diagnóstico etiológico específico se emplean las técnicas de diagnóstico vírico habituales, fundamentalmente la PCR", "e": "Siempre se requiere un hemocultivo específico" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El coprocultivo se emplea en el diagnóstico de enteritis bacterianas, sin relación con las enfermedades exantemáticas víricas cutáneas.",
    "b": "Sí es posible diagnosticarlas, tanto clínicamente en la mayoría de los casos como mediante técnicas de laboratorio (PCR) cuando es necesario confirmar la etiología.",
    "c": "La biopsia cutánea no es el procedimiento habitual para el diagnóstico de estas entidades, que suele ser clínico o, en su caso, mediante técnicas moleculares menos invasivas.",
    "d": "Correcto: el diagnóstico de la mayoría de las infecciones exantemáticas víricas es clínico, basado en las características de la erupción y el contexto epidemiológico; cuando se requiere confirmación etiológica se emplean las técnicas habituales de diagnóstico vírico, fundamentalmente la PCR.",
    "e": "El hemocultivo se emplea para el diagnóstico de bacteriemia, no es la técnica habitual para el diagnóstico de las enfermedades exantemáticas víricas."
  },
  "repetida": false
},

{
  "id": "t10-022",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cuál de las siguientes NO ES una infección de la piel y del tejido subcutáneo?",
  "opciones": { "a": "La tiña", "b": "La úlcera de decúbito", "c": "La celulitis", "d": "El pie de atleta", "e": "La peritonitis" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La tiña es una dermatofitosis, una infección fúngica superficial de la piel, sí clasificada dentro de las infecciones cutáneas.",
    "b": "Las úlceras de decúbito son lesiones cutáneas infectadas por presión mantenida sobre prominencias óseas, clasificadas dentro de las infecciones de la piel y el tejido subcutáneo.",
    "c": "La celulitis es una infección que afecta al tejido celular subcutáneo, clasificada dentro de este mismo grupo de infecciones.",
    "d": "El pie de atleta es una forma de tiña que afecta a los pies, también clasificada dentro de las infecciones de la piel.",
    "e": "Correcto: la peritonitis es una infección de la cavidad abdominal (inflamación del peritoneo), no una infección de la piel ni del tejido subcutáneo, por lo que se clasifica dentro del tema de infecciones piógenas/intraabdominales, no en el de piel y tejido subcutáneo."
  },
  "repetida": true
},

{
  "id": "t10-023",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cuál de los siguientes agentes causa la tiña del cuero cabelludo, altamente contagiosa entre niños, y puede producir pústulas conocidas como 'Kerion'?",
  "opciones": { "a": "Malassezia furfur", "b": "Streptococcus pyogenes", "c": "Candida albicans", "d": "Trichophyton spp. o Microsporum spp.", "e": "Staphylococcus aureus" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Malassezia furfur produce la pitiriasis versicolor, un cuadro clínico distinto de la tiña del cuero cabelludo.",
    "b": "Streptococcus pyogenes es una bacteria asociada a otras infecciones cutáneas (impétigo, erisipela), no a la tiña del cuero cabelludo, que es de origen fúngico.",
    "c": "Candida albicans produce candidiasis (cutánea, oral o vaginal), no la tiña del cuero cabelludo, que es una dermatofitosis producida por hongos filamentosos distintos.",
    "d": "Correcto: la tiña del cuero cabelludo está causada por Trichophyton spp. o por Microsporum spp. (este último de origen zoofílico), es altamente contagiosa especialmente entre niños, y puede producir una erupción roja descamativa, placas de calvicie o las características pústulas llamadas 'Kerion'.",
    "e": "Staphylococcus aureus es una bacteria, no un hongo dermatofito; no es el agente causal de la tiña del cuero cabelludo."
  },
  "repetida": false
},

{
  "id": "t10-024",
  "tema": "Infecciones de la piel y del tejido subcutáneo. Exantemas víricos",
  "pregunta": "¿Cuál es el procesamiento habitual en el laboratorio para el diagnóstico de una dermatofitosis a partir de escamas cutáneas?",
  "opciones": { "a": "Realizar únicamente un hemocultivo", "b": "Sembrar directamente en medio de Thayer-Martin", "c": "Suspender la muestra en KOH y observarla al microscopio, y cultivarla en agar Sabouraud incubado a 28ºC", "d": "Realizar únicamente un urocultivo", "e": "Realizar únicamente una tinción de Ziehl-Neelsen" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El hemocultivo se emplea para el diagnóstico de bacteriemia, sin relación con el diagnóstico de una infección fúngica superficial de la piel.",
    "b": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, sin ninguna relación con el diagnóstico de las dermatofitosis.",
    "c": "Correcto: para el diagnóstico de una dermatofitosis, la muestra (escamas de piel, pelo o uñas) se suspende en KOH y se observa al microscopio para visualizar las hifas características, y el cultivo se realiza en agar Sabouraud, incubado a 28ºC (temperatura óptima para muestras superficiales), pudiendo requerir hasta 15 días de incubación en el caso de los dermatofitos.",
    "d": "El urocultivo se emplea para el diagnóstico de infecciones urinarias, sin relación con el diagnóstico de una dermatofitosis cutánea.",
    "e": "La tinción de Ziehl-Neelsen se emplea para detectar micobacterias, sin ninguna relación con el diagnóstico de las dermatofitosis."
  },
  "repetida": false
},

{
  "id": "t11-001",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuál es la causa más frecuente de la osteomielitis por vía hematógena, así como de la artritis séptica por esta misma vía?",
  "opciones": { "a": "Staphylococcus aureus", "b": "Candida albicans", "c": "Vibrio cholerae", "d": "Treponema pallidum", "e": "Bordetella pertussis" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: Staphylococcus aureus es el microorganismo que con mayor frecuencia provoca tanto osteomielitis aguda hematógena como artritis séptica por vía hematógena, al diseminarse desde un foco distante a través del torrente sanguíneo.",
    "b": "Candida albicans puede causar infecciones osteoarticulares en contextos concretos (inmunodeprimidos, tras cirugía), pero no es el agente más frecuente de la osteomielitis hematógena general.",
    "c": "Vibrio cholerae causa el cólera por vía digestiva, sin relación con las infecciones osteoarticulares.",
    "d": "Treponema pallidum causa sífilis, sin ser el agente principal de la osteomielitis ni de la artritis séptica hematógena.",
    "e": "Bordetella pertussis causa tosferina, una infección respiratoria, sin relación con la osteomielitis ni la artritis séptica."
  },
  "repetida": false
},

{
  "id": "t11-003",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuál es el agente etiológico más frecuente de la artritis séptica producida por diseminación hematógena desde un foco distante?",
  "opciones": { "a": "Vibrio cholerae", "b": "Staphylococcus aureus", "c": "Brucella en todos los casos", "d": "Neisseria gonorrhoeae en todos los casos", "e": "Mycobacterium tuberculosis en todos los casos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Vibrio cholerae no está implicado en la artritis séptica; produce el cólera por vía digestiva.",
    "b": "Correcto: en la artritis séptica producida por diseminación hematógena desde un foco distante, el microorganismo que se aísla con más frecuencia es Staphylococcus aureus.",
    "c": "Brucella puede producir afectación articular (artromialgias) en el contexto de la brucelosis, pero S. aureus sigue siendo el agente más frecuente de la artritis séptica hematógena en general.",
    "d": "Neisseria gonorrhoeae puede producir artritis séptica en el contexto de una infección gonocócica diseminada, pero no es el agente MÁS frecuente en general de la artritis séptica hematógena, que es S. aureus.",
    "e": "M. tuberculosis puede producir afectación articular en el contexto de tuberculosis diseminada, pero no es el agente más frecuente de la artritis séptica hematógena aguda."
  },
  "repetida": false
},

{
  "id": "t11-004",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Qué microorganismos están implicados con mayor frecuencia en las infecciones de las prótesis articulares?",
  "opciones": { "a": "Bordetella pertussis exclusivamente", "b": "Neisseria gonorrhoeae exclusivamente", "c": "Salmonella spp. exclusivamente", "d": "Estafilococos coagulasa negativos, introducidos en el momento de la intervención quirúrgica o por vía hematógena", "e": "Vibrio cholerae exclusivamente" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Bordetella pertussis produce tosferina, sin relación con las infecciones de prótesis articulares.",
    "b": "Neisseria gonorrhoeae puede producir artritis séptica en el contexto de infección diseminada, pero no es el agente principal de las infecciones específicas de prótesis articulares.",
    "c": "Salmonella spp. puede producir osteomielitis en contextos concretos (por ejemplo, en pacientes con hemoglobinopatías), pero no es el agente principal de las infecciones protésicas articulares.",
    "d": "Correcto: las infecciones de las prótesis articulares se deben fundamentalmente a estafilococos coagulasa negativos, introducidos habitualmente en el momento de la intervención quirúrgica (contaminación de la superficie protésica, material al que estas bacterias se adhieren fácilmente) o, con menor frecuencia, por vía hematógena.",
    "e": "Vibrio cholerae no tiene relación con las infecciones de prótesis articulares."
  },
  "repetida": false
},

{
  "id": "t11-005",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "En el diagnóstico de la osteomielitis, ¿qué se puede afirmar sobre el recuento de leucocitos y la utilidad de la PCR (proteína C reactiva)?",
  "opciones": { "a": "La PCR nunca aporta información útil en el seguimiento de la osteomielitis", "b": "La leucocitosis está presente siempre en el 100% de los casos de osteomielitis", "c": "En un 60% de los casos no existe leucocitosis, por lo que una fórmula leucocitaria normal no excluye el diagnóstico; la PCR es útil para el seguimiento, elevándose en las primeras 8 horas y normalizándose tras una semana de tratamiento eficaz", "d": "La VSG es una prueba muy específica para el diagnóstico de la osteomielitis", "e": "La ausencia de leucocitosis descarta siempre la osteomielitis" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La PCR sí aporta información muy útil para el seguimiento de la osteomielitis y para diferenciar formas complicadas, según indican los apuntes de la asignatura.",
    "b": "No está presente en todos los casos; hasta en un 60% de los pacientes con osteomielitis no existe leucocitosis, por lo que no puede considerarse un hallazgo constante.",
    "c": "Correcto: en hasta el 60% de los casos de osteomielitis no existe leucocitosis, por lo que una fórmula leucocitaria normal no permite excluir el diagnóstico; la proteína C reactiva (PCR) se eleva en las primeras 8 horas, alcanza su valor máximo a los 2 días y se normaliza a la semana de iniciado un tratamiento eficaz, siendo muy útil para el seguimiento evolutivo.",
    "d": "La VSG (velocidad de sedimentación globular) es muy sensible pero POCO específica, no una prueba específica, según se indica explícitamente en los apuntes.",
    "e": "Es justo lo contrario: la ausencia de leucocitosis NO descarta el diagnóstico de osteomielitis, ya que ocurre en una proporción considerable de los casos."
  },
  "repetida": false
},

{
  "id": "t11-006",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuál es la diferencia entre la peritonitis primaria y la peritonitis secundaria?",
  "opciones": { "a": "Ninguna de las dos puede asociarse a bacteriemia", "b": "Ambas son exactamente iguales en cuanto a su mecanismo y frecuencia", "c": "La peritonitis secundaria es siempre monomicrobiana", "d": "La primaria aparece sin una fuente de infección intraabdominal evidente (por vía hematógena, poco frecuente), mientras que la secundaria aparece como consecuencia de la perforación de una víscera hueca abdominal, siendo mucho más frecuente y polimicrobiana", "e": "La peritonitis primaria es la más frecuente de las dos" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La peritonitis, especialmente la secundaria, es una infección grave en la que hay que vigilar la presencia de bacterias en sangre (bacteriemia), que puede complicarla.",
    "b": "Se trata de dos entidades con mecanismos de producción y frecuencia claramente distintos, siendo la secundaria mucho más habitual.",
    "c": "La peritonitis secundaria es característicamente POLIMICROBIANA, dada la mezcla de flora intestinal que sale a la cavidad peritoneal tras la perforación de una víscera hueca.",
    "d": "Correcto: la peritonitis primaria aparece sin una fuente de infección intraabdominal evidente, por vía hematógena, y es poco frecuente; la peritonitis secundaria aparece tras la perforación de una víscera hueca abdominal (estómago, intestino, apéndice) por traumatismo o cirugía, siendo mucho más frecuente y de etiología polimicrobiana, incluyendo anaerobios, enterobacterias y enterococos.",
    "e": "Es al revés: la peritonitis SECUNDARIA es mucho más frecuente que la primaria, que se considera poco frecuente."
  },
  "repetida": false
},

{
  "id": "t11-007",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Qué caracteriza a las infecciones retrofaríngeas y del suelo de la boca, como la angina de Ludwig?",
  "opciones": { "a": "Son de etiología polimicrobiana con importante participación de anaerobios, y la celulitis del espacio submaxilar y sublingual puede llegar a bloquear las vías respiratorias, con riesgo de asfixia", "b": "Se originan siempre a partir de una infección urinaria", "c": "Nunca comprometen la vía aérea", "d": "Son siempre monomicrobianas por Neisseria gonorrhoeae", "e": "Están producidas exclusivamente por virus" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la mayoría de las infecciones retrofaríngeas y del suelo de la boca se originan a partir de infecciones periodontales, cirugías u otras infecciones de la cavidad oral, y son de etiología polimicrobiana con participación importante de bacterias anaerobias; la angina de Ludwig (celulitis del espacio submaxilar y sublingual) tiene pronóstico grave por el riesgo de bloqueo de las vías respiratorias.",
    "b": "Se originan a partir de infecciones periodontales o de la cavidad oral, no a partir de infecciones urinarias, que no tienen relación anatómica con esta región.",
    "c": "Es justo lo contrario: la angina de Ludwig es especialmente peligrosa precisamente porque puede llegar a bloquear las vías respiratorias, con riesgo de asfixia.",
    "d": "No son monomicrobianas por Neisseria gonorrhoeae; son infecciones polimicrobianas originadas en la flora de la cavidad oral, con importante participación de anaerobios.",
    "e": "Son de origen fundamentalmente bacteriano (flora polimicrobiana de la cavidad oral, con participación de anaerobios), no vírico."
  },
  "repetida": false
},

{
  "id": "t11-008",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuál es el mecanismo habitual de producción de los abscesos pulmonares?",
  "opciones": { "a": "La aspiración de secreciones bucofaríngeas por pérdida de consciencia, producida por flora mixta de la orofaringe, o secundarios a una neumonía por aspiración", "b": "Están producidos exclusivamente por virus", "c": "Solo pueden producirse en pacientes completamente sanos sin ningún factor predisponente", "d": "Nunca pueden asociarse a neumonía", "e": "Están producidos exclusivamente por parásitos intestinales" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los abscesos pulmonares suelen deberse a la aspiración de secreciones bucofaríngeas por pérdida de consciencia, producidos por la flora mixta de la orofaringe, y también pueden estar producidos por una neumonía por aspiración (por ejemplo, por Klebsiella pneumoniae).",
    "b": "Los abscesos pulmonares están producidos fundamentalmente por bacterias (flora mixta orofaríngea), no por virus, que no producen abscesos según los apuntes de la asignatura.",
    "c": "Se relacionan típicamente con la pérdida de consciencia (que favorece la aspiración de contenido orofaríngeo), un factor predisponente relevante, no con la ausencia de todo factor de riesgo.",
    "d": "Sí pueden asociarse a neumonía por aspiración, siendo esta una de las causas descritas de absceso pulmonar.",
    "e": "No están producidos por parásitos intestinales; su origen es fundamentalmente bacteriano, por aspiración de flora orofaríngea mixta."
  },
  "repetida": false
},

{
  "id": "t11-009",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿A través de qué vía se originan típicamente los abscesos hepáticos y pancreáticos, según los apuntes de la asignatura?",
  "opciones": { "a": "Exclusivamente por vía respiratoria", "b": "Exclusivamente por vía sexual", "c": "Nunca son polimicrobianos", "d": "Exclusivamente por picadura de mosquito", "e": "A través de la vía biliar, a partir de cálculos biliares con bacterias procedentes del intestino, dando lugar a abscesos polimicrobianos" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "La vía respiratoria no es el mecanismo habitual de producción de los abscesos hepáticos/pancreáticos, que se originan a través de la vía biliar.",
    "b": "La vía sexual no está relacionada con el origen de estos abscesos, que se produce a través de la vía biliar.",
    "c": "Estos abscesos SÍ son característicamente polimicrobianos, con bacterias procedentes de la flora intestinal que alcanzan la vía biliar.",
    "d": "La picadura de mosquito no es el mecanismo de producción de los abscesos hepáticos/pancreáticos descritos en los apuntes.",
    "e": "Correcto: los abscesos hepáticos y pancreáticos son polimicrobianos y suelen originarse a través de la vía biliar, a partir de cálculos biliares con bacterias procedentes del intestino, produciendo un cuadro clínico con dolor típicamente en el lado derecho."
  },
  "repetida": false
},

{
  "id": "t11-010",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Qué muestra debe obtenerse siempre, además de la muestra local del foco de infección, ante la sospecha de una infección piógena/necrotizante grave (peritonitis, absceso profundo)?",
  "opciones": { "a": "Únicamente un exudado faríngeo", "b": "Nunca es necesario obtener ninguna muestra adicional", "c": "Únicamente una muestra de LCR", "d": "Únicamente una muestra de orina", "e": "Hemocultivos, ya que estas infecciones pueden asociarse a bacteriemia" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El exudado faríngeo no tiene relación con el diagnóstico de estas infecciones abdominales/necrotizantes profundas.",
    "b": "Sí es necesario obtener muestras adicionales, especialmente hemocultivos, dado el riesgo de bacteriemia asociada a este tipo de infecciones graves.",
    "c": "El LCR se estudia específicamente ante sospecha de afectación meníngea, no de forma sistemática en toda infección piógena/necrotizante abdominal.",
    "d": "La orina no es la muestra clave en este contexto; la muestra local del foco (líquido peritoneal, aspirado del absceso) junto con hemocultivos son las recomendadas.",
    "e": "Correcto: en todos los casos de sospecha de infección piógena/necrotizante grave (peritonitis, abscesos), deben realizarse también hemocultivos, ya que estas infecciones pueden asociarse a bacteriemia, lo que aporta información adicional sobre el agente causal y su gravedad."
  },
  "repetida": false
},

{
  "id": "t11-011",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Qué morfología característica presenta Fusobacterium spp. en la tinción de Gram, un hallazgo sugestivo de infección por bacterias anaerobias?",
  "opciones": { "a": "Diplococo Gram positivo lanceolado", "b": "Bacilo Gram negativo de forma afusada (en forma de huso, con extremos afilados)", "c": "Cocobacilo Gram negativo", "d": "Espiroqueta helicoidal móvil", "e": "Coco Gram positivo en racimos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Un diplococo Gram positivo lanceolado corresponde a Streptococcus pneumoniae, no a Fusobacterium.",
    "b": "Correcto: Fusobacterium spp. presenta una morfología característica de bacilo Gram negativo de forma afusada (fusiforme, con extremos afilados en forma de huso), un hallazgo que en el examen directo de una muestra de una infección piógena/necrotizante orienta hacia la participación de bacterias anaerobias, junto a otros como Bacteroides fragilis (bacilo Gram negativo) o Clostridium (bacilo Gram positivo).",
    "c": "Un cocobacilo Gram negativo es más característico de Haemophilus influenzae, no de Fusobacterium.",
    "d": "La morfología helicoidal en espiroqueta es característica de Treponema pallidum, no de Fusobacterium.",
    "e": "Un coco Gram positivo en racimos corresponde a Staphylococcus, no a Fusobacterium, que es un bacilo Gram negativo."
  },
  "repetida": false
},

{
  "id": "t11-012",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuál de las siguientes asociaciones es CORRECTA?",
  "opciones": { "a": "Vibrio cholerae - Artritis séptica", "b": "Candida albicans - Fascitis necrotizante clásica", "c": "Treponema pallidum - Osteomielitis aguda hematógena", "d": "Staphylococcus aureus - Artritis séptica", "e": "Staphylococcus aureus - Orzuelo exclusivamente, nunca artritis ni osteomielitis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Vibrio cholerae produce el cólera, sin relación con la artritis séptica.",
    "b": "Candida albicans no es el agente clásico de la fascitis necrotizante, que se asocia clásicamente a cepas virulentas de Streptococcus pyogenes.",
    "c": "Treponema pallidum causa sífilis, no es el agente de la osteomielitis aguda hematógena, cuyo agente clásico es S. aureus.",
    "d": "Correcto: Staphylococcus aureus es el agente etiológico más frecuente de la artritis séptica hematógena, así como de la osteomielitis, la endocarditis y numerosas infecciones cutáneas piógenas.",
    "e": "S. aureus produce muchas más infecciones además del orzuelo, incluyendo osteomielitis, artritis séptica, endocarditis y celulitis; la afirmación es incompleta y engañosa al restringirlo solo al orzuelo."
  },
  "repetida": false
},

{
  "id": "t11-013",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuál de las siguientes asociaciones es INCORRECTA?",
  "opciones": { "a": "Sífilis - Treponema pallidum", "b": "Streptococcus del grupo viridans - Síndrome de la piel escaldada", "c": "Staphylococcus aureus - Endocarditis", "d": "Listeria monocytogenes - Bacilo Gram positivo", "e": "Uretritis gonocócica - Neisseria gonorrhoeae" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Es una asociación correcta: la sífilis está producida por la espiroqueta Treponema pallidum.",
    "b": "Correcto, esta es la asociación INCORRECTA: el síndrome de la piel escaldada está producido por cepas de Staphylococcus aureus (por su toxina exfoliatina), no por los estreptococos del grupo viridans, que se asocian sobre todo a endocarditis de origen dental.",
    "c": "Es una asociación correcta: Staphylococcus aureus es un agente clásico de la endocarditis, tanto de válvula natural (procedente de infecciones cutáneas) como protésica.",
    "d": "Es una asociación correcta: Listeria monocytogenes es efectivamente un bacilo Gram positivo, causante de meningitis en grupos de riesgo (neonatos, embarazadas, inmunodeprimidos, ancianos).",
    "e": "Es una asociación correcta: la uretritis gonocócica está causada específicamente por Neisseria gonorrhoeae."
  },
  "repetida": false
},

{
  "id": "t11-014",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuál es el mejor material para el diagnóstico microbiológico de un absceso cerrado con contenido purulento?",
  "opciones": { "a": "Recoger únicamente sangre venosa periférica sin cultivar el propio absceso", "b": "Frotar la piel intacta que rodea el absceso sin abrirlo", "c": "Recoger únicamente una muestra de orina", "d": "Nunca se debe recoger ninguna muestra del absceso", "e": "Aspirar el pus con jeringa e introducirlo en un vial de transporte para anaerobios" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Aunque también se recomienda obtener hemocultivos como muestra complementaria, es fundamental cultivar directamente el contenido del propio absceso para identificar el agente causal local.",
    "b": "Frotar la piel intacta que rodea el absceso no es la técnica adecuada; se necesita el propio contenido purulento obtenido por aspiración directa.",
    "c": "La orina no es la muestra representativa del contenido de un absceso; se necesita el material purulento obtenido directamente de la lesión.",
    "d": "Sí se debe recoger una muestra del absceso, mediante aspiración con jeringa, precisamente para orientar el diagnóstico microbiológico y el tratamiento dirigido.",
    "e": "Correcto: para el diagnóstico de un absceso cerrado se debe aspirar el pus con jeringa, a través de una zona de piel sana, e introducir el contenido en un vial de transporte adecuado para anaerobios, dada la frecuente participación de estos microorganismos en este tipo de infecciones."
  },
  "repetida": false
},

{
  "id": "t11-015",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Qué microorganismo se debe sospechar en una artritis séptica en la que el cultivo solo crece en agar chocolate y no en agar sangre?",
  "opciones": { "a": "Clostridium perfringens", "b": "Candida albicans", "c": "Escherichia coli", "d": "Staphylococcus aureus", "e": "Neisseria gonorrhoeae" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Clostridium perfringens es un anaerobio estricto que requiere condiciones de anaerobiosis, no el patrón descrito de crecimiento en agar chocolate pero no en sangre.",
    "b": "Candida albicans se cultiva en agar Sabouraud, no presenta el patrón de crecimiento diferencial entre agar sangre y chocolate descrito para Neisseria.",
    "c": "Escherichia coli es una enterobacteria que crece tanto en agar sangre como en agar McConkey, no está limitada al agar chocolate.",
    "d": "Staphylococcus aureus crece perfectamente en agar sangre, por lo que no encaja con la descripción de un microorganismo que solo crece en agar chocolate.",
    "e": "Correcto: Neisseria gonorrhoeae, que puede producir artritis séptica en el contexto de una infección gonocócica diseminada, crece únicamente en agar chocolate (ACH), no en agar sangre (AS), un patrón de crecimiento característico y útil en el diagnóstico."
  },
  "repetida": false
},

{
  "id": "t11-016",
  "tema": "Infecciones piógenas, necrotizantes y osteoarticulares",
  "pregunta": "¿Cuáles son los medios de cultivo recomendados de forma escalonada para el diagnóstico microbiológico de infecciones piógenas/necrotizantes polimicrobianas, según los apuntes de la asignatura?",
  "opciones": { "a": "Únicamente caldo de selenito", "b": "Únicamente agar Sabouraud", "c": "Únicamente medio de Thayer-Martin", "d": "En primer lugar, agar sangre para anaerobios; en segundo lugar, agar sangre, CNA, agar McConkey y agar chocolate; y en tercer lugar, un medio líquido de enriquecimiento (BHI)", "e": "Únicamente medio Löwenstein-Jensen" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El caldo de selenito es un medio de enriquecimiento específico para Salmonella en heces, no el conjunto de medios recomendado para las infecciones piógenas/necrotizantes en general.",
    "b": "El agar Sabouraud es un medio específico para hongos, no el conjunto completo de medios recomendados para el estudio general de estas infecciones polimicrobianas.",
    "c": "El medio de Thayer-Martin es específico para Neisseria gonorrhoeae, no el conjunto de medios recomendado de forma general para estas infecciones.",
    "d": "Correcto: dada la frecuencia de flora polimicrobiana y la posibilidad de microorganismos fastidiosos en este tipo de muestras, se recomienda sembrar en primer lugar agar sangre para anaerobios, en segundo lugar agar sangre, CNA (selectivo para Gram positivos), agar McConkey (selectivo para enterobacterias) y agar chocolate (para Neisseria y Haemophilus), y en tercer lugar un medio líquido de enriquecimiento como el BHI, especialmente útil para potenciar el crecimiento de Staphylococcus aureus.",
    "e": "El medio Löwenstein-Jensen es específico para micobacterias, no el conjunto de medios recomendado para estas infecciones piógenas/necrotizantes."
  },
  "repetida": false
},

{
  "id": "t12-001",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "Respecto a la conjuntivitis, indique la afirmación correcta",
  "opciones": { "a": "La conjuntivitis nunca cursa con enrojecimiento ocular", "b": "La etiología bacteriana es siempre la más frecuente en todos los casos", "c": "La conjuntivitis solo puede afectar a recién nacidos", "d": "Las conjuntivitis bacterianas producen pus, la etiología vírica es la más frecuente en general, y es frecuente el enrojecimiento del ojo", "e": "Los hisopos conjuntivales no deben sembrarse nunca en ningún medio de cultivo" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El enrojecimiento ocular (congestión superficial, 'ojo rojo') es precisamente uno de los hallazgos más característicos y frecuentes de la conjuntivitis.",
    "b": "Según los apuntes de la asignatura, la etiología VÍRICA es la más frecuente en general, no la bacteriana.",
    "c": "La conjuntivitis puede afectar a personas de cualquier edad, no está restringida a los recién nacidos, aunque exista una forma específica neonatal (oftalmia neonatal) asociada a determinados agentes.",
    "d": "Correcto: las conjuntivitis bacterianas producen un exudado espeso, pegajoso y purulento (pus), mientras que la etiología vírica es la más común en general; el enrojecimiento ocular (ojo rojo) por congestión superficial es un hallazgo frecuente en la conjuntivitis, independientemente de su etiología.",
    "e": "Los hisopos conjuntivales sí deben sembrarse en medios de cultivo (agar sangre y agar chocolate) cuando está indicado el estudio microbiológico, por ejemplo en casos que se complican."
  },
  "repetida": false
},

{
  "id": "t12-002",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Qué agente etiológico de conjuntivitis se transmite a través del parto y puede producir una oftalmia neonatal grave?",
  "opciones": { "a": "Neisseria gonorrhoeae", "b": "Rinovirus", "c": "Clostridium perfringens", "d": "Propionibacterium acnes", "e": "Malassezia furfur" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: Neisseria gonorrhoeae puede transmitirse al neonato a través del canal del parto si la madre está infectada, produciendo una oftalmia neonatal grave que requiere tratamiento precoz para evitar complicaciones oculares importantes.",
    "b": "El rinovirus produce el catarro común, sin relación con la oftalmia neonatal por transmisión vertical durante el parto.",
    "c": "Clostridium perfringens se asocia a la gangrena gaseosa, sin relación con la conjuntivitis neonatal.",
    "d": "Propionibacterium acnes es el agente del acné, sin relación con la oftalmia neonatal.",
    "e": "Malassezia furfur es el agente de la pitiriasis versicolor, sin relación con la oftalmia neonatal."
  },
  "repetida": false
},

{
  "id": "t12-003",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Por qué no se puede realizar un cultivo convencional de Chlamydia trachomatis, agente causal del tracoma y de una forma de conjuntivitis?",
  "opciones": { "a": "Porque es un patógeno intracelular obligado, que no puede crecer en medios de cultivo bacterianos artificiales; su diagnóstico se basa en la PCR", "b": "Porque crece perfectamente en agar sangre en 24 horas", "c": "Porque es un hongo dimórfico", "d": "Porque es un virus que no tiene ningún tipo de estructura", "e": "Porque no existe ninguna técnica capaz de diagnosticarlo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: Chlamydia trachomatis es un patógeno intracelular obligado, incapaz de crecer en medios de cultivo bacterianos artificiales sin la maquinaria metabólica de una célula huésped; por ello su diagnóstico se basa fundamentalmente en la PCR.",
    "b": "Chlamydia trachomatis, precisamente por ser intracelular obligada, NO crece en agar sangre ni en ningún medio de cultivo bacteriano convencional.",
    "c": "Chlamydia trachomatis es una bacteria intracelular obligada, no un hongo dimórfico.",
    "d": "Chlamydia trachomatis es una bacteria (aunque con un ciclo de vida intracelular particular), no un virus.",
    "e": "Sí existe una técnica capaz de diagnosticarla de forma fiable: la PCR, precisamente porque el cultivo convencional no es viable para este microorganismo."
  },
  "repetida": false
},

{
  "id": "t12-004",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Cuál es la etiología vírica más grave de la queratitis (infección de la córnea)?",
  "opciones": { "a": "El virus del sarampión", "b": "El virus de la rubeola", "c": "El rinovirus", "d": "La queratitis herpética, causada por el virus del herpes simple", "e": "El virus de la hepatitis A" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El virus del sarampión produce un cuadro exantemático sistémico, no es el agente vírico principal descrito para la queratitis.",
    "b": "El virus de la rubeola produce un cuadro exantemático sistémico, no es el agente vírico principal de la queratitis.",
    "c": "El rinovirus produce el catarro común, no está descrito como una causa importante de queratitis.",
    "d": "Correcto: la queratitis herpética, causada por el virus del herpes simple, es la etiología vírica más común y también la más grave de la queratitis, pudiendo dejar cicatrices en la córnea que comprometan la visión.",
    "e": "El virus de la hepatitis A produce hepatitis, sin relación con la queratitis."
  },
  "repetida": false
},

{
  "id": "t12-005",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Qué microorganismos son los más frecuentemente implicados en la queratitis bacteriana asociada al uso de lentes de contacto con mala higiene?",
  "opciones": { "a": "Vibrio cholerae", "b": "Bordetella pertussis", "c": "Staphylococcus aureus y Pseudomonas aeruginosa", "d": "Treponema pallidum", "e": "Mycobacterium tuberculosis" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Vibrio cholerae causa el cólera por vía digestiva, sin relación con la queratitis.",
    "b": "Bordetella pertussis produce tosferina, sin relación con la queratitis.",
    "c": "Correcto: la queratitis bacteriana asociada al uso de lentes de contacto con mala higiene está producida fundamentalmente por Staphylococcus aureus y Pseudomonas aeruginosa.",
    "d": "Treponema pallidum causa sífilis, sin relación con la queratitis asociada al uso de lentillas.",
    "e": "Mycobacterium tuberculosis produce tuberculosis, sin ser un agente característico de la queratitis por lentes de contacto."
  },
  "repetida": false
},

{
  "id": "t12-006",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Cuál es la principal causa de la endoftalmitis (infección del humor vítreo), una entidad rara pero grave?",
  "opciones": { "a": "El contacto sexual", "b": "La picadura de un mosquito", "c": "La cirugía ocular, especialmente la de cataratas", "d": "La vacunación reciente frente a la gripe", "e": "El consumo de agua contaminada" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El contacto sexual no es un mecanismo de transmisión relevante para la endoftalmitis.",
    "b": "La picadura de mosquito no es la causa principal descrita de la endoftalmitis en los apuntes de la asignatura.",
    "c": "Correcto: la principal causa de la endoftalmitis es la cirugía ocular, especialmente la cirugía de cataratas, aunque también pueden estar implicados traumatismos penetrantes que faciliten el paso de microorganismos; entre los agentes causales se incluyen estafilococos coagulasa negativos, S. aureus, Bacillus spp., Candida albicans y Aspergillus (este último especialmente en inmunodeprimidos).",
    "d": "La vacunación frente a la gripe no está relacionada con el desarrollo de una endoftalmitis.",
    "e": "El consumo de agua contaminada no está relacionado con la endoftalmitis, que se asocia fundamentalmente a procedimientos quirúrgicos oculares o traumatismos."
  },
  "repetida": false
},

{
  "id": "t12-007",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Cuáles son los tres agentes clásicos descritos en los apuntes de la asignatura como causa de uveítis infecciosa?",
  "opciones": { "a": "El virus del herpes simple, Toxoplasma gondii y el virus varicela-zóster", "b": "Mycobacterium tuberculosis, Brucella y Treponema pallidum exclusivamente", "c": "Vibrio cholerae, Shigella y Yersinia", "d": "Bordetella pertussis, Corynebacterium diphtheriae y Legionella pneumophila", "e": "Neisseria gonorrhoeae, Chlamydia trachomatis y Candida albicans exclusivamente" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: los apuntes de la asignatura destacan como los agentes más frecuentes de la uveítis infecciosa al virus del herpes simple, Toxoplasma gondii y el virus varicela-zóster.",
    "b": "Aunque algunos de estos microorganismos pueden ocasionalmente afectar al ojo en contextos concretos, no son el trío descrito como agentes clásicos de uveítis en los apuntes de la asignatura.",
    "c": "Estos son agentes gastrointestinales entéricos, sin relación con la uveítis infecciosa descrita en los apuntes.",
    "d": "Estos son agentes de infecciones respiratorias, sin relación con la uveítis infecciosa descrita en los apuntes.",
    "e": "Estos son agentes de ITS o de infecciones oculares distintas (conjuntivitis, endoftalmitis), no el trío clásico descrito específicamente para la uveítis infecciosa."
  },
  "repetida": false
},

{
  "id": "t12-008",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Cuál es el agente etiológico más característico de la otitis externa (otitis del nadador), asociado a la producción de un pigmento llamado pioverdina?",
  "opciones": { "a": "Treponema pallidum", "b": "Streptococcus pneumoniae", "c": "Vibrio cholerae", "d": "Pseudomonas aeruginosa", "e": "Mycobacterium tuberculosis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Treponema pallidum causa sífilis, sin relación con la otitis externa.",
    "b": "Streptococcus pneumoniae se asocia sobre todo a la otitis MEDIA, no a la otitis externa, cuyo agente clásico es Pseudomonas aeruginosa.",
    "c": "Vibrio cholerae causa el cólera por vía digestiva, sin relación con la otitis externa.",
    "d": "Correcto: Pseudomonas aeruginosa es un agente clásico de la otitis externa (u otitis del nadador), asociado a la producción de un pigmento característico llamado pioverdina; también pueden implicarse Staphylococcus aureus y hongos como Candida.",
    "e": "Mycobacterium tuberculosis produce tuberculosis, sin ser el agente característico de la otitis externa."
  },
  "repetida": false
},

{
  "id": "t12-009",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Cuáles son las principales diferencias entre la otitis media aguda y la otitis externa en cuanto a su etiología?",
  "opciones": { "a": "La otitis media aguda solo puede estar producida por Pseudomonas aeruginosa", "b": "Ninguna de las dos puede estar producida por bacterias", "c": "La otitis media aguda está producida fundamentalmente por S. pneumoniae, H. influenzae y M. catarrhalis, mientras que la otitis externa está producida sobre todo por Pseudomonas aeruginosa, S. aureus y hongos como Candida", "d": "Ambas tienen exactamente la misma etiología en todos los casos", "e": "La otitis externa solo puede estar producida por virus" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La otitis media aguda está producida fundamentalmente por S. pneumoniae, H. influenzae y M. catarrhalis; Pseudomonas aeruginosa no es su agente característico, sino el de la otitis externa.",
    "b": "Ambas entidades sí pueden estar producidas por bacterias, siendo estas precisamente los agentes etiológicos más frecuentes en ambos casos.",
    "c": "Correcto: la otitis media aguda, que afecta al oído medio a través del tubo de Eustaquio, está producida fundamentalmente por S. pneumoniae, H. influenzae y M. catarrhalis, mientras que la otitis externa, que afecta al conducto auditivo externo, está producida sobre todo por Pseudomonas aeruginosa, Staphylococcus aureus y hongos como Candida.",
    "d": "Son entidades anatómicamente distintas (oído medio frente a conducto auditivo externo) con perfiles etiológicos diferentes.",
    "e": "La otitis externa está producida fundamentalmente por bacterias (Pseudomonas, S. aureus) y hongos, no exclusivamente por virus."
  },
  "repetida": false
},

{
  "id": "t12-010",
  "tema": "Infecciones oculares y otitis externa",
  "pregunta": "¿Cómo se toma la muestra para el estudio microbiológico de una conjuntivitis cuando este es necesario?",
  "opciones": { "a": "Nunca es posible recoger ninguna muestra en la conjuntivitis", "b": "Únicamente mediante biopsia hepática", "c": "Se recoge el exudado procedente del fondo del saco conjuntival de cada ojo con torunda, empleando medios de transporte específicos si se sospecha clamidia o virus", "d": "Únicamente mediante punción lumbar", "e": "Únicamente mediante extracción de sangre venosa" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Sí es posible y está indicado en determinados casos recoger una muestra de exudado conjuntival con torunda, especialmente cuando el cuadro se complica o no es autolimitado.",
    "b": "La biopsia hepática no tiene relación con el diagnóstico de la conjuntivitis.",
    "c": "Correcto: cuando el estudio microbiológico es necesario (el diagnóstico suele ser clínico salvo complicación), se recoge el exudado del fondo del saco conjuntival de cada ojo con una torunda; para la detección de clamidias y virus, las torundas deben enviarse en medios de transporte específicos.",
    "d": "La punción lumbar se emplea para el estudio del LCR en la sospecha de meningitis, sin relación con el diagnóstico de la conjuntivitis.",
    "e": "La extracción de sangre venosa no es la muestra representativa de la conjuntivitis, que es una infección local de la conjuntiva."
  },
  "repetida": false
},

{
  "id": "t13-001",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Qué es el antígeno Australia?",
  "opciones": { "a": "Es el antígeno más importante del VIH", "b": "Es el antígeno que se detecta para el diagnóstico del herpes genital", "c": "Es el antígeno de superficie del virus de la hepatitis B (HBsAg)", "d": "Es el antígeno del core del virus de la hepatitis C", "e": "Es el antígeno del core del papilomavirus" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El VIH tiene sus propios antígenos característicos (como el antígeno p24), sin relación con el llamado antígeno Australia, que es específico del VHB.",
    "b": "El herpes genital se diagnostica mediante inmunofluorescencia directa o PCR sobre líquido vesicular, no mediante el antígeno Australia, que es propio del VHB.",
    "c": "Correcto: el antígeno Australia es el nombre histórico con el que se conoce al antígeno de superficie del virus de la hepatitis B (HBsAg); su detección es el primer marcador que aparece tras la infección y define la infección por el VHB.",
    "d": "El antígeno Australia corresponde al VHB (antígeno de superficie), no al virus de la hepatitis C.",
    "e": "El antígeno Australia es del virus de la hepatitis B, no del papilomavirus."
  },
  "repetida": false
},

{
  "id": "t13-002",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cuál es la vía de transmisión característica del virus de la hepatitis A (VHA)?",
  "opciones": { "a": "Exclusivamente por vía sexual sin ningún otro mecanismo posible", "b": "Exclusivamente parenteral", "c": "Exclusivamente por vía respiratoria", "d": "Exclusivamente por vía transplacentaria", "e": "Feco-oral, a través de alimentos o agua contaminados, o de persona a persona" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Aunque en países donde la transmisión por agua es infrecuente pueden darse brotes entre hombres que tienen sexo con hombres (HSH), la vía característica y principal del VHA es la feco-oral, no exclusivamente la sexual.",
    "b": "La vía parenteral es característica de las hepatitis B, C y D, no la vía principal de transmisión del VHA, que es feco-oral.",
    "c": "La vía respiratoria no es el mecanismo de transmisión del VHA, que se transmite por vía feco-oral.",
    "d": "La transmisión transplacentaria no es la vía característica del VHA, que se transmite por vía feco-oral.",
    "e": "Correcto: el VHA se transmite fundamentalmente por vía feco-oral, a través de alimentos o agua contaminados, y también de persona a persona; el virus se encuentra en las heces durante el periodo de incubación (3-4 semanas), manteniéndose hasta dos semanas después del inicio de la clínica."
  },
  "repetida": true
},

{
  "id": "t13-003",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cómo se realiza el diagnóstico de la hepatitis A aguda?",
  "opciones": { "a": "Mediante la prueba de la coagulasa", "b": "Mediante hemocultivo convencional", "c": "Mediante coprocultivo bacteriano convencional", "d": "Mediante la demostración de anticuerpos IgM frente al VHA en el suero del paciente, indicativos de infección activa/aguda, o mediante RT-PCR para detectar el ARN viral", "e": "Mediante la detección de HBsAg en suero" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La prueba de la coagulasa se emplea para identificar Staphylococcus aureus, sin relación con el diagnóstico de la hepatitis A.",
    "b": "El VHA no se diagnostica mediante hemocultivo, que es una técnica para detectar bacterias en sangre; el VHA es un virus y se diagnostica mediante serología o técnicas moleculares.",
    "c": "El coprocultivo bacteriano convencional no detecta virus; el VHA se diagnostica mediante serología (IgM anti-VHA) o RT-PCR, no mediante cultivo bacteriano de heces.",
    "d": "Correcto: el diagnóstico de la hepatitis A aguda se basa en la demostración de anticuerpos IgM frente al VHA en el suero del paciente, indicativos de infección activa; otra técnica empleada es la RT-PCR, que detecta el ARN del VHA.",
    "e": "El HBsAg es el antígeno de superficie del virus de la hepatitis B, no del virus de la hepatitis A."
  },
  "repetida": false
},

{
  "id": "t13-005",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cuál es el primer marcador serológico que aparece tras la infección por el virus de la hepatitis B (VHB), detectable incluso en el periodo de incubación?",
  "opciones": { "a": "El anti-HBc de tipo IgG", "b": "El anti-HBe", "c": "El HBeAg", "d": "El HBsAg (antígeno de superficie o antígeno Australia)", "e": "El anti-HBs" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El anti-HBc de tipo IgG refleja una infección pasada o crónica, apareciendo más tarde que el HBsAg, no es el primer marcador de la infección.",
    "b": "El anti-HBe aparece de forma más tardía, indicando un descenso o cese de la replicación viral, no es el marcador inicial de la infección.",
    "c": "El HBeAg refleja replicación viral activa, pero no es el primer marcador que aparece; su detección es posterior a la del HBsAg.",
    "d": "Correcto: el HBsAg es el primer marcador serológico que aparece tras la infección por el VHB, detectable incluso durante el periodo de incubación; si la evolución es favorable desaparece progresivamente, mientras que su persistencia más allá de 6 meses sugiere cronificación.",
    "e": "El anti-HBs se detecta más tardíamente, tras la desaparición del HBsAg y la normalización de las transaminasas; es un marcador de recuperación y de protección frente a la reinfección, no el primero en aparecer."
  },
  "repetida": false
},

{
  "id": "t13-006",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Qué significa la detección del HBeAg en un paciente con hepatitis B?",
  "opciones": { "a": "Nunca aporta información sobre el estado de replicación viral", "b": "Indica inmunidad protectora completa frente a la reinfección", "c": "Indica replicación viral activa, y la sangre de estos pacientes debe considerarse de alto nivel de infectividad", "d": "Indica que el paciente está vacunado", "e": "Indica que el paciente ha superado definitivamente la infección sin ningún riesgo de recaída" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El HBeAg es precisamente el marcador de elección para valorar la tasa de replicación viral en la hepatitis B.",
    "b": "El HBeAg no confiere ninguna protección; el único marcador con capacidad neutralizante y protectora frente a la reinfección es el anti-HBs.",
    "c": "Correcto: la detección de HBeAg indica replicación viral activa; la sangre de los pacientes positivos para HBeAg debe considerarse de alto nivel de infectividad, ya que refleja que el virus se está replicando de manera muy activa en el hígado.",
    "d": "El HBeAg es un marcador de replicación viral activa en un paciente infectado, no un marcador de vacunación (los individuos vacunados solo presentan anti-HBs).",
    "e": "El HBeAg indica lo contrario, que hay replicación activa del virus, no que la infección se haya superado; su negativización (espontánea o tras tratamiento) sí indicaría un descenso de la replicación."
  },
  "repetida": true
},

{
  "id": "t13-007",
  "tema": "Hepatitis infecciosa",
  "pregunta": "En el suero de un varón de 35 años se detecta IgG anti-HBs, sin ningún otro anticuerpo ni antígeno relacionado con el VHB. ¿Qué se puede concluir?",
  "opciones": { "a": "Que es VIH positivo", "b": "Que tiene hepatitis B aguda", "c": "Que está vacunado frente a la hepatitis B, ya que en los individuos vacunados el anti-HBs es el único marcador presente", "d": "Que ha pasado la hepatitis B y ahora está bien", "e": "Que tiene hepatitis B crónica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El anti-HBs no tiene ninguna relación con el diagnóstico de la infección por VIH, que requiere pruebas serológicas específicas frente a este virus.",
    "b": "En la hepatitis B aguda estaría presente el HBsAg y/o la IgM anti-HBc, marcadores que no se mencionan en el enunciado, que describe únicamente anti-HBs aislado.",
    "c": "Correcto: cuando el único marcador presente es el anti-HBs (sin anti-HBc, que sí aparecería en caso de infección natural pasada), la interpretación es que el individuo está vacunado frente a la hepatitis B, ya que en las personas vacunadas el anti-HBs es el único marcador que se genera.",
    "d": "Si hubiera pasado la infección de forma natural, se esperaría encontrar también anti-HBc (IgG), marcador que persiste tras la infección natural resuelta; su ausencia, junto con la presencia aislada de anti-HBs, orienta más bien a vacunación que a infección natural pasada.",
    "e": "En la hepatitis B crónica estaría presente el HBsAg de forma persistente, no simplemente un anti-HBs aislado sin otros marcadores."
  },
  "repetida": true
},

{
  "id": "t13-008",
  "tema": "Hepatitis infecciosa",
  "pregunta": "Si en el suero de una embarazada se detectan IgG anti-HBs e IgG anti-HBc, sin detectar antígenos relacionados con el VHB, ¿qué se puede deducir?",
  "opciones": { "a": "Que está vacunada frente al VHB", "b": "Que es vulnerable a la infección por el VHB", "c": "Que es inmune al VHB por haber pasado una infección natural en el pasado", "d": "Que tiene hepatitis B aguda", "e": "Que tiene hepatitis B crónica activa" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Los individuos vacunados solo presentan anti-HBs, SIN anti-HBc (ya que la vacuna no contiene el antígeno del core); la presencia de anti-HBc indica que hubo contacto con el virus completo, es decir, infección natural, no vacunación.",
    "b": "La presencia de anti-HBs (protector) descarta que la paciente sea vulnerable a la infección; al contrario, indica que está protegida frente a la reinfección.",
    "c": "Correcto: la presencia conjunta de IgG anti-HBs (neutralizante, protector) y de IgG anti-HBc (que indica contacto previo con el virus completo, no solo con la vacuna) sin antígenos activos es el patrón característico de la inmunidad adquirida por infección natural pasada y resuelta.",
    "d": "La hepatitis B aguda se caracterizaría por la presencia de HBsAg y de IgM anti-HBc, marcadores no presentes en este caso.",
    "e": "La hepatitis B crónica se caracterizaría por la persistencia del HBsAg, marcador que no está presente en este caso."
  },
  "repetida": false
},

{
  "id": "t13-009",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Qué diferencia hay entre el anti-HBc de tipo IgM y el de tipo IgG en la infección por el VHB?",
  "opciones": { "a": "La IgG anti-HBc es el primer marcador que aparece tras la infección aguda", "b": "La IgG anti-HBc siempre confiere protección completa frente a la reinfección", "c": "Ambos indican exactamente lo mismo, sin ninguna diferencia clínica", "d": "La IgM anti-HBc aparece solo en individuos vacunados", "e": "La IgM anti-HBc es el primer anticuerpo que aparece tras la infección y su presencia implica infección aguda, mientras que la IgG anti-HBc refleja una infección pasada resuelta o cronicidad, sin capacidad neutralizante" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Es la IgM anti-HBc, no la IgG, la que aparece primero, siendo ya detectable con los primeros síntomas de la enfermedad aguda.",
    "b": "La IgG anti-HBc NO tiene capacidad neutralizante; el único anticuerpo con capacidad de neutralizar el virus y proteger frente a la reinfección es el anti-HBs.",
    "c": "Existe una diferencia clínica relevante: la IgM orienta a infección aguda reciente, mientras que la IgG orienta a infección pasada o crónica.",
    "d": "La IgM anti-HBc aparece en el contexto de una infección natural AGUDA, no en individuos vacunados, que únicamente desarrollan anti-HBs.",
    "e": "Correcto: la IgM anti-HBc es el primer anticuerpo en aparecer tras la infección, siendo detectable ya con los primeros síntomas de la enfermedad aguda, e implica infección aguda; la IgG anti-HBc, en cambio, puede reflejar una infección pasada y resuelta o bien una cronicidad, dada su larga persistencia en el suero, pero carece de capacidad neutralizante (no protege frente a la reinfección)."
  },
  "repetida": false
},

{
  "id": "t13-010",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cuál es el marcador que se detecta en el suero de los individuos vacunados frente a la hepatitis B?",
  "opciones": { "a": "La IgM anti-HBc", "b": "El ADN-VHB", "c": "El HBcAg", "d": "El anti-HBs", "e": "El HBeAg" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La IgM anti-HBc solo aparece en el contexto de una infección natural aguda, no tras la vacunación.",
    "b": "El ADN-VHB refleja la replicación activa del virus en un paciente infectado, no aparece en individuos vacunados, que no están infectados.",
    "c": "El HBcAg no se detecta en suero (no forma parte del virión libre), y en cualquier caso no está relacionado con el estado de vacunación.",
    "d": "Correcto: en los individuos vacunados frente a la hepatitis B el único marcador presente es el anti-HBs, un anticuerpo neutralizante que confiere protección frente a la infección; la vacuna no contiene el antígeno del core, por lo que no se genera anti-HBc.",
    "e": "El HBeAg es un marcador de replicación viral activa en pacientes infectados, no un marcador de vacunación."
  },
  "repetida": true
},

{
  "id": "t13-011",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cuál es el virus de la hepatitis que, a diferencia del resto, presenta un genoma de ADN bicatenario?",
  "opciones": { "a": "El virus de la hepatitis E", "b": "El virus de la hepatitis A", "c": "Ninguno de los virus de la hepatitis tiene ADN", "d": "El virus de la hepatitis B", "e": "El virus de la hepatitis C" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El virus de la hepatitis E tiene genoma de ARN, no de ADN bicatenario.",
    "b": "El virus de la hepatitis A pertenece a la familia Picornaviridae, con genoma de ARN, no de ADN bicatenario.",
    "c": "El VHB sí es un virus ADN (bicatenario), a diferencia del resto de virus hepatotropos estudiados en la asignatura, que son virus ARN.",
    "d": "Correcto: el virus de la hepatitis B (un hepadnavirus) es el único entre los virus de la hepatitis que presenta un genoma de ADN bicatenario, a diferencia del resto, que tienen genoma de ARN.",
    "e": "El virus de la hepatitis C es un Flavivirus, con genoma de ARN, no de ADN bicatenario."
  },
  "repetida": false
},

{
  "id": "t13-012",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cuál es la principal vía de transmisión del virus de la hepatitis C (VHC), y qué particularidad tiene su vacunación?",
  "opciones": { "a": "Se transmite exclusivamente por vía respiratoria", "b": "Se transmite fundamentalmente por vía parenteral, y actualmente no existe vacuna disponible debido a su gran variabilidad antigénica", "c": "Nunca puede evolucionar a la cronicidad", "d": "Nunca puede producir cirrosis ni hepatocarcinoma", "e": "Se transmite exclusivamente por vía fecal-oral, y existe una vacuna eficaz y ampliamente disponible" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La vía respiratoria no es el mecanismo de transmisión del VHC, que se transmite fundamentalmente por vía parenteral.",
    "b": "Correcto: el VHC se transmite fundamentalmente por vía parenteral (también vertical y sexual, aunque con menor frecuencia), y no existe vacuna disponible debido a la gran variabilidad antigénica del virus, lo que dificulta el desarrollo de una inmunización eficaz.",
    "c": "Es al contrario: el VHC tiene una alta tasa de cronificación (55-85% de los infectados sin tratamiento desarrollan infección crónica), mayor que la de la hepatitis B.",
    "d": "El VHC es precisamente la causa principal, hasta hace poco, de cirrosis hepática, cáncer de hígado y trasplante hepático en España, debido a su alta tasa de cronificación.",
    "e": "La vía fecal-oral es característica de la hepatitis A, no de la hepatitis C, que se transmite fundamentalmente por vía parenteral; además, no existe vacuna frente al VHC."
  },
  "repetida": false
},

{
  "id": "t13-013",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Qué particularidad tiene el virus de la hepatitis D (VHD) respecto a su capacidad de infectar al hepatocito?",
  "opciones": { "a": "Puede infectar de forma completamente autónoma, sin necesitar a ningún otro virus", "b": "Se transmite exclusivamente por vía fecal-oral", "c": "Es el único virus de la hepatitis que dispone de vacuna propia específica distinta de la del VHB", "d": "Nunca se asocia a cuadros de hepatitis fulminante", "e": "Es un virus defectuoso que solo puede infectar a los hepatocitos cuando está presente el virus de la hepatitis B, que le proporciona la envuelta (antígeno de superficie)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El VHD NO puede infectar de forma autónoma; necesita obligatoriamente la presencia del VHB, que le proporciona la envuelta viral necesaria.",
    "b": "El VHD se transmite por las mismas vías que el VHB (sangre, sexual, perinatal), restringiéndose casi exclusivamente a adictos a drogas por vía parenteral, no por vía fecal-oral.",
    "c": "No existe una vacuna propia y específica frente al VHD; al depender completamente del VHB para infectar, la vacunación frente al VHB previene indirectamente también la infección por VHD.",
    "d": "Es justo lo contrario: la coinfección y la sobreinfección por VHD se asocian frecuentemente a cuadros de hepatitis aguda fulminante, de especial gravedad.",
    "e": "Correcto: el VHD es un virus defectuoso que solo puede infectar los hepatocitos cuando está presente el VHB, que le proporciona la envuelta (el antígeno de superficie); esto puede ocurrir como coinfección (infección simultánea de VHB y VHD en un hígado sano) o como sobreinfección (infección por VHD en un paciente con hepatitis B crónica activa), asociándose ambas situaciones frecuentemente a cuadros de hepatitis aguda fulminante."
  },
  "repetida": false
},

{
  "id": "t13-014",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿En qué grupo de pacientes puede ser especialmente grave la infección por el virus de la hepatitis E (VHE)?",
  "opciones": { "a": "Solo en varones mayores de 90 años", "b": "En mujeres embarazadas, en las que puede producir un cuadro fulminante", "c": "Nunca es grave en ningún grupo de pacientes", "d": "Solo en pacientes vacunados frente a la hepatitis B", "e": "En niños menores de 2 años exclusivamente" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "No hay ninguna referencia a una gravedad especial restringida a varones mayores de 90 años en los apuntes de la asignatura.",
    "b": "Correcto: la infección por el VHE, transmitida por vía feco-oral, es frecuentemente asintomática, pero puede ser especialmente grave y fulminante en mujeres embarazadas; en inmunodeprimidos, además, puede evolucionar a la cronicidad.",
    "c": "Sí puede ser grave, especialmente en el contexto del embarazo, donde puede producir un cuadro fulminante.",
    "d": "La gravedad de la infección por VHE en el embarazo no tiene relación con el estado de vacunación frente a la hepatitis B, que es un virus completamente distinto.",
    "e": "No se describe una especial gravedad restringida a niños menores de 2 años; el grupo de riesgo destacado en los apuntes son las embarazadas."
  },
  "repetida": false
},

{
  "id": "t13-015",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cuáles de los virus de la hepatitis disponen actualmente de vacuna?",
  "opciones": { "a": "Solo el VHC dispone de vacuna", "b": "Todos los virus de la hepatitis disponen de vacuna, incluido el VHC", "c": "Ninguno de los virus de la hepatitis dispone de vacuna", "d": "Solo el VHE dispone de vacuna en todo el mundo de forma sistemática", "e": "El VHA, el VHB (y por extensión el VHD, al depender del VHB), pero no el VHC" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Es justo al contrario: el VHC es precisamente el que NO dispone de vacuna, mientras que sí existen vacunas para el VHA y el VHB.",
    "b": "No existe actualmente una vacuna eficaz y ampliamente disponible frente al VHC, precisamente por su elevada variabilidad antigénica.",
    "c": "Sí existen vacunas eficaces y ampliamente utilizadas frente al VHA y al VHB, contrariamente a lo que afirma esta opción.",
    "d": "No existe una vacuna sistemática y ampliamente utilizada frente al VHE en la mayoría de los países, a diferencia de las vacunas del VHA y VHB.",
    "e": "Correcto: existen vacunas frente al VHA y al VHB; al depender el VHD completamente de la presencia del VHB, la vacunación frente a este último también protege indirectamente frente al VHD; sin embargo, no existe vacuna frente al VHC debido a su gran variabilidad antigénica."
  },
  "repetida": false
},

{
  "id": "t13-016",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Qué caracteriza a la mutante 'precore' del virus de la hepatitis B?",
  "opciones": { "a": "Nunca puede producir cronicidad", "b": "Es una variante que solo puede infectar a personas vacunadas", "c": "Es un virus completamente distinto sin relación con el VHB", "d": "Es una variante del VHB que no produce HBeAg, lo que dificulta el seguimiento de la replicación viral mediante este marcador y se asocia a infecciones de duración prolongada y mayor riesgo de cirrosis", "e": "Es la forma habitual de presentación en la mayoría de los pacientes con hepatitis B aguda no complicada" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Es justo lo contrario: las infecciones por la mutante precore se asocian a un MAYOR riesgo de cronicidad y de complicaciones como la cirrosis, no a la ausencia de cronicidad.",
    "b": "La mutante precore puede infectar tanto a personas no vacunadas como, en teoría, evadir parcialmente algunas respuestas inmunes; no está restringida exclusivamente a personas vacunadas.",
    "c": "La mutante precore es una variante del propio virus de la hepatitis B, no un virus completamente distinto sin relación con él.",
    "d": "Correcto: la mutante precore es una variedad del VHB que no produce HBeAg, lo que complica el uso de este marcador clásico para el seguimiento de la replicación viral (a pesar de las transaminasas elevadas, indicativas de actividad); las infecciones causadas por estas variantes son difíciles de tratar, pudiendo causar infecciones de duración prolongada con mayor riesgo de cirrosis hepática.",
    "e": "No es la forma habitual de presentación en la mayoría de los pacientes; se trata de una variante concreta con implicaciones pronósticas específicas, no el patrón típico de la hepatitis B aguda no complicada."
  },
  "repetida": false
},

{
  "id": "t13-017",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Qué parámetros analíticos, junto con la historia clínica, se emplean en el diagnóstico clínico inicial de una hepatitis vírica aguda?",
  "opciones": { "a": "Únicamente la medición de la presión arterial", "b": "Únicamente el estudio del LCR", "c": "Únicamente el análisis de orina mediante tira reactiva", "d": "La elevación de la bilirrubina, las transaminasas, la fosfatasa alcalina y la gamma-GT", "e": "Únicamente el recuento de eosinófilos en sangre periférica" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La presión arterial no aporta información específica sobre la función hepática ni sobre el diagnóstico de una hepatitis vírica aguda.",
    "b": "El estudio del LCR se emplea en la sospecha de meningitis, sin relación con el diagnóstico clínico de la hepatitis.",
    "c": "El análisis de orina mediante tira reactiva se emplea en el cribado de infecciones urinarias, no es el estudio clave para el diagnóstico clínico de la hepatitis.",
    "d": "Correcto: el diagnóstico clínico de la hepatitis vírica aguda se basa en la historia clínica y en la elevación de la bilirrubina, las transaminasas, la fosfatasa alcalina y la gamma-GT, reflejando el daño hepatocelular y la colestasis asociada.",
    "e": "El recuento de eosinófilos es más relevante en el contexto de infecciones parasitarias por helmintos, no es el parámetro clave para el diagnóstico clínico de la hepatitis vírica."
  },
  "repetida": false
},

{
  "id": "t13-018",
  "tema": "Hepatitis infecciosa",
  "pregunta": "¿Cuál es el marcador serológico de elección para detectar la viremia y la replicación del virus en los hepatocitos en la hepatitis B?",
  "opciones": { "a": "La detección y cuantificación del ADN vírico en suero (carga viral, DNA-VHB)", "b": "El anti-HBe exclusivamente", "c": "El anti-HBs exclusivamente", "d": "La bilirrubina total", "e": "La IgG anti-HBc exclusivamente" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la detección y cuantificación del ADN vírico en el suero (carga viral del VHB, DNA-VHB) constituye el marcador de elección para detectar la viremia y reflejar la replicación del virus en los hepatocitos; en general, la mejoría en las formas crónicas se caracteriza por la disminución de esta carga viral.",
    "b": "El anti-HBe es un marcador que indica descenso de la replicación viral, pero no es la técnica de CUANTIFICACIÓN directa de la carga viral, que se realiza mediante la determinación del ADN-VHB.",
    "c": "El anti-HBs es un marcador de protección/inmunidad, no de replicación viral activa ni de carga viral.",
    "d": "La bilirrubina total refleja el grado de daño hepático o colestasis, no es un marcador específico de la replicación del virus de la hepatitis B.",
    "e": "La IgG anti-HBc refleja contacto pasado o cronicidad, pero no cuantifica directamente la replicación viral activa como sí lo hace la determinación del ADN vírico."
  },
  "repetida": false
},

{
  "id": "t14-001",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Cuáles son los cinco microorganismos incluidos en el control serológico sistemático de la gestante con embarazo normal?",
  "opciones": { "a": "Únicamente la varicela", "b": "Únicamente la gripe estacional", "c": "Rubeola, toxoplasmosis, sífilis, hepatitis B y VIH", "d": "Citomegalovirus, parvovirus B19, virus del Zika, enfermedad de Chagas y hepatitis C", "e": "Únicamente el sarampión" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La varicela no forma parte del cribado serológico sistemático de toda gestante, aunque su control puede plantearse en situaciones especiales (colectivos en contacto con niños).",
    "b": "La gripe no forma parte del cribado serológico sistemático del embarazo, aunque sí se recomienda la vacunación estacional en gestantes durante los periodos susceptibles de contagio.",
    "c": "Correcto: el control serológico sistemático de toda gestante con embarazo normal incluye la rubeola, la toxoplasmosis, la sífilis, la hepatitis B y el VIH, tal como se describe en los apuntes de la asignatura.",
    "d": "Estos microorganismos (CMV, parvovirus B19) o situaciones (Zika, Chagas, VHC) se estudian solo en situaciones ESPECIALES o en grupos de riesgo concretos, no forman parte del cribado sistemático de toda gestante con embarazo normal.",
    "e": "El sarampión no forma parte del panel de cribado serológico sistemático descrito para el embarazo normal en los apuntes de la asignatura."
  },
  "repetida": false
},

{
  "id": "t14-002",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "Una embarazada tiene anticuerpos IgG anti-Toxoplasma negativos en el cribado inicial. ¿Qué implica este resultado?",
  "opciones": { "a": "Que no es necesario realizar ningún control adicional durante el resto del embarazo", "b": "Que ya ha pasado la toxoplasmosis y está completamente protegida frente a nuevos contagios", "c": "Que padece una infección crónica activa por Toxoplasma", "d": "Que es susceptible a la infección durante el embarazo, por lo que se le darán instrucciones higiénico-dietéticas y se le realizará un seguimiento serológico trimestral", "e": "Que tiene una toxoplasmosis congénita confirmada en el feto" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Es al revés: precisamente por ser seronegativa (susceptible), sí se recomienda un seguimiento serológico trimestral durante todo el embarazo, no la ausencia de más controles.",
    "b": "Es justo lo contrario: una IgG negativa indica ausencia de inmunidad previa, es decir, que la mujer NO ha pasado la toxoplasmosis y por tanto es susceptible de infectarse durante el embarazo, no que esté protegida.",
    "c": "Una IgG negativa descarta una infección crónica activa (que generaría IgG positiva); indica ausencia de contacto previo con el parásito.",
    "d": "Correcto: una IgG anti-Toxoplasma negativa indica que la gestante es susceptible (no ha tenido contacto previo con el parásito), por lo que se le dan instrucciones sobre vías de transmisión, medidas higiénicas y hábitos culinarios para evitar la infección durante el embarazo, además de realizarse un seguimiento serológico trimestral.",
    "e": "Que sea seronegativa significa que aún no se ha infectado; no indica en absoluto una infección congénita confirmada en el feto, sino más bien un riesgo a vigilar durante el embarazo si se infecta."
  },
  "repetida": false
},

{
  "id": "t14-003",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "En una gestante se observa un incremento significativo de IgG anti-Toxoplasma entre dos muestras tomadas con tres semanas de diferencia, junto con la aparición de IgM. ¿Qué significa este hallazgo?",
  "opciones": { "a": "Indica un riesgo alto de toxoplasmosis congénita, al tratarse de una infección aguda de la gestante durante el embarazo", "b": "Indica que la gestante está vacunada frente a Toxoplasma", "c": "Indica que la prueba serológica no es válida y debe repetirse sin ninguna otra consideración", "d": "Indica riesgo nulo de toxoplasmosis congénita", "e": "Indica que la infección se produjo antes del embarazo y no supone ningún riesgo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el incremento significativo de IgG entre dos muestras separadas por unas semanas, junto con la aparición de IgM, es indicativo de una toxoplasmosis aguda adquirida durante el embarazo, lo que implica un riesgo alto de toxoplasmosis congénita y obliga a instaurar tratamiento y a plantear el diagnóstico prenatal de infección fetal.",
    "b": "No existe una vacuna sistemática frente a Toxoplasma en humanos; el hallazgo descrito refleja una infección aguda real, no un patrón de vacunación.",
    "c": "El patrón descrito (aumento de IgG más aparición de IgM) es clínicamente muy significativo y no simplemente indicativo de un error de laboratorio a repetir sin más.",
    "d": "Es justo lo contrario: este patrón (seroconversión con incremento de IgG y aparición de IgM) indica un riesgo ALTO, no nulo, de toxoplasmosis congénita.",
    "e": "Si la infección hubiera sido anterior al embarazo, la IgG se mantendría estable entre ambas muestras, sin incremento significativo; el hallazgo descrito indica precisamente una infección adquirida durante la gestación."
  },
  "repetida": false
},

{
  "id": "t14-004",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Cuáles son las formas parasitarias responsables de la transmisión de la toxoplasmosis congénita de la madre al feto?",
  "opciones": { "a": "Los trofozoítos de Giardia", "b": "Los quistes tisulares con bradizoítos exclusivamente", "c": "Las microfilarias", "d": "Los taquizoítos", "e": "Los ooquistes exclusivamente" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Los trofozoítos son la forma vegetativa de Giardia intestinalis, un parásito completamente distinto sin relación con la toxoplasmosis congénita.",
    "b": "Los quistes tisulares con bradizoítos son la forma de latencia crónica del parásito en los tejidos del hospedador (por ejemplo en la carne poco cocinada), no la forma responsable de la transmisión transplacentaria aguda.",
    "c": "Las microfilarias son formas larvarias de filarias (nematodos), sin ninguna relación con Toxoplasma gondii ni con la toxoplasmosis congénita.",
    "d": "Correcto: la toxoplasmosis congénita se debe a la transmisión transplacentaria de los taquizoítos, la forma de replicación rápida y activa del parásito, que se produce durante la fase aguda/diseminada de la infección materna.",
    "e": "Los ooquistes son la forma infectante que se elimina en las heces del hospedador definitivo (el gato) y contamina el ambiente, pero no son la forma que atraviesa la placenta para producir la infección congénita."
  },
  "repetida": false
},

{
  "id": "t14-005",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Cómo se transmite habitualmente Toxoplasma gondii al ser humano?",
  "opciones": { "a": "Nunca puede transmitirse por vía transplacentaria", "b": "Exclusivamente por picadura de mosquito", "c": "Exclusivamente por vía respiratoria", "d": "Por consumo de alimentos contaminados, como carne poco cocinada con quistes tisulares o vegetales contaminados con ooquistes de heces de gato", "e": "Exclusivamente por vía sexual" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Precisamente la vía transplacentaria SÍ es una vía de transmisión relevante de Toxoplasma, siendo la responsable de la toxoplasmosis congénita, motivo por el que se realiza el cribado en el embarazo.",
    "b": "A diferencia de Plasmodium, Toxoplasma no se transmite por picadura de mosquito; su transmisión habitual es alimentaria.",
    "c": "La vía respiratoria no es el mecanismo habitual de transmisión de Toxoplasma gondii.",
    "d": "Correcto: la transmisión de Toxoplasma gondii al ser humano se produce fundamentalmente por consumo de alimentos contaminados, ya sea carne poco cocinada que contiene quistes tisulares con bradizoítos, o vegetales/agua contaminados con ooquistes procedentes de las heces de gatos infectados.",
    "e": "La vía sexual no es el mecanismo habitual de transmisión de Toxoplasma gondii al ser humano."
  },
  "repetida": false
},

{
  "id": "t14-006",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "En el cribado sistemático de la sífilis en la embarazada, ¿qué pruebas se emplean inicialmente y cuándo se realizan las pruebas treponémicas de confirmación?",
  "opciones": { "a": "El cribado de la sífilis no forma parte del control sistemático del embarazo", "b": "Inicialmente se emplean pruebas no treponémicas (RPR o VDRL); las pruebas treponémicas (FTA-ABS o TPHA) se realizan solo si el cribado inicial resulta positivo", "c": "Se emplea únicamente la tinción de Gram del suero", "d": "Se emplean únicamente pruebas treponémicas desde el principio, sin cribado previo", "e": "Se emplea únicamente el cultivo de Treponema pallidum" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La sífilis sí forma parte del panel de cribado serológico sistemático del embarazo, junto con la rubeola, la toxoplasmosis, la hepatitis B y el VIH.",
    "b": "Correcto: el cribado sistemático de la sífilis en la gestante se realiza inicialmente mediante pruebas no treponémicas (RPR o VDRL), que son sensibles pero poco específicas; las pruebas treponémicas (FTA-ABS o TPHA), mucho más específicas, se realizan únicamente cuando el resultado del cribado inicial es positivo, para confirmarlo.",
    "c": "La tinción de Gram no permite visualizar Treponema pallidum, que no se tiñe adecuadamente con esta técnica; el diagnóstico serológico se basa en las pruebas específicas mencionadas.",
    "d": "No se emplean directamente las pruebas treponémicas como cribado inicial; el orden habitual es primero las pruebas no treponémicas de cribado y después, si son positivas, las treponémicas de confirmación.",
    "e": "El cultivo de Treponema pallidum no es factible en la práctica clínica habitual; el diagnóstico se basa en pruebas serológicas."
  },
  "repetida": false
},

{
  "id": "t14-007",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Qué implica un resultado de HBsAg positivo en el cribado de una gestante durante el control sistemático del embarazo?",
  "opciones": { "a": "Indica infección actual por el VHB, requiriendo continuar el estudio según el protocolo general de diagnóstico de las hepatitis víricas y efectuar la profilaxis combinada en el neonato", "b": "Indica que la gestante está vacunada correctamente frente al VHB", "c": "Descarta cualquier posibilidad de infección por el VHB", "d": "Indica que el neonato nacerá completamente inmune sin necesidad de ninguna profilaxis", "e": "Indica una infección por el VIH, no por el VHB" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: un HBsAg positivo en el cribado de la gestante indica infección actual (aguda o crónica) por el VHB, debiendo continuarse el estudio según el protocolo general de diagnóstico de las hepatitis víricas y efectuando la profilaxis combinada del neonato dentro de las primeras 8-12 horas tras el nacimiento.",
    "b": "El HBsAg positivo indica infección activa por el virus, no vacunación; los individuos vacunados presentan únicamente anti-HBs, no HBsAg.",
    "c": "Es justo lo contrario: un HBsAg positivo confirma la infección actual por el VHB, no la descarta.",
    "d": "Precisamente por el riesgo de transmisión al neonato, este SÍ requiere profilaxis específica (combinada) dentro de las primeras horas tras el nacimiento, no nace protegido de forma espontánea.",
    "e": "El HBsAg es un marcador específico del virus de la hepatitis B, sin relación con el diagnóstico de la infección por VIH, que emplea pruebas serológicas distintas."
  },
  "repetida": false
},

{
  "id": "t14-008",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Qué tipo de vacunas están contraindicadas durante la gestación, y cuáles pueden administrarse con seguridad?",
  "opciones": { "a": "Las vacunas con virus vivos o atenuados están en general contraindicadas durante el embarazo; las vacunas con virus inactivados, las bacterianas y los toxoides pueden emplearse con seguridad", "b": "Todas las vacunas, sin excepción, están contraindicadas durante el embarazo", "c": "La vacuna frente a la tosferina está siempre contraindicada durante el embarazo", "d": "Todas las vacunas, incluidas las de virus vivos atenuados, pueden administrarse sin ningún problema durante el embarazo", "e": "Solo las vacunas bacterianas están contraindicadas durante el embarazo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: las vacunas con virus vivos o atenuados (sarampión, rubeola, parotiditis, varicela, poliomielitis tipo Sabin) están en general contraindicadas durante la gestación, por el riesgo teórico de que el virus atenuado atraviese la placenta; en cambio, las vacunas con virus inactivados, las vacunas bacterianas y los toxoides (difteria, tétanos, gripe, tosferina, hepatitis A y B, entre otras) pueden emplearse con seguridad durante el embarazo y la lactancia.",
    "b": "No todas las vacunas están contraindicadas; las de virus inactivados, bacterianas y toxoides pueden administrarse con seguridad durante el embarazo.",
    "c": "Precisamente lo contrario: la vacunación frente a la tosferina durante el embarazo está RECOMENDADA, ya que protege al neonato en sus primeros meses de vida mediante el paso transplacentario de anticuerpos maternos.",
    "d": "Es justo lo contrario: las vacunas con virus vivos o atenuados sí están contraindicadas durante el embarazo, precisamente por el riesgo de capacidad infectiva para el feto.",
    "e": "Es al revés: las vacunas bacterianas (inactivadas) pueden administrarse con seguridad; son las vacunas de virus VIVOS o atenuados las que están contraindicadas."
  },
  "repetida": false
},

{
  "id": "t14-009",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Por qué se recomienda vacunar a la embarazada frente a la tosferina durante la gestación?",
  "opciones": { "a": "Porque es una vacuna de virus vivos atenuados especialmente indicada en el embarazo", "b": "Para que la madre no adquiera la tosferina y contagie al neonato, y para que los anticuerpos generados pasen al feto vía transplacentaria, protegiéndolo hasta el inicio de su propia vacunación a los 2 meses de vida", "c": "Porque protege exclusivamente a la madre, sin ningún beneficio para el neonato", "d": "Porque elimina por completo la necesidad de vacunar al niño en el futuro", "e": "Porque previene exclusivamente la meningitis meningocócica" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La vacuna frente a la tosferina (componente acelular, dentro de vacunas combinadas) es una vacuna INACTIVADA, no de virus vivos atenuados, por lo que es segura durante el embarazo.",
    "b": "Correcto: la vacunación materna durante el embarazo frente a la tosferina busca impedir que la madre adquiera la enfermedad y contagie al neonato, además de que los anticuerpos generados por la madre atraviesen la placenta y protejan al niño durante sus primeros meses de vida, hasta que pueda iniciar su propia vacunación a los 2 meses.",
    "c": "Precisamente el objetivo principal es proteger también al neonato, mediante el paso transplacentario de anticuerpos maternos, no exclusivamente a la madre.",
    "d": "No elimina la necesidad de vacunar posteriormente al niño; la protección materna cubre únicamente los primeros meses de vida, hasta que el propio niño inicia su calendario vacunal a partir de los 2 meses.",
    "e": "La vacunación frente a la tosferina protege frente a Bordetella pertussis, no frente a la meningitis meningocócica, que sería una vacuna distinta."
  },
  "repetida": false
},

{
  "id": "t14-010",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Cuáles de los siguientes microorganismos se estudian en situaciones especiales durante el embarazo, pero NO forman parte del cribado serológico sistemático de toda gestante?",
  "opciones": { "a": "La rubeola y la toxoplasmosis", "b": "El virus de la hepatitis C, el virus del Zika, Trypanosoma cruzi (enfermedad de Chagas) y el virus varicela-zóster", "c": "La rubeola, la toxoplasmosis, la sífilis y la hepatitis B, mientras que el VIH es el único cribado sistemático obligatorio", "d": "La sífilis y la hepatitis B", "e": "El VIH exclusivamente" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La rubeola y la toxoplasmosis SÍ forman parte del cribado sistemático de toda gestante, no son ejemplos de estudio en situaciones especiales.",
    "b": "Correcto: el virus de la hepatitis C, el virus del Zika, la enfermedad de Chagas (Trypanosoma cruzi) y el virus varicela-zóster (entre otros, como el VHS tipo 2) se estudian solo en situaciones especiales o en grupos de riesgo concretos (viajes, procedencia geográfica, exposición ocupacional), no forman parte del cribado sistemático de toda gestante con embarazo normal.",
    "c": "No es correcto: existe una diferenciación clara entre los microorganismos de cribado sistemático (rubeola, toxoplasmosis, sífilis, VHB, VIH, todos ellos incluidos, no solo el VIH) y los que se estudian solo en situaciones especiales (VHC, Zika, Chagas, VVZ, VHS-2).",
    "d": "La sífilis y la hepatitis B SÍ forman parte del cribado sistemático de toda gestante, no son ejemplos de estudio en situaciones especiales.",
    "e": "El VIH SÍ forma parte del cribado sistemático de toda gestante, no es un ejemplo de estudio restringido a situaciones especiales."
  },
  "repetida": false
},

{
  "id": "t14-011",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Qué dos microorganismos, capaces de transmitirse al feto o al neonato, NO se incluyen en el control serológico sistemático de la gestante porque los inconvenientes superan a los beneficios potenciales?",
  "opciones": { "a": "El citomegalovirus y el parvovirus B19", "b": "La hepatitis B y la hepatitis A", "c": "La rubeola y la toxoplasmosis", "d": "El VPH y el VHS-1", "e": "La sífilis y el VIH" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: según los apuntes de la asignatura, el citomegalovirus y el parvovirus B19 son ejemplos de microorganismos que, pese a poder transmitirse al feto o al neonato, no se incluyen en el cribado serológico sistemático de la gestante, debido a que los beneficios potenciales del cribado no superan a los inconvenientes.",
    "b": "La hepatitis B SÍ forma parte del cribado sistemático; la hepatitis A no es un microorganismo destacado en el contexto de la transmisión vertical en los apuntes de la asignatura.",
    "c": "La rubeola y la toxoplasmosis SÍ forman parte del cribado serológico sistemático de la gestante, no son ejemplos de microorganismos excluidos.",
    "d": "Ni el VPH ni el VHS-1 son los ejemplos citados explícitamente en los apuntes como microorganismos excluidos del cribado sistemático de la gestante.",
    "e": "La sífilis y el VIH SÍ forman parte del cribado serológico sistemático de la gestante, no son ejemplos de microorganismos excluidos de este cribado."
  },
  "repetida": false
},

{
  "id": "t14-012",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿En qué momento del embarazo se realiza el estudio sistemático de la colonización vagino-rectal por Streptococcus agalactiae en la gestante?",
  "opciones": { "a": "Entre las semanas 35-37 de gestación", "b": "Únicamente en el momento de la concepción", "c": "En el primer trimestre exclusivamente", "d": "Únicamente tras el parto", "e": "Nunca se realiza este tipo de cribado" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el estudio sistemático de la colonización vagino-rectal por Streptococcus agalactiae en las gestantes se realiza entre las semanas 35 y 37 de gestación, un momento próximo al parto que permite identificar a las portadoras para administrarles profilaxis antibiótica intraparto.",
    "b": "No se realiza en el momento de la concepción; el cribado se realiza en una etapa avanzada del embarazo (semanas 35-37), próxima al parto.",
    "c": "No se realiza en el primer trimestre; el cribado se realiza más cerca del momento del parto (semanas 35-37), ya que la colonización puede variar a lo largo del embarazo.",
    "d": "El cribado se realiza ANTES del parto (semanas 35-37), precisamente para poder planificar la profilaxis antibiótica intraparto en las portadoras, no después del parto.",
    "e": "Sí se realiza este cribado de forma sistemática en las gestantes, dada la relevancia de la prevención de la meningitis neonatal por S. agalactiae."
  },
  "repetida": false
},

{
  "id": "t14-013",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Qué proporción aproximada de gestantes son portadoras de Streptococcus agalactiae en la flora vagino-rectal en nuestro medio?",
  "opciones": { "a": "Aproximadamente el 99%", "b": "Alrededor del 20%", "c": "El 0%, ya que nunca coloniza a mujeres embarazadas", "d": "Menos del 0,1%", "e": "El 100% de las gestantes" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El 99% es una sobreestimación considerable; la tasa de colonización descrita en los apuntes es de aproximadamente el 20%.",
    "b": "Correcto: en nuestro medio, la tasa de colonización vagino-rectal por Streptococcus agalactiae en las gestantes es de alrededor del 20%, lo que justifica el cribado sistemático entre las semanas 35-37 y la profilaxis antibiótica intraparto en las portadoras.",
    "c": "S. agalactiae sí coloniza la flora vagino-rectal de una proporción relevante de gestantes (en torno al 20%), de ahí la importancia del cribado sistemático.",
    "d": "La tasa de colonización es sustancialmente mayor que menos del 0,1%; se sitúa en torno al 20% según los apuntes de la asignatura.",
    "e": "No coloniza al 100% de las gestantes; la tasa descrita en los apuntes es de alrededor del 20%, no la totalidad."
  },
  "repetida": false
},

{
  "id": "t14-014",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Por qué es importante identificar a las gestantes portadoras de Streptococcus agalactiae mediante el cribado vagino-rectal, si a ellas mismas la bacteria no les produce ningún síntoma?",
  "opciones": { "a": "Porque, aunque en la madre S. agalactiae se comporta como flora comensal asintomática, en el neonato puede producir cuadros graves de bacteriemia, sepsis y meningitis al pasar por el canal del parto", "b": "Porque S. agalactiae siempre produce una meningitis grave en la madre", "c": "Porque la colonización siempre indica una infección de transmisión sexual concurrente", "d": "Porque el cribado se realiza solo por motivos estadísticos, sin ninguna repercusión clínica", "e": "Porque S. agalactiae nunca puede transmitirse al neonato" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: aunque S. agalactiae forma parte de la flora comensal vaginal en un porcentaje relevante de mujeres sin producirles ningún síntoma, en el neonato, que carece de la inmunidad adecuada, puede producir cuadros graves de bacteriemia, sepsis y meningitis al colonizarse durante el paso por el canal del parto; por eso el cribado y la profilaxis intraparto son tan relevantes.",
    "b": "En la madre, S. agalactiae se comporta habitualmente como flora comensal SIN producir clínica; el riesgo grave se concentra en el neonato, no en la madre.",
    "c": "La colonización por S. agalactiae es una situación de flora comensal habitual, no indica necesariamente ninguna infección de transmisión sexual concurrente.",
    "d": "El cribado tiene una repercusión clínica directa y muy relevante, ya que permite administrar profilaxis antibiótica intraparto y así reducir de forma significativa el riesgo de infección grave en el neonato.",
    "e": "Precisamente sí puede transmitirse al neonato durante el parto, lo que constituye la razón fundamental para realizar este cribado sistemático."
  },
  "repetida": false
},

{
  "id": "t14-015",
  "tema": "Infecciones de transmisión vertical y serología del embarazo",
  "pregunta": "¿Qué medidas se recomiendan a una gestante que resulta seronegativa (susceptible) frente a la rubeola en el cribado inicial del embarazo?",
  "opciones": { "a": "Se le debe practicar una interrupción del embarazo de forma sistemática", "b": "Recibir inmediatamente la vacuna frente a la rubeola durante el embarazo, sin ningún problema", "c": "No es necesaria ninguna medida especial en absoluto", "d": "Recibir la vacuna frente a la rubeola tras el parto y adoptar medidas de prevención primaria para evitar el contagio durante la gestación, ya que la vacuna con virus atenuado no puede administrarse durante el embarazo", "e": "Se le debe administrar directamente el virus atenuado por vía intravenosa" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La interrupción del embarazo no es la conducta sistemática recomendada únicamente por presentar serología negativa (susceptibilidad); esta decisión, en su caso, dependería de una infección confirmada y de sus repercusiones fetales concretas, no de la simple susceptibilidad.",
    "b": "La vacuna de la rubeola contiene virus vivo atenuado, contraindicada durante el embarazo por el riesgo teórico de afectación fetal; debe posponerse hasta después del parto.",
    "c": "Sí se recomiendan medidas específicas: vacunación postparto y medidas de prevención primaria durante la gestación, dado el riesgo de infección congénita si la madre se infecta durante el embarazo.",
    "d": "Correcto: dado que la vacuna de la rubeola contiene virus atenuado (contraindicada durante el embarazo), a una gestante seronegativa se le recomienda vacunarse en el POSTPARTO y, mientras tanto, adoptar medidas de prevención primaria para evitar el contagio durante la gestación, dado el riesgo de síndrome de rubeola congénita si se infecta durante el embarazo.",
    "e": "No se administra el virus atenuado durante el embarazo bajo ninguna vía, precisamente por el riesgo asociado a las vacunas de virus vivos en la gestación."
  },
  "repetida": false
},

{
  "id": "t15-001",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿A qué especie pertenece un trofozoíto con forma de pera o de higo, con un aspecto que recuerda a 'dos ojos' bajo el microscopio, y que produce diarrea, náuseas y malabsorción?",
  "opciones": { "a": "Trichomonas vaginalis", "b": "Entamoeba histolytica", "c": "Entamoeba coli", "d": "Giardia intestinalis", "e": "Toxoplasma gondii" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Trichomonas vaginalis es un protozoo flagelado del tracto genital, con morfología redondeada y un núcleo coloreado, distinta de la forma piriforme de Giardia, y no afecta al intestino delgado de esta manera.",
    "b": "Entamoeba histolytica es una ameba que puede producir disentería amebiana, pero su trofozoíto no tiene la morfología característica en forma de pera/higo con 'dos ojos' descrita, que es propia de Giardia.",
    "c": "Entamoeba coli es una ameba no patógena (comensal) del intestino, morfológicamente distinta de Giardia, y no es la causante del cuadro clínico descrito de diarrea con malabsorción.",
    "d": "Correcto: el trofozoíto de Giardia intestinalis tiene una forma característica piriforme (de pera o de higo), con dos núcleos que le dan un aspecto de 'dos ojos' mirando al observador; produce un cuadro clínico de diarrea, náuseas y malabsorción intestinal, y puede detectarse como trofozoíto en un aspirado duodenal/intestinal.",
    "e": "Toxoplasma gondii no tiene una forma de trofozoíto intestinal como la descrita; su forma de multiplicación rápida es el taquizoíto, con una morfología y localización completamente distintas."
  },
  "repetida": false
},

{
  "id": "t15-003",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué proteína de adhesión de 240 kDa, conocida como lectina Gal/GalNAc, es un factor de virulencia importante de Entamoeba histolytica?",
  "opciones": { "a": "Una toxina producida por Plasmodium falciparum", "b": "Una proteína exclusiva de Giardia intestinalis sin relación con Entamoeba", "c": "Una lectina que permite la adhesión del parásito a la mucosa colónica y a los eritrocitos, facilitando su capacidad invasiva", "d": "Una enzima presente exclusivamente en Trichomonas vaginalis", "e": "Un componente de la envuelta del VIH" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "No es una toxina de Plasmodium falciparum; corresponde específicamente a Entamoeba histolytica.",
    "b": "Esta lectina es característica de Entamoeba histolytica, no de Giardia intestinalis, que posee sus propios mecanismos de adhesión distintos (proteínas de adhesión de superficie diferentes).",
    "c": "Correcto: Entamoeba histolytica posee una lectina de adhesión de 240 kDa (Gal/GalNAc) que le permite adherirse a la mucosa del colon y a los eritrocitos, siendo un factor de virulencia clave en su capacidad de invasión tisular y en la producción de la disentería amebiana.",
    "d": "No es exclusiva de Trichomonas vaginalis; es una molécula de adhesión característica de Entamoeba histolytica.",
    "e": "No tiene relación con el VIH; es una proteína propia de la biología de Entamoeba histolytica."
  },
  "repetida": false
},

{
  "id": "t15-004",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "En una muestra de heces disentéricas (con sangre y moco), ¿qué forma parasitaria de Entamoeba histolytica es más probable encontrar?",
  "opciones": { "a": "Formas trofozoíticas ameboides", "b": "Esporas de microsporidios exclusivamente", "c": "Únicamente quistes tetranucleados, nunca trofozoítos", "d": "Microfilarias", "e": "Huevos operculados" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en las heces disentéricas (líquidas, con sangre y moco) de una amebiasis invasiva es característico encontrar formas trofozoíticas ameboides de Entamoeba histolytica, la forma activa e invasiva del parásito, a diferencia de las heces formadas, donde predominan los quistes.",
    "b": "Las esporas son la forma característica de los microsporidios, un grupo de parásitos completamente distinto de Entamoeba histolytica.",
    "c": "Es al contrario de lo esperado en heces disentéricas: en este contexto predominan los trofozoítos (forma activa, fragil, que requiere examen rápido de la muestra), mientras que los quistes son más típicos de heces formadas.",
    "d": "Las microfilarias son formas larvarias de nematodos filariales, sin relación con la amebiasis intestinal por E. histolytica.",
    "e": "Los huevos operculados son propios de trematodos (como Paragonimus o Fasciola), no de una ameba como Entamoeba histolytica."
  },
  "repetida": false
},

{
  "id": "t15-005",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cuál es el tratamiento clásico de elección para la amebiasis intestinal invasiva por Entamoeba histolytica?",
  "opciones": { "a": "Compuestos antimoniales", "b": "Anfotericina B exclusivamente", "c": "Ivermectina exclusivamente", "d": "Metronidazol", "e": "Penicilina" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Los compuestos antimoniales se emplean en el tratamiento de la leishmaniasis (Leishmania donovani), no de la amebiasis.",
    "b": "La anfotericina B se emplea en infecciones fúngicas graves y en algunos protozoos concretos (como Naegleria), pero no es el tratamiento clásico de primera línea de la amebiasis intestinal.",
    "c": "La ivermectina se emplea en el tratamiento de diversas helmintiasis (como la estrongiloidiasis), no es el tratamiento clásico de la amebiasis por E. histolytica.",
    "d": "Correcto: el metronidazol es el tratamiento clásico de elección para la amebiasis invasiva por Entamoeba histolytica, un antiparasitario/antibiótico con buena actividad frente a protozoos anaerobios y microaerófilos.",
    "e": "La penicilina es un antibiótico dirigido frente a bacterias, sin actividad relevante frente a Entamoeba histolytica."
  },
  "repetida": false
},

{
  "id": "t15-006",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué muestra biológica es la más adecuada para el diagnóstico de la tricomoniasis por Trichomonas vaginalis?",
  "opciones": { "a": "El aspirado de médula ósea", "b": "La biopsia hepática", "c": "La muestra de esputo", "d": "La muestra de LCR", "e": "El exudado vaginal" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El aspirado de médula ósea es la muestra de elección para el diagnóstico de la leishmaniosis visceral, sin relación con Trichomonas vaginalis.",
    "b": "La biopsia hepática no es la muestra habitual para el diagnóstico de la tricomoniasis, que es una infección localizada en el tracto genital.",
    "c": "El esputo es la muestra adecuada para el diagnóstico de infecciones respiratorias (como la localización pulmonar de Paragonimus), sin relación con el diagnóstico de la tricomoniasis, una infección del tracto genital.",
    "d": "El LCR se emplea en el diagnóstico de infecciones del sistema nervioso central, sin relación con la tricomoniasis genital.",
    "e": "Correcto: el exudado vaginal es la muestra biológica de elección para el diagnóstico de la tricomoniasis, permitiendo la observación del protozoo flagelado móvil (Trichomonas vaginalis) al microscopio en fresco."
  },
  "repetida": true
},

{
  "id": "t15-007",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cuál es la forma parasitaria responsable de la toxoplasmosis congénita, capaz de atravesar la barrera placentaria durante la fase aguda de la infección materna?",
  "opciones": { "a": "Los quistes tisulares con bradizoítos exclusivamente", "b": "Las microfilarias", "c": "Los taquizoítos", "d": "Los esporozoítos exclusivamente", "e": "Los merozoítos" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Los quistes tisulares con bradizoítos representan la forma de latencia crónica en los tejidos (por ejemplo en la carne), no la forma responsable del paso agudo a través de la placenta.",
    "b": "Las microfilarias son formas de nematodos filariales, sin ninguna relación con Toxoplasma gondii.",
    "c": "Correcto: la toxoplasmosis congénita se produce por el paso transplacentario de los taquizoítos, la forma de multiplicación rápida y diseminación activa del parásito, que se generan durante la fase aguda de la infección materna.",
    "d": "Los esporozoítos son la forma infectante contenida en los ooquistes eliminados por el gato (hospedador definitivo), forma de transmisión ambiental, pero no la que atraviesa directamente la placenta.",
    "e": "Los merozoítos son formas de multiplicación característica de Plasmodium, no de Toxoplasma gondii."
  },
  "repetida": false
},

{
  "id": "t15-008",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué técnica de tinción se recomienda para confirmar la presencia de un ooquiste de Cryptosporidium spp. observado en el análisis de heces?",
  "opciones": { "a": "La tinción de Gram", "b": "La prueba de la coagulasa", "c": "La tinción de Ziehl-Neelsen (modificada)", "d": "La tinción de Papanicolaou", "e": "El test de CAMP" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La tinción de Gram se emplea para bacterias, no es la técnica de confirmación recomendada para los ooquistes de Cryptosporidium.",
    "b": "La prueba de la coagulasa se emplea para identificar Staphylococcus aureus, sin relación con la confirmación de Cryptosporidium.",
    "c": "Correcto: para confirmar el hallazgo de una forma parasitaria compatible con un ooquiste de Cryptosporidium spp. en heces, la técnica recomendada es la tinción de Ziehl-Neelsen (modificada), ya que los ooquistes de Cryptosporidium son ácido-alcohol resistentes, tiñéndose de rojo/rosa sobre un fondo azul, de forma análoga (aunque en un contexto parasitológico) a como se tiñen las micobacterias.",
    "d": "La tinción de Papanicolaou se emplea en citología ginecológica, sin relación con la confirmación de ooquistes de Cryptosporidium en heces.",
    "e": "El test de CAMP se emplea para Streptococcus agalactiae, sin relación con el diagnóstico de Cryptosporidium."
  },
  "repetida": false
},

{
  "id": "t15-009",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cuál de los siguientes parásitos presenta autofluorescencia, una propiedad que puede aprovecharse para su detección al microscopio de fluorescencia?",
  "opciones": { "a": "Trichomonas vaginalis", "b": "Cryptosporidium sp.", "c": "Entamoeba coli", "d": "Leishmania donovani", "e": "Giardia intestinalis" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Trichomonas vaginalis no presenta la propiedad de autofluorescencia descrita para los ooquistes de coccidios como Cryptosporidium.",
    "b": "Correcto: los ooquistes de Cryptosporidium sp. presentan la propiedad de autofluorescencia bajo microscopio de fluorescencia con luz ultravioleta, una característica que puede emplearse como técnica de cribado adicional para su detección en heces.",
    "c": "Entamoeba coli, una ameba no patógena, no presenta esta propiedad de autofluorescencia.",
    "d": "Leishmania donovani no presenta esta propiedad de autofluorescencia; su diagnóstico se basa en la observación directa de amastigotes en tejido o cultivo, no en esta técnica.",
    "e": "Giardia intestinalis no se caracteriza por presentar la propiedad de autofluorescencia descrita para los ooquistes de coccidios como Cryptosporidium."
  },
  "repetida": true
},

{
  "id": "t15-010",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿En qué parasitosis se puede producir un cuadro hematológico de monocitosis, neutropenia y anemia (pancitopenia relativa por hipoesplenismo)?",
  "opciones": { "a": "La esquistosomiasis", "b": "La oxiuriasis", "c": "La leishmaniosis (visceral)", "d": "La giardiasis", "e": "La estrongiloidiasis" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La esquistosomiasis puede cursar con eosinofilia (como muchas helmintiasis tisulares), pero no es la parasitosis clásicamente asociada al patrón hematológico de monocitosis/neutropenia/anemia descrito, que es característico de la leishmaniosis visceral.",
    "b": "La oxiuriasis, producida por Enterobius vermicularis, no se asocia al patrón hematológico descrito, que es característico de la leishmaniosis visceral.",
    "c": "Correcto: la leishmaniosis visceral (kala-azar) cursa característicamente con alteraciones hematológicas relacionadas con el hipoesplenismo y la afectación de la médula ósea, incluyendo monocitosis, neutropenia (leucopenia) y anemia.",
    "d": "La giardiasis no se caracteriza por producir alteraciones hematológicas significativas de este tipo; su clínica es fundamentalmente digestiva (diarrea, malabsorción).",
    "e": "La estrongiloidiasis se asocia clásicamente a eosinofilia, no al patrón hematológico específico descrito para la leishmaniosis visceral."
  },
  "repetida": true
},

{
  "id": "t15-011",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "El aspirado esplénico o el aspirado de médula ósea se emplean para el diagnóstico de:",
  "opciones": { "a": "La tricomoniasis", "b": "La giardiasis", "c": "La leishmaniosis cutánea exclusivamente", "d": "La leishmaniosis visceral", "e": "La oxiuriasis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La tricomoniasis se diagnostica mediante exudado vaginal, sin relación con el aspirado esplénico o de médula ósea.",
    "b": "La giardiasis se diagnostica mediante examen de heces (fresco, concentración) o aspirado duodenal, no mediante aspirado esplénico ni de médula ósea.",
    "c": "La leishmaniosis cutánea se diagnostica mediante biopsia o raspado de la lesión cutánea, no mediante aspirado esplénico o de médula ósea, técnicas reservadas para la forma visceral.",
    "d": "Correcto: tanto el aspirado esplénico (más sensible pero más arriesgado por el riesgo de sangrado) como el aspirado de médula ósea (más seguro y habitualmente preferido) se emplean para el diagnóstico de la leishmaniosis visceral, permitiendo observar los amastigotes del parásito dentro de los macrófagos.",
    "e": "La oxiuriasis se diagnostica mediante la técnica de Graham (cinta adhesiva perianal), sin relación con el aspirado esplénico o de médula ósea."
  },
  "repetida": true
},

{
  "id": "t15-012",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué indica un resultado positivo en la intradermorreacción de Montenegro (prueba de la leishmanina)?",
  "opciones": { "a": "Que existe una buena respuesta inmunológica de tipo celular frente a Leishmania, típica de formas cutáneas autolimitadas, no que exista enfermedad activa en ese momento", "b": "Que el paciente tiene una infección aguda por VIH", "c": "Que el paciente padece paludismo", "d": "Que el paciente nunca ha tenido contacto con Leishmania", "e": "Que el paciente tiene con seguridad una leishmaniosis visceral activa y grave" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: un resultado positivo en la intradermorreacción de Montenegro indica una buena respuesta inmunológica de tipo celular frente a Leishmania, típica de las formas cutáneas autolimitadas en las que el sistema inmune ha conseguido controlar la infección; no equivale a enfermedad activa en el momento de la prueba, sino a contacto previo con buena respuesta inmune.",
    "b": "La prueba de Montenegro es específica de la respuesta inmune frente a Leishmania, sin relación con el diagnóstico del VIH.",
    "c": "La prueba de Montenegro es específica de Leishmania, sin ninguna relación con el diagnóstico del paludismo, causado por Plasmodium.",
    "d": "Un resultado NEGATIVO, no positivo, podría indicar ausencia de contacto previo con el parásito (entre otras posibilidades, como la anergia inmunológica).",
    "e": "Es más bien al contrario: la leishmaniosis visceral se caracteriza típicamente por una respuesta ANÉRGICA (test de Montenegro negativo), reflejo de la incapacidad del sistema inmune celular para controlar la infección diseminada."
  },
  "repetida": false
},

{
  "id": "t15-013",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "Un resultado NEGATIVO en la intradermorreacción de Montenegro, ¿qué puede indicar?",
  "opciones": { "a": "Confirma con total seguridad la ausencia de cualquier tipo de leishmaniosis, incluyendo la visceral", "b": "Puede indicar tanto la ausencia total de contacto previo con el parásito, como una leishmaniosis anérgica (con mala respuesta inmunológica celular, como en la forma visceral o en la leishmaniosis cutánea difusa)", "c": "Es indicativo específicamente de paludismo por Plasmodium falciparum", "d": "Es indicativo específicamente de una infección aguda por Toxoplasma gondii", "e": "Indica siempre y exclusivamente una excelente respuesta inmunológica frente a Leishmania" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Un resultado negativo no descarta con seguridad una leishmaniosis visceral, ya que esta entidad se caracteriza precisamente por cursar con anergia (test negativo) debido a la mala respuesta inmune celular del paciente.",
    "b": "Correcto: un resultado negativo en la prueba de Montenegro puede deberse tanto a que el individuo nunca ha tenido contacto con el parásito, como a que padece una leishmaniosis con anergia inmunológica (mala respuesta celular), como ocurre típicamente en la leishmaniosis visceral o en la leishmaniosis cutánea difusa anérgica; ambas situaciones son compatibles con un resultado negativo.",
    "c": "La prueba de Montenegro no tiene relación con el diagnóstico del paludismo, causado por Plasmodium, un parásito completamente distinto.",
    "d": "La prueba de Montenegro es específica de la respuesta frente a Leishmania, sin relación con el diagnóstico de Toxoplasma gondii.",
    "e": "Es justo lo contrario: un resultado POSITIVO, no negativo, es el que indica una buena respuesta inmunológica celular frente a Leishmania."
  },
  "repetida": false
},

{
  "id": "t15-014",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué fármacos se emplean clásicamente en el tratamiento de la leishmaniosis (Leishmania donovani)?",
  "opciones": { "a": "La penicilina exclusivamente", "b": "Las tetraciclinas exclusivamente", "c": "Los antipalúdicos exclusivamente", "d": "Los compuestos antimoniales", "e": "El metronidazol exclusivamente" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La penicilina es un antibiótico dirigido frente a bacterias, sin actividad frente a Leishmania, un protozoo.",
    "b": "Las tetraciclinas son antibióticos dirigidos frente a bacterias, sin actividad relevante como tratamiento clásico de la leishmaniosis.",
    "c": "Los antipalúdicos se emplean para el tratamiento del paludismo (Plasmodium), no son el tratamiento clásico de la leishmaniosis.",
    "d": "Correcto: los compuestos antimoniales (antimoniales pentavalentes) se emplean clásicamente en el tratamiento de la leishmaniosis producida por Leishmania donovani.",
    "e": "El metronidazol es el tratamiento clásico de la amebiasis y otras infecciones por protozoos anaerobios, no el tratamiento clásico de la leishmaniosis."
  },
  "repetida": false
},

{
  "id": "t15-015",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cuál es la especie de Leishmania presente en España, causante tanto de formas cutáneas como viscerales?",
  "opciones": { "a": "Leishmania mexicana exclusivamente", "b": "Leishmania major exclusivamente", "c": "Leishmania tropica exclusivamente", "d": "Leishmania braziliensis exclusivamente", "e": "Leishmania infantum" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Leishmania mexicana es propia del continente americano, no es la especie característica presente en España.",
    "b": "Leishmania major es una especie del Viejo Mundo asociada sobre todo a leishmaniosis cutánea en el norte de África y Oriente Medio, no es la especie característica presente en España.",
    "c": "Leishmania tropica se asocia a la leishmaniosis cutánea del Viejo Mundo en otras regiones, no es la especie característica descrita para España.",
    "d": "Leishmania braziliensis es propia del Nuevo Mundo (América Latina), asociada a la leishmaniosis mucocutánea americana, no es la especie presente en España.",
    "e": "Correcto: la especie de Leishmania presente en España es Leishmania infantum (también denominada L. donovani infantum en clasificaciones más antiguas), responsable tanto de la leishmaniosis visceral como de la leishmaniosis cutánea en nuestro país, transmitida por la picadura de flebótomos (Phlebotomus)."
  },
  "repetida": false
},

{
  "id": "t15-016",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "Dentro de un macrófago se observa una forma parasitaria de tipo amastigote. ¿Qué parásito puede ser?",
  "opciones": { "a": "Cryptosporidium sp.", "b": "Isospora belli", "c": "Toxoplasma gondii únicamente", "d": "Schistosoma haematobium", "e": "Leishmania donovani" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Cryptosporidium sp. se localiza en el epitelio intestinal, no dentro de macrófagos como un amastigote; su diagnóstico se basa en la detección de ooquistes en heces.",
    "b": "Isospora belli es un coccidio intestinal que no se multiplica dentro de macrófagos como un amastigote; su forma diagnóstica son los ooquistes en heces.",
    "c": "Aunque Toxoplasma gondii también puede replicarse intracelularmente (como taquizoíto, no como amastigote propiamente dicho), la forma 'amastigote' descrita en macrófagos es la denominación clásica y característica de Leishmania.",
    "d": "Schistosoma haematobium es un trematodo tisular que no adopta la forma de amastigote intracelular en macrófagos; su diagnóstico se basa en la detección de huevos en orina.",
    "e": "Correcto: Leishmania donovani se multiplica en forma de amastigote (forma ovalada sin flagelo externo visible) dentro de las células del sistema mononuclear fagocítico, especialmente en macrófagos, siendo este el hallazgo diagnóstico clásico en un aspirado de médula ósea o bazo."
  },
  "repetida": false
},

{
  "id": "t15-017",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cuál de los siguientes parásitos puede habitar dentro de células del sistema mononuclear fagocítico (macrófagos)?",
  "opciones": { "a": "Ningún protozoo es capaz de multiplicarse dentro de las células del sistema mononuclear fagocítico", "b": "Enterocytozoon bieneusi", "c": "Leishmania donovani", "d": "Giardia intestinalis", "e": "Cyclospora sp." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Sí existe un protozoo capaz de hacerlo: Leishmania donovani, que se multiplica precisamente (como amastigote) dentro de los macrófagos del sistema mononuclear fagocítico.",
    "b": "Enterocytozoon bieneusi es un microsporidio que infecta el epitelio intestinal, no las células del sistema mononuclear fagocítico.",
    "c": "Correcto: Leishmania es el protozoo característico capaz de habitar y multiplicarse (como amastigote) dentro de las células del sistema mononuclear fagocítico, fundamentalmente macrófagos.",
    "d": "Giardia intestinalis es un protozoo extracelular que se adhiere a la mucosa del intestino delgado mediante su disco adhesivo, no invade macrófagos.",
    "e": "Cyclospora sp. es un coccidio intestinal que infecta el epitelio intestinal, no las células del sistema mononuclear fagocítico."
  },
  "repetida": true
},

{
  "id": "t15-018",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cuál es la muestra biológica adecuada para el diagnóstico de la leishmaniosis visceral, considerada la de referencia por su buen equilibrio entre sensibilidad y seguridad para el paciente?",
  "opciones": { "a": "La muestra de líquido cefalorraquídeo", "b": "La muestra de sangre periférica exclusivamente, sin ningún otro procedimiento", "c": "El aspirado de médula ósea", "d": "La biopsia muscular", "e": "La biopsia hepática" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El LCR no es la muestra de elección para la leishmaniosis visceral, que afecta fundamentalmente al sistema mononuclear fagocítico (médula ósea, bazo, hígado, ganglios), no al sistema nervioso central.",
    "b": "La sangre periférica puede emplearse en algunos protocolos, pero la sensibilidad del examen directo en sangre es mucho menor que la del aspirado de médula ósea, que es la muestra de referencia clásica.",
    "c": "Correcto: el aspirado de médula ósea es la muestra biológica de referencia para el diagnóstico de la leishmaniosis visceral, ya que permite observar los amastigotes intracelulares con una sensibilidad razonable y un riesgo de complicaciones (sangrado) menor que el aspirado esplénico. Este dato coincide con el hecho verificado de fuentes de examen reales ('aspirado de médula: leishmaniosis visceral') y con el conocimiento consolidado de la parasitología clínica.",
    "d": "La biopsia muscular no es la muestra característica para el diagnóstico de la leishmaniosis visceral; es más relevante en el diagnóstico de otras entidades, como la triquinosis.",
    "e": "La biopsia hepática no es la muestra de primera elección para el diagnóstico de la leishmaniosis visceral, siendo el aspirado de médula ósea la técnica de referencia habitual."
  },
  "repetida": true
},

{
  "id": "t15-019",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿En qué parasitosis se podría detectar la proteína HRP-2 (histidine-rich protein 2) en sangre mediante un test rápido?",
  "opciones": { "a": "La leishmaniosis visceral", "b": "La filariosis", "c": "La tripanosomiasis", "d": "El paludismo, ya que la HRP-2 es una proteína específica de Plasmodium falciparum", "e": "La esquistosomiasis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La leishmaniosis visceral no se diagnostica mediante la detección de HRP-2, una proteína específica de Plasmodium falciparum.",
    "b": "La filariosis no se diagnostica mediante HRP-2; su diagnóstico se basa en la detección de microfilarias en sangre o piel, según la especie.",
    "c": "La tripanosomiasis no se diagnostica mediante HRP-2; su diagnóstico se basa en la observación de tripomastigotes en sangre o LCR según la fase.",
    "d": "Correcto: la proteína HRP-2 (histidine-rich protein 2) es específica de Plasmodium falciparum, y su detección en sangre mediante tests rápidos inmunocromatográficos es una de las técnicas empleadas para el diagnóstico rápido del paludismo por esta especie.",
    "e": "La esquistosomiasis no se diagnostica mediante HRP-2; su diagnóstico se basa en la detección de huevos característicos en heces u orina, según la especie."
  },
  "repetida": true
},

{
  "id": "t15-020",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "En un frotis de sangre periférica se observa un protozoo intraeritrocitario con forma de anillo. ¿Qué parásito es el más probable?",
  "opciones": { "a": "Toxoplasma gondii", "b": "Schistosoma haematobium", "c": "Trypanosoma brucei", "d": "Leishmania donovani", "e": "Plasmodium falciparum" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Toxoplasma gondii no adopta una forma de anillo intraeritrocitario en sangre periférica; su forma de diseminación aguda es el taquizoíto, con una morfología distinta.",
    "b": "Schistosoma haematobium es un trematodo tisular cuyos huevos se eliminan por orina; no circula en forma de anillo dentro de eritrocitos.",
    "c": "Trypanosoma brucei es un protozoo extracelular en sangre, con forma alargada y flagelo, no adopta una forma de anillo intraeritrocitario.",
    "d": "Leishmania donovani no circula libremente en sangre periférica en forma de anillo intraeritrocitario; se localiza como amastigote intracelular en macrófagos de órganos como médula ósea o bazo.",
    "e": "Correcto: la forma de 'anillo' (trofozoíto joven en anillo de sello) dentro de los eritrocitos es característica de las especies de Plasmodium, siendo Plasmodium falciparum la especie que produce las formas de anillo más finas y que además puede confirmarse con la detección de la proteína HRP-2."
  },
  "repetida": true
},

{
  "id": "t15-021",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué alteración morfológica de los eritrocitos infectados es característica de Plasmodium falciparum, y permite diferenciarlo de otras especies de Plasmodium?",
  "opciones": { "a": "Los puntos de Schüffner, característicos de P. falciparum", "b": "La formación de microfilarias dentro del eritrocito", "c": "Los puntos o hendiduras de Maurer", "d": "La ausencia total de cualquier alteración eritrocitaria", "e": "La presencia de amastigotes intraeritrocitarios" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Los puntos de Schüffner son característicos de Plasmodium vivax y Plasmodium ovale, no de P. falciparum, que se asocia a los puntos/hendiduras de Maurer.",
    "b": "Las microfilarias son formas larvarias de nematodos filariales, sin relación con las alteraciones eritrocitarias producidas por Plasmodium falciparum.",
    "c": "Correcto: los puntos o hendiduras de Maurer en los eritrocitos infectados son característicos de Plasmodium falciparum, permitiendo diferenciarlo de otras especies de Plasmodium en el frotis de sangre.",
    "d": "P. falciparum sí produce alteraciones características visibles en el eritrocito infectado (los puntos de Maurer), no una ausencia de alteraciones.",
    "e": "Los amastigotes son formas propias de Leishmania y Trypanosoma cruzi, no de Plasmodium, que no adopta esta forma morfológica."
  },
  "repetida": false
},

{
  "id": "t15-022",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿En qué tejidos u órganos se pueden formar los merozoítos de Plasmodium sp. a lo largo de su ciclo biológico en el ser humano?",
  "opciones": { "a": "Exclusivamente en el tejido muscular", "b": "Exclusivamente en el sistema nervioso central", "c": "Exclusivamente en el tejido renal", "d": "Exclusivamente en el tejido pulmonar", "e": "En los hepatocitos (fase exoeritrocitaria) y en los glóbulos rojos (fase eritrocitaria)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El tejido muscular no es una localización característica de la formación de merozoítos de Plasmodium en el ciclo humano.",
    "b": "El sistema nervioso central puede verse afectado en la malaria cerebral grave por secuestro de eritrocitos infectados, pero no es el lugar de formación de los merozoítos, que ocurre en hígado y eritrocitos.",
    "c": "El tejido renal no es una localización característica de la formación de merozoítos de Plasmodium en el ciclo humano.",
    "d": "El tejido pulmonar no es una localización característica del ciclo humano de Plasmodium; los merozoítos se forman en el hígado y en los eritrocitos.",
    "e": "Correcto: los merozoítos de Plasmodium se forman en dos localizaciones sucesivas del ciclo humano: primero en los hepatocitos (fase exoeritrocitaria o hepática, tras la inoculación de esporozoítos), y después en los glóbulos rojos (fase eritrocitaria, responsable de los episodios febriles cíclicos)."
  },
  "repetida": false
},

{
  "id": "t15-023",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "Para el diagnóstico microscópico del paludismo (gota gruesa y frotis sanguíneo) y de otras hemoparasitosis como la tripanosomiasis o las filarias, ¿qué tipo de muestra de sangre se recomienda?",
  "opciones": { "a": "Sangre sin anticoagulante, obtenida habitualmente por punción digital", "b": "Sangre citratada exclusivamente", "c": "Sangre heparinizada obligatoriamente en todos los casos", "d": "Plasma exclusivamente, sin ningún elemento celular", "e": "Suero exclusivamente, tras centrifugación completa" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: para el diagnóstico del paludismo y de otras hemoparasitosis (tripanosomiasis, filarias) mediante frotis o gota gruesa, se recomienda emplear sangre sin anticoagulante, obtenida habitualmente por punción digital directa, para preservar mejor la morfología de los parásitos.",
    "b": "La sangre citratada no es la recomendación estándar para estas técnicas microscópicas de hemoparasitosis, que buscan preservar la morfología natural de los elementos sanguíneos y del parásito.",
    "c": "No se recomienda de forma obligatoria la heparinización para estas técnicas; se prefiere la sangre sin anticoagulante.",
    "d": "El plasma, obtenido tras centrifugación con anticoagulante, tampoco contiene los elementos celulares necesarios para visualizar los parásitos intraeritrocitarios o extracelulares en sangre.",
    "e": "El suero (líquido tras la retracción del coágulo) carece de los elementos celulares (eritrocitos, leucocitos) donde se buscan los parásitos, por lo que no es la muestra adecuada para esta finalidad."
  },
  "repetida": false
},

{
  "id": "t15-024",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué diferencia principal existe entre el frotis sanguíneo y la preparación de gota gruesa en el diagnóstico de las hemoparasitosis?",
  "opciones": { "a": "En la gota gruesa la sangre no se fija (lo que permite la lisis/dehemoglobinización de los eritrocitos durante la tinción), mientras que el frotis sí se fija, preservando mejor la morfología para la identificación de especie", "b": "En la gota gruesa se observa mucha menos cantidad de sangre que en el frotis", "c": "En el frotis la sangre no se fija nunca", "d": "Ambas técnicas son exactamente idénticas en su procesamiento", "e": "En el frotis nunca se pueden observar los puntos de Schüffner" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en la preparación de gota gruesa la sangre NO se fija, lo que permite que durante la tinción se produzca la lisis de los eritrocitos (dehemoglobinización), concentrando así los parásitos en un volumen mayor de sangre para aumentar la sensibilidad; el frotis, en cambio, sí se fija (habitualmente con metanol), preservando la morfología intacta de los eritrocitos y facilitando la identificación de la especie de Plasmodium.",
    "b": "Es al revés: en la gota gruesa se examina una capa de sangre más gruesa y, por tanto, una mayor cantidad de sangre por campo que en el frotis, lo que aumenta su sensibilidad para detectar parasitemias bajas.",
    "c": "Es al contrario: es el frotis el que SÍ se fija (para preservar la morfología celular), mientras que la gota gruesa no se fija, precisamente para permitir la lisis de los eritrocitos.",
    "d": "Se trata de dos técnicas de procesamiento distintas, con objetivos complementarios: la gota gruesa prioriza la sensibilidad (detección) y el frotis prioriza la preservación morfológica (identificación de especie).",
    "e": "Los puntos de Schüffner sí pueden observarse en un frotis sanguíneo bien realizado, ya que este preserva la morfología de los eritrocitos infectados, siendo precisamente donde se buscan estas alteraciones puntiformes."
  },
  "repetida": false
},

{
  "id": "t15-025",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué protozoo es responsable de la enfermedad del sueño o tripanosomiasis africana?",
  "opciones": { "a": "Leishmania donovani", "b": "Toxoplasma gondii", "c": "Trypanosoma cruzi", "d": "Plasmodium vivax", "e": "Trypanosoma brucei gambiense (y también T. brucei rhodesiense)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Leishmania donovani es el agente de la leishmaniosis visceral, una entidad clínica distinta de la tripanosomiasis africana.",
    "b": "Toxoplasma gondii produce la toxoplasmosis, sin ninguna relación con la enfermedad del sueño.",
    "c": "Trypanosoma cruzi es el agente de la enfermedad de Chagas (tripanosomiasis americana), una entidad geográfica y clínicamente distinta de la enfermedad del sueño africana.",
    "d": "Plasmodium vivax es un agente del paludismo, sin ninguna relación con la tripanosomiasis africana.",
    "e": "Correcto: la enfermedad del sueño, o tripanosomiasis africana, está producida por Trypanosoma brucei gambiense (forma crónica, en África occidental y central) y por Trypanosoma brucei rhodesiense (forma más aguda, en África oriental), transmitida por la mosca tsé-tsé."
  },
  "repetida": false
},

{
  "id": "t15-026",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cuál es la forma polimórfica de Trypanosoma brucei gambiense que se puede localizar en la sangre del hombre?",
  "opciones": { "a": "El esporozoíto", "b": "El merozoíto", "c": "El tripomastigote", "d": "El ooquiste", "e": "El amastigote exclusivamente" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "El esporozoíto es una forma característica del ciclo de Plasmodium y Toxoplasma, no de Trypanosoma brucei gambiense.",
    "b": "El merozoíto es una forma característica del ciclo de Plasmodium, no de Trypanosoma brucei gambiense.",
    "c": "Correcto: en el ser humano, Trypanosoma brucei gambiense circula en sangre en forma de tripomastigote, una forma extracelular alargada, flagelada, de morfología polimórfica (variable), que puede observarse directamente en un frotis de sangre periférica.",
    "d": "El ooquiste es una forma característica de coccidios como Toxoplasma o Cryptosporidium, no de Trypanosoma brucei gambiense.",
    "e": "El amastigote es la forma intracelular característica de Trypanosoma cruzi (en tejidos) y de Leishmania, no la forma circulante de Trypanosoma brucei gambiense en sangre."
  },
  "repetida": false
},

{
  "id": "t15-027",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Cómo se diagnostica la fase crónica o meningoencefálica de la tripanosomiasis africana?",
  "opciones": { "a": "Detectando tripomastigotes de Trypanosoma cruzi en el LCR", "b": "Mediante la prueba de la coagulasa", "c": "Detectando tripomastigotes de Trypanosoma brucei gambiense en el líquido cefalorraquídeo (LCR)", "d": "Detectando amastigotes de Trypanosoma cruzi en el LCR", "e": "Mediante un urocultivo convencional" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Trypanosoma cruzi no es el agente de la tripanosomiasis africana; el agente de la fase meningoencefálica de esta enfermedad es Trypanosoma brucei gambiense.",
    "b": "La prueba de la coagulasa se emplea para identificar Staphylococcus aureus, sin ninguna relación con el diagnóstico de la tripanosomiasis africana.",
    "c": "Correcto: en la fase crónica o meningoencefálica de la tripanosomiasis africana, el parásito invade el sistema nervioso central, por lo que el diagnóstico se establece detectando tripomastigotes de Trypanosoma brucei gambiense en el líquido cefalorraquídeo.",
    "d": "Trypanosoma cruzi es el agente de la enfermedad de Chagas (tripanosomiasis americana), una entidad distinta de la tripanosomiasis africana, y además no adopta la forma amastigote en el LCR de la fase meningoencefálica africana.",
    "e": "El urocultivo se emplea para el diagnóstico de infecciones urinarias bacterianas, sin relación con el diagnóstico de la tripanosomiasis africana."
  },
  "repetida": false
},

{
  "id": "t15-028",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "En un frotis de sangre aparece un protozoo con un flagelo recurrente que forma una membrana ondulante. ¿Qué parásito puede ser?",
  "opciones": { "a": "Schistosoma haematobium", "b": "Leishmania donovani", "c": "Trypanosoma brucei", "d": "Plasmodium falciparum", "e": "Toxoplasma gondii" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Schistosoma haematobium es un trematodo tisular, morfológicamente muy distinto de un protozoo flagelado como Trypanosoma, y no circula de esta forma en sangre.",
    "b": "Leishmania donovani no circula en sangre periférica como forma flagelada extracelular con membrana ondulante; se localiza como amastigote (sin flagelo externo visible) dentro de macrófagos tisulares.",
    "c": "Correcto: Trypanosoma brucei presenta un flagelo recurrente unido al cuerpo del parásito por una membrana ondulante, una característica morfológica distintiva visible en un frotis de sangre periférica, que ayuda a diferenciarlo de otros hemoparásitos.",
    "d": "Plasmodium falciparum se observa dentro de los eritrocitos en forma de anillo, sin la morfología de flagelo y membrana ondulante característica de los tripanosomas.",
    "e": "Toxoplasma gondii no presenta esta morfología característica de flagelo con membrana ondulante en sangre periférica."
  },
  "repetida": false
},

{
  "id": "t15-029",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "En un aspirado de ganglio linfático se observan amastigotes. ¿A qué parásito corresponden con mayor probabilidad, en el contexto de la enfermedad de Chagas?",
  "opciones": { "a": "Onchocerca volvulus", "b": "Trypanosoma cruzi", "c": "Trypanosoma brucei gambiense", "d": "Toxoplasma gondii exclusivamente", "e": "Plasmodium falciparum" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Onchocerca volvulus es un nematodo filarial que se localiza en nódulos subcutáneos y piel, sin adoptar la forma amastigote intracelular característica de Trypanosoma cruzi en ganglios linfáticos.",
    "b": "Correcto: en la enfermedad de Chagas, Trypanosoma cruzi se multiplica en forma de amastigote dentro de las células de diversos tejidos (incluidos los ganglios linfáticos, el corazón y el músculo liso), pudiendo detectarse mediante un aspirado de ganglio linfático, especialmente en la fase aguda/diseminada de la infección.",
    "c": "Trypanosoma brucei gambiense circula en sangre y LCR en forma de tripomastigote, no como amastigote en tejidos como los ganglios linfáticos; es el agente de la tripanosomiasis africana, no de la enfermedad de Chagas.",
    "d": "Aunque Toxoplasma gondii puede replicarse intracelularmente, la forma amastigote descrita en el contexto de la enfermedad de Chagas y los ganglios linfáticos corresponde específicamente a Trypanosoma cruzi.",
    "e": "Plasmodium falciparum se localiza dentro de los eritrocitos, no como amastigote en un aspirado de ganglio linfático."
  },
  "repetida": false
},

{
  "id": "t15-030",
  "tema": "Parasitología: protozoos de importancia clínica",
  "pregunta": "¿Qué protozoo de vida libre puede producir una meningoencefalitis amebiana primaria, diagnosticada mediante el estudio del LCR o una biopsia cerebral?",
  "opciones": { "a": "Cryptosporidium sp.", "b": "Giardia intestinalis", "c": "Isospora belli", "d": "Naegleria fowleri", "e": "Trichomonas vaginalis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Cryptosporidium sp. es un coccidio intestinal, sin relación con la meningoencefalitis amebiana primaria, que es producida específicamente por amebas de vida libre como Naegleria fowleri.",
    "b": "Giardia intestinalis es un protozoo que afecta al intestino delgado, sin capacidad de producir meningoencefalitis.",
    "c": "Isospora belli es un coccidio intestinal, sin relación con la meningoencefalitis amebiana primaria.",
    "d": "Correcto: Naegleria fowleri es una ameba de vida libre presente en aguas dulces cálidas, capaz de causar una meningoencefalitis amebiana primaria, una infección grave y de curso fulminante, diagnosticada mediante el estudio directo del LCR (observación de trofozoítos móviles) o mediante biopsia cerebral.",
    "e": "Trichomonas vaginalis es un protozoo del tracto genital, sin capacidad de producir meningoencefalitis amebiana."
  },
  "repetida": false
},

{
  "id": "t16-001",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "De los siguientes parásitos, ¿cuál de ellos, al migrar por distintos órganos durante su ciclo biológico, puede causar daño en el pulmón (síndrome de Löffler)?",
  "opciones": { "a": "Leishmania donovani", "b": "Plasmodium sp.", "c": "Schistosoma haematobium", "d": "Necator americanus", "e": "Enterobius vermicularis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Leishmania donovani se localiza en el sistema mononuclear fagocítico (médula ósea, bazo, hígado), sin una fase de migración pulmonar.",
    "b": "Plasmodium sp. no realiza una migración tisular a través del pulmón; su ciclo humano transcurre entre el hígado (fase exoeritrocitaria) y los eritrocitos (fase eritrocitaria).",
    "c": "Schistosoma haematobium tiene tropismo fundamentalmente por el plexo venoso vesical, produciendo afectación urinaria (hematuria), no una migración pulmonar característica como la de los uncinarias.",
    "d": "Correcto: las larvas filariformes de Necator americanus (y de forma análoga las de Ancylostoma duodenale) penetran a través de la piel, alcanzan el torrente circulatorio, migran a los pulmones, ascienden por el árbol traqueobronquial y son deglutidas para llegar al intestino, pudiendo producir daño pulmonar (síndrome de Löffler) durante esta fase migratoria.",
    "e": "Enterobius vermicularis tiene un ciclo de vida limitado al intestino grueso y a la región perianal, sin fase de migración pulmonar."
  },
  "repetida": true
},

{
  "id": "t16-002",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué es la 'taglina' (molécula de adhesión) en el contexto de la parasitología clínica?",
  "opciones": { "a": "Una toxina presente en algunos microsporidios", "b": "Un factor de virulencia que confiere a algunos protozoos resistencia a fármacos", "c": "Una proteasa presente en Entamoeba histolytica", "d": "Una molécula de adhesión a los tejidos del hospedador presente en algunos helmintos", "e": "Una molécula de adhesión a los tejidos del hospedador presente exclusivamente en Giardia intestinalis" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "No corresponde a una toxina de microsporidios; su definición corresponde a una molécula de adhesión de algunos helmintos.",
    "b": "No se describe como un factor de resistencia a fármacos en protozoos; su función es la adhesión tisular en helmintos.",
    "c": "No corresponde a una proteasa de Entamoeba histolytica (que posee sus propios factores de virulencia, como la lectina Gal/GalNAc); la taglina se describe específicamente en el contexto de los helmintos.",
    "d": "Correcto: la taglina es una molécula de adhesión a los tejidos del hospedador presente en algunos helmintos, que facilita su fijación e interacción con el organismo parasitado.",
    "e": "No es una molécula exclusiva de Giardia intestinalis (un protozoo); la taglina se describe como propia de algunos helmintos."
  },
  "repetida": true
},

{
  "id": "t16-003",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué parásito puede producir una oxiuriasis vaginal en el hospedador, al migrar la hembra grávida desde la región perianal hacia la vagina?",
  "opciones": { "a": "Ancylostoma duodenale", "b": "Trichomonas vaginalis", "c": "Taenia sp.", "d": "Áscaris lumbricoides", "e": "Enterobius vermicularis" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Ancylostoma duodenale es un nematodo que se localiza en el intestino delgado, fijándose a la mucosa mediante su cápsula bucal, sin el comportamiento migratorio hacia la región vaginal característico de Enterobius.",
    "b": "Trichomonas vaginalis es un protozoo (no un helminto/oxiuro) que produce la tricomoniasis vaginal, una entidad clínica distinta de la oxiuriasis vaginal por migración de Enterobius.",
    "c": "Taenia sp. es un cestodo intestinal que no tiene el comportamiento migratorio nocturno hacia la región perianal/vaginal característico de Enterobius.",
    "d": "Áscaris lumbricoides es un nematodo intestinal de gran tamaño sin el comportamiento migratorio nocturno perianal característico del oxiuro.",
    "e": "Correcto: Enterobius vermicularis (el oxiuro) es un nematodo intestinal cuya hembra grávida migra durante la noche hacia la región perianal para poner sus huevos, pudiendo en ocasiones desviarse hacia la vagina y producir una oxiuriasis vaginal, con la irritación correspondiente."
  },
  "repetida": true
},

{
  "id": "t16-004",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué técnica facilita el diagnóstico de la oxiuriasis (Enterobius vermicularis)?",
  "opciones": { "a": "La tinción con Giemsa de un frotis sanguíneo", "b": "La técnica de flotación en solución saturada de NaCl", "c": "La tinción tricrómica", "d": "La técnica de Graham, mediante una cinta adhesiva aplicada en la región perianal", "e": "La concentración con formalina-éter de una muestra de heces" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La tinción de Giemsa se emplea sobre todo para hemoparásitos (Plasmodium, Trypanosoma, Leishmania), no para el diagnóstico de la oxiuriasis.",
    "b": "La técnica de flotación con NaCl es útil para huevos de otros nematodos intestinales, pero no es la técnica de elección para el oxiuro, cuyos huevos se depositan fuera del tracto digestivo, en la piel perianal.",
    "c": "La tinción tricrómica se emplea para la identificación de protozoos intestinales (trofozoítos), no para el diagnóstico del oxiuro.",
    "d": "Correcto: la técnica de Graham consiste en aplicar una cinta adhesiva transparente sobre la piel perianal, habitualmente a primera hora de la mañana, para recoger los huevos que la hembra de Enterobius vermicularis deposita en esa zona durante la noche, y después observarla al microscopio.",
    "e": "La concentración con formalina-éter es una técnica general para el examen de heces, pero no es la más adecuada para el oxiuro, ya que sus huevos rara vez se encuentran en las heces (se depositan en la piel perianal, no dentro del intestino)."
  },
  "repetida": false
},

{
  "id": "t16-005",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Cuál de los siguientes parásitos puede localizarse en una muestra de esputo, siendo responsable de hemoptisis crónica al migrar hasta el parénquima pulmonar?",
  "opciones": { "a": "Schistosoma mansoni", "b": "Plasmodium falciparum", "c": "Paragonimus westermani", "d": "Isospora belli", "e": "Taenia saginata" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Schistosoma mansoni tiene tropismo por el sistema venoso mesentérico/portal, eliminando sus huevos en heces, no en esputo.",
    "b": "Plasmodium falciparum se localiza en los eritrocitos, no en el pulmón, y no se detecta en una muestra de esputo.",
    "c": "Correcto: Paragonimus westermani es un trematodo (duela pulmonar) cuya forma adulta se localiza en el parénquima pulmonar, donde produce huevos que pueden expulsarse con la tos, permitiendo su detección en una muestra de esputo, con un cuadro clínico de hemoptisis crónica que puede confundirse con tuberculosis.",
    "d": "Isospora belli es un coccidio intestinal cuya forma diagnóstica (ooquistes) se encuentra en heces, no en esputo.",
    "e": "Taenia saginata es un cestodo intestinal cuyos proglótidos se eliminan en heces, no se localiza ni se detecta en esputo."
  },
  "repetida": true
},

{
  "id": "t16-006",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Cuál de las siguientes filarias NO se detecta habitualmente en una muestra de sangre, sino que requiere un raspado de piel para su diagnóstico?",
  "opciones": { "a": "Todas las filarias mencionadas se detectan habitualmente en sangre", "b": "Onchocerca volvulus", "c": "Wuchereria bancrofti", "d": "Brugia malayi", "e": "Loa loa" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "No todas se detectan en sangre: Onchocerca volvulus es la excepción, ya que sus microfilarias se localizan en piel y tejido subcutáneo, no en sangre circulante.",
    "b": "Correcto: las microfilarias de Onchocerca volvulus no circulan de forma característica en sangre periférica, sino que se localizan en la piel y el tejido subcutáneo, por lo que su diagnóstico se realiza mediante un raspado ('snip') de piel, a diferencia de otras filarias que sí se detectan en sangre.",
    "c": "Wuchereria bancrofti es una filaria linfática cuyas microfilarias sí circulan en sangre periférica (con periodicidad nocturna), siendo la sangre la muestra habitual para su diagnóstico.",
    "d": "Brugia malayi, al igual que W. bancrofti, es una filaria linfática cuyas microfilarias sí se detectan habitualmente en sangre periférica.",
    "e": "Loa loa es una filaria cuyas microfilarias también circulan en sangre periférica (con periodicidad diurna), siendo la sangre la muestra habitual para su diagnóstico."
  },
  "repetida": false
},

{
  "id": "t16-007",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué muestra biológica es la adecuada para el diagnóstico de la oncocercosis (Onchocerca volvulus)?",
  "opciones": { "a": "Un aspirado de médula ósea", "b": "Un exudado faríngeo", "c": "Una muestra de orina", "d": "Un raspado o biopsia de piel", "e": "Una muestra de sangre exclusivamente" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El aspirado de médula ósea se emplea en el diagnóstico de la leishmaniosis visceral, sin relación con la oncocercosis.",
    "b": "El exudado faríngeo no tiene relación con el diagnóstico de la oncocercosis, una infección cutánea/subcutánea.",
    "c": "La orina no es la muestra adecuada para el diagnóstico de la oncocercosis; es la muestra característica para el diagnóstico de Schistosoma haematobium.",
    "d": "Correcto: dado que las microfilarias de Onchocerca volvulus se localizan en la piel y el tejido subcutáneo (no en sangre), el diagnóstico se realiza mediante un raspado o biopsia superficial de piel, en el que se buscan las microfilarias emergiendo del tejido.",
    "e": "La sangre no es la muestra de elección para Onchocerca volvulus, a diferencia de otras filarias (Wuchereria, Brugia, Loa loa), ya que sus microfilarias no circulan de forma característica en sangre periférica."
  },
  "repetida": false
},

{
  "id": "t16-008",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué complicación ocular grave puede producir Onchocerca volvulus, dando lugar a la denominada 'ceguera de los ríos'?",
  "opciones": { "a": "Nunca puede afectar al ojo bajo ninguna circunstancia", "b": "Un orzuelo recidivante", "c": "Queratitis, que puede evolucionar a una queratitis esclerosante y producir ceguera", "d": "Una conjuntivitis vírica banal y autolimitada", "e": "Una endoftalmitis exclusivamente bacteriana" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Es justo lo contrario: la afectación ocular es una de las complicaciones más temidas y características de la oncocercosis, pudiendo llevar a la ceguera si no se trata.",
    "b": "El orzuelo es una infección bacteriana localizada de las glándulas sebáceas del párpado (por S. aureus), una entidad clínica completamente distinta de la afectación ocular por Onchocerca volvulus.",
    "c": "Correcto: las microfilarias de Onchocerca volvulus pueden migrar hasta el ojo, produciendo lesiones oculares que incluyen queratitis, la cual puede evolucionar a una queratitis esclerosante crónica y conducir a la ceguera, fenómeno conocido popularmente como 'ceguera de los ríos', asociado a la proximidad de los criaderos del vector (moscas del género Simulium) a los ríos.",
    "d": "La afectación ocular por Onchocerca no es una simple conjuntivitis vírica banal, sino un proceso crónico y potencialmente cegador relacionado con la migración de microfilarias al ojo.",
    "e": "No se trata de una endoftalmitis bacteriana; la afectación ocular en la oncocercosis está producida por las propias microfilarias del parásito y la respuesta inflamatoria que generan."
  },
  "repetida": false
},

{
  "id": "t16-009",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué técnica se emplea para recuperar larvas de nematodos, como las de Strongyloides stercoralis, a partir de una muestra de heces?",
  "opciones": { "a": "El método de Baermann", "b": "La prueba de la coagulasa", "c": "El test de CAMP", "d": "El medio de Thayer-Martin", "e": "La flotación en solución saturada de NaCl" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el método de Baermann permite recuperar larvas de nematodos (como las de Strongyloides stercoralis) a partir de una muestra de heces, aprovechando el termo-hidrotropismo de las larvas, que emigran activamente hacia el agua templada, sedimentando y concentrándose para su posterior observación.",
    "b": "La prueba de la coagulasa se emplea para Staphylococcus aureus, sin relación con la recuperación de larvas parasitarias.",
    "c": "El test de CAMP se emplea para la identificación de Streptococcus agalactiae, sin ninguna relación con la parasitología ni con la recuperación de larvas de nematodos.",
    "d": "El medio de Thayer-Martin es un medio de cultivo bacteriano específico para Neisseria gonorrhoeae, sin ninguna relación con la parasitología.",
    "e": "La flotación en solución saturada de NaCl es útil sobre todo para huevos de nematodos (más ligeros), no es la técnica específica descrita para recuperar larvas de Strongyloides."
  },
  "repetida": false
},

{
  "id": "t16-010",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "Si en una muestra de heces frescas aparecen larvas (no huevos), ¿a qué parásito es más probable que pertenezcan?",
  "opciones": { "a": "Ancylostoma duodenale", "b": "Strongyloides stercoralis", "c": "Áscaris lumbricoides", "d": "Taenia solium", "e": "Echinococcus granulosus" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Ancylostoma duodenale elimina huevos en heces recién emitidas (las larvas eclosionan más tarde, si la muestra se retrasa), no larvas de forma característica en heces frescas recién emitidas como sí ocurre con Strongyloides.",
    "b": "Correcto: Strongyloides stercoralis es un nematodo característico porque en las heces frescas se eliminan larvas (rabditiformes), no huevos, a diferencia de la mayoría del resto de nematodos intestinales, que eliminan huevos.",
    "c": "Áscaris lumbricoides elimina huevos característicos en las heces, no larvas, a diferencia de Strongyloides stercoralis.",
    "d": "Taenia solium elimina proglótidos y huevos en las heces, no larvas de forma característica como Strongyloides.",
    "e": "Echinococcus granulosus no elimina larvas ni huevos detectables de forma característica en las heces humanas, ya que el ser humano actúa como hospedador intermediario (formando quistes hidatídicos), no como hospedador definitivo que elimina huevos por heces."
  },
  "repetida": false
},

{
  "id": "t16-011",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Cuál es la localización tisular característica de la forma adulta de Trichinella spiralis en el ser humano, tras la ingesta de carne poco cocinada infectada?",
  "opciones": { "a": "Exclusivamente la piel", "b": "Exclusivamente el hígado", "c": "El músculo esquelético, donde las larvas enquistadas producen miositis", "d": "Exclusivamente el riñón", "e": "Exclusivamente el sistema nervioso central" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La piel no es la localización característica de Trichinella spiralis; su localización clásica es el músculo esquelético.",
    "b": "El hígado no es la localización característica de Trichinella spiralis; su localización clásica es el músculo esquelético.",
    "c": "Correcto: tras la ingesta de carne poco cocinada con larvas enquistadas de Trichinella spiralis, las larvas se liberan en el intestino, se desarrollan a adultos, y las nuevas larvas producidas migran y se enquistan característicamente en el músculo esquelético, produciendo miositis y elevación de enzimas musculares (como la creatina-quinasa).",
    "d": "El riñón no es la localización característica de Trichinella spiralis; su localización clásica es el músculo esquelético.",
    "e": "El sistema nervioso central no es la localización característica de Trichinella spiralis, a diferencia de otras parasitosis como la neurocisticercosis por Taenia solium."
  },
  "repetida": false
},

{
  "id": "t16-012",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Cuál es la técnica de concentración más adecuada para detectar huevos de Schistosoma en heces, dada su alta densidad?",
  "opciones": { "a": "El método de Baermann", "b": "La flotación en solución saturada de NaCl", "c": "La flotación en sacarosa exclusivamente", "d": "La sedimentación con formalina-éter", "e": "La tinción de Ziehl-Neelsen" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El método de Baermann se emplea para recuperar larvas de nematodos (como Strongyloides), no huevos de trematodos como Schistosoma.",
    "b": "La flotación en solución saturada de NaCl es más adecuada para huevos de nematodos, más ligeros, que sí flotan bien en esta solución hipertónica; los huevos de Schistosoma, más densos, se detectan mejor mediante sedimentación.",
    "c": "La flotación en sacarosa no es la técnica de elección clásica descrita para los huevos de Schistosoma, que se detectan mejor mediante sedimentación.",
    "d": "Correcto: los huevos de Schistosoma son relativamente densos y no flotan bien en las soluciones empleadas en las técnicas de flotación, por lo que la técnica de concentración más adecuada para su detección es la sedimentación con formalina-éter, que concentra los elementos más pesados en el sedimento.",
    "e": "La tinción de Ziehl-Neelsen se emplea para detectar ooquistes ácido-alcohol resistentes (como Cryptosporidium), no para la detección de huevos de Schistosoma."
  },
  "repetida": false
},

{
  "id": "t16-013",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué parásito puede detectarse en una muestra de orina, produciendo hematuria por su localización en el plexo venoso vesical?",
  "opciones": { "a": "Toxoplasma gondii", "b": "Trypanosoma cruzi", "c": "Ancylostoma duodenale", "d": "Giardia intestinalis", "e": "Schistosoma haematobium" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Toxoplasma gondii no se detecta característicamente en orina; su diagnóstico se basa fundamentalmente en serología (IgG/IgM) o PCR en líquido amniótico en el contexto prenatal.",
    "b": "Trypanosoma cruzi no se detecta característicamente en orina; su diagnóstico se basa en la observación de tripomastigotes en sangre (fase aguda) o técnicas serológicas (fase crónica).",
    "c": "Ancylostoma duodenale se diagnostica mediante examen de heces (huevos), no mediante muestra de orina.",
    "d": "Giardia intestinalis se diagnostica mediante examen de heces o aspirado duodenal, no mediante muestra de orina.",
    "e": "Correcto: Schistosoma haematobium tiene un tropismo característico por el plexo venoso vesical (de la vejiga urinaria), donde los huevos son eliminados a través de la pared vesical hacia la orina, produciendo hematuria y siendo la orina la muestra biológica adecuada para su diagnóstico."
  },
  "repetida": false
},

{
  "id": "t16-014",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿A qué parásito puede deberse la aparición de varices esofágicas, como consecuencia de la fibrosis hepática (fibrosis en 'tubo de pipa' de Symmers) e hipertensión portal que produce?",
  "opciones": { "a": "Toxoplasma gondii", "b": "Entamoeba histolytica", "c": "Entamoeba coli", "d": "Giardia intestinalis", "e": "Schistosoma mansoni" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Toxoplasma gondii no produce fibrosis hepática periportal ni hipertensión portal con varices esofágicas.",
    "b": "Entamoeba histolytica puede producir abscesos hepáticos amebianos, pero no es la causa clásica de fibrosis periportal e hipertensión portal con varices esofágicas, que es característica de Schistosoma mansoni.",
    "c": "Entamoeba coli es una ameba comensal no patógena, sin capacidad de producir fibrosis hepática ni hipertensión portal.",
    "d": "Giardia intestinalis afecta al intestino delgado sin producir fibrosis hepática ni hipertensión portal.",
    "e": "Correcto: Schistosoma mansoni tiene tropismo por el sistema venoso mesentérico/portal; los huevos atrapados en el hígado generan una intensa reacción granulomatosa que conduce a fibrosis hepática periportal (fibrosis 'en tubo de pipa' de Symmers), hipertensión portal y, como consecuencia, varices esofágicas."
  },
  "repetida": false
},

{
  "id": "t16-015",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Cómo se obtiene habitualmente el diagnóstico de certeza de una anisakidosis (infección por larvas de Anisakis)?",
  "opciones": { "a": "Localizando larvas en una muestra concentrada de heces", "b": "Mediante endoscopia digestiva, localizando la larva directamente sobre la mucosa gástrica", "c": "Mediante un test de intradermorreacción de Montenegro", "d": "Mediante hemocultivo convencional", "e": "Localizando larvas en una muestra fresca de heces" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La concentración de heces tampoco es el método adecuado, por el mismo motivo: la larva permanece fijada a la mucosa digestiva, siendo la endoscopia la técnica diagnóstica de elección.",
    "b": "Correcto: el diagnóstico más adecuado de una anisakidosis se obtiene mediante endoscopia digestiva, que permite visualizar y en su caso extraer directamente la larva de Anisakis adherida a la mucosa gástrica, sin que sea necesario ni útil buscarla en heces.",
    "c": "La intradermorreacción de Montenegro es específica para el diagnóstico de la leishmaniosis, sin relación con la anisakidosis.",
    "d": "El hemocultivo se emplea para detectar bacteriemia, sin relación con el diagnóstico de la anisakidosis, una parasitosis digestiva localizada.",
    "e": "Las larvas de Anisakis no se detectan de forma fiable en una muestra fresca de heces, ya que la larva se fija a la mucosa gástrica/intestinal y no suele eliminarse íntegra por esta vía en el momento agudo."
  },
  "repetida": false
},

{
  "id": "t16-016",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "En cuanto a la respuesta inmunológica frente a la hidatidosis (Echinococcus granulosus), señale la afirmación correcta",
  "opciones": { "a": "Desaparece siempre si el quiste se rompe", "b": "Es mayor en los quistes hidatídicos hepáticos que en los quistes hidatídicos pulmonares", "c": "Nunca se detectan anticuerpos frente a un quiste hidatídico", "d": "Es idéntica en todas las localizaciones anatómicas del quiste, sin ninguna diferencia", "e": "Es máxima en los quistes hidatídicos calcificados o muertos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "No desaparece siempre; de hecho, la rotura del quiste puede liberar antígenos y en ocasiones intensificar la respuesta inmunológica (con riesgo, además, de reacción anafiláctica grave), no hacerla desaparecer.",
    "b": "Correcto: la respuesta inmunológica (humoral, con producción de anticuerpos detectables) frente a la hidatidosis es mayor cuando el quiste se localiza en el hígado que cuando se localiza en el pulmón, una diferencia relevante a la hora de interpretar la serología según la localización del quiste.",
    "c": "Sí se pueden detectar anticuerpos frente a un quiste hidatídico mediante pruebas serológicas, siendo esta una herramienta diagnóstica empleada en la práctica clínica.",
    "d": "Existe una diferencia relevante según la localización, siendo mayor la respuesta inmunológica en los quistes hepáticos que en los pulmonares, como se ha descrito.",
    "e": "Es al contrario: la respuesta inmunológica suele ser menor o mínima en los quistes calcificados o muertos, ya que hay menos liberación de antígenos activos al organismo del huésped."
  },
  "repetida": false
},

{
  "id": "t16-017",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué técnica serológica es la más adecuada para detectar una neurocisticercosis (infección del sistema nervioso central por la larva de Taenia solium)?",
  "opciones": { "a": "La prueba de la coagulasa", "b": "Una prueba de intradermorreacción cutánea", "c": "La detección mediante Western-blot de uno o más anticuerpos frente a glicoproteínas estructurales específicas", "d": "Una simple prueba de aglutinación en porta", "e": "Un coprocultivo bacteriano convencional" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "La prueba de la coagulasa se emplea para Staphylococcus aureus, sin ninguna relación con el diagnóstico de la neurocisticercosis.",
    "b": "La intradermorreacción cutánea no es la técnica de elección para el diagnóstico de la neurocisticercosis, que se basa en pruebas serológicas específicas como el Western-blot.",
    "c": "Correcto: la técnica serológica más adecuada para el diagnóstico de la neurocisticercosis es la detección mediante Western-blot de uno o más anticuerpos frente a glicoproteínas estructurales específicas de Taenia solium, una técnica de alta sensibilidad y especificidad para esta indicación.",
    "d": "Una simple prueba de aglutinación en porta tiene menor sensibilidad y especificidad que el Western-blot para esta indicación concreta, y no es la técnica de elección descrita.",
    "e": "El coprocultivo bacteriano no tiene ninguna relación con el diagnóstico de la neurocisticercosis, una infección tisular parasitaria del sistema nervioso central, no una infección bacteriana intestinal."
  },
  "repetida": false
},

{
  "id": "t16-018",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿En cuál de las siguientes parasitosis NUNCA se debería plantear la realización de una biopsia como método diagnóstico, por el riesgo grave que conlleva?",
  "opciones": { "a": "La leishmaniosis", "b": "La esquistosomiasis intestinal", "c": "La esquistosomiasis vesical", "d": "La enfermedad de Chagas", "e": "La hidatidosis, por el riesgo de rotura del quiste hidatídico y sus graves consecuencias (diseminación y reacción anafiláctica)" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "En la leishmaniosis, la biopsia (por ejemplo, de piel en la forma cutánea) es una técnica diagnóstica empleada habitualmente, sin el riesgo grave descrito para el quiste hidatídico.",
    "b": "En la esquistosomiasis intestinal, la biopsia de la mucosa rectal/intestinal es de hecho una técnica diagnóstica empleada para detectar huevos del parásito en el tejido, sin la contraindicación grave asociada al quiste hidatídico.",
    "c": "En la esquistosomiasis vesical, la biopsia de la mucosa vesical puede emplearse para detectar huevos del parásito, sin la contraindicación grave asociada específicamente al quiste hidatídico.",
    "d": "En la enfermedad de Chagas sí pueden emplearse biopsias de tejido (por ejemplo, cardiaco) en determinados contextos diagnósticos, sin el riesgo específico de rotura y diseminación descrito para el quiste hidatídico.",
    "e": "Correcto: en la hidatidosis (quiste hidatídico por Echinococcus granulosus) está contraindicada la punción/biopsia directa sin las precauciones adecuadas, ya que existe un riesgo grave de rotura del quiste, con diseminación de su contenido (protoescólices) y riesgo de reacción anafiláctica potencialmente mortal."
  },
  "repetida": false
},

{
  "id": "t16-019",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué parásito produce queratitis y otras lesiones oculares graves que pueden derivar en ceguera, siendo transmitido por la picadura de moscas del género Simulium?",
  "opciones": { "a": "Entamoeba hartmanni", "b": "Iodamoeba butschlii", "c": "Giardia intestinalis", "d": "Dracunculus medinensis", "e": "Onchocerca volvulus" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Entamoeba hartmanni es una ameba intestinal comensal no patógena, sin relación con la queratitis.",
    "b": "Iodamoeba butschlii es también una ameba intestinal comensal no patógena, sin relación con la queratitis.",
    "c": "Giardia intestinalis es un protozoo intestinal, sin capacidad de producir queratitis ni otras lesiones oculares.",
    "d": "Dracunculus medinensis produce la dracunculosis, con la característica emergencia del gusano adulto hembra a través de una ampolla cutánea (habitualmente en la pierna), sin la afectación ocular característica de Onchocerca.",
    "e": "Correcto: Onchocerca volvulus, transmitida por la picadura de moscas del género Simulium que crían en ríos de corriente rápida, puede producir queratitis y otras lesiones oculares graves (oncocercosis ocular), conocidas popularmente como 'ceguera de los ríos'."
  },
  "repetida": false
},

{
  "id": "t16-020",
  "tema": "Parasitología: helmintos y filarias",
  "pregunta": "¿Qué helmintosis puede diagnosticarse mediante un análisis coprológico (examen de heces), a diferencia de la hidatidosis y la triquinosis, que no se diagnostican de esta manera?",
  "opciones": { "a": "Ambas, hidatidosis y triquinosis, se diagnostican siempre mediante análisis coprológico", "b": "La hidatidosis, mediante la detección de huevos en heces humanas", "c": "La triquinosis, mediante la detección de larvas en heces", "d": "La criptosporidiosis (aunque producida por un protozoo, se detecta característicamente en heces, a diferencia de la hidatidosis y la triquinosis, que requieren otras técnicas)", "e": "Ninguna parasitosis puede diagnosticarse jamás mediante análisis de heces" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Ni la hidatidosis ni la triquinosis se diagnostican mediante análisis coprológico en el ser humano, a diferencia de otras parasitosis intestinales como la criptosporidiosis.",
    "b": "La hidatidosis NO se diagnostica mediante análisis de heces, ya que el ser humano actúa como hospedador intermediario del parásito, formando quistes tisulares (no eliminando huevos por vía fecal como sí hacen los hospedadores definitivos, como el perro).",
    "c": "La triquinosis tampoco se diagnostica mediante análisis de heces; su diagnóstico se basa en la biopsia muscular (visualización de larvas enquistadas) y en pruebas serológicas, junto con la elevación de enzimas musculares.",
    "d": "Correcto: a diferencia de la hidatidosis (en la que el ser humano es hospedador intermediario, sin eliminar huevos en heces) y la triquinosis (cuyo diagnóstico se basa en biopsia muscular y serología, no en heces), la criptosporidiosis sí se diagnostica mediante un análisis coprológico, detectando los ooquistes del parásito en las heces (con tinción ácido-alcohol resistente de confirmación).",
    "e": "Sí existen numerosas parasitosis (Giardia, Entamoeba, Cryptosporidium, nematodos intestinales, cestodos intestinales) que se diagnostican precisamente mediante análisis coprológico."
  },
  "repetida": false
},

{
  "id": "t17-001",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de coprocultivo, al sembrar una bacteria en el medio EMB (eosina-azul de metileno) se observan colonias con un característico brillo verde metalizado. ¿Qué bacteria es la más probable?",
  "opciones": { "a": "Escherichia coli, ya que metaboliza la eosina de una forma característica que produce este reflejo metálico", "b": "Shigella spp.", "c": "Pseudomonas aeruginosa", "d": "Salmonella spp.", "e": "Yersinia spp." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: el medio EMB es selectivo (solo crecen Gram negativos) y diferencial de lactosa; E. coli metaboliza la eosina de una manera característica que produce colonias con un llamativo brillo verde metalizado, lo que permite su identificación presuntiva a nivel de especie, algo que no logran otros medios como el McConkey.",
    "b": "Shigella spp. es lactosa negativa y en el medio EMB crece dando colonias del color de la placa, no el brillo verde metalizado característico de E. coli.",
    "c": "Pseudomonas aeruginosa, aunque puede crecer en algunos medios selectivos de Gram negativos, no produce el característico brillo verde metalizado del EMB, propio de E. coli.",
    "d": "Salmonella spp. es lactosa negativa y en el medio EMB crece dando colonias del color de la placa, no el característico brillo verde metalizado de E. coli.",
    "e": "Yersinia spp. es lactosa negativa y no produce el característico brillo verde metalizado en EMB, que es propio de E. coli."
  },
  "repetida": false
},

{
  "id": "t17-002",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En el medio SS (Salmonella-Shigella) sembrado a partir de una muestra de heces, se observan colonias con un precipitado central de color negro. ¿A qué bacteria es sugestivo este hallazgo?",
  "opciones": { "a": "Staphylococcus aureus, un Gram positivo", "b": "Candida albicans, una levadura", "c": "Klebsiella pneumoniae, por ser lactosa positiva", "d": "Salmonella, por la producción de ácido sulfhídrico (H2S) que reacciona con las sales de hierro del medio", "e": "Escherichia coli, por ser lactosa positiva" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El medio SS está diseñado para el aislamiento de enterobacterias Gram negativas; Staphylococcus aureus (Gram positivo) no es el objetivo de este medio ni produce el hallazgo descrito.",
    "b": "El medio SS es un medio bacteriano, no diseñado para hongos como Candida albicans, que no produciría el hallazgo descrito.",
    "c": "Klebsiella pneumoniae es lactosa positiva y su crecimiento también está inhibido en el medio SS, no produce el precipitado negro característico de Salmonella.",
    "d": "Correcto: la aparición de un precipitado negro en el medio SS es sugestiva de Salmonella, ya que esta bacteria produce ácido sulfhídrico (H2S) que reacciona con las sales de hierro presentes en el medio, generando ese precipitado característico.",
    "e": "E. coli es lactosa positiva y, además, su crecimiento está inhibido en el medio SS (moderadamente selectivo, que dificulta el crecimiento de la flora comensal), por lo que no encaja con el hallazgo de un precipitado negro característico de Salmonella."
  },
  "repetida": false
},

{
  "id": "t17-003",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En el medio de agar hierro Kligler, sembrado por picadura en profundidad, una bacteria da como resultado el fondo del tubo amarillo (glucosa+) y la superficie/pico de flauta rojo (lactosa-), sin producción de gas ni de H2S. ¿Qué género es compatible con este resultado?",
  "opciones": { "a": "Treponema pallidum", "b": "Staphylococcus aureus", "c": "Escherichia coli o Klebsiella pneumoniae", "d": "Candida albicans", "e": "Shigella o Yersinia" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Treponema pallidum no es cultivable en medios artificiales como el Kligler; su diagnóstico se basa en microscopía de campo oscuro o serología.",
    "b": "El medio Kligler está diseñado para diferenciar enterobacterias Gram negativas; Staphylococcus aureus no es el objetivo habitual de este medio.",
    "c": "E. coli y Klebsiella pneumoniae son lactosa POSITIVAS, por lo que en el medio Kligler darían el tubo completamente amarillo (fondo y pico de flauta), no el pico de flauta rojo descrito en el enunciado.",
    "d": "Candida albicans es un hongo, no una enterobacteria, y no es el objetivo del medio Kligler, diseñado para el estudio de la fermentación de azúcares por bacterias entéricas.",
    "e": "Correcto: en el medio Kligler, todas las enterobacterias son glucosa positivas (fondo amarillo); si además el pico de flauta permanece rojo (lactosa negativa) y no hay gas ni H2S (sin precipitado negro), el patrón es compatible con Shigella o Yersinia, ambas lactosa negativas y no productoras de H2S."
  },
  "repetida": false
},

{
  "id": "t17-005",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica del exudado faríngeo, tras sembrar en césped una colonia beta-hemolítica y colocar un disco de bacitracina, se observa ausencia de crecimiento alrededor del disco. ¿Qué indica este resultado?",
  "opciones": { "a": "Que la bacteria es resistente a la bacitracina y por tanto no puede ser Streptococcus pyogenes", "b": "Que se trata de Staphylococcus aureus", "c": "Que se trata de un hongo filamentoso", "d": "Que el resultado del cultivo no es válido y hay que repetirlo de inmediato", "e": "Que la bacteria es sensible a la bacitracina, compatible con Streptococcus pyogenes" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Es justo lo contrario: la ausencia de crecimiento indica SENSIBILIDAD a la bacitracina, compatible con S. pyogenes, no resistencia (que se manifestaría como crecimiento normal alrededor del disco).",
    "b": "Staphylococcus aureus no es el objetivo de la prueba de sensibilidad a la bacitracina en el contexto de un exudado faríngeo con colonias beta-hemolíticas típicas de estreptococos.",
    "c": "Los hongos filamentosos no se identifican mediante la prueba de sensibilidad a la bacitracina, una prueba bacteriana específica para diferenciar estreptococos.",
    "d": "El resultado obtenido (halo de inhibición) es precisamente el esperado y válido para confirmar la identificación presuntiva de S. pyogenes, no indica un fallo del cultivo.",
    "e": "Correcto: Streptococcus pyogenes es sensible a la bacitracina, por lo que la ausencia de crecimiento (halo de inhibición) alrededor del disco confirma presuntivamente su identificación, en el contexto de una colonia beta-hemolítica en agar sangre procedente de un exudado faríngeo."
  },
  "repetida": false
},

{
  "id": "t17-006",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de exudado faríngeo, tras realizar el test rápido de inmunocromatografía para detectar antígeno de Streptococcus pyogenes, se observa la línea de control coloreada y una segunda línea tenue de color rosa. ¿Cómo se interpreta este resultado?",
  "opciones": { "a": "Indica una infección por Mycoplasma pneumoniae", "b": "Negativo, ya que solo se considera válida una línea muy intensa", "c": "El resultado no es válido porque debería aparecer siempre solo la línea de control", "d": "Positivo, indicando la presencia del antígeno polisacárido específico del grupo A", "e": "Indica una infección vírica, no bacteriana" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El test está diseñado específicamente para el antígeno de S. pyogenes, no para Mycoplasma pneumoniae, un agente completamente distinto.",
    "b": "No es necesario que la línea reactiva sea muy intensa para considerarse positiva; basta con que sea visible (aunque tenue) junto a la línea de control para interpretar el resultado como positivo.",
    "c": "La aparición de la línea de control por sí sola (sin línea reactiva) es la que indicaría un resultado NEGATIVO válido, no al revés; en este caso hay ambas líneas, lo que indica un resultado positivo.",
    "d": "Correcto: en la inmunocromatografía para S. pyogenes, la aparición de la línea de control junto con cualquier línea reactiva visible (aunque sea tenue) se interpreta como un resultado positivo, indicando la presencia del antígeno polisacárido específico del grupo A en la muestra.",
    "e": "La detección de este antígeno concreto (polisacárido del grupo A) es específica de una infección BACTERIANA por S. pyogenes, no indica una infección vírica."
  },
  "repetida": false
},

{
  "id": "t17-007",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de exudado faríngeo, tras la siembra por agotamiento en agar sangre, ¿en qué condiciones de incubación se introducen las placas para favorecer el crecimiento del estreptococo?",
  "opciones": { "a": "En un bote con una vela encendida, para disminuir el oxígeno y aumentar el CO2, generando condiciones microaerófilas", "b": "En condiciones de anaerobiosis estricta total, sin ningún oxígeno", "c": "A -20ºC durante 24 horas", "d": "En un autoclave a 121ºC", "e": "En atmósfera completamente rica en oxígeno puro al 100%" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: en la práctica, tras la siembra por agotamiento, las placas se introducen en un bote junto con una vela encendida; al consumirse el oxígeno del bote cerrado, la vela se apaga, generando unas condiciones de disminución de O2 y aumento de CO2 (microaerofilia), favorables para el crecimiento de los estreptococos.",
    "b": "No se busca una anaerobiosis estricta total, sino unas condiciones microaerófilas (disminución parcial de oxígeno, aumento de CO2), no la ausencia completa de oxígeno.",
    "c": "Las placas se incuban a temperatura ambiente/37ºC para permitir el crecimiento bacteriano, no se congelan a -20ºC, lo que impediría cualquier crecimiento.",
    "d": "El autoclave se emplea para esterilizar material, a temperaturas que destruirían cualquier microorganismo; no es el procedimiento de incubación de esta práctica.",
    "e": "No se busca una atmósfera rica en oxígeno puro; al contrario, se busca reducir el oxígeno disponible mediante el consumo por la llama de la vela."
  },
  "repetida": false
},

{
  "id": "t17-008",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de urocultivo, se siembra 1 microlitro de orina sin centrifugar en medio CLED con un asa calibrada, obteniéndose 120 colonias. ¿A cuántas UFC/mL corresponde este resultado, y cómo se interpreta?",
  "opciones": { "a": "120.000 UFC/mL, un resultado significativo de infección urinaria al superar el umbral de 100.000 UFC/mL habitual en mujeres", "b": "120 UFC/mL exactamente, un resultado no significativo", "c": "1.200.000.000 UFC/mL", "d": "No es posible calcular la concentración a partir de este dato", "e": "12 UFC/mL, un resultado claramente no significativo" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: si en 1 microlitro (0,001 mL) de orina se obtienen 120 UFC, para calcular la concentración por mililitro (1000 microlitros) hay que multiplicar por 1000, obteniendo 120.000 UFC/mL; al ser un valor superior a 100.000 UFC/mL, se considera un resultado significativo, compatible con infección urinaria (en el contexto habitual de mujeres, por ejemplo).",
    "b": "120 UFC/mL sería el resultado si se hubiera sembrado directamente 1 mL, pero al haberse sembrado solo 1 microlitro (una milésima parte), hay que multiplicar por 1000 para obtener el valor por mililitro, resultando en 120.000 UFC/mL.",
    "c": "1.200.000.000 UFC/mL sería un cálculo erróneo por exceso; el factor de conversión correcto es multiplicar por 1000 (el número de microlitros en un mililitro), no por un factor mucho mayor.",
    "d": "Sí es posible calcular la concentración, ya que se conoce tanto el volumen sembrado (1 microlitro) como el número de colonias obtenidas (120), permitiendo el cálculo directo mediante la regla de tres correspondiente.",
    "e": "12 UFC/mL sería un cálculo incorrecto; el factor de conversión correcto desde 1 microlitro a 1 mililitro es multiplicar por 1000 (ya que 1 mL contiene 1000 microlitros), no dividir."
  },
  "repetida": false
},

{
  "id": "t17-010",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de diagnóstico de neumonías, se siembra una muestra de esputo en agar chocolate obteniéndose crecimiento, mientras que en agar sangre no crece ningún microorganismo. ¿Qué bacteria es compatible con este patrón?",
  "opciones": { "a": "Streptococcus pneumoniae, que crece igual en ambos medios", "b": "Cualquier bacteria Gram positiva en general", "c": "Staphylococcus aureus, que no crece en ninguno de los dos medios", "d": "Haemophilus influenzae, que necesita los factores V y X, libres en el agar chocolate pero no disponibles en el agar sangre", "e": "Escherichia coli, que solo crece en agar sangre" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "S. pneumoniae crece perfectamente en agar SANGRE (dando colonias alfa-hemolíticas), por lo que no encajaría con el patrón descrito de ausencia de crecimiento en este medio.",
    "b": "El patrón de crecimiento exclusivo en agar chocolate (y no en sangre) es característico específicamente de Haemophilus, no de las bacterias Gram positivas en general, que suelen crecer bien en agar sangre.",
    "c": "S. aureus crece bien tanto en agar sangre como en agar chocolate, siendo una bacteria de crecimiento poco exigente; no encaja con el patrón de crecimiento exclusivo en chocolate.",
    "d": "Correcto: Haemophilus influenzae necesita los factores V (NAD) y X (hemina) para crecer; en el agar chocolate, donde los eritrocitos están lisados, estos factores están disponibles libremente, mientras que en el agar sangre, con los eritrocitos intactos, no lo están, lo que explica que crezca en chocolate pero no en sangre.",
    "e": "E. coli, como el resto de enterobacterias, crece tanto en agar sangre como en agar chocolate (y también en McConkey), no exclusivamente en chocolate."
  },
  "repetida": false
},

{
  "id": "t17-011",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de diagnóstico de neumonías, se coloca un disco de optoquina sobre un césped de una colonia alfa-hemolítica sembrada en agar sangre, observándose un halo de inhibición del crecimiento. ¿Qué bacteria es compatible con este resultado?",
  "opciones": { "a": "Pseudomonas aeruginosa", "b": "Streptococcus pneumoniae, sensible a la optoquina", "c": "Escherichia coli", "d": "Streptococcus del grupo viridans, resistente a la optoquina", "e": "Staphylococcus aureus" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Pseudomonas aeruginosa no es el objetivo de la prueba de la optoquina, empleada específicamente para diferenciar S. pneumoniae de los estreptococos viridans.",
    "b": "Correcto: Streptococcus pneumoniae es sensible al disco de optoquina, por lo que la aparición de un halo de inhibición alrededor del disco, en el contexto de una colonia alfa-hemolítica, confirma presuntivamente su identificación.",
    "c": "E. coli es una enterobacteria Gram negativa, morfológicamente distinta de una colonia alfa-hemolítica en agar sangre, y no es el objetivo de la prueba de la optoquina.",
    "d": "Los estreptococos del grupo viridans son RESISTENTES a la optoquina (no se produce halo de inhibición), a diferencia de S. pneumoniae, que sí es sensible.",
    "e": "S. aureus no es el objetivo de la prueba de la optoquina, que se emplea específicamente para diferenciar S. pneumoniae de los estreptococos viridans, ambos alfa-hemolíticos."
  },
  "repetida": false
},

{
  "id": "t17-012",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de detección de antígenos neumocócicos en orina mediante aglutinación con látex, ¿qué se observa como resultado positivo?",
  "opciones": { "a": "La fermentación de la lactosa en un medio de cultivo", "b": "La aparición de un precipitado blanco o 'arenisca' visible tras mezclar la muestra de orina con el reactivo de partículas de látex recubiertas de anticuerpos anti-neumococo", "c": "La aparición de una banda coloreada en una tira de nitrocelulosa", "d": "Un cambio de color a verde metalizado", "e": "Un halo de inhibición alrededor de un disco de antibiótico" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "La fermentación de la lactosa es un fenómeno de cultivo en medios bacterianos sólidos (McConkey, EMB), sin relación con la técnica de aglutinación con látex para la detección de antígeno.",
    "b": "Correcto: en la técnica de aglutinación con partículas de látex recubiertas de anticuerpos anti-neumococo, un resultado positivo se manifiesta como la aparición de un precipitado blanco visible, con aspecto de 'arenisca', al mezclar la muestra de orina del paciente (donde se elimina parte del polisacárido capsular) con el reactivo.",
    "c": "La aparición de bandas coloreadas en una tira de nitrocelulosa es característica de las técnicas de inmunocromatografía, una técnica distinta de la aglutinación con látex descrita en esta práctica concreta.",
    "d": "El brillo verde metalizado es característico del crecimiento de E. coli en el medio EMB, sin relación con la técnica de aglutinación con látex para antígeno neumocócico.",
    "e": "Un halo de inhibición alrededor de un disco de antibiótico es característico de las pruebas de sensibilidad (como la optoquina o la bacitracina), no de la técnica de aglutinación con látex."
  },
  "repetida": false
},

{
  "id": "t17-013",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de hemocultivo, ¿cuántas muestras de sangre se recogen habitualmente y cómo se distribuyen entre los distintos frascos?",
  "opciones": { "a": "Diez muestras del mismo brazo en el mismo punto de venopunción", "b": "Únicamente una muestra de LCR", "c": "Cuatro muestras: dos del brazo izquierdo y dos del brazo derecho, repartiéndose en frascos para bacterias aerobias facultativas y para bacterias anaerobias", "d": "Únicamente una muestra de orina, sin necesidad de extracción de sangre", "e": "Una única muestra de un solo brazo" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "No se recomienda repetir la extracción en el mismo punto de venopunción; se recomienda utilizar lugares diferentes de venopunción (ambos brazos) para el diagnóstico correcto de una bacteriemia.",
    "b": "El diagnóstico de la bacteriemia requiere una muestra de sangre (hemocultivo), no una muestra de LCR, que se emplea en el diagnóstico de la meningitis.",
    "c": "Correcto: en la práctica de hemocultivo se recogen habitualmente cuatro muestras de sangre, dos del brazo izquierdo y dos del brazo derecho, distribuyéndose en frascos con medio de cultivo para bacterias aerobias facultativas y para bacterias anaerobias, respectivamente, siendo fundamental una esterilización exhaustiva de la piel antes de la extracción.",
    "d": "El diagnóstico de la bacteriemia requiere específicamente una muestra de SANGRE (mediante hemocultivo), no una muestra de orina.",
    "e": "Una única muestra de un solo brazo no es la práctica recomendada; se recomiendan varias extracciones de lugares diferentes para aumentar la sensibilidad diagnóstica."
  },
  "repetida": false
},

{
  "id": "t17-014",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de hemocultivo, el sistema automatizado detecta un frasco positivo mediante un cambio de color relacionado con la producción de CO2. ¿A qué se debe este CO2?",
  "opciones": { "a": "A la presencia de hemoglobina libre en la sangre", "b": "A un artefacto sin ningún significado biológico", "c": "A una reacción química espontánea del anticoagulante del frasco", "d": "Al metabolismo de las bacterias presentes en la sangre inoculada, que consumen nutrientes y liberan CO2 como producto de su actividad metabólica", "e": "A la descomposición espontánea del plástico del frasco" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "La hemoglobina libre no es la responsable del cambio detectado por el sistema; el mecanismo se basa específicamente en la detección del CO2 producido por el metabolismo bacteriano.",
    "b": "Se trata de un hallazgo con un significado biológico muy relevante, ya que indica la presencia de microorganismos viables multiplicándose activamente en la muestra de sangre, es decir, un hemocultivo positivo.",
    "c": "El CO2 detectado no proviene de una reacción química espontánea del anticoagulante, sino específicamente del metabolismo activo de los microorganismos presentes en la muestra.",
    "d": "Correcto: el CO2 detectado por el sistema automatizado de hemocultivo aparece como consecuencia del metabolismo de las bacterias presentes en la muestra de sangre inoculada; este CO2 reacciona con un material sensor en el fondo del frasco, generando un cambio de color o de fluorescencia que el sistema interpreta como resultado positivo.",
    "e": "El cambio detectado no se debe a la descomposición del plástico del frasco, sino a un fenómeno biológico (metabolismo bacteriano) relacionado con la producción de CO2."
  },
  "repetida": false
},

{
  "id": "t17-015",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de hemocultivo, se presenta el caso de un paciente con pielonefritis en el que se observa un bacilo Gram negativo en la tinción de Gram del hemocultivo positivo. ¿Qué microorganismo es el más probable?",
  "opciones": { "a": "Neisseria meningitidis", "b": "Streptococcus pneumoniae", "c": "Escherichia coli", "d": "Staphylococcus epidermidis", "e": "Streptococcus del grupo viridans" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Neisseria meningitidis es un diplococo Gram negativo, no un bacilo Gram negativo, y no es el agente típico de la pielonefritis.",
    "b": "S. pneumoniae es un diplococo Gram POSITIVO, no un bacilo Gram negativo, por lo que no encaja con la descripción morfológica ni con el contexto clínico de pielonefritis (más asociado a enterobacterias).",
    "c": "Correcto: en el contexto de una pielonefritis (infección urinaria alta) con bacteriemia asociada, el bacilo Gram negativo observado en el hemocultivo es compatible con Escherichia coli, el agente etiológico más frecuente de las infecciones urinarias, incluida la pielonefritis.",
    "d": "Staphylococcus epidermidis es un coco Gram positivo en racimo, no un bacilo Gram negativo, y se asocia más a bacteriemia por catéter, no a pielonefritis.",
    "e": "Los estreptococos del grupo viridans son cocos Gram positivos en cadena, no bacilos Gram negativos, y se asocian más a endocarditis (procedente de la cavidad oral), no a pielonefritis."
  },
  "repetida": false
},

{
  "id": "t17-016",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de hemocultivo, se presenta el caso de un paciente con endocarditis en el que se observan cocos Gram positivos en cadena en la tinción de Gram del hemocultivo positivo. ¿Qué microorganismo es el más probable?",
  "opciones": { "a": "Staphylococcus epidermidis, dispuesto en racimos", "b": "Neisseria meningitidis, un diplococo Gram negativo", "c": "Candida albicans, una levadura", "d": "Streptococcus del grupo viridans", "e": "Escherichia coli, un bacilo Gram negativo" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Staphylococcus epidermidis se dispone en RACIMOS, no en cadenas, por lo que su morfología no coincide con la descripción del enunciado; además, se asocia más a bacteriemia por catéter.",
    "b": "Neisseria meningitidis es un diplococo Gram negativo, morfológicamente distinto de un coco Gram positivo dispuesto en cadena.",
    "c": "Candida albicans es una levadura, con una morfología completamente distinta de un coco bacteriano Gram positivo en cadena.",
    "d": "Correcto: en el contexto de una endocarditis, la observación de cocos Gram positivos en cadena en el hemocultivo es compatible con Streptococcus del grupo viridans, un agente clásico de la endocarditis de válvula natural procedente de la cavidad oral (por ejemplo, tras una extracción dental).",
    "e": "E. coli es un bacilo Gram negativo, morfológicamente muy distinto de un coco Gram positivo en cadena."
  },
  "repetida": false
},

{
  "id": "t17-017",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de hemocultivo, se presenta el caso de un paciente con un catéter intravascular en el que se observan cocos Gram positivos en racimo en la tinción de Gram del hemocultivo positivo. ¿Qué microorganismo es el más probable?",
  "opciones": { "a": "Escherichia coli, un bacilo Gram negativo", "b": "Mycobacterium tuberculosis", "c": "Neisseria meningitidis", "d": "Streptococcus del grupo viridans, dispuesto en cadenas", "e": "Staphylococcus epidermidis" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "E. coli es un bacilo Gram negativo, morfológicamente muy distinto de un coco Gram positivo en racimo.",
    "b": "Mycobacterium tuberculosis es un bacilo ácido-alcohol resistente, que no se visualiza mediante la tinción de Gram convencional ni tiene la morfología de coco en racimo.",
    "c": "Neisseria meningitidis es un diplococo Gram negativo, morfológicamente distinto de un coco Gram positivo en racimo.",
    "d": "Los estreptococos del grupo viridans se disponen en CADENAS, no en racimos, y se asocian más a endocarditis de origen dental que a la infección de catéteres.",
    "e": "Correcto: en el contexto de una bacteriemia asociada a catéter intravascular, la observación de cocos Gram positivos en racimo en el hemocultivo es compatible con Staphylococcus epidermidis, la bacteria de la piel que con mayor frecuencia coloniza este tipo de dispositivos."
  },
  "repetida": false
},

{
  "id": "t17-018",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En la práctica de diagnóstico coprológico, ¿para qué se emplea la técnica de concentración con formaldehído-éter?",
  "opciones": { "a": "El éter se emplea exclusivamente para desinfectar el material de laboratorio", "b": "El formaldehído se emplea para teñir la muestra de color azul", "c": "Esta técnica solo sirve para el diagnóstico de bacterias, nunca de parásitos", "d": "El formaldehído tiñe los núcleos de los parásitos de color rojo intenso", "e": "El formaldehído mata y fija/conserva la muestra, mientras que el éter disuelve los restos grasos y fecales que quedan flotando, permitiendo concentrar las formas parasitarias en el sedimento tras la centrifugación" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "El éter en esta técnica no se emplea para desinfectar material, sino específicamente para disolver e impregnar los restos fecales grasos que flotan, facilitando la separación de fases durante la centrifugación.",
    "b": "El formaldehído no tiñe de azul la muestra; es el Lugol el que se añade posteriormente como colorante para facilitar la observación de las morfologías parasitarias.",
    "c": "Esta técnica de concentración se emplea específicamente para el diagnóstico PARASITOLÓGICO en heces (huevos, larvas, quistes), no para el diagnóstico de bacterias.",
    "d": "El formaldehído no es un colorante en este contexto; su función es fijar y conservar la muestra, no teñir los núcleos de los parásitos.",
    "e": "Correcto: en la técnica de concentración con formaldehído-éter, el formaldehído mata a los parásitos y fija/conserva la muestra, mientras que el éter disuelve e impregna los restos fecales de menor densidad (que flotan), permitiendo que tras la centrifugación las formas parasitarias (huevos, larvas, quistes) se concentren en el sedimento, facilitando su identificación microscópica posterior."
  },
  "repetida": false
},

{
  "id": "t17-020",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "En el diagnóstico coprológico, ¿qué formas parasitarias es más probable encontrar en unas heces líquidas (diarreicas), frente a unas heces formadas?",
  "opciones": { "a": "Exactamente las mismas formas parasitarias en ambos casos, sin ninguna diferencia", "b": "Los trofozoítos son más resistentes y estables que los quistes", "c": "En las heces formadas nunca se pueden encontrar huevos de helmintos", "d": "En las heces líquidas nunca se puede encontrar ninguna forma parasitaria", "e": "En las heces líquidas es más probable encontrar trofozoítos, mientras que en las heces formadas predominan los quistes, huevos y larvas/formas adultas" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Existe una diferencia relevante entre ambos tipos de heces en cuanto a la probabilidad de encontrar cada tipo de forma parasitaria, relacionada con la fragilidad relativa de los trofozoítos frente a la resistencia de los quistes.",
    "b": "Es justo lo contrario: los QUISTES son las formas de resistencia, mucho más estables y duraderas en el ambiente, mientras que los trofozoítos son formas frágiles que se degradan rápidamente fuera del organismo.",
    "c": "En las heces formadas sí pueden encontrarse huevos de helmintos, siendo de hecho una situación habitual en el diagnóstico coprológico de estas parasitosis.",
    "d": "En las heces líquidas sí es posible y frecuente encontrar formas parasitarias, especialmente trofozoítos de protozoos, siendo precisamente uno de los tipos de muestra más relevantes para su diagnóstico.",
    "e": "Correcto: en las heces líquidas o diarreicas es más probable encontrar trofozoítos (la forma activa y frágil de los protozoos, que requiere examen rápido), mientras que en las heces formadas predominan los quistes de protozoos, así como huevos y larvas o formas adultas de helmintos, formas más resistentes."
  },
  "repetida": false
},

{
  "id": "t17-021",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "¿Qué tipo de conservación es la adecuada para una muestra de suero destinada a pruebas serológicas, a diferencia de las muestras de heces para parasitología, que emplean conservantes como el PVA o la formalina?",
  "opciones": { "a": "El PVA (alcohol polivinílico)", "b": "La temperatura ambiente durante varios días", "c": "El formaldehído", "d": "La congelación", "e": "La formalina" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "El PVA (alcohol polivinílico) es un conservante empleado en la fijación de muestras de heces para el estudio de protozoos, no es el método de conservación adecuado para una muestra de suero.",
    "b": "Mantener el suero a temperatura ambiente durante varios días favorecería la degradación de las proteínas (anticuerpos) y no es el método de conservación recomendado; se prefiere la congelación.",
    "c": "El formaldehído se emplea en el procesamiento de heces para concentración parasitológica, no es el método de conservación adecuado para una muestra de suero.",
    "d": "Correcto: para una muestra de suero destinada a pruebas serológicas, la conservación adecuada cuando no se procesa de inmediato es la congelación, que preserva la integridad de los anticuerpos y antígenos a analizar, a diferencia de los conservantes específicos empleados en parasitología de heces.",
    "e": "La formalina es un conservante empleado en el examen coprológico (parasitología de heces), no es la técnica de conservación adecuada para una muestra de suero."
  },
  "repetida": false
},

{
  "id": "t17-022",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "Respecto al análisis microscópico directo de una muestra de heces, señale la afirmación correcta",
  "opciones": { "a": "El azul de metileno está recomendado para la detección de quistes en un análisis microscópico directo de heces", "b": "Es posible detectar microsporidios en un análisis microscópico directo de heces, aunque su pequeño tamaño hace que técnicas de tinción especiales mejoren su detección", "c": "No es posible detectar quistes de amebas en un análisis microscópico directo de heces sin usar Lugol bajo ninguna circunstancia", "d": "El Lugol se usa para detectar exclusivamente formas de gran tamaño, como huevos o larvas, nunca quistes", "e": "El azul de metileno se recomienda para la detección de huevos de helmintos de gran tamaño" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "El azul de metileno se emplea sobre todo para la visualización de trofozoítos (aporta contraste a estructuras internas como núcleos en preparaciones en fresco), no está recomendado específicamente para la detección de quistes, para los que se emplea más bien el Lugol.",
    "b": "Correcto: aunque su pequeño tamaño (1-3 micrómetros) dificulta su visualización con las técnicas más básicas, sí es posible detectar microsporidios en un análisis microscópico directo de heces, mejorando su detección con tinciones especiales (como el tricrómico modificado).",
    "c": "Aunque el Lugol mejora notablemente la visualización de las estructuras internas de los quistes de amebas, es posible observarlos (aunque con menos detalle) en una preparación en fresco con solución salina, sin necesidad absoluta de Lugol para su mera detección.",
    "d": "El Lugol se emplea fundamentalmente para mejorar la visualización de las estructuras internas de los quistes de protozoos, no está limitado exclusivamente a formas de gran tamaño como huevos o larvas.",
    "e": "El azul de metileno no es el colorante recomendado específicamente para huevos de helmintos de gran tamaño; su uso se relaciona más con la visualización de trofozoítos y otras estructuras celulares."
  },
  "repetida": true
},

{
  "id": "t17-023",
  "tema": "Diagnóstico microbiológico práctico de laboratorio",
  "pregunta": "¿Cuál es el objetivo de realizar una siembra 'por agotamiento' en la práctica de coprocultivo o exudado faríngeo?",
  "opciones": { "a": "Obtener colonias aisladas para conseguir un cultivo puro a partir de una muestra con flora mixta", "b": "Teñir directamente la muestra de un color específico", "c": "Evitar que crezca cualquier tipo de bacteria en la placa", "d": "Destruir por completo todos los microorganismos presentes en la muestra", "e": "Aumentar la contaminación de la muestra deliberadamente" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcto: la siembra por agotamiento (extendiendo progresivamente el inóculo con el asa de siembra en distintas zonas de la placa) tiene como objetivo diluir progresivamente la muestra hasta conseguir colonias aisladas, es decir, un cultivo puro formado por células procedentes de una única célula original, necesario para poder identificar correctamente y realizar pruebas de sensibilidad.",
    "b": "La siembra por agotamiento es una técnica de cultivo, no una técnica de tinción; no implica teñir la muestra de ningún color.",
    "c": "El objetivo es que SÍ crezcan las bacterias, pero de forma que puedan visualizarse como colonias aisladas e individualizadas, no evitar cualquier crecimiento.",
    "d": "El objetivo no es destruir los microorganismos, sino precisamente hacerlos crecer de forma controlada para poder aislarlos e identificarlos.",
    "e": "El objetivo de la siembra por agotamiento es precisamente el contrario: obtener colonias bien diferenciadas y aisladas, evitando la confusión que produciría una contaminación mixta no controlada."
  },
  "repetida": false
}
];
