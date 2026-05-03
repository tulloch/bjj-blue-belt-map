(function () {
  'use strict';

  const STATS_KEY = 'bjj-quiz-stats-v1';
  const SESSION_LENGTH = 12;

  // ---------- State ----------
  let allCards = [];                  // flat list of every quiz card derived from data
  let session = null;                 // { mode, queue, current, results }
  let stats = loadStats();

  // ---------- Stats ----------
  function loadStats() {
    try {
      const raw = localStorage.getItem(STATS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveStats() {
    try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (e) {}
  }

  function recordAnswer(positionId, correct) {
    if (!stats[positionId]) stats[positionId] = { correct: 0, total: 0 };
    stats[positionId].total += 1;
    if (correct) stats[positionId].correct += 1;
    saveStats();
  }

  function statusFor(positionId) {
    const s = stats[positionId];
    if (!s || s.total === 0) return 'untested';
    const pct = s.correct / s.total;
    if (s.total < 3) return 'partial';
    if (pct >= 0.8) return 'strong';
    if (pct >= 0.5) return 'partial';
    return 'weak';
  }

  // ---------- Card extraction ----------
  function buildAllCards() {
    const cards = [];
    QUIZ_DATA.positions.forEach(pos => {
      pos.reactions.forEach(reaction => {
        if (!reaction.responses || reaction.responses.length === 0) return;
        cards.push({
          positionId: pos.id,
          positionName: pos.name,
          positionUrl: pos.url,
          trigger: reaction.trigger,
          correct: reaction.responses[0],          // canonical best answer
          alsoCorrect: reaction.responses.slice(1) // other valid answers (used to filter distractors)
        });
      });
    });
    return cards;
  }

  // ---------- Distractor pool ----------
  function distractorsFor(card) {
    // Pull responses from OTHER reactions (any position) that are not also valid answers for this card.
    const validNames = new Set([card.correct.name, ...card.alsoCorrect.map(r => r.name)]);
    const pool = [];
    QUIZ_DATA.positions.forEach(pos => {
      pos.reactions.forEach(reaction => {
        // skip the same reaction
        if (pos.id === card.positionId && reaction.trigger === card.trigger) return;
        reaction.responses.forEach(r => {
          if (!validNames.has(r.name)) pool.push(r);
        });
      });
    });
    // dedupe by name (some moves like "Kimura" appear in many positions)
    const seen = new Set();
    const deduped = [];
    pool.forEach(r => {
      if (!seen.has(r.name)) {
        seen.add(r.name);
        deduped.push(r);
      }
    });
    return deduped;
  }

  // ---------- Question building ----------
  function buildQuestion(card) {
    const distractors = shuffle(distractorsFor(card)).slice(0, 3);
    const options = shuffle([card.correct, ...distractors]);
    return {
      card,
      options,
      correctIndex: options.findIndex(o => o.name === card.correct.name)
    };
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Session building ----------
  function buildSession(mode, opts) {
    let queue = [];
    if (mode === 'five-min') {
      queue = pickWeightedCards(SESSION_LENGTH);
    } else if (mode === 'position') {
      queue = shuffle(allCards.filter(c => c.positionId === opts.positionId));
    } else if (mode === 'all') {
      queue = shuffle(allCards.slice()).slice(0, 20);
    }
    return {
      mode,
      queue,
      index: 0,
      results: []  // { card, correct, chosen }
    };
  }

  function pickWeightedCards(n) {
    // 60% from weak/partial, 30% from untested, 10% from strong (review).
    // Fall back to random fill if any bucket is empty.
    const buckets = { weak: [], partial: [], untested: [], strong: [] };
    allCards.forEach(c => {
      buckets[statusFor(c.positionId)].push(c);
    });
    const targetWeak    = Math.round(n * 0.6);
    const targetUntested = Math.round(n * 0.3);
    const targetStrong  = n - targetWeak - targetUntested;
    const picked = [
      ...shuffle(buckets.weak.concat(buckets.partial)).slice(0, targetWeak),
      ...shuffle(buckets.untested).slice(0, targetUntested),
      ...shuffle(buckets.strong).slice(0, targetStrong)
    ];
    // top up if any bucket was short
    while (picked.length < n) {
      const remaining = allCards.filter(c => !picked.includes(c));
      if (remaining.length === 0) break;
      picked.push(shuffle(remaining)[0]);
    }
    return shuffle(picked);
  }

  // ---------- Rendering ----------
  const $ = sel => document.querySelector(sel);

  function renderHome() {
    const home = $('#view-home');
    const weakCount = Object.values(stats).filter((s,i) => {
      const id = Object.keys(stats)[i];
      return statusFor(id) === 'weak';
    }).length;
    const totalAnswered = Object.values(stats).reduce((sum, s) => sum + s.total, 0);

    // Heat map
    const grid = $('#heat-map-grid');
    grid.innerHTML = '';
    QUIZ_DATA.positions.forEach(pos => {
      const status = statusFor(pos.id);
      const s = stats[pos.id];
      const pct = s && s.total > 0 ? Math.round((s.correct / s.total) * 100) : null;
      const cell = document.createElement('div');
      cell.className = `heat-cell heat-${status}`;
      cell.innerHTML = `
        <div class="heat-name">${pos.name}</div>
        <div class="heat-stat">${pct !== null ? pct + '%' : '—'}</div>
        <div class="heat-attempts">${s ? s.total + ' tries' : 'untested'}</div>
      `;
      cell.addEventListener('click', () => startSession('position', { positionId: pos.id }));
      grid.appendChild(cell);
    });

    // Activity summary
    $('#activity-summary').textContent = totalAnswered === 0
      ? "No drills yet — tap 5-Minute Drill to start."
      : `${totalAnswered} questions answered total. ${weakCount > 0 ? weakCount + ' weak position' + (weakCount > 1 ? 's' : '') + ' to drill.' : 'Looking solid.'}`;

    showView('home');
  }

  function renderQuestion() {
    const q = session.currentQuestion;
    const card = q.card;
    $('#progress-bar-fill').style.width = ((session.index) / session.queue.length * 100) + '%';
    $('#progress-text').textContent = `${session.index + 1} / ${session.queue.length}`;
    $('#scenario-position').textContent = card.positionName;
    $('#scenario-trigger').textContent = card.trigger;

    const optionsBox = $('#answer-options');
    optionsBox.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = opt.name;
      btn.addEventListener('click', () => handleAnswer(i));
      optionsBox.appendChild(btn);
    });

    $('#feedback-panel').classList.add('hidden');
    $('#next-btn').classList.add('hidden');
    showView('question');
  }

  function handleAnswer(chosenIndex) {
    const q = session.currentQuestion;
    const correct = chosenIndex === q.correctIndex;
    const card = q.card;

    // record
    recordAnswer(card.positionId, correct);
    session.results.push({ card, correct, chosenIndex });

    // disable buttons + highlight
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correctIndex) b.classList.add('correct');
      if (i === chosenIndex && !correct) b.classList.add('wrong');
    });

    // feedback panel
    const fb = $('#feedback-panel');
    fb.classList.remove('hidden', 'is-correct', 'is-wrong');
    fb.classList.add(correct ? 'is-correct' : 'is-wrong');
    $('#feedback-verdict').textContent = correct ? '✓ Correct' : '✗ Not the highest %';
    $('#feedback-answer').textContent = card.correct.name;
    $('#feedback-desc').textContent = card.correct.desc;
    $('#feedback-link').href = card.positionUrl;
    $('#feedback-link').textContent = `→ See full ${card.positionName} page`;

    $('#next-btn').classList.remove('hidden');
    $('#next-btn').textContent = session.index === session.queue.length - 1 ? 'Finish' : 'Next →';
  }

  function nextQuestion() {
    session.index += 1;
    if (session.index >= session.queue.length) {
      renderResults();
    } else {
      session.currentQuestion = buildQuestion(session.queue[session.index]);
      renderQuestion();
    }
  }

  function renderResults() {
    const correctCount = session.results.filter(r => r.correct).length;
    const total = session.results.length;
    $('#results-score').textContent = `${correctCount} / ${total}`;
    $('#results-pct').textContent = total > 0 ? Math.round(correctCount / total * 100) + '%' : '0%';

    // Per-position breakdown for this session
    const byPos = {};
    session.results.forEach(r => {
      const id = r.card.positionId;
      if (!byPos[id]) byPos[id] = { name: r.card.positionName, correct: 0, total: 0 };
      byPos[id].total += 1;
      if (r.correct) byPos[id].correct += 1;
    });
    const breakdownBox = $('#results-breakdown');
    breakdownBox.innerHTML = '';
    Object.values(byPos).forEach(p => {
      const row = document.createElement('div');
      row.className = 'results-row';
      const pct = Math.round(p.correct / p.total * 100);
      row.innerHTML = `<span class="results-row-name">${p.name}</span><span class="results-row-score">${p.correct}/${p.total} <span class="results-row-pct">(${pct}%)</span></span>`;
      breakdownBox.appendChild(row);
    });

    // Wrong answers to review
    const wrongs = session.results.filter(r => !r.correct);
    const wrongBox = $('#results-wrong');
    wrongBox.innerHTML = '';
    if (wrongs.length === 0) {
      wrongBox.innerHTML = '<p class="results-perfect">No misses. Drill harder positions next.</p>';
    } else {
      wrongs.forEach(r => {
        const row = document.createElement('div');
        row.className = 'results-wrong-row';
        row.innerHTML = `
          <div class="results-wrong-q"><strong>${r.card.positionName}</strong> · ${r.card.trigger}</div>
          <div class="results-wrong-a">→ ${r.card.correct.name}</div>
          <div class="results-wrong-d">${r.card.correct.desc}</div>
        `;
        wrongBox.appendChild(row);
      });
    }

    showView('results');
  }

  // ---------- View management ----------
  function showView(name) {
    ['home', 'question', 'results'].forEach(v => {
      $('#view-' + v).classList.toggle('hidden', v !== name);
    });
    window.scrollTo(0, 0);
  }

  // ---------- Session lifecycle ----------
  function startSession(mode, opts) {
    session = buildSession(mode, opts);
    if (session.queue.length === 0) {
      alert('No questions available for this selection.');
      return;
    }
    session.currentQuestion = buildQuestion(session.queue[0]);
    renderQuestion();
  }

  // ---------- Wiring ----------
  function init() {
    if (typeof QUIZ_DATA === 'undefined' || !QUIZ_DATA.positions) {
      document.body.innerHTML = '<main style="padding:2rem;font-family:sans-serif;"><h1>Quiz data missing</h1><p>data.js failed to load.</p></main>';
      return;
    }
    allCards = buildAllCards();

    $('#start-five-min').addEventListener('click', () => startSession('five-min'));
    $('#start-all').addEventListener('click', () => startSession('all'));
    $('#next-btn').addEventListener('click', nextQuestion);
    $('#back-to-home').addEventListener('click', renderHome);
    $('#again-btn').addEventListener('click', () => startSession(session.mode, session.opts));
    $('#home-from-results').addEventListener('click', renderHome);
    $('#reset-stats').addEventListener('click', () => {
      if (confirm('Reset all quiz progress?')) {
        stats = {};
        saveStats();
        renderHome();
      }
    });

    renderHome();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
