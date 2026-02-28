/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberDark: "#0B0F19",
        neonBlue: "#00F5FF",
        neonPurple: "#8A2BE2",
        neonPink: "#FF007F",
      },
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        neonBlue: "0 0 15px #00F5FF",
        neonPink: "0 0 15px #FF007F",
      }
    },
  },
  plugins: [],
}
