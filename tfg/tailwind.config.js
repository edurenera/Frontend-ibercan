/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // Puedes agregar más fuentes aquí si lo deseas
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Otros plugins si los tienes
  ],
}
