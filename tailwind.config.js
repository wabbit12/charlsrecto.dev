/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#7c3aed',
        secondary: '#22d3ee',
        accent: '#f472b6',
        surface: '#0f172a',
      },
      dropShadow: {
        glow: '0 10px 30px rgba(124, 58, 237, 0.35)',
      },
    },
  },
  plugins: [],
};

