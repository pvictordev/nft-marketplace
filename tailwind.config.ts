/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { mono: ["Space mono", "monospace"] },
      colors: {
        background: "#2B2B2B",
        accent: "#A259FF",
        primary: "#FFFFFF",
        secondary: "#858584",
        card: "#3B3B3B",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
