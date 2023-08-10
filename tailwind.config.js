/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#4c4d8b",
          "200": "#242565",
          "300": "#1d275f",
        },
        gray: {
          "100": "#fefefe",
          "200": "#272727",
        },
        deeppink: "#f5167e",
        darkgray: {
          "100": "#a5a5a5",
          "200": "#959595",
        },
        whitesmoke: {
          "100": "#f3f3f3",
          "200": "#f1f1f1",
        },
        midnightblue: {
          "100": "#141572",
          "200": "#0a075f",
        },
        mediumblue: "#3d37f1",
        black: "#000",
        dimgray: "#6a6a6a",
        ghostwhite: "#f2f4ff",
        steelblue: "#7778b0",
        lavender: "#eee1ff",
      },
      fontFamily: {
        "averta-demo-pe-cutted-demo": "'Averta Demo PE Cutted Demo'",
        "dm-sans": "'DM Sans'",
        "proxima-nova": "'Proxima Nova'",
      },
      borderRadius: {
        "31xl": "50px",
        "26xl-6": "45.6px",
        xl: "20px",
        lgi: "19px",
      },
    },
    fontSize: {
      sm: "14px",
      "smi-2": "12.2px",
      lg: "18px",
      "9xl-5": "28.5px",
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "9xl-4": "28.4px",
      "xs-4": "11.4px",
      "3xl": "22px",
      "15xl": "34px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
