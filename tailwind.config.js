/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkColor: "#b974da",
        linkFocusColor: "#7e10be",
        textColor: "#3e3c3c",
        bgColor: "#f3f1f5",
      },
    },
  },
  plugins: [],
};
