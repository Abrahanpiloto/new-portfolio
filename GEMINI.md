# GEMINI.md — Instructions & Architecture Context

This file serves as the definitive guide and instructional context for all AI agents and developers working on the **Abrahan Soluciones Digitales** portfolio workspace. It outlines the project overview, key technologies, architecture, development conventions, and crucial gotchas.

---

## 1. Project Overview

The project is a modern, high-performance personal portfolio website for **Abrahan Soluciones Digitales**. It features rich interactive animations, dual-theme styling (defaulting to dark mode), and showcases services (pricing, details), projects, and testimonials.

### Core Stack
- **Framework:** React 19 (SPA, No TypeScript)
- **Build Tool:** Vite 7 (using `@vitejs/plugin-react-swc` for fast SWC-based HMR)
- **Styling:** Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin) + `styled-components` (legacy/mixed)
- **Animations:** `framer-motion` (for advanced interactive animations) and custom CSS IntersectionObserver scroll reveals
- **Analytics:** Google Analytics 4 (GA4) + Vercel Analytics
- **Package Manager:** `pnpm`
- **Deployment Platform:** Vercel

---

## 2. Directory Structure & Key Files

```text
/home/abrahan/Documentos/new-portfolio/
├── AGENTS.md                    # Pre-existing context summary for agents
├── GEMINI.md                    # THIS FILE — Foundational workspace guidelines (Priority)
├── eslint.config.js             # ESLint 9 configuration (Flat config)
├── index.html                   # HTML Entry point with Google Fonts, GA4 tracking scripts
├── package.json                 # Dependency definitions and scripts
├── pnpm-workspace.yaml          # pnpm build policies (build allow-list for SWC/esbuild)
├── vercel.json                  # SPA routing rules for Vercel
├── vite.config.js               # Vite + Tailwind v4 + React SWC plugin setup
├── public/                      # Static assets: images, resume (PDF), favicon, etc.
└── src/
    ├── main.jsx                 # Client entry point
    ├── App.jsx                  # Main router and component layout
    ├── index.css                # Global stylesheet containing Tailwind v4 imports, custom animations
    ├── analytics.js             # GA4 custom tracking functions
    ├── components/              # Reusable layout and interactive elements
    │   ├── Welcome.jsx          # Interactive homepage with Framer Motion hover link effect
    │   ├── Switch.jsx           # Theme toggle component using styled-components
    │   └── ...                  # Reusable presentation and interactive components
    ├── hooks/
    │   └── animationScroll.js   # Scroll animation hook utilizing IntersectionObserver (.reveal/.show)
    ├── pages/                   # Route components (Home, About, Services, Works, Contact, etc.)
    └── utils/
        └── themeColor.js        # Helper to update dynamic mobile browser meta theme-color tags
```

---

## 3. Development & Script Commands

Always use `pnpm` as the package manager for this project.

| Command | Action |
|:---|:---|
| `pnpm install` | Installs project dependencies. |
| `pnpm dev` | Starts the Vite development server locally with HMR. |
| `pnpm build` | Compiles the production build into the `dist/` directory. |
| `pnpm lint` | Runs ESLint 9 checks over JavaScript and JSX files. |
| `pnpm preview` | Serves the locally compiled production build (`dist/`) for verification. |

*Note: There is no unit testing or typescript compilation step configured in this workspace.*

---

## 4. Key Architecture & Behaviors

### 4.1 Routing Structure
All application routing is handled in `src/App.jsx` using `react-router-dom` (v7).
- All paths are defined in **Spanish**:
  - `/` → Home (`Home.jsx` rendering `<Welcome />` & `<Analytics />`)
  - `/sobre-mi` → About Page (`Aboutmepage.jsx`)
  - `/servicios` → Services Page (`ServicesPage.jsx`)
  - `/proyectos` → Works/Projects Page (`Workspage.jsx`)
  - `/contacto` → Contact Page (`Contactpage.jsx`)
  - `/testimonios` → Testimonials Page (`Testimonialspage.jsx`)
  - `/form-email` → Email Contact Page (`EmailPage.jsx`)
- To support deep linking on client-side routing, `vercel.json` contains rewrites mapping all fallback routes `/(.*)` back to `/index.html`.

### 4.2 Dark & Light Theme System
The application is styled with a dual-theme system that **defaults to Dark Mode**.
- **DOM Trigger:** Toggled by adding or removing the `.dark` class on the root `<html>` element in `index.html`.
- **State Persistence:** Saved in `localStorage` under the key `"theme"`.
- **Theme Color Helper:** `src/utils/themeColor.js` dynamically updates the `<meta name="theme-color">` meta tag in the HTML head depending on whether the dark theme (`#0a0a0a`) or light theme (`#fffbeb`) is active.
- **Toggle Component:** `src/components/Switch.jsx` handles the interactive transition, styled with local `styled-components`.

### 4.3 Styling & Tailwind CSS v4 Configuration
- **Tailwind v4 Integration:** Tailwind CSS is processed natively by Vite using the `@tailwindcss/vite` plugin.
- **Configuration:** There is **NO** `tailwind.config.js`. All design token overrides, keyframes, and custom variants are written directly inside CSS using Tailwind v4 directive syntax (e.g., inside `@theme` in `src/index.css`).
- **Dark Mode CSS Variant:** Defined as `@custom-variant dark (&:where(.dark, .dark *));` inside `src/index.css`.
- **Redundant Imports:** `src/index.css` has `@import "tailwindcss"` and stale `@tailwind base/components/utilities`. This is harmless redundancy but remember Tailwind v4 uses `@import "tailwindcss"`.
- **Best Practice:** When creating new components, **prefer Tailwind utility classes** for styling. Avoid writing new `styled-components` unless absolutely necessary for complex dynamic styling.

### 4.4 Scroll Animation Hook
- `src/hooks/animationScroll.js` implements a custom scroll-reveal hook utilizing the browser's `IntersectionObserver`.
- It monitors elements with the `.reveal` class and appends the `.show` class once they come into view.
- Transition animations are defined in `src/index.css` using `transition: all 0.9s ease`.

### 4.5 Analytics Integration
- **GA4:** Configured via custom tracking in `src/analytics.js` with Tracking ID `G-P50479CQB3`. Injected initially via inline `<script>` tags in `index.html`.
- **Vercel Analytics:** Uses `@vercel/analytics` and renders `<Analytics />` from `@vercel/analytics/react` on pages like `Home.jsx` to monitor usage.
- **Page Views:** Tracked globally via a `useEffect` hook in `src/App.jsx` listening to path changes from `useLocation` and firing `sendPageView()`.

---

## 5. Coding Style & Engineering Standards

- **Language:**
  - Code comments, page contents, UI copy, and routes **must be written in Spanish**.
  - General variable names and component files should remain in standard camelCase / PascalCase.
  - Exception: The `<html>` tag in `index.html` has `lang="en"` (keep as-is).
- **ESLint:**
  - Flat configuration rules are specified in `eslint.config.js`.
  - The `no-unused-vars` rule is configured to ignore uppercase and underscore-prefixed variables (regex: `^[A-Z_]`). Follow this style when declaring local variables that are intentionally unused or act as placeholders/imports.
- **Component Design:**
  - React components must be declared as functional components.
  - Strictly use React hooks for side effects and state.
  - Standard React 19 rules apply (e.g., compatibility with standard render paradigms, proper refs, and dynamic effects).
- **Form Handling:**
  - `@emailjs/browser` is pre-installed in the workspace. Use this library when integrating email sending functionality on the contact page or email forms.
- **Git Hygiene:**
  - Never stage or commit changes unless explicitly instructed by the user.
  - Follow the existing commit message structure (short, concise, stating why rather than what) when asked to commit.

---

## 6. Critical Warnings & Gotchas

1. **Do Not Touch package-lock.json/pnpm-workspace.yaml unless instructed:** `pnpm-workspace.yaml` does not denote a monorepo workspace. It is used specifically to configure the pnpm local engine build allowlist (`allowBuilds` for `@swc/core` and `esbuild`).
2. **Tailwind v4 Directives:** Do not create a `tailwind.config.js` file, as it will conflict with or be ignored by the `@tailwindcss/vite` compiler. If custom utility values, colors, or animations need to be declared, add them to `@theme` inside `src/index.css`.
3. **Double check import paths:** Assets are stored in both `public/` (accessible at the root `/` on build, e.g. `/yo.jpg`) and `src/assets/` (accessible via bundler imports). Make sure paths are correct.
4. **Vercel Single Page App Routing:** Ensure `vercel.json` is preserved to avoid `404 Not Found` errors when refreshing routes on Vercel deployment.
