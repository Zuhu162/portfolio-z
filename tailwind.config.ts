import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7EA0F6",
          secondary: "#f6d860",
          accent: "#EF1F95",
          neutral: "#D9E2FC",
          "base-100": "#233249",
          "base-200": "#0E172C",
          "base-300": "#020C1F",
        },
      },

      "dark",
      "cupcake",
    ],
  },
};
export default config;
