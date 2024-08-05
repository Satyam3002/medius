/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            customGreen: '#074333' , 
            customGreen1: '#077a4c',// Add your custom color here
            textGreen: '#20de7d',
            customGreen2: '#74b4a4',
            gray: '#9da6a6',
            gray1: '#aeb7b7'
          }, 
    },
  },
  plugins: [],
};
