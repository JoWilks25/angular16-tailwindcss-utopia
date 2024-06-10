/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // utopia: {
        // customization
        // minWidth: 320,
        // minSize: 21,
        // minScale: 1.2,
        // maxWidth: 1140,
        // maxSize: 24,
        // maxScale: 1.25,
        // fontSize: {
        //   xs: 'inherit',
        //   sm: 'inherit',
        //   base: 1.4,
        //   lg: 1.33,
        //   xl: 1.2,
        //   '2xl': 1.11,
        //   '3xl': 1,
        //   '4xl': 1
        // },
        // spacing: {
        //   '3xs': 0.25,
        //   '2xs': 0.5,
        //   xs: 0.75,
        //   sm: 1,
        //   md: 1.5,
        //   lg: 2,
        //   xl: 3,
        //   '2xl': 4,
        //   '3xl': 6
        // }
      }
  },
  plugins: [require('@domchristie/tailwind-utopia')]
}