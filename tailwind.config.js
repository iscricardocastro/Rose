/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rosebrand: {
          50: '#fff1f4',
          100: '#ffe4ea',
          200: '#ffc9d6',
          300: '#ff9fb6',
          400: '#ff6e93',
          500: '#f2447a',
          600: '#d12967',
          700: '#aa1c53',
          800: '#861943',
          900: '#6e1738'
        }
      }
    },
  },
  plugins: [],
}