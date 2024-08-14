"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { MotionTransition } from "./effetcs/MotionTransition";
import { HomeIcon, ProjectsIcon, StudiesIcon, UserIcon } from "./icons/navbar";

const itemsNavBar = [
  {
    icon: <HomeIcon width={32} height={32} />,
    link: "/",
  },
  {
    icon: <UserIcon width={32} height={32} />,
    link: "/aboutme",
  },
  {
    icon: <ProjectsIcon width={32} height={32} />,
    link: "/projects",
  },
  {
    icon: <StudiesIcon width={32} height={32} />,
    link: "/studies",
  },
];

export function NavBar() {
  const pathname = usePathname();
  const { translation } = useLanguageContext();

  const namesNavbarTranslation = [
    translation.navBar.home,
    translation.navBar.aboutme,
    translation.navBar.projects,
    translation.navBar.studies,
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="fixed z-40 bottom-8 w-full flex justify-center"
    >
      <MotionTransition
        position="top"
        className="fixed flex bottom-8 justify-center w-full p-auto"
      >
        <div className="flex items-center rounded-full bg-light-bg/50 dark:bg-dark-bg/50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          {itemsNavBar.map((item, index) => (
            <Link
              key={index}
              title={namesNavbarTranslation[index]}
              aria-label={namesNavbarTranslation[index]}
              href={item.link}
              className={`p-1 max-sm:scale-75 m-1 md:m-3 md:p-2 rounded-full  ${
                pathname === item.link
                  ? "bg-secondary"
                  : "hover:bg-light-bg dark:hover:bg-dark-bg transform hover:scale-100 md:hover:scale-125 transition-transform duration-300 ease-in-out "
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </MotionTransition>
    </nav>
  );
}
