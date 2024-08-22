import { HeaderCard } from "./HeaderCard";
import { ContentCard } from "./ContentCard";
import { FooterCard } from "./FooterCard";

interface CardProps {
  onPageNavigate: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  headerTitle: string;
  headerSubtitles: string[];
  content: string;
  textLink1: string;
  textLink2: string;
}

export function Card({
  onPageNavigate,
  headerTitle,
  headerSubtitles,
  content,
  textLink1,
  textLink2,
}: CardProps) {
  return (
    <div
      className={`flex flex-col rounded-3xl w-full max-w-md 
          xs:max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl xl:pr-28 
          transform 2xl:hover:scale-105 transition-transform duration-500 ease-in-out `}
    >
      <div
        className={`flex flex-col rounded-3xl shadow-2xl shadow-black dark:shadow-white 
          transition-shadow duration-1000 ease-in-out`}
      >
        <div
          className={`flex flex-col rounded-3xl p-8 gap-2 bg-white/60 dark:bg-black/60
            xs:gap-4 sm:gap-8 md:gap-10 lg:gap-12 
            transition-colors duration-1000 ease-in-out`}
        >
          {/* Header */}
          <HeaderCard
            headerTitle={headerTitle}
            headerSubtitle1={headerSubtitles[0]}
            headerSubtitle2={headerSubtitles[1]}
            headerSubtitle3={headerSubtitles[2]}
            headerSubtitle4={headerSubtitles[3]}
          />
          {/* Content */}
          <ContentCard content={content} />
          {/* Footer */}
          <FooterCard
            textLink1={textLink1}
            textLink2={textLink2}
            onPageNavigate={onPageNavigate}
          />
        </div>
      </div>
    </div>
  );
}
