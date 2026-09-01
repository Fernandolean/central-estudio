const QUESTIONS = [

{
  "id": "t1-001",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿Cuál es la definición correcta de principio activo?",
  "opciones": { "a": "Toda materia, cualquiera que sea su origen (humano, animal, vegetal, químico o de otro tipo), a la que se atribuye una actividad apropiada para constituir un medicamento.", "b": "Toda materia, cualquiera que sea su origen, a la que se atribuye una inactividad apropiada para constituir un medicamento.", "c": "Algunas sustancias, con un origen específico (humano, animal, vegetal, químico o de otro tipo), a las que se atribuye una actividad apropiada para constituir un medicamento.", "d": "Toda sustancia, activa o inactiva, empleada en la fabricación de un medicamento, ya permanezca inalterada, se modifique o desaparezca en el transcurso del proceso.", "e": "Ninguna es correcta." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Esta es la definición legal de principio activo: cualquier materia, sea cual sea su procedencia, a la que se atribuye la actividad farmacológica del medicamento.",
    "b": "Incorrecta porque habla de 'inactividad', y precisamente lo que caracteriza al principio activo es la actividad farmacológica, no la ausencia de ella.",
    "c": "Incorrecta porque restringe la definición a 'algunas sustancias con origen específico', cuando en realidad la ley dice 'toda materia, cualquiera que sea su origen'.",
    "d": "Esta es la definición de materia prima, no la de principio activo: el principio activo es un subtipo de materia prima que aporta la actividad terapéutica.",
    "e": "Incorrecta porque la opción a sí recoge la definición correcta."
  },
  "repetida": true
},

{
  "id": "t1-002",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿A qué concepto corresponde la siguiente definición? 'Toda sustancia, activa o inactiva, empleada en la fabricación de un medicamento, ya permanezca inalterada, se modifique o desaparezca en el transcurso del proceso'.",
  "opciones": { "a": "Excipiente", "b": "Principio activo", "c": "Producto intermediario", "d": "Forma farmacéutica", "e": "Materia prima" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. El excipiente es una materia que se añade al principio activo con fines concretos (vehículo, estabilidad, etc.), no cualquier sustancia usada en la fabricación.",
    "b": "Incorrecta. El principio activo es la materia a la que se le atribuye la actividad farmacológica, no cualquier sustancia empleada en el proceso.",
    "c": "Incorrecta. El producto intermedio es el destinado a una posterior transformación industrial por un fabricante autorizado, un concepto distinto.",
    "d": "Incorrecta. La forma farmacéutica es la disposición final que adoptan principios activos y excipientes, no una sustancia individual.",
    "e": "Correcta. Materia prima es el término más amplio: engloba tanto a los principios activos como a los excipientes, independientemente de si permanecen, se transforman o desaparecen durante la fabricación."
  },
  "repetida": true
},

{
  "id": "t1-003",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿Cuál es la definición correcta de excipiente?",
  "opciones": { "a": "Toda materia, cualquiera que sea su origen, a la que se atribuye una actividad farmacológica.", "b": "Materia que, incluida en las formas galénicas, se añade a los principios activos o a sus asociaciones para servirles de vehículo, posibilitar su preparación y estabilidad, modificar sus propiedades organolépticas o determinar las propiedades fisicoquímicas del medicamento y su biodisponibilidad.", "c": "Toda sustancia, activa o inactiva, empleada en la fabricación de un medicamento.", "d": "Combinación de la forma en la que el producto farmacéutico es presentado por el fabricante y la forma en la que es administrada." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Esta es la definición de principio activo; el excipiente, por definición, no tiene actividad farmacológica.",
    "b": "Correcta. Es la definición legal de excipiente: no tiene actividad terapéutica propia, pero cumple funciones esenciales de vehículo, estabilidad y biodisponibilidad.",
    "c": "Incorrecta. Esta es la definición de materia prima, un concepto más amplio que incluye tanto excipientes como principios activos.",
    "d": "Incorrecta. Esta es la definición de forma farmacéutica, no de excipiente."
  },
  "repetida": true
},

{
  "id": "t1-004",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "La disposición a la que se adaptan los principios activos y excipientes para constituir un medicamento hace referencia a:",
  "opciones": { "a": "El excipiente", "b": "El principio activo", "c": "La forma galénica", "d": "La materia prima" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El excipiente es solo uno de los componentes que se disponen en la forma galénica, no la disposición en sí.",
    "b": "Incorrecta. El principio activo es el componente con actividad terapéutica, no la disposición final del medicamento.",
    "c": "Correcta. La forma galénica (o forma farmacéutica) es precisamente la disposición o presentación final que adoptan el principio activo y el excipiente para constituir el medicamento (comprimido, jarabe, pomada, etc.).",
    "d": "Incorrecta. La materia prima es cualquier sustancia usada en la fabricación, no la disposición final del medicamento."
  },
  "repetida": true
},

{
  "id": "t1-005",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿Qué es un producto intermedio?",
  "opciones": { "a": "Ninguna es correcta.", "b": "El destinado a una posterior transformación industrial por un fabricante autorizado.", "c": "La combinación de la forma en que el producto farmacéutico es presentado por el fabricante y la forma en que es administrado.", "d": "Toda sustancia, activa o inactiva, empleada en la fabricación de un medicamento.", "e": "Toda materia, cualquiera que sea su origen, a la que se le atribuye una actividad apropiada para constituir un medicamento." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque la opción b sí recoge la definición correcta.",
    "b": "Correcta. El producto intermedio es una materia que aún no está lista para su uso final: debe someterse a una transformación industrial posterior por parte de un fabricante autorizado.",
    "c": "Incorrecta. Esta es la definición de forma farmacéutica.",
    "d": "Incorrecta. Esta es la definición de materia prima, un concepto distinto y más general.",
    "e": "Incorrecta. Esta es la definición de principio activo, no de producto intermedio."
  },
  "repetida": true
},

{
  "id": "t1-006",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "Una sustancia con actividad medicamentosa, composición química definida y actividad terapéutica es:",
  "opciones": { "a": "Un fármaco", "b": "Un excipiente", "c": "Una sustancia medicamentosa", "d": "Una planta medicinal", "e": "Un medicamento" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El fármaco es precisamente la entidad química de composición definida y con actividad farmacológica/terapéutica demostrada, previa a su formulación como medicamento.",
    "b": "Incorrecta. El excipiente, por definición, no tiene actividad terapéutica propia.",
    "c": "Incorrecta porque en este contexto la denominación técnica precisa que recoge composición química definida y actividad terapéutica es 'fármaco', término más específico.",
    "d": "Incorrecta. Una planta medicinal es solo una posible fuente de fármacos, no la definición general del concepto.",
    "e": "Incorrecta. El medicamento es el resultado de formular el fármaco (principio activo) junto con excipientes en una forma farmacéutica lista para administrar; no se define únicamente por su composición química."
  },
  "repetida": true
},

{
  "id": "t1-007",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿Cuál es la definición CORRECTA de Tecnología Farmacéutica (Farmacia Galénica)?",
  "opciones": { "a": "Serie de procesos tecnológicos a seguir para la obtención de medicamentos eficaces, inestables y seguros.", "b": "Ninguna es correcta.", "c": "Estudio de la evolución de los niveles de principio activo y sus metabolitos en los diferentes fluidos, tejidos y órganos.", "d": "Conjunto de conocimientos, operaciones básicas y procesos tecnológicos necesarios para la formulación, control y elaboración de un medicamento que garantice la seguridad, estabilidad y la eficacia terapéutica para la que fuera concebida." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque es contradictoria: un medicamento nunca debería buscar ser 'inestable'; la Tecnología Farmacéutica persigue justamente la estabilidad.",
    "b": "Incorrecta porque la opción a sí es una definición correcta.",
    "c": "Incorrecta. Esta es la definición de Farmacocinética, no de Tecnología Farmacéutica.",
    "d": "Correcta. Esta es la definición estándar de Tecnología Farmacéutica (o Farmacia Galénica): la disciplina que aplica conocimientos y procesos tecnológicos para formular, controlar y elaborar medicamentos seguros, estables y eficaces."
  },
  "repetida": true
},

{
  "id": "t1-008",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿De dónde proceden los principios activos?",
  "opciones": { "a": "De síntesis química, drogas de origen natural, procesos microbiológicos, biotecnología e ingeniería genética.", "b": "De procesos biotecnológicos y drogas de origen natural únicamente.", "c": "De síntesis química, drogas de origen natural, procesos industriales e ingeniería genética.", "d": "De síntesis química únicamente.", "e": "De síntesis química, drogas de origen natural, procesos industriales, biotecnología e ingeniería física." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Los principios activos pueden obtenerse por estas cinco vías: síntesis química, drogas naturales, procesos microbiológicos, biotecnología e ingeniería genética.",
    "b": "Incorrecta porque excluye la síntesis química, que es una de las principales fuentes de principios activos.",
    "c": "Incorrecta por la misma razón: 'procesos industriales' no es una fuente de principios activos en el sentido en que lo son los procesos microbiológicos.",
    "d": "Incorrecta porque limita las fuentes a una sola vía, ignorando el origen natural, microbiológico y biotecnológico.",
    "e": "Incorrecta porque sustituye 'procesos microbiológicos' e 'ingeniería genética' por 'procesos industriales' e 'ingeniería física', que no son las fuentes reconocidas."
  },
  "repetida": true
},

{
  "id": "t1-009",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "En la Farmacia Galénica, ¿cuáles son las operaciones básicas más destacables a las que se someten las formas farmacéuticas?",
  "opciones": { "a": "División, mezclado, desecación y esterilización.", "b": "División, mezclado, filtración y desecación.", "c": "División, filtración, concentración y liofilización.", "d": "División, filtración, extracción y desecación.", "e": "División, mezclado, concentración y esterilización." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. División, mezclado, desecación y esterilización son las cuatro grandes operaciones básicas de la Tecnología Farmacéutica aplicables de forma general a las formas farmacéuticas.",
    "b": "Incorrecta porque incluye filtración en lugar de esterilización.",
    "c": "Incorrecta porque sustituye mezclado y esterilización por concentración y liofilización, que son técnicas más específicas.",
    "d": "Incorrecta porque incluye extracción, que no forma parte de las cuatro operaciones básicas generales estudiadas, y excluye el mezclado.",
    "e": "Incorrecta porque incluye concentración en lugar de desecación como operación básica general."
  },
  "repetida": true
},

{
  "id": "t1-010",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿Cuál de las siguientes opciones NO se considera una operación básica universal de la Tecnología Farmacéutica, sino una técnica específica de desecación?",
  "opciones": { "a": "División", "b": "Desecación", "c": "Liofilizado", "d": "Mezclado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La división es una de las operaciones básicas generales que se aplican a las formas farmacéuticas.",
    "b": "Incorrecta. La desecación en sí sí es una operación básica general.",
    "c": "Correcta. La liofilización es una modalidad concreta y especializada de desecación (secado en frío por sublimación), no una operación básica que se aplique de forma universal a todas las formas farmacéuticas.",
    "d": "Incorrecta. El mezclado es también una operación básica general."
  },
  "repetida": false
},

{
  "id": "t1-011",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿Cuál es la principal diferencia entre principio activo y excipiente?",
  "opciones": { "a": "El principio activo se añade al excipiente.", "b": "El excipiente tiene sabor diferente al principio activo.", "c": "El excipiente es el único que constituye el medicamento.", "d": "El principio activo es el que tiene actividad.", "e": "El excipiente es el que tiene actividad." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque describe una relación de composición, no la diferencia fundamental entre ambos conceptos, que es la actividad farmacológica.",
    "b": "Incorrecta porque el sabor es una propiedad organoléptica secundaria, no la diferencia conceptual fundamental entre ambos.",
    "c": "Incorrecta porque el medicamento está constituido tanto por principio activo como por excipiente, no solo por este último.",
    "d": "Correcta. La diferencia esencial es que el principio activo posee la actividad farmacológica responsable del efecto terapéutico, mientras que el excipiente no la tiene.",
    "e": "Incorrecta porque invierte los papeles: el excipiente carece de actividad terapéutica."
  },
  "repetida": true
},

{
  "id": "t1-012",
  "tema": "Introducción a la Tecnología Farmacéutica",
  "pregunta": "¿Qué tipo de energía es la más extendida para la elaboración de medicamentos en la industria farmacéutica?",
  "opciones": { "a": "La solar", "b": "La eléctrica", "c": "La fisicoquímica", "d": "La mecánica" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. La energía solar no se emplea de forma relevante en los procesos de elaboración de medicamentos.",
    "b": "Incorrecta. Aunque muchos equipos se alimentan eléctricamente, la energía que actúa físicamente sobre el material para transformarlo es la mecánica.",
    "c": "Incorrecta. La energía fisicoquímica es una fuente posible mencionada en el temario, pero no la más extendida en la práctica industrial.",
    "d": "Correcta. La mayoría de las operaciones básicas (pulverización, mezclado, compresión, tamizado) se llevan a cabo mediante aporte de energía mecánica."
  },
  "repetida": false
},

{
  "id": "t2-001",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "La ______ de los medicamentos deberá establecerse en base a la realización de estudios preclínicos y ensayos clínicos.",
  "opciones": { "a": "Calidad", "b": "Identificación", "c": "Información", "d": "Eficacia", "e": "Seguridad" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. La garantía de calidad se refiere a que la composición cualitativa y cuantitativa esté claramente definida, no a los ensayos clínicos.",
    "b": "Incorrecta. La garantía de identificación se refiere a la denominación oficial del medicamento, no a estudios preclínicos/clínicos.",
    "c": "Incorrecta. La garantía de información se refiere a que los datos del medicamento sean precisos y comprensibles, no a los ensayos clínicos.",
    "d": "Correcta. La Ley 29/2006 establece textualmente que la eficacia de los medicamentos deberá establecerse en base a estudios preclínicos y ensayos clínicos.",
    "e": "Incorrecta. La garantía de seguridad se apoya en estudios toxicológicos, no específicamente en la frase citada."
  },
  "repetida": true
},

{
  "id": "t2-002",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de estos libros NO es obligatorio tener en la oficina de farmacia?",
  "opciones": { "a": "Vademécum", "b": "Libro de psicótropos", "c": "Formulario Nacional", "d": "Real Farmacopea Española", "e": "Libro de estupefacientes" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El Vademécum es una publicación comercial de consulta, útil pero no exigida legalmente como libro de tenencia obligatoria en la oficina de farmacia.",
    "b": "Incorrecta. El libro de psicótropos también es de tenencia obligatoria por el mismo motivo de control legal.",
    "c": "Incorrecta. El Formulario Nacional sí es un libro de tenencia obligatoria en la oficina de farmacia.",
    "d": "Incorrecta. La Real Farmacopea Española es el código oficial de referencia y es de tenencia obligatoria.",
    "e": "Incorrecta. El libro de contabilidad de estupefacientes es de tenencia obligatoria por razones de control legal de estas sustancias."
  },
  "repetida": true
},

{
  "id": "t2-003",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuáles son los libros de tenencia obligatoria en la oficina de farmacia?",
  "opciones": { "a": "Libro de estupefacientes, Real Farmacopea Española, Formulario Nacional y libro de psicótropos.", "b": "Únicamente el libro recetario y el Formulario Nacional.", "c": "Únicamente la Real Farmacopea Española y el Formulario Nacional.", "d": "El Vademécum, la Real Farmacopea Europea y el libro de contabilidad de estupefacientes.", "e": "Únicamente el libro de estupefacientes y el de psicótropos." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Estos cuatro libros (estupefacientes, psicótropos, Real Farmacopea Española y Formulario Nacional) constituyen el conjunto de tenencia obligatoria en la oficina de farmacia.",
    "b": "Incorrecta porque omite los libros de estupefacientes, psicótropos y la Real Farmacopea Española.",
    "c": "Incorrecta porque omite los libros de control de estupefacientes y psicótropos, obligatorios por razones legales de fiscalización.",
    "d": "Incorrecta porque el Vademécum no es de tenencia obligatoria, y la referencia legal es la Real Farmacopea Española, no la Europea.",
    "e": "Incorrecta porque deja fuera dos libros también obligatorios: la Real Farmacopea Española y el Formulario Nacional."
  },
  "repetida": true
},

{
  "id": "t2-004",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿En qué se diferencia la fórmula magistral del preparado oficinal?",
  "opciones": { "a": "En que la fórmula magistral está preparada para un paciente concreto.", "b": "En que la fórmula magistral se elabora según los protocolos establecidos.", "c": "En que la fórmula magistral tiene acción farmacológica.", "d": "En que la fórmula magistral es preparada por un farmacéutico.", "e": "En que la fórmula magistral se dispensa en oficina de farmacia." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La diferencia clave es que la fórmula magistral se individualiza para un paciente concreto por prescripción facultativa, mientras que el preparado oficinal se elabora de forma más general, sin destinatario individual predeterminado.",
    "b": "Incorrecta porque ambos se elaboran siguiendo normas de correcta elaboración y control de calidad establecidas; no es el rasgo diferenciador.",
    "c": "Incorrecta porque ambos tipos de preparado tienen acción farmacológica; no es un rasgo distintivo.",
    "d": "Incorrecta porque ambos, fórmula magistral y preparado oficinal, son elaborados por el farmacéutico o bajo su dirección; no es un rasgo diferencial.",
    "e": "Incorrecta porque ambos se dispensan en la oficina de farmacia; no diferencia a uno de otro."
  },
  "repetida": true
},

{
  "id": "t2-005",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuáles son las características principales que definen a una fórmula magistral y permiten diferenciarla de los preparados oficinales?",
  "opciones": { "a": "No debe tener la supervisión de un farmacéutico.", "b": "Necesitaría receta médica y abarca a distintos pacientes.", "c": "Es individual pero no necesita prescripción médica.", "d": "Se puede hacer en grandes cantidades y se puede administrar a distintos pacientes.", "e": "Es individual y es necesaria receta médica." },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta porque la fórmula magistral debe ser elaborada por el farmacéutico o bajo su dirección y supervisión.",
    "b": "Incorrecta porque la fórmula magistral no abarca a distintos pacientes, sino a uno solo.",
    "c": "Incorrecta porque la fórmula magistral sí requiere prescripción médica al ser individualizada para un paciente concreto.",
    "d": "Incorrecta porque esa descripción corresponde al preparado oficinal, que se elabora en mayor escala y no está destinado a un único paciente.",
    "e": "Correcta. La fórmula magistral se caracteriza por ser individual (destinada a un único paciente) y por requerir receta médica que la prescriba."
  },
  "repetida": true
},

{
  "id": "t2-006",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Indica la respuesta CORRECTA en cuanto a fórmula magistral y preparado oficinal:",
  "opciones": { "a": "El preparado oficinal debe estar siempre destinado a un único paciente, igual que la fórmula magistral.", "b": "No existe ninguna diferencia entre ellos, son sinónimos.", "c": "El preparado oficinal puede estar destinado a diferentes pacientes, y la fórmula magistral es una réplica, elaborada por el farmacéutico, de lo que ha recetado el médico a un paciente en concreto.", "d": "Para ambos es obligatoria una receta médica." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta; es justo lo contrario: el preparado oficinal no está destinado a un único paciente, a diferencia de la fórmula magistral, que sí lo está.",
    "b": "Incorrecta porque sí existen diferencias claras entre ambos tipos de preparado, principalmente en su destinatario y en la necesidad de receta.",
    "c": "Correcta. Combina dos hechos ciertos: el preparado oficinal puede destinarse a varios pacientes (no es individualizado), y la fórmula magistral reproduce fielmente, para un paciente concreto, lo que el médico ha prescrito.",
    "d": "Incorrecta porque el preparado oficinal, al no ser individualizado, no siempre requiere receta médica, a diferencia de la fórmula magistral."
  },
  "repetida": true
},

{
  "id": "t2-007",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de las siguientes opciones NO es una garantía exigible por la Ley 29/2006 a los medicamentos?",
  "opciones": { "a": "Identificación", "b": "Disponibilidad", "c": "Calidad", "d": "Seguridad", "e": "Eficacia" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La identificación sí es una de las garantías exigibles.",
    "b": "Correcta. La disponibilidad no forma parte de las cinco garantías legales (calidad, seguridad, eficacia, identificación e información); es un concepto ajeno a esta clasificación.",
    "c": "Incorrecta. La calidad sí es una de las garantías exigibles.",
    "d": "Incorrecta. La seguridad sí es una de las cinco garantías exigibles por la Ley 29/2006.",
    "e": "Incorrecta. La eficacia sí es una de las garantías exigibles."
  },
  "repetida": true
},

{
  "id": "t2-008",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de las siguientes garantías NO está recogida en la Ley 29/2006 de garantías y uso racional de los medicamentos y productos sanitarios?",
  "opciones": { "a": "Garantía de identificación", "b": "Garantía de seguridad", "c": "Garantía de calidad", "d": "Garantía de eficacia", "e": "Garantía de eficiencia" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. La garantía de identificación sí está recogida en la ley.",
    "b": "Incorrecta. La garantía de seguridad sí está recogida en la ley.",
    "c": "Incorrecta. La garantía de calidad sí está recogida en la ley.",
    "d": "Incorrecta. La garantía de eficacia sí está recogida en la ley.",
    "e": "Correcta. La 'eficiencia' (relación coste-beneficio) no es una de las cinco garantías legales que exige la Ley 29/2006; se confunde a menudo con 'eficacia', que sí lo es."
  },
  "repetida": true
},

{
  "id": "t2-009",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de estas opciones NO es una garantía exigible de elaboración y autorización de medicamentos según la Ley 29/2006?",
  "opciones": { "a": "Garantía de información", "b": "Garantía de identificación", "c": "Garantía de calidad", "d": "Garantía de seguridad", "e": "Garantía de rentabilidad" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. La información sí es una garantía legal exigida.",
    "b": "Incorrecta. La identificación sí es una garantía legal exigida.",
    "c": "Incorrecta. La calidad sí es una garantía legal exigida.",
    "d": "Incorrecta. La seguridad sí es una garantía legal exigida.",
    "e": "Correcta. La rentabilidad económica no es una garantía contemplada por la Ley 29/2006; las garantías legales atienden a criterios sanitarios (calidad, seguridad, eficacia, identificación, información), no económicos."
  },
  "repetida": true
},

{
  "id": "t2-010",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Respecto a la Denominación Oficial Española (D.O.E.), señala la afirmación correcta:",
  "opciones": { "a": "A cada medicamento le será atribuida una denominación oficial específica.", "b": "A cada principio activo le será atribuida una denominación oficial española (D.O.E.).", "c": "A cada medicamento le será atribuida una denominación oficial española (D.O.E.).", "d": "A cada principio activo le será atribuida una denominación oficial específica (no necesariamente española).", "e": "La denominación del principio activo podrá consistir en un nombre de fantasía." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta por la misma razón que c: la D.O.E. corresponde al principio activo, no al medicamento en sí.",
    "b": "Correcta. La garantía de identificación establece que a cada principio activo se le asignará una Denominación Oficial Española (D.O.E.), lo más próxima posible a la Denominación Común Internacional (D.C.I.).",
    "c": "Incorrecta porque la D.O.E. se atribuye al principio activo, no directamente al medicamento comercial (que puede llevar nombre de fantasía).",
    "d": "Incorrecta porque especifica que la denominación no es 'necesariamente española', cuando la ley exige justamente que sea la Denominación Oficial Española.",
    "e": "Incorrecta. El nombre de fantasía es admisible para el medicamento (siempre que no se confunda con la denominación común), no para el principio activo, que debe llevar su D.O.E."
  },
  "repetida": true
},

{
  "id": "t2-011",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Qué significan las siglas EFG?",
  "opciones": { "a": "Excipiente farmacéutico genérico", "b": "Especialidades farmacéuticas genéricas", "c": "Equivalente farmacéutico genérico", "d": "Excipiente farmacológico genérico", "e": "Equivalente fórmula genérica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Confunde 'equivalente' con 'excipiente'; las siglas no se refieren a un excipiente.",
    "b": "Incorrecta. Aunque relacionado conceptualmente con los genéricos, no es lo que representan literalmente las siglas EFG.",
    "c": "Correcta. EFG significa Equivalente Farmacéutico Genérico, la identificación con la que se marcan los medicamentos genéricos.",
    "d": "Incorrecta. De nuevo confunde 'equivalente' con 'excipiente' y añade 'farmacológico' en vez de 'farmacéutico'.",
    "e": "Incorrecta. No es 'fórmula genérica', sino 'farmacéutico genérico'."
  },
  "repetida": true
},

{
  "id": "t2-012",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál es la definición correcta de medicamento genérico?",
  "opciones": { "a": "Todo medicamento con distinta composición cualitativa y cuantitativa de principio activo que el fármaco de referencia.", "b": "Todo medicamento con distinta forma farmacéutica que el fármaco de referencia.", "c": "Todo medicamento fabricado por un laboratorio distinto al del fármaco de referencia, sin más requisitos añadidos.", "d": "Todo medicamento con la misma composición cualitativa pero distinta composición cuantitativa que el fármaco de referencia.", "e": "Todo medicamento que tenga la misma composición cualitativa y cuantitativa en principios activos y la misma forma farmacéutica que el medicamento de referencia, cuya bioequivalencia haya sido demostrada mediante estudios adecuados de biodisponibilidad." },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta porque el genérico debe tener idéntica composición de principio activo, tanto cualitativa como cuantitativamente.",
    "b": "Incorrecta porque el genérico debe mantener la misma forma farmacéutica que el medicamento de referencia.",
    "c": "Incorrecta porque fabricar el medicamento un laboratorio distinto no basta por sí solo; deben cumplirse además los requisitos de composición, forma farmacéutica y bioequivalencia demostrada.",
    "d": "Incorrecta porque exige igualdad también en la composición cuantitativa, no solo cualitativa.",
    "e": "Correcta. Un medicamento genérico debe igualar al de referencia en composición cualitativa y cuantitativa de principio activo y en forma farmacéutica, además de haber demostrado su bioequivalencia."
  },
  "repetida": true
},

{
  "id": "t2-013",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿En qué puede diferenciarse un medicamento genérico de su medicamento de referencia?",
  "opciones": { "a": "En los excipientes.", "b": "En la forma farmacéutica.", "c": "En la composición cuantitativa de principio activo.", "d": "En el principio activo.", "e": "Deben ser idénticos en todo, excepto en el nombre y el envasado." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La ley no exige que los excipientes sean idénticos entre el medicamento genérico y el de referencia, siempre que la bioequivalencia quede demostrada; ahí reside el margen de diferencia permitido.",
    "b": "Incorrecta. La forma farmacéutica debe coincidir con la del medicamento de referencia.",
    "c": "Incorrecta. La cantidad de principio activo también debe ser idéntica a la del medicamento de referencia.",
    "d": "Incorrecta. El principio activo debe ser exactamente el mismo, tanto cualitativa como cuantitativamente.",
    "e": "Incorrecta porque también pueden diferir en aspectos como el color o la forma externa del comprimido, derivados precisamente de excipientes distintos."
  },
  "repetida": true
},

{
  "id": "t2-014",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿En qué se diferencia el medicamento genérico del medicamento de marca (de referencia)?",
  "opciones": { "a": "En los excipientes exclusivamente.", "b": "En que el genérico tiene mejor biodisponibilidad.", "c": "En nada, son completamente idénticos.", "d": "En el tiempo de acción, dentro del margen de bioequivalencia permitido.", "e": "Únicamente en la bioequivalencia, con un margen del 20%." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque, aunque los excipientes pueden diferir, no es la única consecuencia relevante de esa diferencia.",
    "b": "Incorrecta porque no se afirma que el genérico tenga mejor biodisponibilidad, sino una biodisponibilidad equivalente dentro de un margen aceptado.",
    "c": "Incorrecta porque, aunque el principio activo y la forma farmacéutica coinciden, no son absolutamente idénticos en todos los aspectos.",
    "d": "Correcta. Al poder variar los excipientes, la velocidad con la que el principio activo se libera y actúa puede diferir ligeramente, siempre dentro del margen de bioequivalencia aceptado, sin que ello afecte a la eficacia terapéutica global.",
    "e": "Incorrecta porque simplifica en exceso: el margen de bioequivalencia es un criterio de aceptación, no la única diferencia posible entre ambos medicamentos."
  },
  "repetida": true
},

{
  "id": "t2-015",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "El requisito 'composición cualitativa y cuantitativa claramente definida y establecida' corresponde a:",
  "opciones": { "a": "Garantía de eficacia", "b": "Garantía de información", "c": "Garantía de seguridad", "d": "Ninguna es correcta", "e": "Garantía de calidad" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. La garantía de eficacia se centra en el efecto terapéutico demostrado mediante ensayos, no en la composición.",
    "b": "Incorrecta. La garantía de información se refiere a que los datos del medicamento sean accesibles y comprensibles, no a la definición de su composición.",
    "c": "Incorrecta. La garantía de seguridad se centra en la ausencia de efectos tóxicos desproporcionados, no en la definición de la composición.",
    "d": "Incorrecta porque sí corresponde a la garantía de calidad.",
    "e": "Correcta. La garantía de calidad exige que la composición del medicamento esté clara y perfectamente definida, tanto en qué sustancias contiene como en qué cantidades."
  },
  "repetida": false
},

{
  "id": "t2-016",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Respecto a la garantía de seguridad de los medicamentos legalmente reconocidos, señala la afirmación FALSA:",
  "opciones": { "a": "Los medicamentos, principios activos y materias primas serán objeto de estudios toxicológicos y clínicos.", "b": "Los estudios toxicológicos deben realizarse de acuerdo con las Buenas Prácticas de Laboratorio.", "c": "Si los beneficios son menores que los riesgos, el producto sale igualmente al mercado.", "d": "Los medicamentos no deben producir, en condiciones normales, efectos tóxicos desproporcionados al beneficio.", "e": "Todo medicamento debe ser seguro." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Correcta como descripción de un requisito real de la garantía de seguridad, por lo que no es la respuesta buscada.",
    "b": "Correcta como descripción de un requisito real de la garantía de seguridad, por lo que no es la respuesta buscada.",
    "c": "Es la afirmación FALSA y por tanto la respuesta correcta a esta pregunta: si los riesgos superan a los beneficios, el medicamento NO debe autorizarse ni salir al mercado; es justo el criterio opuesto al que exige la ley.",
    "d": "Correcta como descripción de la garantía de seguridad, por lo que no es la respuesta buscada.",
    "e": "Correcta como principio general, por lo que no es la respuesta buscada (se pide la afirmación falsa)."
  },
  "repetida": false
},

{
  "id": "t2-017",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de las siguientes es un requisito de la garantía de eficacia de los medicamentos?",
  "opciones": { "a": "El efecto terapéutico obtenido en los ensayos debe cuantificarse para las distintas dosis y en todas las indicaciones solicitadas.", "b": "Ninguna es correcta.", "c": "Los medicamentos genéricos deberán designarse con una Denominación Oficial Española de principio activo.", "d": "Todo medicamento debe alcanzar los requisitos de calidad que se establezcan." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Es un requisito propio de la garantía de eficacia: el efecto terapéutico debe cuantificarse en las distintas dosis y para todas las indicaciones que se soliciten.",
    "b": "Incorrecta porque la opción a sí describe correctamente un requisito de la garantía de eficacia.",
    "c": "Incorrecta. Este requisito pertenece a la garantía de identificación, no a la de eficacia.",
    "d": "Incorrecta. Este requisito pertenece a la garantía de calidad."
  },
  "repetida": true
},

{
  "id": "t2-018",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Respecto a la garantía de información, señala la afirmación correcta:",
  "opciones": { "a": "La información debe presentarse, al menos, en lengua española, y con ella se elaborará la ficha técnica, el prospecto y el etiquetado.", "b": "No es necesario que la información sea comprensible para el paciente.", "c": "La información solo es obligatoria para medicamentos de uso hospitalario.", "d": "La información debe presentarse primero en inglés y después en la lengua del país donde se venda." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La ley exige que la información sobre identificación, indicaciones y precauciones se presente al menos en español, y a partir de ella se elaboran la ficha técnica, el prospecto y el etiquetado.",
    "b": "Incorrecta porque, al contrario, la ley exige explícitamente que la información sea precisa, comprensible y accesible para quien la reciba.",
    "c": "Incorrecta porque la garantía de información aplica a todos los medicamentos, no solo a los de uso hospitalario.",
    "d": "Incorrecta porque invierte el criterio real: no se exige el inglés como idioma prioritario, sino como mínimo el español."
  },
  "repetida": true
},

{
  "id": "t2-019",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Señala la opción correcta sobre los medicamentos de uso veterinario:",
  "opciones": { "a": "Son sustancias o combinación de ellas que poseen propiedades curativas o preventivas para las enfermedades animales.", "b": "Ninguna es correcta.", "c": "Son destinados únicamente al uso profesional de los veterinarios, no a los animales.", "d": "Son sustancias o combinación de ellas que poseen propiedades curativas o preventivas para las enfermedades humanas." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Los medicamentos veterinarios se definen por su finalidad curativa o preventiva sobre las enfermedades de los animales, en paralelo a la definición de medicamento de uso humano.",
    "b": "Incorrecta porque la opción a sí es correcta.",
    "c": "Incorrecta porque tergiversa el sentido: están destinados a tratar animales, no al 'uso' de los profesionales veterinarios.",
    "d": "Incorrecta porque esa definición correspondería a los medicamentos de uso humano, no a los veterinarios."
  },
  "repetida": true
},

{
  "id": "t2-020",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de los siguientes NO se considera un medicamento especial según la Ley 29/2006?",
  "opciones": { "a": "Medicamentos genéricos", "b": "Gases medicinales", "c": "Vacunas y medicamentos biológicos", "d": "Medicamentos de terapia avanzada", "e": "Radiofármacos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Los medicamentos genéricos son una categoría relativa a los medicamentos de uso humano (comparten principio activo y forma farmacéutica con un medicamento de referencia), no una categoría de 'medicamento especial'.",
    "b": "Incorrecta. Los gases medicinales sí se consideran un medicamento especial.",
    "c": "Incorrecta. Las vacunas y medicamentos biológicos sí forman parte de la categoría de medicamentos especiales.",
    "d": "Incorrecta. Los medicamentos de terapia avanzada sí se consideran medicamentos especiales.",
    "e": "Incorrecta. Los radiofármacos sí son un medicamento especial reconocido."
  },
  "repetida": true
},

{
  "id": "t2-021",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de las siguientes opciones NO es un medicamento especial?",
  "opciones": { "a": "Homeopáticos", "b": "Plantas medicinales", "c": "Medicamentos de terapia avanzada", "d": "Medicamentos de uso humano (como categoría general)" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Los medicamentos homeopáticos sí se recogen como una categoría de medicamento especial.",
    "b": "Incorrecta. Los medicamentos a base de plantas medicinales sí se recogen como una categoría de medicamento especial.",
    "c": "Incorrecta. Los medicamentos de terapia avanzada sí son un medicamento especial reconocido.",
    "d": "Correcta. 'Medicamentos de uso humano' es la gran categoría general dentro de la clasificación legal, no una subcategoría de 'medicamentos especiales'; los medicamentos especiales son un grupo distinto y más concreto."
  },
  "repetida": false
},

{
  "id": "t2-022",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "De las siguientes categorías, ¿cuál NO se corresponde con un medicamento legalmente reconocido según la Ley 29/2006?",
  "opciones": { "a": "Antidepresivos", "b": "Gases medicinales", "c": "Radiofármacos", "d": "Medicamentos en investigación", "e": "Medicamentos de terapia avanzada" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. 'Antidepresivos' es una clase terapéutica definida por su efecto farmacológico, no una categoría legal recogida en la clasificación de la Ley 29/2006.",
    "b": "Incorrecta. Los gases medicinales son un grupo legalmente reconocido dentro de los medicamentos especiales.",
    "c": "Incorrecta. Los radiofármacos son un grupo legalmente reconocido dentro de los medicamentos especiales.",
    "d": "Incorrecta. Los medicamentos en investigación sí constituyen una categoría legalmente reconocida.",
    "e": "Incorrecta. Los medicamentos de terapia avanzada son un grupo legalmente reconocido, dentro de los medicamentos especiales."
  },
  "repetida": false
},

{
  "id": "t2-023",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de las siguientes opciones NO es un medicamento?",
  "opciones": { "a": "Fórmula magistral", "b": "Medicamento genérico", "c": "Cualquier medicamento incluido en la Ley 29/2006", "d": "Producto sanitario", "e": "Preparado oficinal" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. La fórmula magistral sí es un tipo de medicamento legalmente reconocido.",
    "b": "Incorrecta. El medicamento genérico sí es un medicamento, dentro de los de uso humano.",
    "c": "Incorrecta porque, por definición, todo lo incluido como medicamento en la Ley 29/2006 sí es un medicamento.",
    "d": "Correcta. Un producto sanitario (por ejemplo, una jeringa o un apósito) se rige por normativa distinta y no se clasifica como medicamento, aunque a veces se dispense también en la oficina de farmacia.",
    "e": "Incorrecta. El preparado oficinal sí es un tipo de medicamento legalmente reconocido."
  },
  "repetida": false
},

{
  "id": "t2-024",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Según la Ley 29/2006, ¿cuál de las siguientes clasificaciones agrupa correctamente a los medicamentos legalmente reconocidos?",
  "opciones": { "a": "Fórmulas magistrales, preparados oficinales, medicamentos de uso humano y veterinario, y medicamentos especiales.", "b": "Fórmulas magistrales, medicamentos homeopáticos, medicamentos de uso humano y preparados oficinales.", "c": "Medicamentos genéricos, medicamentos de marca y medicamentos homeopáticos.", "d": "Únicamente medicamentos de uso humano y medicamentos de uso veterinario." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Estos cuatro grandes grupos (fórmulas magistrales, preparados oficinales, medicamentos de uso humano y veterinario, y medicamentos especiales) constituyen la clasificación legal completa.",
    "b": "Incorrecta porque mezcla una subcategoría (medicamentos homeopáticos) con las categorías principales, dejando fuera a los medicamentos veterinarios y especiales.",
    "c": "Incorrecta porque son subclasificaciones dentro de 'medicamentos de uso humano', no las categorías principales de la ley.",
    "d": "Incorrecta porque omite las fórmulas magistrales, los preparados oficinales y los medicamentos especiales."
  },
  "repetida": true
},

{
  "id": "t2-025",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Según la Ley 29/2006, ¿cuántos principios activos puede contener un medicamento homeopático?",
  "opciones": { "a": "Los medicamentos homeopáticos no se consideran medicamentos según la ley.", "b": "Ninguno, por definición no llevan principio activo.", "c": "Uno únicamente.", "d": "Puede contener varios (varias cepas combinadas)." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque la Ley 29/2006 sí reconoce explícitamente a los medicamentos homeopáticos como una categoría de medicamento especial.",
    "b": "Incorrecta porque, aunque a dosis muy diluidas, los medicamentos homeopáticos sí se elaboran a partir de una o varias sustancias (cepas) consideradas su principio activo.",
    "c": "Incorrecta porque la ley no limita el medicamento homeopático a una única cepa o principio.",
    "d": "Correcta. Un medicamento homeopático puede estar compuesto por varias cepas o sustancias combinadas."
  },
  "repetida": false
},

{
  "id": "t2-026",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Qué tipo de medicamento se puede elaborar en grandes cantidades y NO necesita estar prescrito individualmente por un médico para cada paciente?",
  "opciones": { "a": "Medicamentos homeopáticos individualizados", "b": "Fórmulas magistrales", "c": "Medicamentos de uso humano industriales", "d": "Preparados oficinales" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque, si se describen como 'individualizados', dejan de cumplir la característica de fabricarse en grandes cantidades sin destinatario concreto.",
    "b": "Incorrecta. La fórmula magistral es, por definición, individualizada para un paciente concreto y requiere prescripción médica.",
    "c": "Incorrecta porque los medicamentos industriales de uso humano no se elaboran en la oficina de farmacia, que es el contexto de esta pregunta.",
    "d": "Correcta. El preparado oficinal se elabora en la oficina de farmacia según normas de correcta elaboración, en cantidades mayores y sin ir destinado a un paciente concreto por prescripción individual."
  },
  "repetida": true
},

{
  "id": "t2-027",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Según la Ley 29/2006, ¿cómo debe ser la información de todos los medicamentos?",
  "opciones": { "a": "Clara y concisa únicamente.", "b": "Precisa, comprensible y en al menos 4 idiomas.", "c": "Precisa, comprensible y en un formato accesible.", "d": "Práctica, clara y breve." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta porque omite los requisitos de precisión y accesibilidad, que son los términos exactos que exige la norma.",
    "b": "Incorrecta porque la ley exige, como mínimo, la lengua española, no un número fijo de idiomas.",
    "c": "Correcta. La garantía de información exige literalmente que la información sea precisa, comprensible y esté en un formato accesible para quien la reciba.",
    "d": "Incorrecta porque no recoge los términos exactos exigidos por la ley (precisión y accesibilidad del formato)."
  },
  "repetida": true
},

{
  "id": "t2-028",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "¿Cuál de los siguientes NO es un medicamento legalmente reconocido según la Ley 29/2006?",
  "opciones": { "a": "Radiofármacos", "b": "Medicamento de terapia génica avanzada", "c": "Medicamento de origen natural (como categoría legal propia)", "d": "Medicamentos de uso humano", "e": "Gases medicinales" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Los radiofármacos sí son un medicamento especial reconocido.",
    "b": "Incorrecta. Los medicamentos de terapia génica avanzada sí son un medicamento especial reconocido.",
    "c": "Correcta. 'Medicamento de origen natural' no constituye, como tal, una categoría legal propia dentro de la clasificación de la Ley 29/2006, a diferencia de las categorías concretas de medicamentos especiales que sí están explícitamente recogidas.",
    "d": "Incorrecta. Los medicamentos de uso humano sí son una de las grandes categorías legales reconocidas.",
    "e": "Incorrecta. Los gases medicinales sí son un medicamento especial reconocido."
  },
  "repetida": false
},

{
  "id": "t2-029",
  "tema": "Legislación farmacéutica y medicamentos legalmente reconocidos",
  "pregunta": "Respecto a los medicamentos genéricos, señala la opción correcta:",
  "opciones": { "a": "Tienen la misma composición cualitativa y cuantitativa que el medicamento de referencia, y se identifican con las siglas EFG en su acondicionamiento.", "b": "Pueden tener otra forma farmacéutica distinta a la del medicamento de referencia.", "c": "No es necesario que su bioequivalencia haya sido demostrada.", "d": "Tienen la misma composición cuantitativa pero distinta composición cualitativa que el medicamento de referencia." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El medicamento genérico exige idéntica composición cualitativa y cuantitativa de principio activo respecto al de referencia, y se distingue visualmente porque incorpora las siglas EFG (Equivalente Farmacéutico Genérico).",
    "b": "Incorrecta porque el genérico debe mantener la misma forma farmacéutica que el medicamento de referencia.",
    "c": "Incorrecta porque la demostración de bioequivalencia mediante estudios de biodisponibilidad es un requisito imprescindible para que un medicamento se considere genérico.",
    "d": "Incorrecta porque el genérico debe coincidir tanto en composición cualitativa como cuantitativa de principio activo con el medicamento de referencia."
  },
  "repetida": true
},

{
  "id": "t3-001",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿En qué época surgieron los alquimistas?",
  "opciones": { "a": "Siglo XVIII-XIX", "b": "En la Edad Media", "c": "Siglo XIX", "d": "Siglo XVI-XVII", "e": "Siglo XX" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Los siglos XVIII-XIX corresponden más bien a la consolidación de la química moderna, posterior al periodo alquimista.",
    "b": "Incorrecta. Aunque la alquimia tiene raíces medievales, su desarrollo más característico dentro del temario se sitúa en los siglos XVI-XVII.",
    "c": "Incorrecta. El siglo XIX es también posterior al periodo alquimista propiamente dicho.",
    "d": "Correcta. Los siglos XVI-XVII, coincidiendo con el Renacimiento y la obra de Paracelso, son la época asociada al auge de la alquimia como precursora de la iatroquímica.",
    "e": "Incorrecta. El siglo XX corresponde al periodo tecnológico y biofarmacéutico, muy posterior a los alquimistas."
  },
  "repetida": false
},

{
  "id": "t3-002",
  "tema": "Historia de la Farmacia",
  "pregunta": "En cuanto a Paracelso, señala la opción correcta. Fue:",
  "opciones": { "a": "Quien dio importancia a la conservación de los remedios.", "b": "Quien dijo que lo similar curaba lo similar.", "c": "Quien planteó que había un remedio para cada enfermedad, directamente de la naturaleza.", "d": "Un alquimista, médico y astrólogo suizo.", "e": "Un médico y filósofo de la Grecia clásica, contemporáneo de Hipócrates." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta; no es el rasgo que históricamente define a Paracelso.",
    "b": "Incorrecta; el principio de que 'lo similar cura lo similar' (similia similibus curentur) es la base de la homeopatía, fundada por Hahnemann, no por Paracelso.",
    "c": "Incorrecta como definición de quién fue Paracelso; es más bien una idea asociada a su pensamiento, pero no la que mejor lo identifica en esta pregunta.",
    "d": "Correcta. Paracelso (Philippus Aureolus Theophrastus Bombastus von Hohenheim) fue un alquimista, médico y astrólogo suizo del Renacimiento, considerado padre de la iatroquímica.",
    "e": "Incorrecta. Paracelso vivió en el Renacimiento (siglos XV-XVI), muchos siglos después de la Grecia clásica de Hipócrates; no fueron contemporáneos."
  },
  "repetida": true
},

{
  "id": "t3-003",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Quién comenzó a utilizar sustancias inorgánicas (minerales) como medicamento durante el Renacimiento (siglos XVI-XVII)?",
  "opciones": { "a": "Avicena", "b": "Galeno", "c": "Averroes", "d": "Van Helmont", "e": "Paracelso" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. Avicena es una figura clave de la medicina árabe medieval, no del Renacimiento europeo.",
    "b": "Incorrecta. Galeno pertenece a la Antigüedad clásica y su farmacia se basaba en la polifarmacia con productos mayoritariamente de origen vegetal, animal y mineral simple, no en la iatroquímica.",
    "c": "Incorrecta. Averroes es otra figura de la medicina árabe medieval, anterior al Renacimiento.",
    "d": "Incorrecta. Van Helmont es posterior y continuador de algunas ideas iatroquímicas, pero no el iniciador de esta corriente.",
    "e": "Correcta. Paracelso introdujo la iatroquímica, incorporando minerales y sustancias inorgánicas (mercurio, azufre, antimonio) al arsenal terapéutico, en pleno Renacimiento."
  },
  "repetida": true
},

{
  "id": "t3-004",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Cuál de los siguientes conceptos se atribuye a Paracelso?",
  "opciones": { "a": "La técnica de la vacunación.", "b": "El paradigma homeopático 'similia similibus curentur'.", "c": "La teoría de los cuatro elementos de Empédocles.", "d": "La farmacología mineral, el concepto de farmacoterapia etiológica y la idea de las 'enfermedades tártricas'." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. La vacunación fue desarrollada por Edward Jenner, siglos después de Paracelso.",
    "b": "Incorrecta. El principio homeopático 'similia similibus curentur' se atribuye a Samuel Hahnemann, fundador de la homeopatía, no a Paracelso.",
    "c": "Incorrecta. La teoría de los cuatro elementos es muy anterior, de la Grecia clásica (Empédocles), y no una aportación de Paracelso.",
    "d": "Correcta. Paracelso introdujo el uso terapéutico de minerales (farmacología mineral), la idea de tratar la causa específica de la enfermedad (farmacoterapia etiológica) y el concepto de 'enfermedades tártricas' (derivadas de depósitos o precipitados en el organismo)."
  },
  "repetida": true
},

{
  "id": "t3-005",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Quién es considerado el padre de la inmunología y creador de la primera vacuna, contra la viruela?",
  "opciones": { "a": "Hahnemann", "b": "Galeno", "c": "Edward Jenner", "d": "Claude Bernard" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Hahnemann es el fundador de la homeopatía, una disciplina distinta a la inmunología.",
    "b": "Incorrecta. Galeno pertenece a la Antigüedad clásica, muchos siglos antes del desarrollo de la vacunación.",
    "c": "Correcta. Edward Jenner desarrolló en 1796 la primera vacuna, contra la viruela, sentando las bases de la inmunología moderna.",
    "d": "Incorrecta. Claude Bernard es una figura relevante de la fisiología experimental, no el creador de la primera vacuna."
  },
  "repetida": true
},

{
  "id": "t3-006",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Quién fue Alexander Fleming?",
  "opciones": { "a": "Político", "b": "Científico", "c": "Divulgador", "d": "Panadero", "e": "Historiador" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Fleming no desempeñó ninguna actividad política relevante.",
    "b": "Correcta. Alexander Fleming fue un científico (bacteriólogo) que descubrió accidentalmente la penicilina en 1928, hito fundamental de la era de los antibióticos.",
    "c": "Incorrecta. Su labor no fue de divulgación, sino de investigación científica original.",
    "d": "Incorrecta; es una opción claramente absurda incluida como distractor.",
    "e": "Incorrecta. Fleming no se dedicó a la historia como disciplina."
  },
  "repetida": false
},

{
  "id": "t3-007",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Quién es el autor del tratado titulado 'De Materia Medica'?",
  "opciones": { "a": "Dioscórides", "b": "Paracelso", "c": "Hipócrates", "d": "Descartes", "e": "Galeno" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Pedanio Dioscórides, médico y botánico griego del siglo I d.C., es el autor de 'De Materia Medica', obra fundamental de la farmacognosia y la botánica farmacéutica antigua.",
    "b": "Incorrecta. Paracelso pertenece al Renacimiento, muchos siglos después de Dioscórides.",
    "c": "Incorrecta. Hipócrates es anterior a Dioscórides y su obra se centra en la práctica clínica, no en un tratado sistemático de materia médica.",
    "d": "Incorrecta. Descartes es un filósofo del siglo XVII, ajeno a este tratado de materia médica.",
    "e": "Incorrecta. Galeno escribió numerosas obras médicas y farmacéuticas propias, pero no 'De Materia Medica'."
  },
  "repetida": false
},

{
  "id": "t3-008",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Qué personaje histórico introdujo el término 'homeopatía'?",
  "opciones": { "a": "Averroes", "b": "Hipócrates", "c": "Hahnemann", "d": "Galeno" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Averroes es una figura de la medicina árabe medieval, sin relación con el origen de la homeopatía.",
    "b": "Incorrecta. Aunque algunas ideas antiguas se han vinculado de forma laxa con el pensamiento hipocrático, el término y el sistema homeopático como tal los formuló Hahnemann.",
    "c": "Correcta. Samuel Hahnemann acuñó el término 'homeopatía' a finales del siglo XVIII, fundamentándola en el principio 'similia similibus curentur' (lo similar cura lo similar).",
    "d": "Incorrecta. Galeno se asocia históricamente a la polifarmacia y a la tradición alopática clásica, no a la homeopatía."
  },
  "repetida": true
},

{
  "id": "t3-009",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Qué caracteriza la práctica farmacéutica de Galeno?",
  "opciones": { "a": "La homeopatía (lo similar cura lo similar).", "b": "La vacunación.", "c": "El uso exclusivo de un único principio activo por preparado.", "d": "La polifarmacia: combinación de numerosos principios activos en una misma preparación, con escasa especificidad." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. La homeopatía es un sistema terapéutico posterior, formulado por Hahnemann, opuesto en planteamiento a la tradición galénica.",
    "b": "Incorrecta. La vacunación es un desarrollo mucho más tardío, de finales del siglo XVIII, obra de Edward Jenner.",
    "c": "Incorrecta. Es justo lo contrario: la seña de identidad de la farmacia galénica es la combinación de múltiples componentes, no el uso de uno solo.",
    "d": "Correcta. La farmacia galénica se caracteriza por la polifarmacia: preparados que combinan múltiples sustancias de origen vegetal, animal o mineral, con una especificidad de acción relativamente baja."
  },
  "repetida": true
},

{
  "id": "t3-010",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Quién fue el primero en expresar que los procesos vitales son de naturaleza química?",
  "opciones": { "a": "Dioscórides", "b": "Paracelso", "c": "Federico II", "d": "Galeno" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Dioscórides se centró en la descripción de remedios naturales, no en una teoría química de la vida.",
    "b": "Correcta. Esta idea es la base de la iatroquímica que impulsó Paracelso: entender la fisiología y la enfermedad como procesos de naturaleza química, tratables con remedios químicos.",
    "c": "Incorrecta. Federico II es una figura política y cultural medieval, no asociada a esta idea.",
    "d": "Incorrecta. Galeno explicaba los procesos vitales mediante la teoría de los cuatro humores, de base filosófico-fisiológica, no química."
  },
  "repetida": false
},

{
  "id": "t3-011",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Qué predominó en las escuelas de medicina durante los siglos XVII al XIX?",
  "opciones": { "a": "La farmacología moderna", "b": "La cultura botánica", "c": "La cultura galénica (el galenismo)", "d": "La vacuna" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La farmacología como ciencia experimental moderna se consolida más tarde, ya avanzado el siglo XIX y en el XX.",
    "b": "Incorrecta. La botánica fue una disciplina auxiliar importante, pero no la corriente dominante en la enseñanza médica de ese periodo.",
    "c": "Correcta. Pese a los avances renacentistas, el galenismo (la tradición médica basada en las doctrinas de Galeno) siguió dominando la enseñanza médica en gran parte de Europa hasta bien entrado el siglo XIX.",
    "d": "Incorrecta. La vacuna es un descubrimiento puntual de finales del siglo XVIII, no una corriente doctrinal de la enseñanza médica."
  },
  "repetida": false
},

{
  "id": "t3-012",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Qué principios caracterizan la tradición médica hipocrático-galénica, frente a la homeopatía posterior?",
  "opciones": { "a": "'Robar el fuego de los dioses', un mito ajeno a la medicina.", "b": "'Similia similibus curantur' (lo similar cura lo similar).", "c": "'Primum non nocere' (lo primero es no hacer daño) y 'Contraria contraris curantur' (lo contrario cura con lo contrario), es decir, la alopatía.", "d": "Únicamente el principio de alopatía, sin ninguna otra consideración." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Es una referencia mitológica (Prometeo) sin relación con los principios terapéuticos de la tradición hipocrático-galénica.",
    "b": "Incorrecta. 'Similia similibus curantur' es precisamente el principio opuesto, propio de la homeopatía de Hahnemann, formulado como reacción a la medicina alopática tradicional.",
    "c": "Correcta. La tradición médica clásica se resume en estos dos principios: no perjudicar al paciente ('primum non nocere') y tratar la enfermedad con remedios de efecto contrario a sus síntomas (alopatía, 'contraria contraris curantur').",
    "d": "Incorrecta porque omite el principio ético 'primum non nocere', que también es central en esta tradición."
  },
  "repetida": true
},

{
  "id": "t3-013",
  "tema": "Historia de la Farmacia",
  "pregunta": "Según el pensamiento hipocrático, señala la afirmación correcta:",
  "opciones": { "a": "La salud es el Orden Natural, y la enfermedad es el desorden de la Physis o Natura.", "b": "La salud es una desnaturalización.", "c": "El medicamento es el Orden Natural.", "d": "La enfermedad es superior al Orden Natural y no puede combatirse mediante la terapéutica médica." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Para Hipócrates, la salud representa el equilibrio u Orden Natural del organismo (la Physis), mientras que la enfermedad supone precisamente el desorden de ese equilibrio natural.",
    "b": "Incorrecta; es justo la idea opuesta a la sostenida por el pensamiento hipocrático.",
    "c": "Incorrecta. En el pensamiento hipocrático, lo que se identifica con el Orden Natural es la salud, no el medicamento en sí.",
    "d": "Incorrecta. Para Hipócrates, la enfermedad (el desorden de la Physis) sí podía y debía combatirse mediante la observación y la terapéutica médica racional."
  },
  "repetida": false
},

{
  "id": "t3-014",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Cuál de las siguientes NO es uno de los cuatro elementos de Empédocles?",
  "opciones": { "a": "Tierra", "b": "Fuego", "c": "Agua", "d": "Aire", "e": "Animales" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. La tierra sí es uno de los cuatro elementos clásicos.",
    "b": "Incorrecta. El fuego sí es uno de los cuatro elementos clásicos de Empédocles.",
    "c": "Incorrecta. El agua sí es uno de los cuatro elementos clásicos.",
    "d": "Incorrecta. El aire sí es uno de los cuatro elementos clásicos.",
    "e": "Correcta. Los 'animales' no forman parte de la teoría de los cuatro elementos; esta teoría filosófica de la Grecia clásica se refiere únicamente a fuego, aire, tierra y agua como componentes básicos de la materia."
  },
  "repetida": false
},

{
  "id": "t3-015",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Qué rama de la farmacología surgió a raíz de los sucesos ocurridos por el uso de talidomida en mujeres embarazadas?",
  "opciones": { "a": "Farmacovigilancia", "b": "Farmacocinética", "c": "Termofarmacia", "d": "Farmacoergasia", "e": "Farmacia galénica" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La tragedia de la talidomida (que causó graves malformaciones fetales en los años 60) impulsó la creación de sistemas de farmacovigilancia para detectar y prevenir reacciones adversas de los medicamentos ya comercializados.",
    "b": "Incorrecta. La farmacocinética estudia la evolución del fármaco en el organismo, pero no nació específicamente de este episodio histórico.",
    "c": "Incorrecta; es una disciplina inventada como distractor, sin relación con este episodio.",
    "d": "Incorrecta. La farmacoergasia se ocupa de la elaboración tecnológica de los medicamentos, sin relación directa con este suceso.",
    "e": "Incorrecta. La farmacia galénica es muy anterior y no está relacionada con este suceso concreto."
  },
  "repetida": false
},

{
  "id": "t3-016",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿A qué periodo de la Historia de la Farmacia pertenecen los progresos en química y los nuevos procesos de síntesis orgánica que produjeron nuevos grupos de principios activos?",
  "opciones": { "a": "Periodo tecnológico", "b": "Periodo biotecnológico", "c": "Periodo empírico", "d": "Periodo biofarmacéutico" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El periodo tecnológico se caracteriza por los grandes avances en química y en los procesos de síntesis orgánica, que permitieron obtener nuevos grupos de principios activos de forma industrial.",
    "b": "Incorrecta. El periodo biotecnológico se caracteriza más bien por el uso de organismos vivos y técnicas de ingeniería genética, en una etapa posterior.",
    "c": "Incorrecta. El periodo empírico es muy anterior, previo al desarrollo de la química como ciencia moderna.",
    "d": "Incorrecta. El periodo biofarmacéutico se centra en el estudio de la relación entre la formulación y la respuesta biológica del fármaco, no en la síntesis química en sí."
  },
  "repetida": false
},

{
  "id": "t3-017",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Qué periodo de la Historia de la Farmacia abarca aproximadamente desde el siglo XX hasta 1960?",
  "opciones": { "a": "Periodo Tecnológico", "b": "Periodo Biofarmacéutico", "c": "Periodo Empírico", "d": "Periodo Biotecnológico", "e": "Periodo Pretecnológico" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El periodo tecnológico se extiende aproximadamente desde comienzos del siglo XX hasta 1960, marcado por la industrialización de la producción farmacéutica y el desarrollo de la síntesis química a gran escala.",
    "b": "Incorrecta. El periodo biofarmacéutico se sitúa a partir de aproximadamente 1960 en adelante, justo después del rango indicado en esta pregunta.",
    "c": "Incorrecta. El periodo empírico es muy anterior al siglo XX.",
    "d": "Incorrecta. El periodo biotecnológico es posterior, situado a partir de las décadas de 1970-1980 con el auge de la ingeniería genética.",
    "e": "Incorrecta. El periodo pretecnológico es anterior al siglo XX, previo a la industrialización farmacéutica."
  },
  "repetida": false
},

{
  "id": "t3-018",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿A qué periodo de la Historia de la Farmacia pertenece el subperiodo experimental?",
  "opciones": { "a": "Periodo Tecnológico", "b": "Periodo Biotecnológico", "c": "Periodo Pretecnológico", "d": "Periodo Empírico", "e": "Periodo Biofarmacéutico" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. El periodo tecnológico corresponde a una etapa mucho más avanzada, con procesos industriales de síntesis.",
    "b": "Incorrecta. El periodo biotecnológico es el más reciente de todos, sin relación con este subperiodo.",
    "c": "Incorrecta. El periodo pretecnológico es una etapa distinta, previa al desarrollo de un método experimental estructurado.",
    "d": "Correcta. Dentro del periodo empírico se distinguen distintos subperiodos (instintivo, mágico, empírico-racional y experimental), en los que la terapéutica se basaba en la observación y la prueba, incluyendo el uso de animales enfermos como referencia.",
    "e": "Incorrecta. El periodo biofarmacéutico es muy posterior, centrado en el estudio de la biodisponibilidad."
  },
  "repetida": false
},

{
  "id": "t3-019",
  "tema": "Historia de la Farmacia",
  "pregunta": "¿Cuál de las siguientes afirmaciones sobre la historia de la medicina es correcta?",
  "opciones": { "a": "La teoría de la circulación de Harvey decía que la sangre solo llegaba a un lugar específico del cuerpo.", "b": "En el Romanticismo (siglo XIX) se desarrolló la quimioterapia sintética de la mano de Wöhler.", "c": "Paracelso estableció el principio de que 'lo contrario cura con lo contrario'.", "d": "La enfermedad preternatural se asociaba con una alteración profunda y mortal que no podía subsanarse con la terapia médica, sino con la práctica piadosa.", "e": "Hipócrates estableció el principio de que 'lo similar cura con lo similar'." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Harvey demostró justo lo contrario: que la sangre circula de forma continua por todo el cuerpo en un sistema cerrado, refutando la idea previa de que se consumía en los tejidos.",
    "b": "Incorrecta. La síntesis de la urea por Wöhler (1828) es un hito de la química orgánica, pero la quimioterapia sintética como disciplina terapéutica se desarrolla más tarde, ya en el siglo XX, principalmente de la mano de Paul Ehrlich.",
    "c": "Incorrecta. El principio de 'lo contrario cura con lo contrario' (alopatía) es propio de la tradición médica clásica hipocrático-galénica, no una formulación específica de Paracelso.",
    "d": "Correcta. En la medicina antigua y medieval, las enfermedades clasificadas como 'preternaturales' se entendían como alteraciones profundas y de origen sobrenatural que escapaban al alcance de la terapéutica médica y requerían intervención religiosa o piadosa.",
    "e": "Incorrecta. Ese principio ('similia similibus curentur') se atribuye a Hahnemann y a la homeopatía, no a Hipócrates."
  },
  "repetida": false
},

{
  "id": "t4-001",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Qué es la preformulación?",
  "opciones": { "a": "Son los trabajos que se realizan para conocer las características químicas y biofarmacéuticas que influirán en la elección y formulación de la forma farmacéutica más apropiada.", "b": "Son los trabajos que se realizan para conocer las características fisicoquímicas y biofarmacéuticas que influirán en la elección y formulación de la forma farmacéutica más apropiada.", "c": "Son los trabajos que se realizan para conocer las características fisicoquímicas que influirán en la elección y formulación de la forma farmacéutica más apropiada.", "d": "Son los trabajos que se realizan para conocer las características físico y biofarmacéuticas que influirán en la elección y formulación de la forma farmacéutica más apropiada." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque habla solo de características 'químicas', dejando fuera el componente físico, que es esencial en esta fase.",
    "b": "Correcta. La preformulación estudia de forma conjunta las propiedades fisicoquímicas y biofarmacéuticas del principio activo para orientar el diseño de la forma farmacéutica más adecuada.",
    "c": "Incorrecta porque omite las características biofarmacéuticas, igualmente relevantes en la preformulación.",
    "d": "Incorrecta porque separa 'físico' de 'químicas' de forma imprecisa, sin formar el término correcto 'fisicoquímicas'."
  },
  "repetida": false
},

{
  "id": "t4-002",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Qué significa el acrónimo LADME?",
  "opciones": { "a": "Liberación, Absorción, Determinación, Monitorización, Excreción.", "b": "Limpieza, Absorción, Distribución, Metabolismo, Excreción.", "c": "Liberación, Absorción, Donación, Metabolización, Excreción.", "d": "Liberación, Absorción, Distribución, Metabolismo, Excreción." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. La D y la M no corresponden a 'Determinación' y 'Monitorización', que no son procesos farmacocinéticos reales dentro de este esquema.",
    "b": "Incorrecta. La L no corresponde a 'Limpieza', sino a 'Liberación' del principio activo desde la forma farmacéutica.",
    "c": "Incorrecta. La D no corresponde a 'Donación', sino a 'Distribución'.",
    "d": "Correcta. LADME resume las etapas por las que pasa un fármaco en el organismo: Liberación, Absorción, Distribución, Metabolismo y Excreción."
  },
  "repetida": true
},

{
  "id": "t4-003",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Qué concepto mide la cantidad y la velocidad con la que el principio activo llega a la circulación sistémica (sangre)?",
  "opciones": { "a": "La Biodisponibilidad.", "b": "La Farmacotecnia.", "c": "La Farmacocinética, exclusivamente.", "d": "La Biofarmacia, como disciplina general." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La biodisponibilidad se define precisamente como la cantidad de principio activo que alcanza la circulación sistémica y la velocidad a la que lo hace.",
    "b": "Incorrecta. La farmacotecnia se ocupa del diseño y elaboración de las formas farmacéuticas, no de medir cantidad y velocidad de llegada a sangre.",
    "c": "Incorrecta. La farmacocinética estudia la evolución del fármaco en el organismo de forma más amplia (LADME), no es sinónimo exacto de biodisponibilidad.",
    "d": "Incorrecta. La Biofarmacia es la disciplina que estudia estos fenómenos, pero el parámetro concreto que cuantifica cantidad y velocidad de llegada a sangre es la biodisponibilidad."
  },
  "repetida": false
},

{
  "id": "t4-004",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Qué es la Biofarmacia?",
  "opciones": { "a": "Ninguna es correcta.", "b": "Ciencia que estudia las características de liberación del principio activo en la formulación y su absorción a través de membranas.", "c": "Ciencia que estudia las características del principio activo en la formulación y su absorción a través de membranas.", "d": "Ciencia que estudia las características de liberación del principio activo en la formulación a través de membranas." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque la opción a sí recoge correctamente la definición.",
    "b": "Correcta. La Biofarmacia estudia tanto la liberación del principio activo desde la formulación como su posterior absorción a través de las membranas biológicas.",
    "c": "Incorrecta porque no menciona específicamente la liberación desde la formulación, un aspecto central del concepto.",
    "d": "Incorrecta porque omite la fase de absorción como un proceso distinto y posterior a la liberación, uniéndolas incorrectamente."
  },
  "repetida": false
},

{
  "id": "t4-005",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿De cuál de los siguientes procesos NO depende directamente la absorción de un principio activo?",
  "opciones": { "a": "Paso por membranas", "b": "Disolución", "c": "Disgregación", "d": "Distribución" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. El paso por membranas es una de las etapas de las que depende directamente la absorción.",
    "b": "Incorrecta. La disolución del principio activo es un paso imprescindible previo a su absorción.",
    "c": "Incorrecta. La disgregación de la forma farmacéutica es un paso previo necesario para que el principio activo quede disponible para disolverse y absorberse.",
    "d": "Correcta. La distribución es la fase de LADME que ocurre después de la absorción (una vez el fármaco ya está en sangre), por lo que no es un proceso del que dependa la propia absorción."
  },
  "repetida": false
},

{
  "id": "t4-006",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Cuál es la vía de administración de absorción más rápida?",
  "opciones": { "a": "Intramuscular", "b": "Rectal", "c": "Intravenosa", "d": "Oral" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La vía intramuscular es rápida, pero requiere un paso de absorción desde el músculo hasta la sangre que la vía intravenosa no necesita.",
    "b": "Incorrecta. La vía rectal tiene una absorción variable e irregular, más lenta que la intravenosa.",
    "c": "Correcta. La vía intravenosa deposita el fármaco directamente en el torrente sanguíneo, por lo que no existe propiamente una fase de absorción y su efecto es inmediato.",
    "d": "Incorrecta. La vía oral es, generalmente, de las más lentas debido a los procesos de disgregación, disolución y paso por membranas del tracto digestivo."
  },
  "repetida": true
},

{
  "id": "t4-007",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Cuál es la vía de administración preferida en la mayoría de los casos?",
  "opciones": { "a": "Oral", "b": "Tópica", "c": "Nasal", "d": "Intramuscular" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La vía oral es la preferida en la mayoría de los tratamientos por su comodidad, seguridad, coste reducido y buena aceptación por parte del paciente.",
    "b": "Incorrecta. La vía tópica se reserva para tratamientos locales concretos, no es la de elección general.",
    "c": "Incorrecta. La vía nasal se emplea para situaciones específicas, no como primera opción general.",
    "d": "Incorrecta. La vía intramuscular es invasiva y menos cómoda para el paciente que la oral en el uso habitual."
  },
  "repetida": true
},

{
  "id": "t4-008",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Cuál de las siguientes vías puede aumentar el riesgo de efectos tóxicos y hacer que el fármaco desaparezca rápidamente del organismo?",
  "opciones": { "a": "Todas por igual", "b": "Intravenosa", "c": "Intramuscular", "d": "Oral" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque las tres vías no se comportan igual: presentan velocidades de absorción y perfiles de riesgo claramente distintos.",
    "b": "Correcta. Al introducir el fármaco directamente en sangre, la vía intravenosa genera concentraciones plasmáticas máximas de forma inmediata (mayor riesgo de toxicidad aguda) y, sin una forma de liberación sostenida, su efecto puede disminuir con rapidez.",
    "c": "Incorrecta. La vía intramuscular tiene una velocidad de absorción más moderada que la intravenosa, con menor riesgo de picos tóxicos inmediatos.",
    "d": "Incorrecta. La vía oral, al pasar por procesos de disgregación y disolución, tiene una entrada en sangre mucho más gradual."
  },
  "repetida": true
},

{
  "id": "t4-009",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "Señala el orden correcto de los pasos en el proceso de Absorción de un fármaco administrado por vía oral:",
  "opciones": { "a": "Disgregación y paso por membranas, únicamente.", "b": "Disgregación, disolución y paso por membranas.", "c": "Disolución, paso por membranas y disgregación.", "d": "Disgregación, paso por membranas y disolución." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque omite la disolución, un paso intermedio imprescindible entre la disgregación y el paso por membranas.",
    "b": "Correcta. La forma farmacéutica sólida primero se disgrega, después el principio activo se disuelve en los fluidos biológicos y, por último, atraviesa las membranas para llegar a la circulación.",
    "c": "Incorrecta porque altera el orden lógico: la disgregación debe preceder a la disolución.",
    "d": "Incorrecta porque coloca el paso por membranas antes de la disolución, cuando el fármaco debe estar disuelto para poder atravesar las membranas."
  },
  "repetida": true
},

{
  "id": "t4-010",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "Indica la respuesta verdadera en relación con los factores que afectan a la absorción de un fármaco a través de membranas:",
  "opciones": { "a": "Los procesos de disolución de compuestos son normalmente exotérmicos.", "b": "Los tensioactivos, cosolventes y la complejación son mecanismos que dificultan la disolución de un fármaco.", "c": "Las sustancias ionizadas se absorben fácilmente a través de las membranas.", "d": "Un fármaco no ionizado se absorberá con facilidad a través de las membranas." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Los procesos de disolución suelen ser endotérmicos (absorben calor), no exotérmicos, en la mayoría de los fármacos.",
    "b": "Incorrecta. Los tensioactivos, cosolventes y la complejación son, precisamente, mecanismos empleados para facilitar (no dificultar) la disolución de fármacos poco solubles.",
    "c": "Incorrecta. Es justo al contrario: las formas ionizadas, al ser más polares, atraviesan con más dificultad las membranas biológicas de naturaleza lipídica.",
    "d": "Correcta. La forma no ionizada de un fármaco es más liposoluble y, por tanto, atraviesa con mayor facilidad las membranas biológicas, de naturaleza fundamentalmente lipídica."
  },
  "repetida": false
},

{
  "id": "t4-011",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "Respecto a los ensayos de velocidad de disolución, señala la afirmación correcta:",
  "opciones": { "a": "No es necesario que el ensayo esté estandarizado para poder comparar distintos lotes.", "b": "Se busca comprobar que el principio activo se disuelve en el tiempo estimado, fijando la temperatura, la velocidad de agitación, el tiempo de muestreo y el disolvente utilizado.", "c": "Durante el ensayo solo se fija la temperatura.", "d": "Durante el ensayo solo se fijan la temperatura y la velocidad de agitación." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La estandarización es imprescindible precisamente para poder comparar de forma fiable los resultados entre distintos lotes de fabricación.",
    "b": "Correcta. El ensayo de velocidad de disolución busca verificar que el fármaco se disuelve dentro del tiempo esperado, y para ello se estandarizan todas las variables relevantes: temperatura, velocidad de agitación, tiempo de muestreo y disolvente.",
    "c": "Incorrecta porque se fijan más variables además de la temperatura, como la agitación, el disolvente y los tiempos de muestreo.",
    "d": "Incorrecta porque, además de temperatura y agitación, también se fijan el tiempo de muestreo y el disolvente empleado."
  },
  "repetida": true
},

{
  "id": "t4-012",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "Respecto a los ensayos in vitro de velocidad de disolución, señala la opción INCORRECTA:",
  "opciones": { "a": "Analizar la velocidad de disolución de excipientes y principios activos forma parte de la fase de preformulación.", "b": "Nos ayudan a conocer los efectos de los excipientes sobre el comportamiento del principio activo.", "c": "Para que el ensayo sea válido debe estar estandarizado.", "d": "Normalmente se llevan a cabo con principios activos de velocidad de absorción baja, con el fin de acortar el tiempo total del ensayo." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Correcta como afirmación: el estudio de la velocidad de disolución forma parte de los trabajos típicos de la fase de preformulación.",
    "b": "Correcta como afirmación (por eso no es la respuesta buscada): estos ensayos sí ayudan a valorar cómo influyen los excipientes en el comportamiento del principio activo.",
    "c": "Correcta como afirmación: la estandarización es un requisito imprescindible de validez de estos ensayos.",
    "d": "Es la afirmación INCORRECTA y, por tanto, la respuesta buscada: estos ensayos se emplean preferentemente con fármacos de baja velocidad de disolución/absorción porque en ellos la disolución es la etapa limitante y más informativa del proceso de absorción, no por 'acortar' el tiempo del ensayo (de hecho, lo alargaría)."
  },
  "repetida": false
},

{
  "id": "t4-013",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿En qué estado físico se encuentra la mayoría de los principios activos?",
  "opciones": { "a": "Todas son igual de frecuentes", "b": "Estado sólido", "c": "Estado líquido", "d": "Estado gaseoso" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque el estado sólido predomina claramente sobre los demás.",
    "b": "Correcta. La mayoría de los principios activos se presentan en estado sólido, lo que condiciona buena parte de las operaciones básicas de la Tecnología Farmacéutica (pulverización, tamizado, mezclado, etc.).",
    "c": "Incorrecta. Aunque existen principios activos líquidos, no representan la mayoría.",
    "d": "Incorrecta. El estado gaseoso es muy poco frecuente entre los principios activos empleados en formas farmacéuticas convencionales."
  },
  "repetida": false
},

{
  "id": "t4-014",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Qué características fisicoquímicas se estudian conjuntamente en una preparación farmacéutica durante la preformulación?",
  "opciones": { "a": "Únicamente el sabor y el color del producto final.", "b": "Únicamente el precio de las materias primas empleadas.", "c": "Únicamente el nombre comercial que recibirá el medicamento.", "d": "La compatibilidad (con excipientes), el aspecto microscópico y el estado físico, entre otras propiedades." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. El sabor y el color son propiedades organolépticas que pueden tenerse en cuenta, pero no son el objeto central del estudio fisicoquímico de la preformulación.",
    "b": "Incorrecta. El coste de las materias primas es una consideración económica, ajena al estudio fisicoquímico propio de la preformulación.",
    "c": "Incorrecta. El nombre comercial es una decisión regulatoria y de marketing, sin relación con el estudio fisicoquímico del principio activo.",
    "d": "Correcta. En la fase de preformulación se estudian conjuntamente propiedades como la compatibilidad con excipientes, el aspecto microscópico y el estado físico del principio activo, entre otras características fisicoquímicas relevantes."
  },
  "repetida": true
},

{
  "id": "t4-015",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "¿Cuál de los siguientes factores puede causar la degradación de un principio activo en una formulación farmacéutica?",
  "opciones": { "a": "Exposición a la luz solar", "b": "Aumento de la presión atmosférica", "c": "Agitación suave", "d": "Mayor fuerza iónica en el medio" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La exposición a la luz solar (fotodegradación) es un factor ambiental clásico que puede alterar químicamente al principio activo, por lo que muchos medicamentos se envasan protegidos de la luz.",
    "b": "Incorrecta. La presión atmosférica no es un factor determinante de degradación de principios activos en condiciones habituales.",
    "c": "Incorrecta. Una agitación suave no suele aportar la energía suficiente para degradar el principio activo.",
    "d": "Incorrecta. Un cambio moderado en la fuerza iónica del medio no es, por sí solo, una causa típica de degradación relevante."
  },
  "repetida": false
},

{
  "id": "t4-016",
  "tema": "Preformulación y Biofarmacia",
  "pregunta": "Respecto a la elaboración farmacéutica, señala la afirmación INCORRECTA:",
  "opciones": { "a": "La forma oral es la vía preferida en la mayoría de los casos.", "b": "No se necesita una pauta o rango de tomas que asegure la adhesión al tratamiento.", "c": "Siempre la toxicidad debe ser menor que la capacidad terapéutica." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Correcta como afirmación (por eso no es la respuesta buscada): la vía oral es, en efecto, la preferida en la mayoría de los tratamientos.",
    "b": "Es la afirmación INCORRECTA y, por tanto, la respuesta buscada: sí es necesario diseñar una pauta posológica (rango de tomas) adecuada, ya que influye directamente en la adhesión del paciente al tratamiento.",
    "c": "Correcta como afirmación (por eso no es la respuesta buscada): un medicamento debe tener siempre un margen de seguridad en el que la toxicidad quede por debajo del efecto terapéutico buscado."
  },
  "repetida": false
},

{
  "id": "t5-001",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Respecto al hábito cristalino, señala la afirmación correcta:",
  "opciones": { "a": "El hábito cristalino de un cristal es siempre idéntico, independientemente de las condiciones de cristalización.", "b": "El hábito cristalino es el aspecto interno del cristal, mientras que la distribución externa de los átomos es constante.", "c": "Un cristal que presenta una misma distribución interna (misma red cristalina) puede mostrar distintos hábitos cristalinos externos, en función de las condiciones en que haya cristalizado.", "d": "El hábito cristalino determina de forma exclusiva el punto de fusión de la sustancia." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta porque, como se ha explicado, el hábito cristalino sí puede cambiar en función de las condiciones de cristalización, aunque la estructura interna no varíe.",
    "b": "Incorrecta porque invierte los conceptos: lo que se conoce como hábito cristalino es precisamente el aspecto externo, no el interno, y es la distribución interna la que permanece constante para una misma forma cristalina.",
    "c": "Correcta. El hábito cristalino es el aspecto externo del cristal, y puede variar según las condiciones de cristalización (disolvente, temperatura, velocidad de enfriamiento...) aunque la disposición interna de la red cristalina (la distribución de átomos, moléculas o iones) sea la misma.",
    "d": "Incorrecta porque el punto de fusión depende fundamentalmente de la estructura interna (energía de red) y no exclusivamente del aspecto externo del cristal."
  },
  "repetida": false
},

{
  "id": "t5-002",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Respecto a los solvatos e hidratos, señala la afirmación correcta:",
  "opciones": { "a": "Un compuesto cristalino puede cristalizar con una proporción estequiométrica de disolvente, dando lugar a un solvato, o específicamente con agua, dando lugar a un hidrato.", "b": "Los solvatos e hidratos solo pueden formarse en sustancias amorfas.", "c": "La formación de hidratos es imposible en compuestos cristalinos.", "d": "Los solvatos y los hidratos nunca afectan a la biodisponibilidad del medicamento." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Cuando un compuesto cristaliza incorporando moléculas de disolvente en una proporción estequiométrica definida dentro de su red cristalina, se forma un solvato; si el disolvente incorporado es agua, se denomina específicamente hidrato.",
    "b": "Incorrecta porque, por definición, los solvatos e hidratos son compuestos cristalinos, no amorfos: implican una proporción estequiométrica ordenada dentro de una red cristalina.",
    "c": "Incorrecta porque los hidratos son, precisamente, un tipo de compuesto cristalino que incorpora agua en su red.",
    "d": "Incorrecta porque el grado de hidratación o solvatación puede modificar la velocidad de disolución del fármaco y, por tanto, sí puede influir en su biodisponibilidad."
  },
  "repetida": true
},

{
  "id": "t5-003",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Como norma general en preformulación, para favorecer una mejor biodisponibilidad (mayor velocidad de disolución), se tiende a:",
  "opciones": { "a": "Evitar por completo el uso de solvatos orgánicos, sea cual sea su efecto sobre la disolución.", "b": "Igualar siempre la proporción de hidratos frente a la de solvatos.", "c": "Emplear preferentemente la forma anhidra en lugar de los hidratos, ya que estos suelen disolverse más lentamente.", "d": "Evitar el uso de cualquier excipiente en la formulación." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta porque no se trata de evitarlos de forma absoluta, sino de valorar su efecto concreto sobre la disolución caso por caso.",
    "b": "Incorrecta porque no existe una regla de 'igualar proporciones'; lo relevante es el efecto de cada forma sobre la velocidad de disolución, no un equilibrio arbitrario entre ambas.",
    "c": "Correcta. Como norma general, la forma anhidra de un compuesto se disuelve antes y más rápido que su correspondiente hidrato, por lo que suele preferirse cuando se busca favorecer la biodisponibilidad.",
    "d": "Incorrecta porque los excipientes son necesarios en la formulación por múltiples razones (estabilidad, procesabilidad, biodisponibilidad), no algo que deba evitarse por sistema."
  },
  "repetida": false
},

{
  "id": "t5-004",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Respecto a la velocidad de disolución de hidratos y anhidros, señala la afirmación correcta:",
  "opciones": { "a": "El material hidratado se disuelve siempre antes que el material anhidro.", "b": "El material anhidro se disuelve, en general, antes que el material hidratado.", "c": "La forma hidratada y la anhidra tienen siempre idéntica velocidad de disolución.", "d": "La velocidad de disolución no depende del grado de hidratación del cristal." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta; es justo la afirmación contraria a la relación general observada entre ambas formas.",
    "b": "Correcta. Al estar ya 'estabilizado' con moléculas de agua en su red, el hidrato necesita menos energía adicional para alcanzar el equilibrio con el medio acuoso, por lo que en general se disuelve más lentamente que la forma anhidra.",
    "c": "Incorrecta porque ambas formas tienen, en general, energías de red y comportamientos de disolución distintos.",
    "d": "Incorrecta porque el grado de hidratación sí es un factor determinante de la velocidad de disolución de un sólido cristalino."
  },
  "repetida": true
},

{
  "id": "t5-005",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Señala la opción correcta:",
  "opciones": { "a": "La microscopía óptica convencional es la técnica de referencia para medir el punto de fusión.", "b": "El método Coulter utiliza un campo electromagnético para medir partículas esféricas.", "c": "Si una sustancia cristaliza de diferentes formas en las mismas condiciones, solo una de ellas será la forma estable.", "d": "Con el método del capilar obtenemos el valor exacto del punto de fusión." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La técnica microscópica empleada específicamente para determinar el punto de fusión es la microscopía de platina caliente, no la microscopía óptica convencional.",
    "b": "Incorrecta. El método Coulter mide el tamaño de partícula a partir de variaciones de resistencia eléctrica (impedancia) al paso de las partículas suspendidas por una abertura, no mediante un campo electromagnético.",
    "c": "Correcta. Cuando una sustancia presenta polimorfismo (varias formas cristalinas posibles bajo las mismas condiciones), termodinámicamente solo una de esas formas es la estable; las demás son metaestables y tienden a transformarse en la estable con el tiempo.",
    "d": "Incorrecta. El método del capilar proporciona un intervalo aproximado de fusión, no un valor exacto y puntual."
  },
  "repetida": false
},

{
  "id": "t5-006",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "¿Qué técnicas se utilizan para medir el punto de fusión?",
  "opciones": { "a": "Rayos X, microscopía de platina caliente y termogravimetría.", "b": "Técnicas térmicas, método del capilar y Rayos X.", "c": "Microscopía de platina caliente, calorimetría diferencial de barrido y método del capilar.", "d": "Rayos X, termogravimetría y calorimetría diferencial de barrido." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta porque incluye los Rayos X, que no es una técnica de medida del punto de fusión, y omite el método del capilar y la calorimetría diferencial de barrido.",
    "b": "Incorrecta porque los Rayos X se emplean para el estudio de la estructura cristalina, no como técnica directa de determinación del punto de fusión.",
    "c": "Correcta. Las tres técnicas clásicas para determinar el punto de fusión son el método del capilar, la microscopía de platina caliente y la calorimetría diferencial de barrido (DSC).",
    "d": "Incorrecta por la misma razón: los Rayos X no son una técnica para medir el punto de fusión."
  },
  "repetida": false
},

{
  "id": "t5-007",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "¿Qué tienen en común la microscopía de platina caliente, la calorimetría diferencial de barrido y la termogravimetría, como técnicas de análisis de polimorfos, hidratos y sólidos amorfos?",
  "opciones": { "a": "Son todas técnicas térmicas, basadas en observar cambios del material frente a la temperatura.", "b": "Ninguna de ellas permite detectar cambios relacionados con el polimorfismo.", "c": "Son todas técnicas basadas exclusivamente en la difracción de rayos X.", "d": "Son técnicas empleadas exclusivamente para medir el tamaño de partícula." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Las tres son técnicas térmicas: la microscopía de platina caliente observa visualmente los cambios del sólido al variar la temperatura, la calorimetría diferencial de barrido mide flujos de calor asociados a transiciones térmicas, y la termogravimetría registra la variación de masa de la muestra con la temperatura.",
    "b": "Incorrecta. Las tres técnicas son, precisamente, herramientas habituales para detectar polimorfismo, ya que cada forma polimórfica presenta un comportamiento térmico característico y distinto.",
    "c": "Incorrecta. Ninguna de las tres se basa en la difracción de rayos X; esa es una técnica distinta, empleada para el estudio directo de la estructura cristalina.",
    "d": "Incorrecta. Estas técnicas se emplean para caracterizar el comportamiento térmico y la naturaleza cristalina o amorfa del sólido, no para medir el tamaño de partícula."
  },
  "repetida": false
},

{
  "id": "t5-008",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Indica la afirmación correcta sobre los factores que afectan a la solubilidad de un sólido:",
  "opciones": { "a": "Las sales o sustancias iónicas disminuyen la solubilidad frente a la forma no ionizada.", "b": "El tamaño de partícula, la cristalinidad y la ionización no influyen en la solubilidad de un sólido.", "c": "A mayor tamaño de partícula, menor solubilidad (aparente).", "d": "Las formas amorfas disminuyen la solubilidad frente a las cristalinas." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta; la salificación (formación de sales iónicas) es precisamente una estrategia habitual para aumentar, no disminuir, la solubilidad de fármacos poco solubles.",
    "b": "Incorrecta. Los tres factores mencionados (tamaño de partícula, cristalinidad e ionización) influyen de forma bien documentada en la solubilidad de un sólido.",
    "c": "Correcta. Al aumentar el tamaño de partícula disminuye la superficie específica en contacto con el disolvente, lo que reduce la velocidad y la solubilidad aparente del sólido; por eso reducir el tamaño de partícula es una estrategia habitual para mejorar la disolución.",
    "d": "Incorrecta; es justo lo contrario: al ser estructuras de mayor energía y menor orden, las formas amorfas generalmente aumentan la solubilidad aparente frente a la forma cristalina equivalente."
  },
  "repetida": true
},

{
  "id": "t5-009",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "¿A qué parámetro corresponde la siguiente definición? 'Cantidad máxima de soluto que admite un volumen dado de disolvente en condiciones preestablecidas de temperatura y presión, y que se puede expresar como unidades de masa disueltas en una unidad de volumen'.",
  "opciones": { "a": "Disolución", "b": "Sistema disperso", "c": "Solubilidad", "d": "Soluto", "e": "Disolvente" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La disolución es el proceso por el cual el soluto se dispersa en el disolvente, no la cantidad máxima admisible.",
    "b": "Incorrecta. Un sistema disperso es aquel en el que una fase (dispersa) se distribuye en el seno de otra (dispersante), un concepto más general.",
    "c": "Correcta. Esta es la definición clásica de solubilidad: la cantidad máxima de soluto que un volumen determinado de disolvente puede admitir en unas condiciones fijas de temperatura y presión.",
    "d": "Incorrecta. El soluto es la sustancia que se disuelve, no el parámetro que mide la cantidad máxima admisible de la misma.",
    "e": "Incorrecta. El disolvente es el medio que disuelve al soluto, no el parámetro que cuantifica la cantidad máxima disuelta."
  },
  "repetida": false
},

{
  "id": "t5-010",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Los hidratos son:",
  "opciones": { "a": "Compuestos polimorfos que incluyen grupos hidroxilo.", "b": "Compuestos cristalinos hidratados de proporciones no estequiométricas.", "c": "Compuestos cristalinos con posible alteración de su biodisponibilidad.", "d": "Sustancias amorfas con gran cantidad de moléculas de agua en su estructura." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Los hidratos no se definen por la presencia de grupos hidroxilo en su estructura química, sino por la incorporación de moléculas de agua en la red cristalina.",
    "b": "Incorrecta. Lo que caracteriza a un verdadero hidrato es precisamente que el agua se incorpora en una proporción estequiométrica (definida y constante), no aleatoria.",
    "c": "Correcta. Al ser compuestos cristalinos distintos de la forma anhidra, con propiedades de disolución diferentes, los hidratos pueden alterar la biodisponibilidad del fármaco respecto a otras formas del mismo compuesto.",
    "d": "Incorrecta. Los hidratos son compuestos cristalinos, no amorfos; incorporan agua dentro de una red cristalina ordenada."
  },
  "repetida": false
},

{
  "id": "t5-011",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Respecto a los sólidos amorfos y cristalinos, señala la afirmación correcta:",
  "opciones": { "a": "Los sólidos amorfos son siempre más estables que los cristalinos.", "b": "Los sólidos amorfos y los cristalinos son indistinguibles en cuanto a sus propiedades fisicoquímicas.", "c": "Los sólidos cristalinos no tienen un punto de fusión definido.", "d": "Los sólidos cristalinos presentan una disposición ordenada y repetitiva de sus componentes (átomos, moléculas o iones) en las tres dimensiones del espacio, mientras que los sólidos amorfos carecen de dicho orden de largo alcance." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta; es justo lo contrario: los sólidos amorfos, al tener mayor energía interna, son generalmente menos estables que los cristalinos y tienden a cristalizar con el tiempo.",
    "b": "Incorrecta. Ambos tipos difieren notablemente en solubilidad, punto de fusión, estabilidad y otras propiedades fisicoquímicas.",
    "c": "Incorrecta. Son precisamente los sólidos cristalinos los que presentan un punto de fusión definido y neto, a diferencia de los amorfos, que ablandan de forma gradual (no tienen un punto de fusión neto).",
    "d": "Correcta. La diferencia fundamental entre ambos tipos de sólidos es el grado de orden estructural: los cristalinos presentan una red ordenada y periódica en las tres dimensiones, mientras que los amorfos carecen de esa organización de largo alcance."
  },
  "repetida": false
},

{
  "id": "t5-012",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "La deformación plástica es típica de:",
  "opciones": { "a": "Sólidos amorfos", "b": "Derivados de cristales polimorfos", "c": "Sólidos cristalinos (elásticos)", "d": "Excipientes de naturaleza plástica, exclusivamente" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Al carecer de una red cristalina ordenada que oponga resistencia estructural, los sólidos amorfos tienden a deformarse de manera permanente (plástica) bajo la acción de una fuerza.",
    "b": "Incorrecta porque el polimorfismo se refiere a distintas formas cristalinas, que tienden a comportarse de forma elástica, no plástica.",
    "c": "Incorrecta. Los sólidos cristalinos tienden a comportarse de forma elástica (deformación reversible) hasta el punto de fractura, no de forma plástica.",
    "d": "Incorrecta porque restringe el fenómeno a un grupo muy concreto de excipientes, cuando en realidad es una propiedad general asociada al carácter amorfo del sólido."
  },
  "repetida": false
},

{
  "id": "t5-013",
  "tema": "Estado sólido: cristalinidad y polimorfismo",
  "pregunta": "Señala la respuesta correcta sobre los tipos de sólidos, según su comportamiento frente a una fuerza aplicada:",
  "opciones": { "a": "En los sólidos plásticos existe un límite de fuerza a partir del cual se rompen bruscamente, sin deformarse antes.", "b": "En los sólidos elásticos, la deformación se mantiene cuando se deja de aplicar la fuerza.", "c": "En los sólidos plásticos, cuando se deja de aplicar la fuerza, el sólido vuelve a su estado original.", "d": "En los sólidos elásticos, la deformación termina cuando lo hace la fuerza, volviendo el sólido a su estado inicial." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Los sólidos plásticos se caracterizan justamente por deformarse de manera permanente antes de llegar a romperse, no por romperse bruscamente sin deformación previa.",
    "b": "Incorrecta; describe el comportamiento de un sólido plástico (deformación permanente), no el de uno elástico.",
    "c": "Incorrecta; describe el comportamiento de un sólido elástico (recuperación de la forma original), no el de uno plástico.",
    "d": "Correcta. La deformación elástica es reversible: desaparece en el momento en que deja de aplicarse la fuerza, recuperando el sólido su forma inicial."
  },
  "repetida": false
},

{
  "id": "t6-001",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "Respecto a la teoría de Griffith sobre la reducción de tamaño de partícula, señala la afirmación correcta:",
  "opciones": { "a": "La potencia necesaria es proporcional al cambio de tamaño.", "b": "La energía necesaria es proporcional al tamaño de grieta, o al cambio de dimensiones.", "c": "La energía necesaria para romper una sustancia es aquella capaz de vencer la resistencia para que avance una grieta en el material.", "d": "La energía necesaria es directamente proporcional a la nueva superficie generada, sin relación con los defectos del material." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta porque habla de 'potencia' en lugar de energía, y de un 'cambio de tamaño' genérico que no refleja el mecanismo de propagación de grietas descrito por Griffith.",
    "b": "Incorrecta porque simplifica la relación a una simple proporcionalidad con el 'tamaño de grieta', sin recoger la idea central de vencer la resistencia al avance de la grieta.",
    "c": "Correcta. La teoría de Griffith explica que los materiales reales se rompen a niveles de energía mucho menores que los teóricos porque poseen microgrietas o defectos preexistentes; la energía necesaria para fracturarlos es la que permite que esas grietas progresen a través del material.",
    "d": "Incorrecta porque, aunque la superficie nueva generada está relacionada con la energía superficial, la formulación de Griffith gira en torno a los defectos y grietas preexistentes del material, no de forma directa y exclusiva a la superficie nueva."
  },
  "repetida": false
},

{
  "id": "t6-002",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "La reducción del tamaño de una partícula puede darse mediante diferentes formas de energía, como son:",
  "opciones": { "a": "Manual, eléctrica o fisicoquímica.", "b": "Mecánica, eléctrica o fisicoquímica.", "c": "Eléctrica, física o química.", "d": "Mecánica, anódica o física.", "e": "Mecánica, química o física." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque 'manual' no se considera una forma de energía tecnológica reconocida para este proceso.",
    "b": "Correcta. Las tres fuentes de energía reconocidas para la reducción de tamaño de partícula son la mecánica, la eléctrica y la fisicoquímica.",
    "c": "Incorrecta porque combina términos ('física', 'química' por separado) que no corresponden a la clasificación estándar de mecánica/eléctrica/fisicoquímica.",
    "d": "Incorrecta porque 'anódica' no es una de las fuentes de energía reconocidas en este contexto, y sustituye erróneamente a la fisicoquímica.",
    "e": "Incorrecta por la misma razón: descompone la energía fisicoquímica en 'química' y 'física' por separado, lo cual no es la clasificación correcta."
  },
  "repetida": true
},

{
  "id": "t6-003",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Cuál de las siguientes NO es una fuente de energía reconocida para la pulverización?",
  "opciones": { "a": "Eléctrica", "b": "Físico-química", "c": "Estática", "d": "Mecánica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La energía eléctrica sí es una de las fuentes reconocidas.",
    "b": "Incorrecta. La energía fisicoquímica sí es una de las fuentes reconocidas.",
    "c": "Correcta. La energía 'estática' no forma parte de las fuentes de energía reconocidas para la pulverización; de hecho, la electricidad estática es más bien uno de los problemas o riesgos que pueden generarse durante el proceso, no una fuente de energía empleada.",
    "d": "Incorrecta. La energía mecánica sí es una de las fuentes reconocidas, y la más habitual en la práctica."
  },
  "repetida": false
},

{
  "id": "t6-004",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Cuáles son los métodos clásicos reconocidos de reducción de tamaño de partícula?",
  "opciones": { "a": "Únicamente la compresión y el impacto.", "b": "La filtración y la sedimentación.", "c": "Compresión, impacto, rozamiento, cortado y desgarramiento.", "d": "Únicamente el cortado y el desgarramiento." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta porque omite el rozamiento, el cortado y el desgarramiento, también reconocidos como métodos de reducción de tamaño.",
    "b": "Incorrecta. Ni la filtración ni la sedimentación son métodos de reducción de tamaño de partícula; son operaciones de separación completamente distintas.",
    "c": "Correcta. Los cinco métodos clásicos de reducción de tamaño de partícula son: compresión, impacto (o golpeo), rozamiento (o erosión), cortado y desgarramiento.",
    "d": "Incorrecta porque omite la compresión, el impacto y el rozamiento, también reconocidos como métodos de reducción de tamaño."
  },
  "repetida": true
},

{
  "id": "t6-005",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Cuál es el método de reducción de tamaño más adecuado para sólidos duros?",
  "opciones": { "a": "Impacto o golpeo", "b": "Cortado", "c": "Desgarramiento", "d": "Rozamiento", "e": "Compresión" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. El impacto se emplea de forma general, pero el método específicamente asociado a sólidos duros y de reducción grosera es la compresión.",
    "b": "Incorrecta. El cortado se reserva para materiales fibrosos, no para sólidos duros.",
    "c": "Incorrecta. El desgarramiento se emplea en materiales blandos, no en sólidos duros.",
    "d": "Incorrecta. El rozamiento se emplea en materiales blandos, no en sólidos duros.",
    "e": "Correcta. La compresión (mediante rodillos o anillos/muelas) es el método clásicamente indicado para la reducción grosera de sólidos duros."
  },
  "repetida": true
},

{
  "id": "t6-006",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué método(s) de reducción de tamaño de partícula es/son el más adecuado(s) para materiales blandos?",
  "opciones": { "a": "La compresión, exclusivamente.", "b": "El cortado, exclusivamente.", "c": "El rozamiento (o erosión) y el desgarramiento.", "d": "El impacto, exclusivamente." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La compresión se reserva para materiales duros, no blandos.",
    "b": "Incorrecta. El cortado se reserva específicamente para materiales fibrosos, no para materiales blandos en general.",
    "c": "Correcta. Tanto el rozamiento (o erosión) como el desgarramiento son los métodos adecuados para materiales blandos, que no ofrecen suficiente resistencia para requerir compresión o impacto.",
    "d": "Incorrecta. El impacto se emplea de forma más general, no es el método específico para materiales blandos."
  },
  "repetida": true
},

{
  "id": "t6-007",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué método de reducción de tamaño de partícula es el más adecuado para materiales fibrosos?",
  "opciones": { "a": "Cortado", "b": "Compresión", "c": "Rozamiento", "d": "Impacto" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El cortado es el método específicamente indicado para materiales fibrosos, ya que las fibras se seccionan mejor que se comprimen o golpean.",
    "b": "Incorrecta. La compresión se emplea en sólidos duros, no en materiales fibrosos.",
    "c": "Incorrecta. El rozamiento se emplea en materiales blandos, no específicamente en fibrosos.",
    "d": "Incorrecta. El impacto se emplea de forma más general, no es el método específico para fibras."
  },
  "repetida": true
},

{
  "id": "t6-008",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "Señala la afirmación INCORRECTA sobre los problemas o precauciones durante la pulverización:",
  "opciones": { "a": "Disminución del volumen aparente", "b": "Marca o contaminación por el instrumento utilizado", "c": "Degradación por calor", "d": "Ataques por agentes atmosféricos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Es la afirmación INCORRECTA: la pulverización, al incorporar aire entre las partículas más finas, tiende a AUMENTAR el volumen aparente del material, no a disminuirlo.",
    "b": "Incorrecta como respuesta buscada: la contaminación por marcas del propio equipo (por ejemplo, partículas metálicas) sí es un problema real a vigilar.",
    "c": "Incorrecta como respuesta buscada: la degradación por calor sí es un problema real, especialmente en materiales termolábiles.",
    "d": "Incorrecta como respuesta buscada: la mayor susceptibilidad al ataque por agentes atmosféricos sí es un problema real derivado de la pulverización (mayor superficie expuesta)."
  },
  "repetida": true
},

{
  "id": "t6-009",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué precauciones o consecuencias reales hay que tener en cuenta en la reducción del tamaño de partícula, derivadas del aumento de superficie específica del material?",
  "opciones": { "a": "El incremento de la carga eléctrica estática, el aumento de la susceptibilidad al ataque por agentes atmosféricos y el aumento de la inflamabilidad del material.", "b": "Ninguna, ya que reducir el tamaño de partícula no conlleva ningún riesgo adicional para el material.", "c": "Únicamente cambios en el color del material, sin ningún otro efecto relevante.", "d": "Únicamente una reducción del coste del proceso, sin otras consecuencias." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Al reducir el tamaño de partícula aumenta mucho la superficie específica del material, lo que incrementa el riesgo de carga electrostática, de reacción con agentes atmosféricos (oxígeno, humedad) y de inflamabilidad/explosividad del polvo.",
    "b": "Incorrecta. La reducción del tamaño de partícula sí conlleva riesgos reales y bien documentados, como los descritos en la opción a.",
    "c": "Incorrecta. Aunque el aspecto del material puede variar, las consecuencias relevantes a vigilar son las de tipo electrostático, químico y de seguridad frente a incendios/explosiones, no simplemente el color.",
    "d": "Incorrecta. La pulverización no implica necesariamente una reducción de costes; además, conlleva riesgos y precauciones que hay que gestionar, como los descritos en la opción a."
  },
  "repetida": true
},

{
  "id": "t6-010",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Cuál de las siguientes es una consecuencia o precaución real a tener en cuenta durante la reducción de tamaño de partícula?",
  "opciones": { "a": "La disminución del volumen aparente, que provoca un aumento del flujo.", "b": "Ninguna, es un proceso totalmente inocuo para el material.", "c": "Solo afecta a la temperatura del material, sin ninguna otra consecuencia relevante.", "d": "La posible formación de distintos polimorfos, con cambios de estabilidad y de propiedades fisicoquímicas o farmacológicas." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Como se ha visto, la pulverización tiende a aumentar (no disminuir) el volumen aparente, y ese aumento suele empeorar (no mejorar) las propiedades de flujo.",
    "b": "Incorrecta. La pulverización conlleva varios riesgos y precauciones reales (calor, electricidad estática, polimorfismo, oxidación...), no es un proceso inocuo.",
    "c": "Incorrecta porque, además de la posible generación de calor, existen otras consecuencias relevantes como las mencionadas en la opción b.",
    "d": "Correcta. El aporte de energía mecánica durante la pulverización puede inducir cambios en la estructura cristalina del material, dando lugar a nuevos polimorfos con propiedades de estabilidad, solubilidad o actividad farmacológica distintas."
  },
  "repetida": false
},

{
  "id": "t6-011",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué rango de tamaño corresponde a una pulverización FINA?",
  "opciones": { "a": "Entre 75 y 140 micras", "b": "Menor de 840 micras", "c": "Menor de 75 micras", "d": "Menor de 1 micra" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Ese rango no corresponde a ninguna de las categorías estándar empleadas en el temario.",
    "b": "Incorrecta. Ese valor corresponde al límite superior del tamaño intermedio, no al de la categoría fina.",
    "c": "Correcta. La pulverización fina se define, en este temario, como aquella que produce partículas de tamaño inferior a 75 micras.",
    "d": "Incorrecta. Ese valor corresponde aproximadamente al tamaño ultrafino, muy por debajo del rango fino."
  },
  "repetida": true
},

{
  "id": "t6-012",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué rango de tamaño corresponde a una pulverización GROSERA?",
  "opciones": { "a": "Mayor de 840 micras", "b": "Aproximadamente 1 micra", "c": "Entre 75 y 840 micras", "d": "Menor de 75 micras" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La pulverización grosera se define como aquella que produce partículas de tamaño superior a 840 micras.",
    "b": "Incorrecta. Ese valor corresponde a la pulverización ultrafina, no a la grosera.",
    "c": "Incorrecta. Ese rango corresponde a la pulverización intermedia, no a la grosera.",
    "d": "Incorrecta. Ese rango corresponde a la pulverización fina, no a la grosera."
  },
  "repetida": true
},

{
  "id": "t6-013",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué rango de tamaño corresponde a una pulverización INTERMEDIA?",
  "opciones": { "a": "Mayor de 840 micras", "b": "Menor de 75 micras", "c": "Aproximadamente 1 micra", "d": "Entre 75 y 840 micras" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Ese rango corresponde a la pulverización grosera, no a la intermedia.",
    "b": "Incorrecta. Ese rango corresponde a la pulverización fina, no a la intermedia.",
    "c": "Incorrecta. Ese valor corresponde a la pulverización ultrafina, no a la intermedia.",
    "d": "Correcta. La pulverización intermedia comprende el rango de tamaños entre 75 y 840 micras."
  },
  "repetida": true
},

{
  "id": "t6-014",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué rango de tamaño corresponde a una pulverización ULTRAFINA?",
  "opciones": { "a": "Entre 75 y 840 micras", "b": "Menor de 75 micras", "c": "Mayor de 840 micras", "d": "Aproximadamente 1 micra" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Ese rango corresponde a la pulverización intermedia, no a la ultrafina.",
    "b": "Incorrecta. Ese rango corresponde a la pulverización fina en general, no específicamente a la ultrafina.",
    "c": "Incorrecta. Ese rango corresponde a la pulverización grosera, justo la categoría opuesta a la ultrafina.",
    "d": "Correcta. La pulverización ultrafina se caracteriza por producir partículas de un tamaño en torno a 1 micra, muy por debajo del resto de categorías."
  },
  "repetida": true
},

{
  "id": "t6-015",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "Las operaciones previas a la reducción del tamaño que siempre hay que realizar son:",
  "opciones": { "a": "Rotura, desecación y mondación", "b": "Fragmentación, desecación y mondación", "c": "Desecación, estabilización y mondación", "d": "Mondación, calentar y secar", "e": "Mondación, presión y desecación" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque 'rotura' no es el término empleado; la operación previa reconocida es la fragmentación o división grosera.",
    "b": "Correcta. Las tres operaciones previas que se realizan de forma general antes de reducir el tamaño de un material son: fragmentación (o división grosera), desecación y mondación (separación de partes inútiles).",
    "c": "Incorrecta porque 'estabilización' no es una de las tres operaciones previas generales, sino una operación específica de casos concretos (por ejemplo, fermentos o enzimas).",
    "d": "Incorrecta porque 'calentar' no es una operación previa reconocida; la desecación consiste en eliminar humedad, no en calentar el material sin más.",
    "e": "Incorrecta porque 'presión' no es en sí misma una operación previa a la pulverización, sino parte de algunos mecanismos de reducción."
  },
  "repetida": true
},

{
  "id": "t6-016",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Cuál de las siguientes acciones NO es una operación previa a la reducción del tamaño de partícula?",
  "opciones": { "a": "Presión", "b": "Desgarramiento", "c": "Fragmentación", "d": "Desecación", "e": "Mondación" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta como respuesta buscada porque, aunque en sentido estricto la presión pertenece más bien a los métodos de reducción que a las operaciones previas, en este contexto no es la respuesta más clara buscada frente a la opción c.",
    "b": "Correcta. El desgarramiento es un método de reducción del tamaño de partícula en sí mismo (para materiales blandos), no una operación previa a dicha reducción.",
    "c": "Incorrecta. La fragmentación (o división grosera) sí es una operación previa reconocida.",
    "d": "Incorrecta. La desecación sí es una operación previa reconocida.",
    "e": "Incorrecta. La mondación (separación de partes inútiles) sí es una operación previa reconocida."
  },
  "repetida": true
},

{
  "id": "t6-017",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "Dentro de las operaciones previas a la pulverización, señala la opción que NO es una operación previa:",
  "opciones": { "a": "Desecación", "b": "Mondación o separación de las partes inútiles (por ejemplo, en drogas vegetales)", "c": "Presión", "d": "Fragmentación o división grosera", "e": "Mecánica" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. La desecación sí es una operación previa reconocida.",
    "b": "Incorrecta. La mondación sí es una operación previa reconocida, especialmente relevante en drogas vegetales.",
    "c": "Incorrecta. La aplicación de presión se recoge en el temario como parte de las operaciones previas en determinados esquemas de clasificación.",
    "d": "Incorrecta. La fragmentación o división grosera sí es una operación previa reconocida.",
    "e": "Correcta. 'Mecánica' no es una operación previa en sí, sino un tipo de energía o de mecanismo de acción del dispositivo pulverizador; no encaja como paso preparatorio previo a la pulverización."
  },
  "repetida": true
},

{
  "id": "t6-018",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué es la pulverización?",
  "opciones": { "a": "Obtención de partículas pequeñas a partir de líquidos", "b": "Obtención de partículas pequeñas a partir de sólidos secos", "c": "Obtención de partículas grandes a partir de líquidos", "d": "Obtención de partículas grandes a partir de sólidos secos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La pulverización se aplica a sólidos, no a líquidos.",
    "b": "Correcta. La pulverización es la operación básica que consiste en la división de sólidos secos para obtener partículas de tamaño reducido.",
    "c": "Incorrecta por partida doble: ni se aplica a líquidos, ni busca obtener partículas de mayor tamaño.",
    "d": "Incorrecta porque invierte el objetivo: la pulverización busca precisamente reducir, no aumentar, el tamaño de partícula."
  },
  "repetida": false
},

{
  "id": "t6-019",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Cuál de las siguientes NO es una ventaja de la pulverización?",
  "opciones": { "a": "Modula la velocidad de disolución y, en consecuencia, la biodisponibilidad del principio activo.", "b": "Mejora la dosificación, al mejorar la capacidad de flujo.", "c": "Facilita operaciones posteriores como el mezclado o la desecación.", "d": "Disminuye la superficie específica del sólido, haciendo que reaccione menos con agentes del ambiente." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta como respuesta buscada: modular la velocidad de disolución y la biodisponibilidad sí es una de las ventajas más importantes de la pulverización.",
    "b": "Incorrecta como respuesta buscada: mejorar la dosificación mediante una mejor capacidad de flujo sí es una ventaja real, en determinadas condiciones de tamaño y forma.",
    "c": "Incorrecta como respuesta buscada: facilitar el mezclado y la desecación sí es una ventaja real de reducir el tamaño de partícula.",
    "d": "Correcta. Es la afirmación falsa: la pulverización AUMENTA la superficie específica del sólido (no la disminuye), lo que en realidad incrementa, no reduce, su reactividad frente a agentes ambientales."
  },
  "repetida": false
},

{
  "id": "t6-020",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "En la producción de medicamentos eficaces, ¿por qué es importante la dimensión de las partículas sólidas?",
  "opciones": { "a": "Porque determina únicamente propiedades fisicoquímicas, sin relación con la biofarmacia.", "b": "Porque determina únicamente propiedades químicas.", "c": "No tiene ninguna influencia relevante sobre las propiedades del medicamento.", "d": "Porque determina propiedades físicas y propiedades biofarmacéuticas del medicamento." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque excluye expresamente la relación con la biofarmacia, que es precisamente una de sus influencias más relevantes.",
    "b": "Incorrecta porque restringe la influencia a propiedades 'químicas', cuando en realidad afecta sobre todo a propiedades físicas y biofarmacéuticas.",
    "c": "Incorrecta porque el tamaño de partícula es, de hecho, una de las variables más determinantes en el diseño de un medicamento eficaz.",
    "d": "Correcta. El tamaño de partícula influye tanto en propiedades físicas (flujo, empaquetamiento) como en propiedades biofarmacéuticas (velocidad de disolución, absorción y, en consecuencia, biodisponibilidad)."
  },
  "repetida": true
},

{
  "id": "t6-021",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "Respecto a la reducción del tamaño de partícula, señala la afirmación correcta:",
  "opciones": { "a": "El tamaño de partícula condiciona la eficacia del rendimiento del medicamento únicamente.", "b": "La división consiste en evitar la aparición de superficies nuevas.", "c": "Es necesario el aporte de energía para reducir el tamaño de una partícula.", "d": "El tamaño de partícula condiciona la eficacia del proceso tecnológico, pero no el rendimiento del medicamento.", "e": "Las dimensiones de las partículas sólidas determinan exclusivamente propiedades fisicoquímicas." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta porque el tamaño de partícula condiciona tanto la eficacia del proceso tecnológico como el rendimiento del medicamento, no solo este último de forma exclusiva.",
    "b": "Incorrecta; es justo lo contrario: la división consiste precisamente en promover la aparición de nuevas superficies libres.",
    "c": "Correcta. Para fracturar o dividir cualquier sólido y reducir su tamaño de partícula es imprescindible aportar energía (mecánica, eléctrica o fisicoquímica) que venza la resistencia del material.",
    "d": "Incorrecta porque el tamaño de partícula sí condiciona también el rendimiento del medicamento, no solo la eficacia del proceso tecnológico.",
    "e": "Incorrecta porque restringe la influencia solo a lo fisicoquímico, dejando fuera otros aspectos como el rendimiento del proceso o el comportamiento biofarmacéutico."
  },
  "repetida": true
},

{
  "id": "t6-022",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Qué principio fundamental describe en qué consiste la división (pulverización) de un sólido?",
  "opciones": { "a": "Consiste en evitar la aparición de superficies nuevas.", "b": "Consiste exclusivamente en reducir el peso del material.", "c": "Consiste en promover la aparición de nuevas superficies libres.", "d": "Consiste en eliminar por completo la porosidad del material." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta; describe justo lo contrario de lo que ocurre durante la división de un sólido.",
    "b": "Incorrecta. El peso total del material no cambia por el hecho de reducir el tamaño de sus partículas; lo que cambia es la superficie específica y el número de partículas.",
    "c": "Correcta. Al fragmentar un sólido en partículas más pequeñas se generan constantemente nuevas superficies libres, lo cual es la esencia física de la operación de división.",
    "d": "Incorrecta. La división no tiene como objetivo eliminar la porosidad, un concepto distinto relacionado con la estructura interna del material."
  },
  "repetida": true
},

{
  "id": "t6-023",
  "tema": "Reducción de tamaño de partícula: fundamentos",
  "pregunta": "¿Cuál de las siguientes afirmaciones sobre la reducción del tamaño de partícula NO es correcta?",
  "opciones": { "a": "El tamaño de partícula determina la eficacia del proceso tecnológico y el rendimiento del medicamento.", "b": "La dimensión de las partículas sólidas no importa en la producción de medicamentos eficaces.", "c": "Es necesario un aporte de energía.", "d": "Aplicada a sólidos secos, recibe el nombre de pulverización." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta como respuesta buscada: la afirmación es cierta, el tamaño de partícula sí determina ambos aspectos.",
    "b": "Correcta. Es la afirmación falsa: la dimensión de las partículas sólidas es, de hecho, un factor determinante en la producción de medicamentos eficaces, ya que influye en su comportamiento físico y biofarmacéutico.",
    "c": "Incorrecta como respuesta buscada: la afirmación es cierta, sí es necesario un aporte de energía.",
    "d": "Incorrecta como respuesta buscada: la afirmación es cierta, ese es precisamente el nombre que recibe la operación."
  },
  "repetida": false
},

{
  "id": "t7-001",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo emplea el molino de rodillos (o cilindros)?",
  "opciones": { "a": "Rozamiento", "b": "Impacto o percusión", "c": "Cortado", "d": "Compresión" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. El rozamiento no es el mecanismo principal del molino de rodillos, sino el propio de materiales blandos trabajados por erosión.",
    "b": "Incorrecta. El impacto o percusión es el mecanismo propio de los molinos de martillos y de vibración, no del de rodillos.",
    "c": "Incorrecta. El cortado es el mecanismo propio del molino de cuchillas.",
    "d": "Correcta. El molino de rodillos consta de dos rodillos (de acero o mármol) que giran en sentido contrario, aplastando el material entre ellos mediante compresión."
  },
  "repetida": true
},

{
  "id": "t7-002",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Para qué tipo de materiales se emplea el molino de rodillos?",
  "opciones": { "a": "Materiales blandos y húmedos.", "b": "Materiales duros, secos y no termolábiles.", "c": "Materiales termolábiles exclusivamente.", "d": "Materiales fibrosos." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de rodillos requiere materiales secos, no húmedos, y su mecanismo de compresión se destina a sólidos duros, no blandos.",
    "b": "Correcta. El molino de rodillos se emplea con materiales duros (aproximadamente 7-8-9 en la escala de Mohs), secos y no termolábiles, ya que el proceso puede generar calor.",
    "c": "Incorrecta; es más bien lo contrario: al generar calor durante el proceso, no es el más adecuado para materiales termolábiles.",
    "d": "Incorrecta. Los materiales fibrosos se trabajan mejor por cortado (molino de cuchillas), no por compresión con rodillos."
  },
  "repetida": true
},

{
  "id": "t7-003",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué dispositivo se utiliza para la HOMOGENEIZACIÓN de pastas?",
  "opciones": { "a": "Rodillos", "b": "Cilindros", "c": "Molino de vibración", "d": "Molino de anillos", "e": "Chorro o micronizador" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Aunque 'rodillos' y 'cilindros' son físicamente el mismo tipo de dispositivo, en esta pregunta se busca específicamente la denominación 'cilindros', asociada en el temario a la homogeneización de semisólidos.",
    "b": "Correcta. El molino de cilindros, además de emplearse en la reducción de sólidos duros, se utiliza para homogeneizar la fase interna de suspensiones, pomadas y pastas al hacerlas pasar entre rodillos.",
    "c": "Incorrecta. El molino de vibración se emplea para conseguir tamaños de partícula ultrafinos en sólidos, no para homogeneizar pastas.",
    "d": "Incorrecta. El molino de anillos se emplea en la pulverización de sólidos secos y quebradizos, no en la homogeneización de semisólidos.",
    "e": "Incorrecta. El micronizador se emplea con sólidos secos para lograr un tamaño ultrafino, no con semisólidos."
  },
  "repetida": false
},

{
  "id": "t7-004",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál es la principal desventaja del molino de rodillos?",
  "opciones": { "a": "Solo puede pulverizar cantidades muy pequeñas de material.", "b": "Genera mucho calor, por lo que hay que controlar la velocidad de giro.", "c": "No puede utilizarse con materiales duros.", "d": "Necesita una fuente de energía fisicoquímica especial." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de rodillos se emplea, en general, para cantidades de material medianas o grandes, no especialmente pequeñas.",
    "b": "Correcta. La fricción generada entre los rodillos durante la compresión del material produce una cantidad considerable de calor, por lo que es necesario controlar cuidadosamente la velocidad de giro para evitar dañar materiales sensibles.",
    "c": "Incorrecta; es justo lo contrario: el molino de rodillos está indicado precisamente para materiales duros.",
    "d": "Incorrecta. El molino de rodillos funciona mediante energía mecánica (compresión), no mediante una fuente de energía fisicoquímica especial."
  },
  "repetida": false
},

{
  "id": "t7-005",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué dispositivo y mecanismo tiene las siguientes características: dos rodillos móviles con superficie de acero o mármol que giran en sentido contrario, produciendo un tamaño de partícula final grosero?",
  "opciones": { "a": "Molino de rodillos, por compresión.", "b": "Molino de cuchillas, por cortado.", "c": "Molino de anillos, por rozamiento.", "d": "Molino de martillos, por impacto." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Esta descripción corresponde exactamente al molino de rodillos, que trabaja por compresión y produce, característicamente, un tamaño de partícula final grosero.",
    "b": "Incorrecta. El molino de cuchillas corta el material mediante cuchillas, no mediante rodillos que comprimen.",
    "c": "Incorrecta. El molino de anillos trabaja por compresión entre anillos o muelas, no mediante rodillos giratorios de superficie de acero o mármol.",
    "d": "Incorrecta. El molino de martillos no está formado por rodillos, sino por un eje con martillos que golpean el material."
  },
  "repetida": false
},

{
  "id": "t7-006",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿En cuál de los siguientes dispositivos es imprescindible que el material esté seco?",
  "opciones": { "a": "Molino de anillos o muelas", "b": "Molino de rodillos", "c": "Molino de martillos", "d": "Molino de cilindros", "e": "Molino de vibración" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Aunque también se recomienda trabajar con material seco, no es la respuesta que mejor se ajusta a esta exigencia específica en el temario.",
    "b": "Correcta. En el molino de rodillos es imprescindible que el material esté seco, ya que la humedad dificulta la compresión eficaz entre los rodillos.",
    "c": "Incorrecta. Aunque conviene evitar la humedad en general, la exigencia de sequedad absoluta se asocia especialmente al molino de rodillos.",
    "d": "Incorrecta. El molino de cilindros se emplea, de hecho, para homogeneizar semisólidos con contenido líquido (pastas, pomadas).",
    "e": "Incorrecta. El molino de vibración no tiene como requisito distintivo la sequedad absoluta del material."
  },
  "repetida": true
},

{
  "id": "t7-007",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Un molino de bolas es:",
  "opciones": { "a": "Una cámara con una corriente de aire a presión que hace chocar las partículas entre sí.", "b": "Un conjunto de dos rodillos que comprimen el material entre sí.", "c": "Un eje central con cuchillas giratorias que cortan el material.", "d": "Un cilindro hueco montado de tal manera que puede girar sobre su eje longitudinal, cargado con bolas que golpean y friccionan el material." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta; esta descripción corresponde, más bien, al molino de chorro o micronizador.",
    "b": "Incorrecta; esta descripción corresponde al molino de rodillos, no al de bolas.",
    "c": "Incorrecta; esta descripción corresponde al molino de cuchillas, no al de bolas.",
    "d": "Correcta. El molino de bolas consiste en un cilindro hueco que gira sobre su eje longitudinal, en cuyo interior las bolas (habitualmente de porcelana) golpean y friccionan el material a medida que el cilindro gira."
  },
  "repetida": false
},

{
  "id": "t7-008",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo emplea principalmente el molino de bolas?",
  "opciones": { "a": "Cortado exclusivamente.", "b": "Únicamente vibración.", "c": "Rozamiento e impacto.", "d": "Compresión exclusivamente." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El cortado es propio del molino de cuchillas, no del de bolas.",
    "b": "Incorrecta. La vibración como tal es propia del molino de vibración, un dispositivo distinto.",
    "c": "Correcta. Dentro del cilindro giratorio, las bolas caen y ruedan sobre el material, combinando golpes (impacto) y fricción (rozamiento) para reducir su tamaño.",
    "d": "Incorrecta. La compresión pura es propia de los molinos de rodillos y de anillos, no del de bolas."
  },
  "repetida": false
},

{
  "id": "t7-009",
  "tema": "Dispositivos de pulverización",
  "pregunta": "En el molino de bolas, ¿cómo deben ser los materiales a tratar?",
  "opciones": { "a": "Quebradizos y abrasivos", "b": "Duros y abrasivos", "c": "Quebradizos y poco abrasivos", "d": "Duros y poco abrasivos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El molino de bolas es apto para materiales quebradizos y abrasivos, ya que las propias bolas (de porcelana u otro material resistente) soportan bien el desgaste que estos materiales producirían en otros equipos.",
    "b": "Incorrecta. El rasgo distintivo no es tanto la dureza extrema como la fragilidad (carácter quebradizo) combinada con capacidad abrasiva.",
    "c": "Incorrecta por la misma razón: el rasgo distintivo del molino de bolas es que sí tolera bien los materiales abrasivos.",
    "d": "Incorrecta porque el molino de bolas está indicado, precisamente, para materiales abrasivos, gracias a la resistencia de las bolas empleadas como medio de molienda."
  },
  "repetida": false
},

{
  "id": "t7-010",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál de estos dispositivos produce la esterilización del material durante la pulverización?",
  "opciones": { "a": "Molino de bolas", "b": "Molino de chorro o micronizador", "c": "Molino de martillos", "d": "Molino de cilindros", "e": "Molino de anillos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Al ser un cilindro hermético que puede cerrarse por completo, el molino de bolas puede llegar a producir un efecto de autoclavado sobre el material, siendo el único dispositivo estudiado capaz de esterilizar durante el proceso.",
    "b": "Incorrecta. El micronizador, pese a operar con material seco, no cierra herméticamente el sistema de forma que produzca esterilización.",
    "c": "Incorrecta. El molino de martillos genera calor por impacto, pero no está diseñado como sistema hermético capaz de esterilizar.",
    "d": "Incorrecta. El molino de cilindros no incluye ningún mecanismo de esterilización del material.",
    "e": "Incorrecta. El molino de anillos tampoco incorpora un mecanismo de esterilización."
  },
  "repetida": true
},

{
  "id": "t7-011",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿A qué dispositivo corresponde la siguiente ventaja: partículas uniformes e incluso estériles?",
  "opciones": { "a": "Molino de bolas", "b": "Molino de cilindros", "c": "Molino de martillo", "d": "Molino de anillos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Gracias a su carácter hermético (que permite un efecto de autoclavado) y a la acción homogénea de las bolas en su interior, el molino de bolas produce partículas uniformes e incluso estériles.",
    "b": "Incorrecta. El molino de cilindros no se caracteriza por producir partículas estériles.",
    "c": "Incorrecta. El molino de martillos produce partículas uniformes gracias al tamiz que incorpora, pero no partículas estériles.",
    "d": "Incorrecta. El molino de anillos se destaca por una pulverización uniforme, pero no por producir esterilidad."
  },
  "repetida": true
},

{
  "id": "t7-012",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo emplea el molino de anillos o muelas?",
  "opciones": { "a": "Vibración pura", "b": "Impacto", "c": "Compresión", "d": "Cortado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La vibración pura corresponde a un dispositivo distinto (molino de vibración).",
    "b": "Incorrecta. El impacto es propio de los molinos de martillos y de vibración, no del de anillos.",
    "c": "Correcta. El molino de anillos o muelas reduce el tamaño del material haciéndolo pasar entre anillos que ejercen compresión sobre él.",
    "d": "Incorrecta. El cortado es propio del molino de cuchillas, no del de anillos."
  },
  "repetida": true
},

{
  "id": "t7-013",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Para qué tipo de materiales se utiliza el molino de anillos o muelas?",
  "opciones": { "a": "Materiales exclusivamente fibrosos.", "b": "Materiales secos, quebradizos y no abrasivos.", "c": "Materiales húmedos y blandos.", "d": "Materiales líquidos o semisólidos." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Los materiales fibrosos se procesan mejor mediante cortado (molino de cuchillas), no por compresión con anillos.",
    "b": "Correcta. El molino de anillos está indicado para materiales secos, quebradizos (frágiles), no abrasivos y no termolábiles, típicamente cristalinos.",
    "c": "Incorrecta. La compresión propia de este molino se destina a materiales secos, no húmedos ni especialmente blandos.",
    "d": "Incorrecta. El molino de anillos trabaja con sólidos, no con líquidos ni semisólidos."
  },
  "repetida": true
},

{
  "id": "t7-014",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál es una de las ventajas características del molino de anillos o muelas?",
  "opciones": { "a": "La pulverización uniforme del material.", "b": "Producir esterilización del material.", "c": "Ser el único dispositivo apto para materiales húmedos.", "d": "No generar nunca partículas finas." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Una de las ventajas reconocidas del molino de anillos o muelas es que produce una pulverización uniforme del material tratado.",
    "b": "Incorrecta. La esterilización es una ventaja específica del molino de bolas, no del de anillos.",
    "c": "Incorrecta. El molino de anillos requiere material seco, no húmedo.",
    "d": "Incorrecta. El molino de anillos sí puede generar partículas relativamente finas dentro de su rango de trabajo."
  },
  "repetida": false
},

{
  "id": "t7-015",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Se quiere pulverizar un principio activo con las siguientes características: material no fibroso, no adhesivo, no abrasivo, quebradizo, cristalino, sin humedad y sin capacidad de explosión, con el fin de obtener un tamaño 'fino' seleccionado mediante un tamiz integrado en el propio sistema. ¿Qué molino se utilizará?",
  "opciones": { "a": "Molino de rodillos.", "b": "Molino de bolas.", "c": "Molino de anillos.", "d": "Molino de vibración." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de rodillos se destina a materiales duros y produce, característicamente, un tamaño grosero, no fino.",
    "b": "Incorrecta. El molino de bolas se reserva más bien para materiales abrasivos, condición que este material no cumple.",
    "c": "Correcta. Un material seco, quebradizo, cristalino, no abrasivo y no explosivo encaja exactamente con el perfil de uso del molino de anillos, que además permite ajustar el tamaño final mediante tamiz.",
    "d": "Incorrecta. El molino de vibración se emplea sobre todo para llegar a tamaños ultrafinos, no es la primera opción para un tamaño simplemente 'fino' con estas características."
  },
  "repetida": false
},

{
  "id": "t7-016",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo utiliza el molino de martillos?",
  "opciones": { "a": "Mecanismo por rozamiento", "b": "Mecanismo por cortado", "c": "Mecanismo por impacto o percusión", "d": "Mecanismo por vibración", "e": "Mecanismo por rozamiento y cortado" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El rozamiento no es el mecanismo principal del molino de martillos.",
    "b": "Incorrecta. El cortado es propio del molino de cuchillas, no del de martillos.",
    "c": "Correcta. El molino de martillos reduce el tamaño del material mediante los golpes (impacto o percusión) de unos martillos giratorios montados sobre un eje central.",
    "d": "Incorrecta. La vibración pura es propia de otro dispositivo distinto, el molino de vibración.",
    "e": "Incorrecta. El molino de martillos no combina rozamiento y cortado; su mecanismo es puramente de impacto."
  },
  "repetida": true
},

{
  "id": "t7-017",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo y dispositivo se debería utilizar cuando el material a pulverizar es NO abrasivo?",
  "opciones": { "a": "Molino de cuchillas, por cortado.", "b": "Molino de rodillos, por compresión.", "c": "Molino de martillos, por impacto o percusión.", "d": "Molino de bolas, por rozamiento." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de cuchillas se destina a materiales fibrosos, no se define por la ausencia de capacidad abrasiva.",
    "b": "Incorrecta. El molino de rodillos se orienta a materiales duros en general, sin ser esta la característica definitoria de 'no abrasivo'.",
    "c": "Correcta. El molino de martillos está indicado precisamente para materiales no abrasivos, ya que sus componentes internos podrían desgastarse con materiales que sí lo fueran.",
    "d": "Incorrecta. El molino de bolas, al contrario, está indicado específicamente para materiales abrasivos."
  },
  "repetida": false
},

{
  "id": "t7-018",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál es una de las ventajas del molino de martillos?",
  "opciones": { "a": "No requiere ningún tipo de mantenimiento.", "b": "Es el único dispositivo capaz de esterilizar el material.", "c": "Produce una pulverización uniforme y permite ajustar el tamaño final gracias al tamiz que suele incorporar.", "d": "Genera mucho calor, lo que mejora la eficacia del proceso." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta; ningún equipo mecánico de este tipo está exento de mantenimiento.",
    "b": "Incorrecta. La capacidad de esterilizar el material es propia del molino de bolas, no del de martillos.",
    "c": "Correcta. El molino de martillos suele incorporar un tamiz que retiene las partículas hasta que alcanzan el tamaño deseado, lo que permite obtener una pulverización uniforme y ajustada a las necesidades del proceso.",
    "d": "Incorrecta. Generar calor es, en todo caso, un inconveniente a controlar, no una ventaja del dispositivo."
  },
  "repetida": true
},

{
  "id": "t7-019",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué tamaño de partícula se obtiene con la pulverización mediante molino de martillos?",
  "opciones": { "a": "Mayor de 840 micras (grosera)", "b": "Entre 75 y 840 micras (intermedia)", "c": "Menor de 75 micras (fina)", "d": "Menor de 1 micra (ultrafina)" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El tamaño grosero se asocia más bien a dispositivos de compresión como el molino de rodillos.",
    "b": "Incorrecta. El tamaño intermedio no es el resultado característico del molino de martillos.",
    "c": "Correcta. El molino de martillos produce, característicamente, un tamaño de partícula fino (inferior a 75 micras), ajustado gracias al tamiz que incorpora.",
    "d": "Incorrecta. El tamaño ultrafino se consigue más bien con el molino de vibración o el micronizador."
  },
  "repetida": true
},

{
  "id": "t7-020",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Respecto al molino de martillos, señala la afirmación correcta:",
  "opciones": { "a": "Nunca genera calor durante su funcionamiento.", "b": "Solo puede utilizarse con líquidos.", "c": "Pulveriza bien materiales fibrosos o vegetales.", "d": "No es adecuado para pulverizar materiales fibrosos." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Al igual que otros molinos de impacto, el de martillos sí puede generar calor por la fricción y los golpes repetidos.",
    "b": "Incorrecta. El molino de martillos trabaja con sólidos secos, no con líquidos.",
    "c": "Incorrecta. Los materiales fibrosos y vegetales se trabajan mejor con el molino de cuchillas (cortado), no con el de martillos.",
    "d": "Correcta. El molino de martillos, al basarse en el impacto, no resulta adecuado para materiales fibrosos, que tienden a enredarse en lugar de fragmentarse por golpeo."
  },
  "repetida": false
},

{
  "id": "t7-021",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo se utiliza para obtener una partícula ultrafina a partir de un mecanismo de impacto o percusión?",
  "opciones": { "a": "Molino de vibración", "b": "Molino de rodillos", "c": "Molino de cuchillas", "d": "Molino de anillos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El molino de vibración trabaja mediante impacto o percusión, al igual que el de martillos, pero con una intensidad y frecuencia que permiten alcanzar tamaños de partícula ultrafinos.",
    "b": "Incorrecta. El molino de rodillos trabaja por compresión, no por impacto, y produce tamaños groseros, no ultrafinos.",
    "c": "Incorrecta. El molino de cuchillas trabaja por cortado, no por impacto.",
    "d": "Incorrecta. El molino de anillos trabaja por compresión, no por impacto, y no está orientado a tamaños ultrafinos."
  },
  "repetida": false
},

{
  "id": "t7-022",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué especificidad tiene el molino de vibración respecto a la alimentación del material?",
  "opciones": { "a": "No tiene tolva de alimentación.", "b": "Tiene un rotor central con cuchillas.", "c": "Tiene 3 cilindros.", "d": "Tiene 4 tolvas de alimentación." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. A diferencia de otros molinos, el de vibración no dispone de tolva de alimentación como elemento característico de su diseño.",
    "b": "Incorrecta; esa descripción correspondería más bien a un dispositivo de cortado (molino de cuchillas).",
    "c": "Incorrecta; esa descripción correspondería más bien al molino de cilindros o rodillos.",
    "d": "Incorrecta. El molino de vibración no se caracteriza por múltiples tolvas de alimentación."
  },
  "repetida": false
},

{
  "id": "t7-023",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿En qué dispositivo el 80% del volumen interno son bolas de porcelana, por lo que solo alrededor del 10-20% puede convertirse realmente en producto pulverizado?",
  "opciones": { "a": "Molino de vibración", "b": "Molino de cuchillas", "c": "Molino de rodillos", "d": "Molino de anillos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. En el molino de vibración, aproximadamente el 80% del volumen de la cámara está ocupado por bolas de porcelana necesarias para el proceso, lo que limita mucho el rendimiento real de producto obtenido, una desventaja importante de este dispositivo.",
    "b": "Incorrecta. El molino de cuchillas no emplea bolas como medio de molienda.",
    "c": "Incorrecta. El molino de rodillos no emplea bolas como medio de molienda.",
    "d": "Incorrecta. El molino de anillos tampoco emplea bolas como medio de molienda."
  },
  "repetida": false
},

{
  "id": "t7-024",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál de los siguientes dispositivos utiliza (trabaja bien con) un material de dureza 5 en la escala de Mohs?",
  "opciones": { "a": "Chorro o micronizador", "b": "Bolas", "c": "Martillos", "d": "Anillos", "e": "Vibración" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. El micronizador se reserva para los materiales más duros, próximos al máximo de la escala de Mohs (dureza 10).",
    "b": "Incorrecta. El molino de bolas se asocia más bien a materiales duros y abrasivos, de mayor dureza relativa.",
    "c": "Incorrecta. El molino de martillos se orienta más bien a materiales no abrasivos de dureza moderada-baja, no específicamente a dureza 5.",
    "d": "Incorrecta. El molino de anillos se orienta a materiales secos y quebradizos, sin una asociación específica a dureza 5.",
    "e": "Correcta. El molino de vibración se asocia en el temario a materiales de dureza intermedia, en torno a 5 en la escala de Mohs."
  },
  "repetida": false
},

{
  "id": "t7-025",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿A qué mecanismo pertenece el molino de cuchillas?",
  "opciones": { "a": "Mecanismo por cortado", "b": "Mecanismo por compresión", "c": "Mecanismo por rozamiento", "d": "Mecanismo por impacto y rozamiento" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El molino de cuchillas reduce el tamaño del material mediante el corte producido por cuchillas giratorias.",
    "b": "Incorrecta. La compresión es propia de los molinos de rodillos y de anillos, no del de cuchillas.",
    "c": "Incorrecta. El rozamiento no es el mecanismo característico del molino de cuchillas.",
    "d": "Incorrecta. La combinación de impacto y rozamiento es propia de otros dispositivos, como el micronizador."
  },
  "repetida": true
},

{
  "id": "t7-026",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué dispositivo sería el más indicado para pulverizar materiales fibrosos?",
  "opciones": { "a": "Molino de cuchillas (de corte)", "b": "Molino de rodillos", "c": "Molino de bolas", "d": "Molino de anillos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El molino de cuchillas, al basarse en el corte, es el dispositivo idóneo para materiales fibrosos, como plantas o drogas vegetales.",
    "b": "Incorrecta. El molino de rodillos trabaja por compresión sobre sólidos duros, mecanismo poco eficaz frente a materiales fibrosos.",
    "c": "Incorrecta. El molino de bolas está orientado a materiales duros, quebradizos y abrasivos, no a fibras.",
    "d": "Incorrecta. El molino de anillos trabaja por compresión sobre materiales secos y quebradizos, no sobre fibras."
  },
  "repetida": true
},

{
  "id": "t7-027",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Respecto al molino de cuchillas, señala la afirmación correcta:",
  "opciones": { "a": "Se emplea exclusivamente con líquidos.", "b": "Es el único dispositivo capaz de esterilizar el material.", "c": "Su mecanismo se basa en la compresión del material entre dos superficies.", "d": "Su parte interna (el rotor con cuchillas) permanece fija, mientras que otros elementos permiten el corte del material." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de cuchillas trabaja con sólidos (habitualmente fibrosos), no con líquidos.",
    "b": "Incorrecta. La capacidad de esterilizar el material es propia del molino de bolas, no del de cuchillas.",
    "c": "Incorrecta. El mecanismo del molino de cuchillas es el cortado, no la compresión.",
    "d": "Correcta. En el molino de cuchillas, la parte interna es fija, y el corte del material se produce por la acción giratoria de las cuchillas contra dicha estructura fija."
  },
  "repetida": false
},

{
  "id": "t7-028",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Se quiere conseguir un pulverizado grosero partiendo de un material fibroso. ¿Qué dispositivo se utilizaría?",
  "opciones": { "a": "Molino de bolas", "b": "Molino de cuchillas", "c": "Molino de martillos", "d": "Molino de anillos" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de bolas se orienta a materiales duros y abrasivos, no a fibras.",
    "b": "Correcta. El molino de cuchillas, por su mecanismo de corte, es el dispositivo indicado para materiales fibrosos, con independencia de que el tamaño final buscado sea grosero o más fino, ajustando el proceso según convenga.",
    "c": "Incorrecta. El molino de martillos no es adecuado para materiales fibrosos, que tienden a enredarse en lugar de fragmentarse por impacto.",
    "d": "Incorrecta. El molino de anillos trabaja por compresión sobre materiales secos y quebradizos, no sobre fibras."
  },
  "repetida": false
},

{
  "id": "t7-029",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál de los siguientes dispositivos utiliza un mecanismo por rozamiento e impacto combinados?",
  "opciones": { "a": "Molino de rodillos", "b": "Molino de vibración", "c": "Molino de anillos", "d": "Molino de chorro o micronizador", "e": "Molino de cuchillas" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de rodillos trabaja únicamente por compresión.",
    "b": "Incorrecta. El molino de vibración trabaja fundamentalmente por impacto o percusión, sin combinarlo característicamente con rozamiento.",
    "c": "Incorrecta. El molino de anillos trabaja únicamente por compresión.",
    "d": "Correcta. El molino de chorro o micronizador hace chocar las partículas entre sí y contra las paredes de la cámara mediante corrientes de aire a alta velocidad, combinando así impacto y rozamiento.",
    "e": "Incorrecta. El molino de cuchillas trabaja únicamente por cortado."
  },
  "repetida": true
},

{
  "id": "t7-030",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Respecto al molino de chorro o micronizador, señala la afirmación correcta:",
  "opciones": { "a": "Solo puede emplearse con materiales de baja dureza.", "b": "Se usa para pulverizar materiales duros y cristalinos.", "c": "Se usa exclusivamente para materiales fibrosos.", "d": "Genera mucho calor durante su funcionamiento." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta; es justo lo contrario: el micronizador está indicado para los materiales más duros, próximos al valor máximo de la escala de Mohs.",
    "b": "Correcta. El molino de chorro o micronizador se emplea para pulverizar materiales duros y cristalinos, alcanzando tamaños de partícula ultrafinos.",
    "c": "Incorrecta. Los materiales fibrosos se trabajan mejor con el molino de cuchillas.",
    "d": "Incorrecta. El micronizador es, precisamente, uno de los pocos dispositivos que no genera calor apreciable durante el proceso."
  },
  "repetida": true
},

{
  "id": "t7-031",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué tamaño de partícula final obtiene el molino de chorro o micronizador?",
  "opciones": { "a": "Ultrafina", "b": "Intermedia", "c": "Grosera", "d": "No pulveriza, solo homogeneiza" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El micronizador es el dispositivo de referencia para obtener tamaños de partícula ultrafinos, en torno a 1 micra.",
    "b": "Incorrecta. El tamaño intermedio no es el resultado característico del micronizador.",
    "c": "Incorrecta. El tamaño grosero se asocia a dispositivos de compresión, como el molino de rodillos.",
    "d": "Incorrecta. El micronizador sí realiza pulverización real del material, no solo homogeneización."
  },
  "repetida": false
},

{
  "id": "t7-032",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué dispositivo de pulverización NO genera calor durante su funcionamiento?",
  "opciones": { "a": "Molino de martillos", "b": "Molino de bolas", "c": "Molino de rodillos", "d": "Micronizador" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de martillos, al basarse en golpes repetidos, sí genera calor por fricción e impacto.",
    "b": "Incorrecta. El molino de bolas también puede generar cierto calor por la fricción e impacto continuo de las bolas.",
    "c": "Incorrecta. El molino de rodillos genera bastante calor durante la compresión del material, hasta el punto de ser una de sus desventajas características.",
    "d": "Correcta. El micronizador, al emplear corrientes de aire para hacer chocar las partículas entre sí sin partes mecánicas móviles que rocen el material, no genera calor apreciable, lo que lo hace idóneo para materiales termolábiles."
  },
  "repetida": true
},

{
  "id": "t7-033",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué dispositivo utilizarías para la elaboración de una fórmula magistral en la oficina de farmacia (poca cantidad de material)?",
  "opciones": { "a": "Molino de anillos industrial", "b": "Molino de bolas de gran capacidad", "c": "Molino de rodillos industrial", "d": "Micronizador" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Los molinos de anillos industriales están pensados para un volumen de trabajo mayor que el de una oficina de farmacia.",
    "b": "Incorrecta. Los molinos de bolas de gran capacidad tampoco resultan prácticos para las cantidades reducidas de una fórmula magistral.",
    "c": "Incorrecta. Los molinos de rodillos industriales están pensados para grandes cantidades de material, no para el trabajo a pequeña escala propio de una oficina de farmacia.",
    "d": "Correcta. El micronizador, por su tamaño reducido y facilidad de limpieza, resulta adecuado para trabajar con pequeñas cantidades de material, como las que se manejan al elaborar una fórmula magistral en la oficina de farmacia."
  },
  "repetida": false
},

{
  "id": "t7-034",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Por qué se considera al micronizador un dispositivo especialmente fácil de limpiar?",
  "opciones": { "a": "Porque no necesita limpiarse nunca entre usos.", "b": "Porque está fabricado con un material autolimpiable.", "c": "Porque se limpia automáticamente con el propio flujo de aire a presión.", "d": "Porque su tamaño reducido facilita el acceso y la limpieza de todas sus partes." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Como cualquier equipo que entra en contacto con principios activos, el micronizador sí requiere limpieza entre usos.",
    "b": "Incorrecta; no existe tal material 'autolimpiable' en la descripción de este dispositivo.",
    "c": "Incorrecta. El flujo de aire a presión se usa para pulverizar el material, no como sistema de autolimpieza del equipo.",
    "d": "Correcta. El tamaño compacto del micronizador permite acceder con facilidad a todas sus partes internas, lo que simplifica considerablemente su limpieza entre lotes, un aspecto especialmente relevante para evitar contaminación cruzada."
  },
  "repetida": false
},

{
  "id": "t7-035",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué dispositivos emplean un mecanismo de reducción por compresión?",
  "opciones": { "a": "Molino de rodillos y molino de anillos o muelas.", "b": "Molino de cuchillas y molino de bolas.", "c": "Micronizador y molino de martillos.", "d": "Molino de martillos y molino de vibración." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Tanto el molino de rodillos como el molino de anillos o muelas reducen el tamaño de partícula mediante compresión del material.",
    "b": "Incorrecta. El molino de cuchillas trabaja por cortado y el de bolas por rozamiento e impacto, no por compresión.",
    "c": "Incorrecta. Ambos dispositivos combinan impacto (y en el caso del micronizador, también rozamiento), no compresión.",
    "d": "Incorrecta. Estos dos dispositivos trabajan por impacto o percusión, no por compresión."
  },
  "repetida": true
},

{
  "id": "t7-036",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué dispositivos emplean un mecanismo de reducción por impacto o percusión?",
  "opciones": { "a": "Molino de rodillos y molino de anillos.", "b": "Molino de anillos y molino de bolas.", "c": "Molino de cuchillas y molino de cilindros.", "d": "Molino de martillos y molino de vibración." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Estos dos dispositivos trabajan por compresión, no por impacto.",
    "b": "Incorrecta. El molino de anillos trabaja por compresión, y el de bolas combina impacto con rozamiento, no es puramente de impacto.",
    "c": "Incorrecta. El molino de cuchillas trabaja por cortado, y el de cilindros por compresión (o para homogeneizar semisólidos), no por impacto.",
    "d": "Correcta. Tanto el molino de martillos como el molino de vibración reducen el tamaño de partícula mediante golpes repetidos, es decir, por impacto o percusión."
  },
  "repetida": true
},

{
  "id": "t7-037",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál de los dispositivos de pulverización estudiados se presenta, en el temario, como el que NO tiene desventajas destacables?",
  "opciones": { "a": "Molino de cilindros", "b": "Molino de anillos", "c": "Molino de vibración", "d": "Molino de cuchillas", "e": "Molino de chorro o micronizador" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Dentro de la comparativa de dispositivos que se estudia en el temario, el molino de cilindros es el que se presenta sin desventajas destacables, frente a las limitaciones más claras de los demás equipos.",
    "b": "Incorrecta. El molino de anillos presenta limitaciones en cuanto al tipo de material que admite (seco, no abrasivo).",
    "c": "Incorrecta. El molino de vibración presenta como desventaja destacada su bajo rendimiento de producto (gran parte del volumen lo ocupan las bolas de porcelana).",
    "d": "Incorrecta. El molino de cuchillas presenta como limitación su especialización casi exclusiva en materiales fibrosos.",
    "e": "Incorrecta. El micronizador presenta como limitación su uso restringido a pequeñas cantidades de material."
  },
  "repetida": false
},

{
  "id": "t7-038",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo por compresión se podría usar para reducir el tamaño de una partícula termolábil, minimizando el riesgo de degradación por calor?",
  "opciones": { "a": "Anillos", "b": "Rodillos", "c": "Ninguno de los mecanismos por compresión es adecuado", "d": "Martillos", "e": "Cualquiera de los dos indistintamente" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Entre los mecanismos por compresión, el molino de anillos genera menos calor que el de rodillos, por lo que resulta más adecuado para materiales termolábiles que deban reducirse de tamaño por este método.",
    "b": "Incorrecta. El molino de rodillos genera bastante calor durante la compresión, lo que lo hace menos adecuado para materiales termolábiles.",
    "c": "Incorrecta porque sí existe una opción por compresión relativamente adecuada: el molino de anillos.",
    "d": "Incorrecta. El molino de martillos no trabaja por compresión, sino por impacto.",
    "e": "Incorrecta porque, entre rodillos y anillos, no son equivalentes en cuanto a generación de calor."
  },
  "repetida": false
},

{
  "id": "t7-039",
  "tema": "Dispositivos de pulverización",
  "pregunta": "El material que se quiere pulverizar es termolábil, quebradizo, no fibroso y explosivo. Se quiere obtener un tamaño de partícula ultrafino, trabajando en la oficina de farmacia con menos de un kilogramo de material. ¿Qué dispositivo se utilizaría?",
  "opciones": { "a": "Molino de chorro (micronizador).", "b": "Molino de martillos.", "c": "Molino de cuchillas.", "d": "Molino de anillos.", "e": "Molino de bolas." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El micronizador no genera calor apreciable (adecuado para material termolábil), trabaja bien con pequeñas cantidades como en una oficina de farmacia, y es el dispositivo de referencia para alcanzar un tamaño de partícula ultrafino.",
    "b": "Incorrecta. El molino de martillos genera calor por impacto, lo que resulta arriesgado para un material termolábil, y no alcanza tamaños ultrafinos con la misma eficacia que el micronizador.",
    "c": "Incorrecta. El molino de cuchillas está indicado para materiales fibrosos, y este material se describe explícitamente como no fibroso.",
    "d": "Incorrecta. El molino de anillos produce un tamaño relativamente fino, pero no está pensado para trabajar con cantidades tan pequeñas como las de una fórmula magistral, ni es la opción de referencia para llegar a tamaño ultrafino.",
    "e": "Incorrecta. El molino de bolas se orienta a materiales abrasivos y no es la opción más práctica para trabajar con menos de un kilogramo de material en la oficina de farmacia."
  },
  "repetida": false
},

{
  "id": "t7-040",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Se tiene un material duro, cristalino, quebradizo, seco, con capacidad abrasiva y explosiva nula. ¿Qué dispositivo se utilizaría?",
  "opciones": { "a": "Molino de cuchillas", "b": "Molino de anillos", "c": "Molino de bolas", "d": "Molino de vibración" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El molino de cuchillas se destina a materiales fibrosos, y este material no lo es.",
    "b": "Correcta. Un material seco, quebradizo, cristalino y no abrasivo se ajusta al perfil de uso característico del molino de anillos, que trabaja por compresión sobre este tipo de sólidos.",
    "c": "Incorrecta. El molino de bolas se reserva más bien para materiales con capacidad abrasiva, condición que este material no cumple.",
    "d": "Incorrecta. El molino de vibración se orienta a obtener tamaños ultrafinos mediante impacto, no es la primera opción para este perfil de material."
  },
  "repetida": false
},

{
  "id": "t7-041",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Qué mecanismo y dispositivo emplearías para reducir el tamaño de un material fibroso?",
  "opciones": { "a": "Cortado y molino de cuchillas", "b": "Rozamiento e impacto y molino de bolas", "c": "Rozamiento y fricción y molino de cilindros", "d": "Impacto y molino de vibración", "e": "Compresión y molino de anillos" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El cortado, realizado mediante el molino de cuchillas, es el mecanismo y dispositivo adecuados para seccionar materiales fibrosos.",
    "b": "Incorrecta. El molino de bolas se orienta a materiales duros y abrasivos, no a fibras.",
    "c": "Incorrecta. El molino de cilindros se emplea para materiales duros o para homogeneizar semisólidos, no específicamente para fibras.",
    "d": "Incorrecta. El impacto no es un mecanismo eficaz frente a materiales fibrosos, que tienden a enredarse en lugar de fragmentarse por golpeo.",
    "e": "Incorrecta. La compresión se destina a sólidos secos y quebradizos, no a fibras."
  },
  "repetida": true
},

{
  "id": "t7-042",
  "tema": "Dispositivos de pulverización",
  "pregunta": "Indique la incorrecta. La selección del dispositivo pulverizador se basa en:",
  "opciones": { "a": "Los problemas durante la pulverización, como la disminución del volumen aparente.", "b": "Los problemas durante la pulverización, como la degradación por calor.", "c": "El tipo de material (por ejemplo, sólidos plásticos amorfos).", "d": "La forma de la partícula (esférica o irregular, entre otras)." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Es la afirmación errónea: durante la pulverización el volumen aparente tiende a AUMENTAR (no a disminuir), por lo que 'la disminución del volumen aparente' no es un problema real a considerar en la selección del dispositivo.",
    "b": "Incorrecta como respuesta buscada: el riesgo de degradación por calor sí es un problema real que condiciona la elección del dispositivo (por ejemplo, descartando equipos que generan mucho calor para materiales termolábiles).",
    "c": "Incorrecta como respuesta buscada: el tipo de material sí es, evidentemente, un criterio determinante en la elección del dispositivo.",
    "d": "Incorrecta como respuesta buscada: la forma de la partícula sí es un criterio real a considerar al elegir el dispositivo."
  },
  "repetida": false
},

{
  "id": "t7-043",
  "tema": "Dispositivos de pulverización",
  "pregunta": "¿Cuál de los siguientes términos NO pertenece a los componentes habituales de los pulverizadores?",
  "opciones": { "a": "Dispositivo de descarga.", "b": "Cámara de pulverización.", "c": "Compresión.", "d": "Depósito de descarga." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El dispositivo de descarga sí es un componente habitual, encargado de expulsar el producto final.",
    "b": "Incorrecta. La cámara de pulverización sí es un componente estructural habitual de estos dispositivos.",
    "c": "Correcta. La 'compresión' es un mecanismo de acción (una forma de reducir el tamaño de partícula), no un componente físico o estructural del dispositivo pulverizador.",
    "d": "Incorrecta. El depósito de descarga sí es un componente habitual, donde se recoge el material ya pulverizado."
  },
  "repetida": false
},

{
  "id": "t8-001",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "El diámetro de Feret se define como:",
  "opciones": { "a": "El diámetro de un círculo que tendría la misma área proyectada que la partícula.", "b": "La distancia entre los dos extremos de una partícula en diferentes posiciones, que divide a esta en cuatro partes iguales.", "c": "La distancia media entre dos tangentes trazadas de forma perpendicular a la dirección de la medida.", "d": "La distancia media entre dos tangentes trazadas de forma paralela a la dirección de la medida.", "e": "La distancia entre los dos extremos de una partícula en diferentes posiciones, que divide a esta en tres partes iguales." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta; esa descripción corresponde al diámetro de área proyectada equivalente, un concepto distinto al diámetro de Feret.",
    "b": "Incorrecta por la misma razón; introduce una división en partes iguales que no forma parte de la definición de Feret.",
    "c": "Correcta. El diámetro de Feret se mide como la distancia media entre dos tangentes a la partícula, trazadas de forma perpendicular a una dirección de medida fija (como si se midiera la partícula con un calibre).",
    "d": "Incorrecta. Las tangentes del diámetro de Feret se trazan de forma perpendicular, no paralela, a la dirección de medida.",
    "e": "Incorrecta; esa descripción no corresponde a la definición de diámetro de Feret, sino a un concepto distinto no estándar."
  },
  "repetida": false
},

{
  "id": "t8-002",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "El diámetro de Martin se define, en contraposición al de Feret, como:",
  "opciones": { "a": "La distancia media entre dos tangentes perpendiculares a la dirección de medida.", "b": "La distancia máxima posible entre dos puntos cualesquiera de la partícula.", "c": "La línea, paralela a una dirección de medida fija, que divide el área proyectada de la partícula en dos partes iguales.", "d": "El diámetro de un círculo con la misma área proyectada que la partícula." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta; esa es, precisamente, la definición del diámetro de Feret, no la del de Martin.",
    "b": "Incorrecta; esa descripción correspondería más bien al diámetro máximo de Feret en su orientación más desfavorable, no a la definición general del diámetro de Martin.",
    "c": "Correcta. El diámetro de Martin es la longitud de la cuerda, trazada en una dirección fija, que divide el área proyectada de la partícula en dos mitades iguales.",
    "d": "Incorrecta; esa descripción corresponde al llamado diámetro de área proyectada equivalente, un concepto distinto."
  },
  "repetida": false
},

{
  "id": "t8-003",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "¿Cuál de las siguientes opciones se considera un método DIRECTO para determinar el tamaño de las partículas?",
  "opciones": { "a": "Difracción de rayos láser", "b": "Sedimentación", "c": "Tamización", "d": "Elutriación" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La difracción de rayos láser es un método indirecto, que infiere el tamaño a partir del patrón de difracción de la luz.",
    "b": "Incorrecta. La sedimentación es un método indirecto, que infiere el tamaño a partir de la velocidad de caída de las partículas en un fluido.",
    "c": "Correcta. La tamización (junto con la microscopía) se considera un método directo, ya que mide físicamente el tamaño de la partícula al hacerla pasar o no por una malla de abertura conocida.",
    "d": "Incorrecta. La elutriación es un método indirecto, basado en la velocidad de sedimentación de las partículas en una corriente de fluido."
  },
  "repetida": true
},

{
  "id": "t8-004",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "¿Cuál de los siguientes métodos de medida del tamaño de partícula se considera un método INDIRECTO?",
  "opciones": { "a": "Microscopía y tamización, ambos por igual", "b": "Método Coulter", "c": "Microscopía", "d": "Tamización" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque ambos son, precisamente, los dos métodos directos de referencia del temario.",
    "b": "Correcta. El método Coulter es un método indirecto: infiere el tamaño de la partícula a partir de la variación de resistencia eléctrica que provoca al atravesar una abertura calibrada, sin medir la partícula de forma física y directa.",
    "c": "Incorrecta. La microscopía es un método directo de medida del tamaño de partícula.",
    "d": "Incorrecta. La tamización es un método directo de medida del tamaño de partícula."
  },
  "repetida": false
},

{
  "id": "t8-005",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "¿De qué depende fundamentalmente la separación de partículas por tamaño mediante elutriación?",
  "opciones": { "a": "De la presencia de un fluido en movimiento (líquido o aire) que arrastra a las partículas más pequeñas, sin necesidad de emplear un tamiz.", "b": "Exclusivamente de la presencia de una corriente de aire, nunca de un líquido.", "c": "Exclusivamente del uso de un tamiz de malla calibrada.", "d": "Exclusivamente de la presencia de un líquido, nunca de una corriente de aire." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La elutriación separa las partículas según su velocidad de sedimentación frente a una corriente ascendente de fluido (que puede ser tanto un líquido como aire), sin necesidad de un tamiz físico.",
    "b": "Incorrecta por la misma razón: el fluido puede ser tanto aire como líquido, no exclusivamente uno de los dos.",
    "c": "Incorrecta. La elutriación es, precisamente, una alternativa a la separación mediante tamiz, no un método que dependa de él.",
    "d": "Incorrecta. El fluido empleado en la elutriación puede ser tanto un líquido como una corriente de aire."
  },
  "repetida": false
},

{
  "id": "t8-006",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "¿Qué es el cernido, en el proceso de tamización?",
  "opciones": { "a": "El instrumento empleado para realizar la tamización.", "b": "La fracción granulométrica, sin intervalo definido, que atraviesa la malla del tamiz.", "c": "La totalidad del material antes de comenzar la tamización.", "d": "La fracción que queda retenida sobre la malla del tamiz." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El cernido no es un instrumento, sino la fracción de material resultante del proceso de tamización.",
    "b": "Correcta. El cernido es la fracción de material que consigue atravesar la malla del tamiz; al no tener un límite superior definido dentro del propio tamiz, se dice que carece de intervalo granulométrico definido por sí sola.",
    "c": "Incorrecta. El cernido es una fracción resultante del proceso, no la totalidad del material de partida.",
    "d": "Incorrecta; esa fracción, la que queda retenida sobre la malla, se denomina rechazo, no cernido."
  },
  "repetida": true
},

{
  "id": "t8-007",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "Respecto al proceso de tamización, señala la afirmación correcta:",
  "opciones": { "a": "Solo puede existir un único rechazo y un único cernido en todo el proceso, sea cual sea el número de tamices empleados.", "b": "El cernido es la fracción que queda retenida sobre la malla del tamiz.", "c": "La adherencia del material, la humedad y la luz de malla del tamiz son factores que determinan el rendimiento del proceso.", "d": "En el proceso de tamización se obtienen siempre, y exactamente, tres fracciones." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Cuando se emplean varios tamices en serie (una batería de tamices), se obtienen varios rechazos y cernidos intermedios, no uno solo.",
    "b": "Incorrecta; esa fracción se denomina rechazo, no cernido, como se ha explicado en la pregunta anterior.",
    "c": "Correcta. La eficacia y el rendimiento de la tamización dependen de factores como la adherencia del material entre sí y a la malla, la humedad de la muestra y la luz (abertura) del tamiz empleado.",
    "d": "Incorrecta. El número de fracciones obtenidas depende del número de tamices utilizados en la serie, no es fijo en tres."
  },
  "repetida": true
},

{
  "id": "t8-008",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "Se tiene una población de 750 partículas, con la siguiente distribución de frecuencias (nº de partículas - diámetro en micras): 50-50, 50-55, 100-60, 200-65, 250-70, 100-150. ¿Cuál es la mediana del tamaño de partícula?",
  "opciones": { "a": "60 micras", "b": "65 micras", "c": "55 micras", "d": "75 micras", "e": "70 micras" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. 60 micras corresponde a un valor de la distribución acumulada anterior al punto medio (375).",
    "b": "Correcta. La mediana se calcula sumando el total de partículas (750), dividiendo entre 2 (375), y acumulando las frecuencias en orden hasta alcanzar ese valor: 50 (hasta D=50) + 50 (hasta D=55, acumulado 100) + 100 (hasta D=60, acumulado 200) + 200 (hasta D=65, acumulado 400). Como el acumulado de 375 se alcanza dentro del grupo de diámetro 65 micras (entre 200 y 400), la mediana corresponde a ese diámetro: 65 micras.",
    "c": "Incorrecta. 55 micras corresponde a un valor muy temprano de la distribución acumulada, lejos del punto medio.",
    "d": "Incorrecta. 75 micras no aparece siquiera como valor de diámetro en la distribución proporcionada.",
    "e": "Incorrecta. 70 micras corresponde a un valor de la distribución acumulada posterior al punto medio."
  },
  "repetida": true
},

{
  "id": "t8-009",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "Calcula la moda de los siguientes datos de número de partículas: 80, 74, 44, 94, 100, 25, 35, correspondientes a diámetros de 10, 30, 55, 150, 70, 100, 2 micras, respectivamente.",
  "opciones": { "a": "29 micras", "b": "45 micras", "c": "27 micras", "d": "70 micras", "e": "88 micras" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. 29 no corresponde al diámetro de mayor frecuencia en esta distribución.",
    "b": "Incorrecta. 45 no aparece como valor de diámetro en los datos proporcionados.",
    "c": "Incorrecta. 27 no corresponde al diámetro de mayor frecuencia en esta distribución.",
    "d": "Correcta. La moda es el valor de la variable (en este caso, el diámetro) que presenta la mayor frecuencia. Emparejando cada número de partículas con su diámetro (80-10, 74-30, 44-55, 94-150, 100-70, 25-100, 35-2), la mayor frecuencia es 100 partículas, que corresponde a un diámetro de 70 micras. Por tanto, la moda es 70 micras.",
    "e": "Incorrecta. 88 no corresponde a ninguna de las frecuencias ni diámetros de esta distribución."
  },
  "repetida": false
},

{
  "id": "t8-010",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "En una tamización se obtienen las siguientes fracciones granulométricas: C1 (72-73 micras, 580 g), C2 (73-74 micras, 575 g) y C3 (74-75 micras, 550 g). ¿Cuál de las tres fracciones elegirías preferentemente para elaborar comprimidos recubiertos?",
  "opciones": { "a": "La fracción C1", "b": "Las fracciones C2 y C3 juntas", "c": "La fracción C2", "d": "La fracción C3" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. La fracción de menor tamaño (C1) es la menos favorable en términos de flujo entre las tres disponibles.",
    "b": "Incorrecta porque mezclar dos fracciones de tamaño distinto introduce heterogeneidad en la distribución, lo contrario de lo que se busca para un proceso de compresión uniforme.",
    "c": "Incorrecta. La fracción intermedia (C2) no ofrece ventaja frente a la de mayor tamaño para este uso concreto.",
    "d": "Correcta. Entre fracciones tan próximas en tamaño, se prefiere la de mayor diámetro (C3, 74-75 micras), ya que un tamaño ligeramente mayor y uniforme favorece la capacidad de flujo y la compactación del núcleo, aspectos especialmente relevantes cuando después se va a aplicar un recubrimiento."
  },
  "repetida": true
},

{
  "id": "t8-011",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "Una distribución de tamaño de partícula simétrica se corresponde con:",
  "opciones": { "a": "Una pendiente negativa", "b": "Una pendiente positiva", "c": "Una pendiente igual a 0", "d": "Una distribución nunca puede ser simétrica" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. Una pendiente negativa se asocia a una distribución asimétrica (sesgada), no a una simétrica.",
    "b": "Incorrecta. Una pendiente positiva se asocia igualmente a una distribución asimétrica, no a una simétrica.",
    "c": "Correcta. Cuando la distribución de tamaños es simétrica, el coeficiente de asimetría (la 'pendiente' que mide el sesgo de la distribución) es igual a 0.",
    "d": "Incorrecta; las distribuciones de tamaño de partícula sí pueden ser simétricas, siendo este de hecho el caso ideal de referencia."
  },
  "repetida": true
},

{
  "id": "t8-012",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "Se tiene una muestra con partículas de tres diámetros: 50, 75 y 100 micras, con 100, 200 y 400 partículas respectivamente (700 partículas en total). Si el tamaño final deseado es FINO (menor de 75 micras), ¿es rentable el proceso de pulverización, considerando que se exige una rentabilidad mínima del 80%?",
  "opciones": { "a": "No, porque la rentabilidad es menor del 80%", "b": "Sí, porque la rentabilidad es menor del 80%", "c": "Sí, porque la rentabilidad es mayor del 80%", "d": "No, porque la rentabilidad es mayor del 80%" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Solo las partículas de 50 micras (100 partículas) cumplen el criterio de tamaño fino (menor de 75 micras); las de 75 y 100 micras no lo cumplen. La rentabilidad es, por tanto, 100/700 ≈ 14,3%, muy inferior al 80% exigido, por lo que el proceso NO es rentable.",
    "b": "Incorrecta porque, aunque identifica correctamente que la rentabilidad es menor del 80%, concluye erróneamente que el proceso sí sería rentable con ese resultado.",
    "c": "Incorrecta. Como se detalla en la explicación de la opción correcta, la rentabilidad obtenida está muy por debajo del 80%.",
    "d": "Incorrecta; la rentabilidad calculada no supera el 80%, como se detalla a continuación."
  },
  "repetida": false
},

{
  "id": "t8-013",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "¿Es rentable una pulverización con tamaño final ultrafino cuando el número total de partículas es 1500 y el número de partículas ultrafinas obtenidas es 1150, exigiendo una rentabilidad mínima del 80%?",
  "opciones": { "a": "No, porque la rentabilidad tendría que ser del 99%", "b": "Sí, porque la rentabilidad es superior al 70%", "c": "No, porque la rentabilidad es inferior al 90%", "d": "No, porque la rentabilidad es inferior al 80%" },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque no existe una exigencia de rentabilidad del 99% en este contexto.",
    "b": "Incorrecta. Aunque la rentabilidad calculada efectivamente supera el 70%, ese no es el umbral exigido para considerar el proceso rentable.",
    "c": "Incorrecta porque, aunque concluye correctamente que el proceso no es rentable, el argumento (inferior al 90%) no es el criterio de referencia empleado (80%).",
    "d": "Correcta. La rentabilidad es 1150/1500 ≈ 76,7%, un valor inferior al 80% mínimo exigido, por lo que el proceso de pulverización NO se considera rentable."
  },
  "repetida": false
},

{
  "id": "t8-014",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "En los análisis de microscopía de partículas esféricas, ¿qué aproximación se emplea para establecer la distancia media entre dos tangentes?",
  "opciones": { "a": "La aproximación de Martin.", "b": "La microscopía no se emplea nunca para medir partículas esféricas.", "c": "La aproximación de Feret.", "d": "Ninguna aproximación es aplicable a partículas esféricas." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La aproximación de Martin se basa en dividir el área proyectada en dos partes iguales, un concepto distinto al de la distancia entre tangentes.",
    "b": "Incorrecta. La microscopía sí es una técnica válida y habitual para medir partículas esféricas, entre otras formas.",
    "c": "Correcta. La aproximación de Feret (distancia media entre dos tangentes) es la que se emplea en los análisis microscópicos de partículas, incluidas las de forma esférica.",
    "d": "Incorrecta. Existen aproximaciones aplicables, como la de Feret, empleada precisamente en este contexto."
  },
  "repetida": false
},

{
  "id": "t8-015",
  "tema": "Tamaño y forma de partícula. Granulometría",
  "pregunta": "¿Para qué se utilizan los análisis granulométricos en la industria farmacéutica?",
  "opciones": { "a": "Exclusivamente para seleccionar el sabor más adecuado de una pastilla.", "b": "No tienen ninguna aplicación práctica relevante en la industria farmacéutica.", "c": "Para disminuir la contaminación ambiental (controlando la generación de polvo) y para seleccionar el tamaño más adecuado de la forma farmacéutica.", "d": "Exclusivamente para determinar el color del producto final." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. El sabor no depende de un análisis granulométrico, sino de la formulación (aromatizantes, edulcorantes, etc.).",
    "b": "Incorrecta. Los análisis granulométricos tienen numerosas aplicaciones prácticas relevantes en el control de calidad y el diseño de formas farmacéuticas.",
    "c": "Correcta. Conocer la distribución de tamaños de partícula permite, entre otras cosas, controlar la generación de polvo ambiental durante la fabricación y seleccionar el tamaño más adecuado para cada forma farmacéutica concreta.",
    "d": "Incorrecta. El color tampoco se determina mediante un análisis granulométrico."
  },
  "repetida": false
},

{
  "id": "t9-001",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "Con respecto al flujo de polvo, si el ángulo de reposo de un material se sitúa entre 39° y 45°, ¿de qué tipo de material disponemos?",
  "opciones": { "a": "Muy cohesivo", "b": "Cohesivo", "c": "De aceptable movilidad", "d": "Muy móvil" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La categoría 'muy cohesivo' corresponde a ángulos de reposo aún mayores, típicamente por encima de 55°.",
    "b": "Correcta. Un ángulo de reposo en el rango de 39-45° se clasifica como propio de un material cohesivo, con una capacidad de flujo pobre.",
    "c": "Incorrecta. Un ángulo de reposo de 39-45° se sitúa ya por encima del rango de movilidad aceptable, indicando un flujo más pobre.",
    "d": "Incorrecta. Un material 'muy móvil' presenta ángulos de reposo mucho más bajos, generalmente por debajo de 30°."
  },
  "repetida": false
},

{
  "id": "t9-002",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "Respecto a las propiedades de flujo de un polvo, señala la afirmación correcta:",
  "opciones": { "a": "Cuanto menor es el ángulo de reposo, mayor es la capacidad de flujo del material.", "b": "El índice de Carr se calcula exactamente igual que el índice de Hausner.", "c": "Con un ángulo de reposo de 56-70°, se podría elaborar cualquier forma farmacéutica, en especial comprimidos.", "d": "La tamización es un método de separación de partículas indirecto.", "e": "Adherencia y cohesión son dos palabras sinónimas." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Existe una relación inversa entre el ángulo de reposo y la capacidad de flujo: cuanto menor es el ángulo, mejor fluye el material.",
    "b": "Incorrecta. El índice de Carr y el índice de Hausner se calculan con fórmulas distintas a partir de la densidad aparente y la densidad compactada, aunque ambos midan un concepto relacionado (la compresibilidad del polvo).",
    "c": "Incorrecta; es justo lo contrario: un ángulo de reposo tan elevado (56-70°) indica un material muy cohesivo con un flujo muy pobre, poco adecuado para procesos que exigen buen flujo, como la compresión de comprimidos.",
    "d": "Incorrecta. La tamización es un método directo de determinación (y separación por fracciones) del tamaño de partícula, no indirecto.",
    "e": "Incorrecta. Adherencia (fuerzas entre superficies distintas) y cohesión (fuerzas entre partículas del mismo material) son conceptos relacionados pero no sinónimos."
  },
  "repetida": true
},

{
  "id": "t9-003",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "Respecto a los índices que valoran la capacidad de flujo de un polvo, señala la afirmación correcta:",
  "opciones": { "a": "Un índice de Hausner elevado (por ejemplo, superior a 1,5) indica siempre un buen flujo.", "b": "El índice de Hausner no guarda ninguna relación con la cohesividad del polvo.", "c": "El índice de Carr se calcula exactamente de la misma manera que el índice de Hausner.", "d": "Un índice de Hausner de 1,2 indica que las partículas tienen buen flujo y baja cohesividad." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta; es justo lo contrario: valores altos del índice de Hausner (por encima de 1,5, aproximadamente) indican mal flujo y alta cohesividad, no buen flujo.",
    "b": "Incorrecta. El índice de Hausner es, precisamente, un indicador indirecto de la cohesividad del polvo a través de su compresibilidad.",
    "c": "Incorrecta. Aunque relacionados, el índice de Carr y el de Hausner se calculan mediante fórmulas matemáticas distintas.",
    "d": "Correcta. Valores de índice de Hausner próximos a 1 (como 1,2) indican que la densidad aparente y la compactada apenas difieren, lo que se asocia a un polvo de buen flujo y baja cohesividad."
  },
  "repetida": false
},

{
  "id": "t9-004",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "En relación con las propiedades de flujo de los polvos, señala la afirmación correcta:",
  "opciones": { "a": "A mayor superficie de contacto entre partículas, menor es el flujo.", "b": "A mayor superficie de contacto entre partículas, mayor es el flujo.", "c": "A menor superficie de contacto entre partículas, mayor es el flujo.", "d": "A menor superficie de contacto entre partículas, menor es el flujo." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. A mayor superficie de contacto entre las partículas (por ejemplo, en partículas más pequeñas o de forma irregular), mayores son las fuerzas de fricción y cohesión entre ellas, lo que empeora (disminuye) su capacidad de flujo.",
    "b": "Incorrecta; es justo la relación opuesta a la real.",
    "c": "Incorrecta; aunque el sentido de la relación es el correcto (a menor superficie, mejor flujo), la formulación en negativo no encaja con la mejor descripción disponible en la opción c.",
    "d": "Incorrecta; es justo la relación opuesta a la real."
  },
  "repetida": true
},

{
  "id": "t9-005",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "¿Qué tipo de materiales pulverulentos presentan mejores propiedades de flujo?",
  "opciones": { "a": "Partículas aciculares de pequeño tamaño.", "b": "Partículas esféricas o cuasi-esféricas de tamaño mayor a 100 micras.", "c": "Partículas aciculares mayores de 75 micras.", "d": "Partículas esféricas o cuasi-esféricas de tamaño menor de 100 micras.", "e": "Polvos micronizados." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La combinación de forma acicular y tamaño pequeño es la menos favorable para el flujo, no la más favorable.",
    "b": "Correcta. Las partículas de forma esférica o cuasi-esférica y de tamaño relativamente grande (mayor de 100 micras) presentan menor superficie de contacto relativa y menor cohesividad, lo que favorece un mejor flujo.",
    "c": "Incorrecta. La forma acicular (alargada, en forma de aguja) favorece el entrelazado entre partículas, empeorando el flujo frente a formas esféricas.",
    "d": "Incorrecta. Aunque la forma es favorable, un tamaño menor de 100 micras empeora el flujo respecto a partículas de mayor tamaño.",
    "e": "Incorrecta. Los polvos micronizados (muy finos) tienen una elevada superficie específica y tienden a ser muy cohesivos, con un flujo pobre."
  },
  "repetida": false
},

{
  "id": "t9-006",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "¿Cuál de los siguientes materiales presenta una mejor fluidez, según se deduce de los resultados obtenidos?",
  "opciones": { "a": "Granulado con un ángulo de reposo de 32° y un índice de Hausner de 1,7.", "b": "Granulado con un ángulo de reposo de 40° y un índice de Hausner de 1,8.", "c": "Granulado con un ángulo de reposo de 45° y un índice de Hausner de 2,1.", "d": "Granulado con un ángulo de reposo de 20° y un índice de Hausner de 1,1.", "e": "Granulado con un ángulo de reposo de 30° y un índice de Hausner de 1,5." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta. Tanto el ángulo como el índice de Hausner son peores que los de la opción d.",
    "b": "Incorrecta. Tanto el ángulo como el índice de Hausner son claramente peores que los de la opción d.",
    "c": "Incorrecta. Presenta el ángulo de reposo más alto y el índice de Hausner más alto de los cinco, indicando la peor fluidez del grupo.",
    "d": "Correcta. Presenta simultáneamente el ángulo de reposo más bajo (20°, indicando mayor movilidad) y el índice de Hausner más próximo a 1 (1,1, indicando mínima diferencia entre densidad aparente y compactada), lo que en conjunto refleja la mejor fluidez de los cinco granulados.",
    "e": "Incorrecta. Aunque mejor que a, b y e, sigue teniendo un ángulo e índice superiores a los de la opción d."
  },
  "repetida": true
},

{
  "id": "t9-007",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "Señala la respuesta correcta sobre el flujo de polvos:",
  "opciones": { "a": "El tamaño de partícula no influye en absoluto en las propiedades de flujo.", "b": "Las partículas con un tamaño superior a 250 micras presentan, en general, un mejor flujo.", "c": "Solo la forma de la partícula influye en el flujo, nunca el tamaño.", "d": "Las partículas con un tamaño superior a 250 micras presentan siempre peor flujo que las de menor tamaño." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El tamaño de partícula es, precisamente, uno de los factores más determinantes de las propiedades de flujo.",
    "b": "Correcta. Como norma general, las partículas de mayor tamaño (por ejemplo, superiores a 250 micras) presentan menor superficie específica de contacto entre ellas y, por tanto, menor cohesividad y mejor flujo que las partículas muy finas.",
    "c": "Incorrecta. Tanto el tamaño como la forma de la partícula influyen de manera relevante en el flujo.",
    "d": "Incorrecta; es justo la relación opuesta a la observada de forma general."
  },
  "repetida": false
},

{
  "id": "t9-008",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "Respecto a la adherencia y la cohesión entre partículas de un polvo, señala la afirmación correcta:",
  "opciones": { "a": "La adherencia solo puede darse entre líquidos, nunca entre sólidos.", "b": "Adherencia y cohesión son conceptos sinónimos, intercambiables en cualquier contexto.", "c": "La cohesión se refiere a las fuerzas entre partículas de la misma sustancia, mientras que la adherencia se refiere a las fuerzas entre partículas de sustancias o superficies distintas.", "d": "Ni la adherencia ni la cohesión influyen en la capacidad de flujo de un polvo." },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La adherencia también puede darse entre partículas sólidas y otras superficies sólidas, no solo en líquidos.",
    "b": "Incorrecta. Aunque relacionados, son conceptos distintos, como se explica en la opción correcta.",
    "c": "Correcta. La cohesión implica fuerzas de atracción entre partículas de la misma naturaleza (unas con otras), mientras que la adherencia implica fuerzas de atracción entre superficies de naturaleza distinta (por ejemplo, entre el polvo y la pared de un equipo).",
    "d": "Incorrecta. Ambas son, precisamente, factores determinantes de la capacidad de flujo de un polvo: a mayor cohesión/adherencia, peor flujo."
  },
  "repetida": false
},

{
  "id": "t9-009",
  "tema": "Propiedades de flujo de polvos",
  "pregunta": "¿Qué factores determinan fundamentalmente la capacidad de flujo de un polvo?",
  "opciones": { "a": "El tamaño, la forma y la superficie de contacto de las partículas.", "b": "Únicamente el color de las partículas.", "c": "El flujo de un polvo no depende de ningún factor identificable.", "d": "Únicamente la composición química del principio activo." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El tamaño de partícula, su forma (esférica, acicular, irregular...) y la superficie de contacto entre partículas son los principales factores que determinan la capacidad de flujo de un polvo.",
    "b": "Incorrecta. El color no tiene ninguna relación con la capacidad de flujo de un polvo.",
    "c": "Incorrecta. El flujo de un polvo depende de factores bien identificados y estudiados, como los mencionados en la opción a.",
    "d": "Incorrecta. Si bien la composición puede influir indirectamente (por ejemplo, en la higroscopicidad), no es el factor determinante principal frente al tamaño, la forma y la superficie de contacto."
  },
  "repetida": false
},

{
  "id": "t10-001",
  "tema": "Mezclado de sólidos",
  "pregunta": "Una mezcla positiva se define por:",
  "opciones": { "a": "Los compuestos se mantienen unidos tras la aplicación de una fuerza inicial.", "b": "Los compuestos se entremezclan de forma espontánea.", "c": "Los compuestos tienden a separarse.", "d": "Son muestras inestables por definición." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta; no es la característica definitoria de la mezcla positiva, que se centra en la tendencia espontánea a mezclarse, no en mantenerse unida tras una fuerza externa.",
    "b": "Correcta. La mezcla positiva se caracteriza porque sus componentes (típicamente gases o líquidos miscibles) se entremezclan de forma espontánea, por difusión, gracias a fuerzas de cohesión débiles entre ellos.",
    "c": "Incorrecta; esa tendencia a separarse es propia de una mezcla negativa, no de una positiva.",
    "d": "Incorrecta. La mezcla positiva no se define por su inestabilidad, sino por su tendencia espontánea hacia una mezcla homogénea (idealmente perfecta)."
  },
  "repetida": false
},

{
  "id": "t10-002",
  "tema": "Mezclado de sólidos",
  "pregunta": "Señala la respuesta INCORRECTA sobre las mezclas positivas:",
  "opciones": { "a": "Gracias a las fuerzas de cohesión débiles entre sus componentes, se permite el mezclado.", "b": "Están compuestas por materiales como gases o líquidos miscibles.", "c": "No es necesaria una energía adicional para que se produzca el mezclado.", "d": "Tienden a aproximarse a una mezcla perfecta.", "e": "Tienden a mezclarse de forma espontánea y reversible por difusión." },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Correcta como afirmación: las fuerzas de cohesión débiles entre los componentes son, precisamente, lo que permite que se produzca el mezclado espontáneo.",
    "b": "Correcta como afirmación (por eso no es la respuesta buscada): las mezclas positivas están, en efecto, formadas típicamente por gases o líquidos miscibles.",
    "c": "Correcta como afirmación: al ser un proceso espontáneo guiado por difusión, no requiere aporte de energía adicional.",
    "d": "Correcta como afirmación: las mezclas positivas tienden, en efecto, a aproximarse progresivamente a una mezcla perfecta u homogénea.",
    "e": "Es la afirmación INCORRECTA y, por tanto, la respuesta buscada: el mezclado por difusión de una mezcla positiva es un proceso espontáneo pero, desde el punto de vista termodinámico (guiado por el aumento de entropía), no es reversible de forma espontánea; una vez mezclados, estos componentes no se vuelven a separar por sí solos."
  },
  "repetida": false
},

{
  "id": "t10-003",
  "tema": "Mezclado de sólidos",
  "pregunta": "Una mezcla aleatoria es aquella donde:",
  "opciones": { "a": "La probabilidad de seleccionar un tipo específico de partícula es la misma en todas las posiciones de la mezcla, ya que las partículas están dispuestas al azar y sin ningún criterio.", "b": "Los componentes se segregan sistemáticamente según su densidad.", "c": "Existen exactamente las mismas cantidades de dos componentes sólidos, del mismo tamaño, forma y densidad.", "d": "Cada partícula de un compuesto se sitúa al lado e intercalada exactamente con una partícula del otro compuesto." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. En una mezcla aleatoria, la disposición de las partículas es al azar, sin ningún criterio de orden, de modo que la probabilidad de encontrar un tipo concreto de partícula es la misma en cualquier posición de la mezcla.",
    "b": "Incorrecta; la segregación sistemática por densidad es, precisamente, lo opuesto a una mezcla aleatoria bien conseguida, y se considera un problema a evitar.",
    "c": "Incorrecta. La mezcla aleatoria no exige igualdad de cantidades, tamaño, forma ni densidad entre los componentes; esa sería una condición mucho más restrictiva y no es la definición general.",
    "d": "Incorrecta; esa disposición alternada y regular describe más bien una mezcla ordenada o perfecta, no una mezcla aleatoria."
  },
  "repetida": false
},

{
  "id": "t10-004",
  "tema": "Mezclado de sólidos",
  "pregunta": "¿Cuál de estos es un mecanismo de mezclado?",
  "opciones": { "a": "Cizallamiento (también la convección y la difusión)", "b": "Filtración", "c": "Trayectoria", "d": "Sedimentación" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Los tres mecanismos de mezclado reconocidos son la convección, la difusión y el cizallamiento.",
    "b": "Incorrecta. La filtración es una operación básica completamente distinta, no un mecanismo de mezclado.",
    "c": "Incorrecta. La trayectoria es, precisamente, uno de los mecanismos de SEGREGACIÓN (el fenómeno opuesto al mezclado), no de mezclado.",
    "d": "Incorrecta. La sedimentación es un fenómeno de separación de partículas, no un mecanismo de mezclado."
  },
  "repetida": false
},

{
  "id": "t10-005",
  "tema": "Mezclado de sólidos",
  "pregunta": "En la fase de mezclado, ¿qué tipos de mecanismos de segregación existen?",
  "opciones": { "a": "Segregación por expansión del lecho, por percolación y en trayectoria.", "b": "Segregación exclusivamente por expansión del lecho.", "c": "Segregación exclusivamente por percolación.", "d": "No existen mecanismos de segregación reconocidos, solo de mezclado." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Los tres mecanismos de segregación reconocidos son: la segregación por expansión del lecho, la segregación por percolación y la segregación en trayectoria.",
    "b": "Incorrecta porque, aunque la expansión del lecho sí es uno de los mecanismos, no es el único reconocido.",
    "c": "Incorrecta porque, aunque la percolación sí es uno de los mecanismos, no es el único reconocido.",
    "d": "Incorrecta. La segregación (el fenómeno opuesto al mezclado, en el que los componentes tienden a separarse de nuevo) es un fenómeno real y bien estudiado, con varios mecanismos reconocidos."
  },
  "repetida": false
},

{
  "id": "t10-006",
  "tema": "Mezclado de sólidos",
  "pregunta": "Los dispositivos mezcladores de sólidos se clasifican fundamentalmente en:",
  "opciones": { "a": "Mezcladores de líquidos y de suspensiones, únicamente.", "b": "Mezcladores de cuerpo móvil y mezcladores de cuerpo fijo.", "c": "Mezcladores de semisólidos, únicamente.", "d": "No existe una clasificación reconocida para estos dispositivos." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Los mezcladores de líquidos y suspensiones constituyen una categoría distinta, para formas farmacéuticas líquidas, no la clasificación general de mezcladores de sólidos.",
    "b": "Correcta. Los dispositivos mezcladores de sólidos se clasifican principalmente en mezcladores de cuerpo móvil (en los que el propio recipiente se mueve) y mezcladores de cuerpo fijo (en los que un elemento interno agita el material dentro de un recipiente estático).",
    "c": "Incorrecta. Los mezcladores de semisólidos constituyen otra categoría distinta, no la clasificación de referencia para sólidos.",
    "d": "Incorrecta. Sí existe una clasificación reconocida y estudiada, la recogida en la opción a."
  },
  "repetida": false
},

{
  "id": "t10-007",
  "tema": "Mezclado de sólidos",
  "pregunta": "En cuanto a la mezcla de sólidos, ¿cuáles son los estados de los componentes relevantes a la hora de seleccionar un dispositivo mezclador?",
  "opciones": { "a": "Únicamente el estado sólido.", "b": "Únicamente el estado gaseoso.", "c": "El estado gaseoso, el sólido y el líquido por igual.", "d": "El estado sólido y el estado líquido." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque, aunque el estado sólido es el más relevante, también debe considerarse la posible presencia de líquido en la mezcla.",
    "b": "Incorrecta. El estado gaseoso no es, en general, un estado relevante a considerar en la mezcla de sólidos farmacéuticos.",
    "c": "Incorrecta porque el estado gaseoso no forma parte de las consideraciones relevantes en este contexto.",
    "d": "Correcta. A la hora de seleccionar el dispositivo mezclador adecuado, hay que tener en cuenta si los componentes a mezclar son sólidos, líquidos, o una combinación de ambos (por ejemplo, un sólido humedecido)."
  },
  "repetida": false
},

{
  "id": "t10-008",
  "tema": "Mezclado de sólidos",
  "pregunta": "¿Cómo se caracteriza una mezcla negativa?",
  "opciones": { "a": "Es el tipo de mezcla que siempre se busca conseguir en la industria farmacéutica.", "b": "Los componentes tienden a separarse (segregarse) tras la aplicación de una fuerza inicial que los había mezclado.", "c": "Los componentes se entremezclan de forma completamente espontánea, sin necesidad de energía externa.", "d": "Los componentes presentan siempre el mismo tamaño, forma y densidad." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La mezcla negativa es, en realidad, el tipo de mezcla que se busca evitar, ya que tiende a desmezclarse con facilidad.",
    "b": "Correcta. En una mezcla negativa, los componentes (típicamente sólidos con distintas propiedades físicas) tienden a separarse de nuevo tras haber sido mezclados mediante una fuerza inicial, por lo que requieren energía continua para mantenerse mezclados.",
    "c": "Incorrecta; esa característica corresponde a la mezcla positiva, no a la negativa.",
    "d": "Incorrecta. Precisamente las diferencias en tamaño, forma o densidad entre los componentes son las que favorecen la tendencia a la segregación propia de una mezcla negativa."
  },
  "repetida": false
},

{
  "id": "t10-009",
  "tema": "Mezclado de sólidos",
  "pregunta": "¿Cuál de los siguientes NO es un mecanismo de mezclado, sino un mecanismo de segregación?",
  "opciones": { "a": "Cizallamiento", "b": "Trayectoria", "c": "Difusión", "d": "Convección" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El cizallamiento sí es uno de los tres mecanismos reconocidos de mezclado.",
    "b": "Correcta. La trayectoria es, en realidad, uno de los mecanismos de segregación (el fenómeno de desmezclado), no de mezclado.",
    "c": "Incorrecta. La difusión sí es uno de los tres mecanismos reconocidos de mezclado.",
    "d": "Incorrecta. La convección sí es uno de los tres mecanismos reconocidos de mezclado."
  },
  "repetida": true
},

{
  "id": "t11-001",
  "tema": "Desecación y liofilización",
  "pregunta": "El estado higrométrico es:",
  "opciones": { "a": "El estudio de la relación de temperatura en un proceso de desecación.", "b": "El estudio del equilibrio entre el comportamiento de un sólido y la humedad del aire que le rodea.", "c": "El estudio de la humedad del aire, aisladamente.", "d": "El estudio de un lecho purulento en una disolución." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La relación de temperaturas durante la desecación es un aspecto relacionado, pero no la definición del estado higrométrico en sí.",
    "b": "Correcta. El estado higrométrico estudia precisamente el equilibrio (o desequilibrio) entre la humedad que contiene un sólido y la humedad del aire que lo rodea, lo cual determina si el sólido tenderá a ganar o perder humedad.",
    "c": "Incorrecta porque no basta con estudiar la humedad del aire de forma aislada; el concepto de estado higrométrico implica la relación de ese aire con el sólido que lo rodea.",
    "d": "Incorrecta; es una opción sin relación real con el concepto de estado higrométrico."
  },
  "repetida": false
},

{
  "id": "t11-002",
  "tema": "Desecación y liofilización",
  "pregunta": "Las líneas de refrigeración adiabática de las cartas psicrométricas sirven para calcular la Humedad Absoluta (HA).",
  "opciones": { "a": "Falso", "b": "Verdadero" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Las cartas psicrométricas están diseñadas precisamente para poder leer y relacionar variables como la humedad absoluta a partir de las líneas que representan, entre ellas las de refrigeración adiabática.",
    "b": "Correcta. En las cartas psicrométricas, las líneas de refrigeración adiabática (relacionadas con la temperatura de bulbo húmedo) se emplean, junto con otros parámetros, para determinar la humedad absoluta del aire en unas condiciones dadas."
  },
  "repetida": false
},

{
  "id": "t11-003",
  "tema": "Desecación y liofilización",
  "pregunta": "¿Cuál es el orden correcto de los estados de un sólido húmedo en la dinámica de secado, según las fases de Newitt (de más húmedo a más seco)?",
  "opciones": { "a": "Capilar, goticular y funicular.", "b": "Goticular, capilar, funicular y pendular.", "c": "Pendular, capilar y goticular.", "d": "Goticular, funicular, pendular y capilar." },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta porque omite la fase pendular y altera el orden del resto.",
    "b": "Correcta. Partiendo del sólido más húmedo hacia el más seco, las fases de Newitt se suceden en este orden: goticular (líquido en forma de película continua o gotas sobre la superficie), capilar (el líquido llena los poros por capilaridad), funicular (coexisten zonas con líquido y con aire en los poros) y, por último, pendular (el líquido queda solo en puentes aislados entre partículas, con predominio de aire).",
    "c": "Incorrecta porque omite la fase funicular y presenta el orden en sentido inverso al real (de más seco a más húmedo).",
    "d": "Incorrecta porque invierte el orden de las fases intermedias (capilar y funicular)."
  },
  "repetida": false
},

{
  "id": "t11-004",
  "tema": "Desecación y liofilización",
  "pregunta": "Respecto a la dinámica de secado, señala la afirmación correcta:",
  "opciones": { "a": "Los tipos de transferencia de calor en la desecación son, únicamente, la conducción y la radiación.", "b": "En la dinámica de secado solo se estudian dos periodos en total, sin más subdivisiones.", "c": "El punto crítico de secado no tiene ninguna utilidad práctica en el diseño del proceso.", "d": "El punto crítico de secado es útil para conocer el tiempo eficaz de un proceso de desecación, y en el periodo postcrítico pueden producirse problemas de degradación térmica de los principios activos." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta porque omite la convección, que es también un mecanismo relevante de transferencia de calor durante la desecación.",
    "b": "Incorrecta. La dinámica de secado se describe habitualmente a través de varias fases (goticular, capilar, funicular y pendular), más de dos en total.",
    "c": "Incorrecta; al contrario, el punto crítico de secado es una referencia clave para diseñar y optimizar el proceso de desecación.",
    "d": "Correcta. El punto crítico marca el cambio de comportamiento en la velocidad de secado y resulta clave para estimar el tiempo eficaz del proceso; además, en la etapa posterior a ese punto (periodo postcrítico), el aumento relativo de temperatura del sólido puede degradar térmicamente a los principios activos sensibles al calor."
  },
  "repetida": false
},

{
  "id": "t11-005",
  "tema": "Desecación y liofilización",
  "pregunta": "¿Se considera el proceso de atomización un proceso de desecación en frío?",
  "opciones": { "a": "Verdadero", "b": "Falso" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. Aunque el tiempo de exposición del producto al calor es muy breve (lo que limita el daño térmico), el proceso de atomización emplea aire caliente para evaporar rápidamente el disolvente de las gotículas, por lo que no se clasifica como un proceso de desecación en frío.",
    "b": "Correcta. La atomización (spray drying) utiliza una corriente de aire caliente para secar rápidamente las gotículas pulverizadas; el proceso de desecación en frío por excelencia es, en cambio, la liofilización, que trabaja con el material congelado."
  },
  "repetida": false
},

{
  "id": "t11-006",
  "tema": "Desecación y liofilización",
  "pregunta": "¿Cuáles son los parámetros críticos durante el proceso de atomización?",
  "opciones": { "a": "El tamaño de gotícula, el flujo del aire, la temperatura del aire de entrada y el tiempo de permanencia sólido-aire.", "b": "Únicamente el tamaño del atomizador, el flujo del aire y el volumen de la muestra a desecar.", "c": "Únicamente la temperatura y la presión.", "d": "Únicamente el tiempo de contacto entre aire y fluido y el tamaño de la gotícula." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Los parámetros críticos que condicionan el resultado del proceso de atomización son el tamaño de gotícula generado, el flujo del aire, la temperatura del aire de entrada y el tiempo de permanencia del sólido en contacto con el aire.",
    "b": "Incorrecta porque omite la temperatura del aire de entrada y el tiempo de permanencia, ambos determinantes en el resultado final.",
    "c": "Incorrecta porque simplifica en exceso, dejando fuera parámetros clave como el tamaño de gotícula y el tiempo de permanencia.",
    "d": "Incorrecta porque omite el flujo y la temperatura del aire de entrada, ambos parámetros críticos del proceso."
  },
  "repetida": false
},

{
  "id": "t11-007",
  "tema": "Desecación y liofilización",
  "pregunta": "Indica cuál de las siguientes afirmaciones es la CORRECTA acerca del Lecho Fluido:",
  "opciones": { "a": "El lecho fluido es un equipo que se utiliza tanto a nivel industrial como a nivel de laboratorio en procesos de desecación, atomización, granulación y pelletización.", "b": "El lecho fluido es un equipo utilizado tanto a nivel industrial como a nivel de laboratorio, útil exclusivamente en la elaboración de suspensiones y emulsiones." },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. El lecho fluido es un equipo versátil, empleado tanto en la industria como en el laboratorio, con aplicaciones en desecación, atomización, granulación y pelletización de sólidos.",
    "b": "Incorrecta. El lecho fluido no se emplea para elaborar suspensiones ni emulsiones (formas líquidas), sino en procesos que implican sólidos, como los mencionados en la opción a."
  },
  "repetida": false
},

{
  "id": "t11-008",
  "tema": "Desecación y liofilización",
  "pregunta": "¿A qué operación farmacéutica básica corresponde la siguiente definición? 'Operación básica farmacéutica consistente en la eliminación total o parcial de la humedad que posee un cuerpo sólido'.",
  "opciones": { "a": "Desecación", "b": "Extracción", "c": "Pulverización", "d": "Filtración", "e": "Esterilización" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. Esta es la definición estándar de la operación de desecación: eliminar, total o parcialmente, la humedad presente en un sólido.",
    "b": "Incorrecta. La extracción aísla un componente de una mezcla compleja, un concepto distinto al de eliminar humedad.",
    "c": "Incorrecta. La pulverización reduce el tamaño de partícula de un sólido, sin relación directa con la eliminación de humedad.",
    "d": "Incorrecta. La filtración separa un sólido disperso en un fluido, no elimina la humedad interna de un sólido.",
    "e": "Incorrecta. La esterilización elimina microorganismos, no humedad."
  },
  "repetida": false
},

{
  "id": "t11-009",
  "tema": "Desecación y liofilización",
  "pregunta": "Dentro de la dinámica de secado de un lecho húmedo, ¿cuál de las siguientes fases corresponde al estado MÁS húmedo del sólido, con el líquido formando una película continua o gotas sobre la superficie?",
  "opciones": { "a": "Fase funicular", "b": "Fase pendular", "c": "Fase goticular", "d": "Fase capilar" },
  "correcta": "c",
  "explicacion_opciones": {
    "a": "Incorrecta. La fase funicular es una etapa intermedia, con zonas de los poros ocupadas por líquido y otras por aire.",
    "b": "Incorrecta. La fase pendular es la última y más seca, con el líquido reducido a puentes aislados entre partículas.",
    "c": "Correcta. La fase goticular es la primera y más húmeda de la dinámica de secado, en la que el líquido cubre la superficie del sólido en forma de película continua o gotas visibles.",
    "d": "Incorrecta. La fase capilar es la siguiente etapa, en la que el líquido ya no cubre la superficie de forma continua, sino que se mantiene en los poros por capilaridad."
  },
  "repetida": false
},

{
  "id": "t12-001",
  "tema": "Filtración",
  "pregunta": "Señala a qué concepto corresponde la siguiente definición: 'barrera que permite el paso del fluido, pero impide el de los elementos en él dispersos'.",
  "opciones": { "a": "Torta", "b": "Líquido turbio", "c": "Filtrado", "d": "Efluente", "e": "Medio filtrante" },
  "correcta": "e",
  "explicacion_opciones": {
    "a": "Incorrecta. La torta es el conjunto de sólidos que quedan retenidos sobre el medio filtrante, no la barrera en sí.",
    "b": "Incorrecta. El líquido turbio sería, en todo caso, la mezcla de partida antes de filtrar, no la barrera empleada para filtrarla.",
    "c": "Incorrecta. El filtrado es, al igual que el efluente, el fluido ya filtrado, no la barrera empleada en el proceso.",
    "d": "Incorrecta. El efluente es el fluido que ya ha atravesado el medio filtrante, no la barrera que lo retiene.",
    "e": "Correcta. El medio filtrante es precisamente la barrera física (por ejemplo, un papel de filtro, una malla o una membrana) que deja pasar el fluido pero retiene las partículas sólidas dispersas en él."
  },
  "repetida": false
},

{
  "id": "t12-002",
  "tema": "Filtración",
  "pregunta": "En un proceso de filtración, ¿cómo se denomina la masa de sólidos que queda retenida sobre el medio filtrante?",
  "opciones": { "a": "Torta", "b": "Filtrado", "c": "Efluente", "d": "Medio filtrante" },
  "correcta": "a",
  "explicacion_opciones": {
    "a": "Correcta. La torta es el depósito de sólidos que se va acumulando sobre el medio filtrante a medida que el fluido lo atraviesa.",
    "b": "Incorrecta. El filtrado es, igual que el efluente, el líquido que ha atravesado el filtro, no los sólidos retenidos.",
    "c": "Incorrecta. El efluente es el fluido que sale ya filtrado, no los sólidos retenidos.",
    "d": "Incorrecta. El medio filtrante es la barrera física en sí, no la masa de sólidos que queda retenida sobre ella."
  },
  "repetida": false
},

{
  "id": "t12-003",
  "tema": "Filtración",
  "pregunta": "En un proceso de filtración, ¿cómo se denomina el fluido que ha atravesado el medio filtrante, ya libre de las partículas sólidas retenidas?",
  "opciones": { "a": "Medio filtrante", "b": "Efluente o filtrado", "c": "Torta", "d": "Suspensión de partida" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. El medio filtrante es la barrera empleada en el proceso, no el resultado líquido obtenido.",
    "b": "Correcta. El fluido que atraviesa el medio filtrante, ya sin las partículas sólidas que llevaba dispersas, se denomina efluente o filtrado.",
    "c": "Incorrecta. La torta es la fracción sólida retenida, no el fluido que ha pasado a través del filtro.",
    "d": "Incorrecta. La suspensión de partida es la mezcla original antes de filtrar, no el resultado del proceso."
  },
  "repetida": false
},

{
  "id": "t12-004",
  "tema": "Filtración",
  "pregunta": "¿Cuál de las siguientes opciones NO es un tipo de filtración reconocido, según los estados de la mezcla a separar?",
  "opciones": { "a": "Filtración sólido-líquido", "b": "Filtración gas-gas", "c": "Filtración sólido-gas", "d": "Filtración líquido-líquido" },
  "correcta": "b",
  "explicacion_opciones": {
    "a": "Incorrecta. La filtración sólido-líquido es el tipo más habitual y sí está reconocido (por ejemplo, separar un precipitado de una disolución).",
    "b": "Correcta. La filtración gas-gas no se considera un tipo de filtración reconocido, ya que dos gases se mezclan de forma homogénea y no pueden separarse mediante una barrera física porosa del modo en que se separan sólidos de fluidos.",
    "c": "Incorrecta. La filtración sólido-gas sí es un tipo reconocido (por ejemplo, filtros de aire que retienen partículas sólidas en suspensión en el aire).",
    "d": "Incorrecta. La filtración líquido-líquido sí está reconocida, empleada para separar líquidos inmiscibles con ayuda de medios filtrantes específicos."
  },
  "repetida": false
},

{
  "id": "t12-005",
  "tema": "Filtración",
  "pregunta": "¿Cuál es el objetivo general de la operación de filtración?",
  "opciones": { "a": "Eliminar por completo la humedad de un sólido.", "b": "Reducir el tamaño de partícula de un sólido.", "c": "Homogeneizar dos líquidos inmiscibles.", "d": "Separar un sólido disperso en un fluido (líquido o gas), haciendo pasar la mezcla a través de un medio filtrante que retiene el sólido." },
  "correcta": "d",
  "explicacion_opciones": {
    "a": "Incorrecta; esa es la finalidad de la desecación, no de la filtración.",
    "b": "Incorrecta; esa es la finalidad de la pulverización, no de la filtración.",
    "c": "Incorrecta; la filtración no busca homogeneizar líquidos inmiscibles, sino separar un sólido de un fluido.",
    "d": "Correcta. La filtración es la operación básica que separa las partículas sólidas dispersas en un fluido (líquido o gas), haciendo pasar la mezcla a través de un medio filtrante que retiene el sólido y deja pasar el fluido."
  },
  "repetida": false
}
];

