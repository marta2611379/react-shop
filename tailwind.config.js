/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E63946",
        orange: "#F97316",
        yellow: "#FBBF24",
        green: "#22C55E",
        dark: "#1F2937",
      },
    },
  },
  plugins: [],
};
