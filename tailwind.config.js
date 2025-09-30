export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: { center: true, padding: '1rem', screens: { lg: '1024px', xl: '1120px' } },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
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
      },
      boxShadow: {
        soft: '0 10px 30px rgba(240,70,122,0.08)',
        glass: '0 8px 24px rgba(16,24,40,0.06)'
      }
    }
  },
  plugins: [],
}

