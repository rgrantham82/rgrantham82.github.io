document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active');
    });

    // Fade-in animations on scroll
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();

    // Accordions
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            const panel = accordion.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project card flip
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Adding fade-in and fade-out effects for specific elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    const fadeOutElements = document.querySelectorAll('.fade-out');

    const handleFadeInOut = () => {
        fadeInElements.forEach(el => {
            if (elementInView(el)) {
                el.classList.add('is-visible');
            } else {
                el.classList.remove('is-visible');
            }
        });

        fadeOutElements.forEach(el => {
            if (elementInView(el)) {
                el.classList.remove('is-visible');
            } else {
                el.classList.add('is-visible');
            }
        });
    };

    window.addEventListener('scroll', handleFadeInOut);
    handleFadeInOut();
});