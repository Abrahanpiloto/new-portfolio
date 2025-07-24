import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-yellow-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 px-4 py-12 flex flex-col items-center">
      {/* Botón de volver al inicio */}
      <div className="absolute top-4 right-6 font-bold dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>

      {/* Título */}
      <h1 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
        Contacto
      </h1>

      {/* Botones de contacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6  p-8 rounded">
        {/* GitHub */}
        <a
          href="https://github.com/Abrahanpiloto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white dark:bg-neutral-800 px-6 py-4 rounded-lg shadow-md hover:shadow-xl transition dark:hover:bg-neutral-700"
        >
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>

        {/* Descargar CV */}
        <a
          href="/abrahan_piloto_cv.pdf" // asegúrate de poner este archivo en la carpeta `public`
          download
          className="flex items-center gap-3 bg-white dark:bg-neutral-800 px-6 py-4 rounded-lg shadow-md hover:shadow-xl transition dark:hover:bg-neutral-700"
        >
          <FaFileDownload className="text-2xl" />
          <span>Descargar CV</span>
        </a>

        {/* Enviar Email */}
        <Link
          to="/form-email"
          className="flex items-center gap-3 bg-white dark:bg-neutral-800 px-6 py-4 rounded-lg shadow-md hover:shadow-xl transition dark:hover:bg-neutral-700"
        >
          <FaEnvelope className="text-2xl" />
          <span>Enviar Email</span>
        </Link>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abrahan-piloto-a683a0129"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white dark:bg-neutral-800 px-6 py-4 rounded-lg shadow-md hover:shadow-xl transition dark:hover:bg-neutral-700"
        >
          <FaLinkedin className="text-2xl" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
