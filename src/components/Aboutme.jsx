import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="ink-page ink-page-sobre-mi epaper-grain overflow-x-hidden px-4 pt-1.5 pb-16 flex items-center justify-center">
      <div className="w-full max-w-6xl">
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

        {/* Hoja de papel con marco tinta */}
        <div className="epaper-sheet">
          {/* Cabecera estilo lector */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#111111] px-5 py-3 text-[11px] font-bold tracking-[0.18em] uppercase">
            <span className="epaper-seal px-2 py-1">Perfil Nº 001</span>
            <span>Lector v1.0</span>
            <span aria-label="Batería al 100 por ciento">████ 100%</span>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-14 px-5 py-8 lg:px-10 lg:py-10">
            {/* Columna de texto */}
            <div className="lg:w-1/2 w-full">
              <e-text kind="label" as="p">
                QUIEN SOY
              </e-text>
              <e-title level="1">
                Sobre{" "}
                <span className="epaper-accent-underline">Abrahan Piloto</span>
              </e-title>

              <e-divider variant="solid" />

              <div className="max-w-[65ch] text-left text-[18px] leading-[1.75] tracking-wide">
                <e-text kind="prose" as="p">
                  Hola me llamo Abrahan y soy desarrollador de software. Ayudo a
                  negocios y emprendedores a destacar en internet con sitios
                  rápidos, seguros y efectivos.
                </e-text>
                <e-text kind="prose" as="p">
                  Desarrollo{" "}
                  <strong>
                    ecommerce, landing pages y sitios web a medida
                  </strong>{" "}
                  que no solo se ven bien, sino que cuentan tu historia, generan
                  confianza y convierten visitantes en clientes.
                </e-text>
                <e-text kind="prose" as="p">
                  Cada proyecto es una oportunidad de transformar una idea en
                  una experiencia digital que conecte con tu audiencia.
                </e-text>
              </div>

              {/* Etiquetas: el significado va en el texto, el naranja es redundante */}
              <div className="mt-6 flex flex-wrap gap-2">
                <e-tag>Ecommerce</e-tag>
                <e-tag>Landing pages</e-tag>
                <e-tag>Sitios a medida</e-tag>
                <e-tag>Chatbot con IA</e-tag>
              </div>

              <e-divider variant="dashed" label="FIN DEL CAPÍTULO" />
            </div>

            {/* Columna de retrato */}
            <div className="lg:w-1/2 w-full flex justify-center lg:mt-10">
              <e-card eyebrow="FIG. 01" title="Retrato">
                <div className="relative border-2 border-[#111111]">
                  <img
                    src="/yo.jpg"
                    alt="Retrato de Abrahan Piloto"
                    className="epaper-photo w-64 lg:w-80 object-contain"
                    loading="lazy"
                  />
                  <div
                    className="epaper-halftone pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  />
                </div>
                <e-text kind="small" as="p">
                  Abrahan Piloto, Desarrollador de software.
                </e-text>
              </e-card>
            </div>
          </div>

          {/* Pie de página */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-[#111111] px-5 py-3 text-[12px] font-bold tracking-[0.16em] uppercase">
            <span>Pág. 01 / 01</span>
            {/* <span>Sin animación</span>
            <span>Contraste tinta</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
