const herbMatrix = [
    {
        id: 'shennong-superior',
        tone: 'emerald',
        source: '《神農本草經》',
        tag: '上品養生',
        title: '上品扶正養榮',
        summary: '養命扶正，久服延年，以人參、靈芝等甘平益氣之品為代表。',
        herbs: ['人參', '靈芝', '玉竹', '女貞子', '黃精'],
        note: '原文強調「主補虛羸，益氣養榮」，多屬平和滋補，適合長期調養。'
    },
    {
        id: 'shennong-medium',
        tone: 'amber',
        source: '《神農本草經》',
        tag: '中品調和',
        title: '中品調和陰陽',
        summary: '調和臟腑、和營衛為主，以當歸、白芍等酸甘和中之藥平衡陰陽。',
        herbs: ['當歸', '白芍', '柴胡', '黃芩', '麥門冬'],
        note: '中品多兼具補洩與調節之用，強調「無毒」或「小毒」，常用以修復機能。'
    },
    {
        id: 'shennong-regular',
        tone: 'crimson',
        source: '《神農本草經》',
        tag: '下品攻邪',
        title: '下品祛邪攻實',
        summary: '偏重逐邪攻堅，如附子、大黃等辛熱或苦寒之品，短期使用以截病勢。',
        herbs: ['附子', '大黃', '甘遂', '烏頭', '半夏'],
        note: '多屬有毒之品，原文提醒「久服損人」，臨床強調嚴謹炮製與劑量控制。'
    },
    {
        id: 'bencao-herb',
        tone: 'teal',
        source: '《本草綱目》',
        tag: '草部',
        title: '草部芳香解表',
        summary: '藿香、薄荷等芳香草本善於解表化濕，兼具理氣和胃、化濁辟穢之效。',
        herbs: ['薄荷', '紫蘇', '藿香', '荊芥', '防風'],
        note: '李時珍依植物形態分類草部，強調香竄透表、善祛風寒或暑濕之作用。'
    },
    {
        id: 'bencao-wood',
        tone: 'copper',
        source: '《本草綱目》',
        tag: '木部',
        title: '木部補益固本',
        summary: '杜仲、桂枝等木本藥強筋固腎、溫通經脈，為補陽強壯的重要藥群。',
        herbs: ['桂枝', '杜仲', '肉桂', '桑寄生', '續斷'],
        note: '《綱目》以木部統攝樹皮與枝幹類藥，著重固攝筋骨與調暢陽氣。'
    },
    {
        id: 'bencao-insect',
        tone: 'indigo',
        source: '《本草綱目》',
        tag: '蟲魚部',
        title: '蟲魚祛風搜風',
        summary: '蜈蚣、全蠍等走竄通絡，搜風止痙，用於頑固風痙與結聚疼痛。',
        herbs: ['蜈蚣', '全蠍', '僵蠶', '海馬', '蛇蛻'],
        note: '李時珍詳錄蟲魚部藥性與炮製，強調蟲類善走竄、魚介類善補腎。'
    },
    {
        id: 'zhu-detox',
        tone: 'jade',
        source: '朱良春蟲藥',
        tag: '解毒散結',
        title: '蟲藥解毒透膿',
        summary: '斑蝥、蟾酥等以毒攻毒，善於透膿散結，適用於頑固癰腫與腫瘤外治。',
        herbs: ['斑蝥', '蟾酥', '蟅蟲', '馬蜂', '穿山甲'],
        note: '朱良春主張審證精用蟲藥，取其強烈走竄解毒之勢，搭配外敷或內服。'
    },
    {
        id: 'zhu-meridian',
        tone: 'bronze',
        source: '朱良春蟲藥',
        tag: '通絡止痛',
        title: '蟲藥通絡止痛',
        summary: '地龍、水蛭等入絡行血，活血通絡兼止痛，善治瘀阻痹證與中風後遺症。',
        herbs: ['地龍', '水蛭', '土鱉蟲', '蝼蛄', '蜞蝦'],
        note: '臨床強調配伍補益之品，以蟲藥搜通瘀阻，再輔以補氣養血善後。'
    },
    {
        id: 'zhu-calming',
        tone: 'scarlet',
        source: '朱良春蟲藥',
        tag: '熄風鎮痙',
        title: '蟲藥熄風鎮痙',
        summary: '全蠍、蜈蚣等善於熄風止痙，配伍牛黃、天麻調治驚癇抽搐。',
        herbs: ['全蠍', '蜈蚣', '僵蠶', '蟬蛻', '蚯蚓'],
        note: '朱氏重視「蟲類善走竄」之特點，以少量蟲藥引藥直達經絡以平息風動。'
    }
];

function buildLegend(data) {
    const summary = data.reduce((acc, item) => {
        acc[item.source] = (acc[item.source] || 0) + 1;
        return acc;
    }, {});

    return `
        <h3 class="matrix-legend__title">來源統計</h3>
        <ul class="matrix-legend__list">
            ${Object.entries(summary).map(([source, count]) => `
                <li>
                    <span class="matrix-legend__source">${source}</span>
                    <span class="matrix-legend__count">${count} 格</span>
                </li>
            `).join('')}
        </ul>
    `;
}

function createMatrixCard(item) {
    const herbsList = item.herbs.map(name => `<li>${name}</li>`).join('');

    return `
        <article class="matrix-card matrix-card--${item.tone}" role="listitem">
            <div class="matrix-card__header">
                <span class="matrix-card__source">${item.source}</span>
                <span class="matrix-card__tag">${item.tag}</span>
            </div>
            <h3 class="matrix-card__title">${item.title}</h3>
            <p class="matrix-card__summary">${item.summary}</p>
            <ul class="matrix-card__herbs" aria-label="代表藥味">
                ${herbsList}
            </ul>
            <p class="matrix-card__note">${item.note}</p>
        </article>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const gridEl = document.getElementById('herbMatrix');
    const legendEl = document.getElementById('herbMatrixLegend');

    if (!gridEl) {
        return;
    }

    if (legendEl) {
        legendEl.innerHTML = buildLegend(herbMatrix);
    }

    gridEl.innerHTML = herbMatrix.map(createMatrixCard).join('');
});
