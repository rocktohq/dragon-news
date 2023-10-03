/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        latestNews: "#D72050"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      }
    },

  },
  plugins: [require("daisyui")],
}

