/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-white": "#FEFEFE",
        "primary-black": "#100C09",
        "primary-orange": "#FF5722",
        "foreground-grey": "#F6F6F6",
        "foreground-amber-400": "#fbbf24",
        "primary-pastelgrey": "#717D92",
        "primary-pastelblack": "#3A3E40",
        "blue-100": "#dbeafe",
        "yellow-500": "#facc15",
        "stone-900": "#1c1917",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
