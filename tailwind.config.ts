import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#FFFFFF",
          text: "#000000",
        },
        dark: {
          bg: "#000000",
          text: "#FFFFFF",
        },
        secondary: "#d35400",
      },
      backgroundImage: {
        "grandient-cover":
          "linear-gradient(to right top, #6da2bb, #91b8cf, #91b8cf, #91b8cf, #6da2bb)",
        "dark-grandient-cover":
          "linear-gradient(to right top, #3a0a5a, #4d2a78, #6f4d8b, #8a74a1, #a18bba);",
      },
    },
  },
  darkMode: "class",
};
export default config;
