import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "var(--heading-color)",
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        primaryDark: "var(--primary-dark)",
        secondary: "var(--secondary)",
        secondaryLight: "var(--secondary-light)",
        light: "var(--light)",
        dark: "var(--dark)"
      },
    },
  },
  plugins: [],
} satisfies Config;
