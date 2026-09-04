import { Link } from "react-router-dom";
import { useState } from "react";
import CardPrice2 from "./CardPrice2";
import ModalService from "./ModalService";

const Services2 = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "",
      description:
        "Es un chatbot que ha leído todos los documentos de tu negocio: manuales, políticas, catálogos, correos importantes, contratos, informes técnicos... y que puede responder cualquier pregunta sobre ellos en segundos, y 24/7 con la exactitud de quien memorizó cada palabra. Eso es un RAG (Retrieval-Augmented Generation), o en español: Generación Aumentada por Recuperación.",
      included: [
        "Integrar chat IA en la web existente",
        "Entrenado con textos del negocio (FAQ, servicios, horarios, políticas, etc)",
        "Adaptado a los colores y logo de tu marca",
        "Diseño adaptable a todos los dispositivos",
      ],
      useCases: [
        "Clínicas y consultorios: Pacientes preguntan sobre procedimientos, preparación para exámenes, horarios, documentos requeridos.",
        "Empresas de servicios: Clientes consultan contratos, garantías, políticas de devolución, manuales de uso.",
        "Instituciones educativas: Alumnos y padres buscan información de programas, requisitos, calendarios.",
        "Legal y consultoría: Consultas rápidas sobre normativas, cláusulas contractuales, procedimientos internos.",
        "Soporte técnico: Usuarios resuelven dudas frecuentes usando manuales y guías técnicas",
      ],
      price: "800",
      priceUsd: "220",
      image: "/ragapp/rag.webp",
      label: "Chat Inteligente (RAG)",
      link: "https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20",
    },
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
      price: "500",
      priceUsd: "135",
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
      price: "1000",
      priceUsd: "265",
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
    <section className="ink-page ink-page-servicios epaper-grain overflow-x-hidden px-4 pt-1.5 pb-16">
      <div className="w-full max-w-6xl mx-auto">
        {/* Barra superior: navegación siempre visible, sin hover-only */}
        <div className="flex justify-end mb-6">
          <Link
            to="/"
            aria-label="Volver al inicio"
            className="inline-flex min-h-[48px] items-center focus-visible:outline-3"
          >
            <e-button variant="secondary">← ÍNDICE</e-button>
          </Link>
        </div>

        <e-text kind="label" as="p">
          CAPÍTULO 02 — CATÁLOGO
        </e-text>
        <e-title level="1">Precios y servicios</e-title>

        <e-divider variant="solid" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 items-start">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <CardPrice2
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
                label={service.label}
                num={index + 1}
                onVerMas={() => setSelectedService(service)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Diálogo e-paper instantáneo, sin animaciones */}
      {selectedService && (
        <ModalService
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services2;
