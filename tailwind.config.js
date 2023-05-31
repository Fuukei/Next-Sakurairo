const colors = require('tailwindcss/colors');

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
          DEFAULT: colors.pink[400],
          dark: colors.pink[600]
        },
        secondary_color: {
          DEFAULT: colors.purple[400],
          dark: colors.purple[600]
        },
        accent_color: {
          DEFAULT: colors.yellow[400],
          dark: colors.yellow[600]
        }
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
