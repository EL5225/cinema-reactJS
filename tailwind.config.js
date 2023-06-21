const plugin = require(`tailwindcss/plugin`);

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".workspace": {
          border: "2px solid black",
        },
      });
    }),
  ],
};
