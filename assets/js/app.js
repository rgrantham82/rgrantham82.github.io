// Function to handle fade-in animation
function addFadeInAnimation() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('fadeInAnimation');
    });
}

// Function to handle slide-in-from-left animation
function addSlideInAnimation() {
    const slideInElements = document.querySelectorAll('.slide-in-from-left');
    slideInElements.forEach(element => {
        element.classList.add('slideInFromLeft');
    });
}

// Function to handle zoom-in animation
function addZoomInAnimation() {
    const zoomInElements = document.querySelectorAll('.zoom-in');
    zoomInElements.forEach(element => {
        element.classList.add('zoomInAnimation');
    });
}

// Function to handle bounce-in animation
function addBounceInAnimation() {
    const bounceInElements = document.querySelectorAll('.bounce-in');
    bounceInElements.forEach(element => {
        element.classList.add('bounceInAnimation');
    });
}

// Event listeners for animations
document.addEventListener('DOMContentLoaded', () => {
    addFadeInAnimation();
    addSlideInAnimation();
    addZoomInAnimation();
    addBounceInAnimation();
});

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