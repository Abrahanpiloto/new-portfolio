import React from "react";
import Contact from "../components/Contact";

import { Analytics } from "@vercel/analytics/react";

const Contactpage = () => {
  return (
    <div>
      <Contact />
      <Analytics />
    </div>
  );
};

export default Contactpage;
