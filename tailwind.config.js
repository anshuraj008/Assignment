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
        brand: {
          50: '#fef2f2',
          100: '#ffe1e1',
          200: '#ffc5c5',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        indigoAccent: {
          DEFAULT: '#e11d48',
          hover: '#be123c',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(220, 38, 38, 0.25)',
        'glow-md': '0 0 25px -5px rgba(220, 38, 38, 0.35)',
        'glow-lg': '0 0 40px -10px rgba(220, 38, 38, 0.45)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 28s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'beam-scan': 'beamScan 3s ease-in-out infinite',
        'modal-pop': 'modalPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        beamScan: {
          '0%, 100%': { opacity: '0.4', transform: 'translateX(-50%) scaleX(0.85)' },
          '50%': { opacity: '1', transform: 'translateX(-50%) scaleX(1.05)' },
        },
        modalPop: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.18', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '0.32', transform: 'translate(-50%, -50%) scale(1.12)' },
        },
      }
    },
  },
  plugins: [],
}
