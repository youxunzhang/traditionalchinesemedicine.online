// 全局变量
let currentPage = 1;
let herbsPerPage = 18;
let filteredHerbs = [];
let collectedHerbs = [];
let currentFilter = 'all';

// 语言管理
let currentLanguage = 'zh'; // 默认中文

// 语言切换函数
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateLanguageUI();
    updatePageContent();
    updateHerbsData();
    renderHerbsGrid();
}

// 更新语言UI
function updateLanguageUI() {
    const langText = document.querySelector('.lang-text');
    const htmlLang = document.documentElement;
    
    if (currentLanguage === 'en') {
        langText.textContent = '中文';
        htmlLang.lang = 'en';
    } else {
        langText.textContent = 'EN';
        htmlLang.lang = 'zh-CN';
    }
}

// 更新页面内容
function updatePageContent() {
    const elements = document.querySelectorAll('[data-zh][data-en]');
    elements.forEach(element => {
        const text = currentLanguage === 'zh' ? element.getAttribute('data-zh') : element.getAttribute('data-en');
        element.textContent = text;
    });
    
    // 更新搜索框占位符
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const placeholder = currentLanguage === 'zh' ? 
            searchInput.getAttribute('data-zh-placeholder') : 
            searchInput.getAttribute('data-en-placeholder');
        searchInput.placeholder = placeholder;
    }
}

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
        natureMeridian: "甘、微苦，平；归脾、肺经",
        usage: "3-9g，大剂量可用15g",
        contraindications: "实证、热证忌服",
        storage: "密封保存，防潮防虫"
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
        natureMeridian: "甘，微温；归肺、脾经",
        usage: "10-30g，大剂量可用60g",
        contraindications: "表实邪盛、气滞湿阻忌服",
        storage: "干燥通风处保存"
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
        natureMeridian: "甘，平；归心、肺、肾经",
        usage: "3-15g，可泡茶或煎服",
        contraindications: "无特殊禁忌",
        storage: "密封保存，防潮"
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
        natureMeridian: "苦、甘、涩，微温；归肝、肾经",
        usage: "10-30g，制用补肝肾，生用通便",
        contraindications: "大便溏泄者慎用",
        storage: "干燥处保存"
    },
    {
        id: 5,
        name: "枸杞子",
        category: "上品",
        description: "滋补肝肾，益精明目。久服轻身不老，耐寒暑。",
        value: "明目圣药，延年益寿，养生佳品",
        icon: "🍒",
        effects: ["滋补肝肾", "明目", "延年", "养生"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归肝、肾经",
        usage: "10-15g，可泡茶或煎服",
        contraindications: "外感实热者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 6,
        name: "当归",
        category: "上品",
        description: "补血活血，调经止痛，润燥滑肠。为血中之圣药。",
        value: "血中之圣药，妇科要药，价值极高",
        icon: "🌺",
        effects: ["补血", "活血", "调经", "止痛"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、辛，温；归肝、心、脾经",
        usage: "5-15g，大剂量可用30g",
        contraindications: "月经过多者慎用",
        storage: "密封保存，防潮防虫"
    },
    {
        id: 7,
        name: "熟地黄",
        category: "上品",
        description: "补血滋阴，益精填髓。为补血滋阴之要药。",
        value: "补血滋阴圣药，价值极高",
        icon: "🌿",
        effects: ["补血", "滋阴", "益精", "填髓"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，微温；归肝、肾经",
        usage: "10-30g，大剂量可用60g",
        contraindications: "脾胃虚弱者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 8,
        name: "白芍",
        category: "上品",
        description: "养血调经，敛阴止汗，柔肝止痛，平抑肝阳。",
        value: "养血调经要药，妇科圣药",
        icon: "🌸",
        effects: ["养血", "调经", "止痛", "敛阴"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "苦、酸，微寒；归肝、脾经",
        usage: "5-15g，大剂量可用30g",
        contraindications: "虚寒腹痛者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 9,
        name: "阿胶",
        category: "上品",
        description: "补血滋阴，润燥止血。为补血止血之要药。",
        value: "补血止血圣药，价值极高",
        icon: "🩸",
        effects: ["补血", "滋阴", "止血", "润燥"],
        price: "昂贵",
        rarity: "稀有",
        grade: "上品",
        natureMeridian: "甘，平；归肺、肝、肾经",
        usage: "3-9g，烊化冲服",
        contraindications: "脾胃虚弱者慎用",
        storage: "密封保存，防潮防热"
    },
    {
        id: 10,
        name: "龙眼肉",
        category: "上品",
        description: "补益心脾，养血安神。久服轻身不老。",
        value: "补心脾圣药，安神佳品",
        icon: "🍇",
        effects: ["补心脾", "养血", "安神", "延年"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，温；归心、脾经",
        usage: "10-15g，可生食或煎服",
        contraindications: "痰火内盛者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 11,
        name: "大枣",
        category: "上品",
        description: "补中益气，养血安神。久服轻身延年。",
        value: "补中益气要药，养生佳品",
        icon: "🍎",
        effects: ["补中益气", "养血", "安神", "延年"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，温；归脾、胃经",
        usage: "6-15g，大剂量可用30g",
        contraindications: "湿盛中满者慎用",
        storage: "密封保存，防潮防虫"
    },
    {
        id: 12,
        name: "山药",
        category: "上品",
        description: "补脾养胃，生津益肺，补肾涩精。久服耳目聪明。",
        value: "补脾养胃要药，养生佳品",
        icon: "🥔",
        effects: ["补脾", "养胃", "益肺", "补肾"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，平；归脾、肺、肾经",
        usage: "15-30g，大剂量可用60g",
        contraindications: "实热证者慎用",
        storage: "干燥处保存"
    },
    {
        id: 13,
        name: "茯苓",
        category: "上品",
        description: "利水渗湿，健脾宁心。久服安魂养神。",
        value: "利水渗湿要药，安神佳品",
        icon: "🍄",
        effects: ["利水", "渗湿", "健脾", "宁心"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、淡，平；归心、肺、脾、肾经",
        usage: "10-15g，大剂量可用30g",
        contraindications: "虚寒滑精者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 14,
        name: "薏苡仁",
        category: "上品",
        description: "利水渗湿，健脾止泻，除痹，清热排脓。",
        value: "利水渗湿要药，健脾佳品",
        icon: "🌾",
        effects: ["利水", "渗湿", "健脾", "止泻"],
        price: "便宜",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、淡，微寒；归脾、胃、肺经",
        usage: "10-30g，大剂量可用60g",
        contraindications: "孕妇慎用",
        storage: "密封保存，防潮防虫"
    },
    {
        id: 15,
        name: "莲子",
        category: "上品",
        description: "补脾止泻，益肾涩精，养心安神。久服轻身耐老。",
        value: "补脾益肾要药，安神佳品",
        icon: "🪷",
        effects: ["补脾", "止泻", "益肾", "安神"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、涩，平；归脾、肾、心经",
        usage: "10-15g，可生食或煎服",
        contraindications: "大便燥结者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 16,
        name: "百合",
        category: "上品",
        description: "养阴润肺，清心安神。久服轻身不老。",
        value: "养阴润肺要药，安神佳品",
        icon: "🌷",
        effects: ["养阴", "润肺", "清心", "安神"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘，微寒；归心、肺经",
        usage: "10-30g，大剂量可用60g",
        contraindications: "风寒咳嗽者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 17,
        name: "麦冬",
        category: "上品",
        description: "养阴生津，润肺清心。久服轻身不老。",
        value: "养阴生津要药，润肺佳品",
        icon: "🌿",
        effects: ["养阴", "生津", "润肺", "清心"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、微苦，微寒；归心、肺、胃经",
        usage: "10-15g，大剂量可用30g",
        contraindications: "脾胃虚寒者慎用",
        storage: "密封保存，防潮"
    },
    {
        id: 18,
        name: "天冬",
        category: "上品",
        description: "养阴润燥，清肺生津。久服轻身不老。",
        value: "养阴润燥要药，清肺佳品",
        icon: "🌿",
        effects: ["养阴", "润燥", "清肺", "生津"],
        price: "中等",
        rarity: "常见",
        grade: "上品",
        natureMeridian: "甘、苦，寒；归肺、肾经",
        usage: "6-15g，大剂量可用30g",
        contraindications: "脾胃虚寒者慎用",
        storage: "密封保存，防潮"
    }
];

// 初始化收藏数据
collectedHerbs = JSON.parse(localStorage.getItem('collectedHerbs')) || [];

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
    initializeLanguageToggle();
    updateHerbsData();
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
    
    const gradeColor = herb.grade === '上品' || herb.grade === 'Superior' ? '#4CAF50' : 
                      herb.grade === '中品' || herb.grade === 'Medium' ? '#FF9800' : '#F44336';
    const gradeText = herb.grade === '上品' || herb.grade === 'Superior' ? 
                     (currentLanguage === 'zh' ? '君药' : 'Monarch') :
                     herb.grade === '中品' || herb.grade === 'Medium' ? 
                     (currentLanguage === 'zh' ? '臣药' : 'Minister') : 
                     (currentLanguage === 'zh' ? '佐使药' : 'Assistant');
    
    card.innerHTML = `
        <div class="herb-icon-large">${herb.icon}</div>
        <h3 class="herb-name">${herb.name}</h3>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            <span class="herb-category" style="background: ${gradeColor}; color: white;">${herb.category}</span>
            <span class="herb-category" style="background: #666; color: white; font-size: 0.7rem;">${gradeText}</span>
        </div>
        <p class="herb-description">${herb.description}</p>
        <div class="herb-value">
            <strong>${currentLanguage === 'zh' ? '价值：' : 'Value: '}</strong>${herb.value}
            ${isCollected ? `<br><small style="color: #4CAF50;">✓ ${currentLanguage === 'zh' ? '已收藏' : 'Collected'}</small>` : ''}
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
        const prevText = currentLanguage === 'zh' ? '上一页' : 'Previous';
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i> ${prevText}
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
        const nextText = currentLanguage === 'zh' ? '下一页' : 'Next';
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">
            ${nextText} <i class="fas fa-chevron-right"></i>
        </button>`;
    }
    
    paginationHTML += '</div>';
    
    // 添加页码信息
    const pageInfoText = currentLanguage === 'zh' ? 
        `第 ${currentPage} 页，共 ${totalPages} 页 (${filteredHerbs.length} 种本草)` :
        `Page ${currentPage} of ${totalPages} (${filteredHerbs.length} herbs)`;
    paginationHTML += `<div class="page-info">
        ${pageInfoText}
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

    const gradeColor = herb.grade === '上品' || herb.grade === 'Superior' ? '#4CAF50' : 
                      herb.grade === '中品' || herb.grade === 'Medium' ? '#FF9800' : '#F44336';
    const gradeText = herb.grade === '上品' || herb.grade === 'Superior' ? 
                     (currentLanguage === 'zh' ? '君药' : 'Monarch Herb') :
                     herb.grade === '中品' || herb.grade === 'Medium' ? 
                     (currentLanguage === 'zh' ? '臣药' : 'Minister Herb') : 
                     (currentLanguage === 'zh' ? '佐使药' : 'Assistant Herb');
    
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
            <h3 style="color: #2d5a27; margin-bottom: 1rem;">${currentLanguage === 'zh' ? '功效描述' : 'Efficacy Description'}</h3>
            <p style="line-height: 1.8; color: #555;">${herb.description}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #2d5a27; margin-bottom: 1rem;">${currentLanguage === 'zh' ? '价值评估' : 'Value Assessment'}</h3>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 10px;">
                <p style="font-size: 1.1rem; color: #2d5a27; font-weight: 600;">${herb.value}</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div>
                        <strong>${currentLanguage === 'zh' ? '价格等级：' : 'Price Level: '}</strong>${herb.price}
                    </div>
                    <div>
                        <strong>${currentLanguage === 'zh' ? '稀有程度：' : 'Rarity: '}</strong>${herb.rarity}
                    </div>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #2d5a27; margin-bottom: 1rem;">${currentLanguage === 'zh' ? '主要功效' : 'Main Effects'}</h3>
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
                ${isCollected ? (currentLanguage === 'zh' ? '取消收藏' : 'Remove from Collection') : (currentLanguage === 'zh' ? '收藏本草' : 'Add to Collection')}
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

// 更新本草数据函数
function updateHerbsData() {
    filteredHerbs = [...herbsData];
}

// 初始化语言切换按钮
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
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