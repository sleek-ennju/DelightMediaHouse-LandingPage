/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Header (h1)
        'header': 'clamp(1.5rem, 5vw, 3rem)', // Min: 24px, Mid: 5vw, Max: 48px
        // Subheadings
        'subheading': 'clamp(1.25rem, 4vw, 2.25rem)', // Min: 20px, Mid: 4vw, Max: 36px
        // Regular text
        'regular': 'clamp(1rem, 3vw, 1.5rem)', // Min: 16px, Mid: 3vw, Max: 24px
        // Extra smaller text
        'extra-small': 'clamp(0.75rem, 2.5vw, 1.125rem)', // Min: 12px, Mid: 2.5vw, Max: 18px
      },
      fontFamily: {
        // Assigning Montserrat for headers
        header: ['Montserrat', 'sans-serif'],
        // Assigning Open Sans for body (regular text)
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}