// assets/js/script.js
'use strict';

const HEADER_OFFSET = 70;

// Utility shorthand
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/**
 * Simple debounce: delay fn until after wait ms have elapsed since last call.
 */
function debounce(fn, wait = 100) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initMobileMenu();
  initSmoothScroll();
  initFormValidation();
});

/** 1. Back-to-Top Button via IntersectionObserver */
function initBackToTop() {
  const btn = $('.to-top');
  if (!btn) return;

  // Only show after scrolling down 300px
  const observer = new IntersectionObserver(([e]) => {
    btn.classList.toggle('visible', !e.isIntersecting);
  });
  // sentinel at 300px
  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '300px';
  document.body.prepend(sentinel);
  observer.observe(sentinel);

  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
}

/** 2. Mobile Menu Toggle & Accessibility */
function initMobileMenu() {
  const toggle = $('#mobile-toggle');
  const nav    = $('.nav-links');
  if (!toggle || !nav) return;

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Toggle on click
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
  });

  // Close on Escape key
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

/** 3. Smooth In-page Scrolling **/
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      }
    });
  });
}

/** 4. Contact Form Validation **/
function initFormValidation() {
  const form = $('.contact-form');
  if (!form) return;

  // Error list container
  const errorList = document.createElement('ul');
  errorList.className = 'form-errors';
  form.prepend(errorList);

  form.addEventListener('submit', (e) => {
    errorList.innerHTML = '';
    let valid = true;

    // Define fields to check
    const fields = [
      { el: form.querySelector('#name'),    name: 'Name'    },
      { el: form.querySelector('#_replyto'), name: 'Email'   },
      { el: form.querySelector('#message'), name: 'Message' }
    ];

    fields.forEach(({ el, name }) => {
      if (!el) return;
      const val = el.value.trim();
      if (!val) {
        valid = false;
        addError(`${name} is required.`);
      }
      if (name === 'Email' && val && !el.checkValidity()) {
        valid = false;
        addError('Please enter a valid email address.');
      }
    });

    if (!valid) {
      e.preventDefault();
      errorList.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function addError(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    errorList.appendChild(li);
  }
}
