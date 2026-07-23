import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const FormEmail2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Gracias! mensaje enviado con éxito");
          form.current.reset();
        },
        (error) => {
          alert("Ocurrió un error al enviar");
          console.error(error);
        },
      );
  };

  return (
    <section className="min-h-screen bg-[#E8E8E8] dark:bg-[#21262A] px-4 py-16 flex items-center justify-center">
      <div className="absolute top-4 right-6 text-white font-bold text-xl dark:hover:text-[#FF4100] hover:text-blue-600 z-10">
        <Link to="/">Inicio</Link>
      </div>

      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-sm" />
        <div className="relative bg-[#E8E8E8] dark:bg-[#21262A] p-8 md:p-12 border border-neutral-800 dark:border-neutral-600">
          <p className="text-[#FF4100] font-bold text-xs tracking-widest uppercase mb-8">
            Inicia un proyecto
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="from_name"
                className="block font-bold text-sm tracking-widest uppercase text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Tu nombre"
                required
                className="w-full bg-transparent border-b border-neutral-800 dark:border-neutral-600 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 outline-none focus:border-[#FF4100] transition-colors font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="from_email"
                className="block font-bold text-sm tracking-widest uppercase text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Correo
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                placeholder="tu@email.com"
                required
                className="w-full bg-transparent border-b border-neutral-800 dark:border-neutral-600 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 outline-none focus:border-[#FF4100] transition-colors font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block font-bold text-sm tracking-widest uppercase text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Empresa
              </label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="tumarca.com"
                className="w-full bg-transparent border-b border-neutral-800 dark:border-neutral-600 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 outline-none focus:border-[#FF4100] transition-colors font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="engagement"
                className="block font-bold text-sm tracking-widest uppercase text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Tipo de proyecto{" "}
                <span className="text-neutral-400 dark:text-neutral-500 lowercase tracking-normal font-normal text-xs">
                  (presupuesto aproximado)
                </span>
              </label>
              <select
                name="engagement"
                id="engagement"
                className="w-full bg-transparent border-b border-neutral-800 dark:border-neutral-600 py-2 text-neutral-900 dark:text-neutral-100 outline-none focus:border-[#FF4100] transition-colors font-sans appearance-none cursor-pointer"
              >
                <option value="">— Selecciona uno —</option>
                <option value="landing">Landing Page</option>
                <option value="website">Sitio Web</option>
                <option value="ecommerce">E-commerce</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-bold text-sm tracking-widest uppercase text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Cuéntame tu situación{" "}
                <span className="text-neutral-400 dark:text-neutral-500 lowercase tracking-normal font-normal text-xs">
                  (1-2 oraciones está bien)
                </span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                placeholder="Describe tu proyecto o necesidad..."
                required
                className="w-full bg-transparent border-b border-neutral-800 dark:border-neutral-600 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 outline-none focus:border-[#FF4100] transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="relative bg-[#FF4100] hover:bg-[#FF6B33] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 cursor-pointer transition-all duration-100 translate-x-1 translate-y-1 shadow-[4px_4px_0_0_#171717] dark:shadow-[4px_4px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-95"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormEmail2;
