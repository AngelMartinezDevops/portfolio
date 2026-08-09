// Language Management
let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-en]').forEach(el => {
        if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-es');
        }
    });

    document.documentElement.lang = lang;
    updateLangToggle();
}

function updateLangToggle() {
    const options = document.querySelectorAll('.lang-option');
    options.forEach(option => {
        option.classList.remove('active');
        if (option.textContent === currentLang.toUpperCase()) {
            option.classList.add('active');
        }
    });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'es' : 'en';
            setLanguage(newLang);
        });
    }

    initSmoothScroll();
    initNavbar();
    initScrollSpy();
    initReveals();
    initExperienceHighlight();
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const update = () => {
        navbar.classList.toggle('is-scrolled', window.scrollY > 40);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
}

function initScrollSpy() {
    const navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
    const sections = navLinks
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!navLinks.length || !sections.length) return;

    const setActive = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach(section => spy.observe(section));
}

function initReveals() {
    const revealEls = document.querySelectorAll(
        '.section-title, .about-text, .stat-item, .experience-card, .skill-card, .education-card, .contact-btn, .section-subtitle'
    );

    revealEls.forEach((el) => {
        el.classList.add('reveal');

        const parent = el.parentElement;
        let siblingIndex = 0;
        if (parent) {
            const siblings = Array.from(parent.children).filter(child => child.classList.contains('reveal') || child === el);
            siblingIndex = Math.max(0, siblings.indexOf(el));
        }

        const delay = Math.min(siblingIndex, 8) * 70;
        el.style.setProperty('--reveal-delay', `${delay}ms`);
    });

    if (prefersReducedMotion) {
        revealEls.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
    });

    revealEls.forEach(el => observer.observe(el));
}

function initExperienceHighlight() {
    document.querySelectorAll('.experience-card').forEach(card => {
        card.addEventListener('click', function () {
            document.querySelectorAll('.experience-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.experience-card')) {
            document.querySelectorAll('.experience-card').forEach(c => c.classList.remove('active'));
        }
    });
}
