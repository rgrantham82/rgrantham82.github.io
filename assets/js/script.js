// Alpine.js data for project card flip
document.addEventListener("alpine:init", () => {
  Alpine.data("projectCard", () => ({
    flipped: false,
    toggle() {
      this.flipped = !this.flipped;
    }
  }));
});

// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize IntersectionObserver
  initializeIntersectionObserver();
  // Initialize Smooth Scrolling for anchor links
  initializeSmoothScrolling();
  // Initialize Scroll-to-Top button
  initializeScrollToTopButton();
});

function initializeIntersectionObserver() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
  
  elements.forEach(element => observer.observe(element));

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function initializeScrollToTopButton() {
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.classList.add("scroll-to-top");
  scrollToTopButton.innerHTML = "↑";
  document.body.appendChild(scrollToTopButton);

  window.addEventListener("scroll", toggleScrollToTopButtonVisibility);
  scrollToTopButton.addEventListener("click", scrollToTop);

  function toggleScrollToTopButtonVisibility() {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
