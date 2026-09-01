// Capa intermedia entre el indice estatico (window.ACADEMIC_INDEX, generado
// por scripts/actualizar_indice.py) y el progreso guardado por el usuario.
// Aplica las reclasificaciones manuales (overrides) y calcula progreso.

const RESOURCE_TYPES = {
  guia_docente: { icon: "🎓", label: "Guía docente" },
  guia_estudio: { icon: "📘", label: "Guía de estudio" },
  chuleta: { icon: "💡", label: "Chuleta" },
  ficha: { icon: "📖", label: "Ficha académica" },
  apuntes: { icon: "📚", label: "Apuntes" },
  video: { icon: "🎥", label: "Vídeo" },
  audio: { icon: "🎧", label: "Audio" },
  flashcards: { icon: "🧠", label: "Flashcards" },
  simulador: { icon: "📝", label: "Simulador" },
  test: { icon: "❓", label: "Test" },
  examen: { icon: "📋", label: "Examen" },
  practica: { icon: "🧪", label: "Práctica" },
  seminario: { icon: "🗣️", label: "Seminario" },
  tarea: { icon: "✍️", label: "Tarea" },
  plantilla: { icon: "🧾", label: "Plantilla" },
  ejemplo: { icon: "👥", label: "Ejemplo de compañero" },
  excel: { icon: "📊", label: "Excel" },
  imagen: { icon: "🖼️", label: "Imagen" },
  otro: { icon: "📄", label: "Documento" },
};

const BASE_TYPES = new Set([
  "guia_docente", "guia_estudio", "chuleta", "ficha", "apuntes", "video",
  "seminario", "practica", "tarea", "plantilla", "ejemplo", "excel", "imagen", "otro",
]);

function resourceTypeMeta(type) {
  return RESOURCE_TYPES[type] || RESOURCE_TYPES.otro;
}

const Data = (() => {
  const index = window.ACADEMIC_INDEX;

  function stripAccents(s) {
    return s.normalize("NFKD").replace(/[̀-ͯ]/g, "");
  }
  function norm(s) {
    return stripAccents(String(s || "")).toLowerCase();
  }

  // --- Vistas "efectivas" (con overrides manuales aplicados) -------------

  function effectiveSubject(subject) {
    const topics = subject.topics.map((t) => ({ ...t, resources: [...t.resources] }));
    const unclassified = [];
    const topicByKey = new Map(topics.map((t) => [t.key, t]));

    // quitar de su ubicacion original cualquier recurso con override
    for (const t of topics) {
      t.resources = t.resources.filter((rid) => {
        const ov = Store.getOverride(rid);
        return !(ov && ov !== t.key);
      });
    }
    for (const rid of subject.unclassified) {
      const ov = Store.getOverride(rid);
      if (ov && topicByKey.has(ov)) continue; // se añade abajo
      unclassified.push(rid);
    }
    // añadir overrides a su tema destino
    for (const [rid] of Object.entries(subject.resources)) {
      const ov = Store.getOverride(rid);
      if (ov && topicByKey.has(ov)) {
        const t = topicByKey.get(ov);
        if (!t.resources.includes(rid)) t.resources.push(rid);
      }
    }
    return { ...subject, topics, unclassified };
  }

  function getSubjects() {
    return index.subjects.map(effectiveSubject);
  }

  function getSubject(id) {
    const s = index.subjects.find((s) => s.id === id);
    return s ? effectiveSubject(s) : null;
  }

  function resourceOf(subject, id) {
    return subject.resources[id];
  }

  function allResourcesFlat() {
    const out = [];
    for (const subject of getSubjects()) {
      for (const t of subject.topics) {
        for (const rid of t.resources) {
          out.push({ subject, topic: t, resource: subject.resources[rid] });
        }
      }
      for (const rid of subject.unclassified) {
        out.push({ subject, topic: null, resource: subject.resources[rid] });
      }
      for (const rid of subject.generalResources) {
        out.push({ subject, topic: null, resource: subject.resources[rid], general: true });
      }
    }
    return out;
  }

  // --- Progreso ------------------------------------------------------------

  function topicFraction(topic, subject) {
    const trackable = topic.resources.filter((rid) => subject.resources[rid].type !== "simulador");
    if (trackable.length === 0) return 0;
    const sum = trackable.reduce((acc, rid) => acc + Store.resourceFraction(subject.resources[rid]), 0);
    return sum / trackable.length;
  }

  function topicStatus(topic, subject) {
    const f = topicFraction(topic, subject);
    if (f >= 0.999) return "completado";
    if (f > 0) return "en_progreso";
    return "no_iniciado";
  }

  function subjectFraction(subject) {
    if (subject.topics.length === 0) return 0;
    const sum = subject.topics.reduce((acc, t) => acc + topicFraction(t, subject), 0);
    return sum / subject.topics.length;
  }

  function subjectResourceStats(subject) {
    const ids = new Set();
    for (const t of subject.topics) t.resources.forEach((r) => ids.add(r));
    subject.unclassified.forEach((r) => ids.add(r));
    subject.generalResources.forEach((r) => ids.add(r));
    let total = 0;
    let done = 0;
    for (const rid of ids) {
      const res = subject.resources[rid];
      if (res.type === "simulador") continue;
      total += 1;
      if (Store.resourceFraction(res) >= 0.999) done += 1;
    }
    return { done, total };
  }

  function subjectAudioStats(subject) {
    let total = 0;
    let done = 0;
    for (const t of subject.topics) {
      for (const rid of t.resources) {
        const res = subject.resources[rid];
        if (res.type !== "audio") continue;
        total += 1;
        if (Store.resourceFraction(res) >= 0.999) done += 1;
      }
    }
    return { done, total };
  }

  function subjectFlashcardStats(subject) {
    let totalQ = 0;
    let doneQ = 0;
    for (const t of subject.topics) {
      for (const rid of t.resources) {
        const res = subject.resources[rid];
        if (res.type !== "flashcards") continue;
        const q = res.questionCount || 0;
        totalQ += q;
        doneQ += q * Store.resourceFraction(res);
      }
    }
    return { done: Math.round(doneQ), total: totalQ };
  }

  function subjectSimuladorAttempts(subject) {
    let total = 0;
    for (const rid of subject.generalResources) {
      if (subject.resources[rid].type === "simulador") total += Store.getProgress(rid).attempts || 0;
    }
    for (const t of subject.topics) {
      for (const rid of t.resources) {
        if (subject.resources[rid].type === "simulador") total += Store.getProgress(rid).attempts || 0;
      }
    }
    return total;
  }

  function subjectTopicStats(subject) {
    let done = 0;
    for (const t of subject.topics) {
      if (topicStatus(t, subject) === "completado") done += 1;
    }
    return { done, total: subject.topics.length };
  }

  function lastActivityFor(subjectId) {
    const activity = Store.getActivity();
    const entry = activity.find((a) => a.subjectId === subjectId);
    return entry ? entry.ts : null;
  }

  // --- Busqueda --------------------------------------------------------

  function searchResources(query, filters) {
    filters = filters || {};
    const q = norm(query || "");
    const results = [];
    for (const subject of getSubjects()) {
      if (filters.subjectIds && filters.subjectIds.length && !filters.subjectIds.includes(subject.id)) continue;
      const items = [];
      for (const t of subject.topics) {
        for (const rid of t.resources) items.push({ res: subject.resources[rid], topic: t });
      }
      for (const rid of subject.unclassified) items.push({ res: subject.resources[rid], topic: null });
      for (const rid of subject.generalResources) items.push({ res: subject.resources[rid], topic: null, general: true });

      for (const { res, topic, general } of items) {
        if (filters.types && filters.types.length && !filters.types.includes(res.type)) continue;
        const fraction = Store.resourceFraction(res);
        const status = fraction >= 0.999 ? "completado" : fraction > 0 ? "en_progreso" : "pendiente";
        if (filters.status && filters.status.length && !filters.status.includes(status)) continue;
        if (filters.onlyPending && status === "completado") continue;
        if (q) {
          const haystack = norm(
            [res.title, res.originalName, subject.name, topic ? topic.title : "", topic ? topic.numLabel : ""].join(" ")
          );
          if (!haystack.includes(q)) continue;
        }
        results.push({ subject, topic, resource: res, general: !!general, status });
      }
    }
    return results;
  }

  return {
    index,
    norm,
    getSubjects,
    getSubject,
    resourceOf,
    allResourcesFlat,
    topicFraction,
    topicStatus,
    subjectFraction,
    subjectResourceStats,
    subjectAudioStats,
    subjectFlashcardStats,
    subjectSimuladorAttempts,
    subjectTopicStats,
    lastActivityFor,
    searchResources,
  };
})();
