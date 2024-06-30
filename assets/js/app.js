document.addEventListener('alpine:init', () => {
    // Cookie banner functionality
    Alpine.data('cookieBanner', () => ({
        showBanner: Cookies.get('showCookieBanner') !== 'false',

        acceptCookies() {
            Cookies.set('showCookieBanner', 'false', {
                expires: 7,
                path: '/'
            });
            Cookies.set('cookiesAccepted', 'true', {
                expires: 7,
                path: '/'
            });
            this.showBanner = false;
        },

        rejectCookies() {
            Cookies.set('showCookieBanner', 'false', {
                expires: 7,
                path: '/'
            });
            this.showBanner = false;
        }
    }));

    // Navigation menu functionality
    Alpine.data('navMenu', () => ({
        openNav: false,

        toggleNav() {
            this.openNav = !this.openNav;
        }
    }));
});

document.addEventListener('DOMContentLoaded', () => {
    // Navbar burger toggle
    const navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const targetElement = document.getElementById(target);

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
        if (!showBanner) {
            cookieBanner.style.display = 'none';
        } else {
            cookieBanner.style.display = 'block';
        }
    }

    function acceptCookies() {
        Cookies.set('showCookieBanner', 'false', {
            expires: 7,
            path: '/'
        });
        Cookies.set('cookiesAccepted', 'true', {
            expires: 7,
            path: '/'
        });
        toggleCookieBanner();
    }

    function rejectCookies() {
        Cookies.set('showCookieBanner', 'false', {
            expires: 7,
            path: '/'
        });
        toggleCookieBanner();
    }

    if (cookieBanner) {
        document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
        document.getElementById('rejectCookies').addEventListener('click', rejectCookies);
        toggleCookieBanner();
    }
});