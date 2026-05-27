/**
 * i18n.js — Sistema de traducciones del portfolio
 * ─────────────────────────────────────────────────
 * USO:
 *   data-i18n="clave"       → textContent
 *   data-i18n-html="clave"  → innerHTML
 *   data-i18n-attr-aria-label="clave" → atributo aria-label (futuro)
 *
 * AÑADIR TRADUCCIONES:
 *   1. Añade la clave en ambos objetos (es + en) con el mismo nombre.
 *   2. Usa data-i18n="tu.clave" en el HTML.
 *   3. ¡Listo! El sistema lo recoge automáticamente.
 */

window.I18N = {

  /* ═══════════════════════════════════════
     ESPAÑOL (idioma por defecto)
  ═══════════════════════════════════════ */
  es: {

    /* ── Navegación ── */
    'nav.home':     'Home',
    'nav.projects': 'Proyectos',
    'nav.about':    'Sobre mí',

    /* ── Hero ── */
    'hero.name':    'Joel Cano Sánchez',
    'hero.role':    'Desarrollador Web',
    'hero.sub':     'Construyo aplicaciones web de principio a fin: interfaces, APIs, bases de datos y despliegue. Apasionado del código limpio y las buenas arquitecturas.',
    'hero.available': 'Disponible para proyectos',
    'hero.cta.projects': 'Ver proyectos →',
    'hero.cta.about':    'Sobre mí',
    'hero.cta.github':   'GitHub',
    'hero.cta.contact':  'Contacto',

    /* ── Sección proyectos (Home) ── */
    'home.featured':    '// Proyectos destacados',
    'home.viewAll':     'Ver todos →',
    'home.noProjects':  '// Aún no hay proyectos publicados.',
    'home.why':         '// Por qué trabajar conmigo',
    'home.highlight1':  '2º DAW con experiencia en prácticas (e-Corp Sistemas y Reactivació Badalona).',
    'home.highlight2':  'Full-stack: frontend, backend, APIs REST y bases de datos relacionales.',
    'home.highlight3':  'Proyectos desplegados en Vercel, Render, Railway y GitHub Pages.',
    'home.readMore':    'Leer mi historia completa →',
    'home.stack':       '// Stack principal',

    /* ── Página Proyectos ── */
    'projects.title':   'Proyectos',
    'projects.empty':   '// No hay proyectos todavía. ¡Pronto!',
    'projects.viewProject': 'Ver proyecto',

    /* ── Detalle de proyecto ── */
    'project.breadcrumb':  'Proyectos',
    'project.tag':         'Proyecto',
    'project.viewCode':    'Ver código',
    'project.viewDemo':    'Ver demo',
    'project.techsLabel':  '// Tecnologías utilizadas',
    'project.aboutLabel':  'Sobre este proyecto',

    /* ── About ── */
    'about.greeting':        '// sobre_mí',
    'about.name':            'Joel Cano Sánchez',
    'about.role':            'Desarrollador Full-Stack Junior',
    'about.sub':             'Desarrollador full-stack junior con 19 años. Me apasiona crear aplicaciones desde cero, resolver problemas reales y ver cómo una idea se convierte en algo funcional.',
    'about.cta.projects':    'Ver proyectos →',
    'about.cta.github':      'GitHub',
    'about.cta.contact':     'Contacto',

    'about.stat.age':        '19',
    'about.stat.ageLabel':   'Años',
    'about.stat.course':     '2º',
    'about.stat.courseLabel':'DAW',
    'about.stat.role':       'Full-stack',
    'about.stat.roleLabel':  'Junior',
    'about.stat.intern':     '2',
    'about.stat.internLabel':'Prácticas',

    'about.section.timeline': '// Mi camino',
    'about.section.terminal': '// joel.json',
    'about.section.stack':    '// Stack',
    'about.section.frontend': 'Frontend',
    'about.section.backend':  'Backend',
    'about.section.databases':'Bases de datos',
    'about.section.tools':    'Herramientas',
    'about.section.howWork':  '// Cómo trabajo',
    'about.section.quote':    '// Objetivo',

    'about.t1.period': '2022 — 2024',
    'about.t1.title':  'SMR',
    'about.t1.sub':    'Sistemas Microinformáticos y Redes',
    'about.t1.desc':   'Base sólida en hardware, redes y sistemas operativos.',

    'about.t2.period': '2024 — Actualidad',
    'about.t2.title':  'DAW',
    'about.t2.sub':    'Desarrollo de Aplicaciones Web',
    'about.t2.desc':   'Segundo curso. Full-stack, APIs, bases de datos y despliegue.',

    'about.t3.period': 'Prácticas',
    'about.t3.title':  'e-Corp Sistemas',
    'about.t3.sub':    'Montaje y sistemas',
    'about.t3.desc':   'Montaje de ordenadores, instalación y configuración de sistemas operativos.',

    'about.t4.period': 'Prácticas',
    'about.t4.title':  'Reactivació Badalona',
    'about.t4.sub':    'Desarrollo web',
    'about.t4.desc':   'WordPress, MariaDB, y stack moderno con React, Next.js, Tailwind, Laravel y Express.',

    'about.w1.tag':   '// metodología',
    'about.w1.title': 'SCRUM',
    'about.w1.desc':  'Trabajo en equipo con sprints y entregas iterativas.',

    'about.w2.tag':   '// versionado',
    'about.w2.title': 'Git',
    'about.w2.desc':  'Control de versiones en todos mis proyectos personales y académicos.',

    'about.w3.tag':   '// deploy',
    'about.w3.title': 'En producción',
    'about.w3.desc':  'Vercel, Render, Railway y GitHub Pages.',

    'about.quote': 'Mi objetivo es seguir creciendo como desarrollador, aportar valor en cada proyecto y rodearme de personas que me reten a mejorar. Cada línea de código me motiva a construir cosas cada vez más sólidas, útiles y profesionales.',

    /* ── Footer ── */
    'footer.cv':        'Descargar CV',
    'footer.copyright': '©',
  },

  /* ═══════════════════════════════════════
     ENGLISH
  ═══════════════════════════════════════ */
  en: {

    /* ── Navegación ── */
    'nav.home':     'Home',
    'nav.projects': 'Projects',
    'nav.about':    'About',

    /* ── Hero ── */
    'hero.name':    'Joel Cano Sánchez',
    'hero.role':    'Web Developer',
    'hero.sub':     'I build web applications end to end: interfaces, APIs, databases, and deployment. Passionate about clean code and good architecture.',
    'hero.available': 'Available for projects',
    'hero.cta.projects': 'View projects →',
    'hero.cta.about':    'About me',
    'hero.cta.github':   'GitHub',
    'hero.cta.contact':  'Contact',

    /* ── Sección proyectos (Home) ── */
    'home.featured':    '// Featured projects',
    'home.viewAll':     'View all →',
    'home.noProjects':  '// No projects published yet.',
    'home.why':         '// Why work with me',
    'home.highlight1':  '2nd year Web Dev student with internship experience (e-Corp Sistemas & Reactivació Badalona).',
    'home.highlight2':  'Full-stack: frontend, backend, REST APIs, and relational databases.',
    'home.highlight3':  'Projects deployed on Vercel, Render, Railway, and GitHub Pages.',
    'home.readMore':    'Read my full story →',
    'home.stack':       '// Main stack',

    /* ── Página Proyectos ── */
    'projects.title':   'Projects',
    'projects.empty':   '// No projects yet. Coming soon!',
    'projects.viewProject': 'View project',

    /* ── Detalle de proyecto ── */
    'project.breadcrumb':  'Projects',
    'project.tag':         'Project',
    'project.viewCode':    'View code',
    'project.viewDemo':    'Live demo',
    'project.techsLabel':  '// Technologies used',
    'project.aboutLabel':  'About this project',

    /* ── About ── */
    'about.greeting':        '// about_me',
    'about.name':            'Joel Cano Sánchez',
    'about.role':            'Junior Full-Stack Developer',
    'about.sub':             '19-year-old junior full-stack developer. Passionate about building apps from scratch and solving real problems.',
    'about.cta.projects':    'View projects →',
    'about.cta.github':      'GitHub',
    'about.cta.contact':     'Contact',

    'about.stat.age':        '19',
    'about.stat.ageLabel':   'Years old',
    'about.stat.course':     '2nd',
    'about.stat.courseLabel':'DAW',
    'about.stat.role':       'Full-stack',
    'about.stat.roleLabel':  'Junior',
    'about.stat.intern':     '2',
    'about.stat.internLabel':'Internships',

    'about.section.timeline': '// My journey',
    'about.section.terminal': '// joel.json',
    'about.section.stack':    '// Stack',
    'about.section.frontend': 'Frontend',
    'about.section.backend':  'Backend',
    'about.section.databases':'Databases',
    'about.section.tools':    'Tools',
    'about.section.howWork':  '// How I work',
    'about.section.quote':    '// Goal',

    'about.t1.period': '2022 — 2024',
    'about.t1.title':  'SMR',
    'about.t1.sub':    'Microcomputer Systems & Networks',
    'about.t1.desc':   'Strong foundation in hardware, networking, and operating systems.',

    'about.t2.period': '2024 — Present',
    'about.t2.title':  'DAW',
    'about.t2.sub':    'Web Application Development',
    'about.t2.desc':   'Second year. Full-stack, APIs, databases, and deployment.',

    'about.t3.period': 'Intern',
    'about.t3.title':  'e-Corp Sistemas',
    'about.t3.sub':    'Assembly & systems',
    'about.t3.desc':   'Computer assembly, OS installation and configuration.',

    'about.t4.period': 'Intern',
    'about.t4.title':  'Reactivació Badalona',
    'about.t4.sub':    'Web development',
    'about.t4.desc':   'WordPress, MariaDB, and modern stack with React, Next.js, Tailwind, Laravel & Express.',

    'about.w1.tag':   '// methodology',
    'about.w1.title': 'SCRUM',
    'about.w1.desc':  'Teamwork with sprints and iterative deliveries.',

    'about.w2.tag':   '// versioning',
    'about.w2.title': 'Git',
    'about.w2.desc':  'Version control in all my personal and academic projects.',

    'about.w3.tag':   '// deploy',
    'about.w3.title': 'In production',
    'about.w3.desc':  'Vercel, Render, Railway, and GitHub Pages.',

    'about.quote': 'My goal is to keep growing as a developer, add value to every project, and surround myself with people who challenge me to improve. Every line of code motivates me to build things that are increasingly solid, useful and professional.',

    /* ── Footer ── */
    'footer.cv':        'Download CV',
    'footer.copyright': '©',
  },
};

/* ════════════════════════════════════════════════════════
   CORE ENGINE — no tocar salvo que se amplíe la API
════════════════════════════════════════════════════════ */

/** Devuelve el idioma activo desde localStorage (por defecto 'es') */
window.getLanguage = function () {
  return localStorage.getItem('portfolio-lang') || 'es';
};

/**
 * Cambia el idioma activo, actualiza el DOM y persiste la preferencia.
 * Seguro para llamar en cualquier página.
 */
window.setLanguage = function (lang) {
  if (!window.I18N[lang]) return;

  localStorage.setItem('portfolio-lang', lang);

  /* Actualizar <html lang> y data-active-lang */
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-active-lang', lang);

  /* Silenciar el ticker del hero antes de traducir
     (evita que lectores de pantalla anuncien el cambio animado) */
  var ticker = document.querySelector('.hero-ticker');
  if (ticker) ticker.setAttribute('aria-live', 'off');

  applyTranslations(lang);
  updateLangButtons(lang);
  updateTicker(lang);
  updateProjectDetail(lang);

  /* Restaurar aria-label del ticker con el valor ya traducido */
  if (ticker) {
    var t   = window.I18N[lang];
    var nm  = (t && t['hero.name']) ? t['hero.name'] : 'Joel Cano Sánchez';
    var rol = (t && t['hero.role']) ? t['hero.role'] : 'Web Developer';
    ticker.setAttribute('aria-label', nm + ', ' + rol);
  }
};

/* ── Aplicar traducciones al DOM ── */
function applyTranslations(lang) {
  var t = window.I18N[lang];
  if (!t) return;

  /* data-i18n → textContent */
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* data-i18n-html → innerHTML */
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* data-i18n-placeholder → placeholder */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* data-i18n-aria-label → aria-label */
  document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria-label');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  /* Contador de proyectos dinámico */
  var projSub = document.querySelector('[data-i18n-projects-count]');
  if (projSub) {
    var count = projSub.getAttribute('data-i18n-projects-count');
    projSub.textContent = lang === 'en'
      ? '// ' + count + ' project' + (count !== '1' ? 's' : '') + ' total'
      : '// ' + count + ' proyecto' + (count !== '1' ? 's' : '') + ' en total';
  }
}

/* ── Actualizar visual de los botones ES/EN ── */
function updateLangButtons(lang) {
  document.querySelectorAll('.lang-opt, .lang-option').forEach(function (btn) {
    var isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

/* ── Actualizar ticker del hero ── */
function updateTicker(lang) {
  var t = window.I18N[lang];
  if (!t) return;
  var nameEl = document.querySelector('#ticker-name .ticker-name');
  var roleEl = document.querySelector('#ticker-role .ticker-role');
  if (nameEl && t['hero.name']) nameEl.textContent = t['hero.name'];
  if (roleEl && t['hero.role']) roleEl.textContent = t['hero.role'];
}

/* ── Actualizar detalle de proyecto (ProjectPost.astro) ── */
function updateProjectDetail(lang) {
  var title = document.getElementById('proj-title');
  var desc  = document.getElementById('proj-desc');
  var dividerLabel = document.getElementById('proj-divider-label');

  if (title) {
    title.textContent = title.getAttribute('data-name-' + lang)
      || title.getAttribute('data-name-en')
      || title.getAttribute('data-name-es')
      || title.textContent;
  }
  if (desc) {
    desc.textContent = desc.getAttribute('data-desc-' + lang)
      || desc.getAttribute('data-desc-en')
      || desc.getAttribute('data-desc-es')
      || desc.textContent;
  }
  if (dividerLabel) {
    var t = window.I18N[lang];
    if (t && t['project.aboutLabel']) dividerLabel.textContent = t['project.aboutLabel'];
  }
}

/* ════════════════════════════════════════════════════════
   INIT — ejecutar al cargar cualquier página
════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var lang = window.getLanguage();
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-active-lang', lang);
  applyTranslations(lang);
  updateLangButtons(lang);
  updateTicker(lang);
  updateProjectDetail(lang);
});
