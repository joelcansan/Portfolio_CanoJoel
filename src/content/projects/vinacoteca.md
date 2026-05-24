---
name: "Vinacoteca — Wine Shop"
nameEs: "Vinacoteca — Tienda de Vinos"
description: "Full-stack wine shop SPA built with React and a custom REST API made with Node.js/Express. Features auth, product catalogue, shopping cart and an admin panel."
descriptionEs: "SPA full-stack de una tienda de vinos construida con React y una API REST propia hecha con Node.js/Express. Incluye autenticación, catálogo de productos, carrito de compra y panel de administración."
techs: ["React", "Node.js", "Express", "REST API", "Tailwind CSS", "Vite"]
github: "https://github.com/JoelitoCS/CanoJoel_Frontend_Express"
demo: "https://cano-joel-frontend-express.vercel.app/"
pubDate: "2025-05-01"
---

<div class="lang-en">

## Project description

**Vinacoteca** is a full-stack wine shop application split into two independently deployed services: a **React SPA** on the frontend and a custom **Express REST API** on the backend. The project covers the complete lifecycle of an e-commerce app — from user authentication to order management.

## What does it do?

- **User authentication** — register, login and protected routes
- **Product catalogue** — browse wines with images, descriptions and prices
- **Shopping cart** — persistent cart with quantity management
- **Order system** — place orders and view order history
- **User profile** — manage personal data
- **Admin panel** — restricted dashboard to manage products and orders
- **18+ API endpoints** consumed from the custom Express backend
- Fully **responsive** design built with Tailwind CSS

## Technical decisions

The frontend is built with **React + Vite**, using two React Contexts (`AuthContext` and `CarritoContext`) to handle global state for authentication and the shopping cart. All API calls are centralised in a `services/api.js` module, keeping components clean.

The backend is a custom **REST API built with Node.js and Express**, deployed separately on **Render**. The frontend is deployed on **Vercel**, with the API URL configurable via `.env` — making both services easy to redeploy or swap independently.

The separation of frontend and backend into two repos reflects a real-world microservices approach, where each layer can be developed, tested and deployed on its own.

</div>

<div class="lang-es">

## Descripción del proyecto

**Vinacoteca** es una aplicación full-stack de una tienda de vinos dividida en dos servicios desplegados de forma independiente: una **SPA en React** en el frontend y una **API REST con Express** en el backend. El proyecto cubre el ciclo completo de una app de e-commerce, desde la autenticación de usuarios hasta la gestión de pedidos.

## ¿Qué hace?

- **Autenticación de usuarios** — registro, login y rutas protegidas
- **Catálogo de productos** — explorar vinos con imágenes, descripciones y precios
- **Carrito de compra** — carrito persistente con gestión de cantidades
- **Sistema de pedidos** — realizar pedidos y consultar el historial
- **Perfil de usuario** — gestionar datos personales
- **Panel de administración** — dashboard restringido para gestionar productos y pedidos
- **18+ endpoints de API** consumidos desde el backend Express propio
- Diseño totalmente **responsive** con Tailwind CSS

## Decisiones técnicas

El frontend está construido con **React + Vite**, usando dos React Contexts (`AuthContext` y `CarritoContext`) para manejar el estado global de autenticación y el carrito. Todas las llamadas a la API están centralizadas en un módulo `services/api.js`, manteniendo los componentes limpios.

El backend es una **API REST propia con Node.js y Express**, desplegada de forma independiente en **Render**. El frontend está en **Vercel**, con la URL de la API configurable via `.env` — facilitando el redespliegue o sustitución de cualquiera de los dos servicios.

La separación en dos repos refleja un enfoque real de microservicios, donde cada capa se puede desarrollar, probar y desplegar de forma autónoma.

</div>
