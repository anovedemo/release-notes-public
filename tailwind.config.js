/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        cornell: "#af1d29",
        cornell_light: "#c6313d",
        midblue: "#355da7",
        tropicalblue: "#c0e1ea"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme('fontSize.3xl'), // Change to your preferred size
              lineHeight: '1.2', // Adjust line height
            },
            h2: {
              fontSize: theme('fontSize.2xl'),
              lineHeight: '1.3',
            },
            h3: {
              fontSize: theme('fontSize.xl'),
              lineHeight: '1.4',
            },
            // You can also customize paragraph, list, etc.
            p: {
              fontSize: theme('fontSize.base'),
              lineHeight: '1.6',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

