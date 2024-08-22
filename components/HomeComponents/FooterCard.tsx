import Link from "next/link";

interface FooterCardProps {
  textLink1: string;
  textLink2: string;
  onPageNavigate: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function FooterCard({
  textLink1,
  textLink2,
  onPageNavigate,
}: FooterCardProps) {
  const links = [
    { text: textLink1, href: "/projects" },
    { text: textLink2, href: "/curriculum.pdf" },
  ];

  return (
    <footer
      className={`flex justify-center items-center text-center space-x-2
          xs:space-x-6 sm:space-x-10 md:space-x-14 lg:space-x-18`}
    >
      {links.map((link, index) => (
        <div
          key={index}
          className={`rounded-full hover:animate-pulse 
             transform xl:hover:scale-125 transition-transform duration-500 ease-in-out`}
        >
          <div
            className={`rounded-full shadow-xl shadow-black dark:shadow-white
                transition-shadow duration-1000 ease-in-out`}
          >
            {index % 2 === 0 ? (
              <a
                href={link.href}
                title={link.text}
                onClick={onPageNavigate}
                className={`flex rounded-full p-3 font-extrabold text-black dark:text-white bg-white dark:bg-black/90
                    sm:p-4 md:p-5 lg:p-6 xl:p-7  
                    transition-colors duration-1000 ease-in-out `}
              >
                {link.text}
              </a>
            ) : (
              <Link
                href={link.href}
                target="_blank"
                title={link.text}
                className={`flex rounded-full p-3 font-extrabold text-black dark:text-white bg-secondary dark:bg-secondary/70
                    sm:p-4 md:p-5 lg:p-6 xl:p-7
                    transition-colors duration-1000 ease-in-out `}
              >
                {link.text}
              </Link>
            )}
          </div>
        </div>
      ))}
    </footer>
  );
}
