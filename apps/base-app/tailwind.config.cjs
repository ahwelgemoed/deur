/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('@deur/tailwind-config')],
  theme: {
    extend: {
      fontFamily: {
        display: ['Ubuntu_500Medium_Italic'],
        body: ['Ubuntu_500Medium'],
        text: ['Ubuntu_300Light'],
      },
    },
  },
};
