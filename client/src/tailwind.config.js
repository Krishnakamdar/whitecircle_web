// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#f5f9ff",
            100: "#e6f0ff",
            500: "#0ea5e9",
          }
        }
      }
    },
    plugins: [],
  }
  