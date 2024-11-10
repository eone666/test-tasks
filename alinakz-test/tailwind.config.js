/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "rgba(43, 43, 43, 1)",
        accent: "rgba(35, 61, 130, 1)",
        "background-secondary": "rgba(233, 245, 255, 1)",
        error: "rgba(210, 4, 4, 1)",
        muted: "rgba(150, 150, 150, 1)",
      },
    },
  },
  plugins: [],
};
