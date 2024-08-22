import { SocialItem } from "./SocialItem";

interface SocialBarProps {
  items: {
    name: string;
    icon: React.ReactNode;
    link: string;
  }[];
}

export function SocialBar({ items }: SocialBarProps) {
  return (
    <div
      className={`flex rounded-full xs:mr-6 md:mr-12 lg:mr-24 
          transform lg:hover:scale-110 transition-transform duration-500 ease-in-out `}
    >
      <div
        className={`flex rounded-full shadow-lg shadow-black dark:shadow-white 
           transition-shadow duration-1000 ease-in-out `}
      >
        <div
          className={`flex rounded-full bg-white/50 dark:bg-black/50 opacity-90 
              transition-colors duration-1000 ease-in-out `}
        >
          <ul
            className={`flex rounded-full animate-pulse hover:animate-none px-3 py-2 gap-2 
                md:px-6 md:py-3 `}
          >
            {items.map((item, index) => (
              /* Social item */
              <SocialItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
