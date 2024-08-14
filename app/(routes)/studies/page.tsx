"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/effetcs";
import { StudiesComponent } from "@/components/StudiesComponents/StudiesComponent";

export default function Studies() {
  const [showStudiesComponent, setShowStudiesComponent] = useState(false);
  return (
    <>
      <PageTransition
        onAnimationComplete={() => setShowStudiesComponent(true)}
      />
      {showStudiesComponent && <StudiesComponent />}
    </>
  );
}
