import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-dark": "#111928",
        "main-orange": "#f59e0b",
      },
      transitionProperty: {
        width: "width",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#9ca3af",
            "h1, h2, h3, h4, h5, h6": {
              margin: 0,
              color: "inherit",
            },
            strong: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};

export default config;
