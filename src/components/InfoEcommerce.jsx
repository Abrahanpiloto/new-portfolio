import React from "react";

const InfoEcommerce = () => {
  return (
    <section className=" bg-yellow-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 pb-4 flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-8 max-w-6xl">
        {/* Imagen a la izquierda */}
        <div className="lg:w-1/2 flex justify-center lg:mt-30">
          <img
            src="/ecommerce.jpg"
            alt="website"
            className="w-100 h-60 lg:w-140 lg:h-80  lg:rounded-sm object-cover dark:border-neutral-100  dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="lg:text-4xl text-3xl mb-4 text-center lg:text-left lg:mt-26">
            🛒 Ecommerce <br />
            <span
              className="text-[#36A0CA] text-4xl"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Tu tienda abierta 24/7
            </span>{" "}
          </h1>
          {/* <br /> */}
          <p className="max-w-xl text-center lg:text-left leading-relaxed text-lg">
            Piensa en la última vez que alguien quiso comprarte fuera de
            horario. Con un ecommerce,{" "}
            <span className="text-[#36A0CA]">esa venta no se pierde</span>{" "}
            porque tu tienda sigue funcionando aunque tú duermas.
            <br /> Es como tener un local abierto las 24 horas,{" "}
            <span className="text-[#36A0CA]">
              sin gastos de alquiler extra
            </span>{" "}
            , listo para atender a cualquier cliente desde cualquier lugar. Con
            un ecommerce puedes mostrar en detalle todo lo que vendes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoEcommerce;
