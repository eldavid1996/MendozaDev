import { Dispatch, Key, SetStateAction } from "react";

interface NabItemProps {
  index: number;
  item: {
    name: string;
    icon: JSX.Element;
  };
  actualProjectId: number;
  setActualProject: Dispatch<SetStateAction<number>>;
}

export function NavItem(
  { index, item, actualProjectId, setActualProject }: NabItemProps,
  key: Key | null | undefined
) {
  return (
    <li key={key}>
      <button
        title={item.name}
        aria-label={item.name}
        onClick={() => setActualProject(index)}
        className={`flex rounded-full hover:animate-pulse active:animate-ping 
           transform xl:hover:scale-105 duration-500 ease-in-out`}
      >
        <div
          className={`flex rounded-full shadow-md shadow-black dark:shadow-white 
             transition-shadow duration-1000 ease-in-out 
             ${actualProjectId === index && `cursor-default`}`}
        >
          <div
            className={`flex rounded-full 
              ${
                actualProjectId === index
                  ? "bg-secondary dark:bg-secondary/75 "
                  : "bg-white dark:bg-black "
              } transition-colors duration-1000 ease-in-out`}
          >
            <span
              className={`flex rounded-full items-center p-2 font-bold 
                text-black dark:text-white text-xs md:text-lg 
                  transition-colors ease-in-out`}
            >
              {item.icon}
              {item.name}
            </span>
          </div>
        </div>
      </button>
    </li>
  );
}
