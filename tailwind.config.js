/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        brand: ['Preospe', 'sans-serif'],
      },
      colors: {
        ink: '#fafafa',
        paper: '#0a0a0a',
        muted: '#a3a3a3',
        line: '#262626',
      },
    },
  },
  plugins: [],
};
