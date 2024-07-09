document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for scrolling animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        entry.target.classList.remove('section-hidden');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Apply observer to elements with 'section-transition' class
  document.querySelectorAll('.section-transition').forEach(element => {
    element.classList.add('section-hidden'); // Hide initially
    observer.observe(element);
  });

  // Smooth scrolling for internal links (Bootstrap handles this)
  // Toggle navbar on mobile devices (Bootstrap handles this with data-toggle attributes)

  // Flip project cards (Using Alpine.js for dynamic behavior)
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Accordion functionality (Using Alpine.js for simplicity)
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('active');
    });
  });

  // Initialize Alpine.js components
  Alpine.data('projectCard', () => ({
    flipped: false,
    toggle() {
      this.flipped = !this.flipped;
    }
  }));

  // Animate elements on scroll (Bootstrap's scrollspy can handle this with data-spy attributes)
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  const animateObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animateObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elementsToAnimate.forEach(element => {
    animateObserver.observe(element);
  });
});

// Function to smooth scroll to anchor links
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

// Smooth scroll to anchor links on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    const duration = 1000; // Adjust scrolling speed if needed
    smoothScroll(target, duration);
  });
});

const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-active');
});