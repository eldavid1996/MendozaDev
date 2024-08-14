"use client";

import { motion } from "framer-motion";

interface MotionTransitionProps {
  children: React.ReactNode;
  position: "bottom" | "right" | "top" | "left";
  className?: string;
}

export function MotionTransition(props: MotionTransitionProps) {
  const { children, position, className } = props;
  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit={"hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function fadeIn(position: string) {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === "bottom" ? -180 : position === "top" ? 180 : 0,
      x: position === "right" ? 180 : position === "left" ? -180 : 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: 0.0,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
}
