import { Link } from "react-router-dom";
import React from "react";
import CardPrice from "./CardPrice";

const Services = () => {
  const services = [
    {
      title: "",
      description:
        "Su objetivo: convertir visitas en clientes. Sin distracciones, guía al usuario hacia una acción clara como comprar, registrarse o agendar. Es ideal para campañas de marketing (Facebook, Instagram o Tiktok), lanzamientos o promociones, porque convierte cada clic en una oportunidad real. A diferencia de un sitio web completo, la landing concentra toda la atención en un mensaje directo y un llamado a la acción poderoso. Es el espacio perfecto para mostrar una oferta irresistible y medir resultados de manera inmediata.",
      included: [
        "Diseño 100% responsivo",
        "Optimización SEO básica",
        "Formulario de contacto",
        "Integración con redes sociales (boton de WhatsApp)",
        "Hosting ilimitado",
        "Dominio 1 año",
      ],
      price: "700",
      image: "/infolanding.jpg",
      label: "Landing page",
      link: "https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20",
    },
    {
      title: "",
      description:
        "Imagina que un cliente escucha hablar de ti y te busca en internet. Si no encuentra nada sólido y consistente, la confianza se rompe. Pero si llega a tu sitio web, ve tu historia, tus servicios, testimonios y cómo contactarte, sentirá que tu negocio es real y confiable. Un sitio web es esa casa digital que abre la puerta a nuevas oportunidades.",
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
      label: "Sitio web",
      link: "https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20",
    },
    {
      title: "",
      description:
        "Piensa en la última vez que alguien quiso comprarte fuera de horario. Con un ecommerce, esa venta no se pierde porque tu tienda sigue funcionando aunque tú duermas. Es como tener un local abierto las 24 horas, sin gastos de alquiler extra, listo para atender a cualquier cliente desde cualquier lugar. Con un ecommerce puedes mostrar en detalle todo lo que vendes.",
      included: [
        "Hasta 150 o más productos",
        "Pasarela de pago (Mercado pago, PayPal, ó locales según el país.)",
        "Gestor de inventario",
        "Diseño responsivo",
        "100% administrable por su dueño",
        "SEO para productos",
        "Hosting + dominio 1 año",
      ],
      price: "",
      note: "proximamente",
      image: "/ecommerce.jpg",
      label: "Ecommerce (tienda virtual)",
    },
  ];
  return (
    <section className="min-h-screen bg-[#FCF9F5] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 py-12">
      <div className="absolute top-4 right-6 font-bold text-xl dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-5xl mt-12 mb-22 text-center">
          Precios y servicios
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-12 mb-12 items-start">
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
                  label={service.label}
                  price={service.price}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
