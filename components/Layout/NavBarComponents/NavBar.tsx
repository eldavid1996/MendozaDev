import { Animation } from "./Animation";
import { NavItem } from "./NavItem";

interface NavbarProps {
  pathname: string;
  onPageNavigate: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  items: {
    icon: JSX.Element;
    link: string;
  }[];
  namesNavbarTranslation: string[];
}

export function NavBar({
  pathname,
  onPageNavigate,
  items,
  namesNavbarTranslation,
}: NavbarProps) {
  return (
    <div
      className={`flex rounded-2xl shadow-xl shadow-black dark:shadow-white 
      transition-shadow duration-1000 ease-in-out `}
    >
      <div
        className={`flex rounded-2xl bg-white/65 dark:bg-black/65 opacity-95 
        transition-colors duration-1000 ease-in-out `}
      >
        {/* Mouse Movement Animation */}
        <Animation pathname={pathname} />
        <ul className={`flex rounded-xl items-center`}>
          {items.map((item, index) => (
            /* NavItem */
            <NavItem
              index={index}
              key={index}
              item={item}
              namesNavbarTranslation={namesNavbarTranslation}
              onPageNavigate={onPageNavigate}
              pathname={pathname}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
