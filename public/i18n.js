/**
 * i18n.js — Sistema de traducciones para el portfolio
 * ════════════════════════════════════════════════════
 *
 * CÓMO FUNCIONA:
 * 1. Cada texto traducible tiene un "data-i18n" en el HTML con una clave (ej: "hero.greeting")
 * 2. Este archivo tiene un objeto con todas las traducciones para ES y EN
 * 3. Un script lee el idioma de localStorage y reemplaza el textContent de cada elemento
 * 4. El selector de idioma del Header llama a setLanguage() para cambiar en caliente
 *
 * CÓMO AÑADIR UNA TRADUCCIÓN NUEVA:
 * 1. Pon data-i18n="mi.clave" en el elemento HTML
 * 2. Añade "mi.clave" en ambos objetos (es y en) de abajo
 * 3. Listo — se traduce automáticamente
 *
 * NOTA: Los textos que están dentro de componentes Astro dinámicos (como los .map())
 * se traducen también con data-i18n en el HTML generado.
 */

window.I18N = {
	/* ═══════════════════════════
	   ESPAÑOL (idioma por defecto)
	   ═══════════════════════════ */
	es: {
		// ── Header / Nav ──
		'nav.home': 'Home',
		'nav.projects': 'Proyectos',
		'nav.about': 'About',

		// ── Home: Hero ──
		'hero.greeting': '// Bienvenido a mi portfolio',
		'hero.name': 'Joel Cano Sánchez',
		'hero.sub': 'Desarrollador full-stack junior. Construyo aplicaciones web de principio a fin: frontend, APIs, bases de datos y despliegue.',
		'hero.projects': 'Ver proyectos →',
		'hero.about': 'Conóceme',
		'hero.github': 'GitHub',
		'hero.contact': 'Contacto',

		// ── Home: Proyectos destacados ──
		'home.featured': '// Proyectos destacados',
		'home.viewAll': 'Ver todos →',
		'home.noProjects': '// Aún no hay proyectos publicados.',
		'home.projectTag': '// proyecto',

		// ── Home: Por qué yo ──
		'home.why': '// Por qué trabajar conmigo',
		'home.highlight1': '2º DAW con experiencia en becarios (e-Corp Sistemas y Reactivació Badalona).',
		'home.highlight2': 'Full-stack: frontend, backend, APIs REST y bases de datos relacionales.',
		'home.highlight3': 'Proyectos desplegados en Vercel, Render, Railway y GitHub Pages.',
		'home.readMore': 'Leer mi historia completa →',

		// ── Home: Stack ──
		'home.stack': '// Stack principal',

		// ── Home: CTA final ──
		'home.ctaTitle': '¿Hablamos?',
		'home.ctaDesc': 'Busco seguir creciendo como desarrollador y aportar en proyectos reales. Échale un vistazo a mi trabajo o escríbeme.',
		'home.ctaProjects': 'Ver proyectos',
		'home.ctaContact': 'Contacto',

		// ── Projects index page ──
		'projects.title': 'Proyectos',
		'projects.empty': '// No hay proyectos todavía. ¡Pronto!',
		'projects.featuredTag': '// Proyecto destacado',
		'projects.cardTag': '// proyecto',

		// ── Project detail page (slug) ──
		'project.breadcrumb': 'Proyectos',
		'project.viewCode': 'Ver código',
		'project.viewDemo': 'Ver demo',
		'project.techsLabel': '// Tecnologías utilizadas',

		// ── About: Hero ──
		'about.greeting': '// about_me',
		'about.name': 'Joel Cano Sánchez',
		'about.sub': 'Desarrollador full-stack junior con 19 años. Me apasiona crear aplicaciones desde cero, resolver problemas reales y ver cómo una idea se convierte en algo funcional.',
		'about.projects': 'Ver proyectos →',
		'about.github': 'GitHub',
		'about.contact': 'Contacto',

		// ── About: Stats ──
		'about.statAge': '19',
		'about.statAgeLabel': 'Años',
		'about.statCourse': '2º',
		'about.statCourseLabel': 'DAW',
		'about.statRole': 'Full-stack',
		'about.statRoleLabel': 'Junior',
		'about.statIntern': '2',
		'about.statInternLabel': 'Becarios',

		// ── About: Timeline ──
		'about.timeline': '// Mi camino',
		'about.t1period': '2022 — 2024',
		'about.t1title': 'SMR',
		'about.t1sub': 'Sistemas Microinformáticos y Redes',
		'about.t1desc': 'Base sólida en hardware, redes y sistemas operativos.',
		'about.t2period': '2024 — Actualidad',
		'about.t2title': 'DAW',
		'about.t2sub': 'Desarrollo de Aplicaciones Web',
		'about.t2desc': 'Segundo curso. Full-stack, APIs, bases de datos y despliegue.',
		'about.t3period': 'Becario',
		'about.t3title': 'e-Corp Sistemas',
		'about.t3sub': 'Montaje y sistemas',
		'about.t3desc': 'Montaje de ordenadores, instalación y configuración de sistemas operativos.',
		'about.t4period': 'Becario',
		'about.t4title': 'Reactivació Badalona',
		'about.t4sub': 'Desarrollo web',
		'about.t4desc': 'WordPress, MariaDB, y stack moderno con React, Next.js, Tailwind, Laravel y Express.',

		// ── About: Terminal ──
		'about.terminal': '// joel.json',

		// ── About: Stack ──
		'about.stack': '// Stack',
		'about.frontend': 'Frontend',
		'about.backend': 'Backend',
		'about.databases': 'Bases de datos',
		'about.tools': 'Herramientas',

		// ── About: Cómo trabajo ──
		'about.howWork': '// Cómo trabajo',
		'about.w1tag': '// metodología',
		'about.w1title': 'SCRUM',
		'about.w1desc': 'Trabajo en equipo con sprints y entregas iterativas.',
		'about.w2tag': '// versionado',
		'about.w2title': 'Git',
		'about.w2desc': 'Control de versiones en todos mis proyectos personales y académicos.',
		'about.w3tag': '// deploy',
		'about.w3title': 'En producción',
		'about.w3desc': 'Vercel, Render, Railway y GitHub Pages.',

		// ── About: Quote ──
		'about.quote': 'Mi objetivo es seguir creciendo como desarrollador, aportar valor en cada proyecto y rodearme de personas que me reten a mejorar. Cada línea de código me motiva a construir cosas cada vez más sólidas, útiles y profesionales.',

		// ── Footer ──
		'footer.cv': 'Descargar CV',
	},

	/* ═══════════════════════════
	   ENGLISH
	   ═══════════════════════════ */
	en: {
		// ── Header / Nav ──
		'nav.home': 'Home',
		'nav.projects': 'Projects',
		'nav.about': 'About',

		// ── Home: Hero ──
		'hero.greeting': '// Welcome to my portfolio',
		'hero.name': 'Joel Cano Sánchez',
		'hero.sub': 'Junior full-stack developer. I build web applications end to end: frontend, APIs, databases, and deployment.',
		'hero.projects': 'View projects →',
		'hero.about': 'About me',
		'hero.github': 'GitHub',
		'hero.contact': 'Contact',

		// ── Home: Proyectos destacados ──
		'home.featured': '// Featured projects',
		'home.viewAll': 'View all →',
		'home.noProjects': '// No projects published yet.',
		'home.projectTag': '// project',

		// ── Home: Por qué yo ──
		'home.why': '// Why work with me',
		'home.highlight1': '2nd year Web Development student with internship experience (e-Corp Sistemas & Reactivació Badalona).',
		'home.highlight2': 'Full-stack: frontend, backend, REST APIs, and relational databases.',
		'home.highlight3': 'Projects deployed on Vercel, Render, Railway, and GitHub Pages.',
		'home.readMore': 'Read my full story →',

		// ── Home: Stack ──
		'home.stack': '// Main stack',

		// ── Home: CTA final ──
		'home.ctaTitle': "Let's talk?",
		'home.ctaDesc': "I'm looking to keep growing as a developer and contribute to real projects. Check out my work or reach out.",
		'home.ctaProjects': 'View projects',
		'home.ctaContact': 'Contact',

		// ── Projects index page ──
		'projects.title': 'Projects',
		'projects.empty': "// No projects yet. Coming soon!",
		'projects.featuredTag': '// Featured project',
		'projects.cardTag': '// project',

		// ── Project detail page (slug) ──
		'project.breadcrumb': 'Projects',
		'project.viewCode': 'View code',
		'project.viewDemo': 'View demo',
		'project.techsLabel': '// Technologies used',

		// ── About: Hero ──
		'about.greeting': '// about_me',
		'about.name': 'Joel Cano Sánchez',
		'about.sub': "19-year-old junior full-stack developer. I'm passionate about building applications from scratch, solving real problems, and watching an idea become something functional.",
		'about.projects': 'View projects →',
		'about.github': 'GitHub',
		'about.contact': 'Contact',

		// ── About: Stats ──
		'about.statAge': '19',
		'about.statAgeLabel': 'Years',
		'about.statCourse': '2nd',
		'about.statCourseLabel': 'DAW',
		'about.statRole': 'Full-stack',
		'about.statRoleLabel': 'Junior',
		'about.statIntern': '2',
		'about.statInternLabel': 'Internships',

		// ── About: Timeline ──
		'about.timeline': '// My path',
		'about.t1period': '2022 — 2024',
		'about.t1title': 'SMR',
		'about.t1sub': 'Microcomputer Systems & Networks',
		'about.t1desc': 'Strong foundation in hardware, networking, and operating systems.',
		'about.t2period': '2024 — Present',
		'about.t2title': 'DAW',
		'about.t2sub': 'Web Application Development',
		'about.t2desc': 'Second year. Full-stack, APIs, databases, and deployment.',
		'about.t3period': 'Intern',
		'about.t3title': 'e-Corp Sistemas',
		'about.t3sub': 'Assembly & systems',
		'about.t3desc': 'Computer assembly, OS installation and configuration.',
		'about.t4period': 'Intern',
		'about.t4title': 'Reactivació Badalona',
		'about.t4sub': 'Web development',
		'about.t4desc': 'WordPress, MariaDB, and modern stack with React, Next.js, Tailwind, Laravel & Express.',

		// ── About: Terminal ──
		'about.terminal': '// joel.json',

		// ── About: Stack ──
		'about.stack': '// Stack',
		'about.frontend': 'Frontend',
		'about.backend': 'Backend',
		'about.databases': 'Databases',
		'about.tools': 'Tools',

		// ── About: Cómo trabajo ──
		'about.howWork': '// How I work',
		'about.w1tag': '// methodology',
		'about.w1title': 'SCRUM',
		'about.w1desc': 'Teamwork with sprints and iterative deliveries.',
		'about.w2tag': '// versioning',
		'about.w2title': 'Git',
		'about.w2desc': 'Version control in all my personal and academic projects.',
		'about.w3tag': '// deploy',
		'about.w3title': 'In production',
		'about.w3desc': 'Vercel, Render, Railway, and GitHub Pages.',

		// ── About: Quote ──
		'about.quote': 'My goal is to keep growing as a developer, add value to every project, and surround myself with people who challenge me to improve. Every line of code motivates me to build things that are increasingly solid, useful, and professional.',

		// ── Footer ──
		'footer.cv': 'Download CV',
	},
};

/**
 * getLanguage() — devuelve el idioma guardado en localStorage, o 'es' por defecto
 */
window.getLanguage = function () {
	return localStorage.getItem('portfolio-lang') || 'es';
};

/**
 * setLanguage(lang) — cambia el idioma y re-traduce toda la página
 * @param {string} lang — 'es' o 'en'
 */
window.setLanguage = function (lang) {
	localStorage.setItem('portfolio-lang', lang);
	document.documentElement.lang = lang;
	applyTranslations(lang);
	updateLangSelector(lang);
};

/**
 * applyTranslations(lang) — busca todos los [data-i18n] y reemplaza su texto
 * @param {string} lang — 'es' o 'en'
 */
function applyTranslations(lang) {
	var translations = window.I18N[lang];
	if (!translations) return;

	var elements = document.querySelectorAll('[data-i18n]');
	elements.forEach(function (el) {
		var key = el.getAttribute('data-i18n');
		if (translations[key] !== undefined) {
			el.textContent = translations[key];
		}
	});

	var htmlElements = document.querySelectorAll('[data-i18n-html]');
	htmlElements.forEach(function (el) {
		var key = el.getAttribute('data-i18n-html');
		if (translations[key] !== undefined) {
			el.innerHTML = translations[key];
		}
	});

	// Traducir el subtítulo dinámico de proyectos (contiene el contador)
	var projSubtitle = document.querySelector('[data-i18n-projects-count]');
	if (projSubtitle) {
		var count = projSubtitle.getAttribute('data-i18n-projects-count');
		if (lang === 'en') {
			projSubtitle.textContent = '// ' + count + ' project' + (count !== '1' ? 's' : '') + ' total';
		} else {
			projSubtitle.textContent = '// ' + count + ' proyecto' + (count !== '1' ? 's' : '') + ' en total';
		}
	}
}

/**
 * updateLangSelector(lang) — actualiza visualmente qué idioma está activo
 */
function updateLangSelector(lang) {
	var options = document.querySelectorAll('.lang-option');
	options.forEach(function (opt) {
		if (opt.getAttribute('data-lang') === lang) {
			opt.classList.add('active');
		} else {
			opt.classList.remove('active');
		}
	});
}

/**
 * Al cargar la página: aplicar el idioma guardado
 */
document.addEventListener('DOMContentLoaded', function () {
	var lang = window.getLanguage();
	document.documentElement.lang = lang;
	applyTranslations(lang);
	updateLangSelector(lang);
});
