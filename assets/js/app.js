document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle for Bulma navbar
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const targetElement = document.getElementById(target);

                el.classList.toggle('is-active');
                targetElement.classList.toggle('is-active');
            });
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.navbar-item').forEach(el => {
        el.addEventListener('click', () => {
            if (document.querySelector('.navbar-burger.is-active')) {
                document.querySelector('.navbar-burger').classList.remove('is-active');
                document.querySelector('.navbar-menu').classList.remove('is-active');
            }
        });
    });
});