/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'tech-bg': '#0B0A16',
        'tech-card': '#141225',
        'tech-text': '#F8FAFC',
        'tech-muted': '#A1A1AA',
        'tech-violet': '#7C3AED',
        'tech-cyan': '#06B6D4'
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}