// ===================================================
// UTILS.JS — Shared utilities for PlacementPro
// ===================================================

// ─── LOCAL STORAGE ──────────────────────────────────
const Storage = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) { console.warn('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); },
  clear() { localStorage.clear(); }
};

// ─── THEME MANAGEMENT ──────────────────────────────
window.toggleTheme = function() {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('pp_theme', next);
  // Update Tailwind dark class if needed
  root.classList.toggle('light', next === 'light');
  // Show toast feedback
  if (typeof Toast !== 'undefined') {
    Toast.info(next === 'light' ? '☀️ Light mode on' : '🌙 Dark mode on', 2000);
  }
};

// Apply saved theme immediately (also handled by inline script in HTML)
(function initTheme() {
  const saved = localStorage.getItem('pp_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

// ─── AUTH HELPERS ──────────────────────────────────
const Auth = {
  isLoggedIn() { return !!(Storage.get('pp_current_user') || Storage.get('pp_user')); },
  getUser()    { return Storage.get('pp_current_user') || Storage.get('pp_user'); },
  setUser(u)   { Storage.set('pp_current_user', u); Storage.set('pp_user', u); },
  logout()     {
    // Call Firebase logout if available, else just clear local
    if (typeof window.ppLogout === 'function') { window.ppLogout(); return; }
    localStorage.removeItem('pp_current_user');
    localStorage.removeItem('pp_user');
    window.location.href = 'login.html';
  },
  requireAuth() {
    if (!this.isLoggedIn()) { window.location.href = 'login.html'; return false; }
    return true;
  }
};

// ─── TOAST NOTIFICATIONS ──────────────────────────
const Toast = {
  container: null,

  init() {
    if (this.container) return;
    this.container = document.createElement('div');
    this.container.id = 'toast-container';
    this.container.style.cssText = `
      position:fixed; bottom:1.5rem; right:1.5rem;
      display:flex; flex-direction:column; gap:0.5rem;
      z-index:9999; pointer-events:none;
    `;
    document.body.appendChild(this.container);
  },

  show(message, type = 'info', duration = 3500) {
    this.init();

    const icons = {
      success: '<i class="fa-solid fa-circle-check" style="color:#34d399"></i>',
      error:   '<i class="fa-solid fa-circle-xmark" style="color:#f87171"></i>',
      warning: '<i class="fa-solid fa-triangle-exclamation" style="color:#fbbf24"></i>',
      info:    '<i class="fa-solid fa-circle-info" style="color:#60a5fa"></i>'
    };

    const borders = {
      success: 'rgba(52,211,153,0.25)',
      error:   'rgba(248,113,113,0.25)',
      warning: 'rgba(251,191,36,0.25)',
      info:    'rgba(96,165,250,0.25)'
    };

    const t = document.createElement('div');
    t.style.cssText = `
      display:flex; align-items:center; gap:0.75rem;
      padding:0.875rem 1.25rem;
      background:#0d0d14; border:1px solid ${borders[type]};
      border-radius:0.875rem; box-shadow:0 8px 30px rgba(0,0,0,0.5);
      min-width:280px; max-width:360px;
      pointer-events:all; cursor:pointer;
      transform:translateX(120%); opacity:0;
      transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
      font-family:'Inter',sans-serif;
    `;
    t.innerHTML = `
      <span style="flex-shrink:0;font-size:1rem">${icons[type]}</span>
      <span style="flex:1;font-size:0.875rem;color:#f4f4f6;line-height:1.4">${message}</span>
      <span style="color:#6b6b80;font-size:1.1rem;line-height:1;flex-shrink:0" onclick="this.parentElement.remove()">×</span>
    `;

    this.container.appendChild(t);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        t.style.transform = 'translateX(0)';
        t.style.opacity = '1';
      });
    });

    // Auto-dismiss
    const dismiss = () => {
      t.style.transform = 'translateX(120%)';
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 300);
    };
    t.onclick = dismiss;
    setTimeout(dismiss, duration);
  },

  success(m, d) { this.show(m, 'success', d); },
  error(m, d)   { this.show(m, 'error', d); },
  warning(m, d) { this.show(m, 'warning', d); },
  info(m, d)    { this.show(m, 'info', d); }
};

// ─── TOP PROGRESS BAR ─────────────────────────────
const Progress = {
  bar: null,
  timer: null,
  value: 0,

  init() {
    if (this.bar) return;
    this.bar = document.createElement('div');
    this.bar.style.cssText = `
      position:fixed; top:0; left:0; height:2px; width:0%;
      background:linear-gradient(90deg,#4f8ef7,#a78bfa,#34d399);
      z-index:99999; transition:width 0.2s ease, opacity 0.3s ease;
      box-shadow:0 0 8px rgba(79,142,247,0.6);
      pointer-events:none;
    `;
    document.body.appendChild(this.bar);
  },

  start() {
    this.init();
    this.value = 10;
    this.bar.style.opacity = '1';
    this.bar.style.width = '10%';
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.value < 85) {
        this.value += Math.random() * 8;
        this.bar.style.width = this.value + '%';
      }
    }, 200);
  },

  done() {
    clearInterval(this.timer);
    this.bar.style.width = '100%';
    setTimeout(() => {
      this.bar.style.opacity = '0';
      setTimeout(() => { this.bar.style.width = '0%'; this.value = 0; }, 300);
    }, 200);
  }
};

// ─── FORMAT HELPERS ───────────────────────────────
const Format = {
  date(d)        { return new Date(d).toLocaleDateString('en-IN',{month:'short',day:'numeric',year:'numeric'}); },
  relativeTime(d) {
    const diff = Date.now() - new Date(d);
    const s=Math.floor(diff/1000), m=Math.floor(s/60), h=Math.floor(m/60), days=Math.floor(h/24);
    if(days>0) return `${days}d ago`; if(h>0) return `${h}h ago`; if(m>0) return `${m}m ago`; return 'just now';
  },
  number(n) { return n>=1e6 ? (n/1e6).toFixed(1)+'M' : n>=1000 ? (n/1000).toFixed(1)+'k' : n; },
  percent(v,t)   { return t===0 ? 0 : Math.round((v/t)*100); }
};

// ─── DOM HELPERS ──────────────────────────────────
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

function el(tag, cls='', html='') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

// ─── MODAL HELPERS ────────────────────────────────
function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('active'); document.body.style.overflow='hidden'; }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('active'); document.body.style.overflow=''; }
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ─── COUNTER ANIMATION ────────────────────────────
function animateCount(el, target, duration=1200, prefix='', suffix='') {
  const start = performance.now();
  const startVal = 0;
  const easeOut = t => 1 - Math.pow(1-t, 3);
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.round(startVal + (target - startVal) * easeOut(progress));
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ─── SCROLL REVEAL ────────────────────────────────
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animate-slide-up');
        e.target.style.opacity = '1';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  $$('[data-reveal]').forEach(el => {
    el.style.opacity = '0';
    obs.observe(el);
  });
}

// ─── SIDEBAR INIT ────────────────────────────────
function initSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-item').forEach(item => {
    const href = item.getAttribute('href') || '';
    if (href === currentPage || href.includes(currentPage)) item.classList.add('active');
  });
}

// ─── TOPBAR USER ─────────────────────────────────
function renderTopbarUser() {
  const user = Auth.getUser();
  if (!user) return;
  const nameEl = $('#topbar-username');
  const avatarEl = $('#topbar-avatar');
  if (nameEl) nameEl.textContent = user.name || 'User';
  if (avatarEl) avatarEl.textContent = (user.name||'U')[0].toUpperCase();
}

// ─── GLOBAL SEARCH ────────────────────────────────
function initGlobalSearch() {
  const searchInput = document.querySelector('input[placeholder*="Search"]');
  if (!searchInput) return;

  const pages = [
    { label: 'Dashboard', route: 'dashboard', icon: 'fa-chart-line', keywords: 'home overview stats' },
    { label: 'DSA Tracker', route: 'dsa', icon: 'fa-code', keywords: 'leetcode arrays trees dp problems' },
    { label: 'Aptitude Prep', route: 'aptitude', icon: 'fa-brain', keywords: 'maths reasoning percentage profit' },
    { label: 'Mock Interviews', route: 'mock', icon: 'fa-user-tie', keywords: 'interview hr behavioral' },
    { label: 'Study Roadmaps', route: 'roadmaps', icon: 'fa-map', keywords: 'plan schedule phases' },
    { label: 'Task Manager', route: 'tasks', icon: 'fa-list-check', keywords: 'kanban todo tasks' },
    { label: 'Programming Languages', route: 'languages', icon: 'fa-terminal', keywords: 'c java python cpp' },
    { label: 'Core CS Subjects', route: 'core-cs', icon: 'fa-book', keywords: 'os dbms networks oops sql' },
  ];

  let dropdown = null;

  const showDropdown = (results) => {
    if (dropdown) dropdown.remove();
    if (!results.length) return;

    dropdown = document.createElement('div');
    dropdown.style.cssText = `
      position:absolute; top:calc(100% + 8px); left:0; right:0;
      background:#0d0d14; border:1px solid #1f1f2e;
      border-radius:0.75rem; box-shadow:0 12px 30px rgba(0,0,0,0.6);
      z-index:1000; overflow:hidden; animation:slideDown 0.2s ease both;
    `;

    results.forEach(r => {
      const item = document.createElement('div');
      item.style.cssText = 'display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;cursor:pointer;transition:background 0.15s;';
      item.innerHTML = `<i class="fa-solid ${r.icon}" style="color:#6b6b80;width:16px;text-align:center;font-size:0.875rem"></i><span style="font-size:0.875rem;color:#f4f4f6">${r.label}</span>`;
      item.onmouseenter = () => item.style.background = '#16161f';
      item.onmouseleave = () => item.style.background = '';
      item.onclick = () => {
        if (typeof navigateTo === 'function') navigateTo(r.route);
        searchInput.value = '';
        searchInput.blur();
        dropdown?.remove();
        dropdown = null;
      };
      dropdown.appendChild(item);
    });

    const container = searchInput.closest('.relative') || searchInput.parentElement;
    if (container) {
      container.style.position = 'relative';
      container.appendChild(dropdown);
    }
  };

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { dropdown?.remove(); dropdown = null; return; }
    const results = pages.filter(p =>
      p.label.toLowerCase().includes(q) || p.keywords.includes(q)
    );
    showDropdown(results);
  });

  searchInput.addEventListener('blur', () => setTimeout(() => { dropdown?.remove(); dropdown = null; }, 200));
}

// ─── TABS ─────────────────────────────────────────
function initTabs(containerSel = '.tab-btn') {
  $$(containerSel).forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      const parent = btn.closest('[data-tabs]') || document;
      $$(containerSel, parent.parentElement||document).forEach(b => b.classList.remove('active'));
      $$('.tab-content', parent.parentElement||document).forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tc = document.getElementById(target) || $(`[data-tab-content="${target}"]`);
      if (tc) tc.classList.add('active');
    });
  });
}

// ─── DROPDOWNS ────────────────────────────────────
function initDropdowns() {
  $$('[data-dropdown]').forEach(trigger => {
    const menu = document.getElementById(trigger.dataset.dropdown);
    if (!menu) return;
    trigger.addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('active'); });
  });
  document.addEventListener('click', () => $$('.dropdown-menu.active').forEach(m => m.classList.remove('active')));
}

// ─── DASHBOARD USER NAME ──────────────────────────
function initDashboardUser() {
  const nameEl = document.getElementById('user-name');
  if (!nameEl) return;
  const ppUser = Storage.get('pp_current_user') || Storage.get('pp_user');
  if (ppUser) nameEl.textContent = ppUser.name || 'Student';
}

// ─── INIT ALL ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initScrollReveal();
  initTabs();
  initDropdowns();
  renderTopbarUser();
  initDashboardUser();
  // Delay global search init so nav renders first
  setTimeout(initGlobalSearch, 300);
});
