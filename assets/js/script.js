// assets/js/script.js
'use strict';

const HEADER_OFFSET = 70;

/** shorthand $$ */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initMobileMenu();
  initSmoothScroll();
  initFormValidation();
});

/** 1. Back-to-Top using IntersectionObserver */
function initBackToTop() {
  const btn = $('.to-top');
  if (!btn) return;
  btn.classList.remove('visible');
  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '300px';
  document.body.prepend(sentinel);
  new IntersectionObserver(
    ([entry]) => btn.classList.toggle('visible', !entry.isIntersecting),
    { root: null, threshold: 0 }
  ).observe(sentinel);
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/** 2. Mobile Menu */
function initMobileMenu() {
  const toggle = $('#mobile-toggle');
  const nav    = $('.nav-links');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const exp = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!exp));
    nav.classList.toggle('active');
  });
}

/** 3. Smooth Scrolling */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    });
  });
}

/** 4. Contact Form Validation */
function initFormValidation() {
  const form = $('.contact-form');
  if (!form) return;
  const errors = document.createElement('ul');
  errors.className = 'form-errors';
  form.prepend(errors);

  form.addEventListener('submit', e => {
    errors.innerHTML = '';
    let valid = true;

    const fields = [
      { el: $('#name', form),    label: 'Name'    },
      { el: $('#_replyto', form), label: 'Email'   },
      { el: $('#message', form), label: 'Message' }
    ];

    fields.forEach(({el,label}) => {
      if (!el) return;
      if (!el.value.trim()) {
        valid = false;
        addError(`${label} is required.`);
      }
      if (label==='Email' && el.value && !el.checkValidity()) {
        valid = false;
        addError('Please enter a valid email address.');
      }
    });

    if (!valid) {
      e.preventDefault();
      errors.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function addError(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    errors.append(li);
  }
}
