"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/effetcs";
import { AboutMeComponent } from "@/components/AboutMeComponents/AboutMeComponent";

export default function AboutMe() {
  const [showAboutMeComponent, setShowAboutMeComponent] = useState(false);
  return (
    <>
      <PageTransition
        onAnimationComplete={() => setShowAboutMeComponent(true)}
      />
      {showAboutMeComponent && <AboutMeComponent />}
    </>
  );
}
