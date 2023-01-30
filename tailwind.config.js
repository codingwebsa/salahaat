/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#003A24",
        baseGreen: "#00C9A7",
        secondary: "#6748BC",
        light: "#E8F3F1",
        dark: "#252c33",
        logoColor: "#43c378",
      },
      fontFamily: {
        hindSiliguri: ["Hind Siliguri"],
        nunito: ["Nunito"],
        branches: ["branches"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
