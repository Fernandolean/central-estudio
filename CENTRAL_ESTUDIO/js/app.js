// Aplicacion principal: router por hash + renderizado de vistas +
// delegacion de eventos. Todo vanilla JS, sin build ni dependencias.

// ---------------------------------------------------------------------
// Estado de UI (no persistente: se resetea al navegar/recargar)
// ---------------------------------------------------------------------

let openTopics = new Set();
let subjectFilterState = { types: new Set(), onlyPending: false };
let lastSubjectId = null;
let exploreFilters = { types: new Set(), status: new Set(), onlyPending: false, subjectIds: new Set() };

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
const escapeAttr = escapeHtml;

function formatDuration(sec) {
  if (sec === null || sec === undefined) return "";
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function relativeTime(iso) {
  if (!iso) return "Sin actividad";
  const d = new Date(iso);
  const diffMin = Math.floor((Date.now() - d.getTime()) / 60000);
  if (diffMin < 1) return "Ahora mismo";
  if (diffMin < 60) return `Hace ${diffMin} min`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `Hace ${diffH} h`;
  const diffD = Math.floor(diffH / 24);
  if (diffD === 1) return "Ayer";
  if (diffD < 7) return `Hace ${diffD} días`;
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
}

function dayLabel(iso) {
  const d = new Date(iso);
  const now = new Date();
  const startOfDay = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
  const diffDays = Math.round((startOfDay(now) - startOfDay(d)) / 86400000);
  if (diffDays === 0) return "Hoy";
  if (diffDays === 1) return "Ayer";
  if (diffDays < 7) return d.toLocaleDateString("es-ES", { weekday: "long" });
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: d.getFullYear() !== now.getFullYear() ? "numeric" : undefined });
}

function statusIcon(status) {
  return status === "completado" ? "✅" : status === "en_progreso" ? "🟡" : "⚪";
}

function statusLabelFor(type, status) {
  if (status === "completado") {
    if (type === "audio") return "Escuchado";
    if (type === "simulador" || type === "flashcards") return "Completado";
    return "Visto";
  }
  if (status === "en_progreso") return "En progreso";
  return "Pendiente";
}

function findResourceContext(rid) {
  const subjectId = rid.split("::")[0];
  const subject = Data.getSubject(subjectId);
  if (!subject) return null;
  const resource = subject.resources[rid];
  if (!resource) return null;
  let topic = null;
  for (const t of subject.topics) {
    if (t.resources.includes(rid)) { topic = t; break; }
  }
  return { subject, topic, resource };
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1800);
}

// ---------------------------------------------------------------------
// Componentes reutilizables
// ---------------------------------------------------------------------

function subjectCardHTML(subject) {
  const pct = Math.round(Data.subjectFraction(subject) * 100);
  const topicStats = Data.subjectTopicStats(subject);
  const resStats = Data.subjectResourceStats(subject);
  const audioStats = Data.subjectAudioStats(subject);
  const fcStats = Data.subjectFlashcardStats(subject);
  const attempts = Data.subjectSimuladorAttempts(subject);
  const lastTs = Data.lastActivityFor(subject.id);
  return `
    <a class="subject-card" href="#/asignatura/${subject.id}" style="--accent-color:${subject.color}; --accent-color-soft:${subject.color}22;">
      <div class="subject-card__bar"></div>
      <div class="subject-card__top">
        <div class="subject-card__emoji">${subject.emoji}</div>
        <div class="subject-card__name">${escapeHtml(subject.name)}</div>
        <div class="subject-card__pct">${pct}%</div>
      </div>
      <div class="progress-bar"><div class="progress-bar__fill" style="width:${pct}%"></div></div>
      <div class="subject-card__stats">
        <div>📚 <span class="n">${topicStats.done}/${topicStats.total}</span> temas</div>
        <div>✅ <span class="n">${resStats.done}/${resStats.total}</span> recursos</div>
        <div>🎧 <span class="n">${audioStats.done}/${audioStats.total}</span> audios</div>
        <div>🧠 <span class="n">${fcStats.done}/${fcStats.total}</span> flashcards</div>
        <div>📝 <span class="n">${attempts}</span> intentos simulador</div>
      </div>
      <div class="subject-card__footer">
        <span class="subject-card__last">${escapeHtml(relativeTime(lastTs))}</span>
        <span class="btn small">Entrar →</span>
      </div>
    </a>
  `;
}

function recoCardHTML(item) {
  const meta = resourceTypeMeta(item.resource.type);
  return `
    <a class="reco-card" href="${escapeAttr(item.resource.path)}" target="_blank" rel="noopener">
      <div class="reco-card__icon">${meta.icon}</div>
      <div class="reco-card__body">
        <div class="reco-card__title">${escapeHtml(item.resource.title)}</div>
        <div class="reco-card__meta">${escapeHtml(item.subject.name)}${item.topic ? " · " + escapeHtml(item.topic.numLabel) : ""}</div>
        <div class="reco-card__reason">${escapeHtml(item.reason)}</div>
      </div>
      <span class="badge subject" style="--accent-color:${item.subject.color}; --accent-color-soft:${item.subject.color}22;">${meta.label}</span>
    </a>
  `;
}

function resourceRowHTML(subject, topic, resource) {
  const meta = resourceTypeMeta(resource.type);
  const progress = Store.getProgress(resource.id);
  const status = progress.status;
  let actionsHTML = "";
  let bodyExtra = "";

  if (resource.type === "audio") {
    actionsHTML = `<button class="status-btn ${status}" data-action="cycle-status" data-rid="${resource.id}">${statusIcon(status)} ${statusLabelFor("audio", status)}</button>`;
    bodyExtra = `<div class="audio-inline"><audio controls preload="none" src="${escapeAttr(resource.path)}" data-action="audio-el" data-rid="${resource.id}"></audio></div>`;
  } else if (resource.type === "flashcards") {
    const pct = progress.percent ?? 0;
    actionsHTML = `
      <div class="percent-slider">
        <input type="range" min="0" max="100" step="5" value="${pct}" data-action="set-percent" data-rid="${resource.id}">
        <span class="percent-slider__val">${pct}%</span>
        <button type="button" class="percent-slider__done" data-action="set-percent-done" data-rid="${resource.id}" title="Marcar como dominado (100%)">${pct >= 100 ? "✓" : "○"}</button>
      </div>`;
  } else if (resource.type === "simulador") {
    const attempts = progress.attempts || 0;
    actionsHTML = `
      <a class="btn small secondary" href="${escapeAttr(resource.path)}" target="_blank" rel="noopener">Abrir</a>
      <button class="btn small" data-action="attempt" data-rid="${resource.id}">+1 intento (${attempts})</button>`;
  } else {
    actionsHTML = `<button class="status-btn ${status}" data-action="cycle-status" data-rid="${resource.id}">${statusIcon(status)} ${statusLabelFor(resource.type, status)}</button>`;
  }

  const titleLink = `<a href="${escapeAttr(resource.path)}" target="_blank" rel="noopener">${escapeHtml(resource.title)}</a>`;

  const metaBits = [meta.label];
  if (resource.durationSeconds !== undefined && resource.durationSeconds !== null) metaBits.push(formatDuration(resource.durationSeconds));
  if (resource.questionCount) metaBits.push(`${resource.questionCount} preguntas`);
  if (resource.variant === "chatgpt") metaBits.push("versión IA");
  if (resource.topics && resource.topics.length > 1) metaBits.push("cubre varios temas");

  const isOverridden = !!Store.getOverride(resource.id);
  if (isOverridden) {
    actionsHTML += `<button class="btn small secondary" data-action="clear-topic" data-rid="${resource.id}" title="Quitar de este tema (vuelve a 'sin clasificar')">↩ quitar del tema</button>`;
  }

  return `
    <div class="resource-row" data-resource-row="${resource.id}">
      <div class="resource-row__icon">${meta.icon}</div>
      <div class="resource-row__body">
        <div class="resource-row__title">${titleLink}</div>
        <div class="resource-row__meta">
          ${metaBits.map((b) => `<span>${escapeHtml(b)}</span>`).join("")}
          ${resource.guionPath ? `<a href="${escapeAttr(resource.guionPath)}" target="_blank" rel="noopener">ver guion</a>` : ""}
        </div>
        ${bodyExtra}
      </div>
      <div class="resource-row__actions">${actionsHTML}</div>
    </div>
  `;
}

function unclassifiedRowHTML(subject, resource) {
  const meta = resourceTypeMeta(resource.type);
  const options = subject.topics
    .map((t) => `<option value="${t.key}">${escapeHtml(t.numLabel)} — ${escapeHtml(t.title)}</option>`)
    .join("");
  return `
    <div class="resource-row" data-resource-row="${resource.id}">
      <div class="resource-row__icon">${meta.icon}</div>
      <div class="resource-row__body">
        <div class="resource-row__title"><a href="${escapeAttr(resource.path)}" target="_blank" rel="noopener">${escapeHtml(resource.title)}</a></div>
        <div class="resource-row__meta"><span>${meta.label}</span><span>${escapeHtml(resource.originalName)}</span></div>
      </div>
      <div class="resource-row__actions">
        <select class="topic-override" data-action="assign-topic" data-rid="${resource.id}">
          <option value="">Asignar a tema…</option>
          ${options}
        </select>
      </div>
    </div>
  `;
}

function generalPillHTML(subject, resource) {
  const meta = resourceTypeMeta(resource.type);
  const progress = Store.getProgress(resource.id);
  const dotColor = progress.status === "completado" ? "var(--success)" : progress.status === "en_progreso" ? "var(--warning)" : "var(--text-faint)";
  if (resource.type === "simulador") {
    return `<a class="general-pill" href="${escapeAttr(resource.path)}" target="_blank" rel="noopener" title="Simulador completo de la asignatura: todos los temas mezclados, examen final, repaso de fallos, etc.">${meta.icon} ${escapeHtml(resource.title)} <span class="muted">(todos los temas) · ${resource.questionCount || 0} preguntas · ${progress.attempts || 0} intentos</span></a>`;
  }
  return `<a class="general-pill" href="${escapeAttr(resource.path)}" target="_blank" rel="noopener"><span class="status-dot" style="background:${dotColor}"></span>${meta.icon} ${escapeHtml(resource.title)}</a>`;
}

function resourcePassesSubjectFilter(resource) {
  if (subjectFilterState.types.size && !subjectFilterState.types.has(resource.type)) return false;
  if (subjectFilterState.onlyPending && Store.resourceFraction(resource) >= 0.999) return false;
  return true;
}

function topicCardHTML(subject, topic, isOpen) {
  const frac = Data.topicFraction(topic, subject);
  const status = Data.topicStatus(topic, subject);
  const icon = statusIcon(status === "completado" ? "completado" : status === "en_progreso" ? "en_progreso" : "pendiente");
  const allResources = topic.resources.map((rid) => subject.resources[rid]);
  const shown = allResources
    .filter(resourcePassesSubjectFilter)
    .sort((a, b) => (TYPE_PRIORITY[a.type] ?? 3) - (TYPE_PRIORITY[b.type] ?? 3));

  return `
    <div class="topic-card ${isOpen ? "open" : ""}" data-topic-key="${topic.key}">
      <div class="topic-card__head" data-action="toggle-topic" data-topic-key="${topic.key}">
        <div class="topic-card__status">${icon}</div>
        <div class="topic-card__titles">
          <div class="topic-card__num">${escapeHtml(topic.numLabel)}${topic.parcial ? " · " + escapeHtml(topic.parcial) : ""}</div>
          <div class="topic-card__title">${escapeHtml(topic.title)}</div>
          ${topic.subtitles.length > 1 ? `<div class="topic-card__sub">${escapeHtml(topic.subtitles.slice(1).join(" · "))}</div>` : ""}
        </div>
        <div class="topic-card__bar"><div class="progress-bar"><div class="progress-bar__fill" style="width:${Math.round(frac * 100)}%"></div></div></div>
        <div class="topic-card__count">${shown.length}/${allResources.length} recursos</div>
        <div class="topic-card__chevron">▸</div>
      </div>
      <div class="topic-card__body">
        ${shown.length ? shown.map((r) => resourceRowHTML(subject, topic, r)).join("") : '<div class="empty-state">Sin recursos que coincidan con el filtro.</div>'}
      </div>
    </div>
  `;
}

function activityItemHTML(item) {
  const t = new Date(item.ts);
  const timeStr = t.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  const subject = Data.getSubject(item.subjectId);
  const colorStyle = subject ? `style="--accent-color:${subject.color}; --accent-color-soft:${subject.color}22;"` : "";
  return `
    <div class="activity-item">
      <time>${timeStr}</time>
      <span class="badge subject" ${colorStyle}>${escapeHtml(item.subjectName)}</span>
      <span>${activityActionText(item)}</span>
    </div>
  `;
}

function activityActionText(item) {
  const title = escapeHtml(item.resourceTitle || "");
  const topic = item.topicLabel ? ` (${escapeHtml(item.topicLabel)})` : "";
  if (item.action === "completado") return `Completado: ${title}${topic}`;
  if (item.action === "en_progreso") return `En progreso: ${title}${topic}`;
  if (item.action === "pendiente") return `Vuelto a pendiente: ${title}${topic}`;
  if (item.action && item.action.startsWith("flashcards:")) return `Flashcards ${item.action.split(":")[1]}: ${title}${topic}`;
  if (item.action && item.action.startsWith("intento_")) return `Intento de simulador: ${title}`;
  return `${title}${topic}`;
}

function activityFeedHTML(limit) {
  const items = Store.getActivity(limit || 60);
  if (!items.length) {
    return '<div class="empty-state">Todavía no hay actividad registrada. Marca algo como visto, escuchado o completado y aparecerá aquí.</div>';
  }
  const groups = [];
  let curLabel = null;
  let curArr = null;
  for (const item of items) {
    const label = dayLabel(item.ts);
    if (label !== curLabel) {
      curLabel = label;
      curArr = [];
      groups.push([label, curArr]);
    }
    curArr.push(item);
  }
  return groups
    .map(([label, arr]) => `
      <div class="activity-day">
        <div class="activity-day__label">${escapeHtml(label)}</div>
        ${arr.map(activityItemHTML).join("")}
      </div>
    `)
    .join("");
}

// ---------------------------------------------------------------------
// Vistas
// ---------------------------------------------------------------------

function sumStats(subjects, fn) {
  return subjects.reduce((acc, s) => { const r = fn(s); acc.done += r.done; acc.total += r.total; return acc; }, { done: 0, total: 0 });
}

function renderDashboard() {
  const subjects = Data.getSubjects();
  const globalPct = subjects.length ? Math.round((subjects.reduce((a, s) => a + Data.subjectFraction(s), 0) / subjects.length) * 100) : 0;
  const topicTotals = sumStats(subjects, Data.subjectTopicStats);
  const resTotals = sumStats(subjects, Data.subjectResourceStats);
  const audioTotals = sumStats(subjects, Data.subjectAudioStats);
  const attemptsTotal = subjects.reduce((acc, s) => acc + Data.subjectSimuladorAttempts(s), 0);
  const recoItems = recommend(5);

  return `
    <div class="page container">
      <div class="page-head">
        <h1>Tu centro de control académico</h1>
        <p>¿Dónde estás en cada asignatura y qué deberías estudiar ahora?</p>
      </div>

      <div class="hero">
        <div>
          <div class="hero__title">Progreso global · ${subjects.length} asignaturas</div>
          <div class="hero__pct">${globalPct}%</div>
          <div class="hero__bar"><div class="hero__bar-fill" style="width:${globalPct}%"></div></div>
        </div>
        <div class="hero__stats">
          <div class="hero__stat"><b>${topicTotals.done}/${topicTotals.total}</b><span>Temas completados</span></div>
          <div class="hero__stat"><b>${resTotals.done}/${resTotals.total}</b><span>Recursos vistos</span></div>
          <div class="hero__stat"><b>${audioTotals.done}/${audioTotals.total}</b><span>Audios escuchados</span></div>
          <div class="hero__stat"><b>${attemptsTotal}</b><span>Intentos de simulador</span></div>
        </div>
      </div>

      <div class="section">
        <div class="section__head"><h2>Tus asignaturas</h2></div>
        <div class="subject-grid">${subjects.map(subjectCardHTML).join("")}</div>
      </div>

      <div class="section">
        <div class="section__head"><h2>Continuar estudiando</h2><a href="#/ahora" class="muted">Ver todo →</a></div>
        ${recoItems.length ? `<div class="reco-list">${recoItems.map(recoCardHTML).join("")}</div>` : '<div class="empty-state">¡Todo al día! No hay nada pendiente ahora mismo.</div>'}
      </div>

      <div class="section">
        <div class="section__head"><h2>Actividad reciente</h2></div>
        ${activityFeedHTML(40)}
      </div>
    </div>
  `;
}

function topicMatchesFilter(subject, topic) {
  if (subjectFilterState.types.size === 0 && !subjectFilterState.onlyPending) return true;
  return topic.resources.some((rid) => resourcePassesSubjectFilter(subject.resources[rid]));
}

function renderSubjectPage(id) {
  const subject = Data.getSubject(id);
  if (!subject) {
    return `<div class="page container"><div class="empty-state">Asignatura no encontrada. <a href="#/">Volver al inicio</a></div></div>`;
  }
  if (lastSubjectId !== id) {
    openTopics = new Set();
    subjectFilterState = { types: new Set(), onlyPending: false };
    lastSubjectId = id;
  }

  const pct = Math.round(Data.subjectFraction(subject) * 100);
  const presentTypes = new Set();
  for (const t of subject.topics) for (const rid of t.resources) presentTypes.add(subject.resources[rid].type);

  const generalHTML = subject.generalResources.map((rid) => generalPillHTML(subject, subject.resources[rid])).join("");

  const topicsHTML = subject.topics
    .map((t) => (topicMatchesFilter(subject, t) ? topicCardHTML(subject, t, openTopics.has(t.key)) : ""))
    .join("");

  const unclassifiedHTML = subject.unclassified.length
    ? `
      <div class="section">
        <div class="unclassified-note">
          ⚠️ ${subject.unclassified.length} recurso(s) no se pudieron asociar automáticamente a un tema concreto (exámenes que mezclan varios temas, documentos escaneados sin texto, formato .doc antiguo, etc.). Siguen disponibles: puedes asignarlos a mano.
        </div>
        <div class="result-list" style="margin-top:14px;">
          ${subject.unclassified.map((rid) => unclassifiedRowHTML(subject, subject.resources[rid])).join("")}
        </div>
      </div>`
    : "";

  return `
    <div class="page container">
      <a href="#/" class="muted" style="font-size:13px;">← Todas las asignaturas</a>
      <div class="subject-hero" style="--accent-color:${subject.color}; margin-top:14px;">
        <div class="subject-hero__title"><span class="subject-hero__emoji">${subject.emoji}</span>${escapeHtml(subject.name)}</div>
        <div>
          <div class="subject-hero__pct">${pct}%</div>
          <div class="subject-hero__bar"><div class="subject-hero__bar-fill" style="width:${pct}%"></div></div>
        </div>
      </div>

      ${generalHTML ? `<div class="general-row">${generalHTML}</div>` : ""}

      <div class="filter-bar">
        ${[...presentTypes]
          .sort()
          .map((t) => `<span class="filter-toggle ${subjectFilterState.types.has(t) ? "active" : ""}" data-action="toggle-type-filter" data-type="${t}">${resourceTypeMeta(t).icon} ${resourceTypeMeta(t).label}</span>`)
          .join("")}
        <span class="filter-toggle ${subjectFilterState.onlyPending ? "active" : ""}" data-action="toggle-only-pending">⚪ Solo pendiente</span>
        <span class="filter-toggle" data-action="expand-all">Expandir todo</span>
        <span class="filter-toggle" data-action="collapse-all">Colapsar todo</span>
      </div>

      <div class="topic-list">${topicsHTML || '<div class="empty-state">Ningún tema coincide con el filtro.</div>'}</div>
      ${unclassifiedHTML}
    </div>
  `;
}

function renderExplorar(params) {
  const q = params.get("q") || "";

  const results = Data.searchResources(q, {
    types: exploreFilters.types.size ? [...exploreFilters.types] : null,
    status: exploreFilters.status.size ? [...exploreFilters.status] : null,
    onlyPending: exploreFilters.onlyPending,
    subjectIds: exploreFilters.subjectIds.size ? [...exploreFilters.subjectIds] : null,
  });

  const bySubject = new Map();
  for (const r of results) {
    if (!bySubject.has(r.subject.id)) bySubject.set(r.subject.id, { subject: r.subject, items: [] });
    bySubject.get(r.subject.id).items.push(r);
  }

  const groupsHTML = [...bySubject.values()]
    .map(
      ({ subject, items }) => `
      <div class="result-group">
        <div class="result-group__head"><span class="dot" style="background:${subject.color}"></span>${escapeHtml(subject.name)} <span class="muted">(${items.length})</span></div>
        <div class="result-list">
          ${items.map(({ resource, topic }) => resourceRowHTML(subject, topic, resource)).join("")}
        </div>
      </div>`
    )
    .join("");

  const subjects = Data.getSubjects();
  const typeOptions = Object.keys(RESOURCE_TYPES);

  return `
    <div class="page container">
      <div class="page-head">
        <h1>Explorar y buscar</h1>
        <p>Busca en las 6 asignaturas a la vez y combina filtros por asignatura, tipo de recurso y estado.</p>
      </div>

      <div class="filter-bar">
        ${subjects.map((s) => `<span class="filter-toggle ${exploreFilters.subjectIds.has(s.id) ? "active" : ""}" data-action="explore-toggle-subject" data-id="${s.id}">${s.emoji} ${escapeHtml(s.name)}</span>`).join("")}
      </div>
      <div class="filter-bar">
        ${typeOptions.map((t) => `<span class="filter-toggle ${exploreFilters.types.has(t) ? "active" : ""}" data-action="explore-toggle-type" data-type="${t}">${resourceTypeMeta(t).icon} ${resourceTypeMeta(t).label}</span>`).join("")}
      </div>
      <div class="filter-bar">
        <span class="filter-toggle ${exploreFilters.status.has("pendiente") ? "active" : ""}" data-action="explore-toggle-status" data-status="pendiente">⚪ Pendiente</span>
        <span class="filter-toggle ${exploreFilters.status.has("en_progreso") ? "active" : ""}" data-action="explore-toggle-status" data-status="en_progreso">🟡 En progreso</span>
        <span class="filter-toggle ${exploreFilters.status.has("completado") ? "active" : ""}" data-action="explore-toggle-status" data-status="completado">✅ Completado</span>
        <span class="filter-toggle ${exploreFilters.onlyPending ? "active" : ""}" data-action="explore-toggle-only-pending">Mostrar solo lo pendiente</span>
        ${hasActiveExploreFilters() ? '<span class="filter-toggle" data-action="explore-clear">✕ Limpiar filtros</span>' : ""}
      </div>

      <p class="muted">${results.length} resultado(s)${q ? ` para "${escapeHtml(q)}"` : ""}</p>
      ${groupsHTML || '<div class="empty-state">No se encontraron recursos con esos filtros.</div>'}
    </div>
  `;
}

function hasActiveExploreFilters() {
  return exploreFilters.types.size || exploreFilters.status.size || exploreFilters.onlyPending || exploreFilters.subjectIds.size;
}

function renderAhora() {
  const items = recommend(14);
  return `
    <div class="page container">
      <div class="page-head">
        <h1>¿Qué estudio ahora?</h1>
        <p>Sugerencias por reglas simples y transparentes (sin IA): primero los temas no iniciados y las asignaturas con menos avance; dentro de cada tema, material base y audio antes que flashcards, y evaluación (test/examen/simulador) solo cuando el tema ya tiene bastante progreso.</p>
      </div>
      ${items.length ? `<div class="reco-list">${items.map(recoCardHTML).join("")}</div>` : '<div class="empty-state">¡Enhorabuena! No hay nada pendiente que sugerir ahora mismo.</div>'}
    </div>
  `;
}

function renderEstadisticas() {
  const subjects = Data.getSubjects();
  const globalPct = subjects.length ? Math.round((subjects.reduce((a, s) => a + Data.subjectFraction(s), 0) / subjects.length) * 100) : 0;
  const resTotals = sumStats(subjects, Data.subjectResourceStats);
  const audioTotals = sumStats(subjects, Data.subjectAudioStats);
  const fcTotals = sumStats(subjects, Data.subjectFlashcardStats);
  const attemptsTotal = subjects.reduce((acc, s) => acc + Data.subjectSimuladorAttempts(s), 0);

  return `
    <div class="page container">
      <div class="page-head"><h1>Estadísticas</h1><p>Lo esencial para saber cómo vas, sin gráficos de relleno.</p></div>

      <div class="stat-grid">
        <div class="stat-tile"><div class="stat-tile__label">Progreso global</div><div class="stat-tile__value">${globalPct}%</div></div>
        <div class="stat-tile"><div class="stat-tile__label">Recursos completados</div><div class="stat-tile__value">${resTotals.done}/${resTotals.total}</div></div>
        <div class="stat-tile"><div class="stat-tile__label">Recursos pendientes</div><div class="stat-tile__value">${resTotals.total - resTotals.done}</div></div>
        <div class="stat-tile"><div class="stat-tile__label">Audios escuchados</div><div class="stat-tile__value">${audioTotals.done}/${audioTotals.total}</div></div>
        <div class="stat-tile"><div class="stat-tile__label">Flashcards repasadas</div><div class="stat-tile__value">${fcTotals.done}/${fcTotals.total}</div></div>
        <div class="stat-tile"><div class="stat-tile__label">Intentos de simulador</div><div class="stat-tile__value">${attemptsTotal}</div></div>
      </div>

      <div class="section__head"><h2>Progreso por asignatura</h2></div>
      <div class="bar-rows">
        ${subjects
          .map((s) => {
            const pct = Math.round(Data.subjectFraction(s) * 100);
            return `<div class="bar-row">
              <div class="bar-row__label">${s.emoji} ${escapeHtml(s.name)}</div>
              <div class="bar-row__track"><div class="bar-row__fill" style="width:${pct}%; background:${s.color}"></div></div>
              <div class="bar-row__pct">${pct}%</div>
            </div>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------

function currentRoute() {
  const hash = location.hash.slice(1) || "/";
  const [path, queryStr] = hash.split("?");
  return { path, params: new URLSearchParams(queryStr || "") };
}

function updateActiveNav(path) {
  document.querySelectorAll(".main-nav a").forEach((a) => {
    const target = a.getAttribute("data-route");
    a.classList.toggle("active", target === path || (target === "/" && path === ""));
  });
}

let lastRenderedPath = null;

// Cada interaccion (marcar algo, mover un filtro...) vuelve a pintar toda
// la pagina de golpe (mas simple y robusto que actualizar trocitos del
// DOM). El efecto secundario es que un <audio> que estuviera sonando se
// destruye y se crea de nuevo desde cero -> se oiria un corte y volveria
// a 0:00. Aqui se guarda que sonaba y por donde iba, y se retoma justo
// despues de repintar, para que marcar otra cosa en la misma pagina no
// interrumpa lo que se esta escuchando.
function captureAudioState() {
  const audios = document.querySelectorAll('audio[data-action="audio-el"]');
  for (const a of audios) {
    if (!a.paused || a.currentTime > 0) {
      return { rid: a.dataset.rid, time: a.currentTime, playing: !a.paused };
    }
  }
  return null;
}

function restoreAudioState(state) {
  if (!state) return;
  const audios = document.querySelectorAll('audio[data-action="audio-el"]');
  for (const el of audios) {
    if (el.dataset.rid === state.rid) {
      el.currentTime = state.time;
      if (state.playing) el.play().catch(() => {});
      break;
    }
  }
}

function render() {
  const { path, params } = currentRoute();
  updateActiveNav(path);
  const app = document.getElementById("app");
  const audioState = captureAudioState();
  if (path === "/" || path === "") {
    app.innerHTML = renderDashboard();
  } else if (path.startsWith("/asignatura/")) {
    app.innerHTML = renderSubjectPage(decodeURIComponent(path.split("/")[2] || ""));
  } else if (path === "/explorar") {
    app.innerHTML = renderExplorar(params);
  } else if (path === "/ahora") {
    app.innerHTML = renderAhora();
  } else if (path === "/estadisticas") {
    app.innerHTML = renderEstadisticas();
  } else {
    app.innerHTML = renderDashboard();
  }
  afterRender();
  restoreAudioState(audioState);
  // Solo se sube al principio de la pagina cuando se navega a una ruta
  // distinta (cambiar de asignatura, ir a Estadisticas...). Si solo se
  // marco algo como visto o se cambio un filtro dentro de la MISMA
  // pagina, quedarse donde estaba el estudiante scrolleando.
  if (path !== lastRenderedPath) {
    window.scrollTo({ top: 0 });
  }
  lastRenderedPath = path;
}

function afterRender() {
  document.querySelectorAll('audio[data-action="audio-el"]').forEach((audioEl) => {
    audioEl.addEventListener(
      "ended",
      () => {
        const rid = audioEl.dataset.rid;
        const ctx = findResourceContext(rid);
        if (ctx && Store.getProgress(rid).status !== "completado") {
          Store.setStatus(ctx.resource, ctx.subject, ctx.topic, "completado");
          showToast("Audio marcado como escuchado");
          render();
        }
      },
      { once: true }
    );
  });
  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    const { path, params } = currentRoute();
    searchInput.value = path === "/explorar" ? params.get("q") || "" : "";
  }
}

// ---------------------------------------------------------------------
// Delegacion de eventos
// ---------------------------------------------------------------------

function onAppClick(e) {
  const toggle = e.target.closest('[data-action="toggle-topic"]');
  if (toggle) {
    const key = toggle.dataset.topicKey;
    if (openTopics.has(key)) openTopics.delete(key);
    else openTopics.add(key);
    render();
    return;
  }

  const statusBtn = e.target.closest('[data-action="cycle-status"]');
  if (statusBtn) {
    const ctx = findResourceContext(statusBtn.dataset.rid);
    if (ctx) {
      const next = Store.cycleStatus(ctx.resource, ctx.subject, ctx.topic);
      showToast(`Marcado como: ${statusLabelFor(ctx.resource.type, next)}`);
      render();
    }
    return;
  }

  const attemptBtn = e.target.closest('[data-action="attempt"]');
  if (attemptBtn) {
    const ctx = findResourceContext(attemptBtn.dataset.rid);
    if (ctx) {
      Store.incrementAttempts(ctx.resource, ctx.subject);
      showToast("Intento de simulador registrado");
      render();
    }
    return;
  }

  const doneBtn = e.target.closest('[data-action="set-percent-done"]');
  if (doneBtn) {
    const ctx = findResourceContext(doneBtn.dataset.rid);
    if (ctx) {
      const current = Store.getProgress(ctx.resource.id).percent ?? 0;
      Store.setPercent(ctx.resource, ctx.subject, ctx.topic, current >= 100 ? 0 : 100);
      render();
    }
    return;
  }

  const clearTopicBtn = e.target.closest('[data-action="clear-topic"]');
  if (clearTopicBtn) {
    Store.clearOverride(clearTopicBtn.dataset.rid);
    showToast("Recurso devuelto a 'sin clasificar'");
    render();
    return;
  }

  if (e.target.closest('[data-action="expand-all"]')) {
    const subject = Data.getSubject(lastSubjectId);
    if (subject) subject.topics.forEach((t) => openTopics.add(t.key));
    render();
    return;
  }
  if (e.target.closest('[data-action="collapse-all"]')) {
    openTopics = new Set();
    render();
    return;
  }

  const typeFilter = e.target.closest('[data-action="toggle-type-filter"]');
  if (typeFilter) {
    const t = typeFilter.dataset.type;
    if (subjectFilterState.types.has(t)) subjectFilterState.types.delete(t);
    else subjectFilterState.types.add(t);
    render();
    return;
  }
  if (e.target.closest('[data-action="toggle-only-pending"]')) {
    subjectFilterState.onlyPending = !subjectFilterState.onlyPending;
    render();
    return;
  }

  const exSubj = e.target.closest('[data-action="explore-toggle-subject"]');
  if (exSubj) {
    const id = exSubj.dataset.id;
    if (exploreFilters.subjectIds.has(id)) exploreFilters.subjectIds.delete(id);
    else exploreFilters.subjectIds.add(id);
    render();
    return;
  }
  const exType = e.target.closest('[data-action="explore-toggle-type"]');
  if (exType) {
    const t = exType.dataset.type;
    if (exploreFilters.types.has(t)) exploreFilters.types.delete(t);
    else exploreFilters.types.add(t);
    render();
    return;
  }
  const exStatus = e.target.closest('[data-action="explore-toggle-status"]');
  if (exStatus) {
    const s = exStatus.dataset.status;
    if (exploreFilters.status.has(s)) exploreFilters.status.delete(s);
    else exploreFilters.status.add(s);
    render();
    return;
  }
  if (e.target.closest('[data-action="explore-toggle-only-pending"]')) {
    exploreFilters.onlyPending = !exploreFilters.onlyPending;
    render();
    return;
  }
  if (e.target.closest('[data-action="explore-clear"]')) {
    exploreFilters = { types: new Set(), status: new Set(), onlyPending: false, subjectIds: new Set() };
    render();
    return;
  }
}

function onAppInput(e) {
  if (e.target.matches('[data-action="set-percent"]')) {
    const out = e.target.parentElement.querySelector(".percent-slider__val");
    if (out) out.textContent = `${e.target.value}%`;
  }
}

function onAppChange(e) {
  if (e.target.matches('[data-action="set-percent"]')) {
    const ctx = findResourceContext(e.target.dataset.rid);
    if (ctx) {
      Store.setPercent(ctx.resource, ctx.subject, ctx.topic, Number(e.target.value));
      render();
    }
    return;
  }
  if (e.target.matches('[data-action="assign-topic"]')) {
    const rid = e.target.dataset.rid;
    const value = e.target.value;
    const subjectId = rid.split("::")[0];
    if (value) {
      Store.setOverride(subjectId, rid, value);
      showToast("Recurso asignado al tema");
    }
    render();
    return;
  }
}

// ---------------------------------------------------------------------
// Cabecera: busqueda, tema, copia de seguridad
// ---------------------------------------------------------------------

function initTheme() {
  const saved = localStorage.getItem("centralEstudio.theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
}

// Muestra cuándo se generó el indice que esta pestaña tiene cargado EN
// MEMORIA. Si regeneras el indice (actualizar_indice.py) y esta fecha no
// cambia tras recargar la pagina, la pestaña no se ha recargado de verdad
// (F5 no siempre repite el codigo si el navegador cree que no hace falta;
// prueba Ctrl+Shift+R o cierra y reabre la pestaña).
function showIndexTimestamp() {
  const el = document.getElementById("index-updated-badge");
  if (!el || !Data.index || !Data.index.generatedAt) return;
  const d = new Date(Data.index.generatedAt);
  const formatted = d.toLocaleString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  el.textContent = `índice: ${formatted}`;
}

function toggleTheme() {
  const current =
    document.documentElement.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("centralEstudio.theme", next);
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime || "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function bindGlobalEvents() {
  document.getElementById("app").addEventListener("click", onAppClick);
  document.getElementById("app").addEventListener("input", onAppInput);
  document.getElementById("app").addEventListener("change", onAppChange);

  const warningEl = document.getElementById("storage-warning");
  if (warningEl) warningEl.classList.toggle("hidden", Store.isAvailable());
  showIndexTimestamp();

  Store.onExternalChange(() => {
    render();
    showToast("Progreso actualizado desde otra pestaña");
  });

  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        location.hash = `#/explorar?q=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }

  const themeBtn = document.getElementById("btn-theme");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const exportBtn = document.getElementById("btn-export");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const stamp = new Date().toISOString().slice(0, 10);
      downloadFile(`progreso-central-estudio-${stamp}.json`, Store.exportState());
      showToast("Copia de seguridad descargada");
    });
  }

  const importBtn = document.getElementById("btn-import");
  const importInput = document.getElementById("import-file-input");
  if (importBtn && importInput) {
    importBtn.addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", () => {
      const file = importInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          Store.importState(reader.result);
          showToast("Progreso importado correctamente");
          render();
        } catch (err) {
          showToast("No se pudo leer ese archivo de progreso");
        }
      };
      reader.readAsText(file);
      importInput.value = "";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  bindGlobalEvents();
  render();
});
window.addEventListener("hashchange", render);
