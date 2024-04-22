/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1064px",
        xl: "1320px",
        "2xl": "1576px",
      },
    },
    colors: {
      "dark-blue": "#004079",
      "soft-dark-blue": "#3273BA",
      "light-blue": "#6192BF",
      "white-blue": "#DEEFF9",
      "white-color": "#fff",
      "accent-color": "#3476B9",
      "red": "#FF0000",
      "green":'#75E562',
      "sky-color":"#00B8D0",
      "dark":"#333"
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}