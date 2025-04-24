// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 2s infinite',
      },
      dropShadow: {
        md: '0 4px 3px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
