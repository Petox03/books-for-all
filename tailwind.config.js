/**
 * @type {import ('@types/tailwindcss/tailwind-config').TailwindConfig}
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
}