import React from "react";
import Welcome from "../components/Welcome";
import { Analytics } from "@vercel/analytics/next";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Analytics />
    </div>
  );
};

export default Home;
