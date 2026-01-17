/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        coastal: {
          indigo: "#2b2d42",
          lavender: "#8d99ae",
          platinum: "#edf2f4",
          strawberry: "#ef233c",
          flag: "#d90429",
        },
      },
      boxShadow: {
        soft: "0 18px 55px -28px rgba(0,0,0,0.45)",
        card: "0 22px 70px -34px rgba(0,0,0,0.55)",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(18px,-12px) scale(1.05)" },
          "66%": { transform: "translate(-14px,10px) scale(0.98)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        blob: "blob 11s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
