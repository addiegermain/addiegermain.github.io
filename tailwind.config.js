/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'body': '#FCFCFC',
        'selected-text': '#3140C8', 
        'primary': '#3140C8',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#7A7E9E',
        'input': '#2A2A35',
      },
      fontFamily: {
        'botanika': ["'botanika-mono-web'", 'sans-serif']
      },

      borderRadius:{
        'theme':'4rem'
      },

  
    },
  },
  plugins: [],
}
