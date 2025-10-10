import loadShennongHerbs from './data/shennong-loader.js';

const gradeOrder = ['Superior', 'Medium', 'Regular'];
const gradeLabels = {
    Superior: '上品',
    Medium: '中品',
    Regular: '下品'
};

document.addEventListener('DOMContentLoaded', () => {
    const listEl = document.getElementById('herbList');
    const statsEl = document.getElementById('herbStats');
    const searchInput = document.getElementById('herbSearch');
    const gradeTabs = document.querySelectorAll('.grade-tab');

    if (!listEl || !statsEl) {
        return;
    }

    let herbs = [];
    let activeGrade = 'all';

    gradeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            gradeTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            activeGrade = tab.dataset.grade;
            render();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            render();
        });
    }

    function getFilteredHerbs() {
        const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
        return herbs.filter(item => {
            const gradeOk = activeGrade === 'all' || item.grade === activeGrade;
            if (!gradeOk) return false;
            if (!keyword) return true;
            const haystack = `${item.name} ${item.classicalText}`.toLowerCase();
            return haystack.includes(keyword);
        }).sort((a, b) => {
            if (a.grade === b.grade) {
                return a.id - b.id;
            }
            return gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade);
        });
    }

    function updateStats(filtered) {
        if (!statsEl) return;
        const total = herbs.length;
        if (!total) {
            statsEl.innerHTML = `
                <div class="stat-card">
                    <span class="stat-label">收錄藥味總數</span>
                    <span class="stat-value">0</span>
                </div>
            `;
            return;
        }

        const gradeCounts = gradeOrder.reduce((acc, grade) => {
            acc[grade] = herbs.filter(item => item.grade === grade).length;
            return acc;
        }, {});

        const filteredCounts = gradeOrder.reduce((acc, grade) => {
            acc[grade] = filtered.filter(item => item.grade === grade).length;
            return acc;
        }, {});

        statsEl.innerHTML = `
            <div class="stat-card">
                <span class="stat-label">收錄藥味總數</span>
                <span class="stat-value">${total}</span>
            </div>
            ${gradeOrder.map(grade => `
                <div class="stat-card">
                    <span class="stat-label">${gradeLabels[grade] || grade}</span>
                    <span class="stat-value">${gradeCounts[grade] || 0}</span>
                    <span class="stat-sub">目前顯示：${filteredCounts[grade] || 0}</span>
                </div>
            `).join('')}
        `;
    }

    function createHerbEntry(herb) {
        const entry = document.createElement('article');
        entry.className = 'herb-entry';
        entry.dataset.grade = herb.grade;

        entry.innerHTML = `
            <header class="herb-entry__header">
                <div>
                    <div class="herb-entry__grade">${gradeLabels[herb.grade] || herb.grade}</div>
                    <h3 class="herb-entry__name">${herb.name}</h3>
                </div>
                <span class="herb-entry__id">#${String(herb.id).padStart(2, '0')}</span>
            </header>
            <p class="herb-entry__classic">${herb.classicalText}</p>
        `;

        return entry;
    }

    function render() {
        const filtered = getFilteredHerbs();
        updateStats(filtered);

        listEl.innerHTML = '';

        if (!herbs.length) {
            listEl.innerHTML = `<p class="empty-state">目前無法載入《神農本草經》資料，請稍後再試。</p>`;
            return;
        }

        if (!filtered.length) {
            listEl.innerHTML = `<p class="empty-state">目前沒有符合條件的藥味，請調整搜尋或篩選設定。</p>`;
            return;
        }

        filtered.forEach(herb => {
            listEl.appendChild(createHerbEntry(herb));
        });
    }

    async function initialize() {
        listEl.innerHTML = `<p class="empty-state">資料載入中，請稍候…</p>`;
        try {
            herbs = await loadShennongHerbs();
            render();
        } catch (error) {
            console.error('[zhongyao] 無法載入本草資料：', error);
            listEl.innerHTML = `<p class="empty-state">目前無法載入本草資料，請稍後再試。</p>`;
            statsEl.innerHTML = `
                <div class="stat-card">
                    <span class="stat-label">收錄藥味總數</span>
                    <span class="stat-value">0</span>
                </div>
            `;
        }
    }

    initialize();
});
