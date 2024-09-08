import { Dispatch, SetStateAction, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LeftArrowIcon, RightArrowIcon } from "./Icons";

interface FullImagesProps {
  actualProjectId: number;
  items: {
    images: JSX.Element[];
  }[];
  imageSelected: number | null;
  setImageSelected: Dispatch<SetStateAction<number | null>>;
}

export function FullImages({
  actualProjectId,
  items,
  imageSelected,
  setImageSelected,
}: FullImagesProps) {
  const images = items[actualProjectId].images;

  function handleFullImageClick() {
    setImageSelected(null);
  }

  function handlePrevImage() {
    if (imageSelected === null) return;
    const prevIndex = (imageSelected - 1 + images.length) % images.length;
    setImageSelected(prevIndex);
  }

  function handleNextImage() {
    if (imageSelected === null) return;
    const nextIndex = (imageSelected + 1) % images.length;
    setImageSelected(nextIndex);
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setImageSelected(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setImageSelected]);

  return (
    <AnimatePresence>
      {/* Image Selected */}
      {imageSelected !== null && (
        <motion.aside
          key={imageSelected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed inset-0 z-50 cursor-pointer flex items-center justify-center bg-black bg-opacity-80`}
          onClick={handleFullImageClick}
        >
          {/* Prev Button */}
          <button
            title="Previous project"
            className={`absolute left-20 top-1/2 transform -translate-y-1/2 rounded-xl bg-white/80
                xl:p-4 xl:hover:animate-pulse xl:active:animate-ping xl:hover:scale-110 transition-transform duration-500 ease-in-out`}
            onClick={(e) => {
              e.stopPropagation(); // For avoiding that closes the image
              handlePrevImage();
            }}
          >
            <LeftArrowIcon />
          </button>
          {/* Selected Image */}
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={images[imageSelected].props.src}
              alt="Imagen seleccionada"
              className=" max-h-full object-contain rounded-xl"
            />
          </div>
          {/* Next Button */}
          <button
            title="Next project"
            className={`absolute right-20 top-1/2 transform -translate-y-1/2 rounded-xl bg-white/80
                xl:p-4 xl:hover:animate-pulse xl:active:animate-ping xl:hover:scale-110 transition-transform duration-500 ease-in-out`}
            onClick={(e) => {
              e.stopPropagation(); // For avoiding that closes the image
              handleNextImage();
            }}
          >
            <RightArrowIcon />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
