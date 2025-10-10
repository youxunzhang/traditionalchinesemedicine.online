const wheelData = {
    dinner: [
        {
            name: '蔥薑鮭魚排＋藜麥＋柚香芥蘭',
            headline: 'Omega-3 與植化素兼具，溫陽補氣',
            nutrition: '熱量約 520 kcal · 蛋白質 34g · Omega-3 2.1g · 膳食纖維 9g',
            tcm: '鮭魚溫陽補氣，藜麥健脾補中，柚香芥蘭疏肝解膩。',
            modern: '富含 EPA/DHA 與維生素 C，有助於運動後修復。'
        },
        {
            name: '砂鍋牛蒡雞湯＋紫米飯＋炒三色甜椒',
            headline: '高蛋白與多彩蔬菜，補氣血兼解疲勞',
            nutrition: '熱量約 580 kcal · 蛋白質 33g · 複合碳水 65g · 膳食纖維 8g',
            tcm: '雞湯補氣血，牛蒡宣散風熱，紫米養肝腎。',
            modern: '富含花青素與鉀，有助於維持循環與肌力。'
        },
        {
            name: '麻油山藥豆腐鍋＋金針菇＋黑木耳',
            headline: '植物性蛋白與好油脂，潤燥養陰',
            nutrition: '熱量約 480 kcal · 蛋白質 28g · 脂肪 18g · 膳食纖維 10g',
            tcm: '麻油暖宮，山藥健脾補肺，黑木耳潤燥活血。',
            modern: '提供不飽和脂肪與多醣體，適合想減少動物脂肪者。'
        },
        {
            name: '普洱茶燉鯛魚＋蓮藕＋紅棗薏仁飯',
            headline: '清潤去濕、安神助眠',
            nutrition: '熱量約 510 kcal · 蛋白質 31g · 膳食纖維 11g · 鉀 850mg',
            tcm: '普洱行氣化濕，蓮藕涼血健脾，紅棗薏仁補血利水。',
            modern: '低脂高鉀，晚餐想輕盈但具飽足感的好選擇。'
        }
    ],
    lunch: [
        {
            name: '紅麴雞胸沙拉＋芝麻紫蘇醬',
            headline: '低脂高蛋白，提振午間專注力',
            nutrition: '熱量約 480 kcal · 蛋白質 32g · 碳水 42g · 鎂 110mg',
            tcm: '紅麴活血化瘀，紫蘇理氣寬中，芝麻潤腸養血。',
            modern: '搭配藜麥葉菜，兼顧纖維與好油脂。'
        },
        {
            name: '蕎麥涼麵＋胡麻醬＋海帶芽小菜',
            headline: '降火清爽，維持下午血糖穩定',
            nutrition: '熱量約 520 kcal · 蛋白質 24g · 低 GI 碳水 58g · 膳食纖維 12g',
            tcm: '蕎麥清熱健胃，胡麻滋陰，海帶芽軟堅散結。',
            modern: '富含膳食纖維與褐藻膠，適合久坐上班族。'
        },
        {
            name: '三色糙米飯盒＋清蒸鱈魚＋醬燒芥菜',
            headline: '優質蛋白與抗氧化蔬菜一次到位',
            nutrition: '熱量約 560 kcal · 蛋白質 35g · Omega-3 1.8g · 膳食纖維 9g',
            tcm: '鱈魚補腎益精，糙米健脾益氣，芥菜散寒利氣。',
            modern: '含硒與維生素 K，有助心血管保健。'
        },
        {
            name: '洛神花豆腐捲＋蘋果薯泥＋白木耳湯',
            headline: '抗氧化清爽套餐，提振午後情緒',
            nutrition: '熱量約 500 kcal · 蛋白質 26g · 膳食纖維 13g · 維生素 C 120mg',
            tcm: '洛神花清熱利水，白木耳潤肺生津，豆腐補氣養陰。',
            modern: '素食友善並具備豐富植化素，適合炎熱季節。'
        }
    ],
    breakfast: [
        {
            name: '燕麥紅棗粥＋溫泉蛋＋杏仁片',
            headline: '穩定血糖的溫潤開啟',
            nutrition: '熱量約 430 kcal · 蛋白質 20g · β-葡聚醣 3g · 鐵質 4mg',
            tcm: '燕麥健脾益氣，紅棗養血安神，杏仁潤肺止咳。',
            modern: '高纖維搭配優質蛋白，延長飽足感。'
        },
        {
            name: '山藥枸杞奶昔＋全麥饅頭＋芝麻豆腐抹醬',
            headline: '健脾補腎組合，適合晨間暖胃',
            nutrition: '熱量約 450 kcal · 蛋白質 22g · 碳水 55g · 鈣 320mg',
            tcm: '山藥補脾肺，枸杞滋補肝腎，芝麻養血潤燥。',
            modern: '提供鈣質與植物性蛋白，適合素食者。'
        },
        {
            name: '黑芝麻豆漿＋雜糧吐司＋蘋果肉桂醬',
            headline: '溫中補腎，暖身又醒腦',
            nutrition: '熱量約 440 kcal · 蛋白質 19g · 鈣 380mg · 膳食纖維 10g',
            tcm: '黑芝麻補肝腎，蘋果潤肺生津，肉桂溫中散寒。',
            modern: '含多酚與鈣質，有助骨骼與血脂調節。'
        },
        {
            name: '紫薯薏仁能量碗＋無糖優格＋奇亞籽',
            headline: '高纖抗氧化，兼顧腸道菌相',
            nutrition: '熱量約 420 kcal · 蛋白質 21g · 膳食纖維 14g · 益生菌 20 億 CFU',
            tcm: '紫薯溫補脾腎，薏仁健脾滲濕，奇亞籽潤腸。',
            modern: '含益生菌與Omega-3，適合晨間快速補給。'
        }
    ],
    takeout: [
        {
            name: '味噌湯烏龍麵＋秋葵＋海苔粉',
            headline: '外帶也能低鈉高纖',
            nutrition: '熱量約 540 kcal · 蛋白質 24g · 鈉 1450mg · 膳食纖維 11g',
            tcm: '味噌暖胃，秋葵滑腸護胃，海苔軟堅化痰。',
            modern: '建議減半湯底並加秋葵，維持電解質平衡。'
        },
        {
            name: '黑胡椒牛肉飯＋酵醪高麗菜絲＋菊花茶',
            headline: '快速補鐵又降火氣',
            nutrition: '熱量約 600 kcal · 蛋白質 32g · 鐵 5.5mg · 鉀 780mg',
            tcm: '牛肉補氣血，高麗菜和胃理氣，菊花茶清肝明目。',
            modern: '以糙米飯取代白飯，搭配酵醪醬減少油膩感。'
        },
        {
            name: '麻辣豆花鍋＋胡蘿蔔汁＋糙米飯',
            headline: '暖身祛寒，同時顧腸道',
            nutrition: '熱量約 580 kcal · 蛋白質 27g · 鈉 1600mg · 膳食纖維 12g',
            tcm: '花椒溫中散寒，豆花清熱生津，胡蘿蔔補肝明目。',
            modern: '建議加海帶芽提升鉀含量，平衡鍋底鹽份。'
        },
        {
            name: '港式烤鴨卷＋青木瓜沙拉＋冬瓜茶',
            headline: '酸甜開胃，舒緩外食油膩',
            nutrition: '熱量約 560 kcal · 蛋白質 29g · 脂肪 18g · 維生素 C 95mg',
            tcm: '烤鴨溫補，青木瓜消食化滯，冬瓜茶利水清熱。',
            modern: '搭配全麥捲餅減少精緻澱粉，增加膳食纖維。'
        }
    ]
};

const categoryLabels = {
    dinner: '晚餐 Dinner Roulette',
    lunch: '午餐 Lunch Roulette',
    breakfast: '早餐 Breakfast Roulette',
    takeout: '外帶 Takeout Roulette'
};

const wheelColors = ['#1fa87a', '#f2c94c', '#56ccf2', '#eb5757', '#9b51e0', '#f2994a', '#27ae60', '#bb6bd9'];

let currentCategory = 'dinner';
let currentRotation = 0;

const wheelElement = document.getElementById('pairingWheel');
const spinButton = document.getElementById('spinButton');
const wheelResult = document.getElementById('wheelResult');
const wheelCenterLabel = document.getElementById('wheelCenterLabel');
const comboList = document.getElementById('comboList');
const tabButtons = document.querySelectorAll('.wheel-tab');

function updateWheelGradient(combos) {
    if (!wheelElement || !combos || combos.length === 0) return;
    const slice = 360 / combos.length;
    const segments = combos.map((_, index) => {
        const start = index * slice;
        const end = start + slice;
        const color = wheelColors[index % wheelColors.length];
        return `${color} ${start}deg ${end}deg`;
    });
    wheelElement.style.background = `conic-gradient(${segments.join(', ')})`;
}

function renderCombos(combos) {
    if (!comboList) return;
    comboList.innerHTML = '';
    combos.forEach((combo, index) => {
        const article = document.createElement('article');
        article.className = 'combo-card';
        article.dataset.index = index.toString();
        article.innerHTML = `
            <header class="combo-card-header">
                <span class="combo-index">${String(index + 1).padStart(2, '0')}</span>
                <h3>${combo.name}</h3>
            </header>
            <p class="combo-headline">${combo.headline}</p>
            <p class="combo-meta"><i class="fas fa-fire-alt"></i> ${combo.nutrition}</p>
            <p class="combo-meta"><i class="fas fa-leaf"></i> ${combo.tcm}</p>
            <p class="combo-meta"><i class="fas fa-seedling"></i> ${combo.modern}</p>
        `;
        comboList.appendChild(article);
    });
}

function setActiveCategory(category) {
    if (!wheelElement) return;
    const combos = wheelData[category];
    if (!combos) return;
    currentCategory = category;
    currentRotation = 0;
    wheelElement.style.transform = 'rotate(0deg)';
    updateWheelGradient(combos);
    renderCombos(combos);
    if (wheelCenterLabel) {
        wheelCenterLabel.textContent = categoryLabels[category];
    }
    if (wheelResult) {
        wheelResult.textContent = '準備好後點擊「開始輪盤」，即可抽出專屬餐點。';
    }
    highlightCard(-1);
}

function highlightCard(index) {
    document.querySelectorAll('.combo-card').forEach(card => {
        const isMatch = Number(card.dataset.index) === index;
        card.classList.toggle('is-selected', isMatch);
    });
}

function handleSpin() {
    if (!wheelElement) return;
    const combos = wheelData[currentCategory];
    if (!combos || combos.length === 0) return;

    const randomIndex = Math.floor(Math.random() * combos.length);
    const slice = 360 / combos.length;
    const turns = Math.floor(Math.random() * 3) + 4; // 4-6 full spins
    currentRotation += turns * 360 + slice * randomIndex;

    wheelElement.classList.add('is-spinning');
    wheelElement.style.transform = `rotate(${currentRotation}deg)`;
    spinButton.disabled = true;

    setTimeout(() => {
        const combo = combos[randomIndex];
        if (wheelResult) {
            wheelResult.innerHTML = `<strong>${combo.name}</strong><br>${combo.nutrition}<br>${combo.tcm}`;
        }
        highlightCard(randomIndex);
        wheelElement.classList.remove('is-spinning');
        spinButton.disabled = false;
    }, 1600);
}

if (spinButton) {
    spinButton.addEventListener('click', handleSpin);
}

if (tabButtons) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            setActiveCategory(button.dataset.category);
        });
    });
}

setActiveCategory(currentCategory);
