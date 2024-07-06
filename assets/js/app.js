// Function to show/hide the cookie banner
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.classList.add('fade-in');
    cookieBanner.style.display = 'block';
}

function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.classList.remove('fade-in');
    cookieBanner.classList.add('fade-out');
    setTimeout(() => {
        cookieBanner.style.display = 'none';
    }, 500); // Match the duration of the fade-out animation
}

// Event listener for the cookie banner
document.getElementById('acceptCookies').addEventListener('click', hideCookieBanner);

// Function to handle navigation menu
function toggleNavMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('slide-in');
    navMenu.classList.toggle('slide-out');
}

// Event listener for the navigation menu button
document.getElementById('navToggle').addEventListener('click', toggleNavMenu);

// Intersection Observer for lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('.lazy');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });
}

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
    img.classList.add('fade-in');
}

// Event listener for lazy loading images
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Function to handle intersection observer for elements with animation
function handleIntersectionAnimations() {
    const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-from-left, .zoom-in, .bounce-in');
    const config = {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                self.unobserve(entry.target);
            }
        });
    }, config);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Event listener for intersection animations
document.addEventListener('DOMContentLoaded', handleIntersectionAnimations);