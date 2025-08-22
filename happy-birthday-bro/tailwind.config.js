module.exports = {
  purge: ['./src/**/*.{html,js}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        birthday: {
          light: '#FFDD57',
          DEFAULT: '#FFAB00',
          dark: '#FF8F00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}