import { TypeAnimation } from "react-type-animation";

interface HeaderCardProps {
  headerTitle: string;
  headerSubtitle1: string;
  headerSubtitle2: string;
  headerSubtitle3: string;
  headerSubtitle4: string;
}

export function HeaderCard({
  headerTitle,
  headerSubtitle1,
  headerSubtitle2,
  headerSubtitle3,
  headerSubtitle4,
}: HeaderCardProps) {
  return (
    <header
      className={`flex flex-col gap-2 xs:gap-4 sm:gap-8 md:gap-10 lg:gap-12`}
    >
      <h1
        className={`font-bold text-xl text-center text-black dark:text-white 
              xs:text-2xl md:text-3xl lg:text-6xl 
              transition-colors ease-in-out`}
      >
        {headerTitle}
      </h1>
      <h2
        className={`animate-bounce font-bold text-md text-center text-secondary 
              xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}
      >
        <TypeAnimation
          sequence={[
            headerSubtitle1,
            1000,
            headerSubtitle2,
            1000,
            headerSubtitle3,
            1000,
            headerSubtitle4,
            1000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </h2>
    </header>
  );
}
