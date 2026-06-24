import React from "react";
// import { Link } from "react-router-dom";
// import { useAnimationScroll } from "../hooks/animationScroll";

const WhyWebsite = () => {
  // const ref = useAnimationScroll();
  return (
    <section
      // ref={ref}
      className=" bg-[#FCF9F5] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 lg:pb-0 pb-4 flex items-center justify-center"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-8 max-w-6xl">
        {/* Imagen a la derecha */}
        <div className="lg:w-1/2 flex justify-center lg:mt-30 animate-[var(--animate-slide-in-right)]">
          <img
            src="/website.jpg"
            alt="website"
            className="w-90 h-50 lg:w-140 lg:h-100  lg:rounded-sm object-cover dark:border-neutral-100  dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          />
        </div>
        <div className="lg:w-1/2 mt-10  animate-[var(--animate-slide-in-left)]">
          <h1 className="lg:text-4xl text-3xl mb-4 text-center lg:text-left lg:mt-16">
            ¿Porque deberías estar en{" "}
            <span
              className="text-[#36A0CA] text-5xl"
              style={{ fontFamily: "'Google Sans Code', sans-serif" }}
            >
              internet
            </span>{" "}
            ?
          </h1>
          {/* <br /> */}
          <p className="max-w-xl text-center lg:text-left leading-relaxed text-lg">
            Tener presencia en internet no es solo “estar visible”, es contar tu
            historia en el lugar donde tus clientes te están buscando.{" "}
            <span className="text-[#36A0CA]">
              Si tu marca no está online, pierdes oportunidades;{" "}
            </span>
            si lo está de la manera correcta, inspiras confianza, conectas y
            vendes. <br /> La clave está en elegir la forma adecuada: un{" "}
            <span className="text-[#36A0CA]">sitio web</span> para mostrar quién
            eres, un <span className="text-[#36A0CA]">ecommerce</span> para
            vender 24/7, o una{" "}
            <span className="text-[#36A0CA]">landing page</span> para captar
            clientes rápido
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
