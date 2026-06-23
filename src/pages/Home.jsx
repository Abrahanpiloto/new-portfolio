import React from "react";
import Welcome from "../components/WelcomeTest";
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
