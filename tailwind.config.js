/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla']
      },
      colors: {
        GreenLight: '#dff1e7',
        GreenMedium: '#0c7d69',
        RedProject: '#d73c3c',
        GrayMedium: '#87a3a6',
        GrayDarker: '#2b4246'
      }
    },
  },
  plugins: [],
}