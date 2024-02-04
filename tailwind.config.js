/** @type {import('tailwindcss').Config} */
export default {
  relative: true,
  content: [
    './public/index.html',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1D1337',
        accent: '#452E84',
      },
    },
  },
  plugins: [],
};
