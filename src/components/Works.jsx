import { Link } from "react-router-dom";
import React from "react";
import Card from "../components/Card";

const WorksPage = () => {
  const description =
    "Imagina que tienes un asistente personal al que le has dado toda la información necesaria acerca de tu negocio y que puede responder cualquier pregunta del público, pero solo sobre lo que ofrece tu negocio, sin inventar nada ni tener alucinaciones extrañas, con la exactitud de quien memorizó cada palabra.\n Eso es un RAG (Retrieval-Augmented Generation), o en español: Generación Aumentada por Recuperación.\n Puedes ahorrarte un tiempo muy valioso dejando de contestar manualmente tú mismo cada una de las preguntas de las personas, que tal vez solo sean curiosos que no concreten ninguna venta ni cita.";

  const link = "https://ragapp-rosy.vercel.app/";
  return (
    <section className="ink-page ink-page-works epaper-grain overflow-x-hidden px-4 pt-1.5 pb-16">
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
          CAPÍTULO 04 — PORTAFOLIO
        </e-text>
        <e-title level="1">Algunos de mis trabajos</e-title>

        <e-divider variant="solid" />

        <div className="max-w-2xl mx-auto">
          <Card description={description} link={link} />
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
