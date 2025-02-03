/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        bg: "rgba(var(--bg-color) / var(--tw-bg-opacity, 1))",
        pri: "rgba(var(--pri-color) / var(--tw-bg-opacity, 1))",
        bor: "rgba(var(--bor-color) / var(--tw-bg-opacity, 1))",
      },
      width: {
        main: "1000px",
      },
      maxWidth: {
        main: "1000px",
      },
      animation: {
        'xToHorizontal': "xToHorizontal 1s ease-in-out forwards",
        'horizontalToX': "horizontalToX 1s ease-in-out forwards",
        'xToVertical': "xToVertical 1s ease-in-out forwards",
        'verticalToX': "verticalToX 1s ease-in-out forwards",
        'slide-in': "slide-in 2s forwards",
      },
      keyframes: {
        xToHorizontal: {
          "0%": { transform: "translateX(0)", width: "100%", rotate: "45deg" },
          "50%": { transform: "translateX(50%)", width: "0%" },
          "100%": { transform: "translateX(0%)", width: "100%", rotate: "-90deg" },
        },
        xToVertical: {
          "0%": { transform: "translateY(0)", height: "100%", rotate: "45deg" },
          "50%": { transform: "translateY(50%)", height: "0%" },
          "100%": { transform: "translateY(0%)", height: "100%", rotate: "-90deg" },
        },
        horizontalToX: {
          "0%": { transform: "translateX(0)", width: "100%", rotate: "0deg" },
          "50%": { transform: "translateX(50%)", width: "0%" },
          "100%": { transform: "translateX(0%)", width: "100%", rotate: "45deg" },
        },
        verticalToX: {
          "0%": { transform: "translateY(0)", height: "100%", rotate: "0deg" },
          "50%": { transform: "translateY(50%)", height: "0%" },
          "100%": { transform: "translateY(0%)", height: "100%", rotate: "45deg"},
        },
        'slide-in': {
          "0%": { transform: "translateY(-100px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      }
    },
  },

};
