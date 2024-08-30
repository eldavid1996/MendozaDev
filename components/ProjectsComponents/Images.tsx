import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectsComponentImagesProps {
  actualProjectId: number;
  items: {
    images: JSX.Element[];
  }[];
}

export function Images({
  actualProjectId,
  items,
}: ProjectsComponentImagesProps) {
  const images = items[actualProjectId].images;
  const [imageSelected, setImageSelected] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function handleImageClick(index: number) {
    if (isTransitioning) return;
    setImageSelected(index);
    setIsTransitioning(true);
  }

  function handleFullImageClick() {
    if (isTransitioning) return;
    setImageSelected(null);
    setIsTransitioning(true);
  }

  return (
    <div className="relative grid grid-cols-3 gap-2 lg:gap-4 justify-items-center">
      {images.map((image, index) => (
        <span
          key={index}
          className="hover:animate-pulse active:animate-ping transform xl:hover:scale-110 transition-transform duration-500 ease-in-out "
        >
          {/* Animation when image selected is unselected */}
          <motion.div
            layoutId={index.toString()}
            onClick={() => handleImageClick(index)}
            onAnimationComplete={() => setIsTransitioning(false)}
            className={`relative flex cursor-pointer w-16 h-16 
                xs:w-28 xs:h-18 sm:w-32 sm:h-20 md:h-24 lg:w-48 lg:h-28 xl:w-60 xl:h-32 2xl:w-64 2xl:h-36`}
          >
            {image}
          </motion.div>
        </span>
      ))}

      {/* Animation when a image is selected */}
      <AnimatePresence mode="popLayout">
        {imageSelected !== null && (
          <motion.div
            id="full-image-project"
            layoutId={imageSelected.toString()}
            className={`fixed inset-0 z-50 cursor-pointer overflow-hidden `}
            onClick={handleFullImageClick}
            onAnimationComplete={() => setIsTransitioning(false)}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {images[imageSelected]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
