/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange1: 'rgb(var(--color-orange1) / <alpha-value>)',
      orange2: 'rgb(var(--color-orange2) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}
