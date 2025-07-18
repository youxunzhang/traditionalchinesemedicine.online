// 本草数据 - 参考《神农本草经》三品分类
const herbsData = [
    // 上品 - 君药，无毒，久服轻身延年
    {
        id: 1,
        name: "人参",
        category: "上品",
        description: "大补元气，复脉固脱，补脾益肺，生津养血，安神益智。久服轻身延年。",
        value: "补气之王，百草之王，价值极高",
        icon: "🌿",
        effects: ["补气", "安神", "生津", "延年"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘、微苦，平；归脾、肺经"
    },
    {
        id: 2,
        name: "黄芪",
        category: "上品",
        description: "补气升阳，益卫固表，利水消肿，生津养血，行气活血。",
        value: "补气要药，增强免疫，延年益寿",
        icon: "🌱",
        effects: ["补气", "固表", "利水", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，微温；归肺、脾经"
    },
    {
        id: 3,
        name: "灵芝",
        category: "上品",
        description: "补气安神，益心气，补肝气，益肺气，益肾气，益脾气。久服轻身不老。",
        value: "仙草之王，延年益寿，长生不老",
        icon: "🍄",
        effects: ["补气", "安神", "益五脏", "延年"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，平；归心、肺、肾经"
    },
    {
        id: 4,
        name: "何首乌",
        category: "上品",
        description: "补肝肾，益精血，乌须发，强筋骨。久服延年不老。",
        value: "乌发圣药，延年益寿，长生不老",
        icon: "🌿",
        effects: ["补肝肾", "益精血", "乌发", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "苦、甘，微温；归肝、肾经"
    },
    {
        id: 5,
        name: "枸杞",
        category: "上品",
        description: "滋补肝肾，益精明目。久服轻身不老。",
        value: "明目良药，养生佳品，延年益寿",
        icon: "🍒",
        effects: ["滋补肝肾", "明目", "养生", "延年"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归肝、肾经"
    },
    {
        id: 6,
        name: "茯苓",
        category: "上品",
        description: "利水渗湿，健脾宁心。久服安魂养神，不饥延年。",
        value: "利水要药，安神益智，延年益寿",
        icon: "🍄",
        effects: ["利水", "健脾", "安神", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、淡，平；归心、脾、肾经"
    },
    {
        id: 7,
        name: "甘草",
        category: "上品",
        description: "补脾益气，清热解毒，祛痰止咳，缓急止痛，调和诸药。",
        value: "国老，调和诸药，延年益寿",
        icon: "🌿",
        effects: ["补脾", "益气", "调和", "延年"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归心、肺、脾、胃经"
    },
    {
        id: 8,
        name: "大枣",
        category: "上品",
        description: "补中益气，养血安神。久服轻身延年。",
        value: "补血要药，安神益智，延年益寿",
        icon: "🍎",
        effects: ["补中", "益气", "养血", "延年"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，温；归脾、胃经"
    },
    {
        id: 9,
        name: "山药",
        category: "上品",
        description: "补脾养胃，生津益肺，补肾涩精。久服耳目聪明，轻身延年。",
        value: "补脾要药，益智明目，延年益寿",
        icon: "🍠",
        effects: ["补脾", "养胃", "益智", "延年"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归脾、肺、肾经"
    },
    {
        id: 10,
        name: "石斛",
        category: "上品",
        description: "益胃生津，滋阴清热。久服厚肠胃，轻身延年。",
        value: "滋阴要药，益胃生津，延年益寿",
        icon: "🌿",
        effects: ["益胃", "生津", "滋阴", "延年"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，微寒；归胃、肾经"
    },

    // 中品 - 臣药，无毒或有毒，治病补虚
    {
        id: 11,
        name: "当归",
        category: "中品",
        description: "补血活血，调经止痛，润燥滑肠。",
        value: "补血圣药，妇科良药，血中之宝",
        icon: "🌸",
        effects: ["补血", "调经", "活血"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、辛，温；归肝、心、脾经"
    },
    {
        id: 12,
        name: "白芍",
        category: "中品",
        description: "养血调经，敛阴止汗，柔肝止痛，平抑肝阳。",
        value: "养血要药，调经止痛，柔肝良药",
        icon: "🌸",
        effects: ["养血", "调经", "柔肝"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、酸，微寒；归肝、脾经"
    },
    {
        id: 13,
        name: "熟地黄",
        category: "中品",
        description: "补血滋阴，益精填髓。",
        value: "补血要药，滋阴圣品，益精良药",
        icon: "🌿",
        effects: ["补血", "滋阴", "益精"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，微温；归肝、肾经"
    },
    {
        id: 14,
        name: "丹参",
        category: "中品",
        description: "活血祛瘀，通经止痛，清心除烦，凉血消痈。",
        value: "活血化瘀良药，心脑血管要药",
        icon: "🌹",
        effects: ["活血", "祛瘀", "通经"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微寒；归心、肝经"
    },
    {
        id: 15,
        name: "川芎",
        category: "中品",
        description: "活血行气，祛风止痛。",
        value: "血中之气药，头痛要药",
        icon: "🌿",
        effects: ["活血", "行气", "祛风"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，温；归肝、胆、心包经"
    },
    {
        id: 16,
        name: "红花",
        category: "中品",
        description: "活血通经，散瘀止痛。",
        value: "活血要药，妇科良药",
        icon: "🌺",
        effects: ["活血", "通经", "散瘀"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，温；归心、肝经"
    },
    {
        id: 17,
        name: "桃仁",
        category: "中品",
        description: "活血祛瘀，润肠通便，止咳平喘。",
        value: "活血化瘀要药，润肠良药",
        icon: "🍑",
        effects: ["活血", "祛瘀", "润肠"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、甘，平；归心、肝、大肠经"
    },
    {
        id: 18,
        name: "金银花",
        category: "中品",
        description: "清热解毒，疏散风热。",
        value: "清热解毒良药，抗病毒要药",
        icon: "🌺",
        effects: ["清热", "解毒", "疏散风热"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，寒；归心、肺、胃、大肠经"
    },
    {
        id: 19,
        name: "板蓝根",
        category: "中品",
        description: "清热解毒，凉血利咽。",
        value: "抗病毒要药，清热解毒良药",
        icon: "🌿",
        effects: ["清热", "解毒", "凉血"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归心、肺、胃经"
    },
    {
        id: 20,
        name: "连翘",
        category: "中品",
        description: "清热解毒，消肿散结，疏散风热。",
        value: "清热解毒要药，消肿良药",
        icon: "🌿",
        effects: ["清热", "解毒", "消肿"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微寒；归心、肺、胆经"
    },
    {
        id: 21,
        name: "蒲公英",
        category: "中品",
        description: "清热解毒，消肿散结，利尿通淋。",
        value: "清热解毒良药，消肿散结要药",
        icon: "��",
        effects: ["清热", "解毒", "消肿"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦，寒；归肝、胃经"
    },
    {
        id: 22,
        name: "防风",
        category: "中品",
        description: "祛风解表，胜湿止痛，止痉。",
        value: "祛风要药，解表良药",
        icon: "🍃",
        effects: ["祛风", "解表", "胜湿"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、甘，温；归膀胱、肝、脾经"
    },
    {
        id: 23,
        name: "天麻",
        category: "中品",
        description: "息风止痉，平抑肝阳，祛风通络。",
        value: "息风止痉良药，头痛要药",
        icon: "🌿",
        effects: ["息风", "止痉", "平肝"],
        price: "昂贵",
        rarity: "稀有",
        grade: "中品",
        natureMeridian: "甘，平；归肝、肾经"
    },
    {
        id: 24,
        name: "钩藤",
        category: "中品",
        description: "息风定惊，清热平肝。",
        value: "息风定惊要药，平肝良药",
        icon: "🌿",
        effects: ["息风", "定惊", "平肝"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，微寒；归肝、心包经"
    },
    {
        id: 25,
        name: "半夏",
        category: "中品",
        description: "燥湿化痰，降逆止呕，消痞散结。",
        value: "化痰要药，止呕良药",
        icon: "🌿",
        effects: ["燥湿", "化痰", "降逆"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，温；归脾、胃、肺经"
    },
    {
        id: 26,
        name: "陈皮",
        category: "中品",
        description: "理气健脾，燥湿化痰。",
        value: "理气要药，健脾良药",
        icon: "🍊",
        effects: ["理气", "健脾", "燥湿"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、苦，温；归脾、肺经"
    },
    {
        id: 27,
        name: "枳实",
        category: "中品",
        description: "破气消积，化痰散痞。",
        value: "破气要药，消积良药",
        icon: "🍊",
        effects: ["破气", "消积", "化痰"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微寒；归脾、胃、大肠经"
    },
    {
        id: 28,
        name: "厚朴",
        category: "中品",
        description: "燥湿消痰，下气除满。",
        value: "燥湿要药，除满良药",
        icon: "🌿",
        effects: ["燥湿", "消痰", "下气"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，温；归脾、胃、大肠经"
    },
    {
        id: 29,
        name: "砂仁",
        category: "中品",
        description: "化湿开胃，理气温中，安胎。",
        value: "化湿要药，开胃良药",
        icon: "🌿",
        effects: ["化湿", "开胃", "理气"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，温；归脾、胃、肾经"
    },
    {
        id: 30,
        name: "白豆蔻",
        category: "中品",
        description: "化湿行气，温中止呕，开胃消食。",
        value: "化湿要药，开胃良药",
        icon: "🌿",
        effects: ["化湿", "行气", "温中"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，温；归脾、胃经"
    },

    // 下品 - 佐使药，有毒，攻邪治病
    {
        id: 31,
        name: "大黄",
        category: "下品",
        description: "泻下攻积，清热泻火，凉血解毒，逐瘀通经。",
        value: "泻下要药，攻积良药，将军之药",
        icon: "🌿",
        effects: ["泻下", "攻积", "清热"],
        price: "便宜",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "苦，寒；归脾、胃、大肠、肝、心经"
    },
    {
        id: 32,
        name: "芒硝",
        category: "下品",
        description: "泻下通便，润燥软坚，清热消肿。",
        value: "泻下要药，软坚良药",
        icon: "💎",
        effects: ["泻下", "通便", "软坚"],
        price: "便宜",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "苦，寒；归胃、大肠、膀胱经"
    },
    {
        id: 33,
        name: "甘遂",
        category: "下品",
        description: "泻水逐饮，消肿散结。",
        value: "泻水要药，逐饮良药",
        icon: "🌿",
        effects: ["泻水", "逐饮", "消肿"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "苦，寒，有毒；归胃、大肠经"
    },
    {
        id: 34,
        name: "巴豆",
        category: "下品",
        description: "峻下冷积，逐水退肿，祛痰利咽，外用蚀疮。有大毒。",
        value: "峻下要药，冷积良药，有大毒",
        icon: "🌿",
        effects: ["峻下", "冷积", "逐水"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛，热，有大毒；归胃、大肠经"
    },
    {
        id: 35,
        name: "牵牛子",
        category: "下品",
        description: "泻下逐水，去积杀虫。",
        value: "泻下要药，逐水良药",
        icon: "🌿",
        effects: ["泻下", "逐水", "杀虫"],
        price: "便宜",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "苦，寒；归胃、大肠经"
    },
    {
        id: 36,
        name: "芫花",
        category: "下品",
        description: "泻水逐饮，祛痰止咳，杀虫疗疮。",
        value: "泻水要药，逐饮良药",
        icon: "🌸",
        effects: ["泻水", "逐饮", "祛痰"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "苦，辛，温，有毒；归肺、脾、肾经"
    },
    {
        id: 37,
        name: "大戟",
        category: "下品",
        description: "泻水逐饮，消肿散结。",
        value: "泻水要药，逐饮良药",
        icon: "🌿",
        effects: ["泻水", "逐饮", "消肿"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "苦，辛，温，有毒；归肺、肾、大肠经"
    },
    {
        id: 38,
        name: "商陆",
        category: "下品",
        description: "泻下逐水，消肿散结。",
        value: "泻水要药，逐饮良药",
        icon: "🌿",
        effects: ["泻下", "逐水", "消肿"],
        price: "便宜",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "苦，寒；归肺、脾、肾经"
    },
    {
        id: 39,
        name: "乌头",
        category: "下品",
        description: "祛风除湿，温经止痛。有大毒。",
        value: "祛风要药，温经良药，有大毒",
        icon: "🌿",
        effects: ["祛风", "除湿", "温经"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛、苦，热，有大毒；归心、肝、肾经"
    },
    {
        id: 40,
        name: "附子",
        category: "下品",
        description: "回阳救逆，补火助阳，散寒止痛。有大毒。",
        value: "回阳要药，救逆良药，有大毒",
        icon: "��",
        effects: ["回阳", "救逆", "补火"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛、甘，热，有大毒；归心、肾、脾经"
    },

    // 补充更多上品本草
    {
        id: 41,
        name: "五味子",
        category: "上品",
        description: "收敛固涩，益气生津，补肾宁心。久服轻身延年。",
        value: "收敛要药，益气生津，延年益寿",
        icon: "��",
        effects: ["收敛", "固涩", "益气", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "酸、甘，温；归肺、心、肾经"
    },
    {
        id: 42,
        name: "山茱萸",
        category: "上品",
        description: "补益肝肾，收敛固涩。久服轻身明目。",
        value: "补益肝肾要药，收敛固涩良药",
        icon: "🍒",
        effects: ["补益", "肝肾", "收敛", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "酸、涩，微温；归肝、肾经"
    },
    {
        id: 43,
        name: "菟丝子",
        category: "上品",
        description: "补益肝肾，固精缩尿，安胎，明目，止泻。",
        value: "补益肝肾要药，固精良药",
        icon: "🌿",
        effects: ["补益", "肝肾", "固精", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归肝、肾、脾经"
    },
    {
        id: 44,
        name: "沙苑子",
        category: "上品",
        description: "补肾固精，养肝明目。",
        value: "补肾固精要药，明目良药",
        icon: "🌿",
        effects: ["补肾", "固精", "明目", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，温；归肝、肾经"
    },
    {
        id: 45,
        name: "益智仁",
        category: "上品",
        description: "温脾开胃摄唾，暖肾固精缩尿。",
        value: "温脾要药，固精良药",
        icon: "🌿",
        effects: ["温脾", "开胃", "固精", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "辛，温；归脾、肾经"
    },

    // 补充更多中品本草
    {
        id: 46,
        name: "赤芍",
        category: "中品",
        description: "清热凉血，散瘀止痛。",
        value: "清热凉血要药，散瘀良药",
        icon: "🌸",
        effects: ["清热", "凉血", "散瘀"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微寒；归肝、脾经"
    },
    {
        id: 47,
        name: "生地黄",
        category: "中品",
        description: "清热凉血，养阴生津。",
        value: "清热凉血要药，养阴良药",
        icon: "��",
        effects: ["清热", "凉血", "养阴"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦，寒；归心、肝、肾经"
    },
    {
        id: 48,
        name: "玄参",
        category: "中品",
        description: "清热凉血，泻火解毒，滋阴。",
        value: "清热凉血要药，泻火良药",
        icon: "🌿",
        effects: ["清热", "凉血", "泻火"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归心、肺、胃、大肠经"
    },
    {
        id: 49,
        name: "牡丹皮",
        category: "中品",
        description: "清热凉血，活血化瘀。",
        value: "清热凉血要药，活血良药",
        icon: "🌸",
        effects: ["清热", "凉血", "活血"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，辛，微寒；归心、肝、肾经"
    },
    {
        id: 50,
        name: "紫草",
        category: "中品",
        description: "清热凉血，活血解毒，透疹。",
        value: "清热凉血要药，透疹良药",
        icon: "🌿",
        effects: ["清热", "凉血", "透疹"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归心、肝、脾经"
    },
    {
        id: 51,
        name: "水牛角",
        category: "中品",
        description: "清热凉血，解毒定惊。",
        value: "清热凉血要药，定惊良药",
        icon: "🦄",
        effects: ["清热", "凉血", "定惊"],
        price: "昂贵",
        rarity: "稀有",
        grade: "中品",
        natureMeridian: "咸，寒；归心、肝经"
    },
    {
        id: 52,
        name: "牛黄",
        category: "中品",
        description: "清心豁痰，开窍醒神，凉肝息风，清热解毒。",
        value: "开窍要药，定惊良药",
        icon: "💎",
        effects: ["清心", "豁痰", "开窍"],
        price: "昂贵",
        rarity: "稀有",
        grade: "中品",
        natureMeridian: "苦，凉；归心、肝、胆、胃经"
    },
    {
        id: 53,
        name: "珍珠",
        category: "中品",
        description: "安神定惊，明目消翳，解毒生肌。",
        value: "安神定惊要药，明目良药",
        icon: "💎",
        effects: ["安神", "定惊", "明目"],
        price: "昂贵",
        rarity: "稀有",
        grade: "中品",
        natureMeridian: "甘，寒；归心、肝经"
    },
    {
        id: 54,
        name: "龙骨",
        category: "中品",
        description: "镇惊安神，平肝潜阳，收敛固涩。",
        value: "镇惊安神要药，平肝良药",
        icon: "🦴",
        effects: ["镇惊", "安神", "平肝"],
        price: "昂贵",
        rarity: "稀有",
        grade: "中品",
        natureMeridian: "甘、涩，平；归心、肝、肾经"
    },
    {
        id: 55,
        name: "牡蛎",
        category: "中品",
        description: "重镇安神，潜阳补阴，软坚散结。",
        value: "重镇安神要药，软坚良药",
        icon: "🦪",
        effects: ["重镇", "安神", "软坚"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "咸，寒；归心、肝、肾经"
    },
    {
        id: 56,
        name: "代赭石",
        category: "中品",
        description: "平肝潜阳，重镇降逆，凉血止血。",
        value: "平肝潜阳要药，降逆良药",
        icon: "🪨",
        effects: ["平肝", "潜阳", "降逆"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归肝、胃经"
    },
    {
        id: 57,
        name: "石决明",
        category: "中品",
        description: "平肝潜阳，清肝明目。",
        value: "平肝潜阳要药，明目良药",
        icon: "🦪",
        effects: ["平肝", "潜阳", "明目"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "咸，寒；归肝、肾经"
    },
    {
        id: 58,
        name: "决明子",
        category: "中品",
        description: "清热明目，润肠通便。",
        value: "清热明目要药，润肠良药",
        icon: "🌿",
        effects: ["清热", "明目", "润肠"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦，寒；归肝、大肠经"
    },
    {
        id: 59,
        name: "青葙子",
        category: "中品",
        description: "清肝明目，退翳。",
        value: "清肝明目要药，退翳良药",
        icon: "��",
        effects: ["清肝", "明目", "退翳"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微寒；归肝、大肠经"
    },
    {
        id: 60,
        name: "密蒙花",
        category: "中品",
        description: "清热泻火，养肝明目，退翳。",
        value: "清热泻火要药，明目良药",
        icon: "🌸",
        effects: ["清热", "泻火", "明目"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，微寒；归肝、胆经"
    },
    {
        id: 61,
        name: "谷精草",
        category: "中品",
        description: "疏散风热，明目退翳。",
        value: "疏散风热要药，明目良药",
        icon: "��",
        effects: ["疏散", "风热", "明目"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，平；归肝、胆经"
    },
    {
        id: 62,
        name: "木贼",
        category: "中品",
        description: "疏散风热，明目退翳。",
        value: "疏散风热要药，明目良药",
        icon: "🌿",
        effects: ["疏散", "风热", "明目"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，平；归肝、肺经"
    },
    {
        id: 63,
        name: "蝉蜕",
        category: "中品",
        description: "疏散风热，利咽开音，透疹，明目退翳，息风止痉。",
        value: "疏散风热要药，利咽良药",
        icon: "🦗",
        effects: ["疏散", "风热", "利咽"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，平；归肺、肝经"
    },
    {
        id: 64,
        name: "桑叶",
        category: "中品",
        description: "疏散风热，清肺润燥，平抑肝阳，清肝明目。",
        value: "疏散风热要药，清肺良药",
        icon: "🍃",
        effects: ["疏散", "风热", "清肺"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归肺、肝经"
    },
    {
        id: 65,
        name: "菊花",
        category: "中品",
        description: "疏散风热，平抑肝阳，清肝明目，清热解毒。",
        value: "疏散风热要药，平肝良药",
        icon: "🌼",
        effects: ["疏散", "风热", "平肝"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，苦，微寒；归肺、肝经"
    },
    {
        id: 66,
        name: "蔓荆子",
        category: "中品",
        description: "疏散风热，清利头目。",
        value: "疏散风热要药，清利头目良药",
        icon: "🌿",
        effects: ["疏散", "风热", "清利"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，辛，微寒；归膀胱、肝、胆经"
    },
    {
        id: 67,
        name: "淡豆豉",
        category: "中品",
        description: "解表除烦，宣发郁热。",
        value: "解表除烦要药，宣发良药",
        icon: "🫘",
        effects: ["解表", "除烦", "宣发"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，微温；归肺、胃经"
    },
    {
        id: 68,
        name: "浮萍",
        category: "中品",
        description: "发汗解表，透疹止痒，利尿消肿。",
        value: "发汗解表要药，透疹良药",
        icon: "🌿",
        effects: ["发汗", "解表", "透疹"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，寒；归肺、膀胱经"
    },
    {
        id: 69,
        name: "木贼",
        category: "中品",
        description: "疏散风热，明目退翳。",
        value: "疏散风热要药，明目良药",
        icon: "🌿",
        effects: ["疏散", "风热", "明目"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，平；归肝、肺经"
    },
    {
        id: 70,
        name: "升麻",
        category: "中品",
        description: "发表透疹，清热解毒，升举阳气。",
        value: "发表透疹要药，升举良药",
        icon: "🌿",
        effects: ["发表", "透疹", "升举"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、微甘，平；归肺、脾、胃、大肠经"
    },

    // 补充更多下品本草
    {
        id: 71,
        name: "砒霜",
        category: "下品",
        description: "外用蚀疮去腐，内服劫痰平喘。有大毒。",
        value: "蚀疮要药，有大毒",
        icon: "��",
        effects: ["蚀疮", "去腐", "劫痰"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛，温，有大毒；归肺、肝经"
    },
    {
        id: 72,
        name: "雄黄",
        category: "下品",
        description: "解毒杀虫，燥湿祛痰，截疟。有毒。",
        value: "解毒杀虫要药，有毒",
        icon: "🪨",
        effects: ["解毒", "杀虫", "燥湿"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛，温，有毒；归肝、胃经"
    },
    {
        id: 73,
        name: "硫黄",
        category: "下品",
        description: "外用解毒杀虫疗疮，内服补火助阳通便。有毒。",
        value: "解毒杀虫要药，有毒",
        icon: "🪨",
        effects: ["解毒", "杀虫", "补火"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "酸，温，有毒；归肾、大肠经"
    },
    {
        id: 74,
        name: "白矾",
        category: "下品",
        description: "外用解毒杀虫，燥湿止痒，内服止血止泻，祛除风痰。",
        value: "解毒杀虫要药，止血良药",
        icon: "🪨",
        effects: ["解毒", "杀虫", "止血"],
        price: "便宜",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "酸，寒；归肺、脾、大肠经"
    },
    {
        id: 75,
        name: "蛇床子",
        category: "下品",
        description: "杀虫止痒，燥湿祛风，温肾壮阳。",
        value: "杀虫止痒要药，温肾良药",
        icon: "🌿",
        effects: ["杀虫", "止痒", "温肾"],
        price: "中等",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "辛，温；归肾、肝经"
    },
    {
        id: 76,
        name: "蜂房",
        category: "下品",
        description: "攻毒杀虫，祛风止痛。",
        value: "攻毒杀虫要药，祛风良药",
        icon: "🐝",
        effects: ["攻毒", "杀虫", "祛风"],
        price: "中等",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "辛，温；归胃、肝经"
    },
    {
        id: 77,
        name: "土荆皮",
        category: "下品",
        description: "杀虫止痒。",
        value: "杀虫止痒要药",
        icon: "🌿",
        effects: ["杀虫", "止痒"],
        price: "便宜",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "辛，温；归胃、肝经"
    },
    {
        id: 78,
        name: "樟脑",
        category: "下品",
        description: "除湿杀虫，温散止痛，开窍辟秽。",
        value: "除湿杀虫要药，开窍良药",
        icon: "��",
        effects: ["除湿", "杀虫", "开窍"],
        price: "中等",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "辛，温；归肺、肝经"
    },
    {
        id: 79,
        name: "蟾酥",
        category: "下品",
        description: "解毒止痛，开窍醒神。有毒。",
        value: "解毒止痛要药，有毒",
        icon: "🐸",
        effects: ["解毒", "止痛", "开窍"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛，温，有毒；归心、肝经"
    },
    {
        id: 80,
        name: "马钱子",
        category: "下品",
        description: "通络止痛，散结消肿。有大毒。",
        value: "通络止痛要药，有大毒",
        icon: "🌿",
        effects: ["通络", "止痛", "散结"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "苦，寒，有大毒；归肝、脾经"
    },
    // 新增20味本草，字段齐全
    {
        id: 81,
        name: "百合",
        category: "上品",
        description: "养阴润肺，清心安神。久服益寿。",
        value: "养阴润肺要药，安神良药",
        icon: "🌸",
        effects: ["养阴", "润肺", "安神"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，微寒；归心、肺经"
    },
    {
        id: 82,
        name: "天门冬",
        category: "上品",
        description: "养阴润燥，清肺生津。久服轻身益寿。",
        value: "养阴润燥要药，生津良药",
        icon: "🌿",
        effects: ["养阴", "润燥", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、苦，大寒；归肺、肾经"
    },
    {
        id: 83,
        name: "麦冬",
        category: "上品",
        description: "养阴润肺，益胃生津，清心除烦。",
        value: "养阴润肺要药，益胃良药",
        icon: "🌱",
        effects: ["养阴", "润肺", "益胃"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、微苦，微寒；归心、肺、胃经"
    },
    {
        id: 84,
        name: "女贞子",
        category: "上品",
        description: "补肝肾，明目乌发。",
        value: "补肝肾要药，明目良药",
        icon: "🌿",
        effects: ["补肝肾", "明目", "乌发"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、苦，凉；归肝、肾经"
    },
    {
        id: 85,
        name: "桑椹",
        category: "上品",
        description: "滋阴补血，生津润燥。",
        value: "滋阴补血要药，生津良药",
        icon: "🍇",
        effects: ["滋阴", "补血", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，寒；归心、肝、肾经"
    },
    {
        id: 86,
        name: "阿胶",
        category: "上品",
        description: "补血止血，滋阴润燥。",
        value: "补血止血要药，滋阴良药",
        icon: "🍬",
        effects: ["补血", "止血", "滋阴"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，平；归肺、肝、肾经"
    },
    {
        id: 87,
        name: "柴胡",
        category: "中品",
        description: "疏肝解郁，和解表里，升举阳气。",
        value: "疏肝解郁要药，升阳良药",
        icon: "🌿",
        effects: ["疏肝", "解郁", "升阳"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、辛，微寒；归肝、胆、心包经"
    },
    {
        id: 88,
        name: "黄连",
        category: "中品",
        description: "清热燥湿，泻火解毒。",
        value: "清热燥湿要药，解毒良药",
        icon: "🌿",
        effects: ["清热", "燥湿", "解毒"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归心、肝、胃、大肠经"
    },
    {
        id: 89,
        name: "黄柏",
        category: "中品",
        description: "清热燥湿，泻火解毒。",
        value: "清热燥湿要药，解毒良药",
        icon: "🌿",
        effects: ["清热", "燥湿", "解毒"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归肾、膀胱、大肠经"
    },
    {
        id: 90,
        name: "知母",
        category: "中品",
        description: "清热泻火，滋阴润燥。",
        value: "清热泻火要药，滋阴良药",
        icon: "🌿",
        effects: ["清热", "泻火", "滋阴"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、甘，寒；归肺、胃、肾经"
    },
    {
        id: 91,
        name: "泽泻",
        category: "中品",
        description: "利水渗湿，泄热通淋。",
        value: "利水渗湿要药，泄热良药",
        icon: "🌿",
        effects: ["利水", "渗湿", "泄热"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、淡，寒；归肾、膀胱经"
    },
    {
        id: 92,
        name: "泽兰",
        category: "中品",
        description: "活血调经，祛瘀消肿。",
        value: "活血调经要药，祛瘀良药",
        icon: "🌿",
        effects: ["活血", "调经", "祛瘀"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、辛，温；归肝、脾经"
    },
    {
        id: 93,
        name: "狼毒",
        category: "下品",
        description: "杀虫止痒，攻毒消肿。有毒。",
        value: "杀虫止痒要药，攻毒良药",
        icon: "🌿",
        effects: ["杀虫", "止痒", "攻毒"],
        price: "中等",
        rarity: "常见",
        grade: "下品",
        natureMeridian: "辛，温，有毒；归肝、脾经"
    },
    {
        id: 94,
        name: "乌头",
        category: "下品",
        description: "祛风除湿，温经止痛。有大毒。",
        value: "祛风要药，温经良药，有大毒",
        icon: "🌿",
        effects: ["祛风", "除湿", "温经"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛、苦，热，有大毒；归心、肝、肾经"
    },
    {
        id: 95,
        name: "附子",
        category: "下品",
        description: "回阳救逆，补火助阳，散寒止痛。有大毒。",
        value: "回阳要药，救逆良药，有大毒",
        icon: "🌿",
        effects: ["回阳", "救逆", "补火"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛、甘，热，有大毒；归心、肾、脾经"
    },
    {
        id: 96,
        name: "巴豆",
        category: "下品",
        description: "峻下冷积，逐水退肿，祛痰利咽，外用蚀疮。有大毒。",
        value: "峻下要药，冷积良药，有大毒",
        icon: "🌿",
        effects: ["峻下", "冷积", "逐水"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛，热，有大毒；归胃、大肠经"
    },
    {
        id: 97,
        name: "砒霜",
        category: "下品",
        description: "外用蚀疮去腐，内服劫痰平喘。有大毒。",
        value: "蚀疮要药，有大毒",
        icon: "💀",
        effects: ["蚀疮", "去腐", "劫痰"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛，温，有大毒；归肺、肝经"
    },
    {
        id: 98,
        name: "雄黄",
        category: "下品",
        description: "解毒杀虫，燥湿祛痰，截疟。有毒。",
        value: "解毒杀虫要药，有毒",
        icon: "🪨",
        effects: ["解毒", "杀虫", "燥湿"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "辛，温，有毒；归肝、胃经"
    },
    {
        id: 99,
        name: "硫黄",
        category: "下品",
        description: "外用解毒杀虫疗疮，内服补火助阳通便。有毒。",
        value: "解毒杀虫要药，有毒",
        icon: "🪨",
        effects: ["解毒", "杀虫", "补火"],
        price: "中等",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "酸，温，有毒；归肾、大肠经"
    },
    {
        id: 100,
        name: "马钱子",
        category: "下品",
        description: "通络止痛，散结消肿。有大毒。",
        value: "通络止痛要药，有大毒",
        icon: "🌿",
        effects: ["通络", "止痛", "散结"],
        price: "昂贵",
        rarity: "稀有",
        grade: "下品",
        natureMeridian: "苦，寒，有大毒；归肝、脾经"
    },

    // 补充更多常见本草
    {
        id: 101,
        name: "覆盆子",
        category: "上品",
        description: "益肾固精，缩尿，明目。",
        value: "益肾固精要药，明目良药",
        icon: "🫐",
        effects: ["益肾", "固精", "缩尿", "明目"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、酸，微温；归肝、肾经"
    },
    {
        id: 102,
        name: "山楂",
        category: "中品",
        description: "消食化滞，活血散瘀。",
        value: "消食化滞要药，活血良药",
        icon: "🍎",
        effects: ["消食", "化滞", "活血"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "酸、甘，微温；归脾、胃、肝经"
    },
    {
        id: 103,
        name: "酸枣仁",
        category: "上品",
        description: "养心安神，敛汗生津。",
        value: "养心安神要药，敛汗良药",
        icon: "🌰",
        effects: ["养心", "安神", "敛汗"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、酸，平；归心、肝、胆经"
    },
    {
        id: 104,
        name: "柏子仁",
        category: "上品",
        description: "养心安神，润肠通便。",
        value: "养心安神要药，润肠良药",
        icon: "🌰",
        effects: ["养心", "安神", "润肠"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归心、肾、大肠经"
    },
    {
        id: 105,
        name: "远志",
        category: "上品",
        description: "安神益智，祛痰开窍，消散痈肿。",
        value: "安神益智要药，开窍良药",
        icon: "🌿",
        effects: ["安神", "益智", "开窍"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "苦、辛，温；归心、肾、肺经"
    },
    {
        id: 106,
        name: "合欢皮",
        category: "中品",
        description: "解郁安神，活血消肿。",
        value: "解郁安神要药，活血良药",
        icon: "🌸",
        effects: ["解郁", "安神", "活血"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，平；归心、肝经"
    },
    {
        id: 107,
        name: "夜交藤",
        category: "中品",
        description: "养心安神，祛风通络。",
        value: "养心安神要药，通络良药",
        icon: "🌿",
        effects: ["养心", "安神", "通络"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，平；归心、肝经"
    },
    {
        id: 108,
        name: "莲子",
        category: "上品",
        description: "补脾止泻，益肾涩精，养心安神。",
        value: "补脾止泻要药，养心安神良药",
        icon: "🪷",
        effects: ["补脾", "止泻", "养心"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、涩，平；归脾、肾、心经"
    },
    {
        id: 109,
        name: "芡实",
        category: "上品",
        description: "益肾固精，补脾止泻，除湿止带。",
        value: "益肾固精要药，补脾良药",
        icon: "🌿",
        effects: ["益肾", "固精", "补脾"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、涩，平；归脾、肾经"
    },
    {
        id: 110,
        name: "白果",
        category: "中品",
        description: "敛肺定喘，止带缩尿。",
        value: "敛肺定喘要药，止带良药",
        icon: "🌰",
        effects: ["敛肺", "定喘", "止带"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦、涩，平，有毒；归肺经"
    },
    {
        id: 111,
        name: "杏仁",
        category: "中品",
        description: "止咳平喘，润肠通便。",
        value: "止咳平喘要药，润肠良药",
        icon: "🥜",
        effects: ["止咳", "平喘", "润肠"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微温，有小毒；归肺、大肠经"
    },
    {
        id: 112,
        name: "桃仁",
        category: "中品",
        description: "活血祛瘀，润肠通便，止咳平喘。",
        value: "活血化瘀要药，润肠良药",
        icon: "🍑",
        effects: ["活血", "祛瘀", "润肠"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、甘，平；归心、肝、大肠经"
    },
    {
        id: 113,
        name: "郁李仁",
        category: "中品",
        description: "润肠通便，利水消肿。",
        value: "润肠通便要药，利水良药",
        icon: "🌰",
        effects: ["润肠", "通便", "利水"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、苦、甘，平；归脾、大肠、小肠经"
    },
    {
        id: 114,
        name: "火麻仁",
        category: "中品",
        description: "润肠通便。",
        value: "润肠通便要药",
        icon: "🌰",
        effects: ["润肠", "通便"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，平；归脾、胃、大肠经"
    },
    {
        id: 115,
        name: "松子仁",
        category: "上品",
        description: "润肠通便，润肺止咳。",
        value: "润肠通便要药，润肺良药",
        icon: "🌰",
        effects: ["润肠", "通便", "润肺"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，温；归肺、肝、大肠经"
    },
    {
        id: 116,
        name: "龙眼肉",
        category: "上品",
        description: "补益心脾，养血安神。",
        value: "补益心脾要药，养血安神良药",
        icon: "🍇",
        effects: ["补益", "心脾", "养血", "安神"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，温；归心、脾经"
    },
    {
        id: 117,
        name: "桑葚",
        category: "上品",
        description: "滋阴补血，生津润燥。",
        value: "滋阴补血要药，生津良药",
        icon: "🍇",
        effects: ["滋阴", "补血", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，寒；归心、肝、肾经"
    },
    {
        id: 118,
        name: "黑芝麻",
        category: "上品",
        description: "补肝肾，益精血，润肠燥。",
        value: "补肝肾要药，益精血良药",
        icon: "🫘",
        effects: ["补肝肾", "益精血", "润肠"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归肝、肾、大肠经"
    },
    {
        id: 119,
        name: "核桃仁",
        category: "上品",
        description: "补肾温肺，润肠通便。",
        value: "补肾温肺要药，润肠良药",
        icon: "🌰",
        effects: ["补肾", "温肺", "润肠"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，温；归肾、肺、大肠经"
    },
    {
        id: 120,
        name: "花生",
        category: "中品",
        description: "健脾养胃，润肺化痰。",
        value: "健脾养胃要药，润肺良药",
        icon: "🥜",
        effects: ["健脾", "养胃", "润肺"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，平；归脾、肺经"
    },

    // 继续补充《神农本草经》经典本草
    {
        id: 121,
        name: "地黄",
        category: "上品",
        description: "滋阴补血，清热生津。久服轻身延年。",
        value: "滋阴补血要药，延年益寿",
        icon: "🌱",
        effects: ["滋阴", "补血", "清热", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，寒；归心、肝、肾经"
    },
    {
        id: 122,
        name: "天门冬",
        category: "上品",
        description: "养阴润燥，清肺生津。久服轻身益寿。",
        value: "养阴润燥要药，生津良药",
        icon: "🌿",
        effects: ["养阴", "润燥", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、苦，大寒；归肺、肾经"
    },
    {
        id: 123,
        name: "麦门冬",
        category: "上品",
        description: "养阴润肺，益胃生津，清心除烦。",
        value: "养阴润肺要药，益胃良药",
        icon: "🌱",
        effects: ["养阴", "润肺", "益胃"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、微苦，微寒；归心、肺、胃经"
    },
    {
        id: 124,
        name: "女贞子",
        category: "上品",
        description: "补肝肾，明目乌发。",
        value: "补肝肾要药，明目良药",
        icon: "🌿",
        effects: ["补肝肾", "明目", "乌发"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、苦，凉；归肝、肾经"
    },
    {
        id: 125,
        name: "桑椹",
        category: "上品",
        description: "滋阴补血，生津润燥。",
        value: "滋阴补血要药，生津良药",
        icon: "🍇",
        effects: ["滋阴", "补血", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，寒；归心、肝、肾经"
    },
    {
        id: 126,
        name: "阿胶",
        category: "上品",
        description: "补血止血，滋阴润燥。",
        value: "补血止血要药，滋阴良药",
        icon: "🍬",
        effects: ["补血", "止血", "滋阴"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，平；归肺、肝、肾经"
    },
    {
        id: 127,
        name: "鹿茸",
        category: "上品",
        description: "补肾阳，益精血，强筋骨，调冲任，托疮毒。",
        value: "补肾阳要药，益精血良药",
        icon: "🦌",
        effects: ["补肾阳", "益精血", "强筋骨"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘、咸，温；归肾、肝经"
    },
    {
        id: 128,
        name: "龟板",
        category: "上品",
        description: "滋阴潜阳，益肾健骨，养血补心，固经止崩。",
        value: "滋阴潜阳要药，益肾良药",
        icon: "🐢",
        effects: ["滋阴", "潜阳", "益肾"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘、咸，寒；归肾、肝、心经"
    },
    {
        id: 129,
        name: "鳖甲",
        category: "上品",
        description: "滋阴潜阳，软坚散结，退热除蒸。",
        value: "滋阴潜阳要药，软坚良药",
        icon: "🐢",
        effects: ["滋阴", "潜阳", "软坚"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "咸，寒；归肝、肾经"
    },
    {
        id: 130,
        name: "海马",
        category: "上品",
        description: "补肾壮阳，调气活血。",
        value: "补肾壮阳要药，调气良药",
        icon: "🐠",
        effects: ["补肾", "壮阳", "调气"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，温；归肝、肾经"
    },
    {
        id: 131,
        name: "海龙",
        category: "上品",
        description: "补肾壮阳，散结消肿。",
        value: "补肾壮阳要药，散结良药",
        icon: "🐠",
        effects: ["补肾", "壮阳", "散结"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，温；归肝、肾经"
    },
    {
        id: 132,
        name: "蛤蚧",
        category: "上品",
        description: "补肺益肾，纳气定喘，助阳益精。",
        value: "补肺益肾要药，纳气良药",
        icon: "🦎",
        effects: ["补肺", "益肾", "纳气"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "咸，平；归肺、肾经"
    },
    {
        id: 133,
        name: "冬虫夏草",
        category: "上品",
        description: "补肺益肾，止血化痰。",
        value: "补肺益肾要药，止血良药",
        icon: "🍄",
        effects: ["补肺", "益肾", "止血"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，平；归肺、肾经"
    },
    {
        id: 134,
        name: "雪莲",
        category: "上品",
        description: "温肾壮阳，调经止血。",
        value: "温肾壮阳要药，调经良药",
        icon: "🌸",
        effects: ["温肾", "壮阳", "调经"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘、苦，温；归肝、肾经"
    },
    {
        id: 135,
        name: "红景天",
        category: "上品",
        description: "益气活血，通脉平喘。",
        value: "益气活血要药，通脉良药",
        icon: "🌿",
        effects: ["益气", "活血", "通脉"],
        price: "中等",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘、苦，平；归肺、心经"
    },
    {
        id: 136,
        name: "绞股蓝",
        category: "上品",
        description: "益气健脾，化痰止咳，清热解毒。",
        value: "益气健脾要药，化痰良药",
        icon: "🌿",
        effects: ["益气", "健脾", "化痰"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、苦，寒；归肺、脾、肾经"
    },
    {
        id: 137,
        name: "刺五加",
        category: "上品",
        description: "益气健脾，补肾安神。",
        value: "益气健脾要药，补肾良药",
        icon: "🌿",
        effects: ["益气", "健脾", "补肾"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "辛、微苦，温；归脾、肺、心、肾经"
    },
    {
        id: 138,
        name: "西洋参",
        category: "上品",
        description: "补气养阴，清热生津。",
        value: "补气养阴要药，清热良药",
        icon: "🌿",
        effects: ["补气", "养阴", "清热"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘、微苦，凉；归心、肺、肾经"
    },
    {
        id: 139,
        name: "太子参",
        category: "上品",
        description: "益气健脾，生津润肺。",
        value: "益气健脾要药，生津良药",
        icon: "🌿",
        effects: ["益气", "健脾", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、微苦，平；归脾、肺经"
    },
    {
        id: 140,
        name: "党参",
        category: "上品",
        description: "补中益气，健脾益肺。",
        value: "补中益气要药，健脾良药",
        icon: "🌿",
        effects: ["补中", "益气", "健脾"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归脾、肺经"
    },

    // 继续补充中品本草
    {
        id: 141,
        name: "白术",
        category: "中品",
        description: "健脾益气，燥湿利水，止汗，安胎。",
        value: "健脾益气要药，燥湿良药",
        icon: "🌿",
        effects: ["健脾", "益气", "燥湿"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、甘，温；归脾、胃经"
    },
    {
        id: 142,
        name: "苍术",
        category: "中品",
        description: "燥湿健脾，祛风散寒，明目。",
        value: "燥湿健脾要药，祛风良药",
        icon: "🌿",
        effects: ["燥湿", "健脾", "祛风"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、苦，温；归脾、胃、肝经"
    },
    {
        id: 143,
        name: "薏苡仁",
        category: "中品",
        description: "利水渗湿，健脾止泻，除痹，清热排脓。",
        value: "利水渗湿要药，健脾良药",
        icon: "🌾",
        effects: ["利水", "渗湿", "健脾"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、淡，凉；归脾、胃、肺经"
    },
    {
        id: 144,
        name: "车前子",
        category: "中品",
        description: "清热利尿，渗湿止泻，明目，祛痰。",
        value: "清热利尿要药，渗湿良药",
        icon: "🌿",
        effects: ["清热", "利尿", "渗湿"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，寒；归肾、肝、肺经"
    },
    {
        id: 145,
        name: "滑石",
        category: "中品",
        description: "利尿通淋，清热解暑，祛湿敛疮。",
        value: "利尿通淋要药，清热良药",
        icon: "🪨",
        effects: ["利尿", "通淋", "清热"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、淡，寒；归膀胱、肺、胃经"
    },
    {
        id: 146,
        name: "木通",
        category: "中品",
        description: "利尿通淋，清心火，通经下乳。",
        value: "利尿通淋要药，清心良药",
        icon: "🌿",
        effects: ["利尿", "通淋", "清心"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归心、小肠、膀胱经"
    },
    {
        id: 147,
        name: "通草",
        category: "中品",
        description: "清热利尿，通气下乳。",
        value: "清热利尿要药，通气良药",
        icon: "🌿",
        effects: ["清热", "利尿", "通气"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、淡，微寒；归肺、胃经"
    },
    {
        id: 148,
        name: "瞿麦",
        category: "中品",
        description: "利尿通淋，破血通经。",
        value: "利尿通淋要药，破血良药",
        icon: "🌸",
        effects: ["利尿", "通淋", "破血"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，寒；归心、小肠经"
    },
    {
        id: 149,
        name: "萹蓄",
        category: "中品",
        description: "利尿通淋，杀虫止痒。",
        value: "利尿通淋要药，杀虫良药",
        icon: "🌿",
        effects: ["利尿", "通淋", "杀虫"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微寒；归膀胱经"
    },
    {
        id: 150,
        name: "地肤子",
        category: "中品",
        description: "清热利湿，祛风止痒。",
        value: "清热利湿要药，祛风良药",
        icon: "🌿",
        effects: ["清热", "利湿", "祛风"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、苦，寒；归肾、膀胱经"
    },
    {
        id: 151,
        name: "海金沙",
        category: "中品",
        description: "利尿通淋，止痛。",
        value: "利尿通淋要药，止痛良药",
        icon: "🌿",
        effects: ["利尿", "通淋", "止痛"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、咸，寒；归膀胱、小肠经"
    },
    {
        id: 152,
        name: "石韦",
        category: "中品",
        description: "利尿通淋，清肺止咳，凉血止血。",
        value: "利尿通淋要药，清肺良药",
        icon: "🌿",
        effects: ["利尿", "通淋", "清肺"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦，微寒；归肺、膀胱经"
    },
    {
        id: 153,
        name: "冬葵子",
        category: "中品",
        description: "利尿通淋，下乳，润肠。",
        value: "利尿通淋要药，下乳良药",
        icon: "🌿",
        effects: ["利尿", "通淋", "下乳"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，寒；归大肠、小肠、膀胱经"
    },
    {
        id: 154,
        name: "灯心草",
        category: "中品",
        description: "利尿通淋，清心降火。",
        value: "利尿通淋要药，清心良药",
        icon: "🌿",
        effects: ["利尿", "通淋", "清心"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、淡，微寒；归心、肺、小肠经"
    },
    {
        id: 155,
        name: "萆薢",
        category: "中品",
        description: "利湿去浊，祛风除痹。",
        value: "利湿去浊要药，祛风良药",
        icon: "🌿",
        effects: ["利湿", "去浊", "祛风"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，平；归肾、胃经"
    },
    {
        id: 156,
        name: "茵陈",
        category: "中品",
        description: "清利湿热，利胆退黄。",
        value: "清利湿热要药，利胆良药",
        icon: "🌿",
        effects: ["清利", "湿热", "利胆"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、辛，微寒；归脾、胃、肝、胆经"
    },
    {
        id: 157,
        name: "金钱草",
        category: "中品",
        description: "利湿退黄，利尿通淋，解毒消肿。",
        value: "利湿退黄要药，利尿良药",
        icon: "🌿",
        effects: ["利湿", "退黄", "利尿"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、淡，微寒；归肝、胆、肾、膀胱经"
    },
    {
        id: 158,
        name: "虎杖",
        category: "中品",
        description: "利湿退黄，清热解毒，散瘀止痛，止咳化痰。",
        value: "利湿退黄要药，清热解毒良药",
        icon: "🌿",
        effects: ["利湿", "退黄", "清热"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "微苦，微寒；归肝、胆、肺经"
    },
    {
        id: 159,
        name: "垂盆草",
        category: "中品",
        description: "利湿退黄，清热解毒。",
        value: "利湿退黄要药，清热良药",
        icon: "🌿",
        effects: ["利湿", "退黄", "清热"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、淡、微酸，凉；归肝、胆、小肠经"
    },
    {
        id: 160,
        name: "积雪草",
        category: "中品",
        description: "清热利湿，解毒消肿。",
        value: "清热利湿要药，解毒良药",
        icon: "🌿",
        effects: ["清热", "利湿", "解毒"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、辛，寒；归肝、脾、肾经"
    },

    // 补充更多重要本草
    {
        id: 161,
        name: "夏枯草",
        category: "中品",
        description: "清肝泻火，明目，散结消肿。",
        value: "清肝泻火要药，明目良药",
        icon: "🌿",
        effects: ["清肝", "泻火", "明目"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、苦，寒；归肝、胆经"
    },
    {
        id: 162,
        name: "决明子",
        category: "中品",
        description: "清热明目，润肠通便。",
        value: "清热明目要药，润肠良药",
        icon: "🌿",
        effects: ["清热", "明目", "润肠"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦、咸，微寒；归肝、大肠经"
    },
    {
        id: 163,
        name: "青葙子",
        category: "中品",
        description: "清肝明目，退翳。",
        value: "清肝明目要药，退翳良药",
        icon: "🌿",
        effects: ["清肝", "明目", "退翳"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦，微寒；归肝经"
    },
    {
        id: 164,
        name: "密蒙花",
        category: "中品",
        description: "清热泻火，养肝明目，退翳。",
        value: "清热泻火要药，明目良药",
        icon: "🌸",
        effects: ["清热", "泻火", "明目"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，微寒；归肝经"
    },
    {
        id: 165,
        name: "谷精草",
        category: "中品",
        description: "疏散风热，明目退翳。",
        value: "疏散风热要药，明目良药",
        icon: "🌿",
        effects: ["疏散", "风热", "明目"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、甘，平；归肝、胃经"
    },
    {
        id: 166,
        name: "木贼",
        category: "中品",
        description: "疏散风热，明目退翳。",
        value: "疏散风热要药，明目良药",
        icon: "🌿",
        effects: ["疏散", "风热", "明目"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦，平；归肺、肝经"
    },
    {
        id: 167,
        name: "蝉蜕",
        category: "中品",
        description: "疏散风热，利咽开音，透疹，明目退翳，息风止痉。",
        value: "疏散风热要药，利咽良药",
        icon: "🦗",
        effects: ["疏散", "风热", "利咽"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘，寒；归肺、肝经"
    },
    {
        id: 168,
        name: "桑叶",
        category: "中品",
        description: "疏散风热，清肺润燥，平抑肝阳，清肝明目。",
        value: "疏散风热要药，清肺良药",
        icon: "🍃",
        effects: ["疏散", "风热", "清肺"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦，寒；归肺、肝经"
    },
    {
        id: 169,
        name: "菊花",
        category: "中品",
        description: "疏散风热，平抑肝阳，清肝明目，清热解毒。",
        value: "疏散风热要药，平肝良药",
        icon: "🌼",
        effects: ["疏散", "风热", "平肝"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、苦，微寒；归肺、肝经"
    },
    {
        id: 170,
        name: "蔓荆子",
        category: "中品",
        description: "疏散风热，清利头目。",
        value: "疏散风热要药，清利头目良药",
        icon: "🌿",
        effects: ["疏散", "风热", "清利"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、苦，微寒；归膀胱、肝、胃经"
    },
    {
        id: 171,
        name: "淡豆豉",
        category: "中品",
        description: "解表除烦，宣发郁热。",
        value: "解表除烦要药，宣发良药",
        icon: "🫘",
        effects: ["解表", "除烦", "宣发"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "苦、辛，凉；归肺、胃经"
    },
    {
        id: 172,
        name: "浮萍",
        category: "中品",
        description: "发汗解表，透疹止痒，利尿消肿。",
        value: "发汗解表要药，透疹良药",
        icon: "🌿",
        effects: ["发汗", "解表", "透疹"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，寒；归肺经"
    },
    {
        id: 173,
        name: "升麻",
        category: "中品",
        description: "发表透疹，清热解毒，升举阳气。",
        value: "发表透疹要药，升举良药",
        icon: "🌿",
        effects: ["发表", "透疹", "升举"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、微甘，微寒；归肺、脾、胃、大肠经"
    },
    {
        id: 174,
        name: "葛根",
        category: "中品",
        description: "解肌退热，透疹，生津止渴，升阳止泻。",
        value: "解肌退热要药，生津良药",
        icon: "🌿",
        effects: ["解肌", "退热", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "甘、辛，凉；归脾、胃、肺经"
    },
    {
        id: 175,
        name: "牛蒡子",
        category: "中品",
        description: "疏散风热，宣肺透疹，解毒利咽。",
        value: "疏散风热要药，宣肺良药",
        icon: "🌿",
        effects: ["疏散", "风热", "宣肺"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛、苦，寒；归肺、胃经"
    },
    {
        id: 176,
        name: "薄荷",
        category: "中品",
        description: "疏散风热，清利头目，利咽透疹，疏肝行气。",
        value: "疏散风热要药，清利头目良药",
        icon: "🌿",
        effects: ["疏散", "风热", "清利"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，凉；归肺、肝经"
    },
    {
        id: 177,
        name: "荆芥",
        category: "中品",
        description: "解表散风，透疹消疮，止血。",
        value: "解表散风要药，透疹良药",
        icon: "🌿",
        effects: ["解表", "散风", "透疹"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，微温；归肺、肝经"
    },
    {
        id: 178,
        name: "紫苏",
        category: "中品",
        description: "解表散寒，行气和胃。",
        value: "解表散寒要药，行气良药",
        icon: "🌿",
        effects: ["解表", "散寒", "行气"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，温；归肺、脾经"
    },
    {
        id: 179,
        name: "生姜",
        category: "中品",
        description: "解表散寒，温中止呕，温肺止咳，解毒。",
        value: "解表散寒要药，温中止呕良药",
        icon: "🫚",
        effects: ["解表", "散寒", "温中"],
        price: "便宜",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，微温；归肺、脾、胃经"
    },
    {
        id: 180,
        name: "干姜",
        category: "中品",
        description: "温中散寒，回阳通脉，温肺化饮。",
        value: "温中散寒要药，回阳良药",
        icon: "🫚",
        effects: ["温中", "散寒", "回阳"],
        price: "中等",
        rarity: "常见",
        grade: "中品",
        natureMeridian: "辛，热；归脾、胃、肾、心、肺经"
    }
];

// 全局变量
let currentFilter = 'all';
let filteredHerbs = [...herbsData];
let collectedHerbs = JSON.parse(localStorage.getItem('collectedHerbs')) || [];
let currentPage = 1;
let herbsPerPage = 18; // 每页显示18个本草（3行×6列）

// 根据屏幕大小调整每页显示数量
function updateHerbsPerPage() {
    const width = window.innerWidth;
    if (width <= 768) {
        herbsPerPage = 12; // 手机端：2列×6行
    } else if (width <= 900) {
        herbsPerPage = 15; // 平板端：3列×5行
    } else if (width <= 1200) {
        herbsPerPage = 16; // 小屏：4列×4行
    } else {
        herbsPerPage = 18; // 大屏：6列×3行
    }
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    updateHerbsPerPage();
    initializeNavigation();
    initializeHerbsGrid();
    initializeSearchAndFilter();
    initializeModals();
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        const oldHerbsPerPage = herbsPerPage;
        updateHerbsPerPage();
        if (oldHerbsPerPage !== herbsPerPage) {
            currentPage = 1; // 重置到第一页
            renderHerbsGrid();
        }
    });
});

// 导航栏功能
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 初始化本草网格
function initializeHerbsGrid() {
    renderHerbsGrid();
}

// 渲染本草网格
function renderHerbsGrid() {
    const herbsGrid = document.getElementById('herbsGrid');
    const paginationContainer = document.getElementById('paginationContainer');
    
    // 计算分页
    const totalPages = Math.ceil(filteredHerbs.length / herbsPerPage);
    const startIndex = (currentPage - 1) * herbsPerPage;
    const endIndex = startIndex + herbsPerPage;
    const currentHerbs = filteredHerbs.slice(startIndex, endIndex);
    
    // 清空网格
    herbsGrid.innerHTML = '';
    
    // 渲染当前页的本草
    currentHerbs.forEach(herb => {
        const herbCard = createHerbCard(herb);
        herbsGrid.appendChild(herbCard);
    });
    
    // 渲染分页控件
    renderPagination(totalPages);
}

// 创建本草卡片
function createHerbCard(herb) {
    const card = document.createElement('div');
    card.className = 'herb-card';
    card.onclick = () => showHerbModal(herb);

    const isCollected = collectedHerbs.includes(herb.id);
    
    const gradeColor = herb.grade === '上品' ? '#4CAF50' : herb.grade === '中品' ? '#FF9800' : '#F44336';
    const gradeText = herb.grade === '上品' ? '君药' : herb.grade === '中品' ? '臣药' : '佐使药';
    
    card.innerHTML = `
        <div class="herb-icon-large">${herb.icon}</div>
        <h3 class="herb-name">${herb.name}</h3>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            <span class="herb-category" style="background: ${gradeColor}; color: white;">${herb.category}</span>
            <span class="herb-category" style="background: #666; color: white; font-size: 0.7rem;">${gradeText}</span>
        </div>
        <p class="herb-description">${herb.description}</p>
        <div class="herb-value">
            <strong>价值：</strong>${herb.value}
            ${isCollected ? '<br><small style="color: #4CAF50;">✓ 已收藏</small>' : ''}
        </div>
    `;

    return card;
}

// 搜索和筛选功能
function initializeSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // 搜索功能
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterHerbs(searchTerm, currentFilter);
    });

    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.category;
            filterHerbs(document.getElementById('searchInput').value.toLowerCase(), currentFilter);
        });
    });
}

// 筛选本草
function filterHerbs(searchTerm, category) {
    filteredHerbs = herbsData.filter(herb => {
        const matchesSearch = herb.name.toLowerCase().includes(searchTerm) ||
                            herb.description.toLowerCase().includes(searchTerm) ||
                            herb.value.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || herb.category === category;
        return matchesSearch && matchesCategory;
    });
    currentPage = 1; // 重置到第一页
    renderHerbsGrid();
}

// 渲染分页控件
function renderPagination(totalPages) {
    const paginationContainer = document.getElementById('paginationContainer');
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination">';
    
    // 上一页按钮
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i> 上一页
        </button>`;
    }
    
    // 页码按钮
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += '<span class="page-dots">...</span>';
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="page-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="page-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += '<span class="page-dots">...</span>';
        }
        paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // 下一页按钮
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">
            下一页 <i class="fas fa-chevron-right"></i>
        </button>`;
    }
    
    paginationHTML += '</div>';
    
    // 添加页码信息
    paginationHTML += `<div class="page-info">
        第 ${currentPage} 页，共 ${totalPages} 页 (${filteredHerbs.length} 种本草)
    </div>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

// 切换页面
function changePage(page) {
    currentPage = page;
    renderHerbsGrid();
    // 滚动到本草区域顶部
    document.getElementById('herbs').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 模态框功能
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // 关闭模态框
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// 显示本草详情模态框
function showHerbModal(herb) {
    const modal = document.getElementById('herbModal');
    const modalContent = document.getElementById('modalContent');
    const isCollected = collectedHerbs.includes(herb.id);

    const gradeColor = herb.grade === '上品' ? '#4CAF50' : herb.grade === '中品' ? '#FF9800' : '#F44336';
    const gradeText = herb.grade === '上品' ? '君药' : herb.grade === '中品' ? '臣药' : '佐使药';
    
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${herb.icon}</div>
            <h2 style="color: #2d5a27; margin-bottom: 0.5rem;">${herb.name}</h2>
            <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem;">
                <span style="background: ${gradeColor}; color: white; padding: 4px 12px; border-radius: 15px; font-size: 0.9rem;">
                    ${herb.category}
                </span>
                <span style="background: #666; color: white; padding: 4px 12px; border-radius: 15px; font-size: 0.8rem;">
                    ${gradeText}
                </span>
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #2d5a27; margin-bottom: 1rem;">功效描述</h3>
            <p style="line-height: 1.8; color: #555;">${herb.description}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #2d5a27; margin-bottom: 1rem;">价值评估</h3>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 10px;">
                <p style="font-size: 1.1rem; color: #2d5a27; font-weight: 600;">${herb.value}</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div>
                        <strong>价格等级：</strong>${herb.price}
                    </div>
                    <div>
                        <strong>稀有程度：</strong>${herb.rarity}
                    </div>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #2d5a27; margin-bottom: 1rem;">主要功效</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${herb.effects.map(effect => 
                    `<span style="background: #4CAF50; color: white; padding: 4px 12px; border-radius: 15px; font-size: 0.9rem;">
                        ${effect}
                    </span>`
                ).join('')}
            </div>
        </div>
        
        <div style="text-align: center;">
            <button class="btn ${isCollected ? 'btn-secondary' : 'btn-primary'}" 
                    onclick="toggleCollection(${herb.id})">
                <i class="fas ${isCollected ? 'fa-heart' : 'fa-heart'}"></i>
                ${isCollected ? '取消收藏' : '收藏本草'}
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// 收藏/取消收藏本草
function toggleCollection(herbId) {
    const index = collectedHerbs.indexOf(herbId);
    if (index > -1) {
        collectedHerbs.splice(index, 1);
    } else {
        collectedHerbs.push(herbId);
    }
    localStorage.setItem('collectedHerbs', JSON.stringify(collectedHerbs));
    showHerbModal(herbsData.find(h => h.id === herbId));
    renderHerbsGrid();
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}





// 页面滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}); 