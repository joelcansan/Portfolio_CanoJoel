# Portfolio Cano Joel

Este proyecto es un **portfolio personal creado con Astro**. Está diseñado como un sitio web **estático** y optimizado para mostrar proyectos, experiencia y una sección de contacto funcional.

## ✨ Tecnologías usadas

- **Astro** para generar el sitio estático
- **HTML avanzado** para construir la estructura y contenido
- **CSS avanzado** para el diseño responsivo, animaciones y estilos personalizados
- **JavaScript** para interactividad y pequeños componentes dinámicos
- **Formspree** para recibir correos desde el formulario de contacto directamente en el email

## 🧩 Cómo funciona el portfolio

El portfolio se compone de páginas estáticas generadas por Astro a partir de archivos y componentes en `src/`. La estructura principal incluye:

- `src/pages/`: rutas públicas del sitio, como la página de inicio y el apartado de proyectos
- `src/components/`: componentes reutilizables para cabeceras, pie de página, formulario y efectos visuales
- `src/content/`: contenido en Markdown para entradas del blog y descripciones de proyectos
- `public/`: recursos estáticos como imágenes y configuraciones públicas

La página de contacto usa un formulario que envía los datos a **Formspree**, lo que permite recibir los mensajes directamente en el correo sin necesidad de backend propio.

## 🚀 Resumen general

Este portfolio es un sitio web estático creado con Astro, donde cada página se construye a partir de componentes y contenido bien estructurado. El resultado es un sitio rápido, accesible y moderno, con soporte para proyectos, blog y contacto. Además de Astro, el proyecto incluye trabajo con JavaScript, CSS y HTML avanzado para mejorar la experiencia de usuario.

## 🧞 Comandos

Desde la raíz del proyecto, utiliza estos comandos:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`    |
| `npm run build`           | Genera el sitio de producción en `./dist/`       |
| `npm run preview`         | Previsualiza el sitio de producción              |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro                   |
