import React from "react";
import Aboutme from "../components/Aboutme";
import { Analytics } from "@vercel/analytics/react";

import ButtonCta from "../components/ButtonCta";

const Aboutmepage = () => {
  return (
    <div className="py-16 bg-[#FCF9F5] min-h-screen dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100">
      <Aboutme />
      <ButtonCta />
      <Analytics />
    </div>
  );
};

export default Aboutmepage;
