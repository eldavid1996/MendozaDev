"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Spinner for show in first load page while loading */
export function SpinnerFirstLoadPage() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(false);
  }, []);

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center 
             bg-gray-800 bg-opacity-50 `}
        >
          <span
            className={`shadow-2xl animate-spin rounded-full h-40 w-40 border-t-8 border-b-8
              shadow-white dark:shadow-black  border-black dark:border-white `}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
