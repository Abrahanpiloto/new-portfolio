import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Testimony = () => {
  return (
    <section className="ink-page ink-page-testimonios epaper-grain overflow-x-hidden px-4 pt-1.5 pb-16">
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
          CAPÍTULO 03 — VOCES
        </e-text>
        <e-title level="1">Testimonios</e-title>

        <e-divider variant="solid" />

        {/* Testimonio */}
        <div className="max-w-2xl mx-auto">
          <e-card eyebrow="TESTIMONIO Nº 01" title="Alain Piloto">
            {/* Parte superior: foto, info y estrellas */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4 justify-center sm:justify-start">
                <div className="relative border-2 border-[#111111] shrink-0">
                  <img
                    src="/ceoflowinggo.jpg"
                    alt="Alain Piloto"
                    className="epaper-photo w-24 h-24 object-cover"
                    loading="lazy"
                  />
                  <div
                    className="epaper-halftone pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <e-text kind="body" as="p">
                    <strong>Alain Piloto</strong>
                  </e-text>
                  <e-text kind="small" as="p">
                    CEO & Fundador de Flowinggo
                  </e-text>
                </div>
              </div>

              {/* Estrellas en tinta, sin color semántico */}
              <div
                className="flex justify-center sm:justify-end text-[#111111]"
                role="img"
                aria-label="Calificación: 5 de 5 estrellas"
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-xl" aria-hidden="true" />
                ))}
              </div>
            </div>

            <e-divider variant="dashed" />

            {/* Texto del testimonio */}
            <div className="border-l-4 border-[#111111] pl-4">
              <e-text kind="prose" as="p">
                “Trabajar con Abrahan fue una experiencia excelente. Captó mi
                idea al instante y la plasmó con mucho profesionalismo. Fue muy
                atento durante todo el proceso y el resultado fue mejor de lo
                esperado.”
              </e-text>
            </div>
          </e-card>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
