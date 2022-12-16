module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  important: true,
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["halloween","coffee"],
  },
};
