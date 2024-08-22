import NextImage from "next/image";

interface ImageProps {
  altImage: string;
}

export function Image({ altImage }: ImageProps) {
  return (
    <aside
      className={`absolute left-0 max-xl:opacity-10 
        transform 2xl:hover:scale-105 duration-500 ease-in-out`}
    >
      <NextImage
        src="/images/home.png"
        alt={altImage}
        priority
        width={500}
        height={500}
      />
    </aside>
  );
}
