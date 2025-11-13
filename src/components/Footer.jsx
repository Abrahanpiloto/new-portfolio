import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#FCF9F5] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 py-2 px-4">
      <div className="max-w-6xl mx-auto flex justify-center gap-4 items-center text-center ">
        <p className="mb-2 md:mb-0">
          Creado por{" "}
          <span
            style={{ fontFamily: "Dancing Script, cursive" }}
            className="text-xl text-[#FF5500] dark:text-[#FF5500] font-bold"
          >
            Abrahan Piloto
          </span>{" "}
        </p>
        <div className="flex gap-4 ">
          <a
            href="https://www.instagram.com/abrahan.freelancer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors"
          >
            <SiInstagram className="text-xl hover:text-[#FF5500] cursor-pointer" />
          </a>
          <a
            href="https://www.threads.net/@abrahan.freelancer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="transition-colors"
          >
            <FaThreads className="text-xl hover:text-[#FF5500] cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
