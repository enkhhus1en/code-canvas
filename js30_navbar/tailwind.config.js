/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3ede5',
        nav: '#6c6c6c',
        darkGreen: '#133416'
      }
    },
  },
  plugins: [],
}

