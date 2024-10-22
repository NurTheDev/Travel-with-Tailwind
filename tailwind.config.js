/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontSize: {
      semiBase: "18px",
      heroSizeXl: "69px",
      heroSizeSm: "40px",
    },
    borderRadius: {
      btnRadius: "100px",
    },
    fontFamily: {
      circularFont: ['"circleFont"', "system-ui"],
    },
    extend: {
      colors: {
        darkFont: "#222831",
        ligthGray: "#19182580",
        primary: "#5D50C6",
        secondary: "#F85E9F",
        grayScale: "#19182580",
      },
    },
  },
  plugins: [require("daisyui")],
};
