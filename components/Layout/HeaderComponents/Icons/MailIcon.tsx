import { SVGProps } from "react";

export const MailIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <rect x="3" y="3" width="18" height="18" rx="2" />{" "}
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
};
