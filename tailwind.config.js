/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        electron_blue: "#0984e3",
        turbo: "#f9ca24",
        pure_apple: "#6ab04c",
      },
    },
  },
  plugins: [],
};
