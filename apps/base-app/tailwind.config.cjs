/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('@deur/tailwind-config')],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        display: ['Montserrat_800ExtraBold'],
        body: ['Montserrat_700Bold'],
        text: ['Montserrat_400Regular'],
      },
    },
  },
};
