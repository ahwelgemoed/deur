/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat_900Black_Italic'],
        body: ['Montserrat_600SemiBold_Italic'],
        text: ['Montserrat_400Regular'],
      },
    },
  },
  plugins: [],
};
