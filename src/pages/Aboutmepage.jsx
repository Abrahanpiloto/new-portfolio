import React from "react";
import Aboutme from "../components/Aboutme";
import { Analytics } from "@vercel/analytics/next";

const Aboutmepage = () => {
  return (
    <div>
      <Aboutme />
      <Analytics />
    </div>
  );
};

export default Aboutmepage;
