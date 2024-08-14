"use client";

import Link from "next/link";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { MotionTransition } from "./effetcs/MotionTransition";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SmartPhoneIcon,
} from "@/components/shared/icons/header";

const itemsHeader = [
  {
    name: "Linkedin",
    icon: <LinkedinIcon width={24} height={24} />,
    link: "https://www.linkedin.com/in/davidmendozatenorio/",
  },
  {
    name: "Github",
    icon: <GithubIcon width={24} height={24} />,
    link: "https://github.com/eldavid1996",
  },
  {
    name: "Whatsapp",
    icon: <SmartPhoneIcon width={24} height={24} />,
    link: "https://wa.me/34640552384",
  },
  {
    name: "Email",
    icon: <MailIcon width={24} height={24} />,
    link: "mailto:orugamendoza@gmail.com",
  },
];

export function Header() {
  const { translation } = useLanguageContext();

  return (
    <header>
      <MotionTransition
        position="bottom"
        className="fixed z-50 flex flex-wrap top-4 justify-center sm:justify-between w-full"
      >
        <h1 className="ml-4 md:ml-24 my-1 text-2xl font-bold sm:text-5xl transform hover:scale-125 transition-transform duration-300 ease-in-out">
          <Link
            title={translation.home.headerTitle}
            href="/"
            aria-label="Ir a la página principal"
          >
            Mendoza
            <span className="text-secondary">Dev</span>
          </Link>
        </h1>
        <nav>
          <div className="flex items-center px-3 py-2 md:px-6 md:py-3 gap-2 md:mr-24 bg-light-bg/15 dark:bg-dark-bg/15 rounded-full opacity-90 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            {itemsHeader.map((item, index) => (
              <Link
                key={index}
                title={item.name}
                target="_blank"
                aria-label={item.name}
                href={item.link}
                className="px-2 py-2 sm:px-3 sm:py-3 rounded-lg cursor-pointer hover:bg-light-bg dark:hover:bg-dark-bg transform hover:scale-125 transition-transform duration-300 ease-in-out"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </nav>
      </MotionTransition>
    </header>
  );
}
