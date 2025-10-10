import fallbackHerbs from './shennong-fallback.js';

const REMOTE_SOURCES = [
  'https://raw.githubusercontent.com/modood/Traditional-Chinese-Medicines/master/data/shennong.json',
  'https://cdn.jsdelivr.net/gh/modood/Traditional-Chinese-Medicines@master/data/shennong.json'
];

const GRADE_MAP = new Map([
  ['上品', 'Superior'],
  ['中品', 'Medium'],
  ['下品', 'Regular'],
  ['上', 'Superior'],
  ['中', 'Medium'],
  ['下', 'Regular']
]);

function normalizeGrade(value) {
  if (!value) return 'Superior';
  const text = String(value).trim();
  return GRADE_MAP.get(text) || text;
}

function buildName(item) {
  const baseName = [item.name, item.herb, item.title]
    .find(val => typeof val === 'string' && val.trim());
  const pinyin = [item.pinyin, item.py]
    .find(val => typeof val === 'string' && val.trim());
  if (!baseName && !pinyin) {
    return '未詳藥味';
  }
  if (!baseName) {
    return pinyin;
  }
  if (!pinyin || baseName.includes('（')) {
    return baseName;
  }
  return `${baseName}（${pinyin}）`;
}

function selectText(item) {
  const candidates = [
    item.classicalText,
    item.classic,
    item.description,
    item.content,
    item.effect,
    item.comment,
    item.function,
    item.functions,
    item.mainIndications,
    item.remark
  ];
  const text = candidates.find(val => typeof val === 'string' && val.trim());
  return text ? text.trim() : '暫無相關記載。';
}

function normalizeHerb(item, index) {
  return {
    id: Number.isFinite(Number(item.id)) ? Number(item.id) : index + 1,
    name: buildName(item),
    grade: normalizeGrade(item.grade),
    classicalText: selectText(item)
  };
}

async function fetchRemoteHerbs(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    },
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error(`非預期的回應：${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('取得的資料格式不正確');
  }
  const normalized = data.map(normalizeHerb);
  return normalized.sort((a, b) => a.id - b.id);
}

export async function loadShennongHerbs() {
  for (const url of REMOTE_SOURCES) {
    try {
      return await fetchRemoteHerbs(url);
    } catch (error) {
      console.warn(`[shennong-loader] 無法從 ${url} 取得資料：`, error);
    }
  }

  console.warn('[shennong-loader] 使用本地備援資料。');
  const normalized = fallbackHerbs.map(normalizeHerb);
  return normalized.sort((a, b) => a.id - b.id);
}

export default loadShennongHerbs;
