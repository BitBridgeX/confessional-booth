import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hot-pink": "#FF1493",
        "hot-pink-dark": "#C71168",
        "neon-pink": "#FF6EC7",
        "deep-plum": "#1A0A1E",
        "dark-velvet": "#0D0610",
        "royal-purple": "#6B21A8",
        "sacred-gold": "#D4AF37",
        "gold-light": "#F0D68A",
        "blush": "#FFB6C1",
        "latex-black": "#111111",
        "leather-red": "#8B0000",
        "sin-red": "#DC143C",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
