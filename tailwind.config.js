/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#157347', // Define the custom color
      },
      backgroundColor: {
        'color-primary': '#157347', // Add a custom background color class
      },
    },
  },
  plugins: [],
}