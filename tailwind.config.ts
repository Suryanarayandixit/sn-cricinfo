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
        pitch: {
          DEFAULT: '#0a1628',
          800: '#0d1f3c',
          700: '#112347',
          600: '#1a3260',
        },
        gold: {
          DEFAULT: '#f5a623',
          light: '#fbbf24',
          dark: '#d4891f',
        },
        csk: '#f9c31c',
        mi:  '#004ba0',
        rcb: '#d4161c',
        kkr: '#3a177c',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'pitch-gradient': 'linear-gradient(135deg, #0a1628 0%, #112347 50%, #0a1628 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)',
      },
    },
  },
  plugins: [],
};
export default config;