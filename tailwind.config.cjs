/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      MPLUS1CODE: ["'M PLUS 1 Code'", 'sans-serif'],
      Lexend: ["'Lexend'", 'sans-serif'],
    },
    extend: {
      screens: {
        sm1: '320px',
        sm2: '375px',
        sm3: '414px',
        md1: '768px',
        md2: '1024px',
        md3: '1280px',
        lg1: '1366px',
        lg2: '1440px',
        lg2: '1920px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}