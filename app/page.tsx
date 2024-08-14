"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/effetcs";
import { HomeComponent } from "@/components/HomeComponents/HomeComponent";

export default function Home() {
  const [showHomeComponent, setShowHomeComponent] = useState(false);
  return (
    <>
      <PageTransition onAnimationComplete={() => setShowHomeComponent(true)} />
      {showHomeComponent && <HomeComponent />}
    </>
  );
}
