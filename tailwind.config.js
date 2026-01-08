/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4F46E5', // Adjust based on image
        'brand-dark': '#000000', // Deep black background
        'brand-gray': '#1F1F1F', // Lighter black/gray for cards
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
