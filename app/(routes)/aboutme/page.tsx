"use client";

import { useEffect } from "react";
import { AboutMeComponent } from "@/components/AboutMeComponents/AboutMeComponent";

export default function AboutMe() {
  useEffect(() => {
    document.title = "MendozaDev - About Me";
  }, []);

  return <AboutMeComponent />;
}
