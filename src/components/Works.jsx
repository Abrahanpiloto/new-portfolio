// import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Saas Flowinggo",
    description:
      "Un producto Sass, realice su landingpage usando React y Tailwindcss, con base en un Figma proporcionado por el cliente.",
    image: "/flowinggo.png",
    link: "https://flowinggo.com/home",
  },
  {
    title: "Valenciana Ecommerce",
    description:
      "Ecommerce completo realizado en React, Tailwindcss y Supabase como base de datos",
    image: "/valenciana.png",
    link: "https://valencianastore.netlify.app",
  },
  {
    title: "LinkBridge",
    description:
      "Es una app estilo LinkTree desarrollada en React y Tailwindcss, con base de datos y autenticacion con cuenta de Google en Firebase, totalmente funcional y en linea para uso publico.",
    image: "/linkbridge.png",
    link: "https://linkbridge.netlify.app",
  },
];

const WorksPage = () => {
  return (
    <section className="min-h-screen bg-yellow-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 py-12">
      <div className="absolute top-4 right-6 font-bold dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
          Algunos de mis trabajos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h2 className="text-xl dark:text-white font-semibold mb-2 text-center">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 text-center">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
