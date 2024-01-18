/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Knewave', 'sans-serif'],
      },
      colors:{
        primary: '#368966',
        offWhite: '#FAF9F6'
      }
    },
  },
  plugins: [],
}

