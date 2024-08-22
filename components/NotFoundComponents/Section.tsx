import { ToggleLanguageTransition } from "@/components/Shared";

interface Props {
  headerTitle: string;
  headerSubtitle: string;
}

export function Section({ headerTitle, headerSubtitle }: Props) {
  return (
    <section className="flex h-screen text-center justify-center items-center font-bold ">
      <div
        className={`max-sm:mt-16 flex flex-col items-center space-y-6 lg:space-y-14 `}
      >
        <h1
          className={`active:animate-ping inline-block text-3xl md:text-6xl 
             transform 2xl:hover:scale-150 transition-transform duration-500 ease-in-out `}
        >
          😢
        </h1>
        {/* Transition when language changes */}
        <ToggleLanguageTransition>
          <div
            className={`flex flex-col items-center space-y-6 lg:space-y-14 `}
          >
            <h2 className={`inline-block text-3xl md:text-6xl `}>
              {headerTitle}
            </h2>
            <p className={`inline-block text-xl md:text-3xl `}>
              {headerSubtitle}
            </p>
          </div>
        </ToggleLanguageTransition>
      </div>
    </section>
  );
}
