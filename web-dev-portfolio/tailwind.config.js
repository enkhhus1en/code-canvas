/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0b',
        secondary: '#fbe850',
        customgray: '#2e3038',
        nav: '#adadad'
      }
    },
  },
  plugins: [],
};
