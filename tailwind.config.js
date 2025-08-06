/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1538px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
      },
    },
  },
  plugins: [],
};
