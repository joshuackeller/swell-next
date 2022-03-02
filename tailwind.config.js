module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        sn: {
          yellow: "#FCD669",
          orange: "#E39F48",
          green: "#15BE53",
          purple: "#635BFF",
          blue: "#00D4FF",
        },
      },
    },
  },
  plugins: [],
};
