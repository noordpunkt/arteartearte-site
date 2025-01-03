import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 5s linear infinite',
      },
      borderWidth: {
        'half': '0.5px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dodger-blue': '#1E90FF',
      },
    },
  },
  plugins: [],
};
export default config;
