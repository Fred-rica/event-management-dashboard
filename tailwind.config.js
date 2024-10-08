/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#8576FF",
        primaryDark: "#484554",
        darkBackground: "#383544",
        lightModePrimaryText: "#334155",
        green: "#10B981",
        red: "#F43F5E",
        gray: "#64748B",
        lightPurple: "#FCF7FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      // fontFamily: {
      //   sans: ["var(--font-inter)"],
      //   mono: ["var(--font-roboto-mono)"],
      // },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
