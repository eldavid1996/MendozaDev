interface LeftCardProps {
  title: string;
  items: { item: string; icon: React.ReactNode; info: string }[];
}

export function LeftCard({ title, items }: LeftCardProps) {
  return (
    <div
      className={`flex rounded-3xl transform 
          2xl:hover:scale-105 transition-transform duration-500 ease-in-out`}
    >
      <div
        className={`flex rounded-3xl shadow-2xl shadow-black dark:shadow-white
             transition-shadow duration-1000 ease-in-out`}
      >
        <div
          className={`flex flex-col rounded-3xl text-center items-center p-2 gap-2 bg-white/60 dark:bg-black/60 
             lg:flex-row md:p-5 md:gap-5 transition-colors duration-1000 ease-in-out`}
        >
          <h2
            className="text-md font-bold text-black dark:text-white 
               lg:text-2xl transition-colors ease-in-out "
          >
            {title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex hover:animate-pulse active:animate-ping
                     transform 2xl:hover:scale-110 transition-transform duration-500 ease-in-out`}
              >
                <a
                  title={item.item}
                  target="_blank"
                  href={item.info}
                  className="flex flex-col items-center"
                >
                  <span>{item.icon}</span>
                  <span
                    className={`font-bold text-sm text-black dark:text-white
                         max-xl:hidden transition-colors duration-1000 ease-in-out`}
                  >
                    {item.item}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
