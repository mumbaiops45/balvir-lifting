import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50:  "#fff0f0",
          100: "#ffd6d6",
          200: "#ffadad",
          300: "#ff7575",
          400: "#ff3b3b",
          500: "#E8192C",   // Brand red (bright)
          600: "#CC1020",   // Brand red (primary)
          700: "#A80D1A",
          800: "#820916",
          900: "#5C0610",
          950: "#3A0209",
        },
        dark: {
          950: "#030303",
          900: "#080808",
          800: "#101010",
          700: "#181818",
          600: "#202020",
          500: "#2A2A2A",
          400: "#383838",
        },
      },
      
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.25em",
      },
      backgroundImage: {
        "red-glow": "radial-gradient(ellipse at center, rgba(200,16,32,0.18) 0%, transparent 70%)",
        "red-glow-sm": "radial-gradient(ellipse at center, rgba(200,16,32,0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
