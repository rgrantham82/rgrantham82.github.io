/* ==========================================================================  
   Main Script: Interactive Features and Enhancements  
   ========================================================================== */

// ES6 Module Check
(() => {
  "use strict";

  // Initialize Animate on Scroll (AOS)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }

  // GSAP Animations
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", {
      duration: 2,
      y: -100,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(".project-card", {
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
    });

    // Scroll-triggered animations
    document.querySelectorAll(".fade-in-element").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    });
  }

  // Loader Animation
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) loader.style.display = "none";
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

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

  // Real-Time Search Filter
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

  // Lazy Load Images
  const lazyImages = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          lazyImageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => lazyImageObserver.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  }

  // Copy to Clipboard
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

  // Initialize Lightbox for Images
  if (typeof $.fn.magnificPopup !== "undefined") {
    $(".image-popup").magnificPopup({
      type: "image",
      gallery: { enabled: true },
      removalDelay: 300,
      mainClass: "mfp-zoom-in",
    });
  }
})();
