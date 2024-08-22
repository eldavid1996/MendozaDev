"use client";

import { motion } from "framer-motion";

interface MovementTransitionProps {
  children: React.ReactNode;
  position: "bottom" | "right" | "top" | "left";
}

export function MovementTransition(props: MovementTransitionProps) {
  return (
    <motion.div
      variants={fadeIn(props.position)}
      initial="hidden"
      animate="visible"
      exit={"hidden"}
    >
      {props.children}
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
