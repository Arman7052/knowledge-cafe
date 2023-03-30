/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#34bc59",

          "secondary": "#2ed125",

          "accent": "#ffe6c6",

          "neutral": "#242638",

          "base-100": "#F6F6F9",

          "info": "#8CD7E8",

          "success": "#6CE5B2",

          "warning": "#F6C05A",

          "error": "#EB6E66",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

