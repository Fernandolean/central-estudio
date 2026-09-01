// Persistencia de progreso en localStorage. Nada de esto toca los
// archivos originales: solo guarda estado (visto/completado/etc.) en el
// navegador del usuario.

const Store = (() => {
  const KEY = "centralEstudio.progress.v1";
  const ACTIVITY_LIMIT = 300;

  function defaultState() {
    return { version: 1, resources: {}, overrides: {}, activity: [] };
  }

  function testStorageAvailable() {
    try {
      const testKey = "__centralEstudio_test__";
      localStorage.setItem(testKey, "1");
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  let storageAvailable = testStorageAvailable();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return {
        version: 1,
        resources: parsed.resources || {},
        overrides: parsed.overrides || {},
        activity: Array.isArray(parsed.activity) ? parsed.activity : [],
      };
    } catch (e) {
      console.error("No se pudo leer el progreso guardado, empezando de cero.", e);
      return defaultState();
    }
  }

  let state = load();
  let externalChangeCallback = null;

  function onExternalChange(cb) {
    externalChangeCallback = cb;
  }

  // Si hay otra pestaña/ventana abierta con esta misma app y cambia el
  // progreso alli, esta pestaña se resincroniza sola en vez de quedarse
  // con una copia en memoria desactualizada.
  window.addEventListener("storage", (e) => {
    if (e.key === KEY || e.key === null) {
      state = load();
      if (externalChangeCallback) externalChangeCallback();
    }
  });

  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      storageAvailable = true;
    } catch (e) {
      storageAvailable = false;
      console.error("No se pudo guardar el progreso: localStorage no disponible o lleno.", e);
    }
  }

  function isAvailable() {
    return storageAvailable;
  }

  function getProgress(resourceId) {
    return state.resources[resourceId] || { status: "pendiente", percent: null, attempts: 0, updatedAt: null };
  }

  function resourceFraction(resource) {
    const p = getProgress(resource.id);
    if (typeof p.percent === "number") return p.percent / 100;
    if (p.status === "completado") return 1;
    if (p.status === "en_progreso") return 0.5;
    return 0;
  }

  function logActivity(entry) {
    state.activity.unshift({ ts: new Date().toISOString(), ...entry });
    if (state.activity.length > ACTIVITY_LIMIT) {
      state.activity.length = ACTIVITY_LIMIT;
    }
  }

  function setStatus(resource, subject, topic, status) {
    const prev = getProgress(resource.id);
    state.resources[resource.id] = {
      status,
      percent: status === "completado" ? 100 : status === "pendiente" ? null : prev.percent,
      attempts: prev.attempts || 0,
      updatedAt: new Date().toISOString(),
    };
    logActivity({
      subjectId: subject.id,
      subjectName: subject.name,
      topicLabel: topic ? topic.numLabel : null,
      resourceId: resource.id,
      resourceTitle: resource.title,
      resourceType: resource.type,
      action: status,
    });
    persist();
  }

  function cycleStatus(resource, subject, topic) {
    const cur = getProgress(resource.id).status;
    const next = cur === "pendiente" ? "en_progreso" : cur === "en_progreso" ? "completado" : "pendiente";
    setStatus(resource, subject, topic, next);
    return next;
  }

  function setPercent(resource, subject, topic, percent) {
    percent = Math.max(0, Math.min(100, Math.round(percent)));
    const status = percent >= 100 ? "completado" : percent > 0 ? "en_progreso" : "pendiente";
    const prev = getProgress(resource.id);
    state.resources[resource.id] = {
      status,
      percent,
      attempts: prev.attempts || 0,
      updatedAt: new Date().toISOString(),
    };
    if (percent === 0 || percent === 100 || prev.status !== status) {
      logActivity({
        subjectId: subject.id,
        subjectName: subject.name,
        topicLabel: topic ? topic.numLabel : null,
        resourceId: resource.id,
        resourceTitle: resource.title,
        resourceType: resource.type,
        action: `flashcards:${percent}%`,
      });
    }
    persist();
  }

  function incrementAttempts(resource, subject) {
    const prev = getProgress(resource.id);
    const attempts = (prev.attempts || 0) + 1;
    state.resources[resource.id] = {
      status: "completado",
      percent: 100,
      attempts,
      updatedAt: new Date().toISOString(),
    };
    logActivity({
      subjectId: subject.id,
      subjectName: subject.name,
      topicLabel: null,
      resourceId: resource.id,
      resourceTitle: resource.title,
      resourceType: resource.type,
      action: `intento_${attempts}`,
    });
    persist();
  }

  function setOverride(subjectId, resourceId, topicKey) {
    state.overrides[resourceId] = topicKey;
    persist();
  }

  function clearOverride(resourceId) {
    delete state.overrides[resourceId];
    persist();
  }

  function getOverride(resourceId) {
    return state.overrides[resourceId] || null;
  }

  function getActivity(limit) {
    return limit ? state.activity.slice(0, limit) : state.activity;
  }

  function exportState() {
    return JSON.stringify(state, null, 2);
  }

  function importState(jsonText) {
    const parsed = JSON.parse(jsonText);
    if (!parsed || typeof parsed !== "object") throw new Error("Formato no válido");
    state = {
      version: 1,
      resources: parsed.resources || {},
      overrides: parsed.overrides || {},
      activity: Array.isArray(parsed.activity) ? parsed.activity : [],
    };
    persist();
  }

  function resetAll() {
    state = defaultState();
    persist();
  }

  return {
    getProgress,
    resourceFraction,
    setStatus,
    cycleStatus,
    setPercent,
    incrementAttempts,
    setOverride,
    clearOverride,
    getOverride,
    getActivity,
    exportState,
    importState,
    resetAll,
    isAvailable,
    onExternalChange,
  };
})();
