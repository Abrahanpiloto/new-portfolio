# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 19 + Vite 7, Tailwind CSS v4 (plugin `@tailwindcss/vite`, sin `tailwind.config.js`), react-router-dom 7, styled-components (solo `Switch.jsx`), framer-motion (solo `Welcome.jsx`), react-icons, @emailjs/browser, @vercel/analytics + GA4 (`G-P50479CQB3`). Deploy en Vercel. Contenido, rutas y comentarios en español.

## Users

- **Primarios:** dueños de pequeñas y medianas empresas hispanohablantes (mayormente Perú) que buscan presencia web — landing page, sitio web, ecommerce o chatbot IA — para atraer y convertir más clientes.
- **Secundarios:** contactos que llegan por recomendación/referidos y por redes sociales (Instagram, Threads).

## Product Purpose

Portafolio y sitio comercial de Abrahan (Soluciones Digitales): presenta los servicios de diseño y desarrollo web, muestra proyectos y testimonios, publica precios y convierte visitantes en clientes mediante WhatsApp y un formulario de contacto por EmailJS.

## Positioning

Diseño original a medida (no plantillas) con foco en conversión: sitios y landing pages que convierten visitantes en clientes. Precios claros y publicados (en soles y USD), sin sorpresas. Ofrece además diferenciadores técnicos como chatbot IA (RAG) entrenado con documentos del negocio.

## Operating Context

El visitante llega por Google, redes sociales o referidos, navega servicios y precios, revisa proyectos y testimonios para validar confianza, y contacta por botón de WhatsApp (+51 916 058 633) o formulario (EmailJS). El propietario administra el contenido en una SPA con rutas en español y analítica GA4 + Vercel.

## Capabilities and Constraints

- **Servicios con precio publicado:** Chat Inteligente RAG (S/ 800 / $220), Landing page (S/ 500 / $135), Sitio web (S/ 1000 / $265), Ecommerce (próximamente).
- Modo oscuro/claro por clase `.dark` en `<html>`, con persistencia en `localStorage` (clave `theme`), por defecto oscuro.
- Animaciones de scroll-reveal con IntersectionObserver (`src/hooks/animationScroll.js`).
- Rutas en español: `/sobre-mi`, `/servicios`, `/proyectos`, `/contacto`, `/testimonios`, `/form-email`; `vercel.json` reescribe `/*` → `/`.
- Sin backend propio; EmailJS para envío de correos. Sin suite de tests ni typecheck.
- Excepción técnica: `<html lang="en">` en `index.html` (no `es`).
- Ecommerce aparece como "próximamente": no inventar precio ni disponibilidad.

## Brand Commitments

- Nombre: **Abrahan – Soluciones Digitales**.
- Marca **PixelDev** (logo `pixeldev-logo.png`) acreditada en el footer como creador.
- WhatsApp: **+51 916 058 633** (enlaces `wa.me` desde servicios).
- Redes: Instagram y Threads **@abrahan.freelancer**.
- Contenido, rutas y comentarios en **español**.
- Precios publicados en soles (S/) y dólares (USD) son definitivos.

## Evidence on Hand

- Proyectos/trabajos con imágenes en `public/` (`flowinggo.png`, `ceoflowinggo.jpg`, `linkbridge.png`, `peluqueria.png`, `valenciana.png`, `rag.webp`, `infolanding.jpg`, `invitacion.png`, `pizarras-precios.jpg`, etc.).
- Testimonios reales (página `/testimonios`).
- CV descargable: `public/abrahan_piloto_cv.pdf`.
- Ausencias a respetar: no inventar testimonios, clientes, métricas ni casos de éxito no presentes en el repo.

## Product Principles

1. El diseño original y a medida es la ventaja central; nunca caer en plantillas genéricas.
2. Toda pieza debe orientarse a conversión: cada página guía al visitante hacia el contacto.
3. Precios y propuestas claras, publicadas y sin sorpresas; la transparencia construye confianza.
4. Los proyectos y testimonios reales son la prueba; nunca fabricar evidencia.
5. El producto se comunica en español, en el idioma del negocio del cliente.
