// assets/js/script.js
'use strict';

const HEADER_OFFSET = 70;

// Utility shorthand
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initMobileMenu();
  initSmoothScroll();
  initFormValidation();
});

/** 1. Back-to-Top Button */
function initBackToTop() {
  const btn = $('.to-top');
  if (!btn) return;

  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '300px';
  document.body.prepend(sentinel);

  new IntersectionObserver(([e]) => {
    btn.classList.toggle('visible', !e.isIntersecting);
  }).observe(sentinel);

  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
}

/** 2. Mobile Menu Toggle & Accessibility */
function initMobileMenu() {
  const toggle = $('#mobile-toggle');
  const nav    = $('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
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
      const href = link.getAttribute('href');
      // Ignore if href includes '/' or other page
      if (href.includes('/') && href !== '#') return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    });
  });
}


/** 4. Contact Form Validation **/
function initFormValidation() {
  const form = $('.contact-form');
  if (!form) return;

  const errorList = document.createElement('ul');
  errorList.className = 'form-errors';
  form.prepend(errorList);

  form.addEventListener('submit', (e) => {
    errorList.innerHTML = '';
    let valid = true;

    const fields = [
      { el: form.querySelector('#name'),     label: 'Name'    },
      { el: form.querySelector('#_replyto'), label: 'Email'   },
      { el: form.querySelector('#message'),  label: 'Message' }
    ];

    fields.forEach(({ el, label }) => {
      if (!el) return;
      const val = el.value.trim();
      if (!val) {
        valid = false;
        appendError(`${label} is required.`);
      }
      if (label === 'Email' && val && !el.checkValidity()) {
        valid = false;
        appendError('Please enter a valid email address.');
      }
    });

    if (!valid) {
      e.preventDefault();
      errorList.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function appendError(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    errorList.appendChild(li);
  }
}
