// scripts.js

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lightbox for Gallery Images
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

// Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.createElement('span');
  const footer = document.querySelector('footer');
  if (footer) {
    yearSpan.textContent = new Date().getFullYear();
    footer.appendChild(yearSpan);
  }
});

