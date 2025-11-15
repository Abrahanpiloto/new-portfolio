import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import { updateThemeColor } from "./utils/themeColor";

// Inicializar tema al cargar la aplicación
// const initializeTheme = () => {
//   const savedTheme = localStorage.getItem("theme");
//   const isDark = savedTheme === "dark" || savedTheme === null;

//   // Aplicar clase CSS
//   if (isDark) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }

//   // Aplicar theme-color
//   updateThemeColor(isDark);
// };

// // Ejecutar inicialización
// initializeTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
