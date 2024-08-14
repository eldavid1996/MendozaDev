import Image from "next/image";
import Link from "next/link";

const itemsProjects = [
  {
    images: [
      <Image
        key={0}
        priority
        title="Home"
        alt="Home"
        src="/images/projects/mendogames/mendogames1-preview.png"
        about="/images/projects/mendogames/mendogames1.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
      <Image
        key={0}
        priority
        title="Games"
        alt="Games"
        src="/images/projects/mendogames/mendogames2-preview.png"
        about="/images/projects/mendogames/mendogames2.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
      <Image
        key={0}
        priority
        title="Form"
        alt="Form"
        src="/images/projects/mendogames/mendogames3-preview.png"
        about="/images/projects/mendogames/mendogames3.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
    ],
  },
  {
    images: [
      <Image
        key={0}
        priority
        title="Login"
        alt="Login"
        src="/images/projects/broom/broom1-preview.png"
        about="/images/projects/broom/broom1.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
      <Image
        key={0}
        priority
        title="Tasks"
        alt="Tasks"
        src="/images/projects/broom/broom2-preview.png"
        about="/images/projects/broom/broom2.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
      <Image
        key={0}
        priority
        title="Tasks Users"
        alt="Tasks Users"
        src="/images/projects/broom/broom3-preview.png"
        about="/images/projects/broom/broom3.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
    ],
  },
  {
    images: [
      <Image
        key={0}
        priority
        title="Register"
        alt="Register"
        src="/images/projects/mendozapp/mendozapp1-preview.png"
        about="/images/projects/mendozapp/mendozapp1.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
      <Image
        key={0}
        priority
        title="Login"
        alt="Login"
        src="/images/projects/mendozapp/mendozapp2-preview.png"
        about="/images/projects/mendozapp/mendozapp2.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
      <Image
        key={0}
        priority
        title="Chat"
        alt="Chat"
        src="/images/projects/mendozapp/mendozapp3-preview.png"
        about="/images/projects/mendozapp/mendozapp3.png"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg"
      />,
    ],
  },
];

interface ProjectsComponentImagesProps {
  actualProjectId: number;
}

export function ProjectsComponentImages({
  actualProjectId,
}: ProjectsComponentImagesProps) {
  return (
    <div className="flex gap-x-6 md:gap-x-12">
      {itemsProjects[actualProjectId].images.map((item, index) => (
        <button
          key={index}
          className={`flex transform hover:scale-110 duration-300 ease-in-out`}
        >
          <Link
            href={item.props.about}
            target="_blank"
            className="min-w-20 xl:min-w-32 2xl:min-w-48 "
          >
            {item}
          </Link>
        </button>
      ))}
    </div>
  );
}
