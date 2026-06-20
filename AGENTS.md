# AGENTS.md — Agent Guide for new-portfolio

## Project Overview

React 19 + Vite 7 portfolio site (SPA). No TypeScript. Single package, not a monorepo.
Deployed to Vercel. Language: Spanish (all content, routes, comments).

## Quick Commands

```bash
pnpm install       # install deps (pnpm is the package manager)
pnpm dev           # start dev server (Vite)
pnpm build         # production build → dist/
pnpm lint          # ESLint check
pnpm preview       # preview production build locally
```

No test suite, no typecheck, no formatter configured.

## Architecture

- **Entry**: `src/main.jsx` → `src/App.jsx` (BrowserRouter wrapping Routes)
- **Pages**: `src/pages/` — Home, Aboutmepage, ServicesPage, Workspage, Contactpage, Testimonialspage, EmailPage
- **Components**: `src/components/` — shared UI (Welcome, Footer, Cards, Services, Switch, etc.)
- **Hooks**: `src/hooks/animationScroll.js` — scroll-reveal animation hook
- **Utils**: `src/utils/themeColor.js` — theme-color meta tag helper
- **Analytics**: `src/analytics.js` — GA4 page view + event tracking (ID: G-P50479CQB3)

## Key Gotchas

### Tailwind CSS v4 + styled-components (mixed)

This project uses **Tailwind v4** via `@tailwindcss/vite` plugin (not PostCSS).
`index.css` imports `@import "tailwindcss"` — do NOT add `tailwind.config.js` (v4 uses CSS-based config via `@theme`).

Some components (e.g., `Switch.jsx`) use `styled-components` for complex CSS. New components should prefer Tailwind utility classes unless the styling is too complex.

### Dark Mode (class-based, not system)

Dark mode uses a `.dark` class on `<html>`, toggled by `src/components/Switch.jsx`.
Custom variant defined in `index.css`: `@custom-variant dark (&:where(.dark, .dark *))`.
Default is dark. Theme persists to `localStorage`.

### Routing

All routes are defined in `src/App.jsx`. `vercel.json` rewrites `/*` → `/` for SPA support.
Route paths are Spanish: `/sobre-mi`, `/servicios`, `/proyectos`, `/contacto`, `/testimonios`, `/form-email`.

### ESLint Config

Flat config (ESLint 9) at `eslint.config.js`. Ignores `dist/`.
Rule: `no-unused-vars` allows uppercase and underscore-prefixed vars (`^[A-Z_]`).

### `pnpm-workspace.yaml`

Contains build allow-list for `@swc/core` and `esbuild`. This is NOT a monorepo workspace — the file only controls pnpm build behavior.

## Files

- `index.html` — loads Google Fonts (Dancing Script, Montserrat), GA4 tag, dark class on `<html>`
- `public/` — static assets (images, PDFs, favicon, robots.txt)
- `public/_redirects` — Netlify-style redirects (may be legacy; Vercel uses vercel.json)
