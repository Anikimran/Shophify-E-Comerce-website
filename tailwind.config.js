/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#0C55AA",
        lightBg: "#f4f7f9",
        themeWhite: "#ffffff",
        lightYellow: "#FFD43A",
        borderColor: "#eaebed",
        skyColor: "#0989ff",
        lightText: "#55585b",
      },
    },
  },
  plugins: [],
};
