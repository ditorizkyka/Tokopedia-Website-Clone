/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AppRegular: ['OpenSauceOne', 'sans-serif'], 
        AppBold: ['OpenSauceOne-Bold', 'sans-serif'],
        AppSemiBold: ['OpenSauceOne-SemiBold', 'sans-serif'], // Add your custom font
      },
      colors : {
        PinkTokped: ["#F94D63"],
        greenTokped : ['#00AA5B'],
        grayLight :['#F0F3F7'],
        grayMedium : ['#E4EBF5'],
        grayDark : ['#6D7588'],
      },
      boxShadow: {
        'custom': '0 0 7px rgba(0, 0, 0, 0.2)',
        'asBorder': '0 0 1px rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: [],
})

