/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        nabla: "Nabla, cursive",
      },
      screens: {
        mb: { max: "506px" },
      },
    },
  },
  plugins: [],
};
