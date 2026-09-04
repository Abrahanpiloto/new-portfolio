import React from "react";

const CardPrice2 = ({ image, description, link, label, onVerMas, num }) => {
  return (
    <e-card eyebrow={`SERVICIO Nº 0${num ?? ""}`} title={label}>
      {/* ----- Imagen en escala de grises con marco tinta ----- */}
      <div className="relative border-2 border-[#111111]">
        <img
          src={image}
          alt={label}
          className="epaper-photo w-full h-56 sm:h-64 object-cover"
          loading="lazy"
        />
        <div
          className="epaper-halftone pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
      </div>
      <e-text kind="small" as="p">
        FIG. 0{num} — {label}
      </e-text>

      {/* ----- Descripción completa, sin recortes ----- */}
      <e-text kind="prose" as="p">
        {description}
      </e-text>

      {/* ----- Botón Ver más, siempre visible ----- */}
      <div className="mt-4">
        <e-button variant="secondary" onClick={onVerMas}>
          VER MÁS →
        </e-button>
      </div>

      <e-divider variant="dashed" />

      {/* ----- Acción: WhatsApp o estado Próximamente ----- */}
      <div className="flex justify-center pb-1">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar por WhatsApp sobre ${label}`}
            className="inline-flex min-h-[48px] items-center focus-visible:outline-3"
          >
            <e-button variant="primary" className="epaper-btn-orange">
              LO QUIERO, CONVERSEMOS
            </e-button>
          </a>
        ) : (
          <p className="inline-flex min-h-[48px] items-center gap-2 font-bold text-[16px]">
            <e-tag>ESTADO</e-tag>
            <span>Próximamente…</span>
          </p>
        )}
      </div>
    </e-card>
  );
};

export default CardPrice2;
