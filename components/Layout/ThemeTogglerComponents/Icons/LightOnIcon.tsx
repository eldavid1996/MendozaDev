import { SVGProps } from "react";

export const LightOnIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 64 64" width={36} height={36} {...props}>
      <style>
        {
          ".cls-1{fill:#ff927d;}.cls-2{fill:#fff35f;stroke:#54596e;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.cls-3,.cls-4{fill:#54596e;}.cls-3{opacity:0.15;"
        }
      </style>

      <title>sun</title>

      <g id="sun">
        <path
          className="cls-1"
          d="M37.69,5.1h0a6.33,6.33,0,0,1,11,4.56h0a6.33,6.33,0,0,0,6.64,6.64h0a6.33,6.33,0,0,1,4.56,11h0a6.32,6.32,0,0,0,0,9.38h0a6.33,6.33,0,0,1-4.56,11h0a6.33,6.33,0,0,0-6.64,6.64h0a6.33,6.33,0,0,1-11,4.56h0a6.32,6.32,0,0,0-9.38,0h0a6.33,6.33,0,0,1-11-4.56h0a6.33,6.33,0,0,0-6.64-6.64h0a6.33,6.33,0,0,1-4.56-11h0a6.32,6.32,0,0,0,0-9.38h0a6.33,6.33,0,0,1,4.56-11h0A6.33,6.33,0,0,0,17.3,9.66h0a6.33,6.33,0,0,1,11-4.56h0A6.32,6.32,0,0,0,37.69,5.1Z"
        />

        <circle className="cls-2" cx="33" cy="32" r="22" />

        <path
          className="cls-3"
          d="M33,48A22,22,0,0,1,11.21,29,22.78,22.78,0,0,0,11,32a22,22,0,0,0,44,0,22.78,22.78,0,0,0-.21-3A22,22,0,0,1,33,48Z"
        />

        <circle className="cls-4" cx="22" cy="23" r="2" />

        <circle className="cls-4" cx="44" cy="23" r="2" />

        <path
          className="cls-4"
          d="M40,31.18c0-1.57-14-1.57-14,0v0C26,33.86,29.13,36,33,36s7-2.14,7-4.79Z"
        />

        <ellipse className="cls-1" cx="33" cy="33" rx="3" ry="1" />
      </g>
    </svg>
  );
};
