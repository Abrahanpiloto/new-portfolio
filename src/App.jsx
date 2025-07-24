import Welcome from "./components/Welcome";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Aboutmepage from "./pages/Aboutmepage";
import Home from "./pages/Home";
import Workspage from "./pages/Workspage";
import Contactpage from "./pages/Contactpage";
import Testimonialspage from "./pages/Testimonialspage";
import EmailPage from "./pages/EmailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<Aboutmepage />} />
        <Route path="/proyectos" element={<Workspage />} />
        <Route path="/contacto" element={<Contactpage />} />
        <Route path="/testimonios" element={<Testimonialspage />} />
        <Route path="/form-email" element={<EmailPage />} />
      </Routes>
    </>
  );
}

export default App;
