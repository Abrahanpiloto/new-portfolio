import React from "react";
import Testimony from "../components/Testimony";
import { Analytics } from "@vercel/analytics/next";

const Testimonialspage = () => {
  return (
    <div>
      <Testimony />
      <Analytics />
    </div>
  );
};

export default Testimonialspage;
