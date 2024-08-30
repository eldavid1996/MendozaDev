import { LeftCard } from "./LeftCard";
import {
  ExpressIcon,
  LaravelIcon,
  MongoDBIcon,
  MySQLIcon,
  NextJSIcon,
  NodeJSIcon,
  PHPIcon,
  BootstrapIcon,
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  ReactJSIcon,
  SASSIcon,
  TailwindIcon,
  TypeScriptIcon,
  DockerIcon,
  GitIcon,
  WordPressIcon,
  FigmaIcon,
  JiraIcon,
  DrawIoIcon,
} from "./Icons";

export function LeftCards() {
  return (
    <section className="flex flex-col items-center space-y-4">
      {/* Frontend */}
      <LeftCard title="Frontend" items={itemsFrontend} />
      {/* Backend */}
      <LeftCard title="Backend" items={itemsBackend} />
      {/* Utils */}
      <LeftCard title="Utils" items={itemsUtils} />
    </section>
  );
}

const itemsFrontend = [
  {
    item: "HTML",
    icon: <HTMLIcon />,
    info: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    item: "CSS",
    icon: <CSSIcon />,
    info: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    item: "SASS",
    icon: <SASSIcon />,
    info: "https://sass-lang.com/",
  },
  {
    item: "Tailwind",
    icon: <TailwindIcon />,
    info: "https://tailwindcss.com/",
  },
  {
    item: "Bootstrap",
    icon: <BootstrapIcon />,
    info: "https://getbootstrap.com/",
  },
  {
    item: "JavaScript",
    icon: <JavaScriptIcon />,
    info: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    item: "TypeScript",
    icon: <TypeScriptIcon />,
    info: "https://www.typescriptlang.org/",
  },
  {
    item: "ReactJS",
    icon: <ReactJSIcon />,
    info: "https://reactjs.org/",
  },
];

const itemsBackend = [
  {
    item: "PHP",
    icon: <PHPIcon />,
    info: "https://www.php.net/",
  },
  {
    item: "Laravel",
    icon: <LaravelIcon />,
    info: "https://laravel.com/",
  },
  {
    item: "NodeJS",
    icon: <NodeJSIcon />,
    info: "https://nodejs.org/en/",
  },
  {
    item: "Express.js",
    icon: <ExpressIcon />,
    info: "https://expressjs.com/",
  },
  {
    item: "Next.js",
    icon: <NextJSIcon />,
    info: "https://nextjs.org/",
  },
  {
    item: "MySQL",
    icon: <MySQLIcon />,
    info: "https://www.mysql.com/",
  },
  {
    item: "MongoDB",
    icon: <MongoDBIcon />,
    info: "https://www.mongodb.com/",
  },
];

const itemsUtils = [
  {
    item: "Docker",
    icon: <DockerIcon />,
    info: "https://www.docker.com/",
  },
  {
    item: "Git",
    icon: <GitIcon />,
    info: "https://git-scm.com/",
  },
  {
    item: "Wordpress",
    icon: <WordPressIcon />,
    info: "https://wordpress.org/",
  },
  {
    item: "Figma",
    icon: <FigmaIcon />,
    info: "https://www.figma.com/",
  },
  {
    item: "Jira",
    icon: <JiraIcon />,
    info: "https://www.atlassian.com/es/software/jira",
  },
  {
    item: "Draw.io",
    icon: <DrawIoIcon />,
    info: "https://www.draw.io/",
  },
];
