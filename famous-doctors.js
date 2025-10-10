import famousDoctors from './data/famous-doctors.js';

const periodOrder = [
  '先秦',
  '秦漢',
  '魏晉南北朝',
  '隋唐',
  '宋遼金',
  '元',
  '明',
  '清',
  '明清之際',
  '清末',
  '近現代'
];

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('doctorSearch');
  const periodSelect = document.getElementById('periodFilter');
  const specialtySelect = document.getElementById('specialtyFilter');
  const listEl = document.getElementById('doctorList');
  const countEl = document.getElementById('doctorCount');
  const statsEl = document.getElementById('doctorStats');

  const uniquePeriods = Array.from(
    new Set(famousDoctors.map(item => item.period))
  ).sort((a, b) => periodOrder.indexOf(a) - periodOrder.indexOf(b));

  const uniqueSpecialties = Array.from(
    new Set(
      famousDoctors
        .flatMap(item => item.specialties)
        .map(text => text.trim())
        .filter(Boolean)
    )
  ).sort((a, b) => a.localeCompare(b, 'zh-Hant'));

  const createOption = (value, label) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    return option;
  };

  periodSelect.appendChild(createOption('all', '全部時期'));
  uniquePeriods.forEach(period => {
    periodSelect.appendChild(createOption(period, period));
  });

  specialtySelect.appendChild(createOption('all', '全部專長'));
  uniqueSpecialties.forEach(spec => {
    specialtySelect.appendChild(createOption(spec, spec));
  });

  const renderCard = doctor => {
    const article = document.createElement('article');
    article.className = 'doctor-card';

    const header = document.createElement('header');
    header.className = 'doctor-card__header';

    const nameEl = document.createElement('h3');
    nameEl.className = 'doctor-card__name';
    nameEl.textContent = doctor.name;

    const eraEl = document.createElement('p');
    eraEl.className = 'doctor-card__era';
    eraEl.textContent = `${doctor.era}｜${doctor.period}`;

    header.appendChild(nameEl);
    header.appendChild(eraEl);

    const contributionEl = document.createElement('p');
    contributionEl.className = 'doctor-card__contribution';
    contributionEl.textContent = doctor.contribution;

    const specialtyList = document.createElement('ul');
    specialtyList.className = 'doctor-card__specialties';
    doctor.specialties.forEach(spec => {
      const li = document.createElement('li');
      li.textContent = spec;
      specialtyList.appendChild(li);
    });

    const worksList = document.createElement('ul');
    worksList.className = 'doctor-card__works';
    doctor.notableWorks.forEach(work => {
      const li = document.createElement('li');
      li.textContent = work;
      worksList.appendChild(li);
    });

    article.appendChild(header);
    article.appendChild(contributionEl);
    article.appendChild(specialtyList);
    article.appendChild(worksList);

    return article;
  };

  const updateStats = filtered => {
    const total = famousDoctors.length;
    const filteredTotal = filtered.length;

    const summary = document.createElement('div');
    summary.className = 'doctor-stats__summary';
    summary.innerHTML = `<strong>${filteredTotal}</strong> / ${total} 名醫`;

    const breakdown = document.createElement('div');
    breakdown.className = 'doctor-stats__breakdown';

    uniquePeriods.forEach(period => {
      const count = filtered.filter(item => item.period === period).length;
      const totalPeriod = famousDoctors.filter(item => item.period === period).length;
      const cell = document.createElement('div');
      cell.className = 'doctor-stats__item';
      cell.innerHTML = `
        <span class="label">${period}</span>
        <span class="value">${count}</span>
        <span class="total">共 ${totalPeriod}</span>
      `;
      breakdown.appendChild(cell);
    });

    statsEl.innerHTML = '';
    statsEl.appendChild(summary);
    statsEl.appendChild(breakdown);
  };

  const filterDoctors = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const period = periodSelect.value;
    const specialty = specialtySelect.value;

    return famousDoctors.filter(doctor => {
      const periodMatch = period === 'all' || doctor.period === period;
      const specialtyMatch = specialty === 'all' || doctor.specialties.includes(specialty);
      if (!periodMatch || !specialtyMatch) {
        return false;
      }

      if (!keyword) {
        return true;
      }

      const haystack = [
        doctor.name,
        doctor.era,
        doctor.period,
        doctor.contribution,
        ...doctor.specialties,
        ...doctor.notableWorks
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(keyword);
    }).sort((a, b) => periodOrder.indexOf(a.period) - periodOrder.indexOf(b.period) || a.id - b.id);
  };

  const render = () => {
    const filtered = filterDoctors();
    listEl.innerHTML = '';

    if (!filtered.length) {
      const empty = document.createElement('p');
      empty.className = 'doctor-empty';
      empty.textContent = '目前沒有符合條件的名醫，請調整搜尋或篩選條件。';
      listEl.appendChild(empty);
    } else {
      filtered.forEach(doctor => {
        listEl.appendChild(renderCard(doctor));
      });
    }

    countEl.textContent = `共 ${filtered.length} 名名醫`;
    updateStats(filtered);
  };

  [searchInput, periodSelect, specialtySelect].forEach(control => {
    control.addEventListener('input', render);
    control.addEventListener('change', render);
  });

  render();
});
