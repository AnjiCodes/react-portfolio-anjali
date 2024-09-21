/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slateblue': '#4757ff',
        'lightslateblue':'#858FFF',
      },
      letterSpacing: {
        tightest: '-.2em',
      }, 
    }, 
  },
  plugins: [],
}