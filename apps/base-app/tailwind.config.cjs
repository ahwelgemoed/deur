/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('@deur/tailwind-config')],
  theme: {
    colors: {
      primary: '#00C6AE',
    },
    extend: {
      fontFamily: {
        display: ['Montserrat_800ExtraBold'],
        body: ['Montserrat_700Bold'],
        text: ['Montserrat_400Regular'],
      },
    },
  },
};
