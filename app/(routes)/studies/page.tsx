"use client";

import { useEffect } from "react";
import { StudiesComponent } from "@/components/StudiesComponents/StudiesComponent";

export default function Studies() {
  useEffect(() => {
    document.title = "MendozaDev - Studies";
  }, []);

  return <StudiesComponent />;
}
