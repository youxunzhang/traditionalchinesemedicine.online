import shennongHerbs from './data/shennong-herbs.js';

const gradeOrder = ['上品', '中品', '下品'];

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

    searchInput.addEventListener('input', () => {
        render();
    });

    function parseEntry(entryText) {
        const info = {
            taste: '',
            toxicity: '',
            mainFunctions: '',
            extra: ''
        };

        if (!entryText) return info;

        const normalized = entryText.replace(/\s+/g, '');
        const toxicityMatch = normalized.match(/(无毒|有毒|小毒|大毒|微毒)/);
        if (toxicityMatch) {
            info.toxicity = toxicityMatch[1];
        }

        const tasteMatch = normalized.match(/味([^。；]+)/);
        if (tasteMatch) {
            let tasteText = tasteMatch[1];
            if (info.toxicity && tasteText.includes(info.toxicity)) {
                tasteText = tasteText.replace(info.toxicity, '');
            }
            info.taste = tasteText.replace(/^[，。]/, '').replace(/。$/, '');
        }

        const mainMatch = normalized.match(/主([^。]+)/);
        if (mainMatch) {
            info.mainFunctions = mainMatch[1]
                .replace(/^[，。]/, '')
                .replace(/。$/, '')
                .replace(/久服.*$/, '')
                .replace(/主/, '');
        }

        const extraMatch = normalized.match(/久服[^。]+/);
        if (extraMatch) {
            info.extra = extraMatch[0];
        }

        return info;
    }

    function getFilteredHerbs() {
        const keyword = searchInput.value.trim().toLowerCase();
        return shennongHerbs.filter(item => {
            const gradeOk = activeGrade === 'all' || item.grade === activeGrade;
            if (!gradeOk) return false;
            if (!keyword) return true;
            const haystack = `${item.name}${item.classicalText}`.toLowerCase();
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
                <span class="stat-label">收录总数</span>
                <span class="stat-value">${total}</span>
            </div>
            ${gradeOrder.map(grade => `
                <div class="stat-card">
                    <span class="stat-label">${grade}</span>
                    <span class="stat-value">${gradeCounts[grade]}</span>
                    <span class="stat-sub">当前筛选：${filteredCounts[grade]}</span>
                </div>
            `).join('')}
        `;
    }

    function render() {
        const filtered = getFilteredHerbs();
        updateStats(filtered);

        listEl.innerHTML = '';

        if (!filtered.length) {
            listEl.innerHTML = `<p class="empty-state">未找到符合条件的本草，请调整筛选或关键词。</p>`;
            return;
        }

        filtered.forEach(item => {
            const info = parseEntry(item.classicalText);
            const card = document.createElement('article');
            card.className = 'herb-entry';
            card.innerHTML = `
                <header class="herb-entry__header">
                    <div>
                        <span class="herb-entry__grade">${item.grade}</span>
                        <h2 class="herb-entry__name">${item.name}</h2>
                    </div>
                    <span class="herb-entry__id">#${String(item.id).padStart(3, '0')}</span>
                </header>
                <dl class="herb-entry__meta">
                    <div>
                        <dt>性味</dt>
                        <dd>${info.taste || '经典中未明述'}</dd>
                    </div>
                    <div>
                        <dt>毒性</dt>
                        <dd>${info.toxicity || '经典中未标注'}</dd>
                    </div>
                    <div>
                        <dt>主治</dt>
                        <dd>${info.mainFunctions || '详见原文'}</dd>
                    </div>
                    ${info.extra ? `<div><dt>久服</dt><dd>${info.extra}</dd></div>` : ''}
                </dl>
                <details class="herb-entry__source">
                    <summary>《神农本草经》原文</summary>
                    <p>${item.classicalText}</p>
                </details>
            `;
            listEl.appendChild(card);
        });
    }

    render();
});
