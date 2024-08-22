import { SVGProps } from "react";
import { ToggleLanguageTransition } from "@/components/shared";

interface IconProps {
  language: "ES" | "EN";
  SpanishFlag: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  UnitedKingdomFlag: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export function Icon({ language, SpanishFlag, UnitedKingdomFlag }: IconProps) {
  return (
    <span
      className={`hover:animate-pulse active:animate-ping 
         transform lg:hover:scale-150 transition-transform duration-500 ease-in-out `}
    >
      {/* Transition when language changes */}
      <ToggleLanguageTransition>
        {language === "ES" ? (
          <SpanishFlag aria-label="Español" />
        ) : (
          <UnitedKingdomFlag aria-label="English" />
        )}
      </ToggleLanguageTransition>
    </span>
  );
}
