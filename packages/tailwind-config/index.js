/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Ubuntu_500Medium_Italic'],
        body: ['Ubuntu_500Medium'],
        text: ['Ubuntu_300Light'],
      },
    },
  },
  plugins: [],
};
