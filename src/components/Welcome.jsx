import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import Switch from "./Switch";

const HoverImageLinks = () => {
  return (
    <section className="dark:bg-neutral-950 p-4 py-8 md:p-8 min-h-screen  bg-yellow-50 transition-colors duration-500">
      <div className="flex justify-end">
        <Switch />
      </div>

      <div className="mx-auto max-w-5xl">
        <Link
          heading="Abrahan"
          subheading="Acerca de mi"
          imgSrc="/yo.jpg"
          href="/sobre-mi"
        />
        <Link
          heading="Trabajos"
          subheading="Conoce algunos de mis trabajos mas recientes"
          imgSrc="/trabajos.jpg"
          href="/proyectos"
        />
        <Link
          heading="Testimonios"
          subheading="Lo que los clientes dicen de mi"
          imgSrc="/testimonios.jpg"
          href="/testimonios"
        />
        {/* <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="/imgs/random/5.jpg"
          href="#"
        /> */}
        <Link
          heading="Contactame"
          subheading="¿Te gustaría trabajar conmigo?"
          imgSrc="/contactame.png"
          href="/contacto"
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
      // href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-1 dark:border-yellow-100 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
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
          className="relative z-10 block text-4xl font-bold dark:text-neutral-400 transition-colors duration-500 dark:group-hover:text-neutral-50 md:text-6xl"
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
        <span className="relative z-10 mt-2 block text-base dark:text-neutral-500 transition-colors duration-500 dark:group-hover:text-yellow-300 group-hover:text-blue-600">
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
        className="absolute z-0 h-44 w-32 rounded-lg object-contain md:h-48 md:w-64"
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
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.div>
  );
};

export default HoverImageLinks;
