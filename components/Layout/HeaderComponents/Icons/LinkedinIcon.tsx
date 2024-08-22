import { SVGProps } from "react";

export const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      className={`text-black dark:text-white 
          transition-colors duration-1000 ease-in-out `}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
      <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" />
    </svg>
  );
};
