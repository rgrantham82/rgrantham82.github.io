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

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
          behavior: 'smooth'
        });
    });
  });

  // Toggle navbar on mobile devices
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('nav ul');
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
  });

  // Flip project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Accordion functionality
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('active');
      let content = accordion.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });

  // Animate on scroll
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