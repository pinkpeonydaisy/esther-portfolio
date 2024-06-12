import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Ensure dark mode is enabled
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "base-cornsilk": "#FFF7E1",
        "base-baby-pink": "#EBC0C1",
        "base-parrot-pink": "#CF9F9F",
        "base-burnished-brown": "#9E7070",
        "base-black": "#000000",
        "base-white": "#FFFFFF",
        "base-dark-background": "#121212", // Add your dark background color
        "base-light-black": "#000000", // Ensure the text is black in dark mode
        "base-light-pink": "#EBC0C1", // Ensure the text color remains consistent
        "base-dark-pink": "#CF9F9F",
        "base-light-brown": "#9E7070",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
