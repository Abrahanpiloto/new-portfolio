import React from "react";

const InfoWebsite = () => {
  return (
    <section className=" bg-yellow-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 pb-16 flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <h1 className="lg:text-4xl text-3xl mb-4 text-center lg:text-left lg:mt-28">
            🌐 Sitio web{" "}
            <span
              className="text-[#36A0CA] text-4xl"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Tu casa digital
            </span>{" "}
          </h1>
          {/* <br /> */}
          <p className="max-w-xl text-center lg:text-left leading-relaxed text-lg">
            Imagina que un cliente escucha hablar de ti y te busca en internet.
            <span className="text-[#36A0CA]">
              {" "}
              Si no encuentra nada sólido y consistente, la confianza se rompe.
            </span>{" "}
            Pero si llega a tu sitio web, ve tu historia, tus servicios y cómo
            contactarte, sentirá que tu negocio es real y confiable. <br /> Un
            sitio web es esa casa digital que{" "}
            <span className="text-[#36A0CA]">
              abre la puerta a nuevas oportunidades.
            </span>
          </p>
        </div>
        {/* Imagen a la derecha */}
        <div className="lg:w-1/2  justify-center lg:mt-30 hidden lg:flex">
          <img
            src="/infowebsite2.png"
            alt="website"
            className="w-100 h-60 lg:w-130 lg:h-80  lg:rounded-sm object-cover dark:border-neutral-100  dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoWebsite;
