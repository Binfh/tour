/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'greatVibes': ['"Great Vibes"', 'cursive'],
        'Ubuntu':['"Ubuntu"'],
        'kanit' : ['"Kanit"']
      },
      colors:{
        'main':'var(--main-color)',
        'white':'var(--white)',
        'text-color':'var(--text-color)',
      },
      height:{
        'height-slider':'calc(100vh - 90px)',
        'height-map':'calc(100vh - 70px)'
      },
      boxShadow: {
        'custom': '0 16px 48px rgb(11 ,18, 44)', 
        'custom1': '0 1rem 3rem #f5f3f3',
      },
      letterSpacing: {
        'half': '0.5px', 
      },
      screens: {
      'bb': '320px',
      },
    },
  },
  plugins: [],
}