const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "*.{html, css, js, ts}",
      "./case-study-access-control-sytem/index.html",
      "./case-study-digital-twin/index.html",
      "./case-study-bridging-physical-digital-retail/index.html",
      "./case-study-air-quality-sensors/index.html",
      "./case-study-streamlining-prescription-deliveries/index.html",
      "./product-requirements-document-template/index.html",
      "./labs/index.html",
      "./studio/index.html",
      "./brands.html",
    ],
    theme: {
      extend: {
        // dropShadow: {
        //   'text-shadow': '0 0 0 rgb(240 253 250)'
        // },
        textShadow: {
          sm: '0 1px 2px var(--tw-shadow-color)',
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: '0 8px 16px var(--tw-shadow-color)',
        },
        fontFamily: {
          // sans: ["Inter", "sans-serif"],
          // poppins: ["Poppins", "sans-serif"],
          // inter: ["Inter", "sans-serif"],
          // kanit: ["Kanit", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          // hubot: ["Hubot Sans", "sans-serif"],
          // mona: ["Mona Sans", "sans-serif"],
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
          "imperialred": {
            50: "#FEECED",
            100: "#FCD9DB",
            200: "#F9AEB3",
            300: "#F68990",
            400: "#F3636C",
            500: "#F03A47",
            600: "#DF111F",
            700: "#A60D17",
            800: "#6D080F",
            900: "#390408",
            950: "#1C0204"
          },
          "greenyellow": {
            50: "#F8FFEB",
            100: "#F3FFDB",
            200: "#E6FFB3",
            300: "#DAFF8F",
            400: "#CCFF66",
            500: "#B8FF29",
            600: "#A0F000",
            700: "#77B300",
            800: "#4E7500",
            900: "#293D00",
            950: "#141F00"
          },
          "brightpink": {
            50: "#FEF0F4",
            100: "#FDDDE4",
            200: "#FCBBCA",
            300: "#FA99AF",
            400: "#F97795",
            500: "#F7567C",
            600: "#F41549",
            700: "#BE0933",
            800: "#7F0622",
            900: "#3F0311",
            950: "#220209"
          },
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
          "raisin": {
            50: "#F1F1F3",
            100: "#E3E3E8",
            200: "#C8C8D0",
            300: "#AFAFBB",
            400: "#9393A4",
            500: "#78788C",
            600: "#606071",
            700: "#4B4B58",
            800: "#33333D",
            900: "#1C1C21",
            950: "#0E0E11"
          }
          // ...color-name: color-code (hex/hsl/rgb/rgba/hsla...)
        },
      },
    },
    plugins: [
      // add your tailwind plugins
      require("@tailwindcss/typography"),
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
        )
      }),
    ],
  };
