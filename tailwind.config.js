// File: tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          sectionGray: '#c6c6c6',
          sectionDark: '#111111',
          accent:    '#8900c8',
        },
        fontFamily: {
          body: ['Cascadia Mono', 'ui-monospace', 'monospace'],
          display: ['Cascadia Mono', 'ui-monospace', 'monospace'],
          sans: ['Inter', 'sans-serif']
        }
      }
    },
    plugins: [],
  };