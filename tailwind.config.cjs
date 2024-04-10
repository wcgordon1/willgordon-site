/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        screens: "url('/path-to/image.png')",
      }),
      colors: {
        blue: {
         '50': '#ecf4ff',
        '100': '#ddebff',
        '200': '#c2d9ff',
        '300': '#9cbfff',
        '400': '#7599ff',
        '500': '#5676ff',
        '600': '#364bf5',
        '700': '#2a3ad8',
        '800': '#2534ae',
        '900': '#263489',
        '950': '#161c50',
        },


      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

    require('@tailwindcss/aspect-ratio'),
  ],
}
