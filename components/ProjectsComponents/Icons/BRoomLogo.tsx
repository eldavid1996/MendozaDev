import { SVGProps } from "react";

export const BRoomLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 126.000000 126.000000"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 xs:mr-2 xs:w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 `}
      {...props}
    >
      <g
        className="fill-current"
        transform="translate(0.000000,126.000000) scale(0.100000,-0.100000)"
      >
        <path
          d="M265 1236 c-44 -7 -90 -16 -102 -20 l-23 -7 0 -260 c0 -221 -2 -259
          -15 -259 -8 0 -40 -10 -72 -22 l-58 -21 41 -17 c22 -10 55 -21 72 -25 l32 -7
          0 -273 c0 -151 4 -276 8 -279 31 -19 214 -40 357 -40 326 0 584 87 704 238
          104 131 44 274 -162 387 l-50 27 38 18 c21 10 64 43 95 73 47 46 59 66 69 108
          27 112 -40 208 -205 291 -71 36 -217 77 -327 91 -102 14 -301 12 -402 -3z
          m487 -521 c96 -16 219 -55 212 -66 -7 -11 -116 -45 -217 -66 -104 -22 -394
          -24 -515 -4 l-83 14 3 51 3 51 55 12 c142 33 378 37 542 8z"
        />
      </g>
    </svg>
  );
};
