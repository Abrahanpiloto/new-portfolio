import React from "react";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import { MdConstruction, MdAccessTime } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const CardPrice = ({
  image,
  title,
  description,
  link,
  ad,
  included = [],
  useCases = [],
  label,
  price,
  priceUsd,
}) => {
  return (
    <div className=" bg-neutral-900 shadow-lg dark:shadow-gray-500 flex flex-col transition-transform hover:scale-[1.02] max-w-md w-full relative">
      {/* ----- Etiqueta superior (nuevo) ----- */}
      {label && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#FF5500] text-white px-9 py-2  text-xl whitespace-nowrap z-10 shadow-md">
          {label}
        </span>
      )}
      {/* ----- Imagen ----- */}
      <div className="w-full h-56 sm:h-64 md:h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* ----- Contenido ------ */}
      <div className="flex flex-col justify-end p-6">
        <div>
          <h2 className="lg:text-2xl text-xl mb-3">{title}</h2>
          <p className="text-gray-300 mb-6 text-md">{description}</p>

          {/* Listado de características */}
          {included.length > 0 && (
            <>
              <p className="font-bold mb-2">Incluye:</p>
              <ul className="space-y-2 mb-6">
                {included.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <FaCheck className="text-green-500 text-xs flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* -------Casos de uso ------ */}
          {useCases.length > 0 && (
            <>
              <p className="font-bold mb-2">Casos de uso:</p>
              <ul className="space-y-2 mb-6">
                {useCases.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <LuDot className="text-2xl" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* -----Precios ------ */}
          {price && (
            <p className="text-xl text-[#FF5500] flex flex-col gap-1">
              S/ {price}
              {priceUsd && (
                <span className="text-sm text-gray-600 font-medium">
                  O si prefieres pagar en dólares:{" "}
                  <span className="font-semibold">USD {priceUsd}</span>
                </span>
              )}
            </p>
          )}

          {ad && (
            <span className="text-xs text-red-600 dark:text-red-400 italic mb-4 flex items-center gap-1">
              {ad}
              <MdConstruction className="text-xl text-white" />
            </span>
          )}
        </div>
        <div className="flex justify-center">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-sm transition-colors w-fit mt-4"
            >
              <BsWhatsapp className="text-xl" />
              Lo quiero, conversemos
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-600 font-semibold text-lg">
              <MdAccessTime className="text-2xl" />
              Próximamente...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
