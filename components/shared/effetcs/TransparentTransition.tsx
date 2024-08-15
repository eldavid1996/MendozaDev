"use client";

import { motion } from "framer-motion";

interface TransparentTransitionProps {
  children: React.ReactNode;
  y: "bottom" | "top" | "none";
  x: "right" | "left" | "none";
  className?: string;
}

export function TransparentTransition(props: TransparentTransitionProps) {
  const { y, x, children, className } = props;

  return (
    <motion.div
      key={children?.toString()}
      variants={fadeIn(y, x)}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
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
        duration: 0.75,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    exit: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
}
