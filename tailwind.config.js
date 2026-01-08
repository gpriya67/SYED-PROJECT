/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#07917B',
       
        
      },
      fontFamily: {
        aileron: ["Aileron", "sans-serif"],
        hagrid: ["Hagrid", "sans-serif"],
     
        trial: ['Hagrid-trail', 'sans-serif'],
        hagridNumber:['Hagrid-Number','sans-serif'],
        
      },
       
    },
  },
  plugins: [],
}
