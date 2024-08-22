import { ToggleLanguageTransition } from "@/components/Shared/ToggleLanguageTransition";

interface HeaderProps {
  headerTitle: string;
  headerSubtitle: string;
}

export function Header({ headerTitle, headerSubtitle }: HeaderProps) {
  return (
    <header
      className={`font-bold rounded-xl text-sm mb-2 2xl:mb-6
         xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl `}
    >
      {/* Transition when language changes */}
      <ToggleLanguageTransition>
        <div
          className={`flex rounded-xl 
          transform 2xl:hover:scale-110 transition-transform duration-500 ease-in-out `}
        >
          <div
            className={`flex rounded-xl shadow-lg shadow-black dark:shadow-white 
           transition-shadow duration-1000 ease-in-out `}
          >
            <div
              className={`flex rounded-xl  bg-white/60 dark:bg-black/60 opacity-90 
              transition-colors duration-1000 ease-in-out `}
            >
              <h1
                className={`m-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10 2xl:py-3
               text-black dark:text-white transition-colors ease-in-out`}
              >
                {headerTitle}
                <span className="text-secondary">{headerSubtitle}</span>
              </h1>
            </div>
          </div>
        </div>
      </ToggleLanguageTransition>
    </header>
  );
}
