/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#1a1a2e',
        'accent': '#a855f7',
        'accent2': '#7c3aed',
        'light': '#faf8ff',
        'muted': '#6b7280',
        'purple-light': '#e9d5ff',
        'purple-mid': '#c084fc',
        'purple-dark': '#7e22ce',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #ffffff 0%, #f3e8ff 40%, #a855f7 75%, #7e22ce 100%)',
        'section-gradient': 'linear-gradient(160deg, #faf8ff 0%, #f3e8ff 50%, #e9d5ff 100%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)',
        'purple-gradient': 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
