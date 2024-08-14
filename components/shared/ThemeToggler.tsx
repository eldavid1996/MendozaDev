"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { MotionTransition } from "./effetcs/MotionTransition";
import { LightOffIcon, LightOnIcon } from "./icons/theme-toggler";

export function ThemeToggler() {
  const [theme, setTheme] = useState("light");
  const { translation } = useLanguageContext();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 bottom-10 right-1 flex flex-col items-center gap-2  sm:right-12"
    >
      {theme === "light" ? (
        <LightOnIcon width={36} height={36} className="text-dark-text" />
      ) : (
        <LightOffIcon width={36} height={36} className="text-light-text" />
      )}
      <button
        title={translation.themeTogglerTitle}
        aria-label={translation.themeTogglerTitle}
        onClick={toggleTheme}
        className="flex font-bold rounded-full p-1 w-14 cursor-pointer bg-light-bg/50 dark:bg-dark-bg/50 hover:bg-light-bg/80 dark:hover:bg-dark-bg/80 transform hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <span
          className={`text-xs transition-transform ${
            theme === "light" ? "translate-x-6" : "translate-x-0"
          } rounded-full p-1  bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text`}
        >
          {theme === "light" ? "ON" : "OFF"}
        </span>
      </button>
    </MotionTransition>
  );
}
