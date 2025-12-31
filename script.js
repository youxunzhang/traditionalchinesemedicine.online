// Initialise core interactions once the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHerbCategories();
    initForms();
    initFaq();
    initSmoothScroll();
    initAnimations();
    initXhalrBreathing();
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
        if (label === 'TCM Books') {
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
            handleFormSubmission(consultationForm, 'consultation request');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            handleFormSubmission(contactForm, 'message');
        });
    }
}

function handleFormSubmission(form, label) {
    const data = Object.fromEntries(new FormData(form).entries());
    showNotification(`Thanks! We received your ${label} and will reach out soon.`, 'success');
    form.reset();
    console.log('Form preview:', data);
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

function initXhalrBreathing() {
    if (!document.body.classList.contains('home-xhalr')) return;

    const pulse = document.getElementById('pulse');
    const pulseText = document.getElementById('pulseText');
    const pulseCountdown = document.getElementById('pulseCountdown');
    const rhythmSummary = document.getElementById('rhythmSummary');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');
    const themeToggle = document.getElementById('themeToggle');
    const wordsToggle = document.getElementById('wordsToggle');
    const countdownToggle = document.getElementById('countdownToggle');

    const inhaleInput = document.getElementById('inhaleInput');
    const inhaleSlider = document.getElementById('inhaleSlider');
    const inhaleHoldInput = document.getElementById('inhaleHoldInput');
    const inhaleHoldSlider = document.getElementById('inhaleHoldSlider');
    const exhaleInput = document.getElementById('exhaleInput');
    const exhaleSlider = document.getElementById('exhaleSlider');
    const exhaleHoldInput = document.getElementById('exhaleHoldInput');
    const exhaleHoldSlider = document.getElementById('exhaleHoldSlider');

    if (!pulse || !pulseText || !pulseCountdown || !rhythmSummary) return;

    const outerCircle = pulse.querySelector('.pulse-circle--outer');
    const innerCircle = pulse.querySelector('.pulse-circle--inner');
    const presetButtons = document.querySelectorAll('.preset');

    if (!outerCircle || !innerCircle) return;

    let timerId = null;
    let phases = [];
    let currentPhaseIndex = 0;
    let remainingSeconds = 0;
    let isPaused = false;

    const sanitizeValue = (value, min) => {
        const parsed = Number.parseInt(value, 10);
        if (Number.isNaN(parsed)) return min;
        return Math.max(parsed, min);
    };

    const phaseConfig = {
        inhale: { label: 'Inhale', scale: 1.22, stateClass: 'is-inhale' },
        inhaleHold: { label: 'Hold', scale: 1.12, stateClass: 'is-hold' },
        exhale: { label: 'Exhale', scale: 0.78, stateClass: 'is-exhale' },
        exhaleHold: { label: 'Hold', scale: 0.9, stateClass: 'is-hold' }
    };

    const getPhaseValues = () => ({
        inhale: sanitizeValue(inhaleInput.value, 1),
        inhaleHold: sanitizeValue(inhaleHoldInput.value, 0),
        exhale: sanitizeValue(exhaleInput.value, 1),
        exhaleHold: sanitizeValue(exhaleHoldInput.value, 0)
    });

    const buildPhases = () => {
        const values = getPhaseValues();
        return [
            { key: 'inhale', duration: values.inhale },
            { key: 'inhaleHold', duration: values.inhaleHold },
            { key: 'exhale', duration: values.exhale },
            { key: 'exhaleHold', duration: values.exhaleHold }
        ];
    };

    const getActivePhases = () => {
        const list = buildPhases().filter(phase => phase.duration > 0);
        return list.length ? list : [{ key: 'inhale', duration: 1 }];
    };

    const updateSummary = () => {
        const values = getPhaseValues();
        rhythmSummary.textContent = `Inhale ${values.inhale}s · Hold ${values.inhaleHold}s · Exhale ${values.exhale}s`;
    };

    const updatePulseState = (phase) => {
        const config = phaseConfig[phase.key];
        pulse.classList.remove('is-inhale', 'is-exhale', 'is-hold');
        pulse.classList.add(config.stateClass);
        pulseText.textContent = config.label;
        pulseCountdown.textContent = `${remainingSeconds}s`;

        const duration = Math.max(phase.duration, 1);
        pulse.style.setProperty('--pulse-duration', `${duration}s`);
        pulse.style.setProperty('--pulse-scale', config.scale);
    };

    const advancePhase = () => {
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
        remainingSeconds = phases[currentPhaseIndex].duration;
        if (remainingSeconds <= 0) {
            advancePhase();
            return;
        }
        updatePulseState(phases[currentPhaseIndex]);
    };

    const tick = () => {
        remainingSeconds -= 1;
        if (remainingSeconds <= 0) {
            advancePhase();
        } else {
            pulseCountdown.textContent = `${remainingSeconds}s`;
        }
    };

    const startBreathing = () => {
        clearInterval(timerId);
        phases = getActivePhases();
        currentPhaseIndex = 0;
        remainingSeconds = phases[0].duration;
        updatePulseState(phases[0]);
        timerId = setInterval(tick, 1000);
        isPaused = false;
        if (pauseButton) {
            pauseButton.textContent = 'Pause';
        }
    };

    const bindControl = (input, slider, min) => {
        const handleInput = (value) => {
            const sanitized = sanitizeValue(value, min);
            input.value = sanitized;
            slider.value = sanitized;
            updateSummary();
            startBreathing();
        };

        input.addEventListener('input', () => handleInput(input.value));
        slider.addEventListener('input', () => handleInput(slider.value));
    };

    bindControl(inhaleInput, inhaleSlider, 1);
    bindControl(inhaleHoldInput, inhaleHoldSlider, 0);
    bindControl(exhaleInput, exhaleSlider, 1);
    bindControl(exhaleHoldInput, exhaleHoldSlider, 0);

    presetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const values = button.dataset.values?.split(',').map(value => Number.parseInt(value, 10));
            if (!values || values.length !== 4 || values.some(Number.isNaN)) return;
            inhaleInput.value = values[0];
            inhaleSlider.value = values[0];
            inhaleHoldInput.value = values[1];
            inhaleHoldSlider.value = values[1];
            exhaleInput.value = values[2];
            exhaleSlider.value = values[2];
            exhaleHoldInput.value = values[3];
            exhaleHoldSlider.value = values[3];
            updateSummary();
            startBreathing();
        });
    });

    const pauseBreathing = () => {
        if (!timerId) return;
        clearInterval(timerId);
        timerId = null;
        isPaused = true;
    };

    const resumeBreathing = () => {
        if (timerId) return;
        timerId = setInterval(tick, 1000);
        isPaused = false;
    };

    pauseButton?.addEventListener('click', () => {
        if (isPaused) {
            resumeBreathing();
            pauseButton.textContent = 'Pause';
        } else {
            pauseBreathing();
            pauseButton.textContent = 'Resume';
        }
    });

    resetButton?.addEventListener('click', () => {
        startBreathing();
    });

    themeToggle?.addEventListener('change', () => {
        document.body.classList.toggle('is-night', themeToggle.checked);
    });

    wordsToggle?.addEventListener('change', () => {
        document.body.classList.toggle('hide-words', !wordsToggle.checked);
    });

    countdownToggle?.addEventListener('change', () => {
        document.body.classList.toggle('hide-countdown', !countdownToggle.checked);
    });

    updateSummary();
    startBreathing();
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
