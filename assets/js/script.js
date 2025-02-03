// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
  initScrollToTopButton();
  initMobileMenuToggle();
  initSmoothScrolling();
  initContactFormValidation();
});

/**
 * Handles the "Back to Top" button functionality.
 * Shows or hides the button based on scroll position.
 */
function initScrollToTopButton() {
  const toTopBtn = document.querySelector('.to-top');
  if (!toTopBtn) return;

  // Hide the button initially
  toTopBtn.style.display = 'none';

  window.addEventListener('scroll', () => {
    // Show the button after scrolling beyond 300px
    if (window.pageYOffset > 300) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  });
}

/**
 * Toggles the mobile navigation menu (hamburger menu),
 * and updates aria-expanded for accessibility.
 */
function initMobileMenuToggle() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!mobileMenuToggle || !navLinks) return;

  mobileMenuToggle.addEventListener('click', () => {
    // Show/hide the .nav-links
    navLinks.classList.toggle('active');

    // Toggle aria-expanded (switches true/false each click)
    const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuToggle.setAttribute('aria-expanded', !expanded);
  });
}

/**
 * Enables smooth scrolling for internal anchor links (href="#someId").
 */
function initSmoothScrolling() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  if (!scrollLinks.length) return;

  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      // Prevent the default jump to top behavior
      e.preventDefault();

      // Get the target element by the link's href
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Adjust offset if your header has a fixed height
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Use a smooth scroll animation
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Validates the contact form, ensuring required fields are not empty.
 * Modify or expand this for your custom validation needs.
 */
function initContactFormValidation() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('_replyto')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    // Basic required field check
    if (name === '' || email === '' || message === '') {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }

    // Additional custom validation can be added here
    // e.g., email format checks, length checks, etc.
  });
}
