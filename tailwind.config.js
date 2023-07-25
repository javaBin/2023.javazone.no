/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // Overwrite the existing default Tailwind values here
    fontSize: {
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '3rem',
    },
    // Extend the default Tailwind values here with new ones
    extend: {
      colors: {
        'big-text-color': '#FED12D',
        'normal-text-color': '#F6DA98',
        'hover-text-color': '#FF8525',
        'red-text-color': '#650729',
        'link-color': '#5AD0A6',
        'dark-blue-background': '#033E4F',
      },
    },
  },
  plugins: [],
}
