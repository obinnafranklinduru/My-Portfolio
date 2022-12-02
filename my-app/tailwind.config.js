/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      'md': '480px',
      'lg': '680px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}