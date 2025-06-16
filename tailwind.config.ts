import type { Config } from "tailwindcss";

export default {
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
      },
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        base: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
