// Selector de idioma ES/EN, vanilla, sin librería de i18n.
//
// Cómo funciona: cualquier elemento con `data-i18n="clave"` recibe
// `translations[lang][clave]` como innerHTML (innerHTML y no textContent
// porque algunas claves incluyen un <code> inline, ej. las decisiones
// técnicas de AutoBids/AI Solutions). Un elemento con `data-i18n-attr="attr:clave"`
// recibe ese valor en el atributo indicado en vez de en el contenido (se usa
// para alt de imágenes y aria-label). El idioma elegido se guarda en
// localStorage y se vuelve a aplicar en cada carga.
//
// Las meta tags (title, description, Open Graph) se dejan fijas en español a
// propósito: son lo que ve un crawler/al compartir el link, no corren JS, así
// que cambiarlas con el toggle no tendría efecto ahí — sólo se actualiza
// `document.title` en vivo, como detalle para quien deja la pestaña abierta.

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'lang';

const translations: Record<Lang, Record<string, string>> = {
  es: {
    skip: 'Saltar al contenido',
    'logo.aria': 'José Ivorra Adamowicz — inicio',
    'nav.aria': 'Principal',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.langLabel': 'Cambiar idioma',
    'nav.openMenu': 'Abrir menú',

    'hero.eyebrow': 'Desarrollador Frontend',
    'hero.lead':
      'Construyo interfaces prolijas con React, Vue, Next.js, React Native y TypeScript, adaptándome al stack que pida cada proyecto. Me apasiona cuidar el detalle hasta que la interfaz funciona bien de verdad, no solo se ve bien en una captura.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaContact': 'Hablemos de tu proyecto',

    'clients.label': 'Empresas con las que trabajé',
    'clients.piaSub': 'Programación con Inteligencia Artificial',

    'proyectos.title': 'Proyectos destacados',
    'proyectos.lead': 'Proyectos reales, con el problema que resuelven y las decisiones técnicas detrás de cada uno.',

    'case.la-cripta.alt': 'Captura de pantalla de La Cripta',
    'case.la-cripta.tag': 'Sitio web · Three.js / GLSL',
    'case.la-cripta.desc':
      'Prototipo de sitio para una coctelería con temática gótica: menú de cócteles, buscador A–Z, pantallas de estado y una página de detalle por cóctel.',
    'case.la-cripta.d1':
      'Fondo animado hecho a mano con Three.js + GLSL: un flow-field donde líneas finas grises y blancas se agrupan y se separan sobre el fondo oscuro, en vez de resolverlo con una librería como Vanta.js.',
    'case.la-cripta.d2': 'Buscador A–Z pensado para un menú largo, sin depender de scroll infinito.',
    'case.la-cripta.d3': 'Estados de carga y de vacío tratados como pantallas propias, no como un spinner genérico.',

    'case.lavado-de-manos.alt': 'Captura de pantalla de Lavado de manos con IA',
    'case.lavado-de-manos.tag': 'Demo · IA / Visión artificial',
    'case.lavado-de-manos.title': 'Lavado de manos con IA',
    'case.lavado-de-manos.desc':
      'Demo que reconoce y supervisa cada paso del lavado de manos en tiempo real mediante un modelo de inteligencia artificial.',
    'case.lavado-de-manos.d1': 'Detección de cada paso del lavado con un modelo YOLO.',
    'case.lavado-de-manos.d2':
      'Frontend en Next.js sirviendo de capa de presentación sobre el modelo entrenado en TensorFlow.',

    'case.pasteleria.alt': 'Captura de pantalla de Pastelería',
    'case.pasteleria.title': 'Pastelería',
    'case.pasteleria.desc':
      'Storefront de e-commerce para una pastelería artesanal: catálogo de productos, carrito y flujo de pago.',
    'case.pasteleria.d1': 'Carrito persistente en localStorage, con estado global manejado por Context API.',
    'case.pasteleria.d2':
      'Sin backend: catálogo hardcodeado, pensado para conectar una API más adelante sin rehacer la UI.',
    'case.pasteleria.d3': 'SEO cubierto con sitemap, robots.txt y generación de imagen para compartir en redes.',

    'case.lust.alt': 'Captura de pantalla de Lust',
    'case.lust.tag': 'Demo de producto · Contenido 18+',
    'case.lust.desc': 'Frontend de una plataforma de contenido por suscripción: onboarding, feed, mensajería y perfiles.',
    'case.lust.d1': 'Sistema de diseño propio ("Neon Nightlife") hecho con CSS puro, sin librería de UI.',
    'case.lust.d2':
      'Flujo de auth completo (login, registro, recuperación) con credenciales de demo, sin backend real.',
    'case.lust.d3': 'Dashboard con feed, exploración, perfiles, mensajería y gestión de suscripciones.',

    'case.autobids.alt': 'Captura de pantalla de AutoBids',
    'case.autobids.desc': 'Plataforma de subastas de autos: listado, ficha de vehículo y filtros por estado.',
    'case.autobids.d1':
      'Datos mock en <code>src/data/cars.ts</code>, con la estructura lista para conectar una API real.',
    'case.autobids.d2': 'Formularios con React Hook Form + Zod, y TanStack Query para el manejo de datos.',
    'case.autobids.d3': 'UI armada con Tailwind CSS + shadcn/ui.',

    'case.ai-solutions.alt': 'Captura de pantalla de AI Solutions',
    'case.ai-solutions.tag': 'Landing · IA',
    'case.ai-solutions.desc':
      'Landing bilingüe (ES/EN) para una empresa de soluciones de IA en industria, agroindustria y construcción.',
    'case.ai-solutions.d1': 'Hero 3D hecho con Three.js vía <code>@react-three/fiber</code>.',
    'case.ai-solutions.d2': 'Contenido bilingüe manejado con un Context propio, sin librería de i18n.',
    'case.ai-solutions.d3':
      'Formulario de contacto sin backend: arma un <code>mailto:</code> y lo abre en el cliente de correo del visitante.',

    'case.psicologia-web.alt': 'Captura de pantalla de Psicología Web',
    'case.psicologia-web.tag': 'Landing · Servicios profesionales',
    'case.psicologia-web.title': 'Psicología Web',
    'case.psicologia-web.desc': 'Landing profesional para presentar servicios de un consultorio de psicología.',
    'case.psicologia-web.d1': 'Armada con shadcn/ui + Tailwind CSS sobre Vite, priorizando carga rápida y accesibilidad.',

    'case.landing-creativa.alt': 'Captura de pantalla de Landing Creativa',
    'case.landing-creativa.tag': 'Landing · Vue',
    'case.landing-creativa.title': 'Landing Creativa',
    'case.landing-creativa.desc': 'Landing page creativa construida con Vue.',
    'case.landing-creativa.d1': 'Vue + TypeScript sobre Vite, con estilos en Tailwind CSS.',

    'case.grupos-de-estudio.alt': 'Captura de pantalla de Grupos de Estudio',
    'case.grupos-de-estudio.tag': 'App · En desarrollo',
    'case.grupos-de-estudio.title': 'Grupos de Estudio',
    'case.grupos-de-estudio.desc': 'Aplicación para organizar y gestionar grupos de estudio.',
    'case.grupos-de-estudio.d1':
      'Vue + TypeScript sobre Vite, con estilos en Tailwind CSS. Todavía en etapa temprana.',

    'link.repo': 'Ver repositorio →',
    'link.demo': 'Ver demo →',

    'contacto.title': 'Contacto',
    'contacto.lead': '¿Tenés un proyecto frontend en mente? Escribime.',

    'footer.top': 'Volver arriba ↑',

    'meta.title': 'José Ivorra Adamowicz — Desarrollador Frontend',
  },
  en: {
    skip: 'Skip to content',
    'logo.aria': 'José Ivorra Adamowicz — home',
    'nav.aria': 'Main',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.langLabel': 'Change language',
    'nav.openMenu': 'Open menu',

    'hero.eyebrow': 'Frontend Developer',
    'hero.lead':
      "I build clean interfaces with React, Vue, Next.js, React Native, and TypeScript, adapting to whatever stack a project calls for. I'm passionate about sweating the details until an interface actually works well, not just looks good in a screenshot.",
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': "Let's talk about your project",

    'clients.label': "Companies I've worked with",
    'clients.piaSub': 'AI Programming',

    'proyectos.title': 'Featured projects',
    'proyectos.lead': 'Real projects, with the problem each one solves and the technical decisions behind it.',

    'case.la-cripta.alt': 'Screenshot of La Cripta',
    'case.la-cripta.tag': 'Website · Three.js / GLSL',
    'case.la-cripta.desc':
      'Prototype site for a gothic-themed cocktail bar: cocktail menu, A–Z search, state screens, and a detail page per cocktail.',
    'case.la-cripta.d1':
      'Hand-built animated background with Three.js + GLSL: a flow-field where thin grey and white lines gather and drift apart over the dark background, instead of reaching for a library like Vanta.js.',
    'case.la-cripta.d2': 'A–Z search built for a long menu, without relying on infinite scroll.',
    'case.la-cripta.d3': 'Loading and empty states treated as their own screens, not a generic spinner.',

    'case.lavado-de-manos.alt': 'Screenshot of Hand-washing Check with AI',
    'case.lavado-de-manos.tag': 'Demo · AI / Computer vision',
    'case.lavado-de-manos.title': 'Hand-washing Check with AI',
    'case.lavado-de-manos.desc':
      'Demo that recognizes and monitors each step of handwashing in real time using an AI model.',
    'case.lavado-de-manos.d1': 'Detects each washing step with a YOLO model.',
    'case.lavado-de-manos.d2':
      'Next.js frontend acting as the presentation layer on top of the TensorFlow-trained model.',

    'case.pasteleria.alt': 'Screenshot of Bakery',
    'case.pasteleria.title': 'Bakery',
    'case.pasteleria.desc': 'E-commerce storefront for an artisanal bakery: product catalog, cart, and checkout flow.',
    'case.pasteleria.d1': 'Cart persisted in localStorage, with global state managed via Context API.',
    'case.pasteleria.d2':
      "No backend: the catalog is hardcoded, built so a real API can be plugged in later without redoing the UI.",
    'case.pasteleria.d3': 'SEO covered with a sitemap, robots.txt, and a generated social-share image.',

    'case.lust.alt': 'Screenshot of Lust',
    'case.lust.tag': 'Product demo · 18+ content',
    'case.lust.desc': 'Frontend for a subscription content platform: onboarding, feed, messaging, and profiles.',
    'case.lust.d1': 'Custom design system ("Neon Nightlife") built with plain CSS, no UI library.',
    'case.lust.d2': 'Full auth flow (login, sign-up, password recovery) with demo credentials, no real backend.',
    'case.lust.d3': 'Dashboard with feed, discovery, profiles, messaging, and subscription management.',

    'case.autobids.alt': 'Screenshot of AutoBids',
    'case.autobids.desc': 'Car auction platform: listings, a vehicle detail page, and filters by status.',
    'case.autobids.d1': 'Mock data in <code>src/data/cars.ts</code>, structured so a real API can be connected later.',
    'case.autobids.d2': 'Forms with React Hook Form + Zod, and TanStack Query for data handling.',
    'case.autobids.d3': 'UI built with Tailwind CSS + shadcn/ui.',

    'case.ai-solutions.alt': 'Screenshot of AI Solutions',
    'case.ai-solutions.tag': 'Landing page · AI',
    'case.ai-solutions.desc':
      'Bilingual (ES/EN) landing page for an AI solutions company in industry, agribusiness, and construction.',
    'case.ai-solutions.d1': 'Hero 3D built with Three.js via <code>@react-three/fiber</code>.',
    'case.ai-solutions.d2': 'Bilingual content handled with a custom Context, no i18n library.',
    'case.ai-solutions.d3':
      "Contact form with no backend: it builds a <code>mailto:</code> link and opens it in the visitor's email client.",

    'case.psicologia-web.alt': 'Screenshot of Psychology Website',
    'case.psicologia-web.tag': 'Landing page · Professional services',
    'case.psicologia-web.title': 'Psychology Website',
    'case.psicologia-web.desc': 'Professional landing page presenting the services of a psychology practice.',
    'case.psicologia-web.d1': 'Built with shadcn/ui + Tailwind CSS on Vite, prioritizing fast loading and accessibility.',

    'case.landing-creativa.alt': 'Screenshot of Creative Landing Page',
    'case.landing-creativa.tag': 'Landing page · Vue',
    'case.landing-creativa.title': 'Creative Landing Page',
    'case.landing-creativa.desc': 'Creative landing page built with Vue.',
    'case.landing-creativa.d1': 'Vue + TypeScript on Vite, styled with Tailwind CSS.',

    'case.grupos-de-estudio.alt': 'Screenshot of Study Groups',
    'case.grupos-de-estudio.tag': 'App · In development',
    'case.grupos-de-estudio.title': 'Study Groups',
    'case.grupos-de-estudio.desc': 'App for organizing and managing study groups.',
    'case.grupos-de-estudio.d1': 'Vue + TypeScript on Vite, styled with Tailwind CSS. Still in an early stage.',

    'link.repo': 'View repository →',
    'link.demo': 'View demo →',

    'contacto.title': 'Contact',
    'contacto.lead': 'Have a frontend project in mind? Get in touch.',

    'footer.top': 'Back to top ↑',

    'meta.title': 'José Ivorra Adamowicz — Frontend Developer',
  },
};

function getStoredLang(): Lang | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'es' || saved === 'en' ? saved : null;
  } catch {
    return null;
  }
}

function storeLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* localStorage no disponible (ej. modo privado) — el toggle sigue
       funcionando para la sesión actual, simplemente no se recuerda. */
  }
}

function applyLang(lang: Lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict['meta.title'] ?? document.title;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const value = dict[key];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr');
    if (!spec) return;
    const [attr, key] = spec.split(':');
    const value = dict[key];
    if (attr && value !== undefined) el.setAttribute(attr, value);
  });
}

export function initI18n(): void {
  const lang = getStoredLang() ?? 'es';
  applyLang(lang);

  const toggle = document.getElementById('langToggle');
  const menu = document.getElementById('langMenu');
  const label = document.getElementById('langToggleLabel');
  if (label) label.textContent = lang.toUpperCase();
  if (!toggle || !menu) return;

  menu.querySelectorAll<HTMLElement>('[data-lang]').forEach((option) => {
    option.setAttribute('aria-selected', String(option.getAttribute('data-lang') === lang));
  });

  const closeMenu = () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll<HTMLElement>('[data-lang]').forEach((option) => {
    option.addEventListener('click', () => {
      const newLang = option.getAttribute('data-lang') as Lang | null;
      if (!newLang) return;
      storeLang(newLang);
      applyLang(newLang);
      if (label) label.textContent = newLang.toUpperCase();
      menu.querySelectorAll<HTMLElement>('[data-lang]').forEach((opt) => {
        opt.setAttribute('aria-selected', String(opt === option));
      });
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (!(e.target instanceof Node)) return;
    if (!toggle.contains(e.target) && !menu.contains(e.target)) closeMenu();
  });
}
