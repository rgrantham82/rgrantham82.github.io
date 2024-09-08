// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar toggle on mobile (for Bootstrap-like navigation)
document.querySelector('.navbar-toggler').addEventListener('click', function () {
  document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.navbar-collapse a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

// Add animations when elements are scrolled into view
const animatedElements = document.querySelectorAll('.animate__animated');

function animateOnScroll() {
  const viewHeight = window.innerHeight - 100; // Adjust as needed for when animation should trigger

  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < viewHeight) {
      element.classList.add('animate__fadeInUp');
    }
  });
}

// Run the animation check when scrolling
window.addEventListener('scroll', animateOnScroll);

// Initialize animations for elements already in view (on page load)
window.addEventListener('load', animateOnScroll);

// Scroll-to-top button (optional if your site has a back-to-top button)
const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Form validation (if you have any forms)
const forms = document.querySelectorAll('.needs-validation');

forms.forEach(form => {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
});
