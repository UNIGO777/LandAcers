/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#3498db",
          secondary: "#2ecc71",
          background: "#ffffff",
          text: "#000000",
          white: "#ffffff"
        },
        dark: {
          primary: "#2980b9",
          secondary: "#27ae60",
          background: "#000000",
          text: "#ffffff",
        },
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(light|dark)-(primary|secondary|background|text)/,
    },
  ],
  plugins: [],
};
