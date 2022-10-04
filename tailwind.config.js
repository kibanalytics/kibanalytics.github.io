/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
    },
    extend: {
      animation: {
        text: "text 5s linear infinite",
      },
      keyframes: {
        text: {
          "0%": {
            "background-size": "200%",
            "background-position": "200%, center",
          },
          "100%": {
            "background-size": "200%",
            "background-position": "left",
          },
        },
      },
      width: {
        136: "33rem",
        22: "86px",
      },
      height: {
        84: "364px",
      },
      lineHeight: {
        12: "3rem",
        16: "4rem",
      },
      boxShadow: {
        button: "0px 15px 35px 0px rgba(20, 45, 65, 0.15)",
        card: "0px 4px 60px 0px rgba(13, 89, 239, 0.06)",
      },
      colors: {
        green: "rgba(45, 167, 145, 1)",
        "green-hover": "rgb(39, 145, 126)",
        "light-green": "rgba(240, 252, 249, 1)",
        "light-green-hover": "rgb(221, 248, 241)",
        red: "rgba(255, 58, 68, 1)",
        pink: "rgba(255, 17, 129, 1)",
        blue: "rgba(13, 89, 239, 1)",
        "lightgray-paragraph": "rgba(90, 113, 132, 1)",
        "lightgray-hero-p": "rgba(105, 120, 132, 1)",
        "darkgray-heading": "rgba(24, 59, 86, 1)",
        "darkgray-subheading": "rgba(15, 45, 68, 1)",
        "gray-toggle-btn": "rgb(229, 231, 235)",
        "footer-bg": "rgba(252, 252, 255, 1)",
      },
    },
    fontFamily: {
      custom: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
