"use strict";

// Constants for configurable values
const SCROLL_OFFSET_THRESHOLD = 300;
const HEADER_OFFSET = 70;

document.addEventListener('DOMContentLoaded', () => {
  initScrollToTopButton();
  initMobileMenuToggle();
  initSmoothScrolling();
  initContactFormValidation();
});

/**
 * Debounce function to limit how often a function is executed.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The wait time in milliseconds.
 * @returns {Function}
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Handles the "Back to Top" button functionality.
 * Shows or hides the button based on scroll position.
 */
function initScrollToTopButton() {
  const toTopBtn = document.querySelector('.to-top');
  if (!toTopBtn) return;

  // Ensure the button is hidden initially by removing the 'visible' class.
  toTopBtn.classList.remove('visible');

  const handleScroll = debounce(() => {
    if (window.pageYOffset > SCROLL_OFFSET_THRESHOLD) {
      toTopBtn.classList.add('visible');
    } else {
      toTopBtn.classList.remove('visible');
    }
  }, 50); // Adjust delay as needed

  window.addEventListener('scroll', handleScroll);
}

/**
 * Toggles the mobile navigation menu (hamburger menu)
 * and updates aria-expanded for accessibility.
 */
function initMobileMenuToggle() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuToggle || !navLinks) return;

  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle aria-expanded attribute for accessibility.
    const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
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
      // Prevent the default jump-to behavior
      e.preventDefault();

      // Get the target element by the link's href attribute.
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Manage focus for accessibility: set focus on the target element after scrolling.
        setTimeout(() => {
          targetElement.setAttribute('tabindex', '-1'); // Make focusable if not already
          targetElement.focus();
        }, 500); // Delay should roughly match the scroll duration
      }
    });
  });
}

/**
 * Validates email format using a simple regular expression.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid.
 */
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Validates the contact form to ensure required fields are not empty,
 * and that the email address is in a proper format.
 */
function initContactFormValidation() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('_replyto')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    // Check for empty fields.
    if (name === '' || email === '' || message === '') {
      e.preventDefault();
      alert('Please fill in all required fields.');
      return;
    }

    // Validate email format.
    if (!isValidEmail(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      return;
    }
  });
}