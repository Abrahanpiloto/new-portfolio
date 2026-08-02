# Abrahan Soluciones Digitales – Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

Portfolio personal de **Abrahan** para presentar servicios de diseño y desarrollo de sitios web modernos, landing pages de alta conversión y tiendas ecommerce rápidas y seguras. Aplicación de una sola página (SPA) construida con React y Vite, con contenido y rutas en español.

## Características

- **Modo oscuro / claro** por clase en `<html>`, con persistencia en `localStorage` (clave `theme`).
- **Animaciones de scroll-reveal** con IntersectionObserver (`src/hooks/animationScroll.js`).
- **Rutas en español**: `/sobre-mi`, `/servicios`, `/proyectos`, `/contacto`, `/testimonios`, `/form-email`.
- **Formulario de contacto** que envía emails mediante EmailJS.
- **Botón de WhatsApp** para contacto directo.
- **Analítica**: Google Analytics 4 (`G-P50479CQB3`) + Vercel Analytics en cada página.

## Tecnologías

- React 19
- Vite 7
- Tailwind CSS v4 (plugin `@tailwindcss/vite`, sin `tailwind.config.js`)
- styled-components (usado en el componente `Switch.jsx`)
- react-router-dom 7
- framer-motion
- react-icons
- @emailjs/browser
- @vercel/analytics

## Rutas

| Ruta             | Página        |
| ---------------- | ------------- |
| `/`              | Inicio        |
| `/sobre-mi`      | Sobre mí      |
| `/servicios`     | Servicios     |
| `/proyectos`     | Proyectos     |
| `/contacto`      | Contacto      |
| `/testimonios`   | Testimonios   |
| `/form-email`    | Formulario    |

## Estructura del proyecto

```
├── public/                 # Estáticos (imágenes, PDFs, favicon, robots.txt)
├── src/
│   ├── components/         # Welcome, Footer, Cards, Services, Switch, Contact, FormEmail2, etc.
│   ├── pages/              # Home, Aboutmepage, ServicesPage, Workspage, Contactpage, ...
│   ├── hooks/              # animationScroll.js (scroll-reveal)
│   ├── analytics.js        # GA4
│   ├── App.jsx             # Rutas
│   └── main.jsx            # Entry point
├── index.html
├── vercel.json
└── package.json
```

## Instalación y desarrollo

Se usa **pnpm** como gestor de paquetes.

```bash
pnpm install   # instala dependencias
pnpm dev       # servidor de desarrollo Vite
pnpm build     # build de producción → dist/
pnpm lint      # ESLint (flat config, ESLint 9)
pnpm preview   # previsualiza el build de producción
```

No hay suite de tests ni typecheck.

## Variables de entorno

El formulario de contacto usa EmailJS. Crea un archivo `.env` en la raíz (ignorado por git) con:

| Variable                     | Descripción                          |
| ---------------------------- | ------------------------------------ |
| `VITE_EMAILJS_SERVICE_ID`    | ID del servicio de EmailJS           |
| `VITE_EMAILJS_TEMPLATE_ID`   | ID de la plantilla de EmailJS        |
| `VITE_EMAILJS_PUBLIC_KEY`    | Clave pública de EmailJS             |

## Despliegue

Desplegado en **Vercel**. El archivo `vercel.json` reescribe todas las rutas hacia `/` para soportar el enrutamiento de la SPA:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Ramas de trabajo: `development` (desarrollo) y `main` (producción).

## Autor

Abrahan – Soluciones Digitales
