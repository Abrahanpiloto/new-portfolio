import React from "react";
import { Link, useLocation } from "react-router-dom";
import Switch from "./Switch";

const ThemeToggle = () => {
  const { pathname } = useLocation();
  const showHomeLink = pathname !== "/";

  return (
    <div className="fixed top-4 right-6 z-50 flex items-center gap-4 rounded-sm bg-white/80 px-3 py-2 shadow-md backdrop-blur-sm dark:bg-neutral-900/80">
      {showHomeLink && (
        <Link
          to="/"
          className="font-bold text-neutral-900 transition hover:text-blue-600 dark:text-neutral-100 dark:hover:text-amber-200"
        >
          Inicio
        </Link>
      )}
      <Switch />
    </div>
  );
};

export default ThemeToggle;
