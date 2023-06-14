import {blogConfig} from "./config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
        primary_color: {
          DEFAULT: blogConfig.colors.primary_color.light,
          dark: blogConfig.colors.primary_color.dark
        },
        secondary_color: {
          DEFAULT: blogConfig.colors.secondary_color.light,
          dark: blogConfig.colors.secondary_color.dark
        },
        accent_color: {
          DEFAULT: blogConfig.colors.accent_color.light,
          dark: blogConfig.colors.accent_color.dark
        }
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
