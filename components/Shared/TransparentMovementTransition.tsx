"use client";

import { AnimatePresence, motion } from "framer-motion";

interface TransparentTransitionProps {
  id: number;
  children: React.ReactNode;
  y: "bottom" | "top" | "none";
  x: "right" | "left" | "none";
}

export function TransparentMovementTransition(
  props: TransparentTransitionProps
) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={props.id}
        variants={fadeIn(props.y, props.x)}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}

function fadeIn(y: "bottom" | "top" | "none", x: "right" | "left" | "none") {
  const yOffset = y === "bottom" ? 20 : y === "top" ? -20 : 0;
  const xOffset = x === "right" ? 20 : x === "left" ? -20 : 0;
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    exit: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
}
