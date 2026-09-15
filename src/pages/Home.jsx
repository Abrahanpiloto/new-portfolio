import React from "react";
import Welcome from "../components/Welcome";

// Pie e-paper local: solo para /, mismo patrón que las demás rutas.
const HomeFooter = () => {
  return (
    <footer className="w-full bg-[#FDFBF7] text-[#111111]">
      <div className="max-w-5xl mx-auto px-5 py-4">
        <p className="text-[16px] text-center">
          Creado por{" "}
          <span className="epaper-accent-underline font-bold">
            Abrahan Piloto
          </span>
        </p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen flex flex-col">
      <Welcome />
      <HomeFooter />
    </div>
  );
};

export default Home;
