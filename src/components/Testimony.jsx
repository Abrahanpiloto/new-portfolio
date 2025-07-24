import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Testimony = () => {
  return (
    <section className="min-h-screen bg-yellow-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-4 py-12">
      {/* Botón de volver al inicio */}
      <div className="absolute top-4 right-6 font-bold dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>

      {/* Título */}
      <h1 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
        Testimonios
      </h1>

      {/* Testimonio */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 md:p-8 transition-colors duration-500 border border-gray-200">
        {/* Parte superior: imagen, info y estrellas */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {/* Foto + nombre y cargo */}
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            {/* Foto */}
            <img
              src="/ceoflowinggo.jpg"
              alt="Alain Piloto"
              className="w-30 h-30 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-600"
            />
            {/* Info */}
            <div className="text-center sm:text-left">
              <p className="font-semibold text-lg">Alain Piloto</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                CEO & Fundador de Flowinggo
              </p>
            </div>
          </div>

          {/* Estrellas */}
          <div className="flex justify-center sm:justify-end text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-xl" />
            ))}
          </div>
        </div>

        {/* Texto del testimonio */}
        <p className="text-base leading-relaxed text-center sm:text-left">
          “Trabajar con Abrahan fue una experiencia excelente. Captó mi idea al
          instante y la plasmó con mucho profesionalismo. Fue muy atento durante
          todo el proceso y el resultado fue mejor de lo esperado.”
        </p>
      </div>
    </section>
  );
};

export default Testimony;
