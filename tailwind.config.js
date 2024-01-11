/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      }
    },
    colors: {
      'black': '#2A2A2A',
      'white': '#FFFFFF',
      'gray': {
        500: '#6A6A6A',
        900: '#2A2A2A',
      },
      'blue': {
        900: '#0B2A37',
      },
      'yellow': {
        900: '#FAD40E',
      },
    },
  },
  plugins: [],
}
