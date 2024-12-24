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
        terminal: {
          black: '#000000',
          green: '#00ff00',
          white: '#ffffff',
          amber: '#ffb000',
          blue: '#4169e1',
          red: '#ff0000',
        },
      },
      fontFamily: {
        dos: ["DOS", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;