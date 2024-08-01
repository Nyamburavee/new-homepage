/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroMb': "url('/public/image-web-3-mobile.jpg')",
        'heroDt': "url('/public/image-web-3-desktop.jpg')",


      },
      screens: {
        'custon-sm': '375px',
        'md' : '1022px'
      },
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        garkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)',
      }
    },
  },
  variants: {
    extend: {
      display: ['responsive'],
    },
  },
  plugins: [],
}