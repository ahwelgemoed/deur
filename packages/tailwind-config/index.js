/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#00C6AE',
    },
  },
};
