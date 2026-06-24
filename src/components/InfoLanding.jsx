import React from "react";
import ButtonCta from "./ButtonCta";

const InfoLanding = () => {
  return (
    <section className=" bg-[#FCF9F5] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 pb-8 flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-8 max-w-6xl">
        {/* Imagen a la izquierda */}

        <div className="lg:w-1/2">
          <h1 className="lg:mt-22 lg:text-4xl text-3xl  mb-4 text-center lg:text-left">
            🎯 Landing page <br />
            <span
              className="text-[#36A0CA] text-4xl"
            >
              Tu arma de precisión
            </span>{" "}
          </h1>
          {/* <br /> */}
          <p className="max-w-xl text-center lg:text-left leading-relaxed text-lg">
            Una landing page está hecha{" "}
            <span className="text-[#36A0CA]"> para un solo objetivo:</span>{" "}
            convertir visitas en clientes. Sin distracciones, guía al usuario
            hacia una acción clara como comprar, registrarse o agendar.
            <br /> Es ideal para campañas de marketing, lanzamientos o
            promociones, porque convierte cada clic en una oportunidad real. A
            diferencia de un sitio web completo, la landing concentra toda la
            atención en un mensaje directo y un llamado a la acción poderoso. Es
            el espacio perfecto para mostrar una oferta irresistible y medir
            resultados de manera inmediata.
            <span className="text-[#36A0CA]"></span>
          </p>
        </div>
        <div className="lg:w-1/2 justify-center lg:mt-30 hidden lg:flex">
          <img
            src="/infolanding.jpg"
            alt="website"
            className="w-100 h-60 lg:w-140 lg:h-80  lg:rounded-sm object-cover dark:border-neutral-100  dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoLanding;
