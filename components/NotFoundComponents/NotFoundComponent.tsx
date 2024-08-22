"use client";

import { useLanguageContext } from "@/app/context/LanguageContext";
import { Image as NotFoundImage } from "./Image";
import { Section } from "./Section";

export function NotFoundComponent() {
  const { translation } = useLanguageContext();

  const {
    "notFound.headerTitle": headerTitle,
    "notFound.headerSubtitle": headerSubtitle,
  } = translation;

  return (
    <>
      {/* Section Content */}
      <Section headerTitle={headerTitle} headerSubtitle={headerSubtitle} />
      {/* Aside Image */}
      <NotFoundImage headerTitle={headerTitle} />
    </>
  );
}
