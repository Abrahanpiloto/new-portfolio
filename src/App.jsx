import Welcome from "./components/Welcome";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Aboutmepage from "./pages/Aboutmepage";
import Home from "./pages/Home";
import Workspage from "./pages/Workspage";
import Contact from "./pages/Contact";
import Testimonios from "./pages/Testimonios";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<Aboutmepage />} />
        <Route path="/proyectos" element={<Workspage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </>
  );
}

export default App;
