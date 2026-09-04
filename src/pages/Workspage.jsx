import React from "react";
import Works from "../components/Works";
import { Analytics } from "@vercel/analytics/react";

// Pie e-paper local: solo para /proyectos, mismo patrón que las demás rutas.
const WorksFooter = () => {
  return (
    <footer className="w-full mt-auto pt-24 pb-5">
      <div className="max-w-6xl mx-auto px-5 py-4">
        <p className="text-[16px] text-center">
          Creado por{" "}
          <span className="epaper-accent-underline font-bold">
            Abrahan Piloto
          </span>
        </p>
      </div>
    </footer>
  );
};

const Workspage = () => {
  return (
    <div className="ink-page ink-page-works epaper-grain pt-16 max-lg:pt-9 pb-0 min-h-screen flex flex-col">
      <Works />
      <WorksFooter />
      <Analytics />
    </div>
  );
};

export default Workspage;
