/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a1d37",
        accent: "#ff7e21",
        softGray: "#f4f7fa",
        deepNavy: "#051129",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideRight: "slideRight 3s linear infinite",
      },
    },
  },
  plugins: [],
};
