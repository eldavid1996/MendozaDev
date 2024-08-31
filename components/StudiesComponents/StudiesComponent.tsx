import { useLanguageContext } from "@/app/context/LanguageContext";
import { Image as AsideImage } from "./Image";
import { StudiesCards } from "./StudiesCards";
import { ToggleLanguageTransition } from "../Shared/ToggleLanguageTransition";

export function StudiesComponent() {
  const { translation } = useLanguageContext();

  const {
    "studies.altImage": altImage,
    "studies.studiesTitles": studiesTitles,
    "studies.studiesDescriptions": studiesDescriptions,
  } = translation;
  const items = [
    {
      title: studiesTitles[0],
      content: studiesDescriptions[0],
      web: "https://www.iessansebastian.com/web/c-f-g-s-de-desarrollo-de-aplicaciones-web/",
    },
    {
      title: studiesTitles[1],
      content: studiesDescriptions[1],
      web: "https://www.iessansebastian.com/web/c-f-g-s-de-administracion-de-sistemas-informaticos-en-red/",
    },
    {
      title: studiesTitles[2],
      content: studiesDescriptions[2],
      web: "https://www.iessansebastian.com/web/c-f-g-m-de-sistemas-microinformaticos-y-redes/",
    },
    {
      title: studiesTitles[3],
      content: studiesDescriptions[3],
      web: "https://www.cruzroja.es/principal/web/provincial-huelva/centro-de-formacion",
    },
  ];

  return (
    <>
      <article className="relative flex h-screen items-center justify-center">
        {/* Transition when language changes */}
        <ToggleLanguageTransition>
          {/* Cards Sections With Studies Information */}
          <StudiesCards items={items} />
        </ToggleLanguageTransition>
      </article>
      {/* Aside Image */}
      <AsideImage altImage={altImage} />
    </>
  );
}
