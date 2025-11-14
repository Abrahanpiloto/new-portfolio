import { Link } from "react-router-dom";
import React from "react";
import CardPrice from "./CardPrice";

const Services = () => {
  const services = [
    {
      title: "",
      description:
        "Página única diseñada estratégicamente para destacar una oferta específica y guiar al visitante hacia una acción clave, como comprar o dejar sus datos. Ideal para campañas, lanzamientos y captar nuevos clientes de forma rápida y efectiva.",
      included: [
        "Diseño original (no plantilla)",
        "Adaptado a los colores y logo de tu marca",
        "Diseño adaptable a todos los dispositivos",
        "Optimización SEO estándar",
        "Formulario de contacto",
        "Integración con redes sociales (boton de WhatsApp)",
        "Dominio y servidor/alojamiento por 1 año",
        "Certificado SSL",
      ],
      useCases: [
        "Registro en un webinar o evento presencial",
        "Reservar una asesoría/mentoría",
        "Cotizar un servicio",
        "Solicitar contacto",
        "Descargar un recurso (lead magnet)",
        "Inscribirse a un curso",
        "Anotarse a una lista de espera",
      ],
      price: "700",
      priceUsd: "220",
      image: "/infolanding.jpg",
      label: "Landing page",
      link: "https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20",
    },
    {
      title: "",

      description:
        "Imagina que un cliente escucha hablar de ti y te busca en internet. Si no encuentra nada sólido y consistente, la confianza se rompe. Pero si llega a tu sitio web, ve tu historia, tus servicios, testimonios, tus valores y cómo contactarte, sentirá que tu negocio es real y confiable. Un sitio web es esa casa digital que abre la puerta a nuevas oportunidades.",

      included: [
        "Diseño original (no plantilla)",
        "Adaptado a los colores y logo de tu marca",
        "Hasta 7 secciones personalizadas",
        "Diseño adaptable a todos los dispositivos",
        "Optimización SEO estándar",
        "Formulario de contacto",
        "Integración con redes sociales (boton de WhatsApp)",
        "Dominio y servidor/alojamiento por 1 año",
        "Certificado SSL",
      ],

      useCases: [
        "Presentar información completa del negocio o marca",
        "Mostrar galería de imágenes/videos, portafolio de trabajos o proyectos",
        "Exponer servicios, precios o planes",
        "Generar confianza con testimonios y reseñas",
        "Tener un canal de contacto formal",
        "Posicionarse en Google (SEO)",
        "Publicar contenido (blog) para atraer tráfico",
        "Mostrar ubicación física del negocio",
        "Reservar citas o consultas",
        "Centralizar información de redes sociales",
        "Mostrar historia, imágenes, valores y misión",
        "Exponer preguntas frecuentes (FAQ)",
        "Fortalecer branding e imagen profesional",
      ],

      price: "1400",
      priceUsd: "420",
      image: "/service-sitio-web.jpg",
      label: "Sitio web",
      link: "https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20",
    },
    {
      title: "",
      description:
        "Piensa en la última vez que alguien quiso comprarte fuera de horario. Con un ecommerce, esa venta no se pierde porque tu tienda sigue funcionando aunque tú duermas. Es como tener un local abierto las 24 horas todo el año, sin gastos de alquiler extra, listo para atender a cualquier cliente desde cualquier lugar. Con un ecommerce puedes mostrar en detalle todo lo que vendes.",
      included: [
        "Hasta 150 o más productos",
        "Diseño claro, agradable e intuitivo, para una experiencia de compra superior",
        "Pasarela de pago (Mercado pago, PayPal, ó locales según el país.)",
        "Gestor de inventario",
        "Diseño adaptable a todos los dispositivos",
        "100% administrable por su dueño",
        "Dominio y servidor/alojamiento por 1 año",
      ],
      price: "",
      priceUsd: "",
      note: "proximamente",
      image: "/ecommerce.jpg",
      label: "Ecommerce (tienda virtual)",
    },
  ];
  return (
    <section className="min-h-screen bg-neutral-950 text-white  px-4 py-12">
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
                  useCases={service.useCases}
                  link={service.link}
                  code={service.code}
                  ad={service.ad}
                  label={service.label}
                  price={service.price}
                  priceUsd={service.priceUsd}
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
