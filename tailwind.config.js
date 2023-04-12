/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background-image-mew":
          "url('/src/assets/images/background-mew.gif')",
      },
      colors: {
        "home-bg-color": "#0e3368",
      },
    },
  },
  plugins: [],
};
