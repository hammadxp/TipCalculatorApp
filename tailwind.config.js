/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "sans-serif"],
      },
      colors: {
        "is-strong-cyan": "hsl(172, 67%, 45%)",
        "is-very-dark-cyan": "hsl(183, 100%, 15%)",
        "is-dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "is-grayish-cyan": "hsl(184, 14%, 56%)",
        "is-light-grayish-cyan": "hsl(185, 41%, 84%)",
        "is-very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "is-white": "hsl(0, 0%, 100%)",
      },
      screens: {
        "800px": { max: "800px" },
        "600px": { max: "600px" },
        "375px": { max: "375px" },
      },
    },
  },
  plugins: [],
};
