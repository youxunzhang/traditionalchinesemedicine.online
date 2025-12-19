import loadShennongHerbs from './data/shennong-loader.js';

const PAGE_SIZE = 6;

const gradeLabels = {
  Superior: '上品',
  Medium: '中品',
  Regular: '下品'
};

document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('homepageHerbList');
  const paginationEl = document.getElementById('homepageHerbPagination');

  if (!listEl || !paginationEl) {
    return;
  }

  let herbs = [];
  let currentPage = 1;

  const renderStatus = (message) => {
    listEl.innerHTML = `<p class="empty-state">${message}</p>`;
    paginationEl.innerHTML = '';
  };

  const getFilteredHerbs = () => herbs;

  const createHerbCard = herb => {
    const card = document.createElement('article');
    card.className = 'herb-card herb-card--text-only';

    const wrapper = document.createElement('div');
    wrapper.className = 'herb-card__body';

    const badge = document.createElement('div');
    badge.className = 'herb-card__badge';
    badge.textContent = herb.name.slice(0, 2);
    badge.setAttribute('aria-hidden', 'true');
    badge.title = herb.name;
    wrapper.appendChild(badge);

    const content = document.createElement('div');
    content.className = 'herb-card__content';

    const header = document.createElement('div');
    header.className = 'herb-card__header';

    const grade = document.createElement('span');
    const gradeText = gradeLabels[herb.grade] || herb.grade;
    grade.className = 'herb-grade';
    grade.textContent = gradeText;

    const name = document.createElement('h3');
    name.className = 'herb-name';
    name.textContent = herb.name;

    header.appendChild(grade);
    header.appendChild(name);

    const summary = document.createElement('p');
    summary.className = 'herb-card__summary';
    const summaryText = herb.classicalText.includes('。')
      ? herb.classicalText.split('。')[0]
      : herb.classicalText.split('. ')[0];
    summary.textContent = summaryText || herb.classicalText;

    const classic = document.createElement('p');
    classic.className = 'herb-classic';
    classic.textContent = herb.classicalText;

    content.appendChild(header);
    content.appendChild(summary);
    content.appendChild(classic);

    wrapper.appendChild(content);
    card.appendChild(wrapper);

    return card;
  };

  const createButton = (label, page, disabled = false, ariaLabel = '') => {
    const btn = document.createElement('button');
    btn.className = 'pagination-btn';
    btn.textContent = label;
    btn.disabled = disabled;
    if (ariaLabel) {
      btn.setAttribute('aria-label', ariaLabel);
    }
    btn.addEventListener('click', () => {
      currentPage = page;
      renderList();
    });
    return btn;
  };

  const renderPagination = totalPages => {
    paginationEl.innerHTML = '';
    if (totalPages <= 1) {
      return;
    }

    paginationEl.appendChild(createButton('上一頁', currentPage - 1, currentPage === 1, '前往上一頁'));

    for (let page = 1; page <= totalPages; page += 1) {
      const btn = createButton(String(page), page, false, `跳至第 ${page} 頁`);
      if (page === currentPage) {
        btn.classList.add('is-active');
      }
      paginationEl.appendChild(btn);
    }

    paginationEl.appendChild(createButton('下一頁', currentPage + 1, currentPage === totalPages, '前往下一頁'));
  };

  const renderList = () => {
    const filtered = getFilteredHerbs();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    listEl.innerHTML = '';

    if (!filtered.length) {
      const message = keyword
        ? '尚無符合搜尋條件的本草，請換個關鍵字試試。'
        : '暫無本草資料可供顯示。';
      listEl.innerHTML = `<p class="empty-state">${message}</p>`;
      paginationEl.innerHTML = '';
      return;
    }

    pageItems.forEach(herb => {
      listEl.appendChild(createHerbCard(herb));
    });

    renderPagination(totalPages);
  };

  const initialize = async () => {
    renderStatus('資料載入中，請稍候…');
    try {
      herbs = await loadShennongHerbs();
      if (!herbs.length) {
        renderStatus('暫無本草資料可供顯示。');
        return;
      }
      renderList();
    } catch (error) {
      console.error('[homepage-herbs] 無法載入本草資料：', error);
      renderStatus('目前無法載入本草資料，請稍後再試。');
    }
  };

  initialize();
});
