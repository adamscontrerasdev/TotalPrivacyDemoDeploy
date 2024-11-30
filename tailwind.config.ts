import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "vignette-dark":
          "radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,0.9) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "background-main": "var(--background-color)",
        "background-secondary": "var(--background-secondary-color)",
        text: "var(--text-color)",
      },
    },
  },
  plugins: [],
};

export default config;
