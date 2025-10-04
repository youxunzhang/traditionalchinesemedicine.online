import shennongHerbs from './data/shennong-herbs.js';

const PAGE_SIZE = 6;

const gradeLabels = {
  Superior: 'Superior class',
  Medium: 'Middle class',
  Regular: 'Lower class'
};

document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('homepageHerbList');
  const paginationEl = document.getElementById('homepageHerbPagination');
  const counterEl = document.getElementById('homepageHerbCounter');
  const searchInput = document.getElementById('homepageHerbSearch');

  if (!listEl || !paginationEl || !counterEl) {
    return;
  }

  let currentPage = 1;
  let keyword = '';

  const totalCount = shennongHerbs.length;

  const getFilteredHerbs = () => {
    if (!keyword) {
      return shennongHerbs;
    }
    const lower = keyword.toLowerCase();
    return shennongHerbs.filter(item => {
      const haystack = `${item.name} ${item.classicalText}`.toLowerCase();
      return haystack.includes(lower);
    });
  };

  const updateCounter = (filteredCount, totalPages) => {
    if (!counterEl) return;
    if (!filteredCount) {
      counterEl.textContent = 'No matching herbs yet';
      return;
    }

    const base = keyword
      ? `${filteredCount} herbs match your search`
      : `${totalCount} classical herbs available`;
    counterEl.textContent = `${base} · Page ${currentPage} of ${totalPages}`;
  };

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
    summary.textContent = herb.classicalText.split('. ')[0] || herb.classicalText;

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

  const renderList = () => {
    const filtered = getFilteredHerbs();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    listEl.innerHTML = '';
    pageItems.forEach(herb => {
      listEl.appendChild(createHerbCard(herb));
    });

    renderPagination(totalPages);
    updateCounter(filtered.length, totalPages);
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

    paginationEl.appendChild(createButton('Prev', currentPage - 1, currentPage === 1, 'Previous page'));

    for (let page = 1; page <= totalPages; page += 1) {
      const btn = createButton(String(page), page, false, `Go to page ${page}`);
      if (page === currentPage) {
        btn.classList.add('is-active');
      }
      paginationEl.appendChild(btn);
    }

    paginationEl.appendChild(createButton('Next', currentPage + 1, currentPage === totalPages, 'Next page'));
  };

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      keyword = e.target.value.trim();
      currentPage = 1;
      renderList();
    });
  }

  renderList();
});
