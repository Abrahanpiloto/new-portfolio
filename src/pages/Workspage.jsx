import React from "react";
import Works from "../components/Works";
import { Analytics } from "@vercel/analytics/next";

const Workspage = () => {
  return (
    <div>
      <Works />
      <Analytics />
    </div>
  );
};

export default Workspage;
