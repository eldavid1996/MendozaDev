"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigationContext } from "@/app/context/NavigationContext";

interface PageNavigateTransitionProps {
  children: React.ReactNode;
}

/* Transition between pages navigating with animations */
export function PageNavigateTransition(props: PageNavigateTransitionProps) {
  const { actualPage, navigateTo } = useNavigationContext();
  const [showChildren, setShowChildren] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowChildren(true);
      // time to charge the new page resources, can be adjusted as needed (complementary to the animation duration)
    }, 100);
  }, [showChildren]);

  const handleExitComplete = () => {
    setShowChildren(false);
    navigateTo();
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <motion.div
        key={actualPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {showChildren && props.children}
      </motion.div>
    </AnimatePresence>
  );
}
