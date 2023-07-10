/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        relianceRed: '#BD0000',
        relianceGreen: '#9D7C40',
      }
    },
  },
  plugins: [],
}