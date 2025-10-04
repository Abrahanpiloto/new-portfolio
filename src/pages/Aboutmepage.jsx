import React from "react";
import Aboutme from "../components/Aboutme";
import { Analytics } from "@vercel/analytics/react";
import WhyWebsite from "../components/WhyWebsite";
import InfoWebsite from "../components/InfoWebsite";
import InfoEcommerce from "../components/InfoEcommerce";
import InfoLanding from "../components/InfoLanding";
import ButtonCta from "../components/ButtonCta";

const Aboutmepage = () => {
  return (
    <div className="py-16  bg-yellow-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100">
      <Aboutme />
      <WhyWebsite />
      <InfoWebsite />
      <InfoEcommerce />
      <InfoLanding />
      <ButtonCta />
      <Analytics />
    </div>
  );
};

export default Aboutmepage;
