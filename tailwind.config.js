/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "grey-50": "#f7f7f7",
        black: "#000",
        primary: "#ff385c",
        "grey-200": "#ddd",
        "grey-400": "#222",
        "grey-300": "#717171",
        "grey-100": "#ebebeb",
      },
      fontFamily: {
        p14: "'Nunito Sans'",
      },
      borderRadius: {
        xl: "20px",
        sm: "14px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "3xl": "22px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: true,
  },
};
