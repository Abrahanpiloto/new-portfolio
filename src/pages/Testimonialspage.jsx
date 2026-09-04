import React from "react";
import Testimony from "../components/Testimony";
import { Analytics } from "@vercel/analytics/react";

// Pie e-paper local: solo para /testimonios, mismo patrón que las demás rutas.
const TestimonyFooter = () => {
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

const Testimonialspage = () => {
  return (
    <div className="ink-page ink-page-testimonios epaper-grain pt-16 max-lg:pt-9 pb-0 min-h-screen flex flex-col">
      <Testimony />
      <TestimonyFooter />
      <Analytics />
    </div>
  );
};

export default Testimonialspage;
