/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('@deur/tailwind-config')],
  content: ['../../packages/design-system/src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  theme: {
    extend: {},
  },
};
