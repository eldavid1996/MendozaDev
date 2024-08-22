interface ContentCardProps {
  content: string;
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <p
      className={`font-mono text-sm text-center xs:text-md md:text-lg lg:text-xl `}
    >
      <span
        className={`font-bold text-black dark:text-white 
             transition-colors ease-in-out`}
      >
        {content}
      </span>
    </p>
  );
}
