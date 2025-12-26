// Initialise core interactions once the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHerbCategories();
    initForms();
    initFaq();
    initSmoothScroll();
    initAnimations();
    initBreathingTimer();
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
        removeDeprecatedNavLinks(menu);
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

function removeDeprecatedNavLinks(menu) {
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        const label = link.textContent?.trim();
        if (label === '中医好书') {
            const listItem = link.closest('li');
            if (listItem) {
                listItem.remove();
            } else {
                link.remove();
            }
        }
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

// FAQ toggles
function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

function initBreathingTimer() {
    const inhaleInput = document.getElementById('inhaleInput');
    const holdInput = document.getElementById('holdInput');
    const exhaleInput = document.getElementById('exhaleInput');
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    const phaseLabel = document.getElementById('phaseLabel');
    const phaseCountdown = document.getElementById('phaseCountdown');
    const breathCircle = document.getElementById('breathCircle');
    const rhythmSummary = document.getElementById('rhythmSummary');

    if (!inhaleInput || !holdInput || !exhaleInput || !startButton || !resetButton || !phaseLabel || !phaseCountdown || !breathCircle || !rhythmSummary) {
        return;
    }

    const inputs = [inhaleInput, holdInput, exhaleInput];
    const phaseScales = {
        inhale: 1.15,
        hold: 1.05,
        exhale: 0.88
    };

    let timerId = null;
    let phases = [];
    let currentPhaseIndex = 0;
    let remainingSeconds = 0;
    let isRunning = false;
    let isPaused = false;

    const sanitizeValue = (value, min) => {
        const parsed = Number.parseInt(value, 10);
        if (Number.isNaN(parsed)) return min;
        return Math.max(parsed, min);
    };

    const buildPhases = () => {
        const inhale = sanitizeValue(inhaleInput.value, 1);
        const hold = sanitizeValue(holdInput.value, 0);
        const exhale = sanitizeValue(exhaleInput.value, 1);

        return [
            { key: 'inhale', label: '吸气', duration: inhale },
            { key: 'hold', label: '停顿', duration: hold },
            { key: 'exhale', label: '吐气', duration: exhale }
        ];
    };

    const getActivePhases = () => {
        const list = buildPhases().filter(phase => phase.duration > 0);
        return list.length ? list : [{ key: 'inhale', label: '吸气', duration: 1 }];
    };

    const updateSummary = () => {
        const inhale = sanitizeValue(inhaleInput.value, 1);
        const hold = sanitizeValue(holdInput.value, 0);
        const exhale = sanitizeValue(exhaleInput.value, 1);
        rhythmSummary.textContent = `吸气 ${inhale}s · 停顿 ${hold}s · 吐气 ${exhale}s`;
    };

    const updateCircleState = (phase) => {
        breathCircle.classList.remove('is-hold', 'is-exhale');
        if (phase.key === 'hold') {
            breathCircle.classList.add('is-hold');
        }
        if (phase.key === 'exhale') {
            breathCircle.classList.add('is-exhale');
        }
        breathCircle.style.transitionDuration = `${Math.max(phase.duration, 1)}s`;
        breathCircle.style.transform = `scale(${phaseScales[phase.key]})`;
    };

    const updatePhaseDisplay = () => {
        const phase = phases[currentPhaseIndex];
        phaseLabel.textContent = phase.label;
        phaseCountdown.textContent = `${remainingSeconds}s`;
        updateCircleState(phase);
    };

    const setInputsDisabled = (disabled) => {
        inputs.forEach((input) => {
            input.disabled = disabled;
            input.classList.toggle('is-disabled', disabled);
        });
    };

    const tick = () => {
        if (!isRunning) return;
        remainingSeconds -= 1;
        if (remainingSeconds <= 0) {
            currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
            remainingSeconds = phases[currentPhaseIndex].duration || 0;
            if (remainingSeconds === 0) {
                tick();
                return;
            }
            updatePhaseDisplay();
        } else {
            phaseCountdown.textContent = `${remainingSeconds}s`;
        }
    };

    const startTimer = () => {
        phases = getActivePhases();
        currentPhaseIndex = 0;
        remainingSeconds = phases[0].duration;
        isRunning = true;
        isPaused = false;
        setInputsDisabled(true);
        startButton.textContent = '暂停';
        updatePhaseDisplay();
        clearInterval(timerId);
        timerId = setInterval(tick, 1000);
    };

    const pauseTimer = () => {
        isRunning = false;
        isPaused = true;
        clearInterval(timerId);
        startButton.textContent = '继续';
    };

    const resumeTimer = () => {
        if (isRunning) return;
        isRunning = true;
        isPaused = false;
        setInputsDisabled(true);
        startButton.textContent = '暂停';
        clearInterval(timerId);
        timerId = setInterval(tick, 1000);
    };

    const resetTimer = () => {
        clearInterval(timerId);
        isRunning = false;
        isPaused = false;
        phases = getActivePhases();
        currentPhaseIndex = 0;
        remainingSeconds = phases[0].duration;
        setInputsDisabled(false);
        startButton.textContent = '开始';
        updatePhaseDisplay();
    };

    startButton.addEventListener('click', () => {
        if (isRunning) {
            pauseTimer();
            return;
        }
        if (isPaused) {
            resumeTimer();
            return;
        }
        startTimer();
    });

    resetButton.addEventListener('click', resetTimer);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            updateSummary();
            if (!isRunning) {
                phases = getActivePhases();
                currentPhaseIndex = 0;
                remainingSeconds = phases[0].duration;
                updatePhaseDisplay();
            }
        });
    });

    updateSummary();
    phases = getActivePhases();
    remainingSeconds = phases[0].duration;
    updatePhaseDisplay();
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
