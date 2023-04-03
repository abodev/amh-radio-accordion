/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'amh-pink': '#B68D97',
        'amh-light-yellow': '#FCF8EE',
        'amh-subtitle': '#53606F',
        'amh-gray': '#787774',
        'amh-suboption': '#4c4c4c',
      },
    },
  },
  plugins: [],
};
