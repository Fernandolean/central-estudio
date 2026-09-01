/* Simulador P1 Farmacología — lógica de la app (sin dependencias externas) */
(function () {
  "use strict";

  const STORAGE_STATS = "farmaSimP1_stats_v1";
  const STORAGE_HISTORY = "farmaSimP1_history_v1";
  const STORAGE_GAME = "farmaSimP1_game_v1";
  const STORAGE_SRS = "farmaSimP1_srs_v1";
  const LETTERS = ["a", "b", "c", "d", "e"];

  const ALL_QUESTIONS = (typeof QUESTIONS !== "undefined" && Array.isArray(QUESTIONS)) ? QUESTIONS : [];

  // ---------- estado ----------
  let stats = loadStats();
  let game = loadGame(); // { xp, streakDays, lastActiveDate, badges:{id:isoDate}, failsConquered, hasPerfectExam, hasMarathon, bossDefeated, srsReviews }
  let srs = loadSrs(); // { [questionId]: {interval, repetitions, easeFactor, dueDate, lastReviewed} }
  let session = null; // { questions, index, answers:{id:{selected,correct}}, config:{instant, examlike, mode}, startTime, timerId, xpEarned, combo, newBadges, isBoss }
  let fcSession = null; // { queue, index, reviewedCount, xpEarned }
  let pendingSetupMode = "exam"; // 'exam' | 'train' | 'srs'

  // ---------- utilidades ----------
  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_STATS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function saveStats() {
    try { localStorage.setItem(STORAGE_STATS, JSON.stringify(stats)); } catch (e) {}
  }
  function loadHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function pushHistory(entry) {
    const h = loadHistory();
    h.unshift(entry);
    try { localStorage.setItem(STORAGE_HISTORY, JSON.stringify(h.slice(0, 50))); } catch (e) {}
  }
  function loadGame() {
    try {
      const raw = localStorage.getItem(STORAGE_GAME);
      return raw ? JSON.parse(raw) : { xp: 0, streakDays: 0, lastActiveDate: null, badges: {}, failsConquered: 0 };
    } catch (e) { return { xp: 0, streakDays: 0, lastActiveDate: null, badges: {}, failsConquered: 0 }; }
  }
  function saveGame() {
    try { localStorage.setItem(STORAGE_GAME, JSON.stringify(game)); } catch (e) {}
  }
  function loadSrs() {
    try {
      const raw = localStorage.getItem(STORAGE_SRS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function saveSrs() {
    try { localStorage.setItem(STORAGE_SRS, JSON.stringify(srs)); } catch (e) {}
  }
  // Fechas en horario LOCAL, sin pasar nunca por toISOString (que convierte a UTC
  // y en husos horarios como el de España desplaza el día cerca de la medianoche).
  function localDateStr(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  function todayStr() {
    return localDateStr(new Date());
  }
  function addDaysStr(dateStr, days) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() + days);
    return localDateStr(dt);
  }

  // ---------- SM-2 (repetición espaciada, estilo Anki) ----------
  // quality: 0=Otra vez, 3=Difícil, 4=Bien, 5=Fácil
  function newSrsCard() {
    return { interval: 0, repetitions: 0, easeFactor: 2.5, dueDate: todayStr(), lastReviewed: null };
  }
  function sm2Core(card, quality) {
    const c = Object.assign({}, card || newSrsCard());
    if (quality < 3) {
      c.repetitions = 0;
      c.interval = 1;
    } else {
      if (!c.repetitions) c.interval = 1;
      else if (c.repetitions === 1) c.interval = 6;
      else c.interval = Math.max(1, Math.round((c.interval || 1) * (c.easeFactor || 2.5)));
      c.repetitions = (c.repetitions || 0) + 1;
    }
    c.easeFactor = Math.max(1.3, (c.easeFactor || 2.5) + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    c.dueDate = addDaysStr(todayStr(), c.interval);
    c.lastReviewed = todayStr();
    return c;
  }
  function previewIntervals(card) {
    return {
      again: sm2Core(card, 0).interval,
      hard: sm2Core(card, 3).interval,
      good: sm2Core(card, 4).interval,
      easy: sm2Core(card, 5).interval,
    };
  }
  function fmtInterval(days) {
    return days >= 30 ? Math.round(days / 30) + "m" : days + "d";
  }
  function srsCounts(topics) {
    const today = todayStr();
    const pool = topics && topics.length ? ALL_QUESTIONS.filter((q) => topics.includes(q.tema)) : ALL_QUESTIONS;
    let due = 0, fresh = 0;
    pool.forEach((q) => {
      const c = srs[q.id];
      if (!c) fresh++;
      else if (c.dueDate <= today) due++;
    });
    return { due, fresh };
  }
  function countMatureCards() {
    return Object.values(srs).filter((c) => c.interval >= 21).length;
  }
  function buildFlashcardSession(topics, newLimit, onlyRepeated) {
    let pool = topics && topics.length ? ALL_QUESTIONS.filter((q) => topics.includes(q.tema)) : ALL_QUESTIONS.slice();
    if (onlyRepeated) pool = pool.filter((q) => q.repetida);
    const today = todayStr();
    const due = [], fresh = [];
    pool.forEach((q) => {
      const c = srs[q.id];
      if (!c) fresh.push(q);
      else if (c.dueDate <= today) due.push(q);
    });
    return shuffle(due).concat(shuffle(fresh).slice(0, newLimit));
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fmtTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return m + ":" + s;
  }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ---------- temas ----------
  function getTopics() {
    const map = new Map();
    ALL_QUESTIONS.forEach((q) => {
      if (!map.has(q.tema)) map.set(q.tema, []);
      map.get(q.tema).push(q);
    });
    return map; // tema -> array de preguntas
  }
  const TOPICS = getTopics();
  const TOPIC_NAMES = Array.from(TOPICS.keys());

  function questionRecord(id) {
    return stats[id] || null;
  }
  function isFailed(q) {
    const r = questionRecord(q.id);
    return !!r && r.lastCorrect === false;
  }
  function isMastered(q) {
    const r = questionRecord(q.id);
    return !!r && r.lastCorrect === true;
  }
  function getFailedQuestions() {
    return ALL_QUESTIONS.filter(isFailed);
  }
  function topicStats(tema) {
    const qs = TOPICS.get(tema) || [];
    let answered = 0, correct = 0, failed = 0;
    qs.forEach((q) => {
      const r = questionRecord(q.id);
      if (r) {
        answered++;
        if (r.lastCorrect) correct++;
        else failed++;
      }
    });
    return { total: qs.length, answered, correct, failed, mastery: qs.length ? Math.round((correct / qs.length) * 100) : 0 };
  }
  function globalStats() {
    let answeredIds = 0, correctIds = 0, totalAttempts = 0, totalCorrectAttempts = 0;
    Object.keys(stats).forEach((id) => {
      const r = stats[id];
      answeredIds++;
      if (r.lastCorrect) correctIds++;
      totalAttempts += r.attempts || 0;
      totalCorrectAttempts += r.correct || 0;
    });
    return {
      totalQuestions: ALL_QUESTIONS.length,
      answeredIds, correctIds,
      accuracy: totalAttempts ? Math.round((totalCorrectAttempts / totalAttempts) * 100) : 0,
      pendingFails: getFailedQuestions().length,
    };
  }

  // ---------- GAMIFICACIÓN: niveles, XP, rachas, insignias ----------
  const LEVELS = [
    { min: 0,    title: "Estudiante novato",          icon: "🌱" },
    { min: 100,  title: "Aprendiz de Farmacognosia",  icon: "📗" },
    { min: 250,  title: "Técnico en Farmacocinética", icon: "⚗️" },
    { min: 500,  title: "Analista de Receptores",     icon: "🧬" },
    { min: 800,  title: "Especialista en SNA",        icon: "🧠" },
    { min: 1200, title: "Clínico en formación",       icon: "💊" },
    { min: 1700, title: "Maestro Farmacéutico",       icon: "🎓" },
    { min: 2300, title: "Doctor/a en Farmacología",   icon: "👑" },
  ];
  function getLevelInfo(xp) {
    xp = xp || 0;
    let idx = 0;
    for (let i = 0; i < LEVELS.length; i++) { if (xp >= LEVELS[i].min) idx = i; }
    const cur = LEVELS[idx];
    const next = LEVELS[idx + 1];
    const pct = next ? Math.round(((xp - cur.min) / (next.min - cur.min)) * 100) : 100;
    return { levelIndex: idx, level: idx + 1, title: cur.title, icon: cur.icon, xp, nextMin: next ? next.min : null, pct };
  }
  function addXP(amount) {
    const before = getLevelInfo(game.xp || 0).levelIndex;
    game.xp = (game.xp || 0) + amount;
    saveGame();
    const after = getLevelInfo(game.xp).levelIndex;
    if (after > before) {
      const lvl = LEVELS[after];
      showToast(`${lvl.icon} ¡Subes de nivel! Ahora eres ${lvl.title}`, "level");
    }
  }
  function countRepeatedMastered() {
    return ALL_QUESTIONS.filter((q) => q.repetida && isMastered(q)).length;
  }
  const BADGE_DEFS = [
    { id: "first_step", icon: "🌱", title: "Primeros pasos", desc: "Responde tu primera pregunta.", check: () => Object.keys(stats).length >= 1 },
    { id: "ten_q", icon: "📚", title: "Calentando motores", desc: "Practica 10 preguntas distintas.", check: () => Object.keys(stats).length >= 10 },
    { id: "fifty_q", icon: "📖", title: "En racha de estudio", desc: "Practica 50 preguntas distintas.", check: () => Object.keys(stats).length >= 50 },
    { id: "hundred_q", icon: "🐭", title: "Ratón de biblioteca", desc: "Practica 100 preguntas distintas.", check: () => Object.keys(stats).length >= 100 },
    { id: "all_q", icon: "🧠", title: "Enciclopedia andante", desc: "Practica todas las preguntas del banco al menos una vez.", check: () => Object.keys(stats).length >= ALL_QUESTIONS.length },
    { id: "fail_hunter", icon: "🎯", title: "Cazador de fallos", desc: "Convierte 10 fallos en aciertos.", check: () => (game.failsConquered || 0) >= 10 },
    { id: "fail_hunter_30", icon: "🏹", title: "Exterminador de fallos", desc: "Convierte 30 fallos en aciertos.", check: () => (game.failsConquered || 0) >= 30 },
    { id: "no_fails", icon: "🧹", title: "Sin cabos sueltos", desc: "Deja tus fallos pendientes a 0 tras practicar al menos 50 preguntas.", check: () => getFailedQuestions().length === 0 && Object.keys(stats).length >= 50 },
    { id: "perfect_exam", icon: "🏅", title: "Examen perfecto", desc: "Termina un examen de 10+ preguntas con el 100% de aciertos.", check: () => game.hasPerfectExam === true },
    { id: "marathon", icon: "🏃", title: "Maratón", desc: "Completa una sesión de 60 preguntas o más.", check: () => game.hasMarathon === true },
    { id: "repeated_expert", icon: "🔁", title: "Sabes lo que repite la profesora", desc: "Acierta 15 preguntas marcadas como muy repetidas.", check: () => countRepeatedMastered() >= 15 },
    { id: "streak_3", icon: "🔥", title: "Racha de 3 días", desc: "Estudia 3 días seguidos.", check: () => (game.streakDays || 0) >= 3 },
    { id: "streak_7", icon: "🔥🔥", title: "Racha de 7 días", desc: "Estudia 7 días seguidos.", check: () => (game.streakDays || 0) >= 7 },
    { id: "streak_30", icon: "🔥🔥🔥", title: "Racha de 30 días", desc: "Estudia 30 días seguidos.", check: () => (game.streakDays || 0) >= 30 },
    { id: "boss_defeated", icon: "👑", title: "Venciste el Examen Final", desc: "Supera el Examen Final con un 80% de acierto o más.", check: () => game.bossDefeated === true },
    { id: "srs_first", icon: "🃏", title: "Primera tarjeta", desc: "Repasa tu primera flashcard con repetición espaciada.", check: () => (game.srsReviews || 0) >= 1 },
    { id: "srs_50", icon: "🗂️", title: "Constancia de hierro", desc: "Acumula 50 repasos de flashcards.", check: () => (game.srsReviews || 0) >= 50 },
    { id: "srs_mature", icon: "🧠💾", title: "Memoria a largo plazo", desc: "Consigue que 20 tarjetas alcancen más de 21 días de intervalo.", check: () => countMatureCards() >= 20 },
    ...TOPIC_NAMES.map((t, i) => ({
      id: "topic_" + i,
      icon: "🏆",
      title: "Dominas: " + t,
      desc: "Alcanza el 90% de dominio en este tema (mínimo 5 preguntas practicadas).",
      check: () => { const s = topicStats(t); return s.total >= 5 && s.mastery >= 90; },
    })),
  ];
  function dedupeBadges(arr) {
    const seen = new Set();
    return arr.filter((b) => { if (seen.has(b.id)) return false; seen.add(b.id); return true; });
  }
  function evaluateAchievements() {
    if (!game.badges) game.badges = {};
    const newly = [];
    BADGE_DEFS.forEach((b) => {
      if (game.badges[b.id]) return;
      let ok = false;
      try { ok = !!b.check(); } catch (e) { ok = false; }
      if (ok) { game.badges[b.id] = new Date().toISOString(); newly.push(b); }
    });
    if (newly.length) {
      saveGame();
      newly.forEach((b) => showToast(`${b.icon} ¡Insignia desbloqueada! ${b.title}`, "badge"));
    }
    return newly;
  }
  function registerDailyActivity() {
    const today = todayStr();
    if (game.lastActiveDate === today) return;
    const yesterday = addDaysStr(today, -1);
    game.streakDays = (game.lastActiveDate === yesterday) ? (game.streakDays || 0) + 1 : 1;
    game.lastActiveDate = today;
    saveGame();
    evaluateAchievements();
  }
  function showToast(message, type) {
    const c = document.getElementById("toast-container");
    if (!c) return;
    const el = document.createElement("div");
    el.className = "toast toast-" + (type || "xp");
    el.textContent = message;
    c.appendChild(el);
    setTimeout(() => {
      el.classList.add("toast-fade");
      setTimeout(() => el.remove(), 300);
    }, 2600);
  }
  function showComboPopup(combo) {
    // Como ahora las preguntas se listan todas seguidas (con scroll largo), un aviso
    // fijo tipo toast es más fiable que un popup pegado a una tarjeta que ya puede
    // haber quedado fuera de la vista.
    const msg = combo >= 10 ? `🔥🔥🔥 ¡Racha x${combo}, imparable!` : combo >= 5 ? `🔥🔥 ¡Racha x${combo}!` : `🔥 ¡Racha x${combo}!`;
    showToast(msg, "combo");
  }
  function isBossUnlocked() {
    const g = globalStats();
    return g.totalQuestions > 0 && g.answeredIds / g.totalQuestions >= 0.8 && g.pendingFails === 0;
  }
  function renderGameHeader() {
    const li = getLevelInfo(game.xp || 0);
    const streakEl = document.getElementById("streak-chip");
    const levelEl = document.getElementById("level-chip");
    if (streakEl) streakEl.textContent = `🔥 ${game.streakDays || 0}`;
    if (levelEl) levelEl.textContent = `${li.icon} Nivel ${li.level}`;
    const pendingFails = getFailedQuestions().length;
    const failBadge = document.getElementById("nav-fail-count");
    if (failBadge) {
      failBadge.textContent = pendingFails;
      failBadge.classList.toggle("zero", pendingFails === 0);
    }
  }

  // ---------- navegación entre vistas ----------
  const views = ["home", "setup", "exam", "flashcards", "results", "fails", "stats", "achievements"];
  function showView(name) {
    views.forEach((v) => {
      document.getElementById("view-" + v).classList.toggle("hidden", v !== name);
    });
    document.querySelectorAll(".navlink").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.nav === name);
    });
    if (name === "home") renderHome();
    if (name === "fails") renderFailsView();
    if (name === "stats") renderStatsView();
    if (name === "achievements") renderAchievementsView();
    renderGameHeader();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }
  document.getElementById("gamer-strip").addEventListener("click", () => showView("achievements"));

  // ---------- ACHIEVEMENTS VIEW ----------
  function renderAchievementsView() {
    const li = getLevelInfo(game.xp || 0);
    document.getElementById("achv-level-card").innerHTML = `
      <span class="lc-icon">${li.icon}</span>
      <div class="lc-main">
        <div class="lc-title">Nivel ${li.level} — ${escapeHtml(li.title)}</div>
        <div class="lc-xp">${li.xp} XP${li.nextMin ? ` · ${li.nextMin - li.xp} XP para el siguiente nivel` : " · ¡Nivel máximo alcanzado!"}</div>
        <div class="gp-xp-track"><div class="gp-xp-fill" style="width:${li.pct}%"></div></div>
      </div>
      <div class="lc-streak"><span class="n">🔥 ${game.streakDays || 0}</span><span class="l">días seguidos</span></div>
    `;
    const earnedCount = Object.keys(game.badges || {}).length;
    const gridEl = document.getElementById("achv-grid");
    gridEl.innerHTML = BADGE_DEFS.map((b) => {
      const earned = !!(game.badges && game.badges[b.id]);
      return `<div class="achv-card ${earned ? "earned" : "locked"}">
        <span class="ac-icon">${earned ? b.icon : "🔒"}</span>
        <div>
          <div class="ac-title">${escapeHtml(b.title)}</div>
          <div class="ac-desc">${escapeHtml(b.desc)}</div>
        </div>
      </div>`;
    }).join("");
    void earnedCount;
  }

  // ---------- HOME ----------
  function renderHomeGamePanel() {
    const li = getLevelInfo(game.xp || 0);
    document.getElementById("home-game-panel").innerHTML = `
      <span class="gp-level-icon">${li.icon}</span>
      <div class="gp-main">
        <div class="gp-title">Nivel ${li.level} — ${escapeHtml(li.title)}</div>
        <div class="gp-xp-track"><div class="gp-xp-fill" style="width:${li.pct}%"></div></div>
        <div class="gp-xp-label">${li.xp} XP${li.nextMin ? ` · ${li.nextMin - li.xp} XP para subir de nivel` : " · ¡nivel máximo!"}</div>
      </div>
      <div class="gp-streak"><span class="n">🔥 ${game.streakDays || 0}</span><span class="l">racha de días</span></div>
    `;
  }
  function renderBossBanner() {
    const el = document.getElementById("boss-banner");
    const g = globalStats();
    const unlocked = isBossUnlocked();
    el.classList.remove("hidden");
    if (!unlocked) {
      const pctDone = Math.round((g.answeredIds / g.totalQuestions) * 100);
      el.className = "boss-banner locked";
      el.innerHTML = `
        <span class="bb-icon">🔒</span>
        <div class="bb-main">
          <div class="bb-title">Examen Final: El Reto de la Profesora</div>
          <div class="bb-desc">Se desbloquea cuando hayas practicado el 80% del banco y no tengas ningún fallo pendiente.</div>
          <div class="bb-progress">Progreso: ${pctDone}% del banco practicado · ${g.pendingFails} fallo${g.pendingFails === 1 ? "" : "s"} pendiente${g.pendingFails === 1 ? "" : "s"}</div>
        </div>
      `;
    } else {
      const already = game.bossDefeated === true;
      el.className = "boss-banner unlocked";
      el.innerHTML = `
        <span class="bb-icon">👑</span>
        <div class="bb-main">
          <div class="bb-title">${already ? "¡Ya superaste el Examen Final!" : "Examen Final: El Reto de la Profesora"}</div>
          <div class="bb-desc">${already ? "Puedes repetirlo cuando quieras para mantener tu título de Doctor/a en Farmacología." : "Todo el temario mezclado, sin pistas y contrarreloj. Tu último gran repaso antes del examen real."}</div>
        </div>
        <button type="button" class="bb-start">${already ? "Repetir el reto" : "Empezar el reto"}</button>
      `;
      el.querySelector(".bb-start").onclick = startBossExam;
    }
  }
  function startBossExam() {
    const pool = shuffle(ALL_QUESTIONS).slice(0, Math.min(80, ALL_QUESTIONS.length));
    startSession(pool, { instant: false, examlike: true, mode: "boss" });
  }
  function renderHome() {
    renderHomeGamePanel();
    renderBossBanner();
    const g = globalStats();
    const cardsEl = document.getElementById("home-summary-cards");
    cardsEl.innerHTML = [
      card(ALL_QUESTIONS.length, "Preguntas en el banco"),
      card(g.answeredIds, "Ya practicadas"),
      card(g.accuracy + "%", "Acierto global"),
      card(g.pendingFails, "Pendientes de repaso"),
    ].join("");

    document.getElementById("fails-desc").textContent =
      g.pendingFails > 0
        ? `Tienes ${g.pendingFails} pregunta${g.pendingFails === 1 ? "" : "s"} pendientes de dominar.`
        : "Aún no tienes fallos guardados. ¡Empieza un examen!";

    const sc = srsCounts();
    document.getElementById("flashcards-desc").textContent =
      sc.due > 0
        ? `${sc.due} tarjeta${sc.due === 1 ? "" : "s"} para repasar hoy · ${sc.fresh} nuevas por descubrir.`
        : `Tarjetas de recuerdo activo. ${sc.fresh} pendientes de empezar cuando quieras.`;

    const topicsEl = document.getElementById("topics-list");
    topicsEl.innerHTML = TOPIC_NAMES.map((t, i) => {
      const s = topicStats(t);
      return `<div class="topic-row">
        <span class="t-name">${escapeHtml(t)}</span>
        <span class="t-meta">
          <span>${s.total} preguntas</span>
          <span class="mini-bar"><span class="mini-bar-fill" style="width:${s.mastery}%"></span></span>
          <span>${s.mastery}%</span>
        </span>
        <span class="t-actions">
          <button type="button" class="t-action-btn" data-topic-action="srs" data-topic-idx="${i}" title="Repasar solo este tema con flashcards">🧠 Repasar</button>
          <button type="button" class="t-action-btn" data-topic-action="exam" data-topic-idx="${i}" title="Evaluarte solo de este tema, con cronómetro">📝 Evaluar</button>
        </span>
      </div>`;
    }).join("");

    document.getElementById("topics-list").onclick = (e) => {
      const btn = e.target.closest("[data-topic-action]");
      if (!btn) return;
      const tema = TOPIC_NAMES[parseInt(btn.dataset.topicIdx, 10)];
      if (tema === undefined) return;
      if (btn.dataset.topicAction === "srs") startTopicSrs([tema]);
      else startTopicExam([tema]);
    };

    function card(num, label) {
      return `<div class="summary-card"><div class="num">${num}</div><div class="label">${label}</div></div>`;
    }
  }

  // ---------- SETUP ----------
  function openSetup(mode) {
    pendingSetupMode = mode;
    const titles = {
      exam: "Configurar examen simulado",
      train: "Configurar entrenamiento libre",
      srs: "Configurar repaso con flashcards",
    };
    document.getElementById("setup-title").textContent = titles[mode] || "Configurar";
    document.getElementById("setup-correction-block").classList.toggle("hidden", mode === "srs");
    document.getElementById("setup-examlike-row").classList.toggle("hidden", mode !== "exam");
    document.getElementById("setup-only-repeated").checked = false;
    document.getElementById("setup-qty-heading").textContent = mode === "srs" ? "Tarjetas nuevas para hoy" : "Número de preguntas";
    document.getElementById("setup-qty-hint").classList.toggle("hidden", mode !== "srs");

    const topicsEl = document.getElementById("setup-topics");
    topicsEl.innerHTML = TOPIC_NAMES.map((t, i) => {
      const s = topicStats(t);
      const extra = mode === "srs" ? "" : ` · ${s.mastery}% dominado`;
      return `<label class="topic-check">
        <input type="checkbox" value="${escapeHtml(t)}" checked>
        <span class="tc-name">${escapeHtml(t)}</span>
        <span class="tc-count">${s.total} preg.${extra}</span>
      </label>`;
    }).join("");

    if (mode === "srs") {
      // Las flashcards sí necesitan un tope de tarjetas nuevas por día (es la base
      // de la repetición espaciada): aquí no aplica lo de "todas de golpe".
      document.getElementById("setup-qty").value = 20;
      document.getElementById("setup-qty-label").textContent = "20";
      document.getElementById("setup-qty").dataset.all = "";
    } else {
      // Examen y entrenamiento: por defecto, todas las preguntas del filtro elegido,
      // una detrás de otra, sin quedarse en un subconjunto.
      document.getElementById("setup-qty-label").textContent = "todas";
      document.getElementById("setup-qty").dataset.all = "1";
      document.getElementById("setup-qty").value = document.getElementById("setup-qty").max;
    }
    document.getElementById("setup-instant").checked = true;
    document.getElementById("setup-examlike").checked = false;

    showView("setup");
  }

  document.getElementById("setup-qty").addEventListener("input", (e) => {
    document.getElementById("setup-qty-label").textContent = e.target.value;
  });
  document.querySelectorAll(".qty-presets .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.qty;
      if (v === "all") {
        document.getElementById("setup-qty-label").textContent = "todas";
        document.getElementById("setup-qty").dataset.all = "1";
        document.getElementById("setup-qty").value = document.getElementById("setup-qty").max;
      } else {
        document.getElementById("setup-qty").dataset.all = "";
        document.getElementById("setup-qty").value = v;
        document.getElementById("setup-qty-label").textContent = v;
      }
    });
  });
  document.getElementById("topics-select-all").addEventListener("click", () => {
    document.querySelectorAll("#setup-topics input[type=checkbox]").forEach((c) => (c.checked = true));
  });
  document.getElementById("topics-select-none").addEventListener("click", () => {
    document.querySelectorAll("#setup-topics input[type=checkbox]").forEach((c) => (c.checked = false));
  });
  document.querySelector('[data-action="cancel-setup"]').addEventListener("click", () => showView("home"));

  document.getElementById("setup-start").addEventListener("click", () => {
    const selectedTopics = Array.from(document.querySelectorAll("#setup-topics input:checked")).map((c) => c.value);
    if (selectedTopics.length === 0) {
      alert("Elige al menos un tema.");
      return;
    }
    const onlyRepeated = document.getElementById("setup-only-repeated").checked;
    const useAll = document.getElementById("setup-qty").dataset.all === "1";

    if (pendingSetupMode === "srs") {
      const newLimit = useAll ? ALL_QUESTIONS.length : parseInt(document.getElementById("setup-qty").value, 10);
      const queue = buildFlashcardSession(selectedTopics, newLimit, onlyRepeated);
      if (queue.length === 0) {
        alert("No tienes tarjetas pendientes ni nuevas con esos filtros. ¡Vuelve mañana o prueba con más temas!");
        return;
      }
      startFlashcardSession(queue);
      return;
    }

    let pool = ALL_QUESTIONS.filter((q) => selectedTopics.includes(q.tema));
    if (onlyRepeated) pool = pool.filter((q) => q.repetida);
    if (pool.length === 0) {
      alert("No hay preguntas disponibles con esos filtros. Elige al menos un tema.");
      return;
    }
    const qty = useAll ? pool.length : Math.min(parseInt(document.getElementById("setup-qty").value, 10), pool.length);
    const questions = shuffle(pool).slice(0, qty);
    const examlike = document.getElementById("setup-examlike").checked && pendingSetupMode === "exam";
    startSession(questions, {
      // "Examen real" siempre gana: si está marcado, nunca se revela nada al momento
      // aunque "instantáneo" también estuviera marcado.
      instant: document.getElementById("setup-instant").checked && !examlike,
      examlike,
      mode: pendingSetupMode,
    });
  });

  // ---------- acciones home ----------
  document.querySelectorAll("[data-action]").forEach((el) => {
    el.addEventListener("click", () => {
      const action = el.dataset.action;
      if (action === "new-exam") openSetup("exam");
      else if (action === "free-train") openSetup("train");
      else if (action === "flashcards") openSetup("srs");
      else if (action === "go-achievements") showView("achievements");
      else if (action === "train-fails" || action === "train-fails-from-results") {
        const fails = getFailedQuestions();
        if (fails.length === 0) {
          alert("¡No tienes ninguna pregunta pendiente de repaso ahora mismo!");
          return;
        }
        startSession(shuffle(fails), { instant: true, examlike: false, mode: "train" });
      } else if (action === "most-repeated") {
        const rep = ALL_QUESTIONS.filter((q) => q.repetida);
        if (rep.length === 0) {
          alert("No hay preguntas marcadas como muy repetidas en el banco actual.");
          return;
        }
        startSession(shuffle(rep), { instant: true, examlike: false, mode: "train" });
      } else if (action === "go-home") {
        showView("home");
      }
    });
  });
  document.getElementById("btn-home").addEventListener("click", () => showView("home"));
  document.querySelectorAll(".navlink").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.nav));
  });

  // ---------- EXAM SESSION ----------
  // Todas las preguntas de la sesión se listan de golpe, una debajo de otra
  // (con scroll), en vez de ir pasando de una en una. Se contesta cada una in situ.
  function startSession(questions, config) {
    session = {
      questions,
      answers: {}, // id -> {selected, correct} — definitivo (instantáneo, o ya finalizado en examen real)
      pendingSelections: {}, // id -> letra elegida, solo en examen real, hasta que se termina la sesión
      answeredIds: new Set(), // para la barra de progreso: cuenta lo definitivo + lo pendiente
      config,
      startTime: Date.now(),
      timerId: null,
      xpEarned: 0,
      combo: 0,
      newBadges: [],
      isBoss: config.mode === "boss",
    };
    registerDailyActivity();
    renderGameHeader();
    document.getElementById("exam-xp-counter").textContent = "⭐ 0 XP";
    document.getElementById("exam-timer").classList.toggle("hidden", !config.examlike);
    if (config.examlike) {
      session.timerId = setInterval(() => {
        const el = document.getElementById("exam-timer");
        el.textContent = fmtTime((Date.now() - session.startTime) / 1000);
      }, 1000);
    }
    showView("exam");
    renderAllQuestions();
  }

  function updateExamProgress() {
    const total = session.questions.length;
    const answered = session.answeredIds.size;
    document.getElementById("exam-progress-fill").style.width = (total ? Math.round((answered / total) * 100) : 0) + "%";
    document.getElementById("exam-progress-label").textContent = `${answered} de ${total} contestadas`;
  }

  function requestFinish() {
    const total = session.questions.length;
    const answered = session.answeredIds.size;
    if (answered < total) {
      if (!confirm(`¿Terminar ahora y ver resultados? Has contestado ${answered} de ${total} preguntas.`)) return;
    }
    finishSession();
  }
  document.getElementById("exam-quit").addEventListener("click", requestFinish);
  document.getElementById("q-finish").addEventListener("click", requestFinish);

  function renderAllQuestions() {
    const listEl = document.getElementById("exam-questions-list");
    listEl.innerHTML = session.questions.map((q, idx) => {
      const letters = LETTERS.filter((l) => q.opciones && q.opciones[l] !== undefined);
      return `
      <div class="question-card" data-qidx="${idx}" data-qid="${escapeHtml(q.id)}">
        <div class="question-meta">
          <span class="q-index">#${idx + 1}</span>
          <span class="tag">${escapeHtml(q.tema)}</span>
          ${q.repetida ? '<span class="tag tag-repeated">🔁 Muy repetida</span>' : ""}
          ${session.isBoss ? '<span class="tag tag-boss">👑 Examen Final</span>' : ""}
        </div>
        <h2 class="q-text">${escapeHtml(q.pregunta)}</h2>
        <div class="q-options">
          ${letters.map((l) => `
            <button type="button" class="q-option" data-letter="${l}">
              <span class="opt-letter">${l.toUpperCase()}</span>
              <span class="opt-text">${escapeHtml(q.opciones[l])}</span>
            </button>`).join("")}
        </div>
        <div class="q-explain hidden"></div>
      </div>`;
    }).join("");
    updateExamProgress();
  }

  // Delegación de eventos: un único listener para las ~200+ tarjetas, en vez de
  // cientos de listeners individuales.
  document.getElementById("exam-questions-list").addEventListener("click", (e) => {
    const btn = e.target.closest(".q-option");
    if (!btn) return;
    const card = btn.closest(".question-card");
    if (card.classList.contains("locked")) return; // instantáneo: ya revelada, no se puede cambiar
    onSelectOptionInCard(card, btn);
  });

  function onSelectOptionInCard(card, btn) {
    const qid = card.dataset.qid;
    const q = session.questions[parseInt(card.dataset.qidx, 10)];
    const letter = btn.dataset.letter;

    card.querySelectorAll(".q-option").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    session.answeredIds.add(qid);

    if (session.config.instant) {
      // Sin paso intermedio: al elegir una opción se revela al momento, ahí mismo.
      revealCard(card, q, letter);
    } else {
      // Examen real: se guarda la elección (se puede cambiar de opinión clicando otra
      // opción) pero no se revela ni se puntúa hasta terminar toda la sesión.
      session.pendingSelections[qid] = letter;
    }
    updateExamProgress();
  }

  function revealCard(card, q, letter) {
    card.classList.add("locked");
    recordAnswer(q, letter, letter === q.correcta);

    card.querySelectorAll(".q-option").forEach((b) => {
      b.disabled = true;
      const l = b.dataset.letter;
      if (l === q.correcta) b.classList.add("correct");
      else if (l === letter) b.classList.add("incorrect");
    });

    const explainEl = card.querySelector(".q-explain");
    const letters = LETTERS.filter((l) => q.opciones && q.opciones[l] !== undefined);
    explainEl.innerHTML = letters.map((l) => {
      const cls = l === q.correcta ? "is-correct" : (l === letter ? "is-wrong" : "is-neutral");
      const text = (q.explicacion_opciones && q.explicacion_opciones[l]) || "";
      return `<div class="q-explain-item ${cls}">
        <span class="ex-letter">${l.toUpperCase()}</span>
        <span class="ex-text"><b>${l === q.correcta ? "Correcta." : "Incorrecta."}</b> ${escapeHtml(text)}</span>
      </div>`;
    }).join("");
    explainEl.classList.remove("hidden");
  }

  function recordAnswer(q, selected, correct) {
    session.answers[q.id] = { selected, correct };

    const existing = stats[q.id];
    const wasFailed = !!existing && existing.lastCorrect === false;

    if (!stats[q.id]) stats[q.id] = { attempts: 0, correct: 0, wrong: 0, lastCorrect: null };
    const r = stats[q.id];
    r.attempts++;
    if (correct) r.correct++; else r.wrong++;
    r.lastCorrect = correct;
    saveStats();

    // gamificación: XP, combo e insignias
    let xpGain = correct ? 10 : 2;
    if (correct && wasFailed) {
      xpGain += 5;
      game.failsConquered = (game.failsConquered || 0) + 1;
    }
    session.xpEarned = (session.xpEarned || 0) + xpGain;
    const xpCounterEl = document.getElementById("exam-xp-counter");
    if (xpCounterEl) xpCounterEl.textContent = `⭐ ${session.xpEarned} XP`;
    addXP(xpGain);

    if (correct) {
      session.combo = (session.combo || 0) + 1;
      if (session.config.instant && session.combo >= 3) showComboPopup(session.combo);
    } else {
      session.combo = 0;
    }

    const newBadges = evaluateAchievements();
    session.newBadges = (session.newBadges || []).concat(newBadges);
  }

  function finishSession() {
    if (session.timerId) clearInterval(session.timerId);
    // Examen real: puntuar ahora todo lo que se había seleccionado pero no revelado
    // aún (una sola vez cada una, por eso se guardaban aparte en pendingSelections).
    Object.keys(session.pendingSelections || {}).forEach((qid) => {
      if (session.answers[qid]) return;
      const q = session.questions.find((qq) => qq.id === qid);
      if (!q) return;
      const letter = session.pendingSelections[qid];
      recordAnswer(q, letter, letter === q.correcta);
    });
    const total = session.questions.length;
    const answeredCount = Object.keys(session.answers).length;
    const correctCount = Object.values(session.answers).filter((a) => a.correct).length;
    const elapsedSec = Math.round((Date.now() - session.startTime) / 1000);
    const pct = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;

    if (answeredCount >= 10 && correctCount === answeredCount) game.hasPerfectExam = true;
    if (total >= 60) game.hasMarathon = true;
    let bossResult = null;
    if (session.isBoss) {
      if (pct >= 80) { game.bossDefeated = true; bossResult = "win"; }
      else bossResult = "lose";
    }
    saveGame();
    const lateBadges = evaluateAchievements();
    const allNewBadges = dedupeBadges((session.newBadges || []).concat(lateBadges));

    pushHistory({
      date: new Date().toISOString(),
      mode: session.config.mode,
      total, answered: answeredCount, correct: correctCount,
      elapsedSec,
    });

    renderResults(total, answeredCount, correctCount, elapsedSec, allNewBadges, bossResult);
    showView("results");
  }

  function renderResults(total, answered, correct, elapsedSec, newBadges, bossResult) {
    newBadges = newBadges || [];
    const pct = answered ? Math.round((correct / answered) * 100) : 0;
    document.getElementById("results-score-pct").textContent = pct + "%";
    let scoreText = `${correct} de ${answered} correctas` + (answered < total ? ` (de ${total} preguntas)` : "");
    if (bossResult === "win") scoreText = "👑 ¡Reto superado! " + scoreText;
    else if (bossResult === "lose") scoreText = "Casi lo tienes — " + scoreText;
    document.getElementById("results-score-text").textContent = scoreText;
    document.getElementById("results-time-text").textContent = session.config.examlike ? `Tiempo: ${fmtTime(elapsedSec)}` : "";
    document.getElementById("results-xp-text").textContent = `⭐ Has ganado ${session.xpEarned || 0} XP en esta sesión.`;
    const circle = document.getElementById("results-score-circle");
    circle.style.borderColor = pct >= 70 ? "var(--ok)" : pct >= 50 ? "var(--warn)" : "var(--bad)";

    const badgesEl = document.getElementById("results-badges");
    if (newBadges.length) {
      badgesEl.classList.remove("hidden");
      badgesEl.innerHTML = `<span class="rb-title">🎉 Nuevas insignias desbloqueadas</span>` +
        newBadges.map((b) => `<span class="badge-pill">${b.icon} ${escapeHtml(b.title)}</span>`).join("");
    } else {
      badgesEl.classList.add("hidden");
      badgesEl.innerHTML = "";
    }

    // por tema
    const byTopic = {};
    session.questions.forEach((q) => {
      const a = session.answers[q.id];
      if (!a) return;
      if (!byTopic[q.tema]) byTopic[q.tema] = { total: 0, correct: 0 };
      byTopic[q.tema].total++;
      if (a.correct) byTopic[q.tema].correct++;
    });
    const topicEl = document.getElementById("results-by-topic");
    topicEl.innerHTML = Object.keys(byTopic).map((t) => {
      const s = byTopic[t];
      const p = Math.round((s.correct / s.total) * 100);
      return `<div class="rbt-row">
        <span class="t-name">${escapeHtml(t)}</span>
        <span class="rbt-bar"><span class="rbt-bar-fill" style="width:${p}%; background:${p >= 70 ? "var(--ok)" : p >= 50 ? "var(--warn)" : "var(--bad)"}"></span></span>
        <span class="rbt-score">${s.correct}/${s.total}</span>
      </div>`;
    }).join("") || `<p class="muted">No se registraron respuestas.</p>`;

    // listado de preguntas
    const qEl = document.getElementById("results-questions");
    qEl.innerHTML = session.questions.map((q) => {
      const a = session.answers[q.id];
      if (!a) return "";
      const letters = LETTERS.filter((l) => q.opciones && q.opciones[l] !== undefined);
      const explain = letters.map((l) => {
        const cls = l === q.correcta ? "is-correct" : (l === a.selected ? "is-wrong" : "is-neutral");
        const text = (q.explicacion_opciones && q.explicacion_opciones[l]) || "";
        return `<div class="q-explain-item ${cls}">
          <span class="ex-letter">${l.toUpperCase()}</span>
          <span class="ex-text"><b>${escapeHtml(q.opciones[l])}</b> — ${escapeHtml(text)}</span>
        </div>`;
      }).join("");
      return `<div class="rq-item ${a.correct ? "rq-correct" : "rq-incorrect"}">
        <div class="rq-head">
          <span class="tag">${escapeHtml(q.tema)}</span>
          <span class="rq-status ${a.correct ? "ok" : "bad"}">${a.correct ? "Correcta" : "Incorrecta"}</span>
        </div>
        <p class="rq-q">${escapeHtml(q.pregunta)}</p>
        <div class="q-explain">${explain}</div>
      </div>`;
    }).join("");
  }

  // ---------- FLASHCARDS (repetición espaciada) ----------
  function startFlashcardSession(queue) {
    fcSession = { queue, index: 0, reviewedCount: 0, xpEarned: 0 };
    registerDailyActivity();
    renderGameHeader();
    document.getElementById("fc-xp-counter").textContent = "⭐ 0 XP";
    document.getElementById("fc-complete").classList.add("hidden");
    document.getElementById("fc-card-area").classList.remove("hidden");
    showView("flashcards");
    renderFlashcard();
  }

  function renderFlashcard() {
    const q = fcSession.queue[fcSession.index];
    const total = fcSession.queue.length;
    document.getElementById("fc-progress-fill").style.width = Math.round((fcSession.index / total) * 100) + "%";
    document.getElementById("fc-progress-label").textContent = `Tarjeta ${fcSession.index + 1} de ${total}`;
    document.getElementById("fc-tema-tag").textContent = q.tema;
    document.getElementById("fc-new-tag").classList.toggle("hidden", !!srs[q.id]);
    document.getElementById("fc-question").textContent = q.pregunta;
    document.getElementById("fc-back").classList.add("hidden");
    document.getElementById("fc-reveal").classList.remove("hidden");
  }

  document.getElementById("fc-reveal").addEventListener("click", revealFlashcard);

  function revealFlashcard() {
    const q = fcSession.queue[fcSession.index];
    const letters = LETTERS.filter((l) => q.opciones && q.opciones[l] !== undefined);

    document.getElementById("fc-options").innerHTML = letters.map((l) => `
      <div class="q-option ${l === q.correcta ? "correct" : ""}">
        <span class="opt-letter">${l.toUpperCase()}</span>
        <span class="opt-text">${escapeHtml(q.opciones[l])}</span>
      </div>`).join("");

    document.getElementById("fc-explain").innerHTML = letters.map((l) => {
      const cls = l === q.correcta ? "is-correct" : "is-neutral";
      const text = (q.explicacion_opciones && q.explicacion_opciones[l]) || "";
      return `<div class="q-explain-item ${cls}">
        <span class="ex-letter">${l.toUpperCase()}</span>
        <span class="ex-text">${escapeHtml(text)}</span>
      </div>`;
    }).join("");

    const card = srs[q.id] || newSrsCard();
    const preview = previewIntervals(card);
    document.getElementById("fc-int-again").textContent = fmtInterval(preview.again);
    document.getElementById("fc-int-hard").textContent = fmtInterval(preview.hard);
    document.getElementById("fc-int-good").textContent = fmtInterval(preview.good);
    document.getElementById("fc-int-easy").textContent = fmtInterval(preview.easy);

    document.getElementById("fc-reveal").classList.add("hidden");
    document.getElementById("fc-back").classList.remove("hidden");
  }

  document.querySelectorAll(".fc-rate").forEach((btn) => {
    btn.addEventListener("click", () => rateFlashcard(parseInt(btn.dataset.q, 10)));
  });

  function rateFlashcard(quality) {
    const q = fcSession.queue[fcSession.index];
    const oldCard = srs[q.id] || newSrsCard();
    srs[q.id] = sm2Core(oldCard, quality);
    saveSrs();

    fcSession.reviewedCount++;
    game.srsReviews = (game.srsReviews || 0) + 1;
    const xp = 5;
    fcSession.xpEarned += xp;
    document.getElementById("fc-xp-counter").textContent = `⭐ ${fcSession.xpEarned} XP`;
    addXP(xp);
    saveGame();
    evaluateAchievements();

    if (quality < 3) {
      const reinsertAt = Math.min(fcSession.index + 4, fcSession.queue.length);
      fcSession.queue.splice(reinsertAt, 0, q);
    }

    fcSession.index++;
    if (fcSession.index >= fcSession.queue.length) finishFlashcardSession();
    else renderFlashcard();
  }

  document.getElementById("fc-quit").addEventListener("click", () => {
    if (confirm("¿Terminar la sesión de tarjetas ahora?")) finishFlashcardSession();
  });

  function finishFlashcardSession() {
    document.getElementById("fc-card-area").classList.add("hidden");
    document.getElementById("fc-complete").classList.remove("hidden");
    document.getElementById("fc-complete-summary").textContent =
      `Has repasado ${fcSession.reviewedCount} tarjeta${fcSession.reviewedCount === 1 ? "" : "s"} y ganado ${fcSession.xpEarned} XP. ` +
      `Vuelve mañana para tu siguiente tanda de repaso.`;
    showView("flashcards");
  }

  // ---------- FAILS VIEW ----------
  function renderFailsView() {
    const fails = getFailedQuestions();
    const byTopic = {};
    fails.forEach((q) => {
      if (!byTopic[q.tema]) byTopic[q.tema] = [];
      byTopic[q.tema].push(q);
    });
    const topicEl = document.getElementById("fails-by-topic");
    topicEl.innerHTML = Object.keys(byTopic).length
      ? Object.keys(byTopic).map((t) => `<div class="rbt-row">
          <span class="t-name">${escapeHtml(t)}</span>
          <span class="rbt-score">${byTopic[t].length} pendiente${byTopic[t].length === 1 ? "" : "s"}</span>
        </div>`).join("")
      : `<p class="muted">No tienes preguntas pendientes de repaso. ¡Buen trabajo!</p>`;

    document.getElementById("fails-train-all").classList.toggle("hidden", fails.length === 0);

    const listEl = document.getElementById("fails-list");
    listEl.innerHTML = fails.map((q) => {
      const letters = LETTERS.filter((l) => q.opciones && q.opciones[l] !== undefined);
      const explain = letters.map((l) => {
        const cls = l === q.correcta ? "is-correct" : "is-neutral";
        const text = (q.explicacion_opciones && q.explicacion_opciones[l]) || "";
        return `<div class="q-explain-item ${cls}">
          <span class="ex-letter">${l.toUpperCase()}</span>
          <span class="ex-text"><b>${escapeHtml(q.opciones[l])}</b> — ${escapeHtml(text)}</span>
        </div>`;
      }).join("");
      return `<div class="rq-item rq-incorrect">
        <div class="rq-head">
          <span class="tag">${escapeHtml(q.tema)}</span>
          <span class="rq-status bad">Pendiente</span>
        </div>
        <p class="rq-q">${escapeHtml(q.pregunta)}</p>
        <div class="q-explain">${explain}</div>
      </div>`;
    }).join("");
  }

  // ---------- STATS VIEW ----------
  function renderStatsView() {
    const g = globalStats();
    document.getElementById("stats-overview").innerHTML = [
      cardHtml(g.totalQuestions, "Preguntas totales"),
      cardHtml(g.answeredIds, "Practicadas"),
      cardHtml(g.accuracy + "%", "Acierto global"),
      cardHtml(g.pendingFails, "Pendientes de repaso"),
    ].join("");

    const sc = srsCounts();
    document.getElementById("stats-srs").innerHTML = [
      cardHtml(Object.keys(srs).length, "Tarjetas en el sistema"),
      cardHtml(sc.due, "Para repasar hoy"),
      cardHtml(sc.fresh, "Nuevas sin empezar"),
      cardHtml(countMatureCards(), "Maduras (>21 días)"),
    ].join("");

    const rows = [`<div class="stats-row head"><span>Tema</span><span>Preguntas</span><span>Practicadas</span><span>Dominio</span></div>`];
    TOPIC_NAMES.forEach((t) => {
      const s = topicStats(t);
      rows.push(`<div class="stats-row">
        <span>${escapeHtml(t)}</span>
        <span class="num">${s.total}</span>
        <span class="num">${s.answered}</span>
        <span class="num">${s.mastery}%</span>
      </div>`);
    });
    document.getElementById("stats-table").innerHTML = rows.join("");

    function cardHtml(num, label) {
      return `<div class="summary-card"><div class="num">${num}</div><div class="label">${label}</div></div>`;
    }
  }

  document.getElementById("stats-reset").addEventListener("click", () => {
    if (confirm("Esto borrará TODO tu progreso guardado (aciertos, fallos, estadísticas, nivel, XP, insignias y flashcards). ¿Continuar?")) {
      localStorage.removeItem(STORAGE_STATS);
      localStorage.removeItem(STORAGE_HISTORY);
      localStorage.removeItem(STORAGE_GAME);
      localStorage.removeItem(STORAGE_SRS);
      stats = {};
      game = { xp: 0, streakDays: 0, lastActiveDate: null, badges: {}, failsConquered: 0 };
      srs = {};
      showView("home");
    }
  });

  // Mide la altura real de la barra superior para que la cabecera del examen
  // (pegajosa, con el progreso/cronómetro) se coloque justo debajo sin hueco ni
  // solape, tanto si la topbar ocupa una fila como si se parte en dos en móvil.
  function updateTopbarHeightVar() {
    const tb = document.querySelector(".topbar");
    if (tb) document.documentElement.style.setProperty("--topbar-h", tb.offsetHeight + "px");
  }
  window.addEventListener("resize", updateTopbarHeightVar);

  // ---------- ENLACE DIRECTO (deep link) desde Central de Estudio ----------
  // Permite abrir el simulador ya filtrado y arrancado en un tema concreto,
  // sin pasar por la pantalla de configuracion manual. Formato de la URL:
  //   index.html?modo=srs&tema=Bloque%201&tema=Bloque%202
  // Si no hay parametros (el uso normal, doble clic en index.html) no cambia
  // absolutamente nada del comportamiento de siempre.
  // Repasar/Evaluar UN tema concreto directamente, sin pasar por la pantalla
  // de configuracion manual -- usado tanto por los botones de "Temario
  // cubierto" en esta misma pagina como por el enlace directo por URL.
  function startTopicSrs(temas) {
    let queue = buildFlashcardSession(temas, ALL_QUESTIONS.length, false);
    if (queue.length === 0) {
      // Sin tarjetas nuevas ni pendientes de repaso hoy segun el SRS: aun asi
      // se entra directamente a repasar el tema completo, para no dejar al
      // usuario en una pantalla vacia.
      queue = shuffle(ALL_QUESTIONS.filter((q) => temas.includes(q.tema)));
    }
    if (queue.length === 0) return false;
    startFlashcardSession(queue);
    return true;
  }

  function startTopicExam(temas) {
    const pool = ALL_QUESTIONS.filter((q) => temas.includes(q.tema));
    if (pool.length === 0) return false;
    startSession(shuffle(pool), { instant: false, examlike: true, mode: "exam" });
    return true;
  }

  function tryDeepLink() {
    let params;
    try { params = new URLSearchParams(location.search); } catch (e) { return false; }
    const temas = params.getAll("tema").filter((t) => TOPIC_NAMES.includes(t));
    if (!temas.length) return false;
    const modo = params.get("modo") || "srs";
    return modo === "srs" ? startTopicSrs(temas) : startTopicExam(temas);
  }

  // ---------- arranque ----------
  if (ALL_QUESTIONS.length === 0) {
    document.getElementById("app").innerHTML =
      '<p style="padding:40px;text-align:center;color:var(--bad)">No se ha podido cargar el banco de preguntas (questions_data.js). Comprueba que el archivo existe junto a index.html.</p>';
  } else {
    if (!tryDeepLink()) showView("home");
    updateTopbarHeightVar();
  }
})();
