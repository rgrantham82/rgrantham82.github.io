document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const targetElement = document.getElementById(target);
        
        el.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
      });
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Cookie banner handling
document.addEventListener('DOMContentLoaded', function() {
  function acceptCookies() {
    Cookies.set('showCookieBanner', 'false', { expires: 7, path: '/' });
    Cookies.set('cookiesAccepted', 'true', { expires: 7, path: '/' });
    toggleCookieBanner();
  }

  function rejectCookies() {
    Cookies.set('showCookieBanner', 'false', { expires: 7, path: '/' });
    toggleCookieBanner();
  }

  function toggleCookieBanner() {
    var showBanner = Cookies.get('showCookieBanner');
    var banner = document.getElementById('cookieBanner');
    if (showBanner === 'false') {
      banner.style.display = 'none';
    } else {
      banner.style.display = 'block';
    }
  }

  document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
  document.getElementById('rejectCookies').addEventListener('click', rejectCookies);
  toggleCookieBanner();
});

// Navbar burger toggle
document.addEventListener('DOMContentLoaded', function() {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
});