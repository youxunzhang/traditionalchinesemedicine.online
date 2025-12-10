// Initialise core interactions once the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initFAQ();
    initHerbCategories();
    initForms();
    initSmoothScroll();
    initAnimations();
    initZiwuClock();
});

// Navigation: mobile hamburger + sticky styling
function initNavigation() {
    const navConfigs = [
        {
            toggle: document.querySelector('.hamburger'),
            menu: document.querySelector('.nav-menu'),
            activeClass: 'active',
            linkSelector: 'a'
        },
        {
            toggle: document.querySelector('.sedona-nav__toggle'),
            menu: document.querySelector('.sedona-nav__links'),
            activeClass: 'is-open',
            linkSelector: 'a'
        }
    ];

    navConfigs.forEach(({ toggle, menu, activeClass, linkSelector }) => {
        if (!toggle || !menu) return;

        const navLinks = menu.querySelectorAll(linkSelector);
        const setExpanded = (isOpen) => {
            if (toggle.hasAttribute('aria-expanded')) {
                toggle.setAttribute('aria-expanded', String(isOpen));
            }
        };

        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle(activeClass);
            toggle.classList.toggle('active', isOpen);
            setExpanded(isOpen);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove(activeClass);
                toggle.classList.remove('active');
                setExpanded(false);
            });
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.96)';
            navbar.style.backdropFilter = 'blur(12px)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 6px 24px rgba(0,0,0,0.06)';
        }
    });
}

// FAQ accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
}

// Herb category tabs (if present on the page)
function initHerbCategories() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const herbCards = document.querySelectorAll('.herb-card');

    if (!tabButtons.length || !herbCards.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            herbCards.forEach(card => {
                const matches = category === 'all' || card.getAttribute('data-category') === category;
                card.style.display = matches ? 'block' : 'none';
                if (matches) {
                    card.style.animation = 'fadeIn 0.5s ease';
                }
            });
        });
    });
}

// Lightweight form handler for demo purposes
function initForms() {
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        consultationForm.addEventListener('submit', event => {
            event.preventDefault();
            handleFormSubmission(consultationForm, '咨询需求');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            handleFormSubmission(contactForm, '信息');
        });
    }
}

function handleFormSubmission(form, label) {
    const data = Object.fromEntries(new FormData(form).entries());
    showNotification(`已收到${label}，我们会尽快与您联系。`, 'success');
    form.reset();
    console.log('表单内容预览：', data);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#1a8f5f' : '#2c7be5'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 320px;
    `;

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Smooth scrolling for in-page anchors
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        });
    });
}

// Intersection Observer animations (if the classes exist)
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!('IntersectionObserver' in window) || !animatedElements.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));
}

// Ziwu Liuzhu clock on the homepage
function initZiwuClock() {
    const card = document.querySelector('.ziwu-clock-card');
    if (!card) return;

    const timeEl = card.querySelector('.ziwu-clock__time');
    const handEl = card.querySelector('.ziwu-clock__hand');
    const titleEl = card.querySelector('.ziwu-period__title');
    const tipEl = card.querySelector('.ziwu-period__tip');
    const badgeEl = card.querySelector('.ziwu-period__badge');
    const progressBar = card.querySelector('.ziwu-progress__bar');
    const timelineEl = card.querySelector('.ziwu-timeline');
    const nextNameEl = document.querySelector('.ziwu-next__name');
    const nextTimeEl = document.querySelector('.ziwu-next__time');

    const periods = [
        { name: '子', organ: '胆', start: 23, end: 1, tip: '宜早睡，少食辛辣，安神养胆。' },
        { name: '丑', organ: '肝', start: 1, end: 3, tip: '熟睡解毒，保持卧室昏暗与安静。' },
        { name: '寅', organ: '肺', start: 3, end: 5, tip: '可做缓慢深呼吸，助宣肺气。' },
        { name: '卯', organ: '大肠', start: 5, end: 7, tip: '温水一杯，顺畅排便、清理宿毒。' },
        { name: '辰', organ: '胃', start: 7, end: 9, tip: '享用温热早餐，避免生冷刺激。' },
        { name: '巳', organ: '脾', start: 9, end: 11, tip: '适合专注学习工作，勿暴饮暴食。' },
        { name: '午', organ: '心经', start: 11, end: 13, tip: '放松心绪，轻食少盐，补充水分。' },
        { name: '未', organ: '小肠', start: 13, end: 15, tip: '稳血糖的午后，散步助运化。' },
        { name: '申', organ: '膀胱', start: 15, end: 17, tip: '多喝温水、轻度伸展，排浊利湿。' },
        { name: '酉', organ: '肾', start: 17, end: 19, tip: '日落后收敛精气，晚餐宜清淡。' },
        { name: '戌', organ: '心包', start: 19, end: 21, tip: '舒缓情绪，可轻练八段锦或静坐。' },
        { name: '亥', organ: '三焦', start: 21, end: 23, tip: '减少蓝光刺激，为深睡做准备。' }
    ];

    const buildTimeline = () => {
        if (!timelineEl) return;
        timelineEl.innerHTML = periods.map(period => `
            <li class="ziwu-timeline__item" data-period="${period.name}">
                <div class="ziwu-timeline__label">${period.name}时 · ${period.organ}</div>
                <div class="ziwu-timeline__tip">${period.tip}</div>
            </li>
        `).join('');
    };

    const minutesFromMidnight = (date) => date.getHours() * 60 + date.getMinutes();

    const getPeriodInfo = (date) => {
        const currentMinutes = minutesFromMidnight(date);

        for (let i = 0; i < periods.length; i++) {
            const period = periods[i];
            const startMinutes = period.start * 60;
            let endMinutes = period.end * 60;

            const crossesMidnight = endMinutes <= startMinutes;
            const adjustedCurrent = crossesMidnight && currentMinutes < startMinutes
                ? currentMinutes + 1440
                : currentMinutes;

            if (crossesMidnight) endMinutes += 1440;

            if (adjustedCurrent >= startMinutes && adjustedCurrent < endMinutes) {
                const duration = endMinutes - startMinutes;
                const progress = (adjustedCurrent - startMinutes) / duration;
                const nextPeriod = periods[(i + 1) % periods.length];
                const nextStartMinutes = endMinutes >= 1440 ? endMinutes - 1440 : endMinutes;

                return { period, progress, nextPeriod, nextStartMinutes };
            }
        }

        return null;
    };

    const updateClock = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('zh-CN', { hour12: false, hour: '2-digit', minute: '2-digit' });
        if (timeEl) timeEl.textContent = timeString;

        const info = getPeriodInfo(now);
        if (!info) return;

        const { period, progress, nextPeriod, nextStartMinutes } = info;
        if (badgeEl) badgeEl.textContent = `${period.name}时 · ${period.organ}`;
        if (titleEl) titleEl.textContent = `${period.organ}经当令`;
        if (tipEl) tipEl.textContent = period.tip;
        if (progressBar) progressBar.style.width = `${Math.round(progress * 100)}%`;

        const rotation = (minutesFromMidnight(now) / 1440) * 360;
        if (handEl) handEl.style.transform = `translate(-50%, -100%) rotate(${rotation}deg)`;

        if (nextNameEl) nextNameEl.textContent = `${nextPeriod.name}时 · ${nextPeriod.organ}`;
        if (nextTimeEl) {
            const hours = Math.floor(nextStartMinutes / 60) % 24;
            const minutes = nextStartMinutes % 60;
            nextTimeEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        }

        if (timelineEl) {
            timelineEl.querySelectorAll('.ziwu-timeline__item').forEach(item => {
                item.classList.toggle('is-active', item.dataset.period === period.name);
            });
        }
    };

    buildTimeline();
    updateClock();
    setInterval(updateClock, 60 * 1000);
}
