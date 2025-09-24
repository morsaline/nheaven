import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        black: "#000",
        title: "#121212",
        primary: "#0BA8CC",
        tomato: "#FF6B6B",
        "gray-light": "#f1f1f1",
        "light-green": "#3ECF8E",
        "light-orange": "#FFF4E9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "540px",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          DEFAULT: "1600px",
        },
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(270deg, rgba(255,255,255, 1) 0%, rgba(255, 255,255,1) 40%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
