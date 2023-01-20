/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "hsl(0, 100%, 74%)",
        customGreen: "hsl(154, 59%, 51%)",
        customBlue: "hsl(248, 32%, 49%)",
        customDarkBlue: "hsl(249, 10%, 26%)",
        customGrayishBlue: "hsla(240, 1%, 37%)",
      },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/bg-desktop.png')",
        mobile: "url('/bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
