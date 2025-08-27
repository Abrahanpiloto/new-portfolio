import React from "react";
import Contact from "../components/Contact";
import { Analytics } from "@vercel/analytics/next";

const Contactpage = () => {
  return (
    <div>
      <Contact />
      <Analytics />
    </div>
  );
};

export default Contactpage;
