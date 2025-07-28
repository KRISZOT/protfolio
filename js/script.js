const translations = {
  pl: {
    projects: "Moje projekty",
    contactHeading: "Kontakt",
    navProjects: "Projekty",
    navContact: "Kontakt"
  },
  en: {
    projects: "My Projects",
    contactHeading: "Contact",
    navProjects: "Projects",
    navContact: "Contact"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key").replace(/-([a-z])/g, g => g[1].toUpperCase());
    el.textContent = translations[lang][key];
  });
}

document.getElementById("lang-pl").addEventListener("click", () => changeLanguage("pl"));
document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

