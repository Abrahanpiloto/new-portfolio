import React from "react";
import Services2 from "../components/Services2";
import { Analytics } from "@vercel/analytics/react";

// Pie e-paper local: solo para /servicios2, mismo patrón que Sobre mí.
const ServicesFooter = () => {
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

const ServicesPage2 = () => {
  return (
    <div className="ink-page ink-page-servicios epaper-grain pt-16 max-lg:pt-9 pb-0 min-h-screen flex flex-col">
      <Services2 />
      <ServicesFooter />
      <Analytics />
    </div>
  );
};

export default ServicesPage2;
