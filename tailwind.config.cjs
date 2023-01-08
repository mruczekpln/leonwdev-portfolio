/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    fontSize: {
      base: ['16px'],
      l: ['18px'],
      xl: ['26px'],
      '2xl': ['32px'],
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}
