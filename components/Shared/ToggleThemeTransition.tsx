"use client";

import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

interface ToggleThemeTransitionProps {
  children: React.ReactNode;
}

export function ToggleThemeTransition(props: ToggleThemeTransitionProps) {
  const { theme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
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
