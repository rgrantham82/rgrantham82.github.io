// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smoothly scroll to the target section
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Offset for fixed navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Navbar Toggle
    const navbar = document.querySelector(".navbar");
    const navLinksContainer = document.querySelector(".nav-links");
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("menu-toggle");
    toggleButton.innerHTML = "☰"; // Hamburger menu icon

    navbar.insertBefore(toggleButton, navLinksContainer);

    toggleButton.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinksContainer.classList.contains("active")) {
                navLinksContainer.classList.remove("active");
            }
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll("img[loading='lazy']");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src; // Use data-src if available
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Highlight active section in the navbar
    const sections = document.querySelectorAll("section");
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                navLinks.forEach(link => link.classList.remove("active"));
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => {
        navObserver.observe(section);
    });
});

/* ==========================================================================  
   Main Script: Interactive Features and Enhancements  
   ========================================================================== */

// ES6 Module Check
(() => {
    "use strict";

    // Theme Toggle (Dark/Light Mode)
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem(
                "theme",
                document.body.classList.contains("dark-mode") ? "dark" : "light"
            );
        });

        // Initialize Theme on Load
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }
    }

    // Real-Time Search Filter for Blog or Gallery (If applicable)
    const searchInput = document.querySelector(".search-input");
    const searchItems = document.querySelectorAll(".search-item");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            searchItems.forEach((item) => {
                item.style.display = item.textContent.toLowerCase().includes(query)
                    ? "block"
                    : "none";
            });
        });
    }

    // Copy to Clipboard (for contact info or similar)
    const copyButtons = document.querySelectorAll(".clipboard-copy-button");
    if (copyButtons.length) {
        copyButtons.forEach((button) =>
            button.addEventListener("click", () => {
                const codeBlock = button.nextElementSibling?.querySelector("code");
                if (codeBlock) {
                    navigator.clipboard.writeText(codeBlock.textContent).then(
                        () => {
                            button.classList.add("copied");
                            setTimeout(() => button.classList.remove("copied"), 1500);
                        },
                        (err) => console.error("Failed to copy text:", err)
                    );
                }
            })
        );
    }

    // Initialize Lightbox for Images (Optional)
    if (typeof $.fn.magnificPopup !== "undefined") {
        $(".image-popup").magnificPopup({
            type: "image",
            gallery: { enabled: true },
            removalDelay: 300,
            mainClass: "mfp-zoom-in",
        });
    }
})();
