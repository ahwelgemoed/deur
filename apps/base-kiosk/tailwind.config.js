/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('@deur/tailwind-config')],
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/design-system/src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('nativewind/tailwind/css')],
  theme: {
    extend: {},
  },
};
