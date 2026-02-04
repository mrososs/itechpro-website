/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // High-End Corporate Palette (Gold & Charcoal)
        primary: "#d4af37", // Classic Gold
        "primary-light": "#e5c568", // Champagne
        "primary-dark": "#aa8c2c", // Antique Gold

        secondary: "#ffffff", // White (text/contrast)
        accent: "#f3e5ab", // Vanilla Gold

        // Backgrounds
        bg: "#0f0f10", // Ultra dark
        surface: "#18181b", // Charcoal

        // Utility
        muted: "#a1a1aa", // Zinc 400

        // Extended Gold Palette
        gold: {
          50: "#fbf8eb",
          100: "#f5eccd",
          200: "#eddba1",
          300: "#e4c36d",
          400: "#d4af37", // Base
          500: "#b99228",
          600: "#96701d",
          700: "#785519",
          800: "#64461a",
          900: "#553b1b",
          950: "#31200a",
        },

        // Extended Charcoal (Zinc-based)
        charcoal: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b", // Base Surface
          950: "#09090b",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"], // Added for headings
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        reveal: "reveal 1.0s cubic-bezier(0.2, 1, 0.2, 1) forwards", // Smoother corporate feel
        "slide-up": "slideUp 0.8s ease-out forwards",
        scale: "scale 0.6s ease-out forwards",
        shine: "shine 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
        md: "12px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 175, 55, 0.15)",
        "glow-strong": "0 0 30px rgba(212, 175, 55, 0.3)",
      },
    },
  },
  plugins: [],
};
