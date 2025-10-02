import React from "react";
import Aboutme from "../components/Aboutme";
import { Analytics } from "@vercel/analytics/react";
import WhyWebsite from "../components/WhyWebsite";

const Aboutmepage = () => {
  return (
    <div>
      <Aboutme />
      <WhyWebsite />
      <Analytics />
    </div>
  );
};

export default Aboutmepage;
