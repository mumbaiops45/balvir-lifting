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
        blue: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#1A4FC4",   // Brand blue (bright)
          600: "#0F3460",   // Brand blue (primary)
          700: "#0C2850",
          800: "#091D3C",
          900: "#07152A",
          950: "#040D1A",
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
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.25em",
      },
      backgroundImage: {
        "blue-glow":    "radial-gradient(ellipse at center, rgba(26,79,196,0.18) 0%, transparent 70%)",
        "blue-glow-sm": "radial-gradient(ellipse at center, rgba(26,79,196,0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
