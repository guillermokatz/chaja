module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Farsan', 'sans-serif'],
      serif: ['Farsan', 'serif']
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
      textColor: ['odd'],
      transform: ['hover'],
      transitionDuration: ['hover']
    },
  },
  plugins: [],
}
