/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    screens: {
      md: '770px',
    },
    fontFamily: {
      visionhead: ['Rozha One', 'sans-serif'],
      header: ['Deraga', 'sans-serif'],
      Alexander: ['Alexander', 'sans-serif'],
      preview: ['Cormorant Upright', 'sans-serif'],
    },
    extend: {
      colors: {
        lightWhite: 'rgba(255,255,255,.3)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};

