// Alpine.js data for project card flip
Alpine.data("projectCard", () => ({
  flipped: false,
  toggle() {
    this.flipped = !this.flipped;
  }
}));

// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {

  // IntersectionObserver for elements with animate-on-scroll class
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault(); // Prevent default anchor behavior
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll-to-top button functionality
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.classList.add("scroll-to-top");
  scrollToTopButton.innerHTML = "↑";
  document.body.appendChild(scrollToTopButton);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
