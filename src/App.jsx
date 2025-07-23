import Welcome from "./components/Welcome";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Testimonios from "./pages/Testimonios";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<Aboutme />} />
        <Route path="/proyectos" element={<Works />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </>
  );
}

export default App;
