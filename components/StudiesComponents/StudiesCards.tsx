interface StudiesCardsProps {
  items: {
    title: string;
    content: string;
    web: string;
  }[];
}

export function StudiesCards({ items }: StudiesCardsProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-2
             xs:gap-4 sm:gap-6 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20`}
    >
      {items.map((item, index) => (
        <a
          href={item.web}
          target="_blank"
          key={index}
          className={`hover:animate-pulse active:animate-ping flex flex-col rounded-3xl w-full max-w-sm 
              transform 2xl:hover:scale-105 transition-transform duration-500 ease-in-out `}
        >
          <section
            className={`flex flex-col h-full justify-between rounded-3xl shadow-2xl shadow-black dark:shadow-white 
                transition-shadow duration-1000 ease-in-out`}
          >
            <div
              className={`flex flex-col text-center items-center rounded-3xl p-2 gap-2 bg-white/60 dark:bg-black/60
                  md:p-5 md:gap-5 transition-colors duration-1000 ease-in-out flex-grow`}
            >
              <h1
                className={`text-sm font-bold text-secondary
                     md:text-md lg:text-lg xl:text-xl `}
              >
                {item.title}
              </h1>
              <p
                className={`text-xs font-bold text-black dark:text-white
                    md:text-sm lg:text-md transition-colors duration-1000 ease-in-out`}
              >
                {item.content}
              </p>
            </div>
          </section>
        </a>
      ))}
    </div>
  );
}
