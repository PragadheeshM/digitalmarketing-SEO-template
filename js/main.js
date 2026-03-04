document.addEventListener('DOMContentLoaded', () => {

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // ===== STICKY NAVBAR — scrolled state =====
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // run once on load
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
        });
    });

    // ===== SCROLL REVEAL =====
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: make everything visible
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
            el.classList.add('visible');
        });
    }

    // ===== MOBILE NAV ACCORDION DROPDOWNS =====
    document.querySelectorAll('.mobile-dd-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const chevron = btn.querySelector('.chevron');
            const isOpen = content.classList.contains('open');
            // Close all others first
            document.querySelectorAll('.mobile-dd-content.open').forEach(el => el.classList.remove('open'));
            document.querySelectorAll('.mobile-dd-btn .chevron').forEach(el => el.style.transform = '');
            if (!isOpen) {
                content.classList.add('open');
                if (chevron) chevron.style.transform = 'rotate(180deg)';
            }
        });
    });

    // ===== DESKTOP DROPDOWN: click-outside close =====
    document.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-dropdown.open').forEach(dd => {
            if (!dd.contains(e.target)) dd.classList.remove('open');
        });
    });

    // ===== COUNTER ANIMATION =====
    const animateCounter = (el, target, suffix = '') => {
        const duration = 1800;
        const start = performance.now();
        const isFloat = target % 1 !== 0;
        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = isFloat ? (eased * target).toFixed(1) : Math.floor(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const raw = el.getAttribute('data-count');
                    const suffix = el.getAttribute('data-suffix') || '';
                    if (raw) animateCounter(el, parseFloat(raw), suffix);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
    }

    // RTL toggle is handled by rtl-toggle.js

    // ===== SIMPLE COUNTDOWN (for coming soon pages) =====
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        const countDownDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
        const x = setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `
                <div class="flex gap-4 justify-center text-center">
                    <div class="bg-indigo-50 border border-indigo-100 p-4 rounded-xl w-24"><div class="text-3xl font-bold text-indigo-600">${days}</div><div class="text-sm text-gray-500 font-medium">Days</div></div>
                    <div class="bg-indigo-50 border border-indigo-100 p-4 rounded-xl w-24"><div class="text-3xl font-bold text-indigo-600">${hours}</div><div class="text-sm text-gray-500 font-medium">Hours</div></div>
                    <div class="bg-indigo-50 border border-indigo-100 p-4 rounded-xl w-24"><div class="text-3xl font-bold text-indigo-600">${minutes}</div><div class="text-sm text-gray-500 font-medium">Minutes</div></div>
                    <div class="bg-indigo-50 border border-indigo-100 p-4 rounded-xl w-24"><div class="text-3xl font-bold text-indigo-600">${seconds}</div><div class="text-sm text-gray-500 font-medium">Seconds</div></div>
                </div>`;
            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "<div class='text-2xl font-bold text-indigo-600'>WE HAVE LAUNCHED!</div>";
            }
        }, 1000);
    }
});
