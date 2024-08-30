import { useLanguageContext } from "@/app/context/LanguageContext";
import { Image as AsideImage } from "./Image";
import { LeftCards } from "./LeftCards";
import { RightCard } from "./RightCard";

export function AboutMeComponent() {
  const { translation } = useLanguageContext();

  const { "aboutMe.altImage": altImage } = translation;

  return (
    <>
      <article
        className={`relative flex h-screen items-center justify-center gap-4 lg:gap-10`}
      >
        <LeftCards />
        <RightCard />
      </article>
      {/* Image Aside */}
      <AsideImage altImage={altImage} />
    </>
  );
}
