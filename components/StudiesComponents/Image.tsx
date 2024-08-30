import NextImage from "next/image";

interface ImageProps {
  altImage: string;
}

export function Image({ altImage }: ImageProps) {
  return (
    <aside className="fixed left-0 bottom-0 z-[-1] opacity-20 w-auto h-auto max-w-[900px] max-h-[900px]">
      <NextImage
        src="/images/studies.png"
        alt={altImage}
        priority
        width={500}
        height={500}
        style={{ width: "100%", height: "auto" }}
      />
    </aside>
  );
}
