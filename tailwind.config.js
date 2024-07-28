/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#06010C',
        'charcoal-grey': '#363439',
      },
      width: {
        '45': '45%',
        '55': '55%',
      },
    },
  },
  plugins: [],
}
