module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ahsing: "'Ahsing-Regular', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        plaster: "'Plaster', cursive",
        roboto: "'Roboto', sans-serif",
      },
      letterSpacing: {
        wildest: '0.2em',
        wildestest: '0.24em',
      },
      colors: {
        light: '#FAFAFA',
        shade: '#1F2020',
      }
    },
  },
  plugins: [],
}
