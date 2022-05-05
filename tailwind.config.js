module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "340px",
      },
      fontFamily: {
        sans: ["Open Sans", "Fira Sans", "sans-serif"],
        mukta: ["Mukta", "Fira Sans", "sans-serif"],
        serif: ["Amaranth", "Merriweather", "serif"],
        cursive: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#f79256",

          secondary: "#227c9d",

          accent: "#2dd4bf",

          neutral: "#e5e7eb",

          "base-100": "#fff",
          "base-200": "#f6f5f9",
          "base-content": "#343a40",

          info: "#748ffc",

          success: "#059669",

          warning: "#ff922b",

          error: "#F87272",
        },
        dark: {
          primary: "#f79256",

          secondary: "#227c9d",

          accent: "#2dd4bf",

          neutral: "#343a40",

          "base-100": "#212529",

          "base-content": "#e9ecef",
          info: "#748ffc",

          success: "#059669",

          warning: "#ff922b",

          error: "#F87272",
        },
      },
    ],
  },
};
