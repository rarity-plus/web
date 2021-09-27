module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "black": {
          "light": "#1f1f1f",
          "dark": "#141312"
        }
      },
      fontFamily: {
        "skranji" : ['Skranji', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
