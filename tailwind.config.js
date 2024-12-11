/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tc_primary: '#2E6171',
        tc_secondary: '#556F7A',
        tc_gray: '#798086',
        tc_rose: '#B79FAD',
        tc_pink: '#D4AFCD',
        tc_scrollbar: '#124e42',
        tc_background: '#30343F',
        tc_white: '#FAFAFF',
        tc_blue_600: '#273469',
        tc_white_700: '#1E2749',

      },
    },
  },
  plugins: [],
}