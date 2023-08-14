import { blogConfig } from "./config";
const color = require("color");

const rotationSteps = Array.from({ length: 361 }, (_, i) => i);

const generateRotatedColors = () => {
  const colors = {};

  for (const step of rotationSteps) {
    colors[step] = {
      DEFAULT: color(blogConfig.colors.theme_color).rotate(step).lighten(0.2).hex(),
      dark: color(blogConfig.colors.theme_color).rotate(step).darken(0.2).hex()
    };
  }

  return colors;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './content-components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme_color: {
          DEFAULT: color(blogConfig.colors.theme_color).lighten(0.2).hex(),
          dark: color(blogConfig.colors.theme_color).darken(0.2).hex()
        },
        text_color: {
          DEFAULT: color(blogConfig.colors.theme_color).whiten(0.5).hex(),
          dark: color(blogConfig.colors.theme_color).blacken(0.5).hex()
        },
        rotate_color: generateRotatedColors(),
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
