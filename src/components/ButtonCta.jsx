import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ButtonCta = () => {
  return (
    <a
      href="https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 w-78 lg:w-102 mx-auto flex justify-center items-center gap-1 bg-green-500 dark:bg-green-500 py-2 rounded-sm shadow-md hover:shadow-xl transition hover:bg-blue-700 hover:text-white mb-8 mt-8 dark:text-white border-1"
    >
      <FaWhatsapp className="text-3xl" />

      <span className="font-bold">Hablemos de tu negocio</span>
    </a>
  );
};

export default ButtonCta;
