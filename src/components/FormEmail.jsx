import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qhnc4fg", // ← Reemplaza con tu ID
        "template_dpe1mh5", // ← Tu plantilla
        form.current,
        "Ke85iBjYo2ZYbgvGC" // ← Tu public key
      )
      .then(
        () => {
          alert("Gracias! mensaje enviado con éxito");
          form.current.reset(); // Limpia el formulario
        },
        (error) => {
          alert("Ocurrió un error al enviar 😢");
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-yellow-50 dark:bg-neutral-900 px-4 py-12 text-neutral-900 dark:text-neutral-100 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg transition-colors duration-500 border border-gray">
        <h1 className="text-3xl font-bold mb-6 text-center">Contáctame</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="from_name" className="block font-semibold mb-1">
              Tu nombre
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              required
              className="w-full px-4 py-2 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="from_email" className="block font-semibold mb-1">
              Tu correo
            </label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              required
              className="w-full px-4 py-2 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 cursor-pointer"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormEmail;
