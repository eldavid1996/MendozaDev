/* BackGround for all pages */
export function BackGroundCover() {
  return (
    <aside
      className={`fixed flex -z-10 inset-0 mt-40 mb-24 rounded-full bg-white/[0.2] dark:bg-black/[0.2] 
         xs:mt-28 xs:mb-24 sm:mt-32 sm:mb-32 lg:mt-28 lg:mb-32 
         transition-colors duration-1000 ease-in-out `}
    ></aside>
  );
}
