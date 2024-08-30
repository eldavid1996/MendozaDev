"use client";

import { AnimatePresence, motion } from "framer-motion";

interface TransparentTransitionPagesProps {
  children: React.ReactNode;
}

/* Agradable transition when components content loads */
export function TransparentTransitionPages({
  children,
}: TransparentTransitionPagesProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
