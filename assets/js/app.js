document.addEventListener('alpine:init', () => {
    // Cookie banner functionality
    Alpine.data('cookieBanner', () => ({
        showBanner: Cookies.get('showCookieBanner') !== 'false',

        acceptCookies() {
            this.setCookies('true');
            this.animateBannerOut();
        },

        rejectCookies() {
            this.setCookies('false');
            this.animateBannerOut();
        },

        setCookies(value) {
            Cookies.set('showCookieBanner', 'false', { expires: 7, path: '/' });
            Cookies.set('cookiesAccepted', value, { expires: 7, path: '/' });
        },

        animateBannerOut() {
            const banner = document.getElementById('cookieBanner');
            banner.classList.add('fade-out');
            setTimeout(() => {
                this.showBanner = false;
            }, 500); // Match the animation duration
        }
    }));

    // Navigation menu functionality
    Alpine.data('navMenu', () => ({
        openNav: false,

        toggleNav() {
            this.openNav = !this.openNav;
            const navMenu = document.getElementById('navMenu');
            if (this.openNav) {
                navMenu.classList.add('slide-in');
                navMenu.classList.remove('slide-out');
            } else {
                navMenu.classList.add('slide-out');
                navMenu.classList.remove('slide-in');
            }
        }
    }));
});

document.addEventListener('DOMContentLoaded', () => {
    // Navbar burger toggle
    const navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const targetElement = document.getElementById(el.dataset.target);
            el.classList.toggle('is-active');
            targetElement.classList.toggle('is-active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cookie banner handling
    const cookieBanner = document.getElementById('cookieBanner');
    const showBanner = Cookies.get('showCookieBanner') !== 'false';

    function toggleCookieBanner() {
        cookieBanner.style.display = showBanner ? 'block' : 'none';
        if (showBanner) {
            cookieBanner.classList.add('fade-in');
        }
    }

    function acceptCookies() {
        Cookies.set('showCookieBanner', 'false', { expires: 7, path: '/' });
        Cookies.set('cookiesAccepted', 'true', { expires: 7, path: '/' });
        animateBannerOut();
    }

    function rejectCookies() {
        Cookies.set('showCookieBanner', 'false', { expires: 7, path: '/' });
        animateBannerOut();
    }

    function animateBannerOut() {
        cookieBanner.classList.add('fade-out');
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 500); // Match the animation duration
    }

    if (cookieBanner) {
        document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
        document.getElementById('rejectCookies').addEventListener('click', rejectCookies);
        toggleCookieBanner();
    }
});