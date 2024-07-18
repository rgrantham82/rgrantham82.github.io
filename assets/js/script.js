// Alpine.js data for project card flip
Alpine.data("projectCard", () => ({
  flipped: false,
  toggle() {
    this.flipped = !this.flipped;
  }
}));

// IntersectionObserver for elements with animate-on-scroll class
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const target = this.getAttribute("href");
    smoothScroll(target, 1000);
  });
});

// Smooth scrolling function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const ease = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, ease);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Scroll-to-top button functionality
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.classList.add("scroll-to-top");
  scrollToTopButton.innerHTML = "↑";
  document.body.appendChild(scrollToTopButton);

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });

  scrollToTopButton.addEventListener("click", function() {
    smoothScroll("#top", 1000);
  });
});