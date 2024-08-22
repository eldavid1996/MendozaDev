import { Switch } from "./Switch";

interface ButtonProps {
  language: "ES" | "EN";
  languageTogglerTitle: string;
  toggleLanguage: () => void;
}

export function Button({
  language,
  languageTogglerTitle,
  toggleLanguage,
}: ButtonProps) {
  return (
    <button
      title={languageTogglerTitle}
      aria-label={languageTogglerTitle}
      onClick={toggleLanguage}
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
        ></div>
        {/* Switch Span */}
        <Switch language={language} />
      </div>
    </button>
  );
}
