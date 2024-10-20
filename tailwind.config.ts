import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "supalarge": "0 7px 50px 20px rgba(0, 0, 0, 0.12)"
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
