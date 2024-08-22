import Image from "next/image";
import { useState } from "react";
import { useLanguageContext } from "@/app/context/LanguageContext";
import {
  ToggleLanguageTransition,
  TransparentMovementTransition,
} from "@/components/Shared";
import { BRoomLogo, MendoGamesLogo, MendoZappLogo } from "./Icons";
import { Image as AsideImage } from "./Image";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Images } from "./Images";
import { Footer } from "./Footer";

export function ProjectsComponent() {
  const [actualProjectId, setActualProject] = useState(0);
  const { translation } = useLanguageContext();

  const {
    "projects.altImage": altImage,
    "projects.headerTitle": headerTitle,
    "projects.headerSubtitle": headerSubtitle,
    "projects.projectDescriptions": projectDescriptions,
  } = translation;

  return (
    <>
      <section
        className={`relative flex flex-col h-screen items-center justify-center
          max-md:flex-col`}
      >
        {/*  Header */}
        <Header headerTitle={headerTitle} headerSubtitle={headerSubtitle} />
        {/* Navbar */}
        <div className="md:flex">
          <NavBar
            items={items}
            actualProjectId={actualProjectId}
            setActualProject={setActualProject}
          />

          {/* ➕ Card Style */}
          <div
            className={`flex flex-col rounded-3xl w-full max-w-md mt-2 
              xs:max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 
              transform 2xl:hover:scale-105 transition-transform duration-500 ease-in-out `}
          >
            <div
              className={`flex flex-col rounded-3xl shadow-2xl shadow-black dark:shadow-white 
                 transition-shadow duration-1000 ease-in-out`}
            >
              <div
                className={`flex flex-col rounded-3xl p-4 md:p-8 gap-4 bg-white/60 dark:bg-black/60
                  transition-colors duration-1000 ease-in-out`}
              >
                {/* Transition when project changes */}
                <TransparentMovementTransition
                  id={actualProjectId}
                  x="none"
                  y="bottom"
                >
                  <article className="flex flex-col gap-y-5">
                    {/* Projects Images */}
                    <Images items={items} actualProjectId={actualProjectId} />
                    {/* Transition when language changes for the description */}
                    <ToggleLanguageTransition>
                      <p
                        className={`font-bold font-mono text-center text-xs text-black dark:text-white
                          md:text-sm lg:text-md xl:text-lg 2xl:text-xl
                          transition-colors ease-in-out`}
                      >
                        {projectDescriptions[actualProjectId]}
                      </p>
                    </ToggleLanguageTransition>
                    {/* Footer Links */}
                    <Footer items={items} actualProjectId={actualProjectId} />
                  </article>
                </TransparentMovementTransition>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Image Aside */}
      <AsideImage altImage={altImage} />
    </>
  );
}

/* Items for the component - My Projects */

const items = [
  {
    name: "MendoGames",
    icon: <MendoGamesLogo />,
    github: "https://github.com/eldavid1996/MendoGames",
    web: "https://eldavid1996.github.io/MendoGames/",
    images: [
      <Image
        key={0}
        priority
        title="Home"
        alt="Home"
        src="/images/projects/mendogames/mendogames1.png"
        width={1612}
        height={832}
        className="w-full h-auto rounded-3xl"
      />,
      <Image
        key={1}
        priority
        title="Games"
        alt="Games"
        src="/images/projects/mendogames/mendogames2.png"
        width={1648}
        height={880}
        className="w-full h-auto rounded-3xl"
      />,
      <Image
        key={2}
        priority
        title="Form"
        alt="Form"
        src="/images/projects/mendogames/mendogames3.png"
        width={1708}
        height={806}
        className="w-full h-auto rounded-3xl"
      />,
    ],
  },
  {
    name: "BRoom",
    icon: <BRoomLogo />,
    github: "https://github.com/eldavid1996/BRoom",
    web: "https://broom-sigma.vercel.app/",
    images: [
      <Image
        key={0}
        priority
        title="Login"
        alt="Login"
        src="/images/projects/broom/broom1.png"
        width={1177}
        height={872}
        className="w-full h-auto rounded-3xl"
      />,
      <Image
        key={1}
        priority
        title="Tasks"
        alt="Tasks"
        src="/images/projects/broom/broom2.png"
        width={1482}
        height={772}
        className="w-full h-auto rounded-3xl"
      />,
      <Image
        key={2}
        priority
        title="Tasks Users"
        alt="Tasks Users"
        src="/images/projects/broom/broom3.png"
        width={596}
        height={845}
        className="w-full h-auto rounded-3xl"
      />,
    ],
  },
  {
    name: "MendozApp",
    icon: <MendoZappLogo />,
    github: "https://github.com/eldavid1996/MendozApp",
    web: "https://eldavid1996.github.io/MendozApp/",
    images: [
      <Image
        key={0}
        priority
        title="Register"
        alt="Register"
        src="/images/projects/mendozapp/mendozapp1.png"
        width={518}
        height={766}
        className="w-full h-auto rounded-3xl"
      />,
      <Image
        key={1}
        priority
        title="Login"
        alt="Login"
        src="/images/projects/mendozapp/mendozapp2.png"
        width={511}
        height={520}
        className="w-full h-auto rounded-3xl"
      />,
      <Image
        key={2}
        priority
        title="Chat"
        alt="Chat"
        src="/images/projects/mendozapp/mendozapp3.png"
        width={1361}
        height={800}
        className="w-full h-auto rounded-3xl"
      />,
    ],
  },
];
