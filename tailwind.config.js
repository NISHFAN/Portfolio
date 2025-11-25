/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#013638',
        mint: '#99f7AB',
        sky: '#81DAE2',
        deep: '#001A26',
        accent: '#FF934F'
      }
    }
  },
  plugins: [],
}