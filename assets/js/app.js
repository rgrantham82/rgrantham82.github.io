document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  });
  hero.classList.add('is-animated');

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
});