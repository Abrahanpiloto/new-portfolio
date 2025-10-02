import React from "react";
// import { Link } from "react-router-dom";

const WhyWebsite = () => {
  return (
    <section className="min-h-screen bg-yellow-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 py-16 flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <h1 className="lg:text-4xl text-3xl font-bold mb-4 text-center lg:text-left">
            ¿Porque deberías estar en{" "}
            <span
              className="text-[#36A0CA] text-6xl"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              internet
            </span>{" "}
            ?
          </h1>
          {/* <br /> */}
          <p className="max-w-xl text-center lg:text-left leading-relaxed text-lg">
            {/* Un sitio web no es solo un lugar donde poner tu logo y tus datos de
            contacto. Es un escenario donde tu proyecto puede contar su historia
            y conectar con las personas que están buscando justo lo que tú
            ofreces. <br /> Piensa en esto: trabajas duro para levantar tu
            negocio, para dar un buen servicio, para que la gente confíe en ti.
            ¿No merece todo ese esfuerzo un espacio propio, diseñado a tu
            medida, donde puedas mostrar lo que te hace diferente? A diferencia
            de las redes sociales, tu web es tu terreno propio: nadie te la
            quita, nadie te cambia las reglas. <br /> Un sitio web bien hecho no
            solo informa; conquista, persuade y emociona. Hace que quien llegue
            diga: “este negocio me entiende, este profesional puede ayudarme”. Y
            eso es mucho más que tener presencia: es dejar huella. */}
            Tener presencia en internet no es solo “estar visible”, es contar tu
            historia en el lugar donde tus clientes te están buscando. Si tu
            marca no está online, pierdes oportunidades; si lo está de la manera
            correcta, inspiras confianza, conectas y vendes. <br /> La clave
            está en elegir la forma adecuada: ¿un{" "}
            <span className="text-[#36A0CA]">sitio web</span> para mostrar quién
            eres?, ¿un <span className="text-[#36A0CA]">ecommerce</span> para
            vender 24/7?, ¿o una{" "}
            <span className="text-[#36A0CA]">landing page</span> para captar
            clientes rápido?
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="lg:w-1/2 flex justify-center lg:mt-30">
          <img
            src="/website.jpg"
            alt="website"
            className="w-90 h-50 lg:w-140 lg:h-100  lg:rounded-sm object-cover dark:border-neutral-100  dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
