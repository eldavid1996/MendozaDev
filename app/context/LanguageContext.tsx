"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import * as en from "@/public/translations/en.json";
import * as es from "@/public/translations/es.json";

interface GlobalState {
  language: "EN" | "ES";
  setLanguage: (lang: "ES" | "EN") => void;
  translation: typeof en | typeof es;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"ES" | "EN">("EN");
  const [translation, setTranslation] = useState<typeof en | typeof es>(en);

  useEffect(() => {
    const cookieLanguage = localStorage.getItem("language");
    setLanguage(cookieLanguage as "EN" | "ES");
    cookieLanguage == "ES" ? setTranslation(es) : setTranslation(en);
  }, [language]);

  return (
    <GlobalContext.Provider value={{ translation, language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useLanguageContext = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
