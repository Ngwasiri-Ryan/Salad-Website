/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px ",
      screens: {
        sm: '640px',
        md: '768px',
        lg:'968px',
        xl: '1200px',
      },
    },
    extend: {
      fontFamily:{
        primary: "var(--font-roboto)",
      },
      colors: {
        primary: '#1c1c22',
        orange: {
          DEFAULT: 'var(--accent-color, #FED482)', // Use CSS variable for accent color
          hover: 'var(--accent-hover-color, #FED482)',
        },
        text: {
          light: 'var(--text-color-light)',
          dark: 'var(--text-color-dark)',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};