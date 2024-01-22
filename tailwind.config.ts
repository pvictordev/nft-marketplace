/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { mono: ["Space mono", "monospace"] },
      colors: {
        accent: "#A259FF",
        secondary: "#858584",
        card: "#3B3B3B",
      },
    },
  },
  plugins: [],
};
