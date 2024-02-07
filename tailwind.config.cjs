/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html, css, js, ts}"],
    theme: {
      extend: {
        dropShadow: {
          'text-shadow': '0 0 0 rgb(240 253 250)'
        },
        fontFamily: {
          // sans: ["Inter", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          kanit: ["Kanit", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          hubot: ["Hubot Sans", "sans-serif"],
          mona: ["Mona Sans", "sans-serif"],
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
          "licorize": {
            50: "#F7E8ED",
            100: "#F0D1DA",
            200: "#E2A7B9",
            300: "#D27994",
            400: "#C44F72",
            500: "#A13656",
            600: "#822C45",
            700: "#5F2033",
            800: "#411623",
            900: "#1F0A10",
            950: "#0F0508"
          },
          "custom-black": "#2F2F2F",
          "aquamarine": {
            50: "#F1FDF8",
            100: "#E4FCF1",
            200: "#CDF9E5",
            300: "#B2F5D7",
            400: "#97F2C9",
            500: "#7FEFBD",
            600: "#3CE79A",
            700: "#18C376",
            800: "#108350",
            900: "#083F26",
            950: "#042013"
          },
          // ...color-name: color-code (hex/hsl/rgb/rgba/hsla...)
        },
      },
    },
    plugins: [
      // add your tailwind plugins
      require("@tailwindcss/typography"),
    ],
  };
