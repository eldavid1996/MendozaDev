"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/effetcs";
import { ProjectsComponent } from "@/components/ProjectsComponents/ProjectsComponent";

export default function Projects() {
  const [showProjectsComponent, setShowProjectsComponent] = useState(false);
  return (
    <>
      <PageTransition
        onAnimationComplete={() => setShowProjectsComponent(true)}
      />
      {showProjectsComponent && <ProjectsComponent />}
    </>
  );
}
