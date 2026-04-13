import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sacred: {
          gold: "#D4AF37",
          "gold-light": "#E8D4A8",
          purple: "#2D1B4E",
          "purple-dark": "#1a0f2e",
          cream: "#F5F1E8",
          "cream-dark": "#E8DCC8",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        geist: ["Geist", "sans-serif"],
      },
      backgroundImage: {
        "sacred-gradient": "linear-gradient(135deg, #2D1B4E 0%, #1a0f2e 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
