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
        primary: {
          100: '#0099ff',
          200: '#008ae6',
          300: '#000b76',
        },
        secondary: {
          100: '#f3f4f5',
          200: '#dee0e2',
          300: '#273036',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'ne': '0px 4px 8px rgba(79, 94, 113, 0.1), 0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12)',
        'table': 'inset 0px -1px 0px #dfe5eb',
      }
    },
  },
  plugins: [],
}
