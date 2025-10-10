const famousDoctors = [
  {
    "id": 1,
    "name": "黃帝",
    "era": "傳說時期",
    "period": "先秦",
    "specialties": [
      "醫學哲思",
      "養生",
      "經絡"
    ],
    "notableWorks": [
      "黃帝內經"
    ],
    "contribution": "與岐伯問答、建立經絡臟腑與陰陽五行理論，為後世中醫思想奠基。"
  },
  {
    "id": 2,
    "name": "岐伯",
    "era": "傳說時期",
    "period": "先秦",
    "specialties": [
      "經絡",
      "診法",
      "問診"
    ],
    "notableWorks": [
      "黃帝內經"
    ],
    "contribution": "據傳為黃帝御醫，以問答形式闡釋診法、養生與病機，是中醫經絡理論的集大成者。"
  },
  {
    "id": 3,
    "name": "雷公",
    "era": "傳說時期",
    "period": "先秦",
    "specialties": [
      "炮製",
      "本草",
      "藥理"
    ],
    "notableWorks": [
      "雷公炮炙論"
    ],
    "contribution": "提出藥材炮炙法與七情配伍觀，奠定藥材處理與協同增效的工藝基礎。"
  },
  {
    "id": 4,
    "name": "扁鵲",
    "era": "戰國",
    "period": "先秦",
    "specialties": [
      "四診合參",
      "急救",
      "外科"
    ],
    "notableWorks": [
      "難經",
      "扁鵲傳"
    ],
    "contribution": "以望聞問切合參著稱，強調未病先防與早期介入，救治皇子起死回生的故事家喻戶曉。"
  },
  {
    "id": 5,
    "name": "倉公（淳于意）",
    "era": "西漢",
    "period": "秦漢",
    "specialties": [
      "臨床辨證",
      "醫案書寫",
      "內科"
    ],
    "notableWorks": [
      "倉公傳"
    ],
    "contribution": "善記醫案、重視脈診與辨證論治，《史記·扁鵲倉公列傳》中所載醫案對後世臨床記錄影響深遠。"
  },
  {
    "id": 6,
    "name": "郭玉",
    "era": "東漢",
    "period": "秦漢",
    "specialties": [
      "骨傷",
      "針灸",
      "內科"
    ],
    "notableWorks": [
      "郭氏肘後方"
    ],
    "contribution": "以肘後備急方見稱，擅長針灸與外科救急，提出中風與痺症治法要點。"
  },
  {
    "id": 7,
    "name": "張仲景",
    "era": "東漢",
    "period": "秦漢",
    "specialties": [
      "經方",
      "內科",
      "辨證論治"
    ],
    "notableWorks": [
      "傷寒論",
      "金匱要略"
    ],
    "contribution": "創立六經辨證體系，以方證對應理念處理傷寒與內科雜病，被尊為醫聖。"
  },
  {
    "id": 8,
    "name": "華佗",
    "era": "東漢",
    "period": "秦漢",
    "specialties": [
      "外科",
      "麻醉",
      "導引"
    ],
    "notableWorks": [
      "青囊書",
      "五禽戲"
    ],
    "contribution": "擅長外科手術與麻沸散麻醉，創編五禽戲導引功，強調動靜結合的調養。"
  },
  {
    "id": 9,
    "name": "董奉",
    "era": "東漢",
    "period": "秦漢",
    "specialties": [
      "方藥",
      "仁術",
      "救濟"
    ],
    "notableWorks": [
      "董奉杏林故事"
    ],
    "contribution": "以施醫濟世著稱，杏林典故源於其診治百姓、以植杏報德的善行。"
  },
  {
    "id": 10,
    "name": "王叔和",
    "era": "西晉",
    "period": "魏晉南北朝",
    "specialties": [
      "脈學",
      "方劑整理",
      "經方"
    ],
    "notableWorks": [
      "脈經",
      "注傷寒論"
    ],
    "contribution": "編撰《脈經》，整理張仲景方書，確立寸口脈診的詳備體系。"
  },
  {
    "id": 11,
    "name": "黃甫謐",
    "era": "西晉",
    "period": "魏晉南北朝",
    "specialties": [
      "針灸",
      "經絡",
      "養生"
    ],
    "notableWorks": [
      "甲乙經"
    ],
    "contribution": "彙編《黃帝內經》針灸篇為《甲乙經》，系統整理腧穴定位與操作，成為後世針灸標準。"
  },
  {
    "id": 12,
    "name": "葛洪",
    "era": "東晉",
    "period": "魏晉南北朝",
    "specialties": [
      "本草",
      "外科",
      "養生"
    ],
    "notableWorks": [
      "抱朴子",
      "肘後備急方"
    ],
    "contribution": "提倡道醫結合，於《肘後備急方》收錄中毒、瘡瘍等救急方藥，兼論養生延年之術。"
  },
  {
    "id": 13,
    "name": "龐安常",
    "era": "北齊",
    "period": "魏晉南北朝",
    "specialties": [
      "內科",
      "女科",
      "兒科"
    ],
    "notableWorks": [
      "傷寒總病論"
    ],
    "contribution": "總結傷寒與雜病辨證要點，提倡審因論治，善治婦兒之疾。"
  },
  {
    "id": 14,
    "name": "陶弘景",
    "era": "南朝梁",
    "period": "魏晉南北朝",
    "specialties": [
      "本草",
      "道醫",
      "養生"
    ],
    "notableWorks": [
      "本草經集注"
    ],
    "contribution": "彙集魏晉南北朝本草資料，分類藥性並評述炮製方法，被稱為山中宰相。"
  },
  {
    "id": 15,
    "name": "巢元方",
    "era": "隋",
    "period": "隋唐",
    "specialties": [
      "外科",
      "內科",
      "養生"
    ],
    "notableWorks": [
      "諸病源候論"
    ],
    "contribution": "以證候分類方式描述各科疾病，強調病因病機，為後世辨證體系奠基。"
  },
  {
    "id": 16,
    "name": "蘇敬",
    "era": "唐",
    "period": "隋唐",
    "specialties": [
      "本草",
      "藥政",
      "校勘"
    ],
    "notableWorks": [
      "新修本草"
    ],
    "contribution": "主持重修官修《本草》，首次加入彩圖與校勘制度，確立官方藥典範式。"
  },
  {
    "id": 17,
    "name": "王冰",
    "era": "唐",
    "period": "隋唐",
    "specialties": [
      "經典注釋",
      "溫補學說"
    ],
    "notableWorks": [
      "黃帝內經素問注"
    ],
    "contribution": "以溫補觀點註解《素問》，補足古文闡義，影響宋元醫家對內經的理解。"
  },
  {
    "id": 18,
    "name": "孫思邈",
    "era": "唐",
    "period": "隋唐",
    "specialties": [
      "方劑",
      "養生",
      "醫德"
    ],
    "notableWorks": [
      "備急千金要方",
      "千金翼方"
    ],
    "contribution": "提出醫者仁心與預防為先理念，收錄大量方藥與養生方法，被尊為藥王。"
  },
  {
    "id": 19,
    "name": "王焘",
    "era": "唐",
    "period": "隋唐",
    "specialties": [
      "方書編輯",
      "臨床經驗"
    ],
    "notableWorks": [
      "外臺秘要"
    ],
    "contribution": "廣收各家醫案與方藥，依證分類，方便臨床檢索，對宋以後類方著作影響深遠。"
  },
  {
    "id": 20,
    "name": "甄權",
    "era": "唐",
    "period": "隋唐",
    "specialties": [
      "針灸",
      "外科",
      "養生"
    ],
    "notableWorks": [
      "玉函經"
    ],
    "contribution": "以針灸經穴、氣血運行與導引法見長，主張扶正祛邪並重。"
  },
  {
    "id": 21,
    "name": "陳藏器",
    "era": "唐",
    "period": "隋唐",
    "specialties": [
      "食療",
      "本草",
      "炮製"
    ],
    "notableWorks": [
      "本草拾遺"
    ],
    "contribution": "補充前代未收藥物與食療資料，強調藥食同源與地域物產辨析。"
  },
  {
    "id": 22,
    "name": "孟詵",
    "era": "唐",
    "period": "隋唐",
    "specialties": [
      "食療",
      "養生",
      "養胃"
    ],
    "notableWorks": [
      "食療本草"
    ],
    "contribution": "將日常食材的性味功效編成食療指南，倡導四時與體質調養。"
  },
  {
    "id": 23,
    "name": "許叔微",
    "era": "北宋",
    "period": "宋遼金",
    "specialties": [
      "方劑評註",
      "醫案"
    ],
    "notableWorks": [
      "普濟本事方"
    ],
    "contribution": "善用簡潔方藥治急症，擅長瘟疫處置，重視醫案記錄與方義闡述。"
  },
  {
    "id": 24,
    "name": "錢乙",
    "era": "北宋",
    "period": "宋遼金",
    "specialties": [
      "小兒科",
      "方藥"
    ],
    "notableWorks": [
      "小兒藥證直訣"
    ],
    "contribution": "首創兒科專書，依臟腑生理分析小兒病機，提出調肝脾腎之法。"
  },
  {
    "id": 25,
    "name": "劉完素",
    "era": "金",
    "period": "宋遼金",
    "specialties": [
      "寒涼派",
      "外感熱病"
    ],
    "notableWorks": [
      "素問玄機原病式",
      "黃帝素問宣明論方"
    ],
    "contribution": "倡導火熱為病，多用寒涼藥，創立火熱論與三焦辨證法。"
  },
  {
    "id": 26,
    "name": "張元素",
    "era": "金",
    "period": "宋遼金",
    "specialties": [
      "脾胃學派",
      "內科"
    ],
    "notableWorks": [
      "醫學啟源",
      "脾胃論"
    ],
    "contribution": "提出脾胃為後天之本，強調補土培元，對後世溫補派影響深遠。"
  },
  {
    "id": 27,
    "name": "李東垣",
    "era": "金",
    "period": "宋遼金",
    "specialties": [
      "脾胃派",
      "補中",
      "內科"
    ],
    "notableWorks": [
      "脾胃論",
      "蘭室秘藏"
    ],
    "contribution": "主張內傷脾胃致百病，善用補中益氣湯類方扶正升陽。"
  },
  {
    "id": 28,
    "name": "張從正",
    "era": "金",
    "period": "宋遼金",
    "specialties": [
      "攻下派",
      "祛邪"
    ],
    "notableWorks": [
      "儒門事親"
    ],
    "contribution": "提出六氣致病說，強調三法（汗、吐、下）攻邪，治法峻猛。"
  },
  {
    "id": 29,
    "name": "朱丹溪",
    "era": "元",
    "period": "元",
    "specialties": [
      "養陰派",
      "相火論"
    ],
    "notableWorks": [
      "丹溪心法"
    ],
    "contribution": "提出「陽常有餘，陰常不足」，倡導滋陰降火，調理情志以防病。"
  },
  {
    "id": 30,
    "name": "嚴用和",
    "era": "南宋",
    "period": "宋遼金",
    "specialties": [
      "運氣學",
      "內經研究"
    ],
    "notableWorks": [
      "濟生方"
    ],
    "contribution": "研習《素問》《靈樞》，注重運氣理論與診法統合，整理多首經驗方。"
  },
  {
    "id": 31,
    "name": "陳無擇",
    "era": "北宋",
    "period": "宋遼金",
    "specialties": [
      "婦科",
      "方論"
    ],
    "notableWorks": [
      "三因極一病證方論"
    ],
    "contribution": "以三因（內因、外因、不內外因）分析病機，兼論婦科、兒科、外科。"
  },
  {
    "id": 32,
    "name": "陳言",
    "era": "南宋",
    "period": "宋遼金",
    "specialties": [
      "溫病",
      "時令養生"
    ],
    "notableWorks": [
      "三因極一病證方論補註"
    ],
    "contribution": "注重時令與氣候對疾病的影響，補充前人方義，善治外感夾雜。"
  },
  {
    "id": 33,
    "name": "楊士瀛",
    "era": "金",
    "period": "宋遼金",
    "specialties": [
      "內科",
      "方藥"
    ],
    "notableWorks": [
      "仁齋直指方"
    ],
    "contribution": "重視辨證配伍，提出「六氣中人」概念，強調體質差異與治法對應。"
  },
  {
    "id": 34,
    "name": "蘇頌",
    "era": "北宋",
    "period": "宋遼金",
    "specialties": [
      "本草圖譜",
      "藥政",
      "天文"
    ],
    "notableWorks": [
      "圖經本草備要"
    ],
    "contribution": "主持繪製插圖本草，詳述產地炮製與藥材辨識，兼通曆法推算。"
  },
  {
    "id": 35,
    "name": "王惟一",
    "era": "北宋",
    "period": "宋遼金",
    "specialties": [
      "針灸教育",
      "解剖"
    ],
    "notableWorks": [
      "銅人腧穴針灸圖經"
    ],
    "contribution": "鑄造針灸銅人，標定腧穴與經絡循行，創立針灸考試制度。"
  },
  {
    "id": 36,
    "name": "陳自明",
    "era": "南宋",
    "period": "宋遼金",
    "specialties": [
      "婦科",
      "針灸",
      "養生"
    ],
    "notableWorks": [
      "婦人大全良方"
    ],
    "contribution": "整合女科診療、胎產調護與保健，奠定後世婦科專科架構。"
  },
  {
    "id": 37,
    "name": "朱肱",
    "era": "北宋",
    "period": "宋遼金",
    "specialties": [
      "急救",
      "傷寒"
    ],
    "notableWorks": [
      "活人書"
    ],
    "contribution": "以「活人」為宗旨，整理家傳急救方，強調先期救治與簡便有效。"
  },
  {
    "id": 38,
    "name": "羅天益",
    "era": "元",
    "period": "元",
    "specialties": [
      "外科",
      "針灸"
    ],
    "notableWorks": [
      "衛生寶鑑"
    ],
    "contribution": "擅長外科瘡瘍與針灸，彙集衛生保健方法，兼顧預防與治療。"
  },
  {
    "id": 39,
    "name": "危亦林",
    "era": "元",
    "period": "元",
    "specialties": [
      "外科",
      "骨傷"
    ],
    "notableWorks": [
      "世醫得效方"
    ],
    "contribution": "以外科、骨傷聞名，善治跌打與瘡瘍，書中載有大量手術案例。"
  },
  {
    "id": 40,
    "name": "王好古",
    "era": "元",
    "period": "元",
    "specialties": [
      "脾胃",
      "方劑評註"
    ],
    "notableWorks": [
      "此事難知"
    ],
    "contribution": "承繼李東垣學說，提出脾胃治法精義，善於方劑加減與脈象辨析。"
  },
  {
    "id": 41,
    "name": "李時珍",
    "era": "明",
    "period": "明",
    "specialties": [
      "本草",
      "臨床",
      "博物"
    ],
    "notableWorks": [
      "本草綱目"
    ],
    "contribution": "博採博用藥材 1892 味，詳述性味主治與圖譜，修訂諸多舊說，被譽為本草集大成。"
  },
  {
    "id": 42,
    "name": "張景岳",
    "era": "明",
    "period": "明",
    "specialties": [
      "溫補派",
      "內科理論"
    ],
    "notableWorks": [
      "景岳全書"
    ],
    "contribution": "強調命門真火、陰陽互根，提出補火派理論，兼顧補瀉並用。"
  },
  {
    "id": 43,
    "name": "吳又可",
    "era": "明",
    "period": "明",
    "specialties": [
      "溫疫",
      "外感熱病"
    ],
    "notableWorks": [
      "瘟疫論"
    ],
    "contribution": "首次提出「戾氣」致病，主張辛涼透表與清泄相結合，是溫病學先驅。"
  },
  {
    "id": 44,
    "name": "吳昆",
    "era": "明",
    "period": "明",
    "specialties": [
      "醫學總論",
      "教育"
    ],
    "notableWorks": [
      "醫方考"
    ],
    "contribution": "彙整方劑出處與適應症，強調學習醫經與方證對應的重要性。"
  },
  {
    "id": 45,
    "name": "萬密齋",
    "era": "明",
    "period": "明",
    "specialties": [
      "養生",
      "內科"
    ],
    "notableWorks": [
      "萬密齋醫書"
    ],
    "contribution": "提出「治未病」策略，注重運動、飲食與心性調攝的整體療養。"
  },
  {
    "id": 46,
    "name": "孫一奎",
    "era": "明",
    "period": "明",
    "specialties": [
      "內科",
      "病機"
    ],
    "notableWorks": [
      "醫旨緒餘"
    ],
    "contribution": "善於探討病機，提出「動中有陽、靜中有陰」觀點，主張靈活遣方。"
  },
  {
    "id": 47,
    "name": "龔廷賢",
    "era": "明",
    "period": "明",
    "specialties": [
      "衛生",
      "養生",
      "灸法"
    ],
    "notableWorks": [
      "萬病回春"
    ],
    "contribution": "倡導家庭保健，提供灸法與食療指南，普及中醫養生。"
  },
  {
    "id": 48,
    "name": "趙獻可",
    "era": "明",
    "period": "明",
    "specialties": [
      "腎命理論",
      "補腎派"
    ],
    "notableWorks": [
      "醫貫"
    ],
    "contribution": "提出「命門真火」之說，強調腎陽為生命根本，擅治虛損久病。"
  },
  {
    "id": 49,
    "name": "薛己",
    "era": "明",
    "period": "明",
    "specialties": [
      "外感",
      "溫病",
      "婦科"
    ],
    "notableWorks": [
      "校注婦人良方",
      "讀素問鈔"
    ],
    "contribution": "重視外感六氣與胎產調護，善於活用《內經》理論。"
  },
  {
    "id": 50,
    "name": "陳實功",
    "era": "明",
    "period": "明",
    "specialties": [
      "外科",
      "口腔"
    ],
    "notableWorks": [
      "外科正宗"
    ],
    "contribution": "專研瘡瘍、咽喉、口腔疾病，詳細記錄手術與外治方法。"
  },
  {
    "id": 51,
    "name": "談允賢",
    "era": "明",
    "period": "明",
    "specialties": [
      "女科",
      "針灸",
      "內科"
    ],
    "notableWorks": [
      "女科指掌",
      "小兒推拿法"
    ],
    "contribution": "以女科診治聞名，主張調氣血與情志，著書詳列針灸與小兒推拿。"
  },
  {
    "id": 52,
    "name": "徐春甫",
    "era": "明",
    "period": "明",
    "specialties": [
      "醫學百科",
      "養生"
    ],
    "notableWorks": [
      "古今醫統大全"
    ],
    "contribution": "彙編古今醫籍，整理醫家學說，兼論養生攝生法門。"
  },
  {
    "id": 53,
    "name": "汪機",
    "era": "明",
    "period": "明",
    "specialties": [
      "辨證論治",
      "內科"
    ],
    "notableWorks": [
      "醫方集解"
    ],
    "contribution": "以「審證求因」見長，強調四診合參與方藥加減。"
  },
  {
    "id": 54,
    "name": "程國彭",
    "era": "明",
    "period": "明",
    "specialties": [
      "小兒科",
      "內科"
    ],
    "notableWorks": [
      "醫學心悟"
    ],
    "contribution": "提出小兒「稚陰稚陽」理論，善治小兒驚風與內科雜病。"
  },
  {
    "id": 55,
    "name": "王肯堂",
    "era": "明",
    "period": "明",
    "specialties": [
      "醫史",
      "經方"
    ],
    "notableWorks": [
      "證治準繩"
    ],
    "contribution": "整理疾病證治綱要，詳述病因病機與方藥運用，是臨床手冊。"
  },
  {
    "id": 56,
    "name": "俞嘉言",
    "era": "明",
    "period": "明",
    "specialties": [
      "脾胃",
      "瘧疾",
      "運氣"
    ],
    "notableWorks": [
      "通俗傷寒論",
      "醫門法律"
    ],
    "contribution": "強調溫補脾腎與養陽，善治瘧疾與虛損。"
  },
  {
    "id": 57,
    "name": "李梴",
    "era": "明",
    "period": "明",
    "specialties": [
      "醫學入門",
      "教育"
    ],
    "notableWorks": [
      "醫學入門"
    ],
    "contribution": "以簡明扼要方式整理醫理方藥，成為啟蒙醫書。"
  },
  {
    "id": 58,
    "name": "李中梓",
    "era": "明末清初",
    "period": "明清之際",
    "specialties": [
      "醫學教育",
      "內科"
    ],
    "notableWorks": [
      "醫宗必讀"
    ],
    "contribution": "提倡讀經悟道，整理學習路徑，兼述臨床要訣。"
  },
  {
    "id": 59,
    "name": "葉天士",
    "era": "清",
    "period": "清",
    "specialties": [
      "溫病",
      "衛氣營血"
    ],
    "notableWorks": [
      "臨證指南醫案"
    ],
    "contribution": "創立衛氣營血辨證，靈活運用辛涼透表與養陰清熱，為溫病學大師。"
  },
  {
    "id": 60,
    "name": "吳鞠通",
    "era": "清",
    "period": "清",
    "specialties": [
      "溫病",
      "三焦辨證"
    ],
    "notableWorks": [
      "溫病條辨"
    ],
    "contribution": "發展三焦辨證，細分熱病傳變階段，強調辛涼清透與扶正。"
  },
  {
    "id": 61,
    "name": "王孟英",
    "era": "清",
    "period": "清",
    "specialties": [
      "溫病",
      "養陰"
    ],
    "notableWorks": [
      "王氏溫病條辨"
    ],
    "contribution": "承襲葉桂學說，擅用養陰生津法治熱病耗液。"
  },
  {
    "id": 62,
    "name": "王清任",
    "era": "清",
    "period": "清",
    "specialties": [
      "活血",
      "外科",
      "解剖"
    ],
    "notableWorks": [
      "醫林改錯"
    ],
    "contribution": "以解剖校正臟腑位置，倡導活血化瘀治法，發明復元活血湯等名方。"
  },
  {
    "id": 63,
    "name": "徐靈胎",
    "era": "清",
    "period": "清",
    "specialties": [
      "醫學哲理",
      "運氣"
    ],
    "notableWorks": [
      "醫學源流論"
    ],
    "contribution": "強調醫學與理學相通，重視脾胃元氣與情志調攝。"
  },
  {
    "id": 64,
    "name": "陳士鐸",
    "era": "清",
    "period": "清",
    "specialties": [
      "內科",
      "脾胃"
    ],
    "notableWorks": [
      "辨證錄"
    ],
    "contribution": "善於調理脾胃與氣血失衡，主張「邪去正安」。"
  },
  {
    "id": 65,
    "name": "陳修園",
    "era": "清",
    "period": "清",
    "specialties": [
      "經方",
      "教育"
    ],
    "notableWorks": [
      "傷寒論類方"
    ],
    "contribution": "編寫經方讀本，提倡「活讀活用」傷寒論。"
  },
  {
    "id": 66,
    "name": "黃元御",
    "era": "清",
    "period": "清",
    "specialties": [
      "內經研究",
      "運氣"
    ],
    "notableWorks": [
      "四聖心源"
    ],
    "contribution": "以易理詮釋內經，提出「太極陰陽」醫理，強調心腎相交。"
  },
  {
    "id": 67,
    "name": "汪昂",
    "era": "清",
    "period": "清",
    "specialties": [
      "本草",
      "方書"
    ],
    "notableWorks": [
      "醫方集解",
      "增補本草備要"
    ],
    "contribution": "校訂方藥來源，補充藥性應用，利於臨床檢索。"
  },
  {
    "id": 68,
    "name": "周學海",
    "era": "清",
    "period": "清",
    "specialties": [
      "女科",
      "經方"
    ],
    "notableWorks": [
      "婦科指掌"
    ],
    "contribution": "精於婦科診治，善於調氣血與肝腎，提倡「女子以血為本」。"
  },
  {
    "id": 69,
    "name": "趙學敏",
    "era": "清",
    "period": "清",
    "specialties": [
      "本草",
      "民間藥"
    ],
    "notableWorks": [
      "本草綱目拾遺"
    ],
    "contribution": "補錄民間常用藥材，記載採集炮製與地方特色。"
  },
  {
    "id": 70,
    "name": "張璐",
    "era": "清",
    "period": "清",
    "specialties": [
      "內科",
      "情志"
    ],
    "notableWorks": [
      "張氏醫通"
    ],
    "contribution": "注重情志致病與脾胃調理，提出「內傷七情，外感六氣」。"
  },
  {
    "id": 71,
    "name": "唐宗海",
    "era": "清末",
    "period": "清",
    "specialties": [
      "中西匯通",
      "經絡"
    ],
    "notableWorks": [
      "血證論",
      "中西匯通醫經精義"
    ],
    "contribution": "以中西醫理對讀內經，強調血脈循行與臟腑功能對照。"
  },
  {
    "id": 72,
    "name": "薛雪",
    "era": "清",
    "period": "清",
    "specialties": [
      "內傷",
      "溫補"
    ],
    "notableWorks": [
      "醫學淵源"
    ],
    "contribution": "主張補腎填精、滋養真陰，善治虛勞久病。"
  },
  {
    "id": 73,
    "name": "傅青主",
    "era": "清",
    "period": "清",
    "specialties": [
      "婦科",
      "調經"
    ],
    "notableWorks": [
      "傅青主女科"
    ],
    "contribution": "擅長調經安胎與產後調理，重視情志與氣血平衡。"
  },
  {
    "id": 74,
    "name": "沈金鰲",
    "era": "清",
    "period": "清",
    "specialties": [
      "辨證",
      "方藥"
    ],
    "notableWorks": [
      "類證治裁"
    ],
    "contribution": "以類證分類方藥，提供臨床速查與加減指引。"
  },
  {
    "id": 75,
    "name": "錢潢",
    "era": "清",
    "period": "清",
    "specialties": [
      "傷寒",
      "溯源"
    ],
    "notableWorks": [
      "傷寒溯源集"
    ],
    "contribution": "從運氣角度詮釋傷寒，提出溫疫與傷寒異同。"
  },
  {
    "id": 76,
    "name": "吳謙",
    "era": "清",
    "period": "清",
    "specialties": [
      "官修醫書",
      "教育"
    ],
    "notableWorks": [
      "醫宗金鑑"
    ],
    "contribution": "主持編纂《醫宗金鑑》，成為清代官方醫學教科書。"
  },
  {
    "id": 77,
    "name": "費伯雄",
    "era": "清",
    "period": "清",
    "specialties": [
      "經方",
      "活血"
    ],
    "notableWorks": [
      "醫燼"
    ],
    "contribution": "重視氣血調整，擅治痰瘀互結之證。"
  },
  {
    "id": 78,
    "name": "華岫嶽",
    "era": "清",
    "period": "清",
    "specialties": [
      "經方",
      "內傷"
    ],
    "notableWorks": [
      "張氏醫通續編"
    ],
    "contribution": "承襲張璐學派，強調陰陽平衡與脾胃調護。"
  },
  {
    "id": 79,
    "name": "柯琴",
    "era": "清",
    "period": "清",
    "specialties": [
      "傷寒學",
      "辨證"
    ],
    "notableWorks": [
      "傷寒來蘇集"
    ],
    "contribution": "以六經為綱，重視病勢升降，提倡寒熱錯雜靈活遣方。"
  },
  {
    "id": 80,
    "name": "嚴西亭",
    "era": "清",
    "period": "清",
    "specialties": [
      "婦科",
      "經方"
    ],
    "notableWorks": [
      "嚴氏女科"
    ],
    "contribution": "善治婦科血證，強調補腎養血與調沖任。"
  },
  {
    "id": 81,
    "name": "張錫純",
    "era": "清末民初",
    "period": "近現代",
    "specialties": [
      "中西會通",
      "氣化"
    ],
    "notableWorks": [
      "醫學衷中參西錄"
    ],
    "contribution": "倡導氣化觀，靈活運用中西藥物，重視補陽與活血。"
  },
  {
    "id": 82,
    "name": "丁甘仁",
    "era": "民國",
    "period": "近現代",
    "specialties": [
      "經方",
      "內科"
    ],
    "notableWorks": [
      "丁甘仁醫案"
    ],
    "contribution": "以經方臨床著稱，強調「守方不泥方」，善治內科重症。"
  },
  {
    "id": 83,
    "name": "施今墨",
    "era": "民國",
    "period": "近現代",
    "specialties": [
      "經方",
      "教育",
      "臨床"
    ],
    "notableWorks": [
      "施今墨醫話"
    ],
    "contribution": "北京四大名醫之一，擅用經方治雜病，重視辨體質。"
  },
  {
    "id": 84,
    "name": "秦伯未",
    "era": "民國",
    "period": "近現代",
    "specialties": [
      "溫病",
      "體質養生"
    ],
    "notableWorks": [
      "中醫入門",
      "中醫復興論"
    ],
    "contribution": "推廣中醫教育，倡導「自己做自己的醫生」，結合溫病與養生觀。"
  },
  {
    "id": 85,
    "name": "朱良春",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "中醫腫瘤",
      "溫病"
    ],
    "notableWorks": [
      "朱良春醫案"
    ],
    "contribution": "善治惡性腫瘤與疑難雜症，提出扶正祛邪並重的治癌策略。"
  },
  {
    "id": 86,
    "name": "裘沛然",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "內分泌",
      "疑難雜症"
    ],
    "notableWorks": [
      "裘氏醫案"
    ],
    "contribution": "擅長甲狀腺與內分泌疾病，善用經方調理陰陽。"
  },
  {
    "id": 87,
    "name": "劉渡舟",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "經方",
      "傷寒"
    ],
    "notableWorks": [
      "劉渡舟醫案",
      "經方臨證指南"
    ],
    "contribution": "精研《傷寒論》，倡導「法隨證立」，培養經方人才。"
  },
  {
    "id": 88,
    "name": "胡希恕",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "經方",
      "傷寒"
    ],
    "notableWorks": [
      "胡希恕醫案"
    ],
    "contribution": "重視原文原方運用，提出「傷寒六經，百病皆治」理念。"
  },
  {
    "id": 89,
    "name": "鄧鐵濤",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "腎病",
      "經方",
      "教育"
    ],
    "notableWorks": [
      "鄧鐵濤醫案"
    ],
    "contribution": "擅治腎病、風濕與疑難重症，強調腎陽腎陰雙補。"
  },
  {
    "id": 90,
    "name": "任應秋",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "內科",
      "教育",
      "科研"
    ],
    "notableWorks": [
      "任應秋醫話"
    ],
    "contribution": "中醫教育家，推動現代中醫院校體系與臨床科研。"
  },
  {
    "id": 91,
    "name": "蒲輔周",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "婦科",
      "經方"
    ],
    "notableWorks": [
      "蒲輔周婦科經驗"
    ],
    "contribution": "長於調經安胎，提出「肝脾腎三臟同調」理念。"
  },
  {
    "id": 92,
    "name": "葉橘泉",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "內科",
      "溫病"
    ],
    "notableWorks": [
      "葉橘泉醫案"
    ],
    "contribution": "善治溫病與熱證，重視養陰清熱、調理氣機。"
  },
  {
    "id": 93,
    "name": "王綿之",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "心血管",
      "經方"
    ],
    "notableWorks": [
      "王綿之醫案"
    ],
    "contribution": "以經方治療心血管疾病見長，強調氣血同調。"
  },
  {
    "id": 94,
    "name": "周楣聲",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "兒科",
      "經方"
    ],
    "notableWorks": [
      "周楣聲醫案"
    ],
    "contribution": "擅治小兒哮喘與脾胃病，倡導「脾為後天之本」。"
  },
  {
    "id": 95,
    "name": "張鏡人",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "傷科",
      "內科"
    ],
    "notableWorks": [
      "張鏡人醫案"
    ],
    "contribution": "善治筋骨痺痛與中風後遺症，兼顧針藥並用。"
  },
  {
    "id": 96,
    "name": "吳佩衡",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "溫病",
      "經方"
    ],
    "notableWorks": [
      "吳佩衡醫案"
    ],
    "contribution": "重視衛氣營血與辨證施治，被譽為「吳派傷寒」。"
  },
  {
    "id": 97,
    "name": "李可",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "急危重症",
      "經方"
    ],
    "notableWorks": [
      "李可老中醫急危重症疑難病經驗選"
    ],
    "contribution": "善用附子類方救治垂危，提出大劑量重用之法。"
  },
  {
    "id": 98,
    "name": "倪海廈",
    "era": "20-21世紀",
    "period": "近現代",
    "specialties": [
      "經方",
      "教育",
      "天文曆法"
    ],
    "notableWorks": [
      "漢唐中醫課程"
    ],
    "contribution": "將經方與天干地支、天文曆法結合，推廣國際化中醫教育。"
  },
  {
    "id": 99,
    "name": "楊繼洲",
    "era": "明",
    "period": "明",
    "specialties": [
      "針灸",
      "臨床實用"
    ],
    "notableWorks": [
      "針灸大成"
    ],
    "contribution": "彙編針灸腧穴、經絡循行與臨床主治，被視為針灸學里程碑。"
  },
  {
    "id": 100,
    "name": "周仲瑛",
    "era": "20世紀",
    "period": "近現代",
    "specialties": [
      "婦科",
      "經方",
      "教育"
    ],
    "notableWorks": [
      "周仲瑛醫案"
    ],
    "contribution": "善治婦科疑難與不孕症，推廣「四診合參」與辨體質治療。"
  }
]

export default famousDoctors;
