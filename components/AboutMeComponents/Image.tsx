import NextImage from "next/image";

interface ImageProps {
  altImage: string;
}

export function Image({ altImage }: ImageProps) {
  return (
    <aside className="fixed -left-24 -bottom-16 z-[-1] opacity-20 w-auto h-auto max-w-[900px] max-h-[900px]">
      <NextImage
        src="/images/about-me.png"
        alt={altImage}
        priority
        width={500}
        height={500}
        style={{ width: "100%", height: "auto" }}
      />
    </aside>
  );
}
