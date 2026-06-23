# AGENTS.md — new-portfolio

React 19 + Vite 7 SPA. No TypeScript. Single package (not monorepo). Deployed to Vercel.
Content, routes, comments: **Spanish**. Exception: `<html lang="en">` in `index.html` (not `es`).

## Commands

```bash
pnpm install       # deps; pnpm is the package manager
pnpm dev           # Vite dev server
pnpm build         # → dist/
pnpm lint          # ESLint check (flat config, ESLint 9)
pnpm preview       # preview production build
```

No test suite, no typecheck, no formatter.

## Architecture

- **Entry**: `src/main.jsx` → `src/App.jsx` (`BrowserRouter` wrapping `<Routes>`)
- **Pages**: `src/pages/` — Home, Aboutmepage, ServicesPage, Workspage, Contactpage, Testimonialspage, EmailPage
- **Components**: `src/components/` — Welcome, Footer, Cards, Services, Switch, Contact, etc.
- **Hooks**: `src/hooks/animationScroll.js` — IntersectionObserver scroll-reveal (uses `.reveal`/`.show` CSS in `index.css`)
- **Analytics**: GA4 via `src/analytics.js` (ID: `G-P50479CQB3`) + `@vercel/analytics/react` component on every page

## Key Gotchas

### Tailwind CSS v4 + styled-components (mixed)

Uses `@tailwindcss/vite` plugin (not PostCSS). No `tailwind.config.js` — v4 uses `@theme` in CSS.
`src/index.css` has both `@import "tailwindcss"` (v4) AND stale `@tailwind base/components/utilities` (v3) — harmless redundancy.
New components should prefer Tailwind utility classes. `styled-components` used only in `Switch.jsx` for complex CSS.

### Dark Mode (class-based, not system)

`.dark` class on `<html>`, toggled by `src/components/Switch.jsx`. Custom variant: `@custom-variant dark (&:where(.dark, .dark *))`. Default is dark. Persists to `localStorage` key `theme`.

### Routing

All routes in `src/App.jsx`. `vercel.json` rewrites `/*` → `/`. Paths are Spanish: `/sobre-mi`, `/servicios`, `/proyectos`, `/contacto`, `/testimonios`, `/form-email`.

### ESLint

Flat config `eslint.config.js` (ESLint 9). Ignores `dist/`. `no-unused-vars` allows uppercase & underscore-prefixed vars (`^[A-Z_]`).

### `pnpm-workspace.yaml`

Contains build allow-list for `@swc/core` and `esbuild`. NOT a monorepo workspace — only controls pnpm build behavior.

### Dependencies in use

- **framer-motion**: used only in `Welcome.jsx` (mouse-tracking parallax)
- **react-icons**: used across components (Fa, Fi, Si, Md, Bs, Lu, Fa6)
- **@vercel/analytics**: `<Analytics />` rendered on every page (imported individually)
- **@emailjs/browser**: listed in `package.json` but not imported in current code

## Files of note

- `index.html` — loads Google Fonts (Dancing Script, Montserrat), GA4 tag, `.dark` class, `lang="en"`
- `public/` — static assets (images, PDFs, favicon, robots.txt)
