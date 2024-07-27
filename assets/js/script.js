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
  document.body.addEventListener('click', event => {
    if (event.target.matches('a[href^="#"]')) {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Fallback for browsers that do not support smooth scrolling
        if (!CSS.supports('scroll-behavior', 'smooth')) {
          window.scroll({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      }
    }
  });
}

function initializeScrollToTopButton() {
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.classList.add("scroll-to-top");
  scrollToTopButton.innerHTML = "↑";
  scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
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
    // Fallback for browsers that do not support smooth scrolling
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      window.scroll(0, 0);
    }
  }
}
