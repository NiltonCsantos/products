/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        sidebar:" #F27F1B",
        header:"#304673",
        card:"#F0F0F0",
        form:" #DDE3E9",

      },
      height:{
        content:"34.6rem"
      },
      margin:{
        top:"-12px 0px 0px 0px"
      }

    },

  },
  plugins: [],
}
