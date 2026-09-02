import './style.css';
import { initMoltenMetal } from './moltenMetal';

// Fondo animado de toda la página (shader MoltenMetal, reacciona al mouse).
// Fijo detrás de todo el contenido entre el header y el footer (ambos opacos
// para taparlo ahí).
const siteBg = document.getElementById('siteBg');
if (siteBg) {
  initMoltenMetal(siteBg);
}

// Efecto typewriter en el nombre del hero: tipea letra por letra y deja un
// cursor "_" titilando al final. El aria-label conserva el nombre completo
// para lectores de pantalla; el texto tipeado y el cursor van aria-hidden
// porque son puramente visuales.
const heroTitle = document.querySelector<HTMLElement>('.hero__title');
if (heroTitle) {
  const text = heroTitle.textContent?.trim() ?? '';
  heroTitle.textContent = '';
  heroTitle.setAttribute('aria-label', text);

  const typed = document.createElement('span');
  typed.setAttribute('aria-hidden', 'true');
  const cursor = document.createElement('span');
  cursor.className = 'hero__title-cursor';
  cursor.textContent = '_';
  cursor.setAttribute('aria-hidden', 'true');
  heroTitle.append(typed, cursor);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    typed.textContent = text;
    cursor.classList.add('hero__title-cursor--blink');
  } else {
    let i = 0;
    const typeStep = () => {
      i++;
      typed.textContent = text.slice(0, i);
      if (i < text.length) {
        setTimeout(typeStep, 55);
      } else {
        cursor.classList.add('hero__title-cursor--blink');
      }
    };
    setTimeout(typeStep, 300);
  }
}

// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Menú mobile
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Revelado suave de contenido al hacer scroll
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
