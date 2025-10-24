import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const Card = ({ image, title, description, link, ad }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02] max-w-md w-full">
      {/* Imagen */}
      <div className="w-full h-56 sm:h-64 md:h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-center"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-end p-6">
        <div>
          <h2 className="lg:text-2xl text-lg mb-3">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-md">
            {description}
          </p>

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

export default Card;
