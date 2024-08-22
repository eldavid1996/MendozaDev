"use client";

import { useLanguageContext } from "@/app/context/LanguageContext";
import { useNavigationContext } from "@/app/context/NavigationContext";
import { MovementTransition } from "@/components/Shared";
import { GithubIcon, LinkedinIcon, MailIcon, SmartPhoneIcon } from "./Icons";
import { Logo } from "./Logo";
import { SocialBar } from "./SocialBar";

export function HeaderComponent() {
  const { onPageNavigate } = useNavigationContext();
  const { translation } = useLanguageContext();

  const { "header.title": headerTitle } = translation;

  const items = [
    {
      name: "Linkedin",
      icon: <LinkedinIcon aria-label="Linkedin" />,
      link: "https://www.linkedin.com/in/davidmendozatenorio/",
    },
    {
      name: "Github",
      icon: <GithubIcon aria-label="Github" />,
      link: "https://github.com/eldavid1996",
    },
    {
      name: "Whatsapp",
      icon: <SmartPhoneIcon aria-label="Whatsapp" />,
      link: "https://wa.me/34640552384",
    },
    {
      name: "Email",
      icon: <MailIcon aria-label="Email" />,
      link: "mailto:orugamendoza@gmail.com",
    },
  ];

  return (
    <header aria-label="Header">
      {/* Transition first load */}
      <MovementTransition position="bottom">
        <div
          className={`fixed top-4 z-50 flex flex-col gap-2 justify-center items-center w-full 
            xs:flex-row xs:justify-between `}
        >
          {/* Logo */}
          <Logo onPageNavigate={onPageNavigate} headerTitle={headerTitle} />
          {/* SocialBar */}
          <SocialBar items={items} />
        </div>
      </MovementTransition>
    </header>
  );
}
