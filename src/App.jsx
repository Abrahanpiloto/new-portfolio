import Welcome from "./components/Welcome";
import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Aboutmepage from "./pages/Aboutmepage";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ServicesPage2 from "./pages/ServicesPage2";
import Workspage from "./pages/Workspage";
import Contactpage from "./pages/Contactpage";
import Testimonialspage from "./pages/Testimonialspage";
import EmailPage from "./pages/EmailPage";
import Footer from "./components/Footer";
// import ThemeToggle from "./components/ThemeToggle";
import { sendPageView } from "./analytics";
import { Toaster } from "sileo";

function App() {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname + location.search);
  }, [location]);
  return (
    <div>
      {/* <ThemeToggle /> */}
      <Toaster position="top-right" theme="light" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<Aboutmepage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios2" element={<ServicesPage2 />} />
        <Route path="/proyectos" element={<Workspage />} />
        <Route path="/contacto" element={<Contactpage />} />
        <Route path="/testimonios" element={<Testimonialspage />} />
        <Route path="/form-email" element={<EmailPage />} />
      </Routes>
      {/* En /sobre-mi se usa el pie e-paper local de Aboutmepage */}
      {location.pathname !== "/sobre-mi" && <Footer />}
    </div>
  );
}

export default App;
