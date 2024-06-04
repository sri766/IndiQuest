/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  
  theme: {
    fontFamily: {
      'textFont':[ 'Outfit', 'sans-serif'],
    },
    extend: {
      color: {
        "baseBlue": "#01204E",
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
});
