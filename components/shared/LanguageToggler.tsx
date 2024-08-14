"use client";

import { useEffect } from "react";
import { SpanishFlag, UnitedKingdomFlag } from "./icons/language-toggler";
import { MotionTransition } from "./effetcs/MotionTransition";
import { useLanguageContext } from "@/app/context/LanguageContext";

export function LanguageToggler() {
  const { language, setLanguage, translation } = useLanguageContext();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage == "ES" || savedLanguage == "EN")) {
      setLanguage(savedLanguage);
    } else {
      setLanguage("EN");
    }
  }, [setLanguage]);

  const toggleLanguage = () => {
    const newLanguage = language === "ES" ? "EN" : "ES";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <MotionTransition
      position="left"
      className="fixed z-40 bottom-10 left-1 flex flex-col items-center gap-2 sm:left-12"
    >
      {language === "EN" ? (
        <UnitedKingdomFlag width={36} height={36} />
      ) : (
        <SpanishFlag width={36} height={36} />
      )}

      <button
        title={translation.languageTogglerTitle}
        aria-label={translation.languageTogglerTitle}
        onClick={toggleLanguage}
        className="flex font-bold rounded-full p-1 w-14 cursor-pointer bg-light-bg/50 dark:bg-dark-bg/50 hover:bg-light-bg/80 dark:hover:bg-dark-bg/80 transform hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <span
          className={`transition-transform ${
            language === "ES"
              ? "translate-x-0 bg-red-300 dark:bg-red-700 "
              : "translate-x-6 bg-blue-300 dark:bg-blue-700 "
          } rounded-full px-1 text-light-text dark:text-dark-text`}
        >
          {language === "ES" ? "ES" : "EN"}
        </span>
      </button>
    </MotionTransition>
  );
}
