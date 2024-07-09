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

  // Smooth scrolling for internal links (Bootstrap already handles this)

  // Toggle navbar on mobile devices (Bootstrap handles this with data-toggle attributes)

  // Flip project cards (Example of using Alpine.js for dynamic behavior)
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

  // Initialize Alpine.js components (Example: x-data for dynamic elements)
  Alpine.data('projectCard', () => ({
    flipped: false,
    toggle() {
      this.flipped = !this.flipped;
    }
  }));

  // Animate on scroll (Bootstrap's scrollspy can handle this with data-spy attributes)
});