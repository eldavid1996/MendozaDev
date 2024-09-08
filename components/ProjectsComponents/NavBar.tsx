import { Dispatch, SetStateAction } from "react";
import { NavItem } from "./NavItem";

interface NavBarProps {
  items: {
    name: string;
    icon: JSX.Element;
  }[];
  actualProjectId: number;
  setActualProject: Dispatch<SetStateAction<number>>;
}

export function NavBar({
  items,
  actualProjectId,
  setActualProject,
}: NavBarProps) {
  return (
    <nav
      className={`flex justify-center rounded-full md:rounded-3xl 
           md:mr-12 lg:mr-16 xl:mr-20 2xl:mr-24 `}
    >
      <div
        className={`flex rounded-full md:rounded-3xl
        transform 2xl:hover:scale-105 duration-500 ease-in-out`}
      >
        <div
          className={`flex rounded-full md:rounded-3xl shadow-lg shadow-black dark:shadow-white 
           transition-shadow duration-1000 ease-in-out `}
        >
          <div
            className={`flex rounded-full md:rounded-3xl bg-white/60 dark:bg-black/60 opacity-90 
              transition-colors duration-1000 ease-in-out `}
          >
            <ul
              className={`flex rounded-full md:rounded-3xl p-2 items-center 
              md:flex-col xs:gap-1 sm:gap-2 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10
              sm:px-3 md:px-5 md:py-12 `}
            >
              {items.map((item, index) => (
                /* Nav item */
                <NavItem
                  index={index}
                  key={index}
                  item={item}
                  actualProjectId={actualProjectId}
                  setActualProject={setActualProject}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* Buttons for a future use with for more projects */

/* <button
        title="Previous project"
        // onClick={handleLeftClick}
        className="max-sm:hidden p-2 rounded-full shadow-lg bg-light-bg/75 dark:bg-dark-bg/75 transform hover:scale-110 duration-300 ease-in-out"
      >
        <LeftArrowIcon width={24} height={24} />
</button> */

/* <button
        title="Next project"
        //onClick={handleRightClick}
        className="max-sm:hidden transform hover:scale-110 duration-300 ease-in-out bg-light-bg/75 dark:bg-dark-bg/75 p-2 rounded-full shadow-lg"
      >
        <RightArrowIcon width={24} height={24} />
</button> */
