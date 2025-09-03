/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        surface: '#0F1624',
        primary: '#00E0FF',
        accent: '#8B5CF6',
        muted: '#94A3B8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'reveal': 'reveal 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale': 'scale 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 224, 255, 0.3)',
        'glow-accent': '0 0 20px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [],
}
