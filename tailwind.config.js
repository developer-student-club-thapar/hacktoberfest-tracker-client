/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      bgLight: '#f4f4f4',
      componentLight: '#fcfcfc',
      ChinaRoseLight: '#BC5C82',
      navButtonLight: '#6FA4FC',
      navButtonNestedLight: '#4285F4',
      contributorsDashLight: '#ABACDC',
      contributorsDashNestedLight: '#5658A5',
      issuesLight: '#5B77A6'
    }
  },
  plugins: [],
}