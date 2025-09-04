/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // New color scheme based on provided palette
        "blue-primary": "#0098ee",
        "blue-secondary": "#0197ec",
        "blue-tertiary": "#0098ec",
        "blue-quaternary": "#0099ec",
        "blue-quinary": "#0296ec",
        "green-accent": "#00f042",

        // Semantic color mapping
        bg: "#0B0E14",
        surface: "#0F1624",
        primary: "#0098ee", // Main blue
        "primary-light": "#0197ec",
        "primary-dark": "#0098ec",
        secondary: "#00f042", // Green accent
        accent: "#0099ec", // Alternative blue
        "accent-light": "#0296ec",
        muted: "#94A3B8",

        // Extended palette for components
        "blue-50": "#f0f9ff",
        "blue-100": "#e0f2fe",
        "blue-200": "#bae6fd",
        "blue-300": "#7dd3fc",
        "blue-400": "#38bdf8",
        "blue-500": "#0098ee",
        "blue-600": "#0197ec",
        "blue-700": "#0098ec",
        "blue-800": "#0099ec",
        "blue-900": "#0296ec",

        "green-50": "#f0fdf4",
        "green-100": "#dcfce7",
        "green-200": "#bbf7d0",
        "green-300": "#86efac",
        "green-400": "#4ade80",
        "green-500": "#00f042",
        "green-600": "#16a34a",
        "green-700": "#15803d",
        "green-800": "#166534",
        "green-900": "#14532d",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        reveal: "reveal 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        scale: "scale 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 224, 255, 0.3)",
        "glow-accent": "0 0 20px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};
