/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#00C6AE',
        yellow: '#FFBD12',
        dark: '#000000',
        light: '#ffffff',
      },
    },
  },
};
