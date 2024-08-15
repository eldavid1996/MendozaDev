import Image from "next/image";
// import { RightArrowIcon, LeftArrowIcon } from "../shared/icons/projects";

interface ProjectsComponentNavBarProps {
  actualProjectId: number;
  setActualProject: (id: number) => void;
}

export function ProjectsComponentNavBar({
  actualProjectId,
  setActualProject,
}: ProjectsComponentNavBarProps) {
  return (
    <nav className="relative flex items-center justify-center">
      {/* button
        title="Previous project"
        // onClick={handleLeftClick}
        className="max-sm:hidden p-2 rounded-full shadow-lg bg-light-bg/75 dark:bg-dark-bg/75 transform hover:scale-110 duration-300 ease-in-out"
      >
        <LeftArrowIcon width={24} height={24} />
      </button> */}
      <ul className="flex space-x-2 md:space-x-8 mx-6 p-2 rounded-full bg-light-bg/20 dark:bg-dark-bg/20 bg-gray shadow-md hover:scale-105 transition duration-300 ease-in-out">
        {itemsProjects.map((item, index) => (
          <li key={index}>
            <button
              title={item.name}
              onClick={() => setActualProject(index)}
              className={`flex items-center rounded-full p-2 ${
                actualProjectId === index
                  ? "bg-secondary/75 hover:bg-secondary/75"
                  : "hover:bg-light-bg/50 dark:hover:bg-dark-bg/50 hover:scale-110 transition duration-300 ease-in-out"
              }`}
            >
              <span className="mr-2 min-w-4">{item.logo}</span>
              <span className="text-xs md:text-lg">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
      {/* <button
        title="Next project"
        //onClick={handleRightClick}
        className="max-sm:hidden transform hover:scale-110 duration-300 ease-in-out bg-light-bg/75 dark:bg-dark-bg/75 p-2 rounded-full shadow-lg"
      >
        <RightArrowIcon width={24} height={24} />
      </button> */}
    </nav>
  );
}

const itemsProjects = [
  {
    name: "MendoGames",
    logo: (
      <Image
        key={0}
        priority
        alt="MendoGames logo"
        src="/images/projects/mendogames/mendogames-logo.png"
        width={32}
        height={32}
        className="w-full h-auto rounded-lg"
      />
    ),
  },
  {
    name: "BRoom",
    logo: (
      <Image
        key={1}
        priority
        alt="Broom logo"
        src="/images/projects/broom/broom-logo.png"
        width={32}
        height={32}
        className="w-full h-auto rounded-lg"
      />
    ),
  },
  {
    name: "MendozApp",
    logo: (
      <Image
        key={2}
        priority
        alt="MendozApp logo"
        src="/images/projects/mendozapp/mendozapp-logo.png"
        width={32}
        height={32}
        className="w-full h-auto rounded-lg"
      />
    ),
  },
];
