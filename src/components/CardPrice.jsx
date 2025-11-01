import React from "react";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const CardPrice = ({ image, title, description, link, ad, included = [] }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 shadow-lg dark:shadow-gray-500 overflow-hidden flex flex-col transition-transform hover:scale-[1.02] max-w-md w-full">
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
          <h2 className="lg:text-2xl text-lg mb-3">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-md">
            {description}
          </p>
          {/* Listado de características */}
          {included.length > 0 && (
            <ul className="space-y-2 mb-6">
              {included.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <FaCheck className="text-green-500 text-xs flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {ad && (
            <span className="text-xs text-red-600 dark:text-red-400 italic mb-4 flex items-center gap-1">
              {ad}
              <MdConstruction className="text-xl text-white" />
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition-colors w-fit"
          >
            <FaExternalLinkAlt className="text-sm" />
            Ir al sitio
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
