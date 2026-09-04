import { useState } from "react";

const Card = ({ title, description, link }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <e-card eyebrow="TRABAJO Nº 01" title={title || "Asistente RAG"}>
      {/* Imagen en escala de grises con marco tinta */}
      <div className="relative border-2 border-[#111111]">
        <img
          src="/ragapp/Macbook-Air2.webp"
          className="epaper-photo w-full h-auto object-contain"
          alt="Demostración del asistente RAG en una laptop"
          loading="lazy"
        />
        <div
          className="epaper-halftone pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
      </div>
      <e-text kind="small" as="p">
        FIG. 01 — Asistente RAG
      </e-text>

      {/* Descripción con Leer más / menos */}
      <div className={expanded ? "" : "line-clamp-3"}>
        <e-text kind="prose" as="p">
          {description}
        </e-text>
      </div>
      <div className="mt-3">
        <e-button variant="secondary" className="epaper-btn-sm" onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "LEER MENOS ↑" : "LEER MÁS ↓"}
        </e-button>
      </div>

      <e-divider variant="dashed" />

      {/* Acción: ver demo */}
      <div className="flex justify-center pb-1">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver demostración del asistente RAG"
          className="inline-flex min-h-[48px] items-center focus-visible:outline-3"
        >
          <e-button variant="primary" className="epaper-btn-orange">
            VER DEMO →
          </e-button>
        </a>
      </div>
    </e-card>
  );
};

export default Card;
