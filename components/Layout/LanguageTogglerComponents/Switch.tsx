import { ToggleLanguageTransition } from "@/components/Shared/ToggleLanguageTransition";

interface SwitchProps {
  language: "ES" | "EN";
}

export function Switch({ language }: SwitchProps) {
  return (
    <span
      className={`absolute left-1 top-1 transform ${
        language === "ES" ? "translate-x-0 " : "translate-x-6 "
      } transition-transform duration-500 ease-in-out`}
    >
      <div
        className={`px-1 rounded-full ${
          language === "ES"
            ? "bg-red-300 dark:bg-red-700 "
            : "bg-blue-300 dark:bg-blue-700 "
        } transition-colors duration-1000 ease-in-out `}
      >
        <span
          className={`font-bold text-black dark:text-white 
            transition-colors ease-in-out `}
        >
          {/* Transition when click and change language */}
          <ToggleLanguageTransition>
            {language === "ES" ? "ES" : "EN"}
          </ToggleLanguageTransition>
        </span>
      </div>
    </span>
  );
}
