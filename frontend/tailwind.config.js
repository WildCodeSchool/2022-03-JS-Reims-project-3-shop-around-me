module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "small-height": {
          raw: "(max-height: 450px)",
        },
        "small-phone": {
          raw: "(max-width: 359px) and (max-height: 600px)",
        },
      },
    },
  },
  plugins: [],
};
