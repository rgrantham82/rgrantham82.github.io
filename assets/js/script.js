// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for scrolling animations
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Apply observer to elements with 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
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

    // Toggle navbar on mobile devices
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active');
    });

    // Flip project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Accordion functionality
    document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});