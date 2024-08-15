import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { TransparentTransition } from "../shared/effetcs";
import { ProjectsComponentNavBar } from "./ProjectsComponentNavBar";
import { ProjectsComponentImages } from "./ProjectsComponentImages";

export function ProjectsComponent() {
  const { translation } = useLanguageContext();
  const [actualProjectId, setActualProject] = useState(0);

  return (
    <main>
      <aside className="fixed right-0 -bottom-5 z-[-1] opacity-20 w-auto h-auto max-w-[900px] max-h-[900px]">
        <Image
          src="/images/Projects.png"
          alt={translation.home.introduccion.altImage}
          priority
          width={400}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </aside>{" "}
      <section className="flex flex-col space-y-4 lg:gap-y-6 items-center md:justify-center font-bold fixed z-[0] inset-0 px-28 my-28 xl:pb-12 rounded-full bg-light-bg/[0.03] dark:bg-dark-bg/[0.03]">
        <h1 className="text-center text-xs sm:text-lg max-md:mt-5 md:text-3xl xl:text-5xl w-full transform hover:scale-110 duration-300 ease-in-out">
          {translation.projects.myProjects.headerTitle}
          <span className="text-secondary">
            {translation.projects.myProjects.headerSubtitle}
          </span>
        </h1>
        {/* ➕ Little component useful for divide code */}
        <ProjectsComponentNavBar
          actualProjectId={actualProjectId}
          setActualProject={setActualProject}
        />
        <AnimatePresence mode="wait">
          <TransparentTransition key={actualProjectId} x="none" y="bottom">
            <article className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 items-center justify-items-center sm:gap-8">
              <h1 className="font-mono max-md:hidden md:mr-32 text-center xl:text-2xl transform hover:scale-110 duration-300 ease-in-out">
                {
                  translation.projects.myProjects.projectDescription[
                    actualProjectId
                  ]
                }
              </h1>
              {/* ➕ Another Little component useful for divide code */}
              <ProjectsComponentImages actualProjectId={actualProjectId} />
              <footer className="max-md:mb-10 md:ml-36 flex flex-col items-center w-full gap-y-4 xl:gap-y-6 text-sm md:text-md lg:text-xl">
                <div className="flex gap-x-12 xl:gap-x-24 mb-6">
                  <Link
                    target="_blank"
                    href={itemsProjects[actualProjectId].gihub}
                    title="Github"
                    className="p-1 md:p-2 2xl:p-3 border-4 rounded-full bg-light-bg/25 dark:bg-dark-bg/25 hover:shadow-xl hover:shadow-dark-bg/50 dark:hover:shadow-light-bg/50 border-light-bg dark:border-dark-bg transform hover:scale-110 duration-300 ease-in-out"
                  >
                    Github
                  </Link>
                  <Link
                    target="_blank"
                    href={itemsProjects[actualProjectId].web}
                    title="Website"
                    className="p-1 md:p-2 2xl:p-3 border-4 rounded-full bg-light-bg/25 dark:bg-dark-bg/25 hover:shadow-xl hover:shadow-dark-bg/50 dark:hover:shadow-light-bg/50 text-secondary border-secondary transform hover:scale-110 duration-300 ease-in-out"
                  >
                    Website
                  </Link>
                </div>
              </footer>
            </article>{" "}
          </TransparentTransition>
        </AnimatePresence>
      </section>
    </main>
  );
}

const itemsProjects = [
  {
    gihub: "https://github.com/eldavid1996/MendoGames",
    web: "https://eldavid1996.github.io/MendoGames/",
  },
  {
    gihub: "https://github.com/eldavid1996/BRoom",
    web: "https://broom-sigma.vercel.app/",
  },
  {
    gihub: "https://github.com/eldavid1996/MendozApp",
    web: "https://eldavid1996.github.io/MendozApp/",
  },
];
