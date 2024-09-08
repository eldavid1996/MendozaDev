import { Dispatch, SetStateAction } from "react";

interface ImagesProps {
  actualProjectId: number;
  items: {
    images: JSX.Element[];
  }[];
  setImageSelected: Dispatch<SetStateAction<number | null>>;
}

export function Images({
  actualProjectId,
  items,
  setImageSelected,
}: ImagesProps) {
  const images = items[actualProjectId].images;

  return (
    <div className="relative grid grid-cols-3 gap-2 lg:gap-4 justify-items-center">
      {images.map((image, index) => (
        <span
          key={index}
          className="hover:animate-pulse active:animate-ping transform xl:hover:scale-110 transition-transform duration-500 ease-in-out "
        >
          <div
            onClick={() => setImageSelected(index)}
            className={`relative flex cursor-pointer w-16 h-16 
                xs:w-28 xs:h-18 sm:w-32 sm:h-20 md:h-24 lg:w-48 lg:h-28 xl:w-60 xl:h-32 2xl:w-64 2xl:h-36`}
          >
            {image}
          </div>
        </span>
      ))}
    </div>
  );
}
