const shennongHerbs = [
  {
    id: 1,
    name: "人参",
    grade: "上品",
    classicalText: "《神农本草经》曰：人参味甘，微寒。主补五脏，安精神，止惊悸，除邪气，明目开心益智，久服轻身延年。",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "干地黄",
    grade: "上品",
    classicalText: "《神农本草经》曰：干地黄味甘，寒。主折跌绝筋，破积血，寒热，五劳诸不足，补中益气，强阴，久服轻身益寿。"
  },
  {
    id: 3,
    name: "甘草",
    grade: "上品",
    classicalText: "《神农本草经》曰：甘草味甘，平。主五脏六腑寒热邪气，坚筋骨，长肌肉，倍气力，金疮肿痛，久服轻身延年。",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "干姜",
    grade: "上品",
    classicalText: "《神农本草经》曰：干姜味辛，温。主胸满咳逆上气，温中止血，除寒湿痹，痿躄脚弱，久服温中壮人。"
  },
  {
    id: 5,
    name: "桂枝",
    grade: "上品",
    classicalText: "《神农本草经》曰：桂枝味辛，温。主上气咳逆，温中，通脉，止汗，除风寒湿痹，久服轻身通神。"
  },
  {
    id: 6,
    name: "黄芪",
    grade: "上品",
    classicalText: "《神农本草经》曰：黄芪味甘，微温。主痿躄，补虚，除风水，久服轻身延年。",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "当归",
    grade: "上品",
    classicalText: "《神农本草经》曰：当归味甘，温。主补血和血，温中除寒湿，止痛，久服轻身延年。",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "麦门冬",
    grade: "上品",
    classicalText: "《神农本草经》曰：麦门冬味甘，微寒。主心腹结气，益气补中，长肌肉，久服轻身不老。"
  },
  {
    id: 9,
    name: "天门冬",
    grade: "上品",
    classicalText: "《神农本草经》曰：天门冬味苦，寒。主伤中，补五脏，益气除邪，安五脏，久服轻身延年。"
  },
  {
    id: 10,
    name: "茯苓",
    grade: "上品",
    classicalText: "《神农本草经》曰：茯苓味甘，平。主胸胁逆气，忧恚惊邪，恐悸，心下悸，久服安魂养神。"
  },
  {
    id: 11,
    name: "大枣",
    grade: "上品",
    classicalText: "《神农本草经》曰：大枣味甘，温。主心腹邪气，安中养脾，助十二经，补少气，久服轻身延年。",
    image: "https://images.unsplash.com/photo-1576402187875-06f3c5a2f2be?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 12,
    name: "石斛",
    grade: "上品",
    classicalText: "《神农本草经》曰：石斛味甘，平。主伤中虚劳，除痹，下气，补五脏虚羸，强阴益精，久服轻身延年。"
  },
  {
    id: 13,
    name: "黄精",
    grade: "上品",
    classicalText: "《神农本草经》曰：黄精味甘，平。主伤中，除内热邪气，补虚羸，益气力，久服轻身延年。"
  },
  {
    id: 14,
    name: "枸杞子",
    grade: "上品",
    classicalText: "《神农本草经》曰：枸杞子味甘，平。主补肾气，安神志，益精明目，久服轻身不老。",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 15,
    name: "山药",
    grade: "上品",
    classicalText: "《神农本草经》曰：山药味甘，平。主治风湿痹，下气补虚，强阴气，久服耳目聪明，轻身延年。"
  },
  {
    id: 16,
    name: "阿胶",
    grade: "上品",
    classicalText: "《神农本草经》曰：阿胶味甘，平。主补血，止血润燥，调中益气，久服轻身益寿。"
  },
  {
    id: 17,
    name: "百合",
    grade: "上品",
    classicalText: "《神农本草经》曰：百合味甘，微寒。主邪气心腹烦热，利百脉，补中益气，久服安神定志。"
  },
  {
    id: 18,
    name: "玉竹",
    grade: "上品",
    classicalText: "《神农本草经》曰：玉竹味甘，平。主风瘛伤中，益气除热，润泽肌肤，久服耐老。"
  },
  {
    id: 19,
    name: "何首乌",
    grade: "上品",
    classicalText: "《神农本草经》曰：何首乌味苦，涩，平。主五痔，补气力，益精髓，乌须发，久服长筋骨，延年不老。"
  },
  {
    id: 20,
    name: "杜仲",
    grade: "上品",
    classicalText: "《神农本草经》曰：杜仲味辛，温。主腰脊痛，强筋骨，补中益气，安胎，久服轻身延年。"
  },
  {
    id: 21,
    name: "肉苁蓉",
    grade: "上品",
    classicalText: "《神农本草经》曰：肉苁蓉味甘，温。主补五劳七伤，益精气，强阴，久服轻身延年。"
  },
  {
    id: 22,
    name: "五味子",
    grade: "上品",
    classicalText: "《神农本草经》曰：五味子味酸，温。主补不足，益气强志，安魂魄，久服轻身延年。",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 23,
    name: "柏子仁",
    grade: "上品",
    classicalText: "《神农本草经》曰：柏子仁味甘，平。主心腹虚烦，安五脏，益气润燥，久服润肤益色。"
  },
  {
    id: 24,
    name: "酸枣仁",
    grade: "上品",
    classicalText: "《神农本草经》曰：酸枣仁味酸，平。主虚汗，烦心不得眠，补肝气，久服安神，轻身延年。"
  },
  {
    id: 25,
    name: "女贞子",
    grade: "上品",
    classicalText: "《神农本草经》曰：女贞子味苦，平。主补中益气，强筋骨，安神志，久服轻身不老。"
  },
  {
    id: 26,
    name: "菖蒲",
    grade: "上品",
    classicalText: "《神农本草经》曰：菖蒲味辛，温。主风寒湿痹，开窍明耳目，强志，久服不忘。"
  },
  {
    id: 27,
    name: "远志",
    grade: "上品",
    classicalText: "《神农本草经》曰：远志味苦，温。主开心益智，安魂魄，益精气，久服轻身延年。"
  },
  {
    id: 28,
    name: "龙眼肉",
    grade: "上品",
    classicalText: "《神农本草经》曰：龙眼肉味甘，温。主安心养血，补益心脾，强志，久服不忘。"
  },
  {
    id: 29,
    name: "胡麻",
    grade: "上品",
    classicalText: "《神农本草经》曰：胡麻味甘，平。主补中益气，长肌肉，填髓脑，久服轻身延年。"
  },
  {
    id: 30,
    name: "莲子",
    grade: "上品",
    classicalText: "《神农本草经》曰：莲子味甘，涩，平。主补中养神，除百病，久服轻身延年。"
  },
  {
    id: 31,
    name: "桑椹",
    grade: "上品",
    classicalText: "《神农本草经》曰：桑椹味甘，寒。主补血滋阴，益气生津，久服轻身不饥。"
  },
  {
    id: 32,
    name: "覆盆子",
    grade: "上品",
    classicalText: "《神农本草经》曰：覆盆子味甘，温。主补肾固精，益气力，久服轻身益寿。"
  },
  {
    id: 33,
    name: "灵芝",
    grade: "上品",
    classicalText: "《神农本草经》曰：灵芝味苦，平。主安神益心气，补中坚筋骨，久服轻身不老。",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 34,
    name: "黄芩",
    grade: "上品",
    classicalText: "《神农本草经》曰：黄芩味苦，寒。主诸热黄疸，肠澼下血，逐水利湿，安胎，久服轻身不老。"
  },
  {
    id: 35,
    name: "黄连",
    grade: "上品",
    classicalText: "《神农本草经》曰：黄连味苦，寒。主清热除邪，止痢，安心神，久服令人不忘，轻身延年。",
    image: "https://images.unsplash.com/photo-1615485290382-9521314e5fe7?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 36,
    name: "白术",
    grade: "上品",
    classicalText: "《神农本草经》曰：白术味苦，温。主风寒湿痹，补中益气，止汗安胎，久服轻身延年。"
  },
  {
    id: 37,
    name: "茯神",
    grade: "上品",
    classicalText: "《神农本草经》曰：茯神味甘，平。主安心定志，益智除惊，久服轻身延年。"
  },
  {
    id: 38,
    name: "石蜜",
    grade: "上品",
    classicalText: "《神农本草经》曰：石蜜味甘，平。主补中益气，止痛除邪，和百药，久服轻身延年。"
  },
  {
    id: 39,
    name: "菟丝子",
    grade: "上品",
    classicalText: "《神农本草经》曰：菟丝子味甘，平。主补不足，益精气，强阴安五脏，久服轻身延年。"
  },
  {
    id: 40,
    name: "山茱萸",
    grade: "上品",
    classicalText: "《神农本草经》曰：山茱萸味酸，微温。主补不足，养肝肾，固精气，久服轻身延年。"
  },
  {
    id: 41,
    name: "麻黄",
    grade: "中品",
    classicalText: "《神农本草经》曰：麻黄味苦，温。主中风伤寒，头痛发热，无汗而喘，开腠理，久服轻身耐寒热。"
  },
  {
    id: 42,
    name: "杏仁",
    grade: "中品",
    classicalText: "《神农本草经》曰：杏仁味苦，微温。主胸满结气，逆气咳嗽，润肺下气，解肌散寒，久服轻身益气。"
  },
  {
    id: 43,
    name: "石膏",
    grade: "中品",
    classicalText: "《神农本草经》曰：石膏味辛，甘，大寒。主中风寒热，除邪气，止渴烦满，久服轻身延年。",
    image: "https://images.unsplash.com/photo-1615485290382-9521314e5fe7?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 44,
    name: "大黄",
    grade: "中品",
    classicalText: "《神农本草经》曰：大黄味苦，寒。主下瘀血，通利水谷，荡涤肠胃，清热邪，久服轻身。",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 45,
    name: "芒硝",
    grade: "中品",
    classicalText: "《神农本草经》曰：芒硝味咸，寒。主治中风身热，除邪结，软坚，通二便，久服轻身。"
  },
  {
    id: 46,
    name: "白芍",
    grade: "中品",
    classicalText: "《神农本草经》曰：白芍味苦，微寒。主邪气腹痛，除血痹，破坚积，调中，久服轻身益体。"
  },
  {
    id: 47,
    name: "川芎",
    grade: "中品",
    classicalText: "《神农本草经》曰：川芎味辛，温。主中风头痛，寒湿痹，温中止痛，久服轻身增气。"
  },
  {
    id: 48,
    name: "柴胡",
    grade: "中品",
    classicalText: "《神农本草经》曰：柴胡味苦，微寒。主伤寒热结，胁痛吐下，往来寒热，久服轻身明目。"
  },
  {
    id: 49,
    name: "葛根",
    grade: "中品",
    classicalText: "《神农本草经》曰：葛根味甘，平。主消渴身热，解肌发汗，止渴解酒，久服轻身益气。"
  },
  {
    id: 50,
    name: "知母",
    grade: "中品",
    classicalText: "《神农本草经》曰：知母味苦，寒。主消渴，热中烦满，除邪气，久服轻身益精。"
  },
  {
    id: 51,
    name: "黄柏",
    grade: "中品",
    classicalText: "《神农本草经》曰：黄柏味苦，寒。主除热，黄疸，足膝肿痛，久服轻身延年。"
  },
  {
    id: 52,
    name: "贝母",
    grade: "中品",
    classicalText: "《神农本草经》曰：贝母味苦，寒。主咳逆上气，喉痹，肿毒，久服轻身增益。"
  },
  {
    id: 53,
    name: "瓜蒌",
    grade: "中品",
    classicalText: "《神农本草经》曰：瓜蒌味甘，寒。主胸中结气，宽胸散结，消痰止咳，久服轻身益寿。"
  },
  {
    id: 54,
    name: "栀子",
    grade: "中品",
    classicalText: "《神农本草经》曰：栀子味苦，寒。主五内邪气，热结烦闷，利尿通淋，久服轻身。"
  },
  {
    id: 55,
    name: "桔梗",
    grade: "中品",
    classicalText: "《神农本草经》曰：桔梗味苦，辛，微温。主胸胁逆气，咽喉肿痛，宣通肺气，久服轻身耐寒热。"
  },
  {
    id: 56,
    name: "枳实",
    grade: "中品",
    classicalText: "《神农本草经》曰：枳实味苦，寒。主胸中痞结，除满消积，破坚，久服轻身益气。"
  },
  {
    id: 57,
    name: "枳壳",
    grade: "中品",
    classicalText: "《神农本草经》曰：枳壳味苦，微寒。主胸胁痞满，理气宽中，久服轻身益体。"
  },
  {
    id: 58,
    name: "泽泻",
    grade: "中品",
    classicalText: "《神农本草经》曰：泽泻味甘，寒。主逐水，下气，通利小便，除湿热，久服轻身不老。"
  },
  {
    id: 59,
    name: "车前子",
    grade: "中品",
    classicalText: "《神农本草经》曰：车前子味甘，寒。主利五脏水道，除湿热，明目，久服轻身耐老。"
  },
  {
    id: 60,
    name: "猪苓",
    grade: "中品",
    classicalText: "《神农本草经》曰：猪苓味甘，平。主渗泄水湿，利小便，除痰饮，久服轻身不饥。"
  },
  {
    id: 61,
    name: "苍术",
    grade: "中品",
    classicalText: "《神农本草经》曰：苍术味辛，苦，温。主风寒湿痹，痿躄，除湿醒脾，久服明目轻身。"
  },
  {
    id: 62,
    name: "厚朴",
    grade: "中品",
    classicalText: "《神农本草经》曰：厚朴味苦，温。主腹满胀逆，咳喘，去寒湿，消食，下气，久服轻身益气。"
  },
  {
    id: 63,
    name: "半夏",
    grade: "中品",
    classicalText: "《神农本草经》曰：半夏味辛，温，有毒。主咳逆上气，胸痹坚结，消痰散结，久服轻身。"
  },
  {
    id: 64,
    name: "茵陈蒿",
    grade: "中品",
    classicalText: "《神农本草经》曰：茵陈蒿味苦，微寒。主湿热黄疸，解肌退热，通利小便，久服轻身。"
  },
  {
    id: 65,
    name: "防己",
    grade: "中品",
    classicalText: "《神农本草经》曰：防己味苦，寒。主风湿痹，热气膝疼，利水道，久服轻身。"
  },
  {
    id: 66,
    name: "羌活",
    grade: "中品",
    classicalText: "《神农本草经》曰：羌活味苦，辛，温。主风寒湿痹，腰背疼痛，久服轻身明目。"
  },
  {
    id: 67,
    name: "独活",
    grade: "中品",
    classicalText: "《神农本草经》曰：独活味苦，辛，温。主风寒湿痹，筋骨疼痛，下气，久服轻身。"
  },
  {
    id: 68,
    name: "防风",
    grade: "中品",
    classicalText: "《神农本草经》曰：防风味甘，微温。主大风头眩，除湿痹，止汗，久服轻身。"
  },
  {
    id: 69,
    name: "细辛",
    grade: "中品",
    classicalText: "《神农本草经》曰：细辛味辛，温。主风湿痹，头面风寒，通九窍，久服轻身不忘。"
  },
  {
    id: 70,
    name: "牡丹皮",
    grade: "中品",
    classicalText: "《神农本草经》曰：牡丹皮味苦，微寒。主除邪热，散瘀血，调经止痛，久服轻身益色。"
  },
  {
    id: 71,
    name: "牛膝",
    grade: "中品",
    classicalText: "《神农本草经》曰：牛膝味苦，酸，平。主补肝肾，强筋骨，逐水，通经，久服轻身延年。"
  },
  {
    id: 72,
    name: "萆薢",
    grade: "中品",
    classicalText: "《神农本草经》曰：萆薢味苦，平。主风寒湿痹，膝疼，利小便祛浊，久服轻身。"
  },
  {
    id: 73,
    name: "薏苡仁",
    grade: "中品",
    classicalText: "《神农本草经》曰：薏苡仁味甘，微寒。主筋急拘挛，风湿痹，下气利水，久服轻身益气。"
  },
  {
    id: 74,
    name: "陈皮",
    grade: "中品",
    classicalText: "《神农本草经》曰：陈皮味辛，苦，温。主理气调中，燥湿化痰，止呕，久服轻身悦色。"
  },
  {
    id: 75,
    name: "牡蛎",
    grade: "中品",
    classicalText: "《神农本草经》曰：牡蛎味咸，微寒。主伤寒寒热，安魂定惊，软坚散结，久服轻身延年。"
  },
  {
    id: 76,
    name: "附子",
    grade: "下品",
    classicalText: "《神农本草经》曰：附子味辛，热，有大毒。主风寒湿痹，历节疼痛，温中回阳，久服温壮，然须慎用。"
  },
  {
    id: 77,
    name: "乌头",
    grade: "下品",
    classicalText: "《神农本草经》曰：乌头味辛，热，有大毒。主风寒咳逆，温中止痛，破积冷疾，久服益气，但不可过量。"
  },
  {
    id: 78,
    name: "巴豆",
    grade: "下品",
    classicalText: "《神农本草经》曰：巴豆味辛，热，有大毒。主逐水，破积聚，杀虫疗癣，慎用久服伤人。"
  },
  {
    id: 79,
    name: "大戟",
    grade: "下品",
    classicalText: "《神农本草经》曰：大戟味苦，寒，有大毒。主逐水，下胸腹积聚，破癥坚，慎服。"
  },
  {
    id: 80,
    name: "芫花",
    grade: "下品",
    classicalText: "《神农本草经》曰：芫花味辛，温，有大毒。主水气胀满，破积聚，杀虫，慎服。"
  },
  {
    id: 81,
    name: "甘遂",
    grade: "下品",
    classicalText: "《神农本草经》曰：甘遂味苦，寒，有大毒。主逐水，破坚癥，通利二便，慎服。"
  },
  {
    id: 82,
    name: "牵牛子",
    grade: "下品",
    classicalText: "《神农本草经》曰：牵牛子味苦，寒，有小毒。主逐水，破积聚，杀虫，久服伤人须慎。"
  },
  {
    id: 83,
    name: "商陆",
    grade: "下品",
    classicalText: "《神农本草经》曰：商陆味苦，寒，有毒。主逐水，破癥积，利二便，慎服。"
  },
  {
    id: 84,
    name: "常山",
    grade: "下品",
    classicalText: "《神农本草经》曰：常山味苦，寒，有毒。主治瘴疟寒热，破积痰，慎服。"
  },
  {
    id: 85,
    name: "蜀椒",
    grade: "下品",
    classicalText: "《神农本草经》曰：蜀椒味辛，热，有毒。主温中散寒，止痛下气，久服耗气须慎。"
  },
  {
    id: 86,
    name: "藜芦",
    grade: "下品",
    classicalText: "《神农本草经》曰：藜芦味苦，寒，有大毒。主风痰癫狂，杀虫，慎服。"
  },
  {
    id: 87,
    name: "斑蝥",
    grade: "下品",
    classicalText: "《神农本草经》曰：斑蝥味辛，热，有大毒。主破癥瘕积聚，攻疽痔恶肉，慎用。"
  },
  {
    id: 88,
    name: "雄黄",
    grade: "下品",
    classicalText: "《神农本草经》曰：雄黄味辛，温，有毒。主杀百虫，除邪毒，辟瘟疫，久服损人。"
  },
  {
    id: 89,
    name: "丹砂",
    grade: "下品",
    classicalText: "《神农本草经》曰：丹砂味甘，微寒，有毒。主安神定魄，杀精邪，久服不老，但当慎。"
  },
  {
    id: 90,
    name: "水银",
    grade: "下品",
    classicalText: "《神农本草经》曰：水银味辛，寒，有大毒。主逐邪气，杀虫疗疮，久服伤人。"
  },
  {
    id: 91,
    name: "铅丹",
    grade: "下品",
    classicalText: "《神农本草经》曰：铅丹味甘，微寒，有毒。主恶疮，杀虫，破积，慎用。"
  },
  {
    id: 92,
    name: "砒石",
    grade: "下品",
    classicalText: "《神农本草经》曰：砒石味辛，热，有剧毒。主寒热积聚，杀虫，不可久服。"
  },
  {
    id: 93,
    name: "硫黄",
    grade: "下品",
    classicalText: "《神农本草经》曰：硫黄味辛，温，有毒。主风湿冷痹，杀虫，久服伤人。"
  },
  {
    id: 94,
    name: "皂荚",
    grade: "下品",
    classicalText: "《神农本草经》曰：皂荚味辛，温，有小毒。主开闭塞，豁痰涎，杀虫疗风，久服伤气。"
  },
  {
    id: 95,
    name: "苍耳子",
    grade: "下品",
    classicalText: "《神农本草经》曰：苍耳子味苦，温，有小毒。主风寒湿痹，散风止痛，久服伤人。"
  },
  {
    id: 96,
    name: "狼毒",
    grade: "下品",
    classicalText: "《神农本草经》曰：狼毒味辛，温，有大毒。主破积聚，杀虫疗恶疮，慎服。"
  },
  {
    id: 97,
    name: "木鳖子",
    grade: "下品",
    classicalText: "《神农本草经》曰：木鳖子味苦，寒，有毒。主破血散结，消肿疗痈，慎服。"
  },
  {
    id: 98,
    name: "干漆",
    grade: "下品",
    classicalText: "《神农本草经》曰：干漆味辛，温，有毒。主破积血，散癥坚，杀虫，慎服。"
  },
  {
    id: 99,
    name: "天南星",
    grade: "下品",
    classicalText: "《神农本草经》曰：天南星味苦，温，有毒。主风痰眩冒，中风口噤，破积聚，慎服。"
  },
  {
    id: 100,
    name: "水蛭",
    grade: "下品",
    classicalText: "《神农本草经》曰：水蛭味咸，平，有毒。主逐瘀血，破积聚，通经，慎用。"
  }
];

export default shennongHerbs;
