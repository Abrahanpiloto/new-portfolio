import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="overflow-x-hidden overflow-y-hidden pt-12 bg-yellow-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4  flex items-center justify-center">
      <div className="absolute top-4 right-6 font-bold dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:gap-16 max-w-6xl">
        <div className="lg:w-1/2 animate-[var(--animate-slide-in-left)]">
          <h1 className="lg:text-5xl text-3xl mb-4 text-center lg:text-left">
            ¡Hola!<span>👋</span> <br /> Soy{" "}
            <span
              className="text-[#36A0CA] text-5xl"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Abrahan
            </span>
          </h1>
          {/* <br /> */}
          <p className="max-w-md text-center lg:text-left leading-relaxed text-lg">
            Soy desarrollador web freelance. Ayudo a negocios y emprendedores a
            destacar en internet con sitios rápidos, seguros y efectivos. <br />{" "}
            Me gusta que tu web no solo sea bonita o funcional, sino que cuente
            tu historia: quién eres, qué ofreces y por qué tus clientes deberían
            elegirte. <br /> Cada proyecto es una oportunidad de transformar una
            idea en una experiencia digital que conecte con tu audiencia, genere
            confianza y convierta visitantes en clientes. <br />
            <p></p>
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="lg:w-1/2 flex justify-center lg:mt-16 animate-[var(--animate-slide-in-right)]">
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
