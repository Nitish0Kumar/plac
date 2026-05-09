window.Pages = {};
window.PageScripts = {};

// 1. Landing / Home Page
window.Pages['landing'] = () => `
<div class="animate-slide-up">
    <!-- Hero Section -->
    <div class="relative overflow-hidden rounded-2xl bg-card p-8 lg:p-12 mb-8 border border-border shadow-md">
        
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
                <span class="inline-block py-1 px-3 rounded-full bg-elevated text-text-secondary border border-border text-xs font-bold tracking-wider mb-4">THE ULTIMATE PLACEMENT PLATFORM</span>
                <h1 class="text-4xl lg:text-5xl font-heading font-extrabold text-text-primary leading-tight mb-4">
                    Track Your Complete <span class="text-gradient">Placement Journey</span> in One Place
                </h1>
                <p class="text-text-secondary text-lg mb-8 max-w-lg leading-relaxed">
                    Master DSA, practice aptitude, simulate mock interviews, and build an outstanding resume. Stop jumping between tools—start preparing smarter.
                </p>
                <div class="flex flex-wrap gap-4">
                    <button onclick="navigateTo('dashboard')" class="bg-primary hover:bg-primary-hover text-text-primary font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                        Start Preparing Free <i class="fa-solid fa-arrow-right"></i>
                    </button>
                    <button onclick="navigateTo('roadmaps')" class="bg-elevated text-text-primary hover:bg-border font-semibold py-3 px-6 rounded-lg transition-colors border border-border">
                        View Roadmaps
                    </button>
                </div>
            </div>
            
            <div class="hidden lg:block relative">
                <!-- Abstract 3D/Card representation -->
                <div class="bg-elevated rounded-xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-border shadow-lg relative z-10">
                    <div class="flex justify-between items-center mb-6">
                        <div class="h-3 w-1/3 bg-slate-700 rounded"></div>
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center text-green-400"><i class="fa-solid fa-check"></i></div>
                            <div class="flex-1"><div class="h-2 w-3/4 bg-slate-700 rounded mb-2"></div><div class="h-2 w-1/2 bg-elevated rounded"></div></div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary"><i class="fa-solid fa-code"></i></div>
                            <div class="flex-1"><div class="h-2 w-5/6 bg-slate-700 rounded mb-2"></div><div class="h-2 w-1/3 bg-elevated rounded"></div></div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded bg-purple-500/20 flex items-center justify-center text-purple-400"><i class="fa-solid fa-briefcase"></i></div>
                            <div class="flex-1"><div class="h-2 w-2/3 bg-slate-700 rounded mb-2"></div><div class="h-2 w-1/4 bg-elevated rounded"></div></div>
                        </div>
                    </div>
                </div>
                <!-- Background decorative card -->
                <div class="absolute inset-0 bg-border rounded-xl transform -rotate-3 scale-95 opacity-50"></div>
            </div>
        </div>
    </div>

    <!-- Features Grid -->
    <div class="mb-12">
        <h2 class="text-2xl font-heading font-bold text-text-primary mb-6">Everything you need to get placed</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Feature 1 -->
            <div class="glass-panel p-6 rounded-xl hover-glow cursor-pointer " onclick="navigateTo('dsa')">
                <div class="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-4">
                    <i class="fa-solid fa-laptop-code"></i>
                </div>
                <h3 class="text-lg font-bold text-text-primary mb-2">DSA Tracker</h3>
                <p class="text-text-muted text-sm">Track LeetCode, Codeforces & GFG progress. Topic-wise filtering and revisions.</p>
            </div>
            
            <!-- Feature 2 -->
            <div class="glass-panel p-6 rounded-xl hover-glow cursor-pointer " onclick="navigateTo('mock')">
                <div class="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-4">
                    <i class="fa-solid fa-user-tie"></i>
                </div>
                <h3 class="text-lg font-bold text-text-primary mb-2">Mock Interviews</h3>
                <p class="text-text-muted text-sm">Simulate AI interviews, practice HR rounds, and get behavioral analysis.</p>
            </div>

            <!-- Feature 3 -->
            <div class="glass-panel p-6 rounded-xl hover-glow cursor-pointer " onclick="navigateTo('tasks')">
                <div class="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl mb-4">
                    <i class="fa-solid fa-list-check"></i>
                </div>
                <h3 class="text-lg font-bold text-text-primary mb-2">Task Manager</h3>
                <p class="text-text-muted text-sm">Organize your preparation schedule with an interactive Kanban board.</p>
            </div>

            <!-- Feature 4 -->
            <div class="glass-panel p-6 rounded-xl hover-glow cursor-pointer " onclick="navigateTo('aptitude')">
                <div class="w-12 h-12 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center text-2xl mb-4">
                    <i class="fa-solid fa-brain"></i>
                </div>
                <h3 class="text-lg font-bold text-text-primary mb-2">Aptitude Prep</h3>
                <p class="text-text-muted text-sm">Practice quantitative, logical, and verbal aptitude for placements.</p>
            </div>
        </div>
    </div>
    
    <!-- Stats Banner -->
    <div class="glass-panel rounded-xl p-8  text-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <div class="text-3xl font-heading font-bold text-text-primary mb-1">500+</div>
                <div class="text-text-muted text-sm uppercase tracking-wide">DSA Problems</div>
            </div>
            <div>
                <div class="text-3xl font-heading font-bold text-text-primary mb-1">50+</div>
                <div class="text-text-muted text-sm uppercase tracking-wide">Company Archives</div>
            </div>
            <div>
                <div class="text-3xl font-heading font-bold text-text-primary mb-1">100+</div>
                <div class="text-text-muted text-sm uppercase tracking-wide">System Design Cases</div>
            </div>
            <div>
                <div class="text-3xl font-heading font-bold text-text-primary mb-1">10k+</div>
                <div class="text-text-muted text-sm uppercase tracking-wide">Active Students</div>
            </div>
        </div>
    </div>
</div>
`;

// 2. Dashboard Page
window.Pages['dashboard'] = () => `
<div class="animate-slide-up space-y-6">
    
    <!-- Welcome Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
            <h1 class="text-3xl font-heading font-bold text-text-primary">Welcome back, Student! 👋</h1>
            <p class="text-text-muted mt-1">Here is a summary of your placement preparation progress.</p>
        </div>
        <button class="bg-elevated hover:bg-slate-700 text-text-primary px-4 py-2 rounded-lg border border-border transition-colors text-sm font-medium flex items-center gap-2">
            <i class="fa-solid fa-download"></i> Download Report
        </button>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Stat 1 -->
        <div class="glass-panel p-5 rounded-xl  relative overflow-hidden group">
            <div class="absolute -right-4 -bottom-4 text-slate-800 text-6xl opacity-30 group-hover:scale-110 transition-transform"><i class="fa-solid fa-fire"></i></div>
            <div class="flex justify-between items-start relative z-10">
                <div>
                    <p class="text-text-muted text-sm font-medium">Daily Streak</p>
                    <h3 id="stat-streak" class="text-2xl font-bold text-text-primary mt-1">0 Days</h3>
                </div>
                <div class="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center"><i class="fa-solid fa-fire text-lg"></i></div>
            </div>
            <p class="text-xs text-emerald-400 mt-3 font-medium relative z-10"><i class="fa-solid fa-arrow-trend-up"></i> Keep it up!</p>
        </div>

        <!-- Stat 2 -->
        <div class="glass-panel p-5 rounded-xl  relative overflow-hidden group">
            <div class="absolute -right-4 -bottom-4 text-slate-800 text-6xl opacity-30 group-hover:scale-110 transition-transform"><i class="fa-solid fa-code"></i></div>
            <div class="flex justify-between items-start relative z-10">
                <div>
                    <p class="text-text-muted text-sm font-medium">Problems Solved</p>
                    <h3 id="stat-dsa-solved" class="text-2xl font-bold text-text-primary mt-1">0 / 450</h3>
                </div>
                <div class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center"><i class="fa-solid fa-code text-lg"></i></div>
            </div>
            <div class="w-full bg-elevated rounded-full h-1.5 mt-4 relative z-10">
                <div id="stat-dsa-bar" class="bg-blue-500 h-1.5 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>

        <!-- Stat 3 -->
        <div class="glass-panel p-5 rounded-xl  relative overflow-hidden group">
            <div class="absolute -right-4 -bottom-4 text-slate-800 text-6xl opacity-30 group-hover:scale-110 transition-transform"><i class="fa-solid fa-brain"></i></div>
            <div class="flex justify-between items-start relative z-10">
                <div>
                    <p class="text-text-muted text-sm font-medium">Aptitude Modules</p>
                    <h3 id="stat-aptitude" class="text-2xl font-bold text-text-primary mt-1">0 / 0</h3>
                </div>
                <div class="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center"><i class="fa-solid fa-brain text-lg"></i></div>
            </div>
            <div class="w-full bg-elevated rounded-full h-1.5 mt-4 relative z-10">
                <div id="stat-aptitude-bar" class="bg-purple-500 h-1.5 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>

        <!-- Stat 4 -->
        <div class="glass-panel p-5 rounded-xl  relative overflow-hidden group">
            <div class="absolute -right-4 -bottom-4 text-slate-800 text-6xl opacity-30 group-hover:scale-110 transition-transform"><i class="fa-solid fa-check-double"></i></div>
            <div class="flex justify-between items-start relative z-10">
                <div>
                    <p class="text-text-muted text-sm font-medium">Pending Tasks</p>
                    <h3 id="stat-pending-tasks" class="text-2xl font-bold text-text-primary mt-1">0</h3>
                </div>
                <div class="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center"><i class="fa-solid fa-list-check text-lg"></i></div>
            </div>
            <p id="stat-pending-desc" class="text-xs text-text-muted mt-3 font-medium relative z-10">0 due today</p>
        </div>
    </div>

    <!-- Charts and Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Main Chart -->
        <div class="lg:col-span-2 glass-panel p-6 rounded-xl ">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-heading font-semibold text-text-primary">Activity Overview</h3>
                <select class="bg-elevated border border-border text-xs text-text-secondary rounded p-1.5 focus:ring-primary focus:border-primary">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                </select>
            </div>
            <div class="relative h-64 w-full">
                <canvas id="activityChart"></canvas>
            </div>
        </div>

        <!-- Upcoming Tasks -->
        <div class="glass-panel p-6 rounded-xl  flex flex-col">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-heading font-semibold text-text-primary">Today's Goals</h3>
                <span class="text-xs text-text-muted" id="goals-count">0/0 Done</span>
            </div>
            
            <form id="add-goal-form" class="flex gap-2 mb-4 shrink-0">
                <input type="text" id="new-goal-input" placeholder="Add a new goal..." class="flex-1 bg-elevated border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-primary" autocomplete="off">
                <button type="submit" class="bg-primary text-dark px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </form>
            
            <div id="dashboard-goals-container" class="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1 max-h-64">
                <!-- Rendered by JS -->
            </div>

            <button onclick="navigateTo('tasks')" class="w-full mt-4 py-2 text-sm text-primary font-medium hover:text-text-primary hover:bg-primary/10 rounded-lg transition-colors border border-primary">
                View All Tasks
            </button>
        </div>
    </div>
</div>
`;

window.PageScripts['dashboard'] = () => {
    const ctx = document.getElementById('activityChart');
    if (!ctx) return;
    
    // Destroy existing chart if any (to prevent overlap when navigating back)
    if (window.activityChartInstance) {
        window.activityChartInstance.destroy();
    }

    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', sans-serif";

    // Generate deterministic 7-day activity curve based on total solved
    const generateActivity = (total) => {
        if (total === 0) return [0, 0, 0, 0, 0, 0, 0];
        const curve = [0.10, 0.15, 0.05, 0.20, 0.12, 0.25, 0.13];
        let data = curve.map(w => Math.floor(w * total));
        let sum = data.reduce((a, b) => a + b, 0);
        data[6] += (total - sum);
        return data;
    };

    const dsaProgress = Storage.get('pp_dsa_progress', {});
    const dsaDone = Object.values(dsaProgress).filter(Boolean).length;
    
    const aptProgress = Storage.get('pp_aptitude_progress', {});
    const aptDone = window.APTITUDE_PROBLEMS ? window.APTITUDE_PROBLEMS.filter(p => aptProgress[p.id]).length : 0;

    const dsaActivity = generateActivity(dsaDone);
    const aptActivity = generateActivity(aptDone);

    window.activityChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Problems Solved',
                data: dsaActivity,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#0f172a',
                pointBorderColor: '#6366f1',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: 'Aptitude Modules',
                data: aptActivity,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.0)',
                borderWidth: 2,
                tension: 0.4,
                borderDash: [5, 5],
                pointBackgroundColor: '#0f172a',
                pointBorderColor: '#10b981',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: { boxWidth: 12, usePointStyle: true }
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#f8fafc',
                    bodyColor: '#cbd5e1',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 10,
                    boxPadding: 4
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#334155', drawBorder: false },
                    ticks: { stepSize: 2 }
                },
                x: {
                    grid: { display: false, drawBorder: false }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
        }
    });

    // --- Goals Logic ---
    const goalsContainer = document.getElementById('dashboard-goals-container');
    const goalsForm = document.getElementById('add-goal-form');
    const goalsInput = document.getElementById('new-goal-input');
    const goalsCount = document.getElementById('goals-count');

    const defaultGoals = [
        { id: 1, text: "Solve 3 Graph DP Problems", tag: "DSA Tracker", done: false },
        { id: 2, text: "Revise OS Virtual Memory", tag: "Core CS", done: false },
        { id: 3, text: "Mock Interview with Alex", tag: "Interviews", done: false }
    ];

    let goals = Storage.get('pp_todays_goals', defaultGoals);

    const saveGoals = () => Storage.set('pp_todays_goals', goals);

    window.toggleDashboardGoal = (id) => {
        const goal = goals.find(g => g.id === id);
        if(goal) {
            goal.done = !goal.done;
            saveGoals();
            renderGoals();
        }
    };

    window.removeDashboardGoal = (id, event) => {
        event.stopPropagation();
        goals = goals.filter(g => g.id !== id);
        saveGoals();
        renderGoals();
    };

    const renderGoals = () => {
        if(!goalsContainer) return;

        let doneCount = goals.filter(g => g.done).length;
        let pendingCount = goals.length - doneCount;

        if(goalsCount) goalsCount.textContent = `${doneCount}/${goals.length} Done`;

        // Update Stat Card
        const statPendingTasks = document.getElementById('stat-pending-tasks');
        const statPendingDesc = document.getElementById('stat-pending-desc');
        if(statPendingTasks) statPendingTasks.textContent = pendingCount;
        if(statPendingDesc) statPendingDesc.textContent = `${pendingCount} due today`;

        if(goals.length === 0) {
            goalsContainer.innerHTML = '<div class="p-4 text-center text-text-muted text-sm border border-dashed border-border rounded-lg">No goals for today. Add one above!</div>';
            return;
        }

        goalsContainer.innerHTML = goals.map(g => `
            <div class="flex gap-3 items-start p-3 rounded-lg bg-elevated/50 hover:bg-elevated transition-colors cursor-pointer group" onclick="window.toggleDashboardGoal(${g.id})">
                <button class="mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${g.done ? 'bg-primary border-primary text-dark' : 'bg-card border-border-hover text-transparent group-hover:border-primary'}">
                    <i class="fa-solid fa-check text-[10px]"></i>
                </button>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium ${g.done ? 'text-text-muted line-through' : 'text-text-primary'} truncate">${g.text}</p>
                    ${g.tag ? `<p class="text-xs text-text-secondary mt-0.5">${g.tag}</p>` : ''}
                </div>
                <button onclick="window.removeDashboardGoal(${g.id}, event)" class="text-text-muted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                </button>
            </div>
        `).join('');
    };

    goalsForm && goalsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = goalsInput.value.trim();
        if(!text) return;

        goals.unshift({
            id: Date.now(),
            text: text,
            tag: "Custom Goal",
            done: false
        });

        saveGoals();
        goalsInput.value = '';
        renderGoals();
    });

    renderGoals();

    // --- Dynamic Metrics Update ---
    setTimeout(() => {
        // DSA
        if (window.DSA_PROBLEMS) {
            const dsaProgress = Storage.get('pp_dsa_progress', {});
            const dsaTotal = window.DSA_PROBLEMS.length;
            const dsaDone = Object.values(dsaProgress).filter(Boolean).length;
            const dsaPct = dsaTotal ? Math.round((dsaDone / dsaTotal) * 100) : 0;
            
            const statDSASolved = document.getElementById('stat-dsa-solved');
            const statDSABar = document.getElementById('stat-dsa-bar');
            if (statDSASolved) statDSASolved.textContent = `${dsaDone} / ${dsaTotal}`;
            if (statDSABar) statDSABar.style.width = `${dsaPct}%`;
        }

        // Aptitude
        if (window.APTITUDE_PROBLEMS) {
            const aptProgress = Storage.get('pp_aptitude_progress', {});
            const aptTotal = window.APTITUDE_PROBLEMS.length;
            const aptDone = window.APTITUDE_PROBLEMS.filter(p => aptProgress[p.id]).length;
            const aptPct = aptTotal ? Math.round((aptDone / aptTotal) * 100) : 0;
            
            const statApt = document.getElementById('stat-aptitude');
            const statAptBar = document.getElementById('stat-aptitude-bar');
            if (statApt) statApt.textContent = `${aptDone} / ${aptTotal}`;
            if (statAptBar) statAptBar.style.width = `${aptPct}%`;
        }

        // Streak
        const streak = Storage.get('pp_streak', 0);
        const statStreak = document.getElementById('stat-streak');
        if (statStreak) statStreak.textContent = `${streak} Days`;
    }, 100);
};



// 3. DSA Tracker
window.Pages['dsa'] = () => `
<div class="animate-slide-up space-y-6">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
            <h1 class="text-3xl font-heading font-bold text-text-primary">DSA Tracker</h1>
            <p class="text-text-muted mt-1">Track your progress across 450+ curated problems.</p>
        </div>
        <div class="flex gap-2">
            <select id="dsa-topic-dropdown" onchange="window.selectDSATopic(this.value)" class="bg-elevated border border-border text-sm text-text-secondary rounded-lg p-2 focus:ring-primary focus:border-primary">
                <option value="All Topics">All Topics</option>
                <option value="Arrays & Hashing">Arrays & Hashing</option>
                <option value="Two Pointers">Two Pointers</option>
                <option value="Sliding Window">Sliding Window</option>
                <option value="Stack">Stack</option>
                <option value="Binary Search">Binary Search</option>
                <option value="Linked List">Linked List</option>
                <option value="Trees">Trees</option>
                <option value="Graphs">Graphs</option>
                <option value="Dynamic Programming">Dynamic Programming</option>
                <option value="Backtracking">Backtracking</option>
                <option value="Heap / Priority Queue">Heap / Priority Queue</option>
                <option value="Greedy">Greedy</option>
            </select>
            <select id="dsa-difficulty-filter" onchange="window.selectDSADifficulty(this.value)" class="bg-elevated border border-border text-sm text-text-secondary rounded-lg p-2 focus:ring-primary focus:border-primary">
                <option value="All">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>
    </div>

    <!-- Progress overview -->
    <div class="glass-panel p-6 rounded-xl">
        <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-text-secondary" id="dsa-overall-text">Overall Progress</span>
            <span class="text-sm font-bold text-primary" id="dsa-overall-percentage">0%</span>
        </div>
        <div class="w-full bg-elevated rounded-full h-2.5">
            <div id="dsa-overall-bar" class="bg-primary h-2.5 rounded-full transition-all duration-500" style="width: 0%"></div>
        </div>
    </div>

    <!-- Topic Cards -->
    <div id="dsa-topics-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Rendered by JS -->
    </div>

    <!-- Problems Table -->
    <div class="glass-panel rounded-xl overflow-hidden mt-8">
        <div class="p-4 border-b border-border flex justify-between items-center bg-elevated/30">
            <h3 class="font-bold text-lg text-text-primary" id="dsa-table-title">All Topics Questions</h3>
            <span class="text-xs text-text-muted px-2 py-1 bg-elevated rounded" id="dsa-table-count">0 Questions</span>
        </div>
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-elevated/50 border-b border-border">
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Status</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Problem</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Difficulty</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Platform</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-border" id="dsa-table-body">
                <!-- Rendered by JS -->
            </tbody>
        </table>
    </div>
</div>
`;

window.dsaState = {
    selectedTopic: 'All Topics',
    selectedDifficulty: 'All'
};

window.PageScripts = window.PageScripts || {};
window.PageScripts['dsa'] = () => {
    window.selectDSATopic('All Topics');
};

window.selectDSATopic = (topic) => {
    window.dsaState.selectedTopic = topic;
    const dropdown = document.getElementById('dsa-topic-dropdown');
    if (dropdown) dropdown.value = topic;
    window.renderDSATopics();
    window.renderDSATable();
    window.updateDSAProgress();
    
    // Smooth scroll down to the table if a specific topic is clicked
    if (topic !== 'All Topics') {
        const tableContainer = document.getElementById('dsa-table-title');
        if (tableContainer) {
            tableContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
};

window.selectDSADifficulty = (diff) => {
    window.dsaState.selectedDifficulty = diff;
    window.renderDSATable();
};

window.updateDSAProgress = () => {
    const problems = window.DSA_PROBLEMS || [];
    if (!problems.length) return;
    
    const total = problems.length;
    const completed = problems.filter(p => p.done).length;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('dsa-overall-text').textContent = `Overall Progress (${completed}/${total})`;
    document.getElementById('dsa-overall-percentage').textContent = `${percentage}%`;
    document.getElementById('dsa-overall-bar').style.width = `${percentage}%`;
};

window.renderDSATopics = () => {
    const grid = document.getElementById('dsa-topics-grid');
    if (!grid) return;
    
    const problems = window.DSA_PROBLEMS || [];
    
    // Group by topic
    const topicStats = {};
    problems.forEach(p => {
        if (!topicStats[p.topic]) topicStats[p.topic] = { total: 0, done: 0 };
        topicStats[p.topic].total++;
        if (p.done) topicStats[p.topic].done++;
    });
    
    // Create All Topics card
    const allTotal = problems.length;
    const allDone = problems.filter(p => p.done).length;
    const allPct = allTotal ? Math.round((allDone / allTotal) * 100) : 0;
    const isAllSelected = window.dsaState.selectedTopic === 'All Topics';
    
    let html = `
    <div onclick="window.selectDSATopic('All Topics')" class="glass-panel p-5 rounded-xl transition-colors cursor-pointer group ${isAllSelected ? 'border-primary shadow-primary/20 bg-primary/5' : 'hover:border-border-hover'}">
        <div class="flex justify-between items-start mb-4">
            <h3 class="font-semibold text-lg ${isAllSelected ? 'text-primary' : 'text-text-primary group-hover:text-primary'} transition-colors">All Topics</h3>
            <span class="text-xs font-medium px-2 py-1 bg-elevated text-text-muted rounded">${allDone}/${allTotal}</span>
        </div>
        <div class="w-full bg-elevated rounded-full h-1.5 mb-3">
            <div class="bg-primary h-1.5 rounded-full" style="width: ${allPct}%"></div>
        </div>
        <p class="text-xs text-text-muted">Overview of all ${allTotal} problems</p>
    </div>
    `;
    
    // Create specific topic cards
    Object.keys(topicStats).forEach(topic => {
        const stats = topicStats[topic];
        const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
        const isSelected = window.dsaState.selectedTopic === topic;
        
        // Find a representative problem for the subtitle
        const repProb = problems.find(p => p.topic === topic)?.title || 'Problems';
        
        html += `
        <div onclick="window.selectDSATopic('${topic}')" class="glass-panel p-5 rounded-xl transition-colors cursor-pointer group ${isSelected ? 'border-primary shadow-primary/20 bg-primary/5' : 'hover:border-border-hover'}">
            <div class="flex justify-between items-start mb-4">
                <h3 class="font-semibold text-lg ${isSelected ? 'text-primary' : 'text-text-primary group-hover:text-primary'} transition-colors">${topic}</h3>
                <span class="text-xs font-medium px-2 py-1 bg-elevated text-text-muted rounded">${stats.done}/${stats.total}</span>
            </div>
            <div class="w-full bg-elevated rounded-full h-1.5 mb-3">
                <div class="bg-primary h-1.5 rounded-full" style="width: ${pct}%"></div>
            </div>
            <p class="text-xs text-text-muted truncate">${repProb} + ${Math.max(0, stats.total - 1)} more</p>
        </div>
        `;
    });
    
    grid.innerHTML = html;
};

window.toggleProblemDone = (id) => {
    const problems = window.DSA_PROBLEMS || [];
    const p = problems.find(p => p.id === id);
    if (p) {
        p.done = !p.done;
        window.renderDSATopics();
        window.renderDSATable();
        window.updateDSAProgress();
    }
};

window.renderDSATable = () => {
    const tbody = document.getElementById('dsa-table-body');
    if (!tbody) return;
    
    let problems = window.DSA_PROBLEMS || [];
    const topic = window.dsaState.selectedTopic;
    const diff = window.dsaState.selectedDifficulty;
    
    // Filter
    if (topic !== 'All Topics') {
        problems = problems.filter(p => p.topic === topic);
    }
    if (diff !== 'All') {
        problems = problems.filter(p => p.difficulty === diff);
    }
    
    // Update Title
    document.getElementById('dsa-table-title').textContent = topic === 'All Topics' ? 'All Problems' : `${topic} Problems`;
    document.getElementById('dsa-table-count').textContent = `${problems.length} Questions`;
    
    if (problems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-text-muted">No problems found for these filters.</td></tr>`;
        return;
    }
    
    let html = '';
    problems.forEach(prob => {
        let diffColor = 'bg-emerald-500/10 text-emerald-500';
        if (prob.difficulty === 'Medium') diffColor = 'bg-yellow-500/10 text-yellow-500';
        if (prob.difficulty === 'Hard') diffColor = 'bg-red-500/10 text-red-500';
        
        html += `
        <tr class="hover:bg-elevated/30 transition-colors group">
            <td class="p-4">
                <div onclick="window.toggleProblemDone(${prob.id})" class="w-5 h-5 rounded border ${prob.done ? 'bg-accent border-accent text-dark' : 'border-text-muted'} flex items-center justify-center cursor-pointer transition-colors hover:border-accent">
                    ${prob.done ? '<i class="fa-solid fa-check text-xs"></i>' : ''}
                </div>
            </td>
            <td class="p-4 font-medium text-text-primary group-hover:text-primary transition-colors">
                <a href="${prob.link}" target="_blank" class="hover:underline block truncate max-w-xs md:max-w-md">${prob.title}</a>
                <span class="block text-[10px] text-text-muted mt-0.5">${prob.topic}</span>
            </td>
            <td class="p-4">
                <span class="px-2.5 py-1 text-xs font-medium rounded-full ${diffColor}">
                    ${prob.difficulty}
                </span>
            </td>
            <td class="p-4 text-sm text-text-muted whitespace-nowrap"><i class="fa-solid fa-laptop-code mr-1"></i> LeetCode</td>
            <td class="p-4">
                <a href="${prob.link}" target="_blank" class="text-xs bg-elevated hover:bg-border-hover border border-border text-text-primary px-3 py-1.5 rounded transition-colors inline-block whitespace-nowrap">Solve</a>
            </td>
        </tr>
        `;
    });
    
    tbody.innerHTML = html;
};

// 4. Mock Interviews

window.Pages['mock'] = () => `
<div class="animate-slide-up space-y-6">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
            <h1 class="text-3xl font-heading font-bold text-text-primary">AI Mock Interviews</h1>
            <p class="text-text-muted mt-1">Practice with our conversational AI and get instant feedback.</p>
        </div>
        <button class="bg-primary hover:bg-primary-hover text-text-primary font-semibold py-2 px-6 rounded-lg transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
            <i class="fa-solid fa-play"></i> Start New Interview
        </button>
    </div>

    <!-- Active Interview Card -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 glass-panel p-1 rounded-xl  overflow-hidden relative">
            <div class="aspect-video bg-card w-full rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                <!-- AI Avatar Video Placeholder -->
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                
                <div class="relative z-10 text-center">
                    <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/50 relative">
                        <i class="fa-solid fa-robot text-3xl text-primary animate-pulse"></i>
                        <span class="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                    </div>
                    <h3 class="text-xl font-bold text-text-primary mb-2">Technical Interviewer AI</h3>
                    <p class="text-text-muted text-sm max-w-md mx-auto">Ready to begin your SDE-1 technical round. Ensure your microphone and camera are connected.</p>
                </div>
                
                <!-- Controls -->
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-elevated/80 backdrop-blur-md px-6 py-3 rounded-full border border-border">
                    <button class="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-text-primary transition-colors">
                        <i class="fa-solid fa-microphone"></i>
                    </button>
                    <button class="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-text-primary transition-colors">
                        <i class="fa-solid fa-video"></i>
                    </button>
                    <button class="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-text-primary transition-colors">
                        <i class="fa-solid fa-phone-slash"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Interview Setup -->
        <div class="glass-panel p-6 rounded-xl  flex flex-col">
            <h3 class="font-semibold text-lg text-text-primary mb-4">Interview Settings</h3>
            <div class="space-y-4 flex-1">
                <div>
                    <label class="block text-xs font-medium text-text-muted mb-1">Target Role</label>
                    <select class="w-full bg-elevated border border-border text-sm text-text-secondary rounded-lg p-2.5 focus:ring-primary focus:border-primary">
                        <option>Software Engineer (SDE-1)</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Data Analyst</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-medium text-text-muted mb-1">Company Pattern</label>
                    <select class="w-full bg-elevated border border-border text-sm text-text-secondary rounded-lg p-2.5 focus:ring-primary focus:border-primary">
                        <option>Generic MNC</option>
                        <option>Amazon</option>
                        <option>Google</option>
                        <option>Microsoft</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-medium text-text-muted mb-1">Interview Type</label>
                    <div class="grid grid-cols-2 gap-2 mt-1">
                        <div class="border border-primary bg-primary/10 rounded-lg p-2 text-center text-xs font-medium text-primary cursor-pointer">Technical</div>
                        <div class="border border-border bg-elevated rounded-lg p-2 text-center text-xs font-medium text-text-muted cursor-pointer hover:border-slate-500">HR / Behavioral</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Past Feedback -->
    <div>
        <h3 class="text-lg font-heading font-semibold text-text-primary mb-4 mt-8">Past Performance</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="glass-panel p-5 rounded-xl  flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-lg border border-emerald-500/20">A-</div>
                    <div>
                        <h4 class="font-medium text-text-primary">Amazon SDE-1 Mock</h4>
                        <p class="text-xs text-text-muted">Oct 12 • 45 mins • Technical</p>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right text-slate-600 group-hover:text-primary transition-colors"></i>
            </div>
            <div class="glass-panel p-5 rounded-xl  flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-lg border border-yellow-500/20">B+</div>
                    <div>
                        <h4 class="font-medium text-text-primary">Behavioral Round</h4>
                        <p class="text-xs text-text-muted">Oct 05 • 30 mins • HR</p>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right text-slate-600 group-hover:text-primary transition-colors"></i>
            </div>
        </div>
    </div>
</div>
`;

// 5. Task Manager
window.Pages['tasks'] = () => `
<div class="animate-slide-up h-[calc(100vh-8rem)] flex flex-col">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 shrink-0">
        <div>
            <h1 class="text-3xl font-heading font-bold text-text-primary">Task Manager</h1>
            <p class="text-text-secondary mt-1">Organize your preparation with a Kanban board.</p>
        </div>
        <div class="flex gap-3">
            <button onclick="window.openTaskModal()" class="bg-primary hover:bg-primary-hover text-text-primary px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/20">
                <i class="fa-solid fa-plus"></i> New Task
            </button>
        </div>
    </div>

    <!-- Kanban Board -->
    <div class="flex-1 overflow-x-auto custom-scrollbar flex gap-6 pb-4">
        <!-- To Do -->
        <div class="w-80 shrink-0 flex flex-col bg-elevated/30 rounded-xl border border-border p-4">
            <h3 class="font-bold text-text-primary mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-slate-400"></span> To Do (<span id="count-todo">0</span>)</h3>
            <div id="col-todo" class="flex-1 overflow-y-auto custom-scrollbar space-y-3 min-h-[100px] rounded-lg p-1" ondrop="window.dropTask(event, 'todo')" ondragover="window.allowDrop(event)"></div>
        </div>

        <!-- In Progress -->
        <div class="w-80 shrink-0 flex flex-col bg-elevated/30 rounded-xl border border-border p-4">
            <h3 class="font-bold text-text-primary mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-500"></span> In Progress (<span id="count-inprogress">0</span>)</h3>
            <div id="col-inprogress" class="flex-1 overflow-y-auto custom-scrollbar space-y-3 min-h-[100px] rounded-lg p-1" ondrop="window.dropTask(event, 'inprogress')" ondragover="window.allowDrop(event)"></div>
        </div>

        <!-- Done -->
        <div class="w-80 shrink-0 flex flex-col bg-elevated/30 rounded-xl border border-border p-4">
            <h3 class="font-bold text-text-primary mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Done (<span id="count-done">0</span>)</h3>
            <div id="col-done" class="flex-1 overflow-y-auto custom-scrollbar space-y-3 min-h-[100px] rounded-lg p-1" ondrop="window.dropTask(event, 'done')" ondragover="window.allowDrop(event)"></div>
        </div>
    </div>
</div>

<!-- Add Task Modal -->
<div id="task-modal" class="fixed inset-0 bg-black/60 z-50 hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-sm">
    <div id="task-modal-content" class="bg-card border border-border w-full max-w-md rounded-xl shadow-2xl p-6 transform scale-95 transition-transform duration-300">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-text-primary">Add New Task</h3>
            <button onclick="window.closeTaskModal()" class="text-text-muted hover:text-text-primary"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <form id="task-form" onsubmit="window.saveNewTask(event)">
            <div class="mb-4">
                <label class="block text-sm font-medium text-text-secondary mb-1">Task Title</label>
                <input type="text" id="task-title" required class="w-full bg-elevated border border-border text-text-primary rounded-lg p-2.5 focus:border-primary outline-none" placeholder="e.g. Solve 5 DP problems">
            </div>
            <div class="mb-6">
                <label class="block text-sm font-medium text-text-secondary mb-1">Description (Optional)</label>
                <textarea id="task-desc" class="w-full bg-elevated border border-border text-text-primary rounded-lg p-2.5 focus:border-primary outline-none h-20" placeholder="Details..."></textarea>
            </div>
            <div class="flex justify-end gap-3">
                <button type="button" onclick="window.closeTaskModal()" class="px-4 py-2 rounded-lg font-medium text-text-secondary hover:bg-elevated transition-colors">Cancel</button>
                <button type="submit" class="px-4 py-2 rounded-lg font-medium bg-primary text-text-primary hover:bg-primary-hover transition-colors">Add Task</button>
            </div>
        </form>
    </div>
</div>
`;

// 4. Aptitude Prep
window.Pages['aptitude'] = () => `
<div class="animate-slide-up space-y-6">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
            <h1 class="text-3xl font-heading font-bold text-text-primary">Aptitude Prep</h1>
            <p class="text-text-muted mt-1">Master Maths Aptitude, Reasoning, and Verbal Ability with IndiaBix.</p>
        </div>
        <div class="flex gap-2">
            <select id="aptitude-category-dropdown" onchange="window.selectAptitudeCategory(this.value)" class="bg-elevated border border-border text-sm text-text-secondary rounded-lg p-2 focus:ring-primary focus:border-primary">
                <option value="All Categories">All Categories</option>
                <option value="Maths Aptitude">Maths Aptitude</option>
                <option value="Reasoning">Reasoning</option>
                <option value="Verbal Ability">Verbal Ability</option>
            </select>
        </div>
    </div>

    <!-- Progress overview -->
    <div class="glass-panel p-6 rounded-xl">
        <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-text-secondary" id="aptitude-overall-text">Overall Practice Progress</span>
            <span class="text-sm font-bold text-primary" id="aptitude-overall-percentage">0%</span>
        </div>
        <div class="w-full bg-elevated rounded-full h-2.5">
            <div id="aptitude-overall-bar" class="bg-primary h-2.5 rounded-full transition-all duration-500" style="width: 0%"></div>
        </div>
    </div>

    <!-- Category Cards -->
    <div id="aptitude-topics-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Rendered by JS -->
    </div>

    <!-- Practice Sets Table -->
    <div class="glass-panel rounded-xl overflow-hidden mt-8">
        <div class="p-4 border-b border-border flex justify-between items-center bg-elevated/30">
            <h3 class="font-bold text-lg text-text-primary" id="aptitude-table-title">All Topics</h3>
            <span class="text-xs text-text-muted px-2 py-1 bg-elevated rounded" id="aptitude-table-count">0 Topics</span>
        </div>
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-elevated/50 border-b border-border">
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Status</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Topic</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Category</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Platform</th>
                    <th class="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-border" id="aptitude-table-body">
                <!-- Rendered by JS -->
            </tbody>
        </table>
    </div>
</div>
`;

window.aptitudeState = {
    selectedCategory: 'All Categories'
};

window.PageScripts = window.PageScripts || {};
window.PageScripts['aptitude'] = () => {
    window.selectAptitudeCategory('All Categories');
};

window.selectAptitudeCategory = (cat) => {
    window.aptitudeState.selectedCategory = cat;
    const dropdown = document.getElementById('aptitude-category-dropdown');
    if (dropdown) dropdown.value = cat;
    window.renderAptitudeTopics();
    window.renderAptitudeTable();
    window.updateAptitudeProgress();
    
    // Smooth scroll down to the table if a specific category is clicked
    if (cat !== 'All Categories') {
        const tableContainer = document.getElementById('aptitude-table-title');
        if (tableContainer) {
            tableContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
};

window.updateAptitudeProgress = () => {
    const problems = window.APTITUDE_PROBLEMS || [];
    if (!problems.length) return;
    
    const total = problems.length;
    const completed = problems.filter(p => p.done).length;
    const percentage = Math.round((completed / total) * 100);
    
    const textEl = document.getElementById('aptitude-overall-text');
    const pctEl = document.getElementById('aptitude-overall-percentage');
    const barEl = document.getElementById('aptitude-overall-bar');
    
    if (textEl) textEl.textContent = `Overall Practice Progress (${completed}/${total})`;
    if (pctEl) pctEl.textContent = `${percentage}%`;
    if (barEl) barEl.style.width = `${percentage}%`;
};

window.renderAptitudeTopics = () => {
    const grid = document.getElementById('aptitude-topics-grid');
    if (!grid) return;
    
    const problems = window.APTITUDE_PROBLEMS || [];
    
    // Group by Category
    const catStats = {};
    problems.forEach(p => {
        if (!catStats[p.category]) catStats[p.category] = { total: 0, done: 0 };
        catStats[p.category].total++;
        if (p.done) catStats[p.category].done++;
    });
    
    // Create All Categories card
    const allTotal = problems.length;
    const allDone = problems.filter(p => p.done).length;
    const allPct = allTotal ? Math.round((allDone / allTotal) * 100) : 0;
    const isAllSelected = window.aptitudeState.selectedCategory === 'All Categories';
    
    let html = `
    <div onclick="window.selectAptitudeCategory('All Categories')" class="glass-panel p-5 rounded-xl transition-colors cursor-pointer group ${isAllSelected ? 'border-primary shadow-primary/20 bg-primary/5' : 'hover:border-border-hover'}">
        <div class="flex justify-between items-start mb-4">
            <h3 class="font-semibold text-lg ${isAllSelected ? 'text-primary' : 'text-text-primary group-hover:text-primary'} transition-colors">All Categories</h3>
            <span class="text-xs font-medium px-2 py-1 bg-elevated text-text-muted rounded">${allDone}/${allTotal}</span>
        </div>
        <div class="w-full bg-elevated rounded-full h-1.5 mb-3">
            <div class="bg-primary h-1.5 rounded-full" style="width: ${allPct}%"></div>
        </div>
        <p class="text-xs text-text-muted">Overview of all ${allTotal} topics</p>
    </div>
    `;
    
    // Icons
    const catIcons = {
        "Maths Aptitude": "fa-calculator",
        "Reasoning": "fa-puzzle-piece",
        "Verbal Ability": "fa-font"
    };
    
    // Create specific Category cards
    Object.keys(catStats).forEach(cat => {
        const stats = catStats[cat];
        const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
        const isSelected = window.aptitudeState.selectedCategory === cat;
        const icon = catIcons[cat] || "fa-book";
        
        let catColor = 'text-primary';
        if (cat === 'Maths Aptitude') catColor = 'text-blue-500';
        if (cat === 'Reasoning') catColor = 'text-purple-500';
        if (cat === 'Verbal Ability') catColor = 'text-emerald-500';
        
        html += `
        <div onclick="window.selectAptitudeCategory('${cat}')" class="glass-panel p-5 rounded-xl transition-colors cursor-pointer group ${isSelected ? 'border-primary shadow-primary/20 bg-primary/5' : 'hover:border-border-hover'}">
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center gap-2">
                    <i class="fa-solid ${icon} ${catColor}"></i>
                    <h3 class="font-semibold text-lg ${isSelected ? 'text-primary' : 'text-text-primary group-hover:text-primary'} transition-colors">${cat}</h3>
                </div>
                <span class="text-xs font-medium px-2 py-1 bg-elevated text-text-muted rounded">${stats.done}/${stats.total}</span>
            </div>
            <div class="w-full bg-elevated rounded-full h-1.5 mb-3">
                <div class="bg-primary h-1.5 rounded-full" style="width: ${pct}%"></div>
            </div>
            <p class="text-xs text-text-muted truncate">Time & Work, Logic, etc.</p>
        </div>
        `;
    });
    
    grid.innerHTML = html;
};

window.toggleAptitudeDone = (id) => {
    const problems = window.APTITUDE_PROBLEMS || [];
    const p = problems.find(p => p.id === id);
    if (p) {
        p.done = !p.done;
        window.renderAptitudeTopics();
        window.renderAptitudeTable();
        window.updateAptitudeProgress();
    }
};

window.renderAptitudeTable = () => {
    const tbody = document.getElementById('aptitude-table-body');
    if (!tbody) return;
    
    let problems = window.APTITUDE_PROBLEMS || [];
    const cat = window.aptitudeState.selectedCategory;
    
    // Filter
    if (cat !== 'All Categories') {
        problems = problems.filter(p => p.category === cat);
    }
    
    // Update Title
    const titleEl = document.getElementById('aptitude-table-title');
    const countEl = document.getElementById('aptitude-table-count');
    
    if (titleEl) titleEl.textContent = cat === 'All Categories' ? 'All Topics' : `${cat} Topics`;
    if (countEl) countEl.textContent = `${problems.length} Topics`;
    
    if (problems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-text-muted">No topics found.</td></tr>`;
        return;
    }
    
    let html = '';
    problems.forEach(prob => {
        let catColor = 'bg-blue-500/10 text-blue-500';
        if (prob.category === 'Reasoning') catColor = 'bg-purple-500/10 text-purple-500';
        if (prob.category === 'Verbal Ability') catColor = 'bg-emerald-500/10 text-emerald-500';
        
        html += `
        <tr class="hover:bg-elevated/30 transition-colors group">
            <td class="p-4">
                <div onclick="window.toggleAptitudeDone(${prob.id})" class="w-5 h-5 rounded border ${prob.done ? 'bg-accent border-accent text-dark' : 'border-text-muted'} flex items-center justify-center cursor-pointer transition-colors hover:border-accent">
                    ${prob.done ? '<i class="fa-solid fa-check text-xs"></i>' : ''}
                </div>
            </td>
            <td class="p-4 font-medium text-text-primary group-hover:text-primary transition-colors">
                <a href="${prob.link}" target="_blank" class="hover:underline block truncate max-w-xs md:max-w-md">${prob.title}</a>
            </td>
            <td class="p-4">
                <span class="px-2.5 py-1 text-xs font-medium rounded-full ${catColor}">
                    ${prob.category}
                </span>
            </td>
            <td class="p-4 text-sm text-text-muted whitespace-nowrap"><i class="fa-solid fa-laptop-code mr-1"></i> IndiaBix</td>
            <td class="p-4">
                <a href="${prob.link}" target="_blank" class="text-xs bg-elevated hover:bg-border-hover border border-border text-text-primary px-3 py-1.5 rounded transition-colors inline-block whitespace-nowrap">Practice</a>
            </td>
        </tr>
        `;
    });
    
    tbody.innerHTML = html;
};

// 5. Mock Interviews
// 5. Mock Interviews
// 5. Mock Interviews
// Helper loop for other pages to avoid massive code repetition

// 6. Roadmaps
window.Pages['roadmaps'] = () => `
<div class="animate-slide-up space-y-8 max-w-5xl mx-auto pb-12">
    <div class="mb-8">
        <h1 class="text-4xl font-heading font-extrabold text-text-primary tracking-tight">Placement <span class="text-gradient">Roadmap</span></h1>
        <p class="text-text-muted mt-2 text-lg">Your step-by-step 6-month guide to cracking top product and service-based companies.</p>
    </div>

    <!-- Timeline Container -->
    <div class="relative border-l-2 border-border ml-3 md:ml-6 space-y-10">
        
        <!-- Phase 1 -->
        <div class="relative pl-8 md:pl-10 group">
            <div class="absolute -left-[17px] top-1 w-8 h-8 bg-elevated border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold shadow-[0_0_10px_var(--primary-glow)] transition-transform group-hover:scale-110 z-10">1</div>
            <div class="glass-panel p-6 rounded-xl hover-glow">
                <h3 class="text-xl font-bold text-primary mb-2">Phase 1 — Build Strong Fundamentals (Month 1–2)</h3>
                <p class="text-text-secondary mb-5 text-sm md:text-base leading-relaxed">The first step is strengthening core programming and computer science fundamentals. Choose one programming language and become comfortable with syntax, loops, functions, arrays, strings, recursion, and object-oriented programming concepts.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div class="bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-code text-blue-400"></i>Languages</h4>
                        <ul class="text-sm text-text-muted space-y-1.5 list-disc list-inside">
                            <li>C++</li><li>Java</li><li>Python</li>
                        </ul>
                    </div>
                    <div class="bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-book text-emerald-400"></i>Core Subjects</h4>
                        <ul class="text-sm text-text-muted space-y-1.5 list-disc list-inside">
                            <li>OOPs</li><li>DBMS</li><li>Operating Systems</li><li>Computer Networks</li><li>SQL Basics</li>
                        </ul>
                    </div>
                    <div class="bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-bullseye text-orange-400"></i>Goals</h4>
                        <ul class="text-sm text-text-muted space-y-1.5 list-disc list-inside">
                            <li>Write clean code</li><li>Understand problem-solving logic</li><li>Practice basic coding questions daily</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    <span class="text-xs font-semibold text-text-muted uppercase tracking-wider mr-2 self-center">Daily Routine:</span>
                    <span class="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-medium">2 hours coding</span>
                    <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium">1 hour CS subjects</span>
                    <span class="px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-medium">30 mins aptitude</span>
                </div>
            </div>
        </div>

        <!-- Phase 2 -->
        <div class="relative pl-8 md:pl-10 group">
            <div class="absolute -left-[17px] top-1 w-8 h-8 bg-elevated border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold transition-transform group-hover:scale-110 z-10">2</div>
            <div class="glass-panel p-6 rounded-xl hover-glow">
                <h3 class="text-xl font-bold text-primary mb-2">Phase 2 — DSA Preparation (Month 2–5)</h3>
                <p class="text-text-secondary mb-5 text-sm md:text-base leading-relaxed">This is the most important phase for placements. Start solving Data Structures and Algorithms topic-wise instead of randomly.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-list text-blue-400"></i>Learn Topics in Order</h4>
                        <div class="grid grid-cols-2 gap-x-2 gap-y-1.5 text-sm text-text-muted">
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Arrays</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Strings</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Linked List</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Stack & Queue</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Binary Search</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Trees & BST</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Heap</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Graphs</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Dynamic Programming</div>
                            <div><i class="fa-solid fa-check text-xs text-primary/50 mr-1"></i>Greedy Algorithms</div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="bg-elevated p-4 rounded-lg border border-border">
                            <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-laptop-code text-purple-400"></i>Platforms</h4>
                            <div class="flex flex-wrap gap-2 text-sm text-text-muted">
                                <span class="px-2 py-1 bg-border rounded text-xs">LeetCode</span>
                                <span class="px-2 py-1 bg-border rounded text-xs">CodeChef</span>
                                <span class="px-2 py-1 bg-border rounded text-xs">Codeforces</span>
                                <span class="px-2 py-1 bg-border rounded text-xs">GeeksforGeeks</span>
                            </div>
                        </div>
                        <div class="bg-elevated p-4 rounded-lg border border-border">
                            <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-bullseye text-orange-400"></i>Goals</h4>
                            <ul class="text-sm text-text-muted space-y-1.5 list-disc list-inside">
                                <li>Solve 300–500 questions</li><li>Maintain coding streak</li><li>Participate in weekly contests</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Phase 3 -->
        <div class="relative pl-8 md:pl-10 group">
            <div class="absolute -left-[17px] top-1 w-8 h-8 bg-elevated border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold transition-transform group-hover:scale-110 z-10">3</div>
            <div class="glass-panel p-6 rounded-xl hover-glow">
                <h3 class="text-xl font-bold text-primary mb-2">Phase 3 — Development Skills (Month 3–6)</h3>
                <p class="text-text-secondary mb-5 text-sm md:text-base leading-relaxed">Companies also expect project and development skills. Build real-world projects to strengthen your resume.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-code-branch text-blue-400"></i>Choose One Domain</h4>
                        <ul class="text-sm text-text-muted space-y-1.5 list-disc list-inside">
                            <li>Web Development</li><li>Android Development</li><li>AI/ML</li><li>Cybersecurity</li><li>Cloud/DevOps</li>
                        </ul>
                    </div>
                    <div class="bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-cubes text-emerald-400"></i>Web Dev Example</h4>
                        <div class="space-y-2 text-sm text-text-muted">
                            <p><span class="text-text-primary font-medium text-xs">Frontend:</span> HTML, CSS, JS, Tailwind, React.js</p>
                            <p><span class="text-text-primary font-medium text-xs">Backend:</span> Node.js, Express.js, MongoDB</p>
                        </div>
                    </div>
                    <div class="bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-solid fa-rocket text-purple-400"></i>Build Projects</h4>
                        <ul class="text-sm text-text-muted space-y-1.5 list-disc list-inside">
                            <li>Portfolio Website</li><li>Placement Tracker</li><li>Weather/Chat App</li><li>Upload to GitHub & Deploy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Phase 4 -->
        <div class="relative pl-8 md:pl-10 group">
            <div class="absolute -left-[17px] top-1 w-8 h-8 bg-elevated border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold transition-transform group-hover:scale-110 z-10">4</div>
            <div class="glass-panel p-6 rounded-xl hover-glow">
                <h3 class="text-xl font-bold text-primary mb-2">Phase 4 — Aptitude & Reasoning (Month 4–6)</h3>
                <p class="text-text-secondary mb-5 text-sm md:text-base leading-relaxed">Many companies include aptitude rounds before technical interviews. Use the Aptitude Prep module in the dashboard.</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1.5 bg-elevated border border-border rounded-lg text-sm text-text-primary"><i class="fa-solid fa-calculator text-blue-400 mr-2"></i>Quant</span>
                    <span class="px-3 py-1.5 bg-elevated border border-border rounded-lg text-sm text-text-primary"><i class="fa-solid fa-brain text-purple-400 mr-2"></i>Logical</span>
                    <span class="px-3 py-1.5 bg-elevated border border-border rounded-lg text-sm text-text-primary"><i class="fa-solid fa-font text-emerald-400 mr-2"></i>Verbal</span>
                    <span class="px-3 py-1.5 bg-elevated border border-border rounded-lg text-sm text-text-primary"><i class="fa-solid fa-chart-pie text-orange-400 mr-2"></i>Data Interpretation</span>
                </div>
            </div>
        </div>

        <!-- Phase 5 -->
        <div class="relative pl-8 md:pl-10 group">
            <div class="absolute -left-[17px] top-1 w-8 h-8 bg-elevated border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold transition-transform group-hover:scale-110 z-10">5</div>
            <div class="glass-panel p-6 rounded-xl hover-glow">
                <h3 class="text-xl font-bold text-primary mb-2">Phase 5 — Resume Building (Month 5)</h3>
                <p class="text-text-secondary mb-4 text-sm md:text-base leading-relaxed">Your resume is your first impression. Use an ATS-friendly format.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 bg-success/10 p-4 rounded-lg border border-success/20">
                        <i class="fa-solid fa-circle-check text-success mt-1"></i>
                        <div>
                            <h4 class="font-bold text-text-primary text-sm mb-1">Must Do</h4>
                            <p class="text-xs text-text-muted">Keep it to one page. Use ATS format. Add measurable achievements (e.g., "Improved speed by 20%"). Link your GitHub/LeetCode.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 bg-danger/10 p-4 rounded-lg border border-danger/20">
                        <i class="fa-solid fa-circle-xmark text-danger mt-1"></i>
                        <div>
                            <h4 class="font-bold text-text-primary text-sm mb-1">Avoid</h4>
                            <p class="text-xs text-text-muted">Fake skills, long paragraphs, formatting inconsistencies, or putting irrelevant hobbies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Phase 6 -->
        <div class="relative pl-8 md:pl-10 group">
            <div class="absolute -left-[17px] top-1 w-8 h-8 bg-elevated border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold transition-transform group-hover:scale-110 z-10">6</div>
            <div class="glass-panel p-6 rounded-xl hover-glow">
                <h3 class="text-xl font-bold text-primary mb-2">Phase 6 — Mock Interviews (Month 5–7)</h3>
                <p class="text-text-secondary mb-4 text-sm md:text-base leading-relaxed">Start interview preparation before placements begin. Practice speaking confidently and explaining logic clearly.</p>
                <div class="bg-elevated p-4 rounded-lg border border-border">
                    <h4 class="font-semibold text-text-primary mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><i class="fa-regular fa-comments text-blue-400"></i>Common Questions to Prepare</h4>
                    <ul class="text-sm text-text-muted space-y-1.5 list-disc list-inside columns-1 md:columns-2">
                        <li>Tell me about yourself</li>
                        <li>Explain your project deeply</li>
                        <li>Why should we hire you?</li>
                        <li>What is your favorite language and why?</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Phase 7 -->
        <div class="relative pl-8 md:pl-10 group">
            <div class="absolute -left-[17px] top-1 w-8 h-8 bg-elevated border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold shadow-[0_0_10px_var(--primary-glow)] transition-transform group-hover:scale-110 z-10">7</div>
            <div class="glass-panel p-6 rounded-xl border-primary/30 shadow-primary/10">
                <h3 class="text-xl font-bold text-primary mb-2">Phase 7 — Company-Specific Prep (Final Phase)</h3>
                <p class="text-text-secondary mb-4 text-sm md:text-base leading-relaxed">Now focus on target companies. Research their hiring process, Online Assessment (OA) patterns, and frequently asked questions.</p>
                <div class="flex flex-wrap gap-4">
                    <div class="flex-1 min-w-[200px] bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-2 text-sm">Service-based</h4>
                        <p class="text-xs text-text-muted">TCS, Infosys, Wipro, Cognizant, Accenture, Capgemini.</p>
                    </div>
                    <div class="flex-1 min-w-[200px] bg-elevated p-4 rounded-lg border border-border">
                        <h4 class="font-semibold text-text-primary mb-2 text-sm">Product-based</h4>
                        <p class="text-xs text-text-muted">Google, Amazon, Microsoft, Atlassian, Uber, Adobe.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    <!-- Final Tips & Schedule -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 pl-4 md:pl-6">
        <div class="glass-panel p-6 rounded-xl border-t-4 border-t-blue-500">
            <h3 class="text-lg font-bold text-text-primary mb-4 flex items-center gap-2"><i class="fa-regular fa-calendar text-blue-500"></i> Ideal Daily Schedule</h3>
            <div class="space-y-3">
                <div class="flex justify-between items-center text-sm border-b border-border pb-2">
                    <span class="text-text-secondary">DSA Practice</span>
                    <span class="font-bold text-text-primary">2–3 Hours</span>
                </div>
                <div class="flex justify-between items-center text-sm border-b border-border pb-2">
                    <span class="text-text-secondary">Development</span>
                    <span class="font-bold text-text-primary">2 Hours</span>
                </div>
                <div class="flex justify-between items-center text-sm border-b border-border pb-2">
                    <span class="text-text-secondary">CS Subjects</span>
                    <span class="font-bold text-text-primary">1 Hour</span>
                </div>
                <div class="flex justify-between items-center text-sm border-b border-border pb-2">
                    <span class="text-text-secondary">Aptitude</span>
                    <span class="font-bold text-text-primary">30–45 Mins</span>
                </div>
                <div class="flex justify-between items-center text-sm">
                    <span class="text-text-secondary">Revision</span>
                    <span class="font-bold text-text-primary">30 Mins</span>
                </div>
            </div>
        </div>

        <div class="glass-panel p-6 rounded-xl border-t-4 border-t-emerald-500 bg-emerald-500/5">
            <h3 class="text-lg font-bold text-text-primary mb-4 flex items-center gap-2"><i class="fa-solid fa-trophy text-emerald-500"></i> Final Preparation Tips</h3>
            <ul class="space-y-2 text-sm text-text-secondary">
                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-0.5"></i> <span><strong class="text-text-primary">Consistency</strong> beats motivation. Code daily.</span></li>
                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-0.5"></i> <span><strong class="text-text-primary">Revision</strong> is extremely important. Don't just solve and forget.</span></li>
                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-0.5"></i> <span>Build your projects seriously, don't copy-paste them.</span></li>
                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-0.5"></i> <span>Practice communication skills in mock interviews.</span></li>
                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-0.5"></i> <span>Participate in weekend coding contests to build speed.</span></li>
                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-0.5"></i> <span>Track your progress daily to stay accountable.</span></li>
            </ul>
        </div>
    </div>
</div>
`;


// 7. Programming Languages Tracker
window.Pages['languages'] = () => `
<div class="animate-slide-up h-full flex flex-col">
    <div class="flex justify-between items-end mb-6 shrink-0">
        <div>
            <h1 class="text-3xl font-heading font-bold text-text-primary">Programming Languages</h1>
            <p class="text-text-muted mt-2">Master syntax and concepts with curated GeeksforGeeks notes.</p>
        </div>
        <div class="text-right hidden sm:block">
            <div class="text-sm text-text-muted mb-1">Overall Progress</div>
            <div class="flex items-center gap-3">
                <div class="w-32 h-2 bg-elevated rounded-full overflow-hidden border border-border">
                    <div class="h-full bg-blue-500 rounded-full transition-all duration-500 w-0" id="lang-overall-progress"></div>
                </div>
                <span class="font-bold text-text-primary" id="lang-overall-text">0%</span>
            </div>
        </div>
    </div>

    <!-- Category Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 shrink-0" id="lang-categories">
        <!-- Rendered by JS -->
    </div>

    <!-- Active Topic Table -->
    <div class="flex-1 glass-panel flex flex-col overflow-hidden">
        <div class="p-4 border-b border-border flex justify-between items-center bg-elevated shrink-0">
            <h3 class="font-bold text-text-primary flex items-center gap-2" id="lang-active-title">
                <i class="fa-solid fa-layer-group text-blue-500"></i> Select a Category
            </h3>
        </div>
        <div class="flex-1 overflow-y-auto custom-scrollbar p-0">
            <table class="w-full text-left border-collapse" id="lang-table">
                <thead class="bg-card sticky top-0 z-10 shadow-sm">
                    <tr>
                        <th class="p-4 text-sm font-semibold text-text-secondary border-b border-border w-16 text-center">Done</th>
                        <th class="p-4 text-sm font-semibold text-text-secondary border-b border-border">Topic</th>
                        <th class="p-4 text-sm font-semibold text-text-secondary border-b border-border text-right">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-border" id="lang-tbody">
                    <tr><td colspan="3" class="p-8 text-center text-text-muted">Select a category above to view topics.</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`;

window.PageScripts['languages'] = () => {
    // 1. Wait for data
    if (!window.LANG_PROBLEMS) {
        setTimeout(window.PageScripts['languages'], 100);
        return;
    }

    // 2. Initialize tracking
    const storageKey = 'pp_lang_progress';
    let progress = Storage.get(storageKey, {});
    let activeCategory = 'C';

    const categories = [...new Set(window.LANG_PROBLEMS.map(p => p.category))];

    // Helper: calculate stats
    const updateStats = () => {
        let total = window.LANG_PROBLEMS.length;
        let done = window.LANG_PROBLEMS.filter(p => progress[p.id]).length;
        
        const pct = total ? Math.round((done / total) * 100) : 0;
        const pBar = document.getElementById('lang-overall-progress');
        const pText = document.getElementById('lang-overall-text');
        
        if(pBar) pBar.style.width = pct + '%';
        if(pText) pText.textContent = pct + '%';

        // Update cards
        categories.forEach(cat => {
            const catProbs = window.LANG_PROBLEMS.filter(p => p.category === cat);
            const catDone = catProbs.filter(p => progress[p.id]).length;
            const catTotal = catProbs.length;
            
            const cardDoneEl = document.getElementById(`lang-card-done-${cat}`);
            if(cardDoneEl) cardDoneEl.textContent = `${catDone}/${catTotal}`;
            
            const catPct = catTotal ? Math.round((catDone / catTotal) * 100) : 0;
            const catBar = document.getElementById(`lang-card-bar-${cat}`);
            if(catBar) catBar.style.width = catPct + '%';
        });
    };

    // Render Cards
    const renderCards = () => {
        const container = document.getElementById('lang-categories');
        if(!container) return;

        container.innerHTML = categories.map(cat => {
            const isActive = cat === activeCategory;
            const bgClass = isActive ? 'bg-primary/10 border-primary' : 'bg-elevated border-border hover:border-border-hover';
            
            let icon = 'fa-code';
            if (cat === 'Python') icon = 'fa-python';
            if (cat === 'Java') icon = 'fa-java';
            if (cat === 'C') icon = 'fa-c';

            return `
            <div class="p-4 rounded-xl border ${bgClass} cursor-pointer transition-all hover:-translate-y-1" onclick="window.setLangCategory('${cat}')">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-text-primary shadow-sm border border-border">
                        <i class="fa-brands ${icon} text-lg"></i>
                    </div>
                    <div class="font-bold text-text-primary truncate">${cat}</div>
                </div>
                <div class="flex justify-between text-xs text-text-muted mb-1.5">
                    <span>Progress</span>
                    <span id="lang-card-done-${cat}">0/0</span>
                </div>
                <div class="w-full h-1.5 bg-card rounded-full overflow-hidden border border-border">
                    <div class="h-full bg-blue-500 rounded-full transition-all duration-300 w-0" id="lang-card-bar-${cat}"></div>
                </div>
            </div>
            `;
        }).join('');
    };

    // Render Table
    const renderTable = () => {
        const tbody = document.getElementById('lang-tbody');
        const titleEl = document.getElementById('lang-active-title');
        if(!tbody || !titleEl) return;

        titleEl.innerHTML = `<i class="fa-solid fa-code text-blue-500"></i> ${activeCategory} Topics`;

        const probs = window.LANG_PROBLEMS.filter(p => p.category === activeCategory);
        
        tbody.innerHTML = probs.map(p => {
            const isDone = !!progress[p.id];
            return `
            <tr class="hover:bg-elevated transition-colors group">
                <td class="p-4 text-center">
                    <button onclick="window.toggleLang(${p.id})" class="w-6 h-6 rounded border flex items-center justify-center transition-colors ${isDone ? 'bg-success border-success text-dark' : 'bg-card border-border text-transparent group-hover:border-text-muted'}">
                        <i class="fa-solid fa-check text-xs"></i>
                    </button>
                </td>
                <td class="p-4 text-sm font-medium ${isDone ? 'text-text-muted line-through' : 'text-text-primary'}">${p.topic}</td>
                <td class="p-4 text-right">
                    <a href="${p.link}" target="_blank" class="text-xs bg-elevated hover:bg-border border border-border text-text-primary px-3 py-1.5 rounded transition-colors inline-block whitespace-nowrap">Read Notes</a>
                </td>
            </tr>
            `;
        }).join('');
    };

    // Global toggle function
    window.toggleLang = (id) => {
        progress[id] = !progress[id];
        Storage.set(storageKey, progress);
        renderTable();
        updateStats();
    };

    window.setLangCategory = (cat) => {
        activeCategory = cat;
        renderCards();
        renderTable();
        updateStats();
    };

    // Initial render
    renderCards();
    renderTable();
    updateStats();
};

// 8. Core CS Subjects Tracker
window.Pages['core-cs'] = () => `
<div class="animate-slide-up h-full flex flex-col">
    <div class="flex justify-between items-end mb-6 shrink-0">
        <div>
            <h1 class="text-3xl font-heading font-bold text-text-primary">Core CS Subjects</h1>
            <p class="text-text-muted mt-2">OS, DBMS, Computer Networks, and OOPs concepts for interviews.</p>
        </div>
        <div class="text-right hidden sm:block">
            <div class="text-sm text-text-muted mb-1">Overall Progress</div>
            <div class="flex items-center gap-3">
                <div class="w-32 h-2 bg-elevated rounded-full overflow-hidden border border-border">
                    <div class="h-full bg-emerald-500 rounded-full transition-all duration-500 w-0" id="cs-overall-progress"></div>
                </div>
                <span class="font-bold text-text-primary" id="cs-overall-text">0%</span>
            </div>
        </div>
    </div>

    <!-- Category Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8 shrink-0" id="cs-categories">
        <!-- Rendered by JS -->
    </div>

    <!-- Active Topic Table -->
    <div class="flex-1 glass-panel flex flex-col overflow-hidden">
        <div class="p-4 border-b border-border flex justify-between items-center bg-elevated shrink-0">
            <h3 class="font-bold text-text-primary flex items-center gap-2" id="cs-active-title">
                <i class="fa-solid fa-layer-group text-emerald-500"></i> Select a Subject
            </h3>
        </div>
        <div class="flex-1 overflow-y-auto custom-scrollbar p-0">
            <table class="w-full text-left border-collapse" id="cs-table">
                <thead class="bg-card sticky top-0 z-10 shadow-sm">
                    <tr>
                        <th class="p-4 text-sm font-semibold text-text-secondary border-b border-border w-16 text-center">Done</th>
                        <th class="p-4 text-sm font-semibold text-text-secondary border-b border-border">Topic</th>
                        <th class="p-4 text-sm font-semibold text-text-secondary border-b border-border text-right">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-border" id="cs-tbody">
                    <tr><td colspan="3" class="p-8 text-center text-text-muted">Select a subject above to view topics.</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`;

window.PageScripts['core-cs'] = () => {
    // 1. Wait for data
    if (!window.CORE_CS_PROBLEMS) {
        setTimeout(window.PageScripts['core-cs'], 100);
        return;
    }

    // 2. Initialize tracking
    const storageKey = 'pp_cs_progress';
    let progress = Storage.get(storageKey, {});
    let activeCategory = 'OOPs';

    const categories = [...new Set(window.CORE_CS_PROBLEMS.map(p => p.category))];

    // Helper: calculate stats
    const updateStats = () => {
        let total = window.CORE_CS_PROBLEMS.length;
        let done = window.CORE_CS_PROBLEMS.filter(p => progress[p.id]).length;
        
        const pct = total ? Math.round((done / total) * 100) : 0;
        const pBar = document.getElementById('cs-overall-progress');
        const pText = document.getElementById('cs-overall-text');
        
        if(pBar) pBar.style.width = pct + '%';
        if(pText) pText.textContent = pct + '%';

        // Update cards
        categories.forEach(cat => {
            const catProbs = window.CORE_CS_PROBLEMS.filter(p => p.category === cat);
            const catDone = catProbs.filter(p => progress[p.id]).length;
            const catTotal = catProbs.length;
            
            const cardDoneEl = document.getElementById(`cs-card-done-${cat.replace(/\s+/g, '')}`);
            if(cardDoneEl) cardDoneEl.textContent = `${catDone}/${catTotal}`;
            
            const catPct = catTotal ? Math.round((catDone / catTotal) * 100) : 0;
            const catBar = document.getElementById(`cs-card-bar-${cat.replace(/\s+/g, '')}`);
            if(catBar) catBar.style.width = catPct + '%';
        });
    };

    // Render Cards
    const renderCards = () => {
        const container = document.getElementById('cs-categories');
        if(!container) return;

        container.innerHTML = categories.map(cat => {
            const isActive = cat === activeCategory;
            const bgClass = isActive ? 'bg-primary/10 border-primary' : 'bg-elevated border-border hover:border-border-hover';
            const catId = cat.replace(/\s+/g, '');
            
            let icon = 'fa-book';
            if (cat === 'DBMS' || cat === 'SQL Basics') icon = 'fa-database';
            if (cat === 'Operating Systems') icon = 'fa-microchip';
            if (cat === 'Computer Networks') icon = 'fa-network-wired';
            if (cat === 'OOPs') icon = 'fa-cubes';

            return `
            <div class="p-4 rounded-xl border ${bgClass} cursor-pointer transition-all hover:-translate-y-1" onclick="window.setCSCategory('${cat}')">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-text-primary shadow-sm border border-border shrink-0">
                        <i class="fa-solid ${icon} text-lg"></i>
                    </div>
                    <div class="font-bold text-text-primary truncate text-sm" title="${cat}">${cat}</div>
                </div>
                <div class="flex justify-between text-xs text-text-muted mb-1.5">
                    <span>Progress</span>
                    <span id="cs-card-done-${catId}">0/0</span>
                </div>
                <div class="w-full h-1.5 bg-card rounded-full overflow-hidden border border-border">
                    <div class="h-full bg-emerald-500 rounded-full transition-all duration-300 w-0" id="cs-card-bar-${catId}"></div>
                </div>
            </div>
            `;
        }).join('');
    };

    // Render Table
    const renderTable = () => {
        const tbody = document.getElementById('cs-tbody');
        const titleEl = document.getElementById('cs-active-title');
        if(!tbody || !titleEl) return;

        titleEl.innerHTML = `<i class="fa-solid fa-book text-emerald-500"></i> ${activeCategory} Topics`;

        const probs = window.CORE_CS_PROBLEMS.filter(p => p.category === activeCategory);
        
        tbody.innerHTML = probs.map(p => {
            const isDone = !!progress[p.id];
            return `
            <tr class="hover:bg-elevated transition-colors group">
                <td class="p-4 text-center">
                    <button onclick="window.toggleCS(${p.id})" class="w-6 h-6 rounded border flex items-center justify-center transition-colors ${isDone ? 'bg-success border-success text-dark' : 'bg-card border-border text-transparent group-hover:border-text-muted'}">
                        <i class="fa-solid fa-check text-xs"></i>
                    </button>
                </td>
                <td class="p-4 text-sm font-medium ${isDone ? 'text-text-muted line-through' : 'text-text-primary'}">${p.topic}</td>
                <td class="p-4 text-right">
                    <a href="${p.link}" target="_blank" class="text-xs bg-elevated hover:bg-border border border-border text-text-primary px-3 py-1.5 rounded transition-colors inline-block whitespace-nowrap">Read Notes</a>
                </td>
            </tr>
            `;
        }).join('');
    };

    // Global toggle function
    window.toggleCS = (id) => {
        progress[id] = !progress[id];
        Storage.set(storageKey, progress);
        renderTable();
        updateStats();
    };

    window.setCSCategory = (cat) => {
        activeCategory = cat;
        renderCards();
        renderTable();
        updateStats();
    };

    // Initial render
    renderCards();
    renderTable();
    updateStats();
};

const placeholderPages = [
    {id: 'system-design', title: 'System Design', desc: 'Case studies for scalable architectures.', icon: 'fa-sitemap'},
    {id: 'portfolio', title: 'Portfolio Maker', desc: 'Generate a stunning developer portfolio website.', icon: 'fa-laptop-code'},
    {id: 'companies', title: 'Company Prep', desc: 'Specific archives for top MNCs.', icon: 'fa-building'},
    {id: 'projects', title: 'Project Ideas', desc: 'Full-stack projects to boost your resume.', icon: 'fa-lightbulb'},
    {id: 'contests', title: 'Coding Contests', desc: 'Upcoming LeetCode & Codeforces contests.', icon: 'fa-trophy'},
    {id: 'jobs', title: 'Job Portal', desc: 'Latest off-campus drives and internships.', icon: 'fa-briefcase'},
    {id: 'forum', title: 'Discussion Forum', desc: 'Ask doubts and share interview experiences.', icon: 'fa-comments'},
    {id: 'leaderboard', title: 'Leaderboard', desc: 'See where you stand among peers.', icon: 'fa-ranking-star'},
    {id: 'profile', title: 'Profile Settings', desc: 'Manage your personal information.', icon: 'fa-user-gear'},
    {id: 'premium', title: 'Pro Upgrade', desc: 'Unlock unlimited mock interviews and AI features.', icon: 'fa-crown'}
];

placeholderPages.forEach(p => {
    window.Pages[p.id] = () => `
    <div class="animate-slide-up flex flex-col items-center justify-center h-[60vh] text-center">
        <div class="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-5xl mb-6 border border-primary/20 shadow-xl shadow-primary/10">
            <i class="fa-solid ${p.icon}"></i>
        </div>
        <h1 class="text-3xl font-heading font-bold text-text-primary mb-2">${p.title}</h1>
        <p class="text-text-muted max-w-md mb-8">${p.desc}<br>This module is currently being polished and will be available soon.</p>
        <button onclick="navigateTo('dashboard')" class="bg-elevated hover:bg-slate-700 text-text-primary px-6 py-2.5 rounded-lg border border-border transition-colors font-medium">
            <i class="fa-solid fa-arrow-left mr-2"></i> Back to Dashboard
        </button>
    </div>
    `;
});

window.PageScripts = window.PageScripts || {};
window.PageScripts['tasks'] = () => {
    let tasks = Storage.get('pp_kanban_tasks', [
        {id: 1, title: 'Learn Dynamic Programming', desc: 'Watch videos on tabulation and memoization', col: 'todo'},
        {id: 2, title: 'Solve Arrays problems', desc: 'Target 5 problems from LeetCode', col: 'inprogress'},
        {id: 3, title: 'Read OS concepts', desc: 'Process scheduling and deadlocks', col: 'done'}
    ]);

    const renderTasks = () => {
        const cols = { todo: [], inprogress: [], done: [] };
        tasks.forEach(t => { if(cols[t.col]) cols[t.col].push(t); });
        
        ['todo', 'inprogress', 'done'].forEach(c => {
            const el = document.getElementById('col-' + c);
            const countEl = document.getElementById('count-' + c);
            if(!el) return;
            countEl.textContent = cols[c].length;
            
            el.innerHTML = cols[c].map(t => `
                <div draggable="true" ondragstart="window.dragTask(event, ${t.id})" class="bg-card p-3 rounded-lg border border-border shadow-sm hover:border-text-muted transition-colors cursor-move group select-none relative z-10">
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="font-medium text-sm text-text-primary ${c==='done'?'line-through text-text-muted':''}">${t.title}</h4>
                        <button onclick="window.deleteTask(${t.id})" class="text-text-muted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><i class="fa-solid fa-trash-can text-xs"></i></button>
                    </div>
                    ${t.desc ? `<p class="text-xs text-text-secondary line-clamp-2 mt-1">${t.desc}</p>` : ''}
                </div>
            `).join('');
        });
    };

    window.openTaskModal = () => {
        const m = document.getElementById('task-modal');
        const mc = document.getElementById('task-modal-content');
        if(m) {
            m.classList.remove('hidden');
            setTimeout(() => {
                m.classList.remove('opacity-0');
                if(mc) mc.classList.remove('scale-95');
            }, 10);
            document.getElementById('task-title').value = '';
            document.getElementById('task-desc').value = '';
        }
    };
    
    window.closeTaskModal = () => {
        const m = document.getElementById('task-modal');
        const mc = document.getElementById('task-modal-content');
        if(m) {
            m.classList.add('opacity-0');
            if(mc) mc.classList.add('scale-95');
            setTimeout(() => m.classList.add('hidden'), 300);
        }
    };

    window.saveNewTask = (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value.trim();
        const desc = document.getElementById('task-desc').value.trim();
        if(!title) return;
        
        tasks.push({ id: Date.now(), title, desc, col: 'todo' });
        Storage.set('pp_kanban_tasks', tasks);
        window.closeTaskModal();
        renderTasks();
    };

    window.deleteTask = (id) => {
        tasks = tasks.filter(t => t.id !== id);
        Storage.set('pp_kanban_tasks', tasks);
        renderTasks();
    };

    window.dragTask = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
        setTimeout(() => {
            e.target.style.opacity = '0.5';
        }, 0);
    };

    window.allowDrop = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('bg-elevated/50');
    };

    ['todo', 'inprogress', 'done'].forEach(c => {
        const el = document.getElementById('col-' + c);
        if (el) {
            el.addEventListener('dragleave', (e) => {
                e.currentTarget.classList.remove('bg-elevated/50');
            });
            el.addEventListener('dragend', (e) => {
                if(e.target.style) e.target.style.opacity = '1';
                ['todo', 'inprogress', 'done'].forEach(col => {
                    const cEl = document.getElementById('col-' + col);
                    if(cEl) cEl.classList.remove('bg-elevated/50');
                });
            });
        }
    });

    window.dropTask = (e, col) => {
        e.preventDefault();
        e.currentTarget.classList.remove('bg-elevated/50');
        const id = parseInt(e.dataTransfer.getData('text/plain'));
        const task = tasks.find(t => t.id === id);
        if(task && task.col !== col) {
            task.col = col;
            Storage.set('pp_kanban_tasks', tasks);
            renderTasks();
        }
    };

    renderTasks();
};
