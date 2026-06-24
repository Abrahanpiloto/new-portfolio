import React from "react";
import { Link, useLocation } from "react-router-dom";
import Switch from "./Switch";

const ThemeToggle = () => {
  const { pathname } = useLocation();
  // const showHomeLink = pathname !== "/";

  return (
    <div className="fixed top-4 right-6 z-50">
      <Switch />
    </div>
  );
};

export default ThemeToggle;
