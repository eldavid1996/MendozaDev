"use client";

import { useEffect } from "react";
import { NotFoundComponent } from "@/components/NotFoundComponents/NotFoundComponent";

export default function NotFound() {
  useEffect(() => {
    document.title = "MendozaDev - Not Found";
  }, []);

  return <NotFoundComponent />;
}
