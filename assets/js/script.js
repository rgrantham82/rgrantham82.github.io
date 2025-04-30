// assets/js/script.js
// ──────────────────────────────────────────────────────────────────────────────
// Entry point for your site’s interactive behaviors.
// Written as an ES module so you can compose, test, and bundle.
// ──────────────────────────────────────────────────────────────────────────────
'use strict';

/** Configuration constants */
const SCROLL_THRESHOLD = 300;
const HEADER_OFFSET = 70;

/** Utility: Safe querySelector */
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

/** Initialize everything on DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  try {
    initBackToTop();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
  } catch (err) {
    console.error('Error initializing scripts:', err);
  }
});

/** ─────────────────────────────────────────────────────────────────────────────
 * 1. Back-to-Top Button via IntersectionObserver
 * ───────────────────────────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = $('.to-top');
  if (!btn) return;

  // Hide initially
  btn.classList.remove('visible');

  // Create a sentinel element
  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = `${SCROLL_THRESHOLD}px`;
  document.body.prepend(sentinel);

  const io = new IntersectionObserver(
    ([entry]) => {
      btn.classList.toggle('visible', !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: '0px' }
  );

  io.observe(sentinel);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/** ─────────────────────────────────────────────────────────────────────────────
 * 2. Mobile Menu Toggle
 * ───────────────────────────────────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = $('.mobile-toggle');
  const nav    = $('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
  });
}

/** ─────────────────────────────────────────────────────────────────────────────
 * 3. Smooth Scrolling for Anchor Links
 * ───────────────────────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  $$('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });

      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

/** ─────────────────────────────────────────────────────────────────────────────
 * 4. Contact Form Validation (Inline Error Messages)
 * ───────────────────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form = $('.contact-form');
  if (!form) return;

  // Create error container
  const errorList = document.createElement('ul');
  errorList.className = 'form-errors';
  form.prepend(errorList);

  form.addEventListener('submit', e => {
    errorList.innerHTML = '';  // clear previous errors
    let valid = true;

    const fields = [
      { el: $('#name', form),    name: 'Name'    },
      { el: $('#_replyto', form), name: 'Email'   },
      { el: $('#message', form), name: 'Message' }
    ];

    fields.forEach(({ el, name }) => {
      if (!el) return;
      if (!el.value.trim()) {
        valid = false;
        appendError(`${name} is required.`);
      }
      if (name === 'Email' && el.value && !el.validity.valid) {
        valid = false;
        appendError('Please enter a valid email address.');
      }
    });

    if (!valid) {
      e.preventDefault();
      errorList.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function appendError(text) {
    const li = document.createElement('li');
    li.textContent = text;
    errorList.append(li);
  }
}

export {
  initBackToTop,
  initMobileMenu,
  initSmoothScroll,
  initContactForm
};
