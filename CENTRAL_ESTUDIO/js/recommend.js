// Motor de recomendacion "¿Que estudio ahora?". Reglas simples y
// transparentes, sin IA: cada sugerencia lleva su propio motivo.
//
// Prioridad (de mas a menos importante):
//   1. Temas no iniciados primero.
//   2. Asignaturas con menos avance van primero (equilibrar las 6).
//   3. Dentro de un tema: material base -> audio -> flashcards -> evaluacion.
//   4. Flashcards solo se sugieren si el tema ya tiene algo de avance (>=30%).
//   5. La evaluacion (simulador) de un tema solo se sugiere cuando ese tema
//      ya tiene bastante avance (>=60%) -- es lo ultimo de la progresion.
//   6. El simulador general de la asignatura solo se sugiere cuando la
//      asignatura entera esta ya bastante avanzada (>=60%).

const TYPE_PRIORITY = {
  guia_docente: 0,
  guia_estudio: 1,
  ficha: 1,
  apuntes: 1,
  chuleta: 2,
  video: 2,
  seminario: 2,
  practica: 2,
  tarea: 2,
  plantilla: 2,
  ejemplo: 2,
  excel: 2,
  imagen: 2,
  otro: 2,
  audio: 3,
  flashcards: 4,
  test: 5,
  examen: 6,
  simulador: 7,
};

function reasonFor(resource, topicFraction, topicStatus) {
  if (topicStatus === "no_iniciado") return "Tema todavía no iniciado";
  if (["guia_docente", "guia_estudio", "ficha", "apuntes"].includes(resource.type))
    return "Material base para avanzar el tema";
  if (["chuleta", "video", "seminario", "practica", "tarea", "plantilla"].includes(resource.type))
    return "Refuerza el tema antes de evaluarte";
  if (resource.type === "audio") return "Repaso en audio del tema";
  if (resource.type === "flashcards") return "Ya hay avance en el tema: toca reforzar con flashcards";
  if (resource.type === "simulador") return "El tema ya tiene bastante avance: evalúate de verdad, con tiempo";
  if (["test", "examen"].includes(resource.type)) return "Ponte a prueba con este examen o test";
  return "Pendiente en este tema";
}

function recommend(limit) {
  limit = limit || 8;
  const subjects = Data.getSubjects();
  const items = [];

  for (const subject of subjects) {
    const subjPct = Data.subjectFraction(subject);
    for (const topic of subject.topics) {
      const topicFrac = Data.topicFraction(topic, subject);
      const topicStat = Data.topicStatus(topic, subject);
      for (const rid of topic.resources) {
        const resource = subject.resources[rid];
        const frac = Store.resourceFraction(resource);
        if (frac >= 0.999) continue;
        if (resource.type === "flashcards" && topicFrac < 0.3) continue;
        // Evaluacion (simulador por tema): solo cuando ya hay bastante
        // avance en el tema -- es lo ultimo de la progresion, despues de
        // las flashcards, nunca lo primero que se sugiere.
        if (resource.type === "simulador" && topicFrac < 0.6) continue;

        const typePriority = TYPE_PRIORITY[resource.type] ?? 3;
        const score = subjPct * 1000 + topic.numbers[0] * 10 + typePriority;
        items.push({
          score,
          subject,
          topic,
          resource,
          reason: reasonFor(resource, topicFrac, topicStat),
        });
      }
    }

    // Simulador general: solo si la asignatura va bastante avanzada.
    for (const rid of subject.generalResources) {
      const resource = subject.resources[rid];
      if (resource.type !== "simulador") continue;
      if (subjPct >= 0.6) {
        items.push({
          score: subjPct * 1000 + 500,
          subject,
          topic: null,
          resource,
          reason: "La asignatura ya tiene bastante avance: pon a prueba lo aprendido",
        });
      }
    }
  }

  items.sort((a, b) => a.score - b.score);

  // Diversificar: como maximo 2 sugerencias por tema y 3 por asignatura,
  // para que una asignatura muy atrasada no monopolice toda la lista y
  // sigan asomando las demas.
  const perTopicCount = new Map();
  const perSubjectCount = new Map();
  const maxPerSubject = Math.max(2, Math.ceil(limit / Math.max(1, subjects.length)) + 1);
  const picked = [];
  for (const item of items) {
    const topicKey = `${item.subject.id}::${item.topic ? item.topic.key : "general"}`;
    const topicCount = perTopicCount.get(topicKey) || 0;
    const subjectCount = perSubjectCount.get(item.subject.id) || 0;
    if (topicCount >= 2 || subjectCount >= maxPerSubject) continue;
    perTopicCount.set(topicKey, topicCount + 1);
    perSubjectCount.set(item.subject.id, subjectCount + 1);
    picked.push(item);
    if (picked.length >= limit) break;
  }
  return picked;
}
