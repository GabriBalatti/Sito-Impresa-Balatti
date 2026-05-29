/* =========================================
   IMPRESA BALATTI — script.js
   ========================================= */

// ---- Navbar scroll state ----
const navbar = document.getElementById('navbar');
function updateNavbar() {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Animate the hamburger icon
  navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ---- Reveal on scroll (IntersectionObserver) ----
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '-40px 0px' });

reveals.forEach(el => observer.observe(el));

// ---- Contact form ----
const contactForm = document.getElementById('contact-form');
const formToast   = document.getElementById('form-toast');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }
  // Simulate send
  const btn = contactForm.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'Invio in corso...';

  setTimeout(() => {
    contactForm.reset();
    btn.disabled = false;
    btn.innerHTML = `Invia Richiesta <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
    formToast.textContent = '✓ Messaggio inviato! Ti risponderemo al più presto.';
    formToast.className = 'form-toast success';
    setTimeout(() => {
      formToast.className = 'form-toast';
      formToast.textContent = '';
    }, 5000);
  }, 900);
});

// ---- Project Modal ----
const projectsData = [
  {
    id: 0,
    title: 'Villa Moderna',
    category: 'Costruzione Civile',
    images: ['images/cort-di-asen.jpg', 'images/portfolio-2.jpg', 'images/hero-bg.jpg'],
    description: 'Una villa moderna caratterizzata da linee minimali e spazi aperti. Il progetto ha integrato le più moderne tecnologie costruttive garantendo massima efficienza energetica e comfort abitativo.'
  },
  {
    id: 1,
    title: 'Complesso Residenziale',
    category: 'Costruzione Civile',
    images: ['images/portfolio-1.jpg', 'images/portfolio-2.jpg'],
    description: 'Un complesso residenziale multi-familiare di 50 unità, realizzato con particolare attenzione alla sostenibilità ambientale. Include spazi comuni, parcheggi e aree verdi.'
  },
  {
    id: 2,
    title: 'Polo Logistico',
    category: 'Edilizia Industriale',
    images: ['images/portfolio-3.jpg', 'images/hero-bg.jpg'],
    description: 'Un moderno polo logistico di 15.000 mq con celle di stoccaggio climatizzate, uffici amministrativi e area ricevimento merci. Struttura realizzata con tecniche costruttive avanzate.'
  },
  {
    id: 3,
    title: 'Ristrutturazione Casale',
    category: 'Recupero Edilizio',
    images: ['images/hero-bg.jpg', 'images/portfolio-1.jpg'],
    description: 'Recupero completo di un casale storico nel rispetto dei caratteri architettonici originali. Interventi di consolidamento strutturale, isolamento termico e impianti moderni.'
  }
];

const projectModal = document.getElementById('project-modal');
const projectModalBackdrop = document.querySelector('.project-modal-backdrop');
const projectModalClose = document.querySelector('.project-modal-close');
const carouselTrack = document.getElementById('carousel-track');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselIndicators = document.getElementById('carousel-indicators');

let currentProjectIndex = 0;
let currentImageIndex = 0;

function openProjectModal(projectIndex) {
  currentProjectIndex = projectIndex;
  currentImageIndex = 0;
  const project = projectsData[projectIndex];

  // Update modal content
  document.getElementById('modal-project-title').textContent = project.title;
  document.getElementById('modal-project-cat').textContent = project.category;
  document.getElementById('modal-project-desc').textContent = project.description;

  // Clear and create carousel
  carouselTrack.innerHTML = '';
  carouselIndicators.innerHTML = '';

  project.images.forEach((image, index) => {
    const div = document.createElement('div');
    div.className = 'carousel-image';
    div.innerHTML = `<img src="${image}" alt="${project.title} - Immagine ${index + 1}" />`;
    carouselTrack.appendChild(div);

    const indicator = document.createElement('button');
    indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
    indicator.setAttribute('aria-label', `Immagine ${index + 1}`);
    indicator.addEventListener('click', () => goToImage(index));
    carouselIndicators.appendChild(indicator);
  });

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.add('closing');
  
  setTimeout(() => {
    projectModal.classList.remove('active');
    projectModal.classList.remove('closing');
    document.body.style.overflow = '';
  }, 350);
}

function updateCarousel() {
  const offset = -currentImageIndex * 100;
  carouselTrack.style.transform = `translateX(${offset}%)`;

  // Update indicators
  document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentImageIndex);
  });
}

function goToImage(index) {
  const project = projectsData[currentProjectIndex];
  currentImageIndex = (index + project.images.length) % project.images.length;
  updateCarousel();
}

function nextImage() {
  const project = projectsData[currentProjectIndex];
  currentImageIndex = (currentImageIndex + 1) % project.images.length;
  updateCarousel();
}

function prevImage() {
  const project = projectsData[currentProjectIndex];
  currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
  updateCarousel();
}

// Event listeners for project cards
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => {
    const projectIndex = parseInt(card.getAttribute('data-project'));
    openProjectModal(projectIndex);
  });
});

// Modal controls
projectModalClose.addEventListener('click', closeProjectModal);
projectModalBackdrop.addEventListener('click', closeProjectModal);
carouselNext.addEventListener('click', nextImage);
carouselPrev.addEventListener('click', prevImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!projectModal.classList.contains('active')) return;
  if (e.key === 'Escape') closeProjectModal();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();
