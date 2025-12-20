const beverages = [
    {
        id: 'caffe_latte',
        category: 'espresso',
        categoryLabel: '經典濃縮咖啡',
        name: '馥郁那堤 Caffè Latte',
        description: '濃縮配上綿密蒸奶，是星巴克人氣經典。',
        defaultMilk: 'dairy2',
        wellness: { thermal: 'warm', stomach: 'gentle', caffeine: 'medium' },
        tcmTip: '那堤屬於溫暖飲品，適合晨間提振陽氣，若脾胃虛寒可加薑粉與肉桂粉。',
        sizes: {
            tall: { calories: 150, sugar: 14, protein: 10, fat: 6, carbs: 15, fiber: 0, sodium: 115, caffeine: 150 },
            grande: { calories: 190, sugar: 18, protein: 12, fat: 7, carbs: 18, fiber: 0, sodium: 150, caffeine: 150 },
            venti: { calories: 230, sugar: 21, protein: 15, fat: 9, carbs: 21, fiber: 0, sodium: 180, caffeine: 225 }
        }
    },
    {
        id: 'flat_white',
        category: 'espresso',
        categoryLabel: '經典濃縮咖啡',
        name: '澳白 Flat White',
        description: '以麗斯特濃縮搭配絲滑奶泡，風味濃厚。',
        defaultMilk: 'whole',
        wellness: { thermal: 'warm', stomach: 'rich', caffeine: 'high' },
        tcmTip: '澳白質地較濃厚，建議細啜慢飲，避免一次喝太快造成胃部滯膩。',
        sizes: {
            tall: { calories: 170, sugar: 13, protein: 10, fat: 9, carbs: 16, fiber: 0, sodium: 120, caffeine: 195 },
            grande: { calories: 220, sugar: 17, protein: 13, fat: 12, carbs: 20, fiber: 0, sodium: 160, caffeine: 195 },
            venti: { calories: 290, sugar: 22, protein: 16, fat: 15, carbs: 25, fiber: 0, sodium: 210, caffeine: 260 }
        }
    },
    {
        id: 'caramel_macchiato',
        category: 'espresso',
        categoryLabel: '經典濃縮咖啡',
        name: '焦糖瑪奇朵',
        description: '香草糖漿加上濃縮與焦糖淋醬，甜香層次分明。',
        defaultMilk: 'dairy2',
        wellness: { thermal: 'warm', stomach: 'rich', caffeine: 'medium' },
        tcmTip: '焦糖瑪奇朵偏甜，脾胃偏濕或血糖波動者建議減糖，並搭配肉桂粉平衡。',
        sizes: {
            tall: { calories: 180, sugar: 24, protein: 9, fat: 6, carbs: 26, fiber: 0, sodium: 150, caffeine: 75 },
            grande: { calories: 250, sugar: 33, protein: 12, fat: 8, carbs: 35, fiber: 0, sodium: 190, caffeine: 150 },
            venti: { calories: 320, sugar: 42, protein: 15, fat: 9, carbs: 44, fiber: 0, sodium: 240, caffeine: 225 }
        }
    },
    {
        id: 'cappuccino',
        category: 'espresso',
        categoryLabel: '經典濃縮咖啡',
        name: '卡布奇諾',
        description: '奶泡比例較高，口感輕盈，咖啡因適中。',
        defaultMilk: 'dairy2',
        wellness: { thermal: 'warm', stomach: 'light', caffeine: 'medium' },
        tcmTip: '卡布奇諾奶泡輕盈，配上肉桂粉可助脾陽，適合早晨或下午茶。',
        sizes: {
            tall: { calories: 120, sugar: 10, protein: 8, fat: 4, carbs: 12, fiber: 0, sodium: 90, caffeine: 150 },
            grande: { calories: 150, sugar: 12, protein: 10, fat: 5, carbs: 15, fiber: 0, sodium: 115, caffeine: 150 },
            venti: { calories: 200, sugar: 15, protein: 13, fat: 7, carbs: 18, fiber: 0, sodium: 150, caffeine: 225 }
        }
    },
    {
        id: 'americano',
        category: 'espresso',
        categoryLabel: '經典濃縮咖啡',
        name: '美式咖啡',
        description: '以濃縮加水拉開層次，咖啡因含量較高。',
        defaultMilk: 'none',
        wellness: { thermal: 'warm', stomach: 'light', caffeine: 'high' },
        tcmTip: '美式咖啡性偏溫燥，若胃酸過多或睡眠淺者建議搭配堅果或燕麥，避免空腹飲用。',
        sizes: {
            tall: { calories: 10, sugar: 0, protein: 1, fat: 0, carbs: 2, fiber: 0, sodium: 10, caffeine: 155 },
            grande: { calories: 15, sugar: 0, protein: 2, fat: 0, carbs: 3, fiber: 0, sodium: 15, caffeine: 225 },
            venti: { calories: 20, sugar: 0, protein: 2, fat: 0, carbs: 4, fiber: 0, sodium: 25, caffeine: 300 }
        }
    },
    {
        id: 'cold_brew',
        category: 'cold',
        categoryLabel: '冷萃與冰咖啡',
        name: '冷萃咖啡',
        description: '長時間低溫浸泡，口感滑順帶有果香。',
        defaultMilk: 'none',
        wellness: { thermal: 'cool', stomach: 'light', caffeine: 'high' },
        tcmTip: '冷萃偏涼，體質偏寒者可改為少冰或加薑汁粉，避免胃寒。',
        sizes: {
            tall: { calories: 5, sugar: 0, protein: 1, fat: 0, carbs: 1, fiber: 0, sodium: 10, caffeine: 155 },
            grande: { calories: 5, sugar: 0, protein: 1, fat: 0, carbs: 2, fiber: 0, sodium: 15, caffeine: 205 },
            venti: { calories: 10, sugar: 0, protein: 1, fat: 0, carbs: 2, fiber: 0, sodium: 20, caffeine: 310 }
        }
    },
    {
        id: 'nitro_brew',
        category: 'cold',
        categoryLabel: '冷萃與冰咖啡',
        name: '氮氣冷萃咖啡',
        description: '注入氮氣的綿密冷萃，甜感自然但咖啡因較高。',
        defaultMilk: 'none',
        wellness: { thermal: 'cool', stomach: 'light', caffeine: 'high' },
        tcmTip: '氮氣冷萃帶有細緻泡沫，建議下午三點前飲用，避免影響睡眠。',
        sizes: {
            tall: { calories: 5, sugar: 0, protein: 1, fat: 0, carbs: 1, fiber: 0, sodium: 10, caffeine: 215 },
            grande: { calories: 5, sugar: 0, protein: 1, fat: 0, carbs: 2, fiber: 0, sodium: 15, caffeine: 280 },
            venti: { calories: 10, sugar: 0, protein: 1, fat: 0, carbs: 3, fiber: 0, sodium: 20, caffeine: 350 }
        }
    },
    {
        id: 'matcha_latte',
        category: 'tea',
        categoryLabel: '茶飲與抹茶',
        name: '抹茶那堤',
        description: '日式抹茶搭配牛奶，帶有清爽草本香氣。',
        defaultMilk: 'dairy2',
        wellness: { thermal: 'cool', stomach: 'gentle', caffeine: 'medium' },
        tcmTip: '抹茶清肝熱但偏涼，陽虛或手腳冰冷者建議少冰或改喝熱飲。',
        sizes: {
            tall: { calories: 190, sugar: 24, protein: 8, fat: 5, carbs: 32, fiber: 2, sodium: 115, caffeine: 80 },
            grande: { calories: 240, sugar: 32, protein: 10, fat: 7, carbs: 36, fiber: 3, sodium: 150, caffeine: 105 },
            venti: { calories: 310, sugar: 40, protein: 13, fat: 9, carbs: 48, fiber: 3, sodium: 180, caffeine: 130 }
        }
    },
    {
        id: 'genmaicha_oat',
        category: 'tea',
        categoryLabel: '茶飲與抹茶',
        name: '玄米燕麥那堤',
        description: '玄米茶香配上燕麥奶，口感滑順且穀物香氣明顯。',
        defaultMilk: 'oat',
        wellness: { thermal: 'neutral', stomach: 'gentle', caffeine: 'low' },
        tcmTip: '玄米香氣能安神，燕麥奶補脾氣，適合下午或晚間飲用。',
        sizes: {
            tall: { calories: 160, sugar: 14, protein: 4, fat: 5, carbs: 26, fiber: 2, sodium: 120, caffeine: 60 },
            grande: { calories: 210, sugar: 18, protein: 5, fat: 6, carbs: 32, fiber: 3, sodium: 150, caffeine: 80 },
            venti: { calories: 260, sugar: 23, protein: 6, fat: 8, carbs: 40, fiber: 3, sodium: 200, caffeine: 100 }
        }
    },
    {
        id: 'chai_latte',
        category: 'tea',
        categoryLabel: '茶飲與抹茶',
        name: '印度香料茶那堤',
        description: '紅茶基底搭配肉桂、豆蔻與牛奶，辛香溫暖。',
        defaultMilk: 'dairy2',
        wellness: { thermal: 'warm', stomach: 'gentle', caffeine: 'medium' },
        tcmTip: '香料茶性溫助陽，可暖胃驅寒，但糖分較高，建議搭配全穀點心。',
        sizes: {
            tall: { calories: 190, sugar: 32, protein: 6, fat: 4, carbs: 33, fiber: 0, sodium: 105, caffeine: 95 },
            grande: { calories: 240, sugar: 42, protein: 8, fat: 5, carbs: 45, fiber: 0, sodium: 135, caffeine: 95 },
            venti: { calories: 310, sugar: 53, protein: 9, fat: 6, carbs: 60, fiber: 0, sodium: 180, caffeine: 120 }
        }
    },
    {
        id: 'mocha',
        category: 'espresso',
        categoryLabel: '經典濃縮咖啡',
        name: '摩卡咖啡',
        description: '巧克力醬搭配濃縮與鮮奶油，濃醇甜香。',
        defaultMilk: 'dairy2',
        wellness: { thermal: 'warm', stomach: 'rich', caffeine: 'medium' },
        tcmTip: '摩卡偏溫燥且含糖高，建議慢慢品嚐並搭配白開水，避免燥熱上火。',
        sizes: {
            tall: { calories: 290, sugar: 35, protein: 10, fat: 14, carbs: 36, fiber: 3, sodium: 105, caffeine: 95 },
            grande: { calories: 370, sugar: 43, protein: 14, fat: 19, carbs: 50, fiber: 4, sodium: 160, caffeine: 175 },
            venti: { calories: 460, sugar: 55, protein: 18, fat: 22, carbs: 64, fiber: 5, sodium: 200, caffeine: 185 }
        }
    },
    {
        id: 'strawberry_acai',
        category: 'refreshers',
        categoryLabel: '星冰樂與特調',
        name: '草莓巴西莓星沁爽',
        description: '以草莓與百香果果汁調製，咖啡因較低。',
        defaultMilk: 'none',
        wellness: { thermal: 'cool', stomach: 'light', caffeine: 'low' },
        tcmTip: '果茶偏涼，建議避免空腹大量飲用，可加薑片或改少冰。',
        sizes: {
            tall: { calories: 90, sugar: 20, protein: 1, fat: 0, carbs: 22, fiber: 1, sodium: 15, caffeine: 45 },
            grande: { calories: 140, sugar: 31, protein: 1, fat: 0, carbs: 35, fiber: 1, sodium: 20, caffeine: 45 },
            venti: { calories: 200, sugar: 42, protein: 1, fat: 0, carbs: 49, fiber: 1, sodium: 30, caffeine: 70 }
        }
    },
    {
        id: 'matcha_frapp',
        category: 'refreshers',
        categoryLabel: '星冰樂與特調',
        name: '抹茶星冰樂',
        description: '經典綠色冰沙，加入鮮奶油風味濃郁。',
        defaultMilk: 'dairy2',
        wellness: { thermal: 'cool', stomach: 'rich', caffeine: 'medium' },
        tcmTip: '冰沙偏寒，建議在夏季或運動後飲用，脾胃虛寒者可少冰或改熱飲。',
        sizes: {
            tall: { calories: 300, sugar: 43, protein: 7, fat: 11, carbs: 49, fiber: 1, sodium: 200, caffeine: 70 },
            grande: { calories: 420, sugar: 63, protein: 10, fat: 15, carbs: 64, fiber: 1, sodium: 270, caffeine: 95 },
            venti: { calories: 520, sugar: 80, protein: 13, fat: 18, carbs: 83, fiber: 2, sodium: 340, caffeine: 115 }
        }
    },
    {
        id: 'iced_shaken_espresso',
        category: 'cold',
        categoryLabel: '冷萃與冰咖啡',
        name: '冰搖濃縮燕麥奶',
        description: '濃縮與燕麥奶搖勻，甜度較低。',
        defaultMilk: 'oat',
        wellness: { thermal: 'cool', stomach: 'gentle', caffeine: 'high' },
        tcmTip: '冰搖濃縮兼具清爽與咖啡因，午後飲用可提高專注，記得搭配暖食避免胃寒。',
        sizes: {
            tall: { calories: 140, sugar: 11, protein: 3, fat: 7, carbs: 18, fiber: 1, sodium: 100, caffeine: 255 },
            grande: { calories: 180, sugar: 13, protein: 4, fat: 7, carbs: 27, fiber: 1, sodium: 180, caffeine: 340 },
            venti: { calories: 270, sugar: 19, protein: 5, fat: 11, carbs: 39, fiber: 2, sodium: 260, caffeine: 365 }
        }
    }
];

const milkOptions = [
    {
        id: 'none',
        name: '不添加奶類',
        delta: {
            tall: { calories: 0, sugar: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sodium: 0 },
            grande: { calories: 0, sugar: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sodium: 0 },
            venti: { calories: 0, sugar: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sodium: 0 }
        },
        note: '適合清爽口感'
    },
    {
        id: 'dairy2',
        name: '2% 低脂牛奶（預設）',
        delta: {
            tall: { calories: 0, sugar: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sodium: 0 },
            grande: { calories: 0, sugar: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sodium: 0 },
            venti: { calories: 0, sugar: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sodium: 0 }
        },
        note: '溫潤順口'
    },
    {
        id: 'whole',
        name: '全脂牛奶',
        delta: {
            tall: { calories: 30, sugar: 1, protein: 1, fat: 3, carbs: 2, fiber: 0, sodium: 10 },
            grande: { calories: 40, sugar: 1, protein: 1, fat: 4, carbs: 3, fiber: 0, sodium: 15 },
            venti: { calories: 50, sugar: 1, protein: 2, fat: 5, carbs: 4, fiber: 0, sodium: 20 }
        },
        note: '質地濃郁'
    },
    {
        id: 'nonfat',
        name: '脫脂牛奶',
        delta: {
            tall: { calories: -30, sugar: -1, protein: 0, fat: -4, carbs: -2, fiber: 0, sodium: -5 },
            grande: { calories: -40, sugar: -2, protein: 0, fat: -5, carbs: -3, fiber: 0, sodium: -10 },
            venti: { calories: -50, sugar: -2, protein: 0, fat: -6, carbs: -4, fiber: 0, sodium: -12 }
        },
        note: '輕盈低脂'
    },
    {
        id: 'oat',
        name: '燕麥奶',
        delta: {
            tall: { calories: 20, sugar: 3, protein: 1, fat: 1, carbs: 4, fiber: 1, sodium: 35 },
            grande: { calories: 30, sugar: 4, protein: 1, fat: 1, carbs: 6, fiber: 1, sodium: 45 },
            venti: { calories: 40, sugar: 5, protein: 1, fat: 2, carbs: 8, fiber: 1, sodium: 60 }
        },
        note: '穀香滑順'
    },
    {
        id: 'almond',
        name: '杏仁奶',
        delta: {
            tall: { calories: -10, sugar: -3, protein: 0, fat: -1, carbs: -2, fiber: 0, sodium: 20 },
            grande: { calories: -10, sugar: -4, protein: 0, fat: -1, carbs: -3, fiber: 0, sodium: 25 },
            venti: { calories: -15, sugar: -5, protein: 0, fat: -1, carbs: -4, fiber: 0, sodium: 35 }
        },
        note: '堅果香氣'
    },
    {
        id: 'soy',
        name: '豆乳',
        delta: {
            tall: { calories: 15, sugar: 1, protein: 2, fat: 1, carbs: 2, fiber: 1, sodium: 25 },
            grande: { calories: 25, sugar: 2, protein: 3, fat: 2, carbs: 3, fiber: 1, sodium: 35 },
            venti: { calories: 35, sugar: 3, protein: 4, fat: 3, carbs: 4, fiber: 1, sodium: 45 }
        },
        note: '植物性蛋白'
    }
];

const toppingAdjustments = {
    whip: { calories: 80, sugar: 6, protein: 1, fat: 7, carbs: 6, fiber: 0, sodium: 20, caffeine: 0 },
    coldFoam: { calories: 40, sugar: 5, protein: 1, fat: 2, carbs: 5, fiber: 0, sodium: 15, caffeine: 0 },
    protein: { calories: 90, sugar: 2, protein: 12, fat: 1, carbs: 6, fiber: 1, sodium: 60, caffeine: 0 }
};

const wellnessDictionary = {
    thermal: {
        warm: '溫暖飲品',
        neutral: '溫平順口',
        cool: '清爽偏涼'
    },
    stomach: {
        light: '脾胃負擔低',
        gentle: '溫和易消化',
        rich: '濃郁需慢飲'
    },
    caffeine: {
        low: '咖啡因較低',
        medium: '咖啡因適中',
        high: '咖啡因偏高'
    }
};

const milkMessages = {
    oat: '燕麥奶甘溫入脾，可作為脾胃虛弱者的替代選擇。',
    almond: '杏仁奶性偏溫潤，有助潤肺止咳，糖量也相對較低。',
    soy: '豆乳可補益氣血，但若脾胃濕重需適量。',
    nonfat: '脫脂牛奶減少脂肪，若怕寒者可搭配薑粉以免過度清淡。',
    whole: '全脂牛奶滋潤度高，建議細啜慢飲，留意脾胃濕重。'
};

const beverageMap = new Map(beverages.map(item => [item.id, item]));
const milkMap = new Map(milkOptions.map(item => [item.id, item]));

function initCalorieCalculator() {
    const beverageSelect = document.getElementById('beverageSelect');
    const milkSelect = document.getElementById('milkSelect');
    const sizeSelect = document.getElementById('sizeSelect');
    const syrupRange = document.getElementById('syrupRange');
    const rangeValue = document.querySelector('.range-value');
    const extraShots = document.getElementById('extraShots');
    const toppingInputs = document.querySelectorAll('.toppings-group input[type="checkbox"]');

    if (!beverageSelect || !milkSelect) {
        return;
    }

    populateBeverages(beverageSelect);
    populateMilkOptions(milkSelect);
    syncMilkSelection(beverageSelect, milkSelect);

    beverageSelect.addEventListener('change', () => {
        syncMilkSelection(beverageSelect, milkSelect);
        updateSummary();
    });

    [milkSelect, sizeSelect, syrupRange, extraShots].forEach(input => {
        if (!input) return;
        input.addEventListener('input', updateSummary);
        input.addEventListener('change', updateSummary);
    });

    if (syrupRange && rangeValue) {
        syrupRange.addEventListener('input', () => {
            rangeValue.textContent = `目前 ${syrupRange.value} 泵`;
        });
    }

    toppingInputs.forEach(input => {
        input.addEventListener('change', updateSummary);
    });

    updateSummary();
}

document.addEventListener('DOMContentLoaded', initCalorieCalculator);

function populateBeverages(selectEl) {
    const groups = new Map();
    beverages.forEach(item => {
        const label = item.categoryLabel || '飲品';
        if (!groups.has(label)) {
            const groupEl = document.createElement('optgroup');
            groupEl.label = label;
            groups.set(label, groupEl);
        }
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        option.dataset.description = item.description;
        groups.get(label).appendChild(option);
    });

    selectEl.innerHTML = '';
    groups.forEach(group => selectEl.appendChild(group));
    const firstValue = beverages[0]?.id;
    if (firstValue) {
        selectEl.value = firstValue;
    }
}

function populateMilkOptions(selectEl) {
    selectEl.innerHTML = '';
    milkOptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.id;
        opt.textContent = `${option.name}`;
        opt.dataset.note = option.note;
        selectEl.appendChild(opt);
    });
}

function syncMilkSelection(beverageSelect, milkSelect) {
    const beverage = beverageMap.get(beverageSelect.value);
    if (!beverage) return;
    const defaultMilk = beverage.defaultMilk && milkMap.has(beverage.defaultMilk)
        ? beverage.defaultMilk
        : milkOptions[0]?.id;
    if (defaultMilk) {
        milkSelect.value = defaultMilk;
    }
    const noneOption = milkSelect.querySelector('option[value="none"]');
    if (noneOption) {
        noneOption.disabled = beverage.defaultMilk !== 'none';
        if (noneOption.disabled && milkSelect.value === 'none') {
            milkSelect.value = defaultMilk;
        }
    }
}

function updateSummary() {
    const beverageSelect = document.getElementById('beverageSelect');
    const sizeSelect = document.getElementById('sizeSelect');
    const milkSelect = document.getElementById('milkSelect');
    const syrupRange = document.getElementById('syrupRange');
    const rangeValue = document.querySelector('.range-value');
    const extraShots = document.getElementById('extraShots');
    const toppingInputs = document.querySelectorAll('.toppings-group input[type="checkbox"]');

    const summaryName = document.getElementById('summaryName');
    const summaryDescriptor = document.getElementById('summaryDescriptor');
    const totalCalories = document.getElementById('totalCalories');
    const totalSugar = document.getElementById('totalSugar');
    const totalProtein = document.getElementById('totalProtein');
    const totalFat = document.getElementById('totalFat');
    const totalCaffeine = document.getElementById('totalCaffeine');
    const totalCarbs = document.getElementById('totalCarbs');
    const totalFiber = document.getElementById('totalFiber');
    const totalSodium = document.getElementById('totalSodium');
    const tcmTip = document.getElementById('tcmTip');
    const wellnessTags = document.getElementById('wellnessTags');
    const customSummary = document.getElementById('customSummary');

    const beverage = beverageMap.get(beverageSelect?.value);
    const sizeKey = sizeSelect?.value || 'grande';
    const baseSizeData = beverage?.sizes?.[sizeKey];
    const pumps = Number.parseInt(syrupRange?.value ?? '0', 10) || 0;

    if (rangeValue) {
        rangeValue.textContent = pumps > 0
            ? `目前 ${pumps} 泵 · +${pumps * 20} kcal / +${pumps * 5} g 糖`
            : '目前 0 泵';
    }

    if (!beverage || !baseSizeData) {
        summaryName.textContent = '請選擇飲品';
        summaryDescriptor.textContent = '設定杯型與配料後，將顯示熱量與營養資訊。';
        totalCalories.textContent = '0 kcal';
        totalSugar.textContent = '0 g';
        totalProtein.textContent = '0 g';
        totalFat.textContent = '0 g';
        totalCarbs.textContent = '0 g';
        totalFiber.textContent = '0 g';
        totalSodium.textContent = '0 mg';
        totalCaffeine.textContent = '0 mg';
        tcmTip.textContent = '選擇飲品後，將依脾胃寒熱、氣血狀態提供調整建議。';
        wellnessTags.innerHTML = '';
        if (customSummary) {
            customSummary.innerHTML = '<li>使用預設配方</li>';
        }
        return;
    }

    const totals = { ...baseSizeData };
    const adjustments = [];

    const milkOption = milkMap.get(milkSelect?.value) || milkOptions[0];
    if (milkOption && milkOption.delta) {
        const delta = milkOption.delta[sizeKey];
        addTotals(totals, delta);
        if (milkOption.id !== beverage.defaultMilk && milkOption.id !== 'none') {
            adjustments.push(`${milkOption.name}：${milkOption.note}`);
        }
    }

    if (pumps > 0) {
        const syrupDelta = {
            calories: pumps * 20,
            sugar: pumps * 5,
            protein: 0,
            fat: 0,
            carbs: pumps * 5,
            fiber: 0,
            sodium: pumps * 2,
            caffeine: 0
        };
        addTotals(totals, syrupDelta);
        adjustments.push(`糖漿 ${pumps} 泵`);
    }

    const shots = clamp(Number.parseInt(extraShots?.value ?? '0', 10) || 0, 0, 4);
    if (extraShots) {
        extraShots.value = shots;
    }
    if (shots > 0) {
        const shotDelta = {
            calories: shots * 5,
            sugar: 0,
            protein: 0,
            fat: 0,
            carbs: shots,
            fiber: 0,
            sodium: 0,
            caffeine: shots * 75
        };
        addTotals(totals, shotDelta);
        adjustments.push(`額外濃縮 ${shots} 份`);
    }

    const toppingNotes = [];
    toppingInputs.forEach(input => {
        if (input.checked) {
            const topping = toppingAdjustments[input.value];
            if (topping) {
                addTotals(totals, topping);
                toppingNotes.push(input.labels?.[0]?.textContent || input.value);
            }
        }
    });
    if (toppingNotes.length) {
        adjustments.push(`配料：${toppingNotes.join('、')}`);
    }

    summaryName.textContent = `${beverage.name}｜${formatSizeLabel(sizeKey)}`;
    summaryDescriptor.textContent = beverage.description;

    totalCalories.textContent = `${Math.round(totals.calories)} kcal`;
    totalSugar.textContent = `${roundToOne(totals.sugar)} g`;
    totalProtein.textContent = `${roundToOne(totals.protein)} g`;
    totalFat.textContent = `${roundToOne(totals.fat)} g`;
    totalCarbs.textContent = `${roundToOne(totals.carbs)} g`;
    totalFiber.textContent = `${roundToOne(totals.fiber)} g`;
    totalSodium.textContent = `${Math.round(totals.sodium)} mg`;
    totalCaffeine.textContent = `${Math.round(totals.caffeine)} mg`;

    renderWellnessTags(wellnessTags, beverage.wellness, totals);
    if (customSummary) {
        const items = adjustments.length ? adjustments : ['使用預設配方'];
        customSummary.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            customSummary.appendChild(li);
        });
    }
    tcmTip.textContent = composeTip(beverage, milkOption, totals, pumps, shots, adjustments);
}

function addTotals(base, delta) {
    if (!delta) return;
    Object.keys(delta).forEach(key => {
        base[key] = (base[key] || 0) + (delta[key] || 0);
    });
}

function renderWellnessTags(container, wellness, totals) {
    container.innerHTML = '';
    if (!wellness) return;

    Object.entries(wellness).forEach(([dimension, value]) => {
        const text = wellnessDictionary[dimension]?.[value];
        if (!text) return;
        const span = document.createElement('span');
        span.className = `wellness-tag wellness-tag--${dimension}`;
        span.textContent = text;
        container.appendChild(span);
    });

    if (totals.sugar > 45) {
        container.appendChild(createTag('糖分較高，建議減糖', 'warning'));
    }
    if (totals.caffeine > 300) {
        container.appendChild(createTag('咖啡因超過 300mg', 'warning'));
    }
    if (totals.protein >= 20) {
        container.appendChild(createTag('高蛋白補給', 'positive'));
    }
}

function createTag(text, modifier) {
    const span = document.createElement('span');
    span.className = `wellness-tag wellness-tag--${modifier}`;
    span.textContent = text;
    return span;
}

function composeTip(beverage, milkOption, totals, pumps, shots, adjustments) {
    let tip = beverage.tcmTip || '';
    const extras = [];

    if (milkOption && milkMessages[milkOption.id]) {
        extras.push(milkMessages[milkOption.id]);
    }

    if (pumps >= 3) {
        extras.push('糖漿超過 3 泵，建議改用肉桂粉或無糖香草粉取代部分甜味。');
    }

    if (shots >= 2) {
        extras.push('額外濃縮提升咖啡因，心悸或睡眠淺者請於午前飲用。');
    }

    if (totals.caffeine > 320) {
        extras.push('總咖啡因偏高，務必搭配溫水與適量點心。');
    }

    if (adjustments.length) {
        extras.push(`目前客製：${adjustments.join('；')}。`);
    }

    if (totals.sugar < 15) {
        extras.push('糖分控制良好，可搭配一份水果或堅果維持能量。');
    }

    return [tip, ...extras].join(' ');
}

function formatSizeLabel(sizeKey) {
    switch (sizeKey) {
        case 'tall':
            return 'Tall 355ml';
        case 'grande':
            return 'Grande 473ml';
        case 'venti':
            return 'Venti 710ml';
        default:
            return sizeKey;
    }
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function roundToOne(value) {
    return Math.round((value + Number.EPSILON) * 10) / 10;
}
