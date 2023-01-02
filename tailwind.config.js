/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    screens: {
      md: '770px',
      sm: '496px',
    },
    fontFamily: {
      deraga: ['Deraga', 'sans-serif'],
      alexander: ['Alexander', 'sans-serif'],
      playfair: ['Playfair Display', 'sans-serif'],
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

