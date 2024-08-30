import Link from "next/link";

interface FooterProps {
  items: {
    github: string;
    web: string;
  }[];
  actualProjectId: number;
}

export function Footer({ items, actualProjectId }: FooterProps) {
  const links = [items[actualProjectId].github, items[actualProjectId].web];
  return (
    <footer
      className={`flex justify-center items-center text-center space-x-12
           md:space-x-14 lg:space-x-24 xl:space-x-32 2xl:space-x-40`}
    >
      {links.map((link, index) => (
        <div
          key={index}
          className={`rounded-full hover:animate-pulse active:animate-ping
              transform xl:hover:scale-125 transition-transform duration-500 ease-in-out`}
        >
          <div
            className={`rounded-full shadow-xl shadow-black dark:shadow-white
                transition-shadow duration-1000 ease-in-out`}
          >
            {index % 2 === 0 ? (
              <Link
                target="_blank"
                href={link}
                title="Github"
                className={`flex rounded-full p-2 font-extrabold text-black dark:text-white bg-white dark:bg-black/90
                   sm:p-3 md:p-4 
                   transition-colors duration-1000 ease-in-out `}
              >
                Github
              </Link>
            ) : (
              <Link
                target="_blank"
                href={link}
                title="Website"
                className={`flex rounded-full p-2 font-extrabold text-black dark:text-white bg-secondary dark:bg-secondary/70
                   sm:p-3 md:p-4 
                   transition-colors duration-1000 ease-in-out `}
              >
                Website
              </Link>
            )}
          </div>
        </div>
      ))}
    </footer>
  );
}
