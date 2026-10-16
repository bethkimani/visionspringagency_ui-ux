export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B2447', deep: '#071A33', soft: '#16365F' },
        ocean: '#0A6EBD',
        sky: '#00B2EC',
        mint: { DEFAULT: '#00C389', deep: '#0B8457' },
        mist: '#F2F7FB',
        line: '#E1E9F1',
        muted: '#4F5F73',
        ink: '#0B2447',
        danger: '#C4321F',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,36,71,0.06), 0 12px 32px -12px rgba(11,36,71,0.18)',
        lift: '0 24px 60px -24px rgba(11,36,71,0.35)',
      },
    },
  },
};
