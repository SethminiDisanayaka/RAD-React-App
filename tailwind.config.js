/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['inter','sans-serif'],
        serif:['jost','sans']
      },
      colors:{
         primaryColor:'#6d40e4',
         secondaryColor:'#47b725',
         tertiaryColor:'#4c4d4b'
      }
    },
  },
  plugins: [],
}

