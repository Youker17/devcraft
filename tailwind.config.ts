import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "sans-serif"],
      mono: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#232946",
        primary: "#B8C1EC",
        secondary: "#FFFFFE",
        tertinary: "#EEBBC3",
      },
      boxShadow: {
        buttonShadow: "0px 2px 65px 0px #EEBBC3",
        buttonShadowHover:
          "0px 2px 65px 0px #EEBBC3, 0px 0px 20px 5px #EEBBC3 ",
        linksShadow: "inset 300px 0 0 0 #54b3d6",
        starShadow: "0px 4px 50px #EEBBC3",
      },
      gridTemplateColumns: {
        featuresGrid: "repeat(auto-fit, minmax(var(--min-value), 1fr))",
      },
      animation: {
        bounce: "bounce 10s infinite",
        Arrowbounce: "bounce 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
