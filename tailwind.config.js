/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        verda: {
          50: '#effcf2',
          100: '#d9f7df',
          200: '#b4efc2',
          300: '#80e29b',
          400: '#46cd6d',
          500: '#22b24b',
          600: '#15913a',
          700: '#137230',
          800: '#145b29',
          900: '#124b24',
          950: '#042a12',
        },
        earth: {
          50: '#fdf8f4',
          100: '#f9eee5',
          200: '#f3d9c7',
          300: '#e9be9f',
          400: '#dc9970',
          500: '#d07849',
          600: '#b85c35',
          700: '#94442b',
          800: '#783827',
          900: '#643125',
          950: '#361611',
        },
        sprout: {
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
        },
        beige: {
          50: '#fffef9',
          100: '#F4F2F2',
          200: '#E8E5E5',
          300: '#e5d7a6',
          400: '#d7c488',
          500: '#c5ae68',
          600: '#ab924e',
          700: '#8c743c',
          800: '#735e32',
          900: '#5e4d2a',
          card: '#FFFFFF',
          surface: '#E8E5E5',
          border: '#DCD7D7',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Chillin on Sunday"', '"Childer"', '"Playfair Display"', 'cursive', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        chillin: ['"Chillin on Sunday"', 'cursive', 'sans-serif'],
        childer: ['"Childer"', 'cursive', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        handwriting: ['"Caveat"', 'cursive', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'water-drop': 'waterDrop 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'grow': 'grow 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 10px rgba(34, 178, 75, 0.3))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(132, 204, 22, 0.5))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        waterDrop: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(25px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        grow: {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      backgroundImage: {
        'radial-verda': 'radial-gradient(circle at 50% 0%, rgba(34, 178, 75, 0.09) 0%, rgba(243, 237, 226, 1) 75%)',
        'radial-light-verda': 'radial-gradient(circle at 50% 10%, rgba(132, 204, 22, 0.09) 0%, rgba(243, 237, 226, 1) 70%)',
      }
    },
  },
  plugins: [],
}
