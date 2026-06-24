import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight, FiArrowDown, FiExternalLink } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-neutral-950 flex items-center overflow-hidden px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4100]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FF4100]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#FF4100] font-mono text-sm tracking-widest uppercase mb-4"
            >
              Desarrollo de software a medida.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl text-neutral-100 leading-tight font-mono-liberation font-bold"
            >
              La forma más fácil de{" "}
              <span className="text-[#FF4100]">crear tu presencia digital</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg lg:text-xl text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Sitios web modernos, rápidos y seguros que ayudan a tu negocio a{" "}
              <span className="text-neutral-100 font-semibold">
                destacar en internet
              </span>{" "}
              y convertir visitantes en clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <RouterLink
                to="/contacto"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#FF4100] text-white font-semibold rounded-lg hover:bg-[#FF6B33] transition-colors"
              >
                Contáctame
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/servicios"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 text-neutral-200 font-medium rounded-lg hover:border-[#FF4100]/50 hover:text-[#FF4100] transition-colors"
              >
                Servicios
                <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
              </RouterLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-neutral-800"
            >
              <p className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                Clientes que confían
              </p>
              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                {["FlowingGo", "PixelDev", "TodoMercados", "UnoLink"].map(
                  (name) => (
                    <span
                      key={name}
                      className="text-sm text-neutral-400 font-medium"
                    >
                      {name}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block flex-shrink-0 w-full max-w-sm lg:-translate-x-40 lg:-translate-y-[100px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative flex items-end justify-center lg:justify-start">
                <div className="relative z-10 w-full">
                  <DeviceFrameset device="MacBook Pro" zoom={0.45}>
                    <img
                      src="/hero/web5.jpg"
                      alt="Proyecto destacado"
                      className="w-full h-full object-cover block"
                    />
                  </DeviceFrameset>
                </div>
                <div className="relative -ml-72 z-20 w-32 translate-y-32">
                  <DeviceFrameset device="iPhone X" zoom={0.3}>
                    <img
                      src="/hero/phone2.webp"
                      alt="Proyecto móvil"
                      className="w-full h-full object-cover block"
                    />
                  </DeviceFrameset>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="text-[#FF4100]/60 text-xl" />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 py-8 md:p-8 min-h-screen transition-colors duration-500">
      <div className="flex justify-end" />

      <div className="mx-auto max-w-5xl">
        <Link
          heading="Servicios"
          subheading="Lo que hago y precios"
          imgSrc="/pizarras-precios.jpg"
          href="/servicios"
        />
        <Link
          heading="Trabajos"
          subheading="Conoce algunos de mis trabajos más recientes"
          imgSrc="/trabajos.jpg"
          href="/proyectos"
        />
        <Link
          heading="Testimonios"
          subheading="Lo que los clientes dicen de mí"
          imgSrc="/testimonios.jpg"
          href="/testimonios"
        />
        <Link
          heading="Contactame"
          subheading="¿Te gustaría trabajar conmigo?"
          imgSrc="/contactame.png"
          href="/contacto"
        />
        <Link
          heading="Abrahan"
          subheading="Acerca de mí"
          imgSrc="/yo.jpg"
          href="/sobre-mi"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-1 border-[#FF6B33] py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <RouterLink to={href} className="absolute inset-0 z-20" />
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-200 transition-colors duration-500 dark:group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-lg text-white transition-colors duration-500 group-hover:text-[#FF4100]">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-44 w-62 rounded-lg object-contain md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-200" />
      </motion.div>
    </motion.div>
  );
};

const WelcomeTest = () => {
  return (
    <>
      <HeroSection />
      <HoverImageLinks />
    </>
  );
};

export default WelcomeTest;
