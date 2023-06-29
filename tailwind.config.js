/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bc: "#FEFEFE",
        primary: "#1C1C1C",
        secondary: "#DD8B6B",
        danger: "#81978B",
        lightBlue: "#A0BEE6",
      },
    },
  },
  plugins: [],
}
