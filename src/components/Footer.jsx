import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FEFCE8] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-col  items-center text-center ">
        <p className="mb-2 md:mb-0">
          Creado por{" "}
          <span
            style={{ fontFamily: "Dancing Script, cursive" }}
            className="text-xl text-blue-500 dark:text-yellow-400 font-bold"
          >
            Abrahan Piloto
          </span>{" "}
          ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
