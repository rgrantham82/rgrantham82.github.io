document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.fadeInUp, .slideInFromLeft, .zoomIn').forEach((el) => {
    observer.observe(el);
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  });

  // Hero section animation on page load
  hero.classList.add('is-animated');
});