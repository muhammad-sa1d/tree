/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', "sans-serif",],
        'Montserrat': ['Montserrat', "sans-serif",],
      },
      colors: {
        'title': '#192252',
        'bg-color': '#0E1734',
        'text-color': '#848FAC',
        'blue': '#0B265A',
      },

      spacing: {
        '88': '88px',
        '44': ' 588px',
        '55': '793px',
        '30': '116px',
        '97': '186px',
        '100': '151px',
        '31': '120px',
        '33': '133px',
      },
      // margin: {
      //   '88px': '88px',
      // }
    },
  },
  plugins: [],
}
