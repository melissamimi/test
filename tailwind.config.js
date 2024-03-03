/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        hoverStyle: '#B06161', // Replace with your desired color
        btnhoverStyle: '#C47575', 
      },
    },
  },
  plugins: [],
}

