document.addEventListener('alpine:init', () => {
    // Cookie banner functionality
    Alpine.data('cookieBanner', () => ({
        showBanner: Cookies.get('showCookieBanner') !== 'false',

        acceptCookies() {
            Cookies.set('showCookieBanner', 'false', { expires: 7, path: '/' });
            Cookies.set('cookiesAccepted', 'true', { expires: 7, path: '/' });
            this.showBanner = false;
        },

        rejectCookies() {
            Cookies.set('showCookieBanner', 'false', { expires: 7, path: '/' });
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