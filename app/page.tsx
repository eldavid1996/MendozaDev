"use client";

import { useEffect } from "react";
import { HomeComponent } from "@/components/HomeComponents/HomeComponent";

export default function Home() {
  useEffect(() => {
    document.title = "MendozaDev - Home";
  }, []);

  return <HomeComponent />;
}
