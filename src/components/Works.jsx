import { Link } from "react-router-dom";
import React from "react";

const WorksPage = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-100">
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
          {/* <h1 className="text-3xl lg:text-5xl mb-8 text-center">
            Algunos de mis trabajos
          </h1> */}
          <h2 className="text-2xl lg:text-7xl mb-4 text-[#FF4100]">
            Próximamente...
          </h2>
          <p className="text-gray-400 text-lg max-w-md text-center mb-8 italic">
            Estoy preparando nuevos proyectos para mostrarte. ¡Vuelve pronto!
          </p>
          {/* <ButtonCta /> */}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
