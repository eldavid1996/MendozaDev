"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguageContext } from "@/app/context/LanguageContext";

interface ToggleLanguageTransitionProps {
  children: React.ReactNode;
}

export function ToggleLanguageTransition(props: ToggleLanguageTransitionProps) {
  const { language } = useLanguageContext();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
