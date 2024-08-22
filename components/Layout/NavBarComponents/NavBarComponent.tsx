"use client";

import { usePathname } from "next/navigation";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { useNavigationContext } from "@/app/context/NavigationContext";
import { MovementTransition } from "@/components/Shared/MovementTransition";
import { HomeIcon, ProjectsIcon, StudiesIcon, UserIcon } from "./Icons";
import { NavBar } from "./NavBar";

const items = [
  {
    icon: <HomeIcon />,
    link: "/",
  },
  {
    icon: <UserIcon />,
    link: "/aboutme",
  },
  {
    icon: <ProjectsIcon />,
    link: "/projects",
  },
  {
    icon: <StudiesIcon />,
    link: "/studies",
  },
];

export function NavBarComponent() {
  const pathname = usePathname();
  const { onPageNavigate } = useNavigationContext();
  const { translation } = useLanguageContext();

  const {
    "navBar.home": home,
    "navBar.aboutMe": aboutMe,
    "navBar.projects": projects,
    "navBar.studies": studies,
  } = translation;

  const namesNavbarTranslation = [home, aboutMe, projects, studies];

  return (
    <nav aria-label="Main navigation">
      <div
        className={`fixed flex rounded-2xl right-0 left-0 z-40 bottom-5 justify-center `}
      >
        {/* Transition first load */}
        <MovementTransition position="top">
          {/* Navbar */}
          <NavBar
            pathname={pathname}
            onPageNavigate={onPageNavigate}
            items={items}
            namesNavbarTranslation={namesNavbarTranslation}
          />
        </MovementTransition>
      </div>
    </nav>
  );
}
