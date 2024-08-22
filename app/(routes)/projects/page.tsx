"use client";

import { useEffect } from "react";
import { ProjectsComponent } from "@/components/ProjectsComponents/ProjectsComponent";

export default function Projects() {
  useEffect(() => {
    document.title = "MendozaDev - Projects";
  }, []);

  return <ProjectsComponent />;
}
