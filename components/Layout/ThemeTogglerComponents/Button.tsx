import { Dispatch, SetStateAction } from "react";
import { Switch } from "./Switch";

interface ButtonProps {
  theme?: string;
  themeTogglerTitle: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export function Button({ theme, themeTogglerTitle, setTheme }: ButtonProps) {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      title={themeTogglerTitle}
      aria-label={themeTogglerTitle}
      onClick={toggleTheme}
      className={`flex rounded-full hover:animate-pulse active:animate-ping 
         transform lg:hover:scale-125 transition-transform duration-500 ease-in-out `}
    >
      <div
        className={`flex rounded-full shadow-lg shadow-black dark:shadow-white 
           transition-shadow duration-1000 ease-in-out `}
      >
        <div
          className={`flex rounded-full h-8 w-16 
           bg-white/65 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 
             transition-colors duration-1000 ease-in-out `}
        >
          {/* Switch Span */}
          <Switch theme={theme} />
        </div>
      </div>
    </button>
  );
}
