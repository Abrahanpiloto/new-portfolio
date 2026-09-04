import React from "react";
import Contact from "../components/Contact";

import { Analytics } from "@vercel/analytics/react";

// Pie e-paper local: solo para /contacto, mismo patrón que las demás rutas.
const ContactFooter = () => {
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

const Contactpage = () => {
  return (
    <div className="ink-page ink-page-contact epaper-grain pt-16 max-lg:pt-9 pb-0 min-h-screen flex flex-col">
      <Contact />
      <ContactFooter />
      <Analytics />
    </div>
  );
};

export default Contactpage;
