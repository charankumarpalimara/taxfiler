/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4B2474', // Pumpkin Tax Co primary
          light: '#F2EEF7',
          orange: '#FF8A00', // Pumpkin accent
          dark: '#1e0e2d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
