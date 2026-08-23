import React from "react";
import Welcome from "../components/Welcome";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Analytics />
    </div>
  );
};

export default Home;
