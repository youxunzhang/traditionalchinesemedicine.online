from pathlib import Path
import textwrap

output_dir = Path('famous-doctors')
output_dir.mkdir(exist_ok=True)

index_intro = textwrap.dedent('''
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>中国中医名人大全</title>
    <meta name="description" content="汇集中国历史与当代100位著名中医名家的简介与贡献，点击查看详细资料。">
    <link rel="stylesheet" href="styles.css">
    <style>
        body { font-family: 'Noto Sans SC', sans-serif; background: #f5f7fa; color: #2c3e50; }
        .container { max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
        h1 { text-align: center; margin-bottom: 1rem; font-size: 2.5rem; color: #136f4a; }
        p.description { text-align: center; margin-bottom: 2.5rem; font-size: 1.1rem; color: #4d5d6b; }
        .masters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
        .master-card { background: #fff; border-radius: 12px; padding: 1.25rem; box-shadow: 0 10px 25px rgba(19, 111, 74, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .master-card:hover { transform: translateY(-6px); box-shadow: 0 18px 35px rgba(19, 111, 74, 0.18); }
        .master-card h2 { font-size: 1.3rem; margin-bottom: 0.4rem; color: #145f3b; }
        .master-card .era { font-size: 0.95rem; color: #6b7b8c; margin-bottom: 0.6rem; }
        .master-card p { font-size: 0.95rem; line-height: 1.65; color: #425466; }
        .master-card a { display: inline-flex; align-items: center; margin-top: 0.75rem; color: #1a8f5f; font-weight: 600; text-decoration: none; }
        .master-card a span { margin-left: 0.35rem; }
        .master-card a:hover { color: #0f7249; }
        footer { margin-top: 3rem; text-align: center; color: #6b7b8c; font-size: 0.9rem; }
        footer a { color: #1a8f5f; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1>中国中医名人大全</h1>
        <p class="description">从远古经典名医到当代国医大师，本页汇集100位具有代表性的中医人物，点击姓名即可查看详细经历与贡献。</p>
        <div class="masters-grid">
''')

index_outro = textwrap.dedent('''
        </div>
        <footer>返回 <a href="index.html">传统中医诊所首页</a></footer>
    </div>
</body>
</html>
''')

masters = [
    {
        "slug": "bian-que",
        "name": "扁鹊",
        "era": "战国时期",
        "lifespan": "约公元前407-前310年",
        "titles": "脉学鼻祖，针灸先驱",
        "summary": "扁鹊，名秦越人，战国著名医学家，擅长望闻问切与针灸，被尊为“医祖”。",
        "focus": "善于早期诊断与治未病",
        "achievements": [
            "创立系统化的四诊合参方法",
            "提出“治未病”理念强调预防",
            "在脉诊与针灸领域影响深远"
        ],
        "works": ["《难经》相传与其有关"],
        "anecdote": "《史记》记载其三谏蔡桓公治病，凸显见微知著。"
    },
    {
        "slug": "hua-tuo",
        "name": "华佗",
        "era": "东汉末年",
        "lifespan": "约145-208年",
        "titles": "外科圣手，麻沸散创造者",
        "summary": "华佗，字元化，沛国谯人，精通针灸、外科与方药，被誉为“外科鼻祖”。",
        "focus": "麻醉手术与导引养生",
        "achievements": [
            "发明“麻沸散”麻醉药剂",
            "创编“五禽戏”导引术",
            "擅长内、外、妇各科综合治疗"
        ],
        "works": ["《青囊书》传说所著"],
        "anecdote": "为关羽刮骨疗毒的故事流传千古。"
    },
    {
        "slug": "zhang-zhongjing",
        "name": "张仲景",
        "era": "东汉末年",
        "lifespan": "约150-219年",
        "titles": "医圣，经方之祖",
        "summary": "张仲景，字机，南阳人，总结前人医理创立辨证论治体系，被尊为“医圣”。",
        "focus": "六经辨证与经方治疗",
        "achievements": [
            "撰写《伤寒杂病论》，奠定经方体系",
            "提出六经辨证、方证相应理论",
            "精选百余经典方剂流传后世"
        ],
        "works": ["《伤寒杂病论》"],
        "anecdote": "在家乡设堂施诊，救治乡里，医德高尚。"
    },
    {
        "slug": "sun-simiao",
        "name": "孙思邈",
        "era": "唐代",
        "lifespan": "581-682年",
        "titles": "药王，大医精诚倡导者",
        "summary": "孙思邈，京兆华原人，道医并重，提出“大医精诚”的医德标准。",
        "focus": "方剂整理与养生预防",
        "achievements": [
            "编著《备急千金要方》《千金翼方》",
            "提出医者应慈悲仁爱的大医精诚",
            "重视妇儿科与急症救治"
        ],
        "works": ["《备急千金要方》", "《千金翼方》"],
        "anecdote": "常言“人命至重，有贵千金”，医德世称。"
    },
    {
        "slug": "li-shizhen",
        "name": "李时珍",
        "era": "明代",
        "lifespan": "1518-1593年",
        "titles": "本草巨匠，医药学家",
        "summary": "李时珍，湖广蕲州人，耗时27年撰成《本草纲目》，系统整理药物学。",
        "focus": "本草考证与实地采药",
        "achievements": [
            "收录药物1892种并详述性味功效",
            "纠正大量本草记载错误",
            "倡导实地采集与实验考证"
        ],
        "works": ["《本草纲目》"],
        "anecdote": "遍访山川采药，被称“医林探险家”。"
    },
    {
        "slug": "wang-shuhe",
        "name": "王叔和",
        "era": "西晋",
        "lifespan": "约210-286年",
        "titles": "脉学整理大家",
        "summary": "王叔和，西晋太医，系统整理脉诊理论，撰有《脉经》。",
        "focus": "脉象辨证与方书整理",
        "achievements": [
            "编纂《脉经》总结二十四脉",
            "整理《伤寒论》使经方完整流传",
            "提出脉象与四时脏腑关系"
        ],
        "works": ["《脉经》"],
        "anecdote": "善察脉象救人于危难，世称“指下如有目”。"
    },
    {
        "slug": "huangfu-mi",
        "name": "皇甫谧",
        "era": "西晋",
        "lifespan": "215-282年",
        "titles": "针灸经典集成者",
        "summary": "皇甫谧，字士安，博通经典，以《针灸甲乙经》汇集针灸理论。",
        "focus": "针灸经络整理",
        "achievements": [
            "汇编针灸腧穴与治法成《针灸甲乙经》",
            "规范经络腧穴定位",
            "推广导引养生与体质调摄"
        ],
        "works": ["《针灸甲乙经》"],
        "anecdote": "体弱多病而自疗成家，后世尊为针灸先贤。"
    },
    {
        "slug": "chunyu-yi",
        "name": "淳于意",
        "era": "西汉",
        "lifespan": "约公元前216-前150年",
        "titles": "仓公，案例医学开创者",
        "summary": "淳于意，齐国人，善用病案记录，总结诊疗经验，被称为“仓公”。",
        "focus": "医案撰写与体质辨治",
        "achievements": [
            "在《史记·扁鹊仓公列传》中留下24条医案",
            "强调诊治需结合体质与病因",
            "提倡医者需守德重信"
        ],
        "works": ["《仓公传》"],
        "anecdote": "善为百姓诊治，被汉景帝诏为太仓令。"
    },
    {
        "slug": "dong-feng",
        "name": "董奉",
        "era": "东汉末年",
        "lifespan": "约160-220年",
        "titles": "杏林春暖的典故来源",
        "summary": "董奉，字君异，与华佗、张仲景并称“建安三神医”，医德高尚。",
        "focus": "内科杂病与公共医疗",
        "achievements": [
            "行医不取钱财，以栽杏树酬谢",
            "强调节制饮食与起居调护",
            "善治温病与虚劳诸症"
        ],
        "works": ["《董奉别录》佚"],
        "anecdote": "患者痊愈需种杏树，造就“杏林”美谈。"
    },
    {
        "slug": "wang-bing",
        "name": "王冰",
        "era": "唐代",
        "lifespan": "约710-790年",
        "titles": "《素问》注释名家",
        "summary": "王冰，唐代医学家，对《黄帝内经·素问》进行校正注释，影响深远。",
        "focus": "内经整理与补注",
        "achievements": [
            "重新整理《素问》篇章体系",
            "提出脏腑经络的运化机理",
            "融入养生导引理念"
        ],
        "works": ["《黄帝内经素问集注》"],
        "anecdote": "注经数十年，常以冰块镇心，故号“王冰”。"
    },
    {
        "slug": "su-jing",
        "name": "苏敬",
        "era": "唐代",
        "lifespan": "659-730年",
        "titles": "《新修本草》总监",
        "summary": "苏敬，唐代太医令，奉诏主持编纂《新修本草》，奠定官修本草范式。",
        "focus": "药物校勘与标准化",
        "achievements": [
            "统筹校勘本草品种与药性",
            "确立药材图文并列的记述方式",
            "推动药材检验与炮制规范"
        ],
        "works": ["《新修本草》"],
        "anecdote": "遍访药工农夫，亲自核验药材品质。"
    },
    {
        "slug": "chao-yuanfang",
        "name": "巢元方",
        "era": "隋代",
        "lifespan": "约550-630年",
        "titles": "《诸病源候论》作者",
        "summary": "巢元方，隋代太医，主持编纂《诸病源候论》，提出病因病候分类。",
        "focus": "病因学与症候学",
        "achievements": [
            "系统分类1739种病候",
            "强调预防保健与生活调摄",
            "提出病因病机辨析方法"
        ],
        "works": ["《诸病源候论》"],
        "anecdote": "善于归纳医案，被誉为“症候学鼻祖”。"
    },
    {
        "slug": "chen-cangqi",
        "name": "陈藏器",
        "era": "唐代",
        "lifespan": "约650-720年",
        "titles": "本草增补名家",
        "summary": "陈藏器，唐代药物学家，编写《本草拾遗》，补充大量药材。",
        "focus": "药材采集与食疗",
        "achievements": [
            "扩充药材品种与功效记载",
            "强调药食同源与食疗",
            "关注药材产地与采收时节"
        ],
        "works": ["《本草拾遗》"],
        "anecdote": "常与猎户药农同行采药，亲身考察药性。"
    },
    {
        "slug": "tao-hongjing",
        "name": "陶弘景",
        "era": "南北朝",
        "lifespan": "456-536年",
        "titles": "道医融合先贤",
        "summary": "陶弘景，号华阳隐居，集道教与医学于一体，重修《神农本草经》。",
        "focus": "本草整理与养生炼养",
        "achievements": [
            "编撰《本草经集注》",
            "提出药物分类与炮制方法",
            "倡导静养、导引、服药相结合"
        ],
        "works": ["《本草经集注》"],
        "anecdote": "被梁武帝尊为“山中宰相”，医道兼修。"
    },
    {
        "slug": "wang-dao",
        "name": "王焘",
        "era": "唐代",
        "lifespan": "约670-755年",
        "titles": "医方集大成者",
        "summary": "王焘，字知白，唐代名医，著《外台秘要》汇集医案方剂。",
        "focus": "方剂整理与临床实用",
        "achievements": [
            "收录历代医方近万首",
            "强调辨证论治与预防",
            "保存大量民间验方"
        ],
        "works": ["《外台秘要》"],
        "anecdote": "任太医令时夜以继日搜集医方，终成巨著。"
    },
    {
        "slug": "chen-ziming",
        "name": "陈自明",
        "era": "南宋",
        "lifespan": "约1190-1270年",
        "titles": "妇科圣手",
        "summary": "陈自明，字仲玑，南宋妇科名医，著《妇人大全良方》。",
        "focus": "妇产科调护",
        "achievements": [
            "系统总结妇科病因与诊疗",
            "提出孕产调摄与护理准则",
            "善用平和方药调理冲任"
        ],
        "works": ["《妇人大全良方》"],
        "anecdote": "宫廷太医出身，被誉为“妇科圣手”。"
    },
    {
        "slug": "liu-wansu",
        "name": "刘完素",
        "era": "金代",
        "lifespan": "1110-1200年",
        "titles": "寒凉派宗师",
        "summary": "刘完素，号河间，金元四大家之一，倡导“六气致病”与寒凉法。",
        "focus": "火热病机与辛凉解表",
        "achievements": [
            "提出“阳常有余、阴常不足”",
            "善用寒凉药清泻内火",
            "奠定金元火热病学派"
        ],
        "works": ["《黄帝素问宣明论方》", "《素问病机气宜保命集》"],
        "anecdote": "医术高超受赐金印，世称“刘河间”。"
    },
    {
        "slug": "zhang-congzheng",
        "name": "张从正",
        "era": "金代",
        "lifespan": "约1156-1228年",
        "titles": "攻下派代表",
        "summary": "张从正，字子和，金元四大家之一，主张汗吐下三法以祛邪。",
        "focus": "外感病邪驱除",
        "achievements": [
            "提出“六气致病”外感理论",
            "倡导邪去则正安的治疗原则",
            "著《儒门事亲》总结临证经验"
        ],
        "works": ["《儒门事亲》"],
        "anecdote": "用药果敢而辨证严谨，被誉为“刚毅之医”。"
    },
    {
        "slug": "li-gao",
        "name": "李杲",
        "era": "金代",
        "lifespan": "1180-1251年",
        "titles": "补土派领袖",
        "summary": "李杲，字明之，号东垣先生，提出脾胃为后天之本。",
        "focus": "脾胃调补",
        "achievements": [
            "创制补中益气汤、升阳益胃汤",
            "强调“内伤脾胃，百病由生”",
            "倡导饮食起居调摄"
        ],
        "works": ["《脾胃论》", "《兰室秘藏》"],
        "anecdote": "扶正培元医风仁厚，被尊称“李东垣”。"
    },
    {
        "slug": "zhu-zhenheng",
        "name": "朱震亨",
        "era": "元代",
        "lifespan": "1281-1358年",
        "titles": "滋阴派宗师",
        "summary": "朱震亨，号丹溪，金元四大家之一，提出“阳常有余，阴常不足”。",
        "focus": "滋阴降火与情志调摄",
        "achievements": [
            "创立丹溪学派倡导滋阴降火",
            "提出“相火论”解释内火病机",
            "重视情志内伤与饮食节制"
        ],
        "works": ["《丹溪心法》", "《格致余论》"],
        "anecdote": "医德高洁，用药平和，深受百姓爱戴。"
    },
    {
        "slug": "wang-haogu",
        "name": "王好古",
        "era": "元代",
        "lifespan": "约1200-1264年",
        "titles": "易水学派重要传人",
        "summary": "王好古，字安道，张元素再传弟子，擅长温补脾胃调治痰饮。",
        "focus": "脾胃与痰饮理论",
        "achievements": [
            "继承易水学派调补思路",
            "编写《汤液本草》论述方药",
            "提出土能制水、调和五脏的观点"
        ],
        "works": ["《汤液本草》", "《此事难知》"],
        "anecdote": "医风平和慎谨，被称“王安道妙手”。"
    },
    {
        "slug": "zhang-yuansu",
        "name": "张元素",
        "era": "金代",
        "lifespan": "约1151-1234年",
        "titles": "易水学派创始人",
        "summary": "张元素，号洁古，金代名医，强调脾胃调补，倡导易水学派。",
        "focus": "脾胃论治与食疗",
        "achievements": [
            "提出脾胃为后天之本",
            "善用药食同源调理脾胃",
            "创立易水学派教学体系"
        ],
        "works": ["《医学启源》", "《珍珠囊》"],
        "anecdote": "常以平和方药调补，被尊称“洁古先生”。"
    },
    {
        "slug": "wang-qingren",
        "name": "王清任",
        "era": "清代",
        "lifespan": "1768-1831年",
        "titles": "形体解剖先驱",
        "summary": "王清任，字勋臣，敢于实地解剖纠正脏腑认识，著《医林改错》。",
        "focus": "瘀血理论与解剖实证",
        "achievements": [
            "提出瘀血致病论，创制活血名方",
            "依据解剖纠正脏腑位置谬误",
            "倡导实证精神指导临床"
        ],
        "works": ["《医林改错》"],
        "anecdote": "亲自解剖尸体求真，被誉为“医界胆魄第一人”。"
    },
    {
        "slug": "zhang-jingyue",
        "name": "张景岳",
        "era": "明末清初",
        "lifespan": "1563-1640年",
        "titles": "温补派宗师",
        "summary": "张景岳，名介宾，倡导“阳常不足”，撰写《景岳全书》。",
        "focus": "温补阳气与脾肾调理",
        "achievements": [
            "系统阐述温补理论",
            "强调肾命火在临床中的核心地位",
            "创制多首补阳名方"
        ],
        "works": ["《景岳全书》"],
        "anecdote": "强调“善补阳者如春”，启发后世温补派。"
    },
    {
        "slug": "wu-youke",
        "name": "吴有性",
        "era": "明末清初",
        "lifespan": "1582-1652年",
        "titles": "温疫理论奠基者",
        "summary": "吴有性，字又可，著《瘟疫论》，提出戾气致病观念。",
        "focus": "温疫防治",
        "achievements": [
            "区分瘟疫与伤寒的病机",
            "倡导隔离、香熏等预防措施",
            "强调芳香化浊与清瘟热毒"
        ],
        "works": ["《瘟疫论》"],
        "anecdote": "疫病流行时奋不顾身救治百姓，名重一时。"
    },
    {
        "slug": "ye-tianshi",
        "name": "叶天士",
        "era": "清代",
        "lifespan": "1667-1746年",
        "titles": "温病宗师",
        "summary": "叶天士，名桂，号天士，温病学派代表，提出卫气营血辨证。",
        "focus": "温病辨证与舌诊",
        "achievements": [
            "创立卫气营血辨证体系",
            "善用清透凉润法",
            "重视舌诊与脉象结合"
        ],
        "works": ["《叶天士医案》", "《温热论》"],
        "anecdote": "医案广为流传，人称“无叶不成案”。"
    },
    {
        "slug": "wu-jutong",
        "name": "吴鞠通",
        "era": "清代",
        "lifespan": "1758-1836年",
        "titles": "温病条辨大家",
        "summary": "吴鞠通，名瑭，号鞠通，完善温病三焦辨证，创制银翘散。",
        "focus": "温病三焦辨证",
        "achievements": [
            "提出三焦辨证体系",
            "创制银翘散、桑菊饮等方剂",
            "区分温病阶段性治法"
        ],
        "works": ["《温病条辨》"],
        "anecdote": "游历各地行医，以善治温疫闻名。"
    },
    {
        "slug": "xue-shengbai",
        "name": "薛雪",
        "era": "清代",
        "lifespan": "1681-1770年",
        "titles": "温补派医家",
        "summary": "薛雪，字生白，重视脾肾阳气，倡导温补调治虚寒。",
        "focus": "温补肾阳与痰饮",
        "achievements": [
            "著《医经溯洄集》阐述温补理论",
            "提出火郁发之与阳气化生观点",
            "善治虚寒久病与痰饮"
        ],
        "works": ["《医经溯洄集》", "《薛生白医案》"],
        "anecdote": "调治虚寒沉疴多获奇效，被尊称“薛生白”。"
    },
    {
        "slug": "huang-yuanyu",
        "name": "黄元御",
        "era": "清代",
        "lifespan": "1705-1758年",
        "titles": "素灵学派创立者",
        "summary": "黄元御，名玉璐，号元御，精研《素问》《灵枢》，倡立黄氏素灵学。",
        "focus": "经典阐发与扶阳理论",
        "achievements": [
            "撰写《四圣心源》《素灵微蕴》",
            "强调正气为本、扶阳抑阴",
            "融会内经与临床治法"
        ],
        "works": ["《四圣心源》", "《素灵微蕴》"],
        "anecdote": "潜心内经，被称“读遍素灵第一人”。"
    },
    {
        "slug": "xu-lingtai",
        "name": "徐灵胎",
        "era": "清代",
        "lifespan": "1693-1771年",
        "titles": "经方考证大家",
        "summary": "徐灵胎，名大椿，强调辨证求因，善于活用经方。",
        "focus": "经方校释与气机调达",
        "achievements": [
            "著《医贯》系统论述内科",
            "提出“识机立法”理念",
            "善治肝郁脾虚与痰湿"
        ],
        "works": ["《医贯》", "《难经经释》"],
        "anecdote": "认为医者贵在识机，被尊称“徐灵胎”。"
    },
    {
        "slug": "wu-qian",
        "name": "吴谦",
        "era": "清代",
        "lifespan": "1689-1749年",
        "titles": "《医宗金鉴》主编",
        "summary": "吴谦，字美仲，清宫太医总管，主持编纂《医宗金鉴》。",
        "focus": "医学教材与临床规范",
        "achievements": [
            "组织编写涵盖各科的《医宗金鉴》",
            "建立太医院教学体系",
            "推广图文结合的医学教育"
        ],
        "works": ["《医宗金鉴》"],
        "anecdote": "整合宫廷名医经验，使《医宗金鉴》成官修医学大全。"
    },
    {
        "slug": "li-yongcui",
        "name": "李用粹",
        "era": "清代",
        "lifespan": "约1700-1750年",
        "titles": "吟咏本草学者",
        "summary": "李用粹，清代本草学者，以诗偈记药，著《本草乘雅半偈》。",
        "focus": "药性吟咏与炮制",
        "achievements": [
            "倡导用诗偈帮助记忆药性",
            "重视药材产地与炮制方法",
            "总结药物配伍禁忌"
        ],
        "works": ["《本草乘雅半偈》"],
        "anecdote": "以诗记药被称“吟咏本草第一人”。"
    },
    {
        "slug": "wang-ang",
        "name": "汪昂",
        "era": "清代",
        "lifespan": "1615-1694年",
        "titles": "本草纲目拾遗作者",
        "summary": "汪昂，字用中，补订《本草纲目拾遗》，完善药材记载。",
        "focus": "药物补遗与方剂精解",
        "achievements": [
            "增补《本草纲目》遗漏药物",
            "撰写《医方集解》阐述方义",
            "强调药材甄别与炮制"
        ],
        "works": ["《本草纲目拾遗》", "《医方集解》"],
        "anecdote": "广泛搜集民间药材，被誉为“拾遗补缺的本草家”。"
    },
    {
        "slug": "chen-xiuyuan",
        "name": "陈修园",
        "era": "清代",
        "lifespan": "1753-1823年",
        "titles": "温病与经方并重医家",
        "summary": "陈修园，名复正，倡导温病与经方兼收并用，著《医学三字经》。",
        "focus": "医道启蒙与温病调护",
        "achievements": [
            "编写《医学三字经》普及医学",
            "整理《伤寒论》并注释",
            "提出温补脾肾与清解兼顾"
        ],
        "works": ["《医学三字经》", "《伤寒论浅注》"],
        "anecdote": "重视启蒙教学，被称“陈修园先生”。"
    },
    {
        "slug": "cheng-zhongling",
        "name": "程钟龄",
        "era": "清代",
        "lifespan": "1683-1768年",
        "titles": "《医学心悟》作者",
        "summary": "程钟龄，著《医学心悟》，以浅显语言阐释伤寒辨证。",
        "focus": "伤寒普及与温补兼治",
        "achievements": [
            "推广浅显易懂的伤寒理论",
            "提出观证立法、法无定方",
            "注重火热内生的调治"
        ],
        "works": ["《医学心悟》"],
        "anecdote": "被称“浅显仲景”，深受后学喜爱。"
    },
    {
        "slug": "yu-chang",
        "name": "喻昌",
        "era": "清初",
        "lifespan": "1585-1664年",
        "titles": "寓意草作者",
        "summary": "喻昌，字启玄，著《寓意草》《医门法律》，强调临证活法。",
        "focus": "病机分析与柔刚并施",
        "achievements": [
            "提出病有标本、治有缓急",
            "主张医者应明经论重实证",
            "善治杂病以柔中带刚"
        ],
        "works": ["《寓意草》", "《医门法律》"],
        "anecdote": "隐居治病，医风沉稳，被誉为“潜龙医者”。"
    },
    {
        "slug": "fei-boxiong",
        "name": "费伯雄",
        "era": "清代",
        "lifespan": "1800-1879年",
        "titles": "温病学家",
        "summary": "费伯雄，字雨卿，擅长温病湿温调治，著《医方集解》。",
        "focus": "湿温病与方药解析",
        "achievements": [
            "提出湿温从脾论治观点",
            "强调芳香化浊与甘寒滋阴结合",
            "整理方药便于临床引用"
        ],
        "works": ["《医方集解》", "《医镜》"],
        "anecdote": "温病疗效显著，被誉为“费银翘”。"
    },
    {
        "slug": "chen-shiduo",
        "name": "陈士铎",
        "era": "清代",
        "lifespan": "约1625-1700年",
        "titles": "石室秘录作者",
        "summary": "陈士铎，字无己，提倡扶阳抑阴，善用附子干姜回阳救逆。",
        "focus": "温补扶阳与急危重症",
        "achievements": [
            "著《石室秘录》总结扶阳经验",
            "倡导“阳气虚则百病生”",
            "治疗虚寒危重症见效显著"
        ],
        "works": ["《石室秘录》"],
        "anecdote": "用药果断稳重，被称“陈火神”。"
    },
    {
        "slug": "wang-shixiong",
        "name": "王士雄",
        "era": "清代",
        "lifespan": "1808-1868年",
        "titles": "温病与饮食学家",
        "summary": "王士雄，字孟英，精于温病调理，著《温热经纬》《随息居饮食谱》。",
        "focus": "温病六经与饮食养生",
        "achievements": [
            "提出温病六经辨证体系",
            "编写饮食调养专书",
            "倡导寒凉与温补兼施"
        ],
        "works": ["《温热经纬》", "《随息居饮食谱》"],
        "anecdote": "医案详尽，被誉为“孟英先生”。"
    },
    {
        "slug": "sun-yikui",
        "name": "孙一奎",
        "era": "明代",
        "lifespan": "1522-1619年",
        "titles": "补火派医家",
        "summary": "孙一奎，字景严，倡导温补阳气，著《赤水玄珠》。",
        "focus": "虚劳调补与火气运用",
        "achievements": [
            "提出“虚损补火、痰饮化火”",
            "善治虚劳内伤与痰饮",
            "创制多首温补方剂"
        ],
        "works": ["《赤水玄珠》", "《广温热论》"],
        "anecdote": "被尊称“补火大师”，强调阳气为生机。"
    },
    {
        "slug": "wan-quan",
        "name": "万全",
        "era": "明代",
        "lifespan": "1495-1588年",
        "titles": "儿科与养生名家",
        "summary": "万全，字时习，擅长儿科保健与养生，著《育婴秘旨》。",
        "focus": "儿科调护与药膳",
        "achievements": [
            "总结小儿护理与调摄要点",
            "提出孕产妇保健方法",
            "强调食疗与日常调护"
        ],
        "works": ["《育婴秘旨》", "《万氏家抄》"],
        "anecdote": "医案注重家庭保健，被称“明代儿科之光”。"
    },
    {
        "slug": "fang-youzhi",
        "name": "方有执",
        "era": "明代",
        "lifespan": "1515-1588年",
        "titles": "伤寒论注家",
        "summary": "方有执，字子真，精研《伤寒论》，著《伤寒论条辨》。",
        "focus": "六经辨证与经方运用",
        "achievements": [
            "细致阐发六经辨证主治",
            "提出随证立法的原则",
            "强调方证对应灵活加减"
        ],
        "works": ["《伤寒论条辨》"],
        "anecdote": "终生研究经方，被誉为“方仲景”。"
    },
    {
        "slug": "wu-kun",
        "name": "吴昆",
        "era": "明代",
        "lifespan": "1552-1620年",
        "titles": "《素问》注释大家",
        "summary": "吴昆，字昆山，专注《黄帝内经》研究，著《素问吴注》。",
        "focus": "经典注释与脏腑经络",
        "achievements": [
            "逐条注解《素问》原文",
            "阐发脏腑经络运化机理",
            "倡导辨证求因慎用攻伐"
        ],
        "works": ["《黄帝内经素问吴注》"],
        "anecdote": "潜心研经，被誉为“素问知音”。"
    },
    {
        "slug": "gao-lian",
        "name": "高濂",
        "era": "明代",
        "lifespan": "约1524-1603年",
        "titles": "养生学家",
        "summary": "高濂，字堪舆，著《遵生八笺》，倡导文人养生理念。",
        "focus": "四时养生与食疗",
        "achievements": [
            "提出四时起居调摄方法",
            "整理食疗药膳与香药方",
            "融合琴棋书画与养生生活"
        ],
        "works": ["《遵生八笺》"],
        "anecdote": "以雅士风范论养生，被称“明代养生教科书”。"
    },
    {
        "slug": "fu-qingzhu",
        "name": "傅青主",
        "era": "明末清初",
        "lifespan": "1607-1684年",
        "titles": "男女科名家",
        "summary": "傅青主，名山，擅长妇科胎产与男科疾病，著《傅青主女科》。",
        "focus": "冲任调理与气血平衡",
        "achievements": [
            "总结妇科、男科辨证体系",
            "强调疏肝养血与调理冲任",
            "善治胎产、月事与男女杂病"
        ],
        "works": ["《傅青主女科》", "《傅青主男科》"],
        "anecdote": "救治妇女疾患无数，被尊为“女科宗师”。"
    },
    {
        "slug": "xu-chunfu",
        "name": "徐春甫",
        "era": "明代",
        "lifespan": "1520-1596年",
        "titles": "《普济方》编纂者",
        "summary": "徐春甫，明代太医，主持编纂大型医方类书《普济方》。",
        "focus": "方剂汇编与诊疗指南",
        "achievements": [
            "汇总历代方剂数万首",
            "分类系统化便于检索",
            "提出医者应广泛采纳民间经验"
        ],
        "works": ["《普济方》"],
        "anecdote": "收方时奔走各地，力求不遗珍方。"
    },
    {
        "slug": "gong-tingxian",
        "name": "龚廷贤",
        "era": "明代",
        "lifespan": "约1530-1610年",
        "titles": "养生保健推广者",
        "summary": "龚廷贤，著《万病回春》，强调食养与简便方。",
        "focus": "养生保健与常见病调治",
        "achievements": [
            "编写《万病回春》传播简便验方",
            "倡导平日调养预防疾病",
            "提出四时调摄生活方式"
        ],
        "works": ["《万病回春》", "《寿世保元》"],
        "anecdote": "主张医者应惠及百姓，被称“平民医家”。"
    },
    {
        "slug": "li-chan",
        "name": "李梴",
        "era": "明代",
        "lifespan": "约1518-1598年",
        "titles": "《医学入门》作者",
        "summary": "李梴，著《医学入门》，以纲目体例总结医理药性。",
        "focus": "医学启蒙与方药纲领",
        "achievements": [
            "将医理、方药、针灸编为入门教材",
            "提出辨证论治基本纲领",
            "强调学习经典结合实践"
        ],
        "works": ["《医学入门》"],
        "anecdote": "被誉为“医学初学者的阶梯”。"
    },
    {
        "slug": "zhang-lu",
        "name": "张璐",
        "era": "清代",
        "lifespan": "1617-1699年",
        "titles": "临证活法家",
        "summary": "张璐，字路玉，提倡活法灵用，著《张氏医通》。",
        "focus": "活法辨证与补泄兼施",
        "achievements": [
            "提出“虚者补其母，实者泻其子”",
            "强调脾胃为后天之本",
            "善治虚劳痰饮等杂病"
        ],
        "works": ["《张氏医通》"],
        "anecdote": "临证灵活，被称“活法张路玉”。"
    },
    {
        "slug": "li-zhongzi",
        "name": "李中梓",
        "era": "明末清初",
        "lifespan": "1588-1655年",
        "titles": "《本草乘雅》作者",
        "summary": "李中梓，字士材，精于本草方剂，著《医宗必读》。",
        "focus": "本草精要与医者修养",
        "achievements": [
            "编写《医宗必读》概括医理",
            "强调医者品德与学问并重",
            "提出药性切于临床应用"
        ],
        "works": ["《医宗必读》", "《本草乘雅》"],
        "anecdote": "推崇德行修身，被称“士材先生”。"
    },
    {
        "slug": "zhang-xichun",
        "name": "张锡纯",
        "era": "清末民初",
        "lifespan": "1860-1933年",
        "titles": "中西汇通医家",
        "summary": "张锡纯，字寿甫，倡导中西医结合，著《医学衷中参西录》。",
        "focus": "中西医融合与经方活用",
        "achievements": [
            "提出以中医辨证结合西医病理",
            "创制补益活血等多首名方",
            "推广现代医学知识与中药互证"
        ],
        "works": ["《医学衷中参西录》"],
        "anecdote": "被誉为“汇通派代表”，医术广受赞誉。"
    },
    {
        "slug": "shi-jinmo",
        "name": "施今墨",
        "era": "近现代",
        "lifespan": "1881-1969年",
        "titles": "京城四大名医之首",
        "summary": "施今墨，原名施圃，京城四大名医之首，擅长内科杂病。",
        "focus": "经方时方并用与脾胃调理",
        "achievements": [
            "提出辨证立法、法随证立",
            "善治脾胃虚寒与肝郁气滞",
            "倡导现代中医教育与医德"
        ],
        "works": ["《施今墨经验集》"],
        "anecdote": "医馆门庭若市，患者称其“施一帖”。"
    },
    {
        "slug": "qin-bowei",
        "name": "秦伯未",
        "era": "近现代",
        "lifespan": "1901-1970年",
        "titles": "经方大家",
        "summary": "秦伯未，名怀宝，倡导经方现代化，提出病机十九条发挥。",
        "focus": "经方教学与病机分析",
        "achievements": [
            "强调读经典、明方证",
            "提出“病机十九条”临证思维",
            "培养大批经方人才"
        ],
        "works": ["《经方实践录》", "《病机十九条发挥》"],
        "anecdote": "医案精当，被赞“当代仲景”。"
    },
    {
        "slug": "hu-xishu",
        "name": "胡希恕",
        "era": "当代",
        "lifespan": "1910-1985年",
        "titles": "伤寒论大师",
        "summary": "胡希恕，河北安国人，潜心研究《伤寒论》，提出胡氏伤寒学。",
        "focus": "六经辨证与方证对应",
        "achievements": [
            "强调原文原义解读《伤寒论》",
            "提出“方证相应”核心要义",
            "培养经方学派弟子众多"
        ],
        "works": ["《胡希恕讲伤寒论》"],
        "anecdote": "善解经文，被称“伤寒活字典”。"
    },
    {
        "slug": "liu-duzhou",
        "name": "刘渡舟",
        "era": "当代",
        "lifespan": "1917-2001年",
        "titles": "经方大师",
        "summary": "刘渡舟，河北宁河人，倡导读经典用经典，临证以方证相应为纲。",
        "focus": "经方教育与临床实践",
        "achievements": [
            "整理《伤寒论》讲稿传播经方",
            "善治内妇儿等多科疾病",
            "培养经方人才遍布全国"
        ],
        "works": ["《刘渡舟经方应用录》", "《伤寒论讲稿》"],
        "anecdote": "授课深入浅出，被学生称为“渡舟先生”。"
    },
    {
        "slug": "li-ke",
        "name": "李可",
        "era": "当代",
        "lifespan": "1930-2019年",
        "titles": "火神派领军人物",
        "summary": "李可，山西闻喜人，善用附子大剂量回阳救逆，被称“李火神”。",
        "focus": "扶阳救逆与急危重症",
        "achievements": [
            "提出重用附子回阳救逆体系",
            "强调扶阳抑阴治疗重症",
            "治愈大量危急重症患者"
        ],
        "works": ["《李可老中医急危重症疑难病经验专辑》"],
        "anecdote": "常用附子救治垂危病人，声名远播。"
    },
    {
        "slug": "deng-tietao",
        "name": "邓铁涛",
        "era": "当代",
        "lifespan": "1916-2019年",
        "titles": "岭南中医大师",
        "summary": "邓铁涛，广东新会人，国医大师，擅长脾胃调养与温病治疗。",
        "focus": "岭南温病与脾胃论治",
        "achievements": [
            "提出脾胃论治新体系",
            "倡导温病学现代研究",
            "培养众多岭南中医人才"
        ],
        "works": ["《邓铁涛医学全集》"],
        "anecdote": "常以“为民除病”为座右铭，深受爱戴。"
    },
    {
        "slug": "wang-qi",
        "name": "王琦",
        "era": "当代",
        "lifespan": "1930年生",
        "titles": "体质学派创立者",
        "summary": "王琦，北京人，国医大师，建立中医体质辨识体系。",
        "focus": "体质分类与养生调摄",
        "achievements": [
            "创立九种体质分类理论",
            "制定体质辨识量表",
            "推广体质养生理念"
        ],
        "works": ["《中医体质学》"],
        "anecdote": "被誉为“体质学派奠基人”。"
    },
    {
        "slug": "zhou-zhongying",
        "name": "周仲瑛",
        "era": "当代",
        "lifespan": "1928年生",
        "titles": "温病与妇科专家",
        "summary": "周仲瑛，浙江宁波人，国医大师，擅长温病与妇科疑难。",
        "focus": "气营血辨证与肝脾调理",
        "achievements": [
            "提出温病从气营血辨治体系",
            "善治肝郁脾虚与痰瘀互结",
            "著述丰富培养弟子众多"
        ],
        "works": ["《周仲瑛医学文集》"],
        "anecdote": "强调“医者妙在权衡”，临证灵活。"
    },
    {
        "slug": "wang-yongyan",
        "name": "王永炎",
        "era": "当代",
        "lifespan": "1934年生",
        "titles": "中医教育家",
        "summary": "王永炎，辽宁本溪人，国医大师，长期致力于中医教育与呼吸病研究。",
        "focus": "整体观念下的呼吸病",
        "achievements": [
            "提出从整体观念论治呼吸病",
            "推动中医药现代化与循证研究",
            "担任多所中医院校领军人物"
        ],
        "works": ["《王永炎医学全集》"],
        "anecdote": "常以“守正创新”勉励后学，被称“王校长”。"
    },
    {
        "slug": "zhang-qi",
        "name": "张琪",
        "era": "当代",
        "lifespan": "1922-2019年",
        "titles": "肾病名医",
        "summary": "张琪，河北深泽人，国医大师，擅长治疗肾病疑难杂症。",
        "focus": "补肾活血与湿浊调理",
        "achievements": [
            "提出肾病辨病与辨证结合",
            "善用补肾活血益气化湿法",
            "倡导虚实夹杂标本兼顾"
        ],
        "works": ["《张琪医学经验集》"],
        "anecdote": "患者称其“张三碗”，赞其汤剂奇效。"
    },
    {
        "slug": "liu-ying",
        "name": "刘英",
        "era": "当代",
        "lifespan": "1917-2009年",
        "titles": "中医儿科泰斗",
        "summary": "刘英，江苏常州人，擅长小儿调脾胃护脾土，被称“刘奶奶”。",
        "focus": "小儿脾胃与体质调护",
        "achievements": [
            "提出“小儿脾常不足”调治思路",
            "善治厌食、哮喘、泄泻等儿病",
            "编写中医儿科教材"
        ],
        "works": ["《中医儿科学》"],
        "anecdote": "慈祥待患，深受患儿家长信赖。"
    },
    {
        "slug": "tong-xuemei",
        "name": "童学梅",
        "era": "当代",
        "lifespan": "1935年生",
        "titles": "针灸名医",
        "summary": "童学梅，上海人，著名针灸专家，善治疼痛与神经系统疾病。",
        "focus": "针灸手法与气血调畅",
        "achievements": [
            "总结针灸手法与辨证结合",
            "推广针灸临床教学体系",
            "倡导调气血和阴阳的针法"
        ],
        "works": ["《童氏针灸经验》"],
        "anecdote": "手法细腻，被患者称“童一针”。"
    },
    {
        "slug": "wang-xuetai",
        "name": "王雪苔",
        "era": "近现代",
        "lifespan": "1893-1974年",
        "titles": "中医外科专家",
        "summary": "王雪苔，江苏武进人，精于中医外科与皮肤病治疗。",
        "focus": "痈疽疮疡手法与内治",
        "achievements": [
            "擅长手术与中药结合治疗外科疾病",
            "创制外科洗剂与膏药",
            "推广中医外科系统化"
        ],
        "works": ["《王雪苔外科心得》"],
        "anecdote": "手术精准，患者称其“王刀郎”。"
    },
    {
        "slug": "heng-guqing",
        "name": "衡桂清",
        "era": "近现代",
        "lifespan": "1890-1968年",
        "titles": "四川中医名家",
        "summary": "衡桂清，四川遂宁人，擅长内科杂病与脾胃调理。",
        "focus": "和中扶阳与伤寒温病结合",
        "achievements": [
            "倡导和中扶阳的治疗体系",
            "精研《伤寒论》与温病学",
            "善治消化系统疾病"
        ],
        "works": ["《衡桂清医案》"],
        "anecdote": "医者仁心，被当地百姓称为“衡一方”。"
    },
    {
        "slug": "zhang-cigong",
        "name": "章次公",
        "era": "近现代",
        "lifespan": "1892-1959年",
        "titles": "经方专家",
        "summary": "章次公，浙江绍兴人，江浙伤寒派代表，善用经方治疗疑难杂病。",
        "focus": "经方活用与升降出入",
        "achievements": [
            "推广经方时方并用理念",
            "强调肝脾升降调畅",
            "著《章次公医案》汇集经验"
        ],
        "works": ["《章次公医案》"],
        "anecdote": "常以“经方如经兵”比喻治病，医风果断。"
    },
    {
        "slug": "ye-juquan",
        "name": "叶橘泉",
        "era": "近现代",
        "lifespan": "1886-1968年",
        "titles": "上海名中医",
        "summary": "叶橘泉，浙江宁波人，上海著名中医，擅长妇科与虚劳杂病。",
        "focus": "冲任调理与脾肾双补",
        "achievements": [
            "善用经方治疗妇科疾患",
            "提出冲任同源调理法",
            "倡导谨慎用药医风"
        ],
        "works": ["《叶橘泉医学文集》"],
        "anecdote": "行医谨慎，患者称其“橘泉先生”。"
    },
    {
        "slug": "yue-meizhong",
        "name": "岳美中",
        "era": "近现代",
        "lifespan": "1900-1982年",
        "titles": "伤寒派名医",
        "summary": "岳美中，河北清苑人，经方名医，善治伤寒温病与虚劳杂病。",
        "focus": "经方辨证与体质调理",
        "achievements": [
            "提出“活用经方，随证加减”",
            "善治结核、肾炎等疑难",
            "倡导医生需体察体质寒热"
        ],
        "works": ["《岳美中医案》"],
        "anecdote": "医术高超，被称“北方经方大家”。"
    },
    {
        "slug": "ren-yingqiu",
        "name": "任应秋",
        "era": "近现代",
        "lifespan": "1898-1993年",
        "titles": "中医教育奠基人",
        "summary": "任应秋，安徽怀宁人，北京中医学院首任院长之一，倡导现代中医教育。",
        "focus": "脾胃病与教学体系",
        "achievements": [
            "推动中医院校制度建设",
            "善治脾胃病与内科杂病",
            "著《任应秋医学全集》总结经验"
        ],
        "works": ["《任应秋医学全集》"],
        "anecdote": "提出“读经典、跟名师、习临床”教学理念。"
    },
    {
        "slug": "wang-mianzhi",
        "name": "王绵之",
        "era": "近现代",
        "lifespan": "1909-1989年",
        "titles": "中医内科专家",
        "summary": "王绵之，河北人，擅长治疗心脑血管病，提出气虚血瘀学说。",
        "focus": "心脑血管与气血理论",
        "achievements": [
            "提出“气虚血瘀”致病观点",
            "创制益气活血方药",
            "倡导循证思维指导中医"
        ],
        "works": ["《王绵之医学经验集》"],
        "anecdote": "因善治中风，被称“王活血”。"
    },
    {
        "slug": "guo-ziguang",
        "name": "郭子光",
        "era": "近现代",
        "lifespan": "1899-1976年",
        "titles": "岭南骨伤名医",
        "summary": "郭子光，广东番禺人，创立郭氏正骨法，擅长骨伤科。",
        "focus": "正骨复位与内外兼治",
        "achievements": [
            "总结正骨复位与功能训练体系",
            "创制接骨药酒与膏药",
            "推广骨伤康复理念"
        ],
        "works": ["《郭氏正骨经验》"],
        "anecdote": "正骨手法稳准，被称“郭一指”。"
    },
    {
        "slug": "shi-xuemin",
        "name": "石学敏",
        "era": "当代",
        "lifespan": "1938年生",
        "titles": "醒脑开窍针法创立者",
        "summary": "石学敏，天津人，国医大师，创立醒脑开窍针法治疗中风。",
        "focus": "针灸治疗脑血管病",
        "achievements": [
            "创立醒脑开窍针法体系",
            "推广中风康复针灸",
            "推动针灸现代科研"
        ],
        "works": ["《醒脑开窍针法》"],
        "anecdote": "被誉为“石一针”，让众多中风患者恢复。"
    },
    {
        "slug": "lu-zhizheng",
        "name": "路志正",
        "era": "当代",
        "lifespan": "1920-2023年",
        "titles": "国医大师",
        "summary": "路志正，河北蠡县人，擅长脾胃病与老年病调治。",
        "focus": "脾胃调理与养生康复",
        "achievements": [
            "强调“治未病”与养生结合",
            "提出“脾胃一体、培土生金”",
            "推广老年慢病中医综合干预"
        ],
        "works": ["《路志正医学经验集》"],
        "anecdote": "从医八十余载，被称“脾胃路”。"
    },
    {
        "slug": "li-ding",
        "name": "李鼎",
        "era": "当代",
        "lifespan": "1934年生",
        "titles": "中医骨科专家",
        "summary": "李鼎，山东人，擅长骨伤科，提出筋骨并重、动静结合康复理念。",
        "focus": "骨折复位与功能训练",
        "achievements": [
            "推广四步复位法",
            "创制接骨散与壮筋膏",
            "强调康复训练与功能重建"
        ],
        "works": ["《中医骨伤科学》"],
        "anecdote": "正骨精准，被患者称“李铁手”。"
    },
    {
        "slug": "jiang-jianhua",
        "name": "姜建华",
        "era": "当代",
        "lifespan": "1962年生",
        "titles": "中医呼吸病专家",
        "summary": "姜建华，黑龙江人，专长慢性阻塞性肺病、哮喘的中医治疗。",
        "focus": "肺脾肾三脏同调",
        "achievements": [
            "提出肺脾肾三脏同调理论",
            "创制祛痰平喘系列方",
            "推广雾化与中药结合疗法"
        ],
        "works": ["《中医呼吸病学》"],
        "anecdote": "耐心细致，被患者称“姜好气”。"
    },
    {
        "slug": "wang-jiamei",
        "name": "王家梅",
        "era": "当代",
        "lifespan": "1958年生",
        "titles": "中医妇科专家",
        "summary": "王家梅，浙江人，擅长治疗月经病、不孕症，倡导调肝脾肾。",
        "focus": "肝脾肾调和与女性生殖",
        "achievements": [
            "建立妇科辨证规范",
            "推行中药与针灸联合",
            "发表多篇妇科研究成果"
        ],
        "works": ["《中医妇科学》"],
        "anecdote": "耐心细致，被患者称“王主任”。"
    },
    {
        "slug": "zhou-meiling",
        "name": "周美玲",
        "era": "当代",
        "lifespan": "1970年生",
        "titles": "中医皮肤科专家",
        "summary": "周美玲，江苏人，专攻湿疹、银屑病等慢性皮肤病的中医治疗。",
        "focus": "肺脾同治与内外合参",
        "achievements": [
            "提出肺脾同治皮肤病理论",
            "推广内服外治综合方案",
            "研发植物外用制剂"
        ],
        "works": ["《中医皮肤病诊疗》"],
        "anecdote": "细心诊疗，被患者称“周医生”。"
    },
    {
        "slug": "li-zhenhua",
        "name": "李振华",
        "era": "当代",
        "lifespan": "1930-2019年",
        "titles": "中医肝病专家",
        "summary": "李振华，河南洛阳人，国医大师，擅长治疗肝胆疾病。",
        "focus": "疏肝利胆与健脾化湿",
        "achievements": [
            "创制疏肝利胆系列方剂",
            "提出肝病分期辨治体系",
            "重视情志调摄对肝病影响"
        ],
        "works": ["《李振华医学经验集》"],
        "anecdote": "患者称其“肝胆李”，感念其仁心。"
    },
    {
        "slug": "chen-keji",
        "name": "陈可冀",
        "era": "当代",
        "lifespan": "1923年生",
        "titles": "中西医结合先驱",
        "summary": "陈可冀，福建福州人，国医大师，长期从事心血管病中西医结合研究。",
        "focus": "心血管病与中西结合",
        "achievements": [
            "创制冠心Ⅱ号等中药制剂",
            "提出心衰益气温阳活血法",
            "推动中医药现代科研体系"
        ],
        "works": ["《陈可冀医学文集》"],
        "anecdote": "治心病有方，被誉为“陈心方”。"
    },
    {
        "slug": "zhang-boli",
        "name": "张伯礼",
        "era": "当代",
        "lifespan": "1948年生",
        "titles": "中医药抗疫先锋",
        "summary": "张伯礼，天津人，中国工程院院士，推动中医药抗击疫情与现代化。",
        "focus": "中医药现代化与急危重症",
        "achievements": [
            "组织制定中医药抗疫方案",
            "推动中医药现代化研究平台",
            "倡导中西医协同防治"
        ],
        "works": ["《张伯礼医学文集》"],
        "anecdote": "在抗击新冠疫情中坚守一线，被誉为“人民英雄”。"
    },
    {
        "slug": "huang-huang",
        "name": "黄煌",
        "era": "当代",
        "lifespan": "1954年生",
        "titles": "方证对应倡导者",
        "summary": "黄煌，江苏南京人，经方学者，提出方证相对与体质方。",
        "focus": "经方体质辨识",
        "achievements": [
            "提出经方体质分类体系",
            "推广“方证相对”理念",
            "培养经方研究人才"
        ],
        "works": ["《经方使用手册》"],
        "anecdote": "授课风趣，被学生称“黄师爷”。"
    },
    {
        "slug": "liu-qingquan",
        "name": "刘清泉",
        "era": "当代",
        "lifespan": "1964年生",
        "titles": "中医急诊专家",
        "summary": "刘清泉，北京中医医院院长，擅长危重症中医救治与应急管理。",
        "focus": "急危重症与中西协同",
        "achievements": [
            "主导多次重大公共卫生事件中医救治",
            "构建中医急诊救治体系",
            "推广中西医协同应急模式"
        ],
        "works": ["《中医急诊医学》"],
        "anecdote": "在抗疫中坚守前线，被称“逆行院长”。"
    },
    {
        "slug": "tong-xiaolin",
        "name": "仝小林",
        "era": "当代",
        "lifespan": "1956年生",
        "titles": "中医感染病专家",
        "summary": "仝小林，山西人，中国工程院院士，擅长感染病中医治疗。",
        "focus": "疫病辨证与中西结合",
        "achievements": [
            "在非典与新冠疫情中承担中医救治任务",
            "提出疫病从湿毒论治",
            "推广中医药干预感染性疾病"
        ],
        "works": ["《仝小林医学文集》"],
        "anecdote": "冲锋在前，被誉为“抗疫国医”。"
    },
    {
        "slug": "liu-lihong",
        "name": "刘力红",
        "era": "当代",
        "lifespan": "1967年生",
        "titles": "新生代经方学者",
        "summary": "刘力红，广西医科大学教授，著《思考中医》，倡导回归经典。",
        "focus": "中医哲学与经典教育",
        "achievements": [
            "著《思考中医》推动青年学习经典",
            "提出“以天地人之道解中医”",
            "促进中医教育改革"
        ],
        "works": ["《思考中医》"],
        "anecdote": "课堂生动，被学生称“红师兄”。"
    },
    {
        "slug": "zhang-daning",
        "name": "张大宁",
        "era": "当代",
        "lifespan": "1940年生",
        "titles": "中医肾病专家",
        "summary": "张大宁，天津人，国医大师，创立中医肾病三因辨证体系。",
        "focus": "肾病三因辨证",
        "achievements": [
            "提出肾病本虚标实兼夹的辨治",
            "创立“益肾活血、化湿祛浊”方案",
            "推广肾病中医综合管理"
        ],
        "works": ["《张大宁医学文集》"],
        "anecdote": "患者称其“肾病守护者”。"
    },
    {
        "slug": "ni-haixia",
        "name": "倪海厦",
        "era": "当代",
        "lifespan": "1954-2012年",
        "titles": "经方推广者",
        "summary": "倪海厦，台湾中医师，致力于经方教学与全球推广。",
        "focus": "经方临床与教学",
        "achievements": [
            "在海内外推广《伤寒论》学习",
            "主张以天人相应指导诊疗",
            "培养众多经方学徒"
        ],
        "works": ["《经方世界》"],
        "anecdote": "课程风格生动，被学生尊称“倪师”。"
    },
    {
        "slug": "peng-ziyi",
        "name": "彭子益",
        "era": "近现代",
        "lifespan": "1879-1968年",
        "titles": "易水学派传人",
        "summary": "彭子益，湖南湘潭人，著《医门八法》，提倡简明实用的治法。",
        "focus": "医门八法与脾胃调理",
        "achievements": [
            "总结汗、吐、下、和、温、清、补、消八法",
            "强调脾胃调理的重要性",
            "推广平民可用的简便方"
        ],
        "works": ["《医门八法》"],
        "anecdote": "行医朴实，被誉为“平民医者”。"
    },
    {
        "slug": "zhang-shanlei",
        "name": "张山雷",
        "era": "近现代",
        "lifespan": "1870-1955年",
        "titles": "经方学者",
        "summary": "张山雷，江苏武进人，著《伤寒论翼》，重视原文训诂。",
        "focus": "经典训诂与经方阐释",
        "achievements": [
            "以训诂学解析《伤寒论》",
            "强调“句句不离本经”",
            "培养经方研究人才"
        ],
        "works": ["《伤寒论翼》"],
        "anecdote": "被誉为“经方训诂第一人”。"
    },
    {
        "slug": "xia-guicheng",
        "name": "夏桂成",
        "era": "当代",
        "lifespan": "1930-2018年",
        "titles": "中医妇科大师",
        "summary": "夏桂成，江苏常熟人，擅长妇科调补，创立“肾气学说”妇科体系。",
        "focus": "肾气学说与女性调经",
        "achievements": [
            "提出“肾为先天，脾为后天”调经理论",
            "创制滋阴助阳调经方",
            "培养妇科中医人才"
        ],
        "works": ["《夏桂成医学经验集》"],
        "anecdote": "医德高尚，被患者称“夏妈妈”。"
    },
    {
        "slug": "qiu-maoliang",
        "name": "邱茂良",
        "era": "当代",
        "lifespan": "1945年生",
        "titles": "针灸神经调控专家",
        "summary": "邱茂良，福建人，长期研究针灸治疗神经系统疾病。",
        "focus": "针灸神经调控与康复",
        "achievements": [
            "提出针刺促进神经再生理论",
            "推广针灸康复联合疗法",
            "主持国家级针灸研究项目"
        ],
        "works": ["《针灸神经调控学》"],
        "anecdote": "被患者称为“邱教授妙手”。"
    },
    {
        "slug": "sun-guangrong",
        "name": "孙光荣",
        "era": "当代",
        "lifespan": "1954年生",
        "titles": "中医文化传播者",
        "summary": "孙光荣，北京人，中医文化学者，致力于中医理论普及。",
        "focus": "中医哲学与文化传播",
        "achievements": [
            "著作介绍中医文化与哲学体系",
            "推动中医文化走进校园",
            "倡导中医思维现代传播"
        ],
        "works": ["《中医文化学》"],
        "anecdote": "常在媒体讲述中医故事，被称“孙老师”。"
    },
    {
        "slug": "lv-jingshan",
        "name": "吕景山",
        "era": "当代",
        "lifespan": "1936年生",
        "titles": "中药鉴定大师",
        "summary": "吕景山，河北人，中药鉴定专家，擅长药材性状鉴别。",
        "focus": "中药鉴定与质量控制",
        "achievements": [
            "主持编写《全国中草药汇编》",
            "建立药材性状鉴别标准",
            "培养中药鉴定专业人才"
        ],
        "works": ["《中药材真伪鉴别》"],
        "anecdote": "常携放大镜走访药市，被称“吕放大”。"
    },
    {
        "slug": "cheng-xinnong",
        "name": "程莘农",
        "era": "当代",
        "lifespan": "1921-2015年",
        "titles": "针灸教育家",
        "summary": "程莘农，江苏泰兴人，著名针灸学家，推动针灸教育现代化。",
        "focus": "针灸理论与教学体系",
        "achievements": [
            "主持编写高等中医院校针灸教材",
            "推广毫火针、耳针等技术",
            "培养针灸高层次人才"
        ],
        "works": ["《针灸学》教材"],
        "anecdote": "被誉为“针灸教育第一人”。"
    },
    {
        "slug": "wu-pu",
        "name": "吴普",
        "era": "三国时期",
        "lifespan": "约190-270年",
        "titles": "《吴普本草》作者",
        "summary": "吴普，蜀汉名医，采集药材经验编成《吴普本草》。",
        "focus": "本草采集与药性记录",
        "achievements": [
            "记载药物采集方法与产地",
            "提出药物气味与功效关系",
            "为后世本草学提供资料"
        ],
        "works": ["《吴普本草》"],
        "anecdote": "常与百姓同采药，被称“草堂先生”。"
    },
    {
        "slug": "zhen-quan",
        "name": "甄权",
        "era": "唐代",
        "lifespan": "约687-760年",
        "titles": "唐代名医",
        "summary": "甄权，唐代太医，擅长脉诊与内科，著有《脉经》续补。",
        "focus": "脉诊精研与内科治疗",
        "achievements": [
            "总结脉诊经验补充脉经",
            "善治内科杂病与热病",
            "提出望闻问切综合诊断"
        ],
        "works": ["《脉诀》"],
        "anecdote": "诊脉精准，被誉为“甄神手”。"
    },
    {
        "slug": "wang-huaiyin",
        "name": "王怀隐",
        "era": "唐代",
        "lifespan": "约650-720年",
        "titles": "妇产科名医",
        "summary": "王怀隐，唐代太医，精于妇产科，被称为“产科圣手”。",
        "focus": "妇产科与产后调理",
        "achievements": [
            "提出产后调摄与护理方法",
            "创制多首安胎催产方",
            "强调孕产期情志与饮食调护"
        ],
        "works": ["《太平圣惠方》部分篇章"],
        "anecdote": "曾为皇族接生成功，声名鹊起。"
    },
    {
        "slug": "su-song",
        "name": "苏颂",
        "era": "北宋",
        "lifespan": "1020-1101年",
        "titles": "宋代科学家兼医家",
        "summary": "苏颂，字子容，主持编纂《图经本草》，兼具科学与医学成就。",
        "focus": "本草插图与药材鉴别",
        "achievements": [
            "编《图经本草》绘制药材图像",
            "提出药材识别关键特征",
            "结合天文、药物等多学科研究"
        ],
        "works": ["《图经本草》"],
        "anecdote": "以科学方法核实药材，被称“宋代百科全书式人才”。"
    },
    {
        "slug": "xu-shuwei",
        "name": "许叔微",
        "era": "南宋",
        "lifespan": "1079-1154年",
        "titles": "《伤寒九十论》作者",
        "summary": "许叔微，南宋医家，善治伤寒温疫，著《伤寒九十论》。",
        "focus": "伤寒温疫辨证",
        "achievements": [
            "总结伤寒辨证九十条",
            "强调察舌诊脉结合",
            "提出预防温疫的方法"
        ],
        "works": ["《伤寒九十论》"],
        "anecdote": "行医务实，被称“许启山”。"
    },
    {
        "slug": "han-zhihuo",
        "name": "韩祗和",
        "era": "北宋",
        "lifespan": "约1070-1140年",
        "titles": "儿科名医",
        "summary": "韩祗和，北宋太医，著《婴童宝鉴》，专攻儿科。",
        "focus": "儿科辨证与调护",
        "achievements": [
            "系统总结婴幼儿疾病诊疗",
            "强调小儿病从脾胃论治",
            "提出儿科护理与预防措施"
        ],
        "works": ["《婴童宝鉴》"],
        "anecdote": "被称“韩太医”，深受宫廷信任。"
    },
    {
        "slug": "wu-peiheng",
        "name": "吴佩衡",
        "era": "近现代",
        "lifespan": "1886-1973年",
        "titles": "四川名中医",
        "summary": "吴佩衡，四川温江人，擅长温病与脾胃病，被称“蜀中圣手”。",
        "focus": "温病调理与脾胃扶正",
        "achievements": [
            "强调脾胃为生化之源",
            "善治伤寒温病与杂病",
            "培养川派中医弟子众多"
        ],
        "works": ["《吴佩衡医案》"],
        "anecdote": "医术精湛，百姓尊称“吴圣手”。"
    }
]
index_cards = []
for master in masters:
    detail_path = output_dir / f"{master['slug']}.html"
    achievements_html = ''.join(f"<li>{item}</li>" for item in master['achievements'])
    works_html = ''.join(f"<li>{work}</li>" for work in master['works'])
    detail_html = textwrap.dedent(f'''\
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{master['name']} | 中医名人</title>
        <meta name="description" content="{master['summary']}">
        <link rel="stylesheet" href="../styles.css">
        <style>
            body {{ font-family: 'Noto Sans SC', sans-serif; background: #f1f5f2; color: #2c3e50; margin: 0; }}
            .layout {{ max-width: 860px; margin: 0 auto; padding: 2.5rem 1.5rem 4rem; }}
            .back-link {{ display: inline-flex; align-items: center; color: #1a8f5f; text-decoration: none; font-weight: 600; margin-bottom: 1.5rem; }}
            .back-link span {{ margin-left: 0.35rem; }}
            header {{ background: linear-gradient(135deg, #1a8f5f, #48c79c); color: #fff; padding: 2rem 2.4rem; border-radius: 18px; box-shadow: 0 18px 35px rgba(26, 143, 95, 0.18); margin-bottom: 2rem; }}
            header h1 {{ margin: 0 0 0.3rem; font-size: 2.3rem; }}
            header p {{ margin: 0.2rem 0; font-size: 1rem; opacity: 0.95; }}
            section {{ background: #fff; border-radius: 16px; padding: 1.8rem 2rem; box-shadow: 0 12px 28px rgba(15, 92, 62, 0.12); margin-bottom: 1.6rem; }}
            h2 {{ font-size: 1.4rem; color: #145f3b; margin-top: 0; }}
            p {{ line-height: 1.8; font-size: 1rem; color: #3b4a58; }}
            ul {{ padding-left: 1.2rem; line-height: 1.75; color: #3b4a58; }}
            footer {{ text-align: center; color: #6b7b8c; font-size: 0.9rem; margin-top: 2.5rem; }}
            footer a {{ color: #1a8f5f; text-decoration: none; }}
        </style>
    </head>
    <body>
        <div class="layout">
            <a class="back-link" href="../famous-tcm-doctors.html">←<span>返回中医名人大全</span></a>
            <header>
                <h1>{master['name']}</h1>
                <p>{master['titles']}</p>
                <p>{master['era']} · {master['lifespan']}</p>
            </header>
            <section>
                <h2>人物简介</h2>
                <p>{master['summary']}</p>
                <p>主要领域：{master['focus']}</p>
            </section>
            <section>
                <h2>学术成就</h2>
                <ul>{achievements_html}</ul>
            </section>
            <section>
                <h2>代表著作</h2>
                <ul>{works_html}</ul>
            </section>
            <section>
                <h2>逸闻轶事</h2>
                <p>{master['anecdote']}</p>
            </section>
            <footer>返回 <a href="../index.html">传统中医诊所首页</a></footer>
        </div>
    </body>
    </html>
    ''')
    detail_path.write_text(detail_html, encoding='utf-8')
    card_html = textwrap.dedent(f'''\
            <article class="master-card">
                <h2>{master['name']}</h2>
                <div class="era">{master['era']} · {master['lifespan']}</div>
                <p>{master['summary']}</p>
                <a href="famous-doctors/{master['slug']}.html" aria-label="查看{master['name']}的详细资料">了解详情<span>→</span></a>
            </article>
    ''')
    index_cards.append(card_html)

index_content = index_intro + ''.join(index_cards) + index_outro
Path('famous-tcm-doctors.html').write_text(index_content, encoding='utf-8')

print(f"生成 {len(masters)} 位中医名人的页面。")
