/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html, css, js, ts}"],
    theme: {
      extend: {
        dropShadow: {
          'text-shadow': '0 0 0 rgb(240 253 250)'
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          // sans: ["Kanit", "sans-serif"],
          // add more fonts ...name: [...source-of-font]
        },
        transitionProperty: {
          // 'width': 'width',
          multiple: "width, height, backgroundColor, border-radius",
        },
        container: {
          center: true,
          padding: "1rem",
          screens: {
            lg: "1024px",
            xl: "1024px",
            "2xl": "1024px",
          },
        },
        colors: {
          "licorize": "#0F0508",
          "custom-black": "#2F2F2F",
          // ...color-name: color-code (hex/hsl/rgb/rgba/hsla...)
        },
      },
    },
    plugins: [
      // add your tailwind plugins
      require("@tailwindcss/typography"),
      require("daisyui"),
    ],
  };
