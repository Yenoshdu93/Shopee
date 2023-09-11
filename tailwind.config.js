/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "570px",
      // => @media (min-width: 640px) { ... }

      md: "740px",
      // => @media (min-width: 768px) { ... }

      lg: "924px",
      // => @media (min-width: 1024px) { ... }

      xl: "1020px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1246px",
      // => @media (min-width: 1536px) { ... }
      "2xl": "1546px",
    },
    extend: {
      fontFamily: {
        libre: ["Poppins", "sans - serif"],
      },
      display: ["group-focus"],
    },
  },
  plugins: [],
};
