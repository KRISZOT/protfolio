const translations = {
  pl: {
    projects: "Moje projekty",
    navProjects: "Projekty",
    navContact: "Kontakt",
    projectsTitle: "Projekty",
    contactHeading: "Kontakt",
    contactText: "Tu możesz wpisać dane kontaktowe lub formularz."
  },
  en: {
    projects: "My Projects",
    navProjects: "index.html",
    navContact: "Contact",
    projectsTitle: "Projects",
    contactHeading: "Contact",
    contactText: "Here you can enter your contact details or a form."
  }
};

function changeLanguage(lang) {
  localStorage.setItem('language', lang); // Zapisz język w localStorage
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key").replace(/-([a-z])/g, g => g[1].toUpperCase());
    // Sprawdź czy tłumaczenie istnieje, jeśli nie - nie zmieniaj
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Tłumaczenie tytułu strony (title)
  const titleEl = document.querySelector("title[data-key]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-key").replace(/-([a-z])/g, g => g[1].toUpperCase());
    if (translations[lang][key]) {
      titleEl.textContent = translations[lang][key];
    }
  }
}

// Sprawdź localStorage przy załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage) {
    changeLanguage(storedLanguage);
  }
});

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

// Automatyczne nadawanie klasy .panorama dla szerokich obrazków w galerii
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.gallery img').forEach(img => {
    img.onload = function() {
      if (img.naturalWidth / img.naturalHeight > 1.7) { // np. 16:9 lub szersze
        img.classList.add('panorama');
      }
    };
    // Jeśli obrazek już załadowany (cache)
    if (img.complete) {
      if (img.naturalWidth / img.naturalHeight > 1.7) {
        img.classList.add('panorama');
      }
    }
  });
});
