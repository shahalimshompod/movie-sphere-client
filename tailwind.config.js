/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', //dark
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        montserrat: ["Montserrat", "serif"],
        roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: "#2C3E50", // Midnight Blue
        secondary: "#E74C3C", // Crimson Red
        background: "#000000", // Jet Black
        accent: "#F9E79F", // Neon Yellow
        textPrimary: "#FFFFFF", // White
        textSecondary: "#BDC3C7", // Light Gray
        charcoal: "#34495E",
        offWhite: "#EDF5F7",
        forDark: '#1B1B1B',
        forDark2: '#010B13'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
