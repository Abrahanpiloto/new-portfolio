import React from "react";
import Welcome from "../components/Welcome";
import ThemeToggle from "../components/ThemeToggle";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <div>
      {/* <ThemeToggle /> */}
      <Welcome />
      <Analytics />
    </div>
  );
};

export default Home;
