import { Link } from "react-router-dom";
import React from "react";
import Card from "../components/Card";

const WorksPage = () => {
  const description =
    "Imagina que tienes un asistente personal al que le has dado toda la información necesaria acerca de tu negocio y que puede responder cualquier pregunta del público, pero solo sobre lo que ofrece tu negocio, sin inventar nada ni tener alucinaciones extrañas, con la exactitud de quien memorizó cada palabra.\n Eso es un RAG (Retrieval-Augmented Generation), o en español: Generación Aumentada por Recuperación.\n Puedes ahorrarte un tiempo muy valioso dejando de contestar manualmente tú mismo cada una de las preguntas de las personas, que tal vez solo sean curiosos que no concreten ninguna venta ni cita.";

  const link = "https://ragapp-rosy.vercel.app/";
  return (
    <section className="min-h-screen bg-[#E8E8E8] dark:bg-[#21262A] text-neutral-900 dark:text-neutral-100">
      <div className="absolute top-4 right-6 font-bold text-xl dark:hover:text-[#FF4100] hover:text-blue-600 z-10">
        <Link to="/">Inicio</Link>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-2/5 h-[50vh] lg:h-screen">
          <img
            src="/wait3.jpg"
            alt="Próximamente"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-3/4 flex flex-col items-center justify-center px-8 py-12">
          <h1 className="text-3xl lg:text-5xl mb-8 text-center">
            Algunos de mis trabajos
          </h1>
          {/* <h2 className="text-2xl lg:text-7xl mb-4 text-[#FF4100] font-sans">
            Próximamente...
          </h2>
          <p className="text-neutral-500 dark:text-gray-400 text-lg max-w-md text-center mb-8 italic">
            Estoy preparando nuevos proyectos para mostrarte. ¡Vuelve pronto!
          </p> */}
          {/* <ButtonCta /> */}
          <Card description={description} link={link} />
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
