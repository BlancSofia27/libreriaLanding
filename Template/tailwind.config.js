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
    },
  },
  plugins: [],
}
