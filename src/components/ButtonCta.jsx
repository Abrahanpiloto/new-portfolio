import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ButtonCta = () => {
  return (
    <a
      href="https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio"
      target="_blank"
      rel="noopener noreferrer"
      className="w-78 lg:w-102 mx-auto flex justify-center items-center gap-1 bg-[#36A0CA] py-3 rounded-lg shadow-md hover:shadow-xl transition hover:bg-blue-700 mb-8 text-white"
    >
      <FaWhatsapp className="text-3xl" />

      <span>Hablemos de tu negocio</span>
    </a>
  );
};

export default ButtonCta;
