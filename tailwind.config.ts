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
      }
    },
  },
  plugins: [require("daisyui")],
};

export default config;
