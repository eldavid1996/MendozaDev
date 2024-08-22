"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, ReactNode, useEffect } from "react";

/*  Context used for navigate between pages with animations (ChargePageTransition Component in /shared/effetcs) */

interface GlobalState {
  actualPage: string;
  onPageNavigate: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  navigateTo: () => void;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const defaultPage = usePathname();
  const [actualPage, setActualPage] = React.useState<string>(defaultPage);
  const onPageNavigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (!href) return;
    setActualPage(href);
  };
  const navigateTo = () => {
    router.push(actualPage);
  };

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setActualPage("");
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        actualPage,
        onPageNavigate: onPageNavigate,
        navigateTo: navigateTo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useNavigationContext = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a NavigationProvider"
    );
  }
  return context;
};
