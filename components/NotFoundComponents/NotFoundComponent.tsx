"use client";

import Image from "next/image";
import { useLanguageContext } from "@/app/context/LanguageContext";

export function NotFoundComponent() {
  const { translation } = useLanguageContext();

  return (
    <main className="font-bold fixed z-[0] inset-0 flex items-center justify-center px-2 gap-2 my-24 md:p-28 md:my-28 xl:mx-64 rounded-full bg-light-bg/5 dark:bg-dark-bg/5">
      <section className="flex flex-col space-y-8 lg:space-y-14 items-center">
        <h1 className="text-3xl md:text-6xl text-center w-full transform hover:scale-110 duration-300 ease-in-out">
          {translation.notFound.headerTitle}
        </h1>
        <p className="md:text-md md:text-3xl text-center w-full transform hover:scale-110 duration-300 ease-in-out">
          {translation.notFound.headerSubtitle}
        </p>
      </section>
      <aside className="fixed right-0 -bottom-5 z-[-1] opacity-20 2xl:opacity-40 w-auto h-auto max-w-[900px] max-h-[900px]">
        <Image
          src="/images/NotFound.png"
          alt={translation.notFound.headerTitle}
          priority
          width={400}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </aside>
    </main>
  );
}
