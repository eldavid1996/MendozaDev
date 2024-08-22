import NextImage from "next/image";

interface ImageProps {
  headerTitle: string;
}

export function Image({ headerTitle }: ImageProps) {
  return (
    <aside
      className={`fixed right-0 -bottom-5 -z-10 opacity-20 
        max-w-[500px] max-h-[500px] 2xl:opacity-40 `}
    >
      <NextImage
        src="/images/not-found.png"
        alt={headerTitle}
        priority
        width={500}
        height={500}
        className="w-full h-auto"
      />
    </aside>
  );
}
