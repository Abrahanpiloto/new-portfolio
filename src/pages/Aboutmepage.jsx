import React from "react";
import Aboutme from "../components/Aboutme";
import { Analytics } from "@vercel/analytics/react";
import WhyWebsite from "../components/WhyWebsite";
import InfoWebsite from "../components/InfoWebsite";
import InfoEcommerce from "../components/InfoEcommerce";
import InfoLanding from "../components/InfoLanding";

const Aboutmepage = () => {
  return (
    <div>
      <Aboutme />
      <WhyWebsite />
      <InfoWebsite />
      <InfoEcommerce />
      <InfoLanding />
      <Analytics />
    </div>
  );
};

export default Aboutmepage;
