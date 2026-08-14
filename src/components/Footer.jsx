import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#E8E8E8] dark:bg-[#21262A] py-2 px-4">
      <div className="max-w-6xl mx-auto flex justify-center gap-4 items-center text-center ">
        <p className="mb-2 md:mb-0 text-neutral-900 dark:text-white text-md">
          Creado por{" "}
          <img
            src="/pixeldev-logo.png"
            alt="PixelDev"
            className="inline-block h-4 w-auto align-baseline"
          />{" "}
        </p>
        <div className="flex gap-4 -mt-4 md:mt-0 ">
          <a
            href="https://www.instagram.com/abrahan.freelancer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors"
          >
            <SiInstagram className="text-lg text-neutral-900 dark:text-white hover:text-[#FF6B33] cursor-pointer" />
          </a>
          <a
            href="https://www.threads.net/@abrahan.freelancer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="transition-colors"
          >
            <FaThreads className="text-lg text-neutral-900 dark:text-white hover:text-[#FF6B33] cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
