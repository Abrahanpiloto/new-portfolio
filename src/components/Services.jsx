import { Link } from "react-router-dom";
import React from "react";
import CardPrice from "./CardPrice";

const Services = () => {
  const services = [
    {
      title: "Landing page",
      description: "",
      included: [
        "Diseño 100% responsivo",
        "Optimización SEO básica",
        "Formulario de contacto",
        "Integración con redes sociales",
        "Hosting + dominio 1 año",
      ],
      price: "",
      image: "/service-landing-page.jpg",
    },
    {
      title: "Sitio web",
      description: "",
      included: [
        "Hasta 5 secciones personalizadas",
        "Diseño responsivo",
        "SEO avanzado",
        "Blog integrado",
        "Formulario avanzado",
        "Hosting + dominio 1 año",
      ],
      price: "",
      image: "/service-sitio-web.jpg",
    },
    {
      title: "Ecommerce (tienda virtual)",
      description: "",
      included: [
        "Hasta 50 productos",
        "Pasarela de pago (Stripe, PayPal, etc.)",
        "Gestor de inventario",
        "Diseño personalizado",
        "SEO para productos",
        "Hosting + dominio 1 año",
      ],
      price: "",
      note: "proximamente",
      image: "/service-ecommerce2.jpg",
    },
  ];
  return (
    <section className="min-h-screen bg-[#FCF9F5] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 py-12">
      <div className="absolute top-4 right-6 font-bold dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
          Precios y servicios
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mb-12">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-center">
                <CardPrice
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  included={service.included}
                  link={service.link}
                  code={service.code}
                  ad={service.ad}
                />
              </div>
              {/* {index === 1 && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
                  <span className="text-sm text-red-600 font-semibold mt-2 italic">
                    Ecommerce actualmente en construcción
                  </span>
                </div>
              )} */}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* <ButtonCta /> */}
    </section>
  );
};

export default Services;
