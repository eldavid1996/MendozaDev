interface NavItemProps {
  index: number;
  item: {
    icon: JSX.Element;
    link: string;
  };
  namesNavbarTranslation: string[];
  onPageNavigate: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  pathname: string;
}

export function NavItem(
  {
    index,
    item,
    namesNavbarTranslation,
    onPageNavigate,
    pathname,
  }: NavItemProps,
  key: number
) {
  return (
    <li
      key={key}
      className={`flex rounded-xl hover:animate-pulse active:animate-ping `}
    >
      <a
        href={item.link}
        title={namesNavbarTranslation[index]}
        onClick={onPageNavigate}
        className={`navbar-item flex items-center py-4 px-3 rounded-xl 
            xs:py-4 xs:px-7 md:px-9 lg:py-5 lg:px-11 
            ${
              pathname === item.link &&
              `navbar-item-selected 
            bg-secondary cursor-default `
            }`}
      >
        {item.icon}
      </a>
    </li>
  );
}
