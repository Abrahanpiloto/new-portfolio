import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "../analytics";
import { sileo } from "sileo";

const FormEmail2 = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          sileo.success({
            title: "Mensaje enviado",
            description: "Gracias! te responderé a la brevedad.",
          });
          form.current.reset();
        },
        (error) => {
          sileo.error({
            title: "Error al enviar",
            description: "Inténtalo de nuevo o escríbeme por WhatsApp.",
          });

          console.error(error);
        },
      )
      .finally(() => setIsSubmitting(false));
  };

  const fieldCls =
    "epaper-field w-full bg-transparent border-b-2 border-[#111111] py-2 text-[#111111] placeholder-neutral-500 outline-none font-sans";
  const labelCls =
    "block font-bold text-sm tracking-widest uppercase text-[#111111] mb-2";

  return (
    <section className="ink-page ink-page-email epaper-grain overflow-x-hidden px-4 pt-1.5 pb-16">
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
          CAPÍTULO 06 — ESCRÍBEME
        </e-text>
        <e-title level="1">Contáctame</e-title>

        <e-divider variant="solid" />

        <div className="w-full max-w-xl mx-auto">
          <div className="border-2 border-[#111111] bg-[#FDFBF7] shadow-[4px_4px_0_0_#111111] p-8 md:p-12">
            <e-text kind="prose" as="p">
              Envíame un email y a la brevedad posible me pondré en contacto
              contigo.
            </e-text>

            <e-divider variant="dashed" />

            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label htmlFor="from_name" className={labelCls}>
                  Nombre <span aria-hidden="true">* Obligatorio</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  placeholder="Tu nombre"
                  required
                  aria-required="true"
                  className={fieldCls}
                />
              </div>

              <div>
                <label htmlFor="from_email" className={labelCls}>
                  Correo <span aria-hidden="true">* Obligatorio</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  placeholder="tu@email.com"
                  required
                  aria-required="true"
                  className={fieldCls}
                />
              </div>

              <div>
                <label htmlFor="company" className={labelCls}>
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="tumarca.com"
                  className={fieldCls}
                />
              </div>

              <div>
                <label htmlFor="engagement" className={labelCls}>
                  Tipo de proyecto{" "}
                  <span className="lowercase tracking-normal font-normal text-xs">
                    (presupuesto aproximado)
                  </span>
                </label>
                <select
                  name="engagement"
                  id="engagement"
                  defaultValue=""
                  className="epaper-field w-full bg-[#FDFBF7] border-2 border-[#111111] px-4 py-2 text-[#111111] outline-none font-sans cursor-pointer"
                >
                  <option value="" disabled hidden>
                    Selecciona uno
                  </option>
                  <option value="landing">Landing Page</option>
                  <option value="website">Sitio Web</option>
                  {/* <option value="ecommerce">E-commerce</option> */}
                  <option value="otro">Chat IA</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelCls}>
                  Cuéntame tu situación{" "}
                  <span className="lowercase tracking-normal font-normal text-xs">
                    (1-2 oraciones está bien)
                  </span>{" "}
                  <span aria-hidden="true">* Obligatorio</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Describe tu proyecto o necesidad..."
                  required
                  aria-required="true"
                  className={`${fieldCls} resize-none`}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] bg-[#FF4100] text-[#111111] font-bold text-xs tracking-widest uppercase px-8 cursor-pointer border-2 border-[#111111] shadow-[4px_4px_0_0_#111111] disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando…" : "Enviar"}
                </button>

                <a
                  href="https://wa.me/51916058633?text=Hola%20Abrahan,%20quiero%20impulsar%20mi%20negocio%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({
                      action: "click_whatsapp",
                      category: "contact",
                      label: "form_email",
                    })
                  }
                  aria-label="Hablar por WhatsApp sobre tu negocio"
                  className="inline-flex min-h-[48px] items-center focus-visible:outline-3"
                >
                  <e-button variant="primary" className="epaper-btn-orange">
                    <span className="inline-flex items-center gap-2">
                      <FaWhatsapp className="text-lg" aria-hidden="true" />
                      WHATSAPP
                    </span>
                  </e-button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormEmail2;
