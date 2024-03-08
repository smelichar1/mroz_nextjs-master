import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blog/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/NewItem/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Přizpůsobení fontů
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
      },
      // Vlastní rozměry
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Přizpůsobení barev
      colors: {
        'primary': '#FF5722',
        'secondary': '#03A9F4',
        'accent': '#8BC34A',
      },
      // Přizpůsobení breakpointů
      screens: {
        'phone': '480px', // Přidáno pro telefonní zařízení
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      // Přizpůsobení variant
      variants: {
        extend: {
          opacity: ['disabled'],
          backgroundColor: ['active'],
          textColor: ['visited'],
        },
      },
      // Přizpůsobení animací
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-out',
        fadeOut: 'fadeOut 1s ease-out',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'notion-shadow': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
      },
      borderRadius: {
        'notion-rounded': '0.75rem'
      },
    },
  },
  plugins: [],
};
export default config;
