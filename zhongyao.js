import shennongHerbs from './data/shennong-herbs.js';

const gradeOrder = ['Superior', 'Medium', 'Regular'];

document.addEventListener('DOMContentLoaded', () => {
    const listEl = document.getElementById('herbList');
    const statsEl = document.getElementById('herbStats');
    const searchInput = document.getElementById('herbSearch');
    const gradeTabs = document.querySelectorAll('.grade-tab');

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
        return shennongHerbs.filter(item => {
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
        const total = shennongHerbs.length;
        const gradeCounts = gradeOrder.reduce((acc, grade) => {
            acc[grade] = shennongHerbs.filter(item => item.grade === grade).length;
            return acc;
        }, {});

        const filteredCounts = gradeOrder.reduce((acc, grade) => {
            acc[grade] = filtered.filter(item => item.grade === grade).length;
            return acc;
        }, {});

        statsEl.innerHTML = `
            <div class="stat-card">
                <span class="stat-label">Total entries</span>
                <span class="stat-value">${total}</span>
            </div>
            ${gradeOrder.map(grade => `
                <div class="stat-card">
                    <span class="stat-label">${grade}</span>
                    <span class="stat-value">${gradeCounts[grade]}</span>
                    <span class="stat-sub">Visible now: ${filteredCounts[grade]}</span>
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
                    <div class="herb-entry__grade">${herb.grade}</div>
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

        if (!filtered.length) {
            listEl.innerHTML = `<p class="empty-state">No herbs match the current filters. Try adjusting the search.</p>`;
            return;
        }

        filtered.forEach(herb => {
            listEl.appendChild(createHerbEntry(herb));
        });
    }

    render();
});
