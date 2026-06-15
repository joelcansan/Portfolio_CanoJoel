---
name: "Clavey — Gestor de Notas y Contraseñas"
nameEn: "Clavey — Notes & Password Manager"
description: "Aplicación minimalista para gestionar notas y contraseñas con un editor de texto enriquecido: color de fondo, negrita, cursiva, resaltado, imágenes y exportación a PDF."
descriptionEn: "Minimalist app to manage notes and passwords with a rich text editor: background colour, bold, italic, highlights, images and PDF export."
techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TipTap", "Supabase", "Zod"]
github: "https://github.com/joelcansan/Clavey"
heroImage: "/images/clavey.png"
demo: "https://clavey.vercel.app"
pubDate: "2026-06-07"
---

<div class="lang-es">

## Descripción del proyecto

**Clavey** es una aplicación web minimalista para gestionar notas y contraseñas desde un único lugar. La premisa es sencilla: un espacio limpio, sin distracciones, donde puedes crear notas y personalizarlas exactamente a tu gusto.

La app pone énfasis en el editor de texto enriquecido, que va más allá de guardar texto plano: permite dar formato, añadir imágenes y exportar el resultado directamente a PDF.

## ¿Qué hace?

- **Gestión de notas** — crea, edita y organiza tus notas en un espacio limpio
- **Gestión de contraseñas** — almacena tus credenciales de forma ordenada y segura
- **Editor enriquecido** — aplica negrita, cursiva, color de texto y resaltado directamente en la nota
- **Color de fondo personalizable** — cada nota puede tener su propio color de fondo
- **Soporte de imágenes** — inserta imágenes dentro de las notas
- **Exportación a PDF** — descarga cualquier nota en formato PDF con un solo clic
- **Diseño minimalista** — interfaz limpia centrada en el contenido, sin ruido visual

## Decisiones técnicas

El diseño minimalista no es solo estético: condicionó cada decisión de implementación. La interfaz está construida de modo que el editor ocupe el protagonismo y nada compita con el contenido.

El editor enriquecido está implementado de forma personalizada para soportar las opciones de formato sin depender de librerías pesadas. La exportación a PDF se genera directamente en el cliente, lo que evita llamadas adicionales al servidor y hace la experiencia más fluida.

El frontend está desplegado en **Vercel**, aprovechando su integración directa con el repositorio para despliegues automáticos en cada push.

</div>

<div class="lang-en">

## Project description

**Clavey** is a minimalist web application for managing notes and passwords in one place. The premise is simple: a clean, distraction-free space where you can create notes and customise them exactly as you like.

The app puts the rich text editor front and centre, going well beyond plain text: you can format content, add images and export the result directly to PDF.

## What does it do?

- **Note management** — create, edit and organise your notes in a clean workspace
- **Password management** — store your credentials in an organised, secure way
- **Rich text editor** — apply bold, italic, text colour and highlights directly in the note
- **Custom background colour** — each note can have its own background colour
- **Image support** — insert images inside notes
- **PDF export** — download any note as a PDF with a single click
- **Minimalist design** — clean, content-focused interface with no visual noise

## Technical decisions

The minimalist design isn't just aesthetic — it shaped every implementation decision. The interface is built so the editor takes centre stage and nothing competes with the content.

The rich text editor is custom-built to support all formatting options without relying on heavy third-party libraries. PDF export is generated entirely on the client side, avoiding extra server calls and making the experience feel instant.

The frontend is deployed on **Vercel**, taking advantage of its direct repository integration for automatic deployments on every push.

</div>
