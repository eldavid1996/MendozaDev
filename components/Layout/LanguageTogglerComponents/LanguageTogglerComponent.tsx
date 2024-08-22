"use client";

import { useLanguageContext } from "@/app/context/LanguageContext";
import { MovementTransition } from "@/components/shared";
import { SpanishFlag, UnitedKingdomFlag } from "./Icons";
import { Icon } from "./Icon";
import { Button } from "./Button";

export function LanguageTogglerComponent() {
  const { language, setLanguage, translation } = useLanguageContext();

  const { "languageToggler.title": languageTogglerTitle } = translation;

  const toggleLanguage = () => {
    setLanguage(language === "ES" ? "EN" : "ES");
  };

  return (
    <div
      aria-label="Language toggler"
      className={`fixed z-40 bottom-3 left-1 sm:left-12`}
    >
      {/* Transition first load */}
      <MovementTransition position="left">
        <div
          className={`flex flex-col gap-2 items-center rounded-full 
             transform lg:hover:scale-110 transition-transform duration-500 ease-in-out `}
        >
          {/* Flag Icon */}
          <Icon
            language={language}
            SpanishFlag={SpanishFlag}
            UnitedKingdomFlag={UnitedKingdomFlag}
          />
          {/* Button */}
          <Button
            language={language}
            languageTogglerTitle={languageTogglerTitle}
            toggleLanguage={toggleLanguage}
          />
        </div>
      </MovementTransition>
    </div>
  );
}
