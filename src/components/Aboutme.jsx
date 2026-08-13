import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="overflow-x-hidden overflow-y-hidden pt-12 bg-[#E8E8E8] dark:bg-[#21262A] text-neutral-900 dark:text-neutral-100 px-4 flex items-center justify-center">
      <div className="absolute text-xl top-4 right-6 font-bold hover:text-[#FF4100] text-neutral-900 dark:text-white">
        <Link to="/">Inicio</Link>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:gap-16 max-w-6xl">
        <div className="lg:w-1/2 animate-[var(--animate-slide-in-left)]">
          <h1 className="lg:text-5xl text-3xl mb-4 text-center lg:text-left">
            Sobre{" "}
            <img
              src="/pixeldev-logo.png"
              alt="PixelDev"
              className="inline-block h-9 lg:h-14 w-auto align-middle"
            />
          </h1>
          <p className="max-w-md text-center lg:text-left leading-relaxed text-lg">
            <span className="font-bold">PixelDev</span> es un estudio de
            desarrollo web fundado por{" "}
            <span className="font-bold">Abrahan Piloto</span>. Ayudamos a
            negocios y emprendedores a destacar en internet con sitios rápidos,
            seguros y efectivos. <br /> <br /> Creamos{" "}
            <span className="font-bold">
              ecommerce, landing pages y sitios web a medida
            </span>{" "}
            que no solo se ven bien, sino que cuentan tu historia, generan
            confianza y convierten visitantes en clientes. <br /> <br /> Cada
            proyecto es una oportunidad de transformar una idea en una
            experiencia digital que conecte con tu audiencia.
          </p>
        </div>

        {/* Logo a la derecha */}
        <div className="lg:w-1/2 flex justify-center lg:mt-16 animate-[var(--animate-slide-in-right)]">
          <img
            src="/pixeldev-logo.jpg"
            alt="Logo de PixelDev"
            className="w-64 lg:w-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
