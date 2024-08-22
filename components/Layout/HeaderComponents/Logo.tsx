import { usePathname } from "next/navigation";

interface LogoProps {
  onPageNavigate: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  headerTitle: string;
}

export function Logo({ onPageNavigate, headerTitle }: LogoProps) {
  const pathname = usePathname();
  return (
    <h1
      className={` 
          hover:animate-pulse active:animate-ping text-4xl font-bold 
          xs:ml-6 xs:text-3xl sm:text-5xl md:text-6xl md:ml-12 lg:ml-24 
          transform lg:hover:scale-110 transition-transform duration-500 ease-in-out `}
    >
      <a
        href="/"
        title={headerTitle}
        onClick={onPageNavigate}
        aria-label="Ir a la página principal"
        className={`${pathname === "/" && "cursor-default"}
          text-black dark:text-white 
          transition-colors duration-1000 ease-in-out`}
      >
        Mendoza
        <span className="animate-pulse text-secondary ">Dev</span>
      </a>
    </h1>
  );
}
