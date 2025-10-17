// Initialise core interactions once the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initFAQ();
    initHerbCategories();
    initForms();
    initSmoothScroll();
    initAnimations();
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
            navbar.style.background = 'rgba(30, 68, 51, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
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
            handleFormSubmission(consultationForm, '諮詢需求');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            handleFormSubmission(contactForm, '訊息');
        });
    }
}

function handleFormSubmission(form, label) {
    const data = Object.fromEntries(new FormData(form).entries());
    showNotification(`已收到${label}，我們會盡快與您聯繫。`, 'success');
    form.reset();
    console.log('表單內容預覽：', data);
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
