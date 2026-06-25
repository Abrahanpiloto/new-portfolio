import Welcome from "./components/Welcome";
import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Aboutmepage from "./pages/Aboutmepage";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Workspage from "./pages/Workspage";
import Contactpage from "./pages/Contactpage";
import Testimonialspage from "./pages/Testimonialspage";
import EmailPage from "./pages/EmailPage";
import Footer from "./components/Footer";
// import ThemeToggle from "./components/ThemeToggle";
import { sendPageView } from "./analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname + location.search);
  }, [location]);
  return (
    <div>
      {/* <ThemeToggle /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<Aboutmepage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/proyectos" element={<Workspage />} />
        <Route path="/contacto" element={<Contactpage />} />
        <Route path="/testimonios" element={<Testimonialspage />} />
        <Route path="/form-email" element={<EmailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
