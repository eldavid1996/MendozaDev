import { DateIcon } from "./Icons/DateIcon";
import { MapIcon } from "./Icons/MapIcon";
import { Me } from "./Me";

export function RightCard() {
  return (
    <section
      className={`flex flex-col rounded-3xl w-full max-w-sm 
         transform 2xl:hover:scale-105 transition-transform duration-500 ease-in-out `}
    >
      <div
        className={`flex flex-col rounded-3xl shadow-2xl shadow-black dark:shadow-white 
          transition-shadow duration-1000 ease-in-out`}
      >
        <div
          className={`flex flex-col text-center items-center rounded-3xl p-3 gap-3 bg-white/60 dark:bg-black/60
             md:p-5 md:gap-5 transition-colors duration-1000 ease-in-out`}
        >
          <a
            title="Linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/davidmendozatenorio/"
            className={`hover:animate-pulse active:animate-ping hover:underline decoration-secondary 
              transform 2xl:hover:scale-110 transition-transform duration-500 ease-in-out`}
          >
            <h1
              className={`flex font-bold text-md text-secondary 
                   md:text-2xl transition-colors ease-in-out`}
            >
              David Mendoza Tenorio
            </h1>
          </a>
          <a
            title="Linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/davidmendozatenorio/"
            className="rounded-full hover:animate-pulse active:animate-ping"
          >
            {/* Me Image */}
            <Me />
          </a>
          <a
            title="Google Maps"
            target="_blank"
            href="https://www.google.com/maps/dir//Huelva/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0xd11cfe6d744284b:0xd82baac110b40f83!3e0?sa=X&ved=1t:3747&ictx=111"
            className={`hover:underline hover:animate-pulse active:animate-ping
              transform 2xl:hover:scale-110 transition-transform duration-500 ease-in-out`}
          >
            <h2
              className={`flex font-bold text-xs text-black dark:text-white 
                  md:text-base transition-colors duration-1000 ease-in-out`}
            >
              <MapIcon />
              Huelva 21006, Andalusia, Spain
            </h2>
          </a>
          <a
            title="Google Calendar"
            target="_blank"
            href="https://calendar.google.com/calendar/u/0?cid=b3J1Z2FtZW5kb3phQGdtYWlsLmNvbQ"
            className={`hover:underline hover:animate-pulse active:animate-ping
                transform 2xl:hover:scale-110 transition-transform duration-500 ease-in-out`}
          >
            <h3
              className={`flex font-bold text-xs text-black dark:text-white 
                   md:text-base transition-colors duration-1000 ease-in-out`}
            >
              <DateIcon />
              08-01-1996
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}
