import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdConstruction, MdAccessTime } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const ModalService = ({ service, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl w-[92vw] h-[90vh] max-w-6xl flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>

          {/* Imagen */}
          <div className="w-full h-64 md:w-[45%] md:h-full flex-shrink-0">
            <img
              src={service.image}
              alt={service.label}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contenido */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            {/* Etiqueta */}
            {service.label && (
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-gray-400 mb-2 block">
                {service.label}
              </span>
            )}

            {/* Título */}
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              {service.title || service.label}
            </h2>

            {/* Descripción */}
            <p className="text-neutral-600 dark:text-gray-300 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Incluye */}
            {service.included && service.included.length > 0 && (
              <div className="mb-6">
                <p className="font-bold text-neutral-900 dark:text-white mb-2">
                  Incluye:
                </p>
                <ul className="space-y-2">
                  {service.included.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-neutral-600 dark:text-gray-400"
                    >
                      <FaCheck className="text-green-500 text-xs flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Casos de uso */}
            {service.useCases && service.useCases.length > 0 && (
              <div className="mb-6">
                <p className="font-bold text-neutral-900 dark:text-white mb-2">
                  Casos de uso:
                </p>
                <ul className="space-y-2">
                  {service.useCases.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-neutral-600 dark:text-gray-400"
                    >
                      <LuDot className="text-2xl flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Precio */}
            {service.price && (
              <p className="text-xl text-[#FF4100] flex flex-col gap-1 mb-4">
                S/ {service.price}
                {service.priceUsd && (
                  <span className="text-sm text-neutral-500 dark:text-gray-500 font-medium">
                    O si prefieres pagar en dólares:{" "}
                    <span className="font-semibold">
                      USD {service.priceUsd}
                    </span>
                  </span>
                )}
              </p>
            )}

            {/* Ad */}
            {service.ad && (
              <span className="text-xs text-red-400 italic mb-4 flex items-center gap-1">
                {service.ad}
                <MdConstruction className="text-xl text-neutral-900 dark:text-white" />
              </span>
            )}

            {/* Botón de acción */}
            <div className="mt-6">
              {service.link ? (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition-colors"
                >
                  <BsWhatsapp className="text-xl" />
                  Lo quiero, conversemos
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 text-neutral-500 dark:text-gray-500 font-semibold text-lg">
                  <MdAccessTime className="text-2xl" />
                  Próximamente...
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalService;
