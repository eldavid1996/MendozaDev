import Link from "next/link";

interface SocialItemProps {
  item: {
    name: string;
    icon: React.ReactNode;
    link: string;
  };
}

export function SocialItem({ item }: SocialItemProps, key: number) {
  return (
    <li
      key={key}
      className={`hover:animate-pulse active:animate-ping 
          transform lg:hover:scale-125 transition-transform duration-500 ease-in-out `}
    >
      <div
        className={`flex rounded-xl shadow-lg shadow-black dark:shadow-white 
            transition-shadow duration-1000 ease-in-out `}
      >
        <Link
          title={item.name}
          target="_blank"
          aria-label={item.name}
          href={item.link}
          className={`flex items-center p-2 rounded-xl border-2 sm:p-3 
            border-black dark:border-white hover:bg-white dark:hover:bg-black 
              transition-colors duration-1000 ease-in-out `}
        >
          {item.icon}
          <span className="absolute top-0 right-0 h-3 w-3 animate-bounce rounded-full bg-red-500 " />
        </Link>
      </div>
    </li>
  );
}
