import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@marcomattes/epaper-components";
import "@marcomattes/epaper-components/styles/tokens.css";
import "@marcomattes/epaper-components/styles/base.css";
import "@marcomattes/epaper-components/styles/components.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
