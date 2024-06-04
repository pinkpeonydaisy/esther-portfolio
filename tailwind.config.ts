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
