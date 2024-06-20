/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        celeste: "#88CFBA",
        smooke: "#C4C4C4",
        whitee:"#D4D4D4",
        greyStep:"#E8E8E8",
        marronB:"#554c4c"
      },
      fraction: {
        '1/10': '10%',
      },
      fontFamily: {
        regular: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
      },
      fontStyle:{
        regular:'normal',
      },
      theme: {
        extend: {
          transitionProperty: {
            'filter': 'filter',
          },
        },
      },
      variants: {
        extend: {
          filter: ['hover', 'group-hover'],
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
