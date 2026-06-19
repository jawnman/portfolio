/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          bg: '#0a0a0a',        // warm near-black
          primary: '#c2a878',   // muted gold accent
          secondary: '#9a9a96',  // warm neutral gray
          accent: '#f5f5f4',    // near-white text
          muted: '#26241f',     // subtle warm border
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        // legacy alias kept so existing `font-mono` classes render the modern sans
        mono: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
