/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        "5px": "5px",
      }
    },
    fontFamily: {
      'sans': ['Luminari'],
     }
  },
  plugins: [require("daisyui")],
};
