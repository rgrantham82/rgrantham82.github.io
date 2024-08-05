document.addEventListener("alpine:init", () => {
    Alpine.data("projectCard", () => ({
        flipped: false,
        toggle() {
            this.flipped = !this.flipped;
        }
    }));
});

document.addEventListener("DOMContentLoaded", () => {
    initializeIntersectionObserver();
    initializeSmoothScrolling();
    initializeScrollToTopButton();
});

/**
 * Initialize Intersection Observer for scroll animations
 */
const initializeIntersectionObserver = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
};

/**
 * Handle intersection events
 */
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
};

/**
 * Initialize smooth scrolling for anchor links
 */
const initializeSmoothScrolling = () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('a[href^="#"]')) {
            event.preventDefault();
            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        }
    });
};

/**
 * Smooth scroll to the target element
 */
const smoothScrollTo = (targetElement) => {
    targetElement.scrollIntoView({
        behavior: "smooth"
    });

    // Fallback for browsers that do not support smooth scrolling
    if (!CSS.supports('scroll-behavior', 'smooth')) {
        window.scroll({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
};

/**
 * Initialize the scroll-to-top button functionality
 */
const initializeScrollToTopButton = () => {
    const scrollToTopButton = createScrollToTopButton();

    window.addEventListener("scroll", () => toggleScrollToTopButtonVisibility(scrollToTopButton));
    scrollToTopButton.addEventListener("click", scrollToTop);
};

/**
 * Create and append the scroll-to-top button
 */
const createScrollToTopButton = () => {
    const button = document.createElement("button");
    button.classList.add("scroll-to-top");
    button.innerHTML = "↑";
    button.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(button);
    return button;
};

/**
 * Toggle the visibility of the scroll-to-top button
 */
const toggleScrollToTopButtonVisibility = (button) => {
    if (window.pageYOffset > 300) {
        button.classList.add("visible");
    } else {
        button.classList.remove("visible");
    }
};

/**
 * Scroll to the top of the page
 */
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Fallback for browsers that do not support smooth scrolling
    if (!CSS.supports('scroll-behavior', 'smooth')) {
        window.scroll(0, 0);
    }
};
