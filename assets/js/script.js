document.addEventListener("DOMContentLoaded", () => {
    initializeSmoothScrolling();
    initializeIntersectionObserver();
    initializeScrollToTopButton();
    initializeLazyLoading();
    initializeDarkModeToggle();
    initializeLoadingSpinner();
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
    const elements = document.querySelectorAll(".fade-in-up, .scale-up");

    elements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Handle intersection events for animations
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

/**
 * Initialize lazy loading for images
 */
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll("img.lazy");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
}

/**
 * Initialize dark mode toggle with system preference support
 */
function initializeDarkModeToggle() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Apply saved theme or system preference
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme === "dark" ? "dark-theme" : "light-theme");
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-theme");
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", () => {
        let theme;
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
            theme = document.body.classList.contains("light-theme") ? "light" : "dark";
        } else {
            document.body.classList.toggle("dark-theme");
            theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        }
        localStorage.setItem("theme", theme);
    });
}

/**
 * Initialize loading spinner with timeout for slower connections
 */
function initializeLoadingSpinner() {
    document.body.classList.add('loading');
    window.addEventListener("load", () => {
        document.body.classList.remove('loading');
    });

    // Fallback timeout to remove spinner after a set time
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 5000);
}
