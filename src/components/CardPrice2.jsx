import React from "react";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import { MdConstruction, MdAccessTime } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const CardPrice2 = ({
  image,
  title,
  description,
  link,
  label,
  onVerMas,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-900 shadow-lg dark:shadow-gray-500 flex flex-col transition-transform hover:scale-[1.02] max-w-md w-full relative">
      {/* ----- Etiqueta superior ----- */}
      {label && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4100] text-white px-9 py-2 text-xl whitespace-nowrap z-10 shadow-md">
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
          <p className="text-neutral-500 dark:text-gray-300 mb-4 text-md line-clamp-3">
            {description}
          </p>
        </div>

        {/* Botón Ver más */}
        <button
          onClick={onVerMas}
          className="text-sm font-medium text-[#FF4100] hover:text-[#E03A00] dark:text-[#FF6B35] dark:hover:text-[#FF4100] transition-colors mb-4 self-start"
        >
          Ver más →
        </button>

        <div className="flex justify-center">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-sm transition-colors w-fit"
            >
              <BsWhatsapp className="text-xl" />
              Lo quiero, conversemos
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 text-neutral-500 dark:text-gray-600 font-semibold text-lg">
              <MdAccessTime className="text-2xl" />
              Próximamente...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPrice2;
