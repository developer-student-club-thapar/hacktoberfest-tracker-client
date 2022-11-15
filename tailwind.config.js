/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      bgLight: '#f4f4f4',
      componentLight: '#fcfcfc'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}