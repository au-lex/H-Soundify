/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'my': '360px',
        // 'mg': '390px',
        // 'mc': '412px',
        
         // Custom screen size for 360px width
      },
    },
  },
  plugins: [],
}

