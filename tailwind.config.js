module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: {
      '3/4vh': '75vh',
    },
    extend: {
      colors: {
        'main': '#079df9',
        'hovermain': '#057dc7',
      },
    },
  },
  plugins: [],
}