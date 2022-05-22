module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: "Inter",
      tima: "Timmana",
    },
    extend: {
      colors: {
        background: "#EDEDED",
        text: "#444444",
        primary: "#0085FF",
        secondary: "#D4EBFF",
      },
    },
  },
  plugins: [],
};
