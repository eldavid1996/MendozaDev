import { SVGProps } from "react";
import { ToggleThemeTransition } from "@/components/shared";

interface IconProps {
  theme?: string;
  LightOnIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  LightOffIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export function Icon({ theme, LightOnIcon, LightOffIcon }: IconProps) {
  return (
    <span
      className={`hover:animate-pulse active:animate-ping pb-1.5
         transform lg:hover:scale-150 transition-transform duration-500 ease-in-out `}
    >
      {/* Transition when theme changes */}
      <ToggleThemeTransition>
        {theme === "light" ? (
          <LightOnIcon aria-label="Light" />
        ) : (
          <LightOffIcon aria-label="Dark" />
        )}
      </ToggleThemeTransition>
    </span>
  );
}
