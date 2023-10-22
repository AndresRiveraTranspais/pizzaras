/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './**/*.{html,jsx}'],
  theme: {
    extend: {},
    colors: {
      'fondo-azul': '#294b87',
      'titulos-azules': '#132544',
      'titulos-amarillos': '#e0aa30',
      'marca': '#3090f0',
      'precio-digital': '#001860',
      'precio-taquilla': '#001860',
      'escalas': '#003078',
      'white':'#fff',
      'hora':'#ededed'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}
