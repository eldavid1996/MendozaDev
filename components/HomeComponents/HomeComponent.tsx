import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useLanguageContext } from "@/app/context/LanguageContext";

export function HomeComponent() {
  const { translation } = useLanguageContext();

  return (
    <main className="font-bold fixed z-[0] inset-0 flex items-center px-2 gap-2 mb-24 mt-32 md:px-28 md:my-28 rounded-full bg-light-bg/[0.03] dark:bg-dark-bg/[0.03]">
      <aside className="max-md:fixed z-[-1] max-md:opacity-10 m-6">
        <Image
          className="transform hover:scale-110 duration-300 ease-in-out"
          src="/images/Home.png"
          alt={translation.home.introduccion.altImage}
          priority
          width={700}
          height={700}
        />
      </aside>
      <article className="flex flex-col space-y-8 lg:space-y-14 items-center">
        <header className="text-xl w-full transform hover:scale-110 duration-300 ease-in-out">
          <h1 className="md:text-3xl lg:text-6xl text-center">
            {translation.home.introduccion.headerTitle}
          </h1>
          <h2 className="text-center">
            <TypeAnimation
              key={translation.home.introduccion.headerSubtitle1}
              sequence={[
                translation.home.introduccion.headerSubtitle1,
                1000,
                translation.home.introduccion.headerSubtitle2,
                1000,
                translation.home.introduccion.headerSubtitle3,
                1000,
                translation.home.introduccion.headerSubtitle4,
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="md:text-2xl lg:text-3xl text-secondary"
            />
          </h2>
        </header>
        <p className="font-mono text-sm md:text-md lg:text-xl text-center w-full px-6 md:px-8 transform hover:scale-110 duration-300 ease-in-out">
          {translation.home.introduccion.content}
        </p>

        <footer className="text-sm md:text-md lg:text-xl space-x-2 sm:space-x-8 lg:space-x-48 w-full flex justify-center">
          <Link
            title={translation.home.introduccion.textLink1}
            href="/projects"
            className="p-1 md:p-2 lg:p-3 border-4 rounded-full bg-light-bg/25 dark:bg-dark-bg/25 hover:shadow-xl hover:shadow-dark-bg/50 dark:hover:shadow-light-bg/50 border-light-bg dark:border-dark-bg transform hover:scale-110 duration-300 ease-in-out"
          >
            {translation.home.introduccion.textLink1}
          </Link>
          <Link
            title={translation.home.introduccion.textLink2}
            target="_blank"
            href="/Currículum.pdf"
            className="p-1 md:p-2 lg:p-3 border-4 rounded-full bg-light-bg/25 dark:bg-dark-bg/25 hover:shadow-xl hover:shadow-dark-bg/50 dark:hover:shadow-light-bg/50 text-secondary border-secondary transform hover:scale-110 duration-300 ease-in-out"
          >
            {translation.home.introduccion.textLink2}
          </Link>
        </footer>
      </article>
    </main>
  );
}
