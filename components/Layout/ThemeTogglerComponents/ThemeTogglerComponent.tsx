"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { MovementTransition } from "@/components/shared";
import { LightOffIcon, LightOnIcon } from "./Icons";
import { Icon } from "./Icon";
import { Button } from "./Button";

export function ThemeTogglerComponent() {
  const { theme, setTheme } = useTheme();
  const { translation } = useLanguageContext();
  const { "themeToggler.title": themeTogglerTitle } = translation;

  // Needed this here for SSR next-themes detection
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      aria-label="Language toggler"
      className={`fixed z-40 bottom-3 right-1 sm:right-12 `}
    >
      {/* Transition first load */}
      <MovementTransition position="right">
        <div
          className={`flex flex-col gap-2 items-center rounded-full 
             transform lg:hover:scale-110 transition-transform duration-500 ease-in-out `}
        >
          {/* Light icon */}
          <Icon
            theme={theme}
            LightOnIcon={LightOnIcon}
            LightOffIcon={LightOffIcon}
          />
          {/* Button */}
          <Button
            theme={theme}
            themeTogglerTitle={themeTogglerTitle}
            setTheme={setTheme}
          />
        </div>
      </MovementTransition>
    </div>
  );
}
