import React from "react";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEnvelope,
} from "react-icons/fa";
import { trackEvent } from "../analytics";

const WHATSAPP_URL =
  "https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20";

const channels = [
  {
    label: "GitHub",
    href: "https://github.com/Abrahanpiloto",
    external: true,
    icon: <FaGithub className="text-2xl" aria-hidden="true" />,
  },
  {
    label: "Descargar CV",
    href: "/abrahan_piloto_cv.pdf",
    download: true,
    icon: <FaFileDownload className="text-2xl" aria-hidden="true" />,
  },
  {
    label: "Enviar Email",
    href: "/form-email",
    internal: true,
    icon: <FaEnvelope className="text-2xl" aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abrahan-piloto-a683a0129",
    external: true,
    icon: <FaLinkedin className="text-2xl" aria-hidden="true" />,
  },
];

// Tarjeta CTA e-paper con el mismo destino y evento GA4 que ButtonCta.
const ContactCta = () => {
  const handleClick = () => {
    trackEvent({
      action: "click_whatsapp",
      category: "contact",
      label: "contact_epaper",
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10">
      <e-card eyebrow="AVISO" title="Hablemos de tu negocio">
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

const Contact = () => {
  return (
    <section className="ink-page ink-page-contact epaper-grain overflow-x-hidden px-4 pt-1.5 pb-16 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto">
        {/* Barra superior: navegación siempre visible, sin hover-only */}
        <div className="flex justify-end mb-6">
          <Link
            to="/"
            aria-label="Volver al inicio"
            className="inline-flex min-h-[48px] items-center focus-visible:outline-3"
          >
            <e-button variant="secondary">← ÍNDICE</e-button>
          </Link>
        </div>

        <e-text kind="label" as="p">
          CAPÍTULO 05 — CONTACTO
        </e-text>
        <e-title level="1">Contacto</e-title>

        <e-divider variant="solid" />

        {/* Canales de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
          {channels.map(({ label, href, external, internal, download, icon }) => {
            const content = (
              <e-button variant="secondary">
                <span className="inline-flex items-center gap-3">
                  {icon}
                  {label.toUpperCase()}
                </span>
              </e-button>
            );
            const cls =
              "inline-flex min-h-[48px] items-center justify-center focus-visible:outline-3";
            if (internal) {
              return (
                <Link
                  key={label}
                  to={href}
                  aria-label={label}
                  className={cls}
                >
                  {content}
                </Link>
              );
            }
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                download={download || undefined}
                aria-label={label}
                className={cls}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>

      <ContactCta />
    </section>
  );
};

export default Contact;
