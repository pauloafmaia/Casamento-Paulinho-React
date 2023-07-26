/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  extend: {
    colors: { "dark-green": "#33433D", "dark-gray": "#d9d6d4", "waze": "#33ccff" },
  },
  fontFamily: {
    'thin':['Colaborate-Thin-PL'],
    'delmon':['Delmon Delicate'],
  }
};
export const plugins = [];
