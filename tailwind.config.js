// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      'body':'soleil',
      'display':'Recoleta'
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false
  },  
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin:'0 auto',
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
        }
      })
    }
  ]
}