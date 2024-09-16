/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#F6F5F2',
        dark: '#1E201E',
      },

      fontFamily: {
        francy: ['francy', 'sans-serif'], // Replace 'sans-serif' with your preferred fallback
        creatoBold: ['creatoBold', 'sans-serif'],
        consolasItalic: ['consolasItalic', 'monospace'],
        consolas: ['consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}