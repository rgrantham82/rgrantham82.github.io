// This script can be used for any interactive functionality on the page.
document.addEventListener("DOMContentLoaded", () => {
    // Example: Smooth scrolling for navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust to prevent overlap with navbar
                behavior: 'smooth'
            });
        });
    });
});
