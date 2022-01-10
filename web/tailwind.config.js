module.exports = {
  purge: ['./index.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '4.8/10': '48%',
        '120px': '120px',
        '220px': '220px'
      },
      height: {
        '9/10': '90%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
