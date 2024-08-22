import { ToggleThemeTransition } from "@/components/shared";

interface SwitchProps {
  theme?: string;
}

export function Switch({ theme }: SwitchProps) {
  return (
    <span
      className={`absolute left-1 top-1 transform ${
        theme === "dark" ? "translate-x-0 " : "translate-x-5 "
      } transition-transform duration-500 ease-in-out`}
    >
      <div
        className={`px-1 rounded-full bg-white dark:bg-black 
            transition-colors duration-1000 ease-in-out `}
      >
        <span
          className={`font-bold text-black dark:text-white 
             transition-colors `}
        >
          {/* Transition when click and change theme */}
          <ToggleThemeTransition>
            {theme === "dark" ? "OFF" : "ON"}
          </ToggleThemeTransition>
        </span>
      </div>
    </span>
  );
}
