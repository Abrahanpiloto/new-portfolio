import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@marcomattes/epaper-components";
import "@marcomattes/epaper-components/styles/tokens.css";
import "@marcomattes/epaper-components/styles/base.css";
import "@marcomattes/epaper-components/styles/components.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import posthog from "posthog-js";

// PostHog: analítica web (pageviews, origen, sesiones).
// Requiere VITE_POSTHOG_KEY y VITE_POSTHOG_HOST en .env (y en Vercel)
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

if (POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: "2025-05-24",
    // SPA con react-router: pageview manual en App.jsx
    capture_pageview: false,
    capture_pageleave: true,
    // No enviar eventos desde desarrollo local para no contaminar datos
    opt_out_capturing_by_default:
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1",
    // Logs en consola solo en dev (ayuda a depurar)
    debug: import.meta.env.DEV,
  });
  // Exponer para depurar en consola del navegador: window.posthog.capture("$pageview")
  window.posthog = posthog;
} else if (import.meta.env.DEV) {
  console.warn("[PostHog] VITE_POSTHOG_KEY no definida, analítica desactivada");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
