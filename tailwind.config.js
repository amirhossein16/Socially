/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card)",
        border: "var(--border)",
        like: "var(--like)",
        comment: "var(--comment)",

        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },

        brand: {
          main: "var(--brand-main)",
        },

        error: "var(--error)",
      },
      borderRadius: {
        xl2: "12px",
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
