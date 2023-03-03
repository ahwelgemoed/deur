/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('@deur/tailwind-config')],
  theme: {
    colors: {},
    extend: {
      colors: {
        primary: '#00C6AE',
        yellow: '#FFBD12',
        dark: '#000000',
      },
      fontFamily: {
        display: ['Montserrat_800ExtraBold'],
        body: ['Montserrat_700Bold'],
        text: ['Montserrat_400Regular'],
      },
    },
  },
};
