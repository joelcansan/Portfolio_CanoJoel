---
name: "InfluStats — Gestor de Redes Sociales"
nameEn: "InfluStats — Social Media Manager"
description: "Aplicación web para gestores de contenido: centraliza estadísticas de Instagram, YouTube, TikTok y Twitch en un solo panel, con gráficos interactivos y comparativa entre perfiles."
descriptionEn: "Web app for content creators: centralises Instagram, YouTube, TikTok and Twitch stats in one dashboard, with interactive charts and cross-profile comparisons."
techs: ["Next.js", "React", "Recharts", "Tailwind CSS", "Node.js", "Express", "Supabase", "Prisma"]
github: "https://github.com/joelcansan/InfluStats_Frontend"
heroImage: "/images/influstats.png"
demo: "https://influstats.vercel.app/"
pubDate: "2025-06-01"
---

<div class="lang-es">

## Descripción del proyecto

**InfluStats** es mi proyecto final de DAW: una plataforma web diseñada para creadores de contenido y agencias que quieran centralizar y comparar estadísticas de múltiples redes sociales desde un único panel de control.

La app integra datos de **Instagram, YouTube, TikTok y Twitch**, permitiendo ver el rendimiento de cualquier perfil, compararlo con otros (propios o de terceros) y darse a conocer ante agencias u otras cuentas que busquen colaboradores.

## ¿Qué hace?

- **Panel unificado** — todas las redes en una sola vista
- **Estadísticas detalladas** — seguidores, alcance, interacciones, visualizaciones…
- **Comparativa de perfiles** — compara tus cuentas entre sí o con las de otros creadores
- **Directorio de perfiles** — hazte visible ante agencias y marcas que buscan influencers
- **Visualización gráfica** — gráficos de barras, lineales y de radar con Recharts
- **Autenticación y perfiles** — cuentas con foto de perfil guardada en Supabase Storage

## Decisiones técnicas

El **frontend** está construido con **Next.js** (App Router), usando componentes de cliente con `"use client"` donde se necesita interactividad. Los gráficos se renderizan con **Recharts** y el diseño está completamente maquetado con **Tailwind CSS**.

El **backend** es una API propia con **Express + Node.js**. Para evitar que el servicio de Render se duerma por inactividad, el frontend hace un ping periódico al backend y lo mantiene activo. Todos los datos se almacenan en **Supabase** (PostgreSQL), usando sus **buckets** de Storage para las fotos de perfil. El acceso a la base de datos se gestiona con **Prisma** como ORM, lo que permite queries tipadas y migraciones controladas.

El **despliegue** está separado en dos plataformas: **Vercel** para el frontend y **Render** para el backend, reflejando una arquitectura real de producción donde cada capa escala de forma independiente.

</div>

<div class="lang-en">

## Project description

**InfluStats** is my final DAW project: a web platform designed for content creators and agencies who want to centralise and compare statistics from multiple social networks in a single control panel.

The app integrates data from **Instagram, YouTube, TikTok and Twitch**, letting users view any profile's performance, compare it with others (their own or third-party accounts), and make themselves discoverable to agencies or brands looking for collaborators.

## What does it do?

- **Unified dashboard** — all networks in a single view
- **Detailed stats** — followers, reach, engagement, views…
- **Profile comparisons** — compare your accounts against each other or against other creators
- **Profile directory** — get discovered by agencies and brands looking for influencers
- **Interactive charts** — bar, line and radar charts powered by Recharts
- **Auth & profiles** — user accounts with profile photos stored in Supabase Storage

## Technical decisions

The **frontend** is built with **Next.js** (App Router), using `"use client"` components wherever interactivity is needed. Charts are rendered with **Recharts** and the entire UI is styled with **Tailwind CSS**.

The **backend** is a custom API built with **Express + Node.js**. To prevent the Render service from sleeping due to inactivity, the frontend periodically pings the backend to keep it alive. All data is stored in **Supabase** (PostgreSQL), using its Storage **buckets** for profile photos. Database access is managed with **Prisma** as the ORM, enabling typed queries and controlled migrations.

**Deployment** is split across two platforms: **Vercel** for the frontend and **Render** for the backend — mirroring a real production architecture where each layer scales independently.

</div>
