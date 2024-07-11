document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.nav-links');

  navbarToggle.addEventListener('click', function() {
    navLinks.classList.toggle('is-active'); // Toggle visibility of nav links
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

// GitHub toggle buttons
const githubToggles = document.querySelectorAll(".btn-github-toggle");
githubToggles.forEach(toggle => {
  toggle.addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("show");
  });
});

// IntersectionObserver for fade-in animations
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section-transition");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// IntersectionObserver for section visibility
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section-transition");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        entry.target.classList.remove("section-hidden");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("section-hidden");
    observer.observe(section);
  });
});

// Toggle flip effect on project cards
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

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

// Toggle mobile menu
const navbarToggle = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav-links");
navbarToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-active");
});