import React from "react";
import Aboutme from "../components/Aboutme";
import { Analytics } from "@vercel/analytics/react";

import { trackEvent } from "../analytics";

const WHATSAPP_URL =
  "https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20";

// CTA e-paper: solo para /sobre-mi. Mismo destino y evento GA4 que ButtonCta,
// pero con marco tinta, sin colores semánticos ni animaciones.
const AboutCta = () => {
  const handleClick = () => {
    trackEvent({
      action: "click_whatsapp",
      category: "contact",
      label: "about_epaper",
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10">
      <e-card eyebrow="AVISO Nº 02" title="Hablemos de tu negocio">
        <div className="flex flex-col items-center text-center">
          <e-text kind="prose" as="p">
            Cuéntame tu idea por WhatsApp y la convertimos en un sitio rápido,
            seguro y efectivo.
          </e-text>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            aria-label="Hablar por WhatsApp sobre tu negocio"
            className="inline-flex min-h-[48px] items-center mt-4 focus-visible:outline-3"
          >
            <e-button variant="primary" className="epaper-btn-orange">
              HABLEMOS POR WHATSAPP →
            </e-button>
          </a>
          <e-text kind="small" as="p">
            Respuesta directa. Sin formularios largos.
          </e-text>
        </div>
      </e-card>
    </div>
  );
};

// Pie e-paper: solo para /sobre-mi. Replica el contenido del Footer global
// con estilo tinta sobre papel.
const AboutFooter = () => {
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

const Aboutmepage = () => {
  return (
    <div className="ink-page ink-page-sobre-mi epaper-grain pt-16 max-lg:pt-9 pb-0 min-h-screen flex flex-col">
      <Aboutme />
      <AboutCta />
      <AboutFooter />
      <Analytics />
    </div>
  );
};

export default Aboutmepage;
