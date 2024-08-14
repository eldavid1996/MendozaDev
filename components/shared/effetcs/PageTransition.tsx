"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  onAnimationComplete?: () => void;
}

export function PageTransition({ onAnimationComplete }: PageTransitionProps) {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    if (isMobile) {
      setShouldAnimate(false);
    }
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  }, [onAnimationComplete]);

  if (!shouldAnimate) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 w-screen h-screen z-30 bg-light-bg/50 dark:bg-dark-bg/50"
        variants={{
          initial: {
            x: "100%",
            width: "100%",
          },
          animate: {
            x: "0%",
            width: "0%",
          },
          exit: {
            x: ["0%", "100%"],
            width: ["0%", "100%"],
          },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.0, duration: 0.1, ease: "easeInOut" }}
        onAnimationComplete={onAnimationComplete}
      ></motion.div>
    </AnimatePresence>
  );
}
