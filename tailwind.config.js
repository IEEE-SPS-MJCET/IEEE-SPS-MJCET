module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#0d1117',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        blue: {
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.cyan.400), 0 0 20px theme(colors.cyan.400)',
        'neon-lg': '0 0 10px theme(colors.cyan.400), 0 0 30px theme(colors.cyan.400)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-neon': 'glow-neon 1s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '.8',
          },
        },
        'glow-neon': {
          'from': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px theme(colors.cyan.400)',
          },
          'to': {
            textShadow: '0 0 20px #fff, 0 0 30px theme(colors.cyan.400), 0 0 40px theme(colors.cyan.400)',
          },
        },
      },
    },
  },
  plugins: [],
};