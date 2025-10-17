import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "chalat-light": "#fff9f3",
        "chalat-text": "#3b2f2f",
        "chalat-accent": "#a16b47",
        "chalat-highlight": "#d8a47f",
        "chalat-dark": "#1e140e",
      },
    },
  },
  darkMode: "media", // or 'class' for a toggle later
};

export default config;
