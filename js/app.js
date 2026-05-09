// Navigation Configuration
const NAVIGATION = [
    { id: 'landing',      label: 'Home',                  icon: 'fa-home',              section: 'Main' },
    { id: 'dashboard',    label: 'Dashboard',              icon: 'fa-chart-line',        section: 'Main' },
    { id: 'dsa',          label: 'DSA Tracker',            icon: 'fa-code',              section: 'Preparation' },
    { id: 'aptitude',     label: 'Aptitude Prep',          icon: 'fa-brain',             section: 'Preparation' },
    { id: 'mock',         label: 'Mock Interviews',        icon: 'fa-user-tie',          section: 'Preparation' },
    { id: 'languages',    label: 'Programming Languages',  icon: 'fa-terminal',          section: 'Preparation' },
    { id: 'core-cs',      label: 'Core CS Subjects',       icon: 'fa-book',              section: 'Preparation' },
    { id: 'tasks',        label: 'Task Manager',           icon: 'fa-list-check',        section: 'Tools' },
    { id: 'roadmaps',     label: 'Study Roadmaps',         icon: 'fa-map-location-dot',  section: 'Resources' },
    { id: 'auth',         label: 'Login / Signup',         icon: 'fa-right-to-bracket',  section: 'Account' },
];

// ─── ROUTER HISTORY (back/forward support) ────────────────
let currentRoute = null;
let routeHistory  = [];

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    setupSidebarToggle();
    setupKeyboardShortcuts();

    const initialRoute = window.location.hash.replace('#', '') || 'landing';
    navigateTo(initialRoute, false);
});

// ─── RENDER SIDEBAR NAV ───────────────────────────────────
function renderNavigation() {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu) return;

    let currentSection = '';
    let navHTML = '';

    NAVIGATION.forEach(item => {
        if (item.section !== currentSection) {
            navHTML += `<div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2 px-3">${item.section}</div>`;
            currentSection = item.section;
        }
        navHTML += `
            <a href="#${item.id}"
               class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer mb-0.5 relative overflow-hidden ripple"
               data-route="${item.id}" data-tooltip="${item.label}" aria-label="${item.label}">
                <i class="fa-solid ${item.icon} w-5 text-center transition-colors flex-shrink-0 nav-icon"></i>
                <span class="font-medium text-sm">${item.label}</span>
            </a>
        `;
    });

    navMenu.innerHTML = navHTML;

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const route = e.currentTarget.getAttribute('data-route');
            if (route && route !== currentRoute) navigateTo(route);
            if (window.innerWidth < 1024) toggleSidebar(false);
        });
    });
}

// ─── SIDEBAR TOGGLE ───────────────────────────────────────
function setupSidebarToggle() {
    const openBtn  = document.getElementById('open-sidebar');
    const closeBtn = document.getElementById('close-sidebar');
    const overlay  = document.getElementById('sidebar-overlay');

    openBtn  && openBtn.addEventListener('click',  () => toggleSidebar(true));
    closeBtn && closeBtn.addEventListener('click', () => toggleSidebar(false));
    overlay  && overlay.addEventListener('click',  () => toggleSidebar(false));
}

function toggleSidebar(show) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar) return;

    if (show) {
        sidebar.classList.remove('-translate-x-full');
        if (overlay) {
            overlay.classList.remove('hidden');
            requestAnimationFrame(() => overlay.classList.remove('opacity-0'));
        }
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.add('-translate-x-full');
        if (overlay) {
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 280);
        }
        document.body.style.overflow = '';
    }
}

// ─── KEYBOARD SHORTCUTS ───────────────────────────────────
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', e => {
        // Cmd/Ctrl+K → focus search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('input[placeholder*="Search"]');
            if (searchInput) { searchInput.focus(); searchInput.select(); }
        }
        // Escape → close sidebar on mobile
        if (e.key === 'Escape' && window.innerWidth < 1024) toggleSidebar(false);
        // Backspace in non-input context → go back
        if (e.key === 'Backspace' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) {
            if (routeHistory.length > 1) {
                routeHistory.pop(); // remove current
                const prev = routeHistory.pop();
                if (prev) navigateTo(prev, false);
            }
        }
    });
}

// ─── ROUTER ───────────────────────────────────────────────
function navigateTo(routeId, pushHistory = true) {
    if (!routeId) return;

    // ── External route redirects ─────────────────────
    const externalRoutes = {
        'auth':    'login.html',
        'login':   'login.html',
        'signup':  'signup.html',
        'logout':  'login.html',
    };
    if (externalRoutes[routeId]) {
        // Log out if needed
        if (routeId === 'logout') {
            try { localStorage.removeItem('pp_user'); } catch(e) {}
        }
        window.location.href = externalRoutes[routeId];
        return;
    }

    const loader   = document.getElementById('loader');
    const appRoot  = document.getElementById('app-root');
    const pageTitle= document.getElementById('page-title');

    if (!appRoot) return;

    // Track history
    if (pushHistory) { routeHistory.push(routeId); if (routeHistory.length > 20) routeHistory.shift(); }
    currentRoute = routeId;

    // Show loader
    if (loader) loader.classList.remove('hidden');
    appRoot.style.opacity = '0';
    appRoot.style.transform = 'translateY(8px)';
    appRoot.style.transition = 'opacity 0.18s ease, transform 0.18s ease';

    // Update URL hash without scrolling
    history.replaceState(null, '', '#' + routeId);

    // Update sidebar active state
    document.querySelectorAll('.nav-link').forEach(link => {
        const isActive = link.getAttribute('data-route') === routeId;
        link.classList.toggle('active-route', isActive);
        if (isActive && pageTitle) {
            pageTitle.textContent = link.querySelector('span')?.textContent || routeId;
        }
    });

    // Render page content
    const renderDelay = 150;
    setTimeout(() => {
        if (window.Pages && window.Pages[routeId]) {
            appRoot.innerHTML = window.Pages[routeId]();
        } else {
            appRoot.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full py-20 text-center animate-slide-up">
                    <div class="w-20 h-20 rounded-2xl bg-elevated flex items-center justify-center text-4xl mb-6 text-slate-500 border border-border">
                        <i class="fa-solid fa-person-digging"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-text-primary mb-2">Coming Soon</h2>
                    <p class="text-text-secondary max-w-md mb-6">The <b class="text-text-primary">${routeId}</b> module is currently being built.</p>
                    <button onclick="navigateTo('dashboard')" class="bg-elevated hover:bg-border text-text-primary px-5 py-2 rounded-lg border border-border transition-colors text-sm font-medium">
                        <i class="fa-solid fa-arrow-left mr-2"></i>Back to Dashboard
                    </button>
                </div>
            `;
        }

        // Fade content in
        requestAnimationFrame(() => {
            appRoot.style.opacity = '1';
            appRoot.style.transform = 'translateY(0)';
        });

        if (loader) loader.classList.add('hidden');

        // Run page scripts
        if (window.PageScripts && window.PageScripts[routeId]) {
            setTimeout(() => window.PageScripts[routeId](), 80);
        }

        // Scroll to top of content
        appRoot.parentElement?.scrollTo({ top: 0, behavior: 'instant' });

    }, renderDelay);
}

// ─── BACK/FORWARD BROWSER BUTTON ─────────────────────────
window.addEventListener('popstate', () => {
    const route = window.location.hash.replace('#', '') || 'landing';
    if (route !== currentRoute) navigateTo(route, false);
});
