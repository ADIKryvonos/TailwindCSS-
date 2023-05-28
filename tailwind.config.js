/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*'],
  theme: {
    screens: {
      lg: '768px',
      md: '480px',
    },
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        baze: "'Space Grotesk', sans-serif",
        mono: "'Space Mono', monospace",
      },
      colors: {
        bgColor: '#FCF7E6',
        mainTextColor: '#000000',
        secondTextColor: '#FFFFFF',
        btnColor: '#ED5E21',
      },
      padding: {
        des: '48px',
        mob: '24px',
      },
      margin: {
        des: '120px',
        mob: '24px',
      },
    },
  },
  plugins: [],
};
