import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-yellow-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 px-4 py-12 flex items-center justify-center">
      <div className="absolute top-4 right-6 font-bold dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:gap-16 max-w-6xl">
        <div className="lg:w-1/2">
          <h1 className="lg:text-6xl text-4xl font-bold mb-4 text-center lg:text-left">
            ¡Hola! Soy Abrahan <span>👋</span>
          </h1>

          <p className="max-w-md text-center lg:text-left leading-relaxed text-lg">
            Soy desarrollador frontend. Me apasiona crear interfaces atractivas,
            rápidas y funcionales. Además de programar, disfruto diseñar
            experiencias que conecten con las personas. Este portafolio es una
            muestra de mis habilidades, dedicación y amor por el detalle. Me
            encanta la tecnología y el desarrollo de aplicaciones que ofrezcan
            soluciones. Estoy siempre en constante investigación y aprendizaje,
            afrontando retos y experiencias, y dispuesto a aprender e
            implementar nuevas herramientas tecnológicas. <br />
            <br />
            Considero que algunas de mis habilidades blandas son: curiosidad,
            perseverancia, resolución de conflictos, empatía, honestidad,
            puntualidad, entre otras.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="lg:w-1/2 flex justify-center lg:mt-30">
          <img
            src="/yo.jpg"
            alt="Foto de Abrahan"
            className="w-60 h-60 lg:w-90 lg:h-80 rounded-full lg:rounded-sm object-cover border-2 border-neutral-100 dark:border-neutral-100 lg:rotate-[15deg] dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
