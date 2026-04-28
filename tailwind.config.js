/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1E3A5F',
          dark: '#0F2A4A',
        },
        gold: {
          DEFAULT: '#C9A03D',
          dark: '#A87E2A',
        },
        rose: {
          DEFAULT: '#E11D48',
          dark: '#B81A3E',
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
        slideUp: 'slideUp 0.4s ease-out',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        gridMove: {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '60px 60px' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}