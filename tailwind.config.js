/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      fontFamily:{
        'sans':['General Sans', 'sans-serif']
      },
      lineHeight:{
        'height':'108%',
        'height-1':'152%'
      },
      colors:{
        'blue':'#0171E5',
        'navyBlue':'#002245',
        'white':'#FFFFFF',
        'ash':'#5D5D5D',
      }
    },
  },
  plugins: [],
}
