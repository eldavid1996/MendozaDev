import { useLanguageContext } from "@/app/context/LanguageContext";
import { Image as AsideImage } from "./Image";

export function StudiesComponent() {
  const { translation } = useLanguageContext();

  const { "studies.altImage": altImage } = translation;

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-3xl font-bold underline text-center">
          Page In Development
        </div>
      </div>
      <AsideImage altImage={altImage} />
    </>
  );
}
