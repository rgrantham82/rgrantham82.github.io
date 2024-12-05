// scripts.js

// Smooth Scrolling for Anchor Links (All Pages)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Dynamic Footer Year Update (All Pages)
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Cardboard Calligraphy by Robert. All Rights Reserved.`;
  }
});

// Lightbox for Gallery Images (Gallery Page)
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  galleryItems.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.classList.add('active');
      const img = document.createElement('img');
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
});

// Hover Effects for Service Items (Services Page)
document.addEventListener('DOMContentLoaded', () => {
  const serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
});

// Toggle Mobile Navigation Menu (All Pages)
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
