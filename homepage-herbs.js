import shennongHerbs from './data/shennong-herbs.js';

const PAGE_SIZE = 12;
const gradeClassMap = {
  '上品': 'upper',
  '中品': 'middle',
  '下品': 'lower'
};

const toxicityLabels = ['无毒', '有毒', '小毒', '大毒', '微毒', '剧毒'];

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

  const parseEntry = (entryText = '') => {
    const info = {
      taste: '',
      toxicity: '',
      main: '',
      extra: ''
    };

    if (!entryText) {
      return info;
    }

    const normalized = entryText.replace(/\s+/g, '');
    const toxicityMatch = normalized.match(new RegExp(`(${toxicityLabels.join('|')})`));
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
      info.main = mainMatch[1]
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
  };

  const getFilteredHerbs = () => {
    if (!keyword) {
      return shennongHerbs;
    }
    const lower = keyword.toLowerCase();
    return shennongHerbs.filter(item => {
      const haystack = `${item.name}${item.classicalText || ''}`.toLowerCase();
      return haystack.includes(lower);
    });
  };

  const updateCounter = (filteredCount, totalPages) => {
    if (!counterEl) return;
    if (!filteredCount) {
      counterEl.textContent = '未找到匹配的本草';
      return;
    }

    const base = keyword
      ? `已匹配${filteredCount}味本草`
      : `共收录${totalCount}味本草`;
    counterEl.textContent = `${base} · 第${currentPage}/${totalPages}页`;
  };

  const createHerbCard = herb => {
    const info = parseEntry(herb.classicalText);
    const card = document.createElement('article');
    card.className = 'herb-card herb-card--text-only';
    card.dataset.grade = herb.grade;

    const wrapper = document.createElement('div');
    wrapper.className = 'herb-card__body';

    const badge = document.createElement('div');
    badge.className = 'herb-card__badge';
    badge.textContent = herb.name.length > 2 ? herb.name.slice(0, 2) : herb.name;
    badge.setAttribute('aria-hidden', 'true');
    badge.title = herb.name;
    wrapper.appendChild(badge);

    const content = document.createElement('div');
    content.className = 'herb-card__content';

    const header = document.createElement('div');
    header.className = 'herb-card__header';

    const grade = document.createElement('span');
    const gradeKey = gradeClassMap[herb.grade] || 'upper';
    grade.className = `herb-grade herb-grade--${gradeKey}`;
    grade.textContent = herb.grade;

    const name = document.createElement('h3');
    name.className = 'herb-name';
    name.textContent = herb.name;

    header.appendChild(grade);
    header.appendChild(name);

    const summary = document.createElement('p');
    summary.className = 'herb-card__summary';
    summary.textContent = info.main ? `主：${info.main}` : herb.classicalText.replace(/《神农本草经》曰：/, '').split('。')[0] || '功效见经典原文';

    const meta = document.createElement('dl');
    meta.className = 'herb-meta';

    const tasteItem = document.createElement('div');
    tasteItem.innerHTML = `<dt>性味</dt><dd>${info.taste || '经典中未详'}</dd>`;

    const toxicityItem = document.createElement('div');
    toxicityItem.innerHTML = `<dt>毒性</dt><dd>${info.toxicity || '经典中未标注'}</dd>`;

    meta.appendChild(tasteItem);
    meta.appendChild(toxicityItem);

    let extraNode = null;
    if (info.extra) {
      extraNode = document.createElement('p');
      extraNode.className = 'herb-card__extra';
      extraNode.textContent = info.extra;
    }

    const classic = document.createElement('p');
    classic.className = 'herb-classic';
    classic.textContent = herb.classicalText;

    content.appendChild(header);
    content.appendChild(summary);
    content.appendChild(meta);
    if (extraNode) {
      content.appendChild(extraNode);
    }
    content.appendChild(classic);

    wrapper.appendChild(content);
    card.appendChild(wrapper);

    return card;
  };

  const renderCards = data => {
    listEl.innerHTML = '';
    if (!data.length) {
      const empty = document.createElement('p');
      empty.className = 'herb-empty';
      empty.textContent = keyword
        ? '未找到符合搜索条件的本草，换个关键词试试。'
        : '暂未加载到本草数据。';
      listEl.appendChild(empty);
      return;
    }

    const fragment = document.createDocumentFragment();
    data.forEach(item => fragment.appendChild(createHerbCard(item)));
    listEl.appendChild(fragment);
  };

  const renderPagination = totalPages => {
    paginationEl.innerHTML = '';

    if (totalPages <= 1) {
      paginationEl.classList.add('is-hidden');
      return;
    }

    paginationEl.classList.remove('is-hidden');

    const createButton = (label, page, disabled = false, ariaLabel) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = label;
      if (ariaLabel) {
        btn.setAttribute('aria-label', ariaLabel);
      }
      btn.disabled = disabled;
      if (!disabled) {
        btn.addEventListener('click', () => {
          currentPage = page;
          render();
          listEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return btn;
    };

    paginationEl.appendChild(createButton('上一页', currentPage - 1, currentPage === 1, '上一页'));

    for (let page = 1; page <= totalPages; page++) {
      const btn = createButton(String(page), page, false, `前往第${page}页`);
      if (page === currentPage) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-current', 'page');
      }
      paginationEl.appendChild(btn);
    }

    paginationEl.appendChild(createButton('下一页', currentPage + 1, currentPage === totalPages, '下一页'));
  };

  const render = () => {
    const filtered = getFilteredHerbs();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const start = (currentPage - 1) * PAGE_SIZE;
    const pageData = filtered.slice(start, start + PAGE_SIZE);

    renderCards(pageData);
    renderPagination(totalPages);
    updateCounter(filtered.length, totalPages);
  };

  if (searchInput) {
    searchInput.addEventListener('input', event => {
      keyword = event.target.value.trim();
      currentPage = 1;
      render();
    });
  }

  render();
});
