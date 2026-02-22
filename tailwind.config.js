/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        card: "#0A0A0A",
        border: "#262626",

        text: {
          primary: "#FAFAFA",
          secondary: "#A3A3A3",
          tertiary: "#575757",
          opposite: "#171717",
        },

        brand: {
          main: "#3B82F6",
          secondary: "#7E97C0",
          tertiary: "#8D9CB5",
        },

        error: "#EF4444",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },

      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.3)",
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1280px",
        },
      },
    },
  },
  plugins: [],
};