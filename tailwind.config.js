/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white": "hsl(193, 38%, 86%)",
        "primary-neon": "hsl(150, 100%, 66%)",
        "neutral-light-gray": "hsl(217, 19%, 38%)",
        "neutral-medium-gray": "hsl(217, 19%, 24%)",
        "neutral-dark-gray": "hsl(218, 23%, 16%)",
      },
      width: {
        max: "max-content",
      },
      boxShadow: {
        'btn': '0 0px 20px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};
