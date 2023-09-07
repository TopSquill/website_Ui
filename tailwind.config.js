/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        f9eaf6: "#f9eaf6",
        E3F2FC: "#E3F2FC",
        "68bbf9": "#68bbf9",
        footer: {
          500: "#12B0E8", // Your desired color code
          300: "#07e8f0", // 70% opacity
          200: "#E3F2FC", // 50% opacity
        },
      },
    },
  },
  plugins: [],
};
