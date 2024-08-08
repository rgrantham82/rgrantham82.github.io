document.addEventListener("DOMContentLoaded", () => {
    initializeSmoothScrolling();
    initializeIntersectionObserver();
    initializeScrollToTopButton();
});

document.addEventListener("alpine:init", () => {
    Alpine.data("projectCard", () => ({
        flipped: false,
        toggle() {
            this.flipped = !this.flipped;
        }
    }));
});

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    document.body.addEventListener("click", event => {
        if (event.target.matches('a[href^="#"]')) {
            event.preventDefault();
            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
}

/**
 * Initialize Intersection Observer for scroll animations
 */
function initializeIntersectionObserver() {
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(element => observer.observe(element));
}

/**
 * Handle intersection events
 */
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}

/**
 * Initialize the scroll-to-top button functionality
 */
function initializeScrollToTopButton() {
    const scrollToTopButton = createScrollToTopButton();

    window.addEventListener("scroll", () => toggleScrollToTopButtonVisibility(scrollToTopButton));
    scrollToTopButton.addEventListener("click", scrollToTop);
}

/**
 * Create and append the scroll-to-top button
 */
function createScrollToTopButton() {
    const button = document.createElement("button");
    button.classList.add("scroll-to-top");
    button.innerHTML = "↑";
    button.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(button);
    return button;
}

/**
 * Toggle the visibility of the scroll-to-top button
 */
function toggleScrollToTopButtonVisibility(button) {
    if (window.pageYOffset > 300) {
        button.classList.add("visible");
    } else {
        button.classList.remove("visible");
    }
}

/**
 * Scroll to the top of the page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Fallback for browsers that do not support smooth scrolling
    if (!CSS.supports("scroll-behavior", "smooth")) {
        window.scroll(0, 0);
    }
}
