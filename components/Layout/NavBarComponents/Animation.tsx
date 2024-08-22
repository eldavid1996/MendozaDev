"use client";

import { useEffect } from "react";

interface AnimationProps {
  pathname: string;
}

export function Animation({ pathname }: AnimationProps) {
  useEffect(() => {
    const navBarItems = document.querySelectorAll(".navbar-item");
    const navBarItemSelected = document.querySelector(
      ".navbar-item-selected"
    ) as HTMLElement;
    const menuBackdrown = document.querySelector(
      "#menu-backdrown"
    ) as HTMLElement;
    const menuBackdrownContainer = menuBackdrown?.parentElement;

    if (menuBackdrown && menuBackdrownContainer) {
      let activeItemPosition = 0;

      if (navBarItemSelected) {
        const itemRect = navBarItemSelected.getBoundingClientRect();
        const containerRect = menuBackdrownContainer.getBoundingClientRect();
        activeItemPosition = itemRect.left - containerRect.left;
      } else {
        // Not found Page (404)
        activeItemPosition = 0;
      }

      menuBackdrown.style.setProperty("--left", `${activeItemPosition}px`);

      navBarItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const itemRect = item.getBoundingClientRect();
          const containerRect = menuBackdrownContainer.getBoundingClientRect();
          const left = itemRect.left - containerRect.left;

          menuBackdrown.style.setProperty("display", `block`);
          menuBackdrown.style.setProperty("--left", `${left}px`);
        });

        item.addEventListener("mouseleave", () => {
          menuBackdrown.style.setProperty("--left", `${activeItemPosition}px`);
        });
      });
    }
  }, [pathname]);

  return (
    <span
      id="menu-backdrown"
      className={`absolute -z-10 h-full w-12 animate-pulse bg-secondary rounded-xl 
        xs:w-20 md:w-28 lg:w-32 
        transform translate-y-x translate-x-[var(--left)] 
        transition-transform duration-700 ease-in-out `}
    />
  );
}
