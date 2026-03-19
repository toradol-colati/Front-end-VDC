document.addEventListener('DOMContentLoaded', () => {
  const villaImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607688960-e095ff83135b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const conteImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  function initializeCarousel(galleryId, images) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;
    const imageElement = gallery.querySelector('.property-image');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');
    let currentIndex = 0;
    function updateImage() { imageElement.src = images[currentIndex]; }
    nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % images.length; updateImage(); });
    prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + images.length) % images.length; updateImage(); });
    updateImage();
  }
  initializeCarousel('gallery-villa', villaImages);
  initializeCarousel('gallery-conte', conteImages);

  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');

  navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          navBtns.forEach(b => {
              b.classList.remove('active');
              b.setAttribute('aria-selected', 'false');
          });
          sections.forEach(s => {
              s.classList.remove('active');
          });

          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          document.getElementById(btn.getAttribute('data-target')).classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.classList.add('loading');

  window.addEventListener('load', () => {
      const loader = document.getElementById('loader-wrapper');
      setTimeout(() => {
          loader.classList.add('loader-hidden');
          body.classList.remove('loading');
      }, 3000); 
  });
});
