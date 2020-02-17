const gutterWidth = 36;

const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('../colors');

module.exports = {
  important: true,
  theme: {
    ...defaultTheme,
    colors,
    spacing: {
      none: '0',
      '05': `${gutterWidth / 6}px`,
      '1': `${gutterWidth / 3}px`,
      '2': `${gutterWidth / 2}px`,
      '3': `${gutterWidth / 1.5}px`,
      '4': `${gutterWidth}px`,
      '5': `${gutterWidth * 1.5}px`,
      '6': `${gutterWidth * 2}px`,
      '7': `${gutterWidth * 3}px`,
      '8': `${gutterWidth * 4}px`,
      '1px': '1px',
    },
    fontFamily: {
      sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    fontSize: {
      lg: '1.3rem',
      base: '1rem',
      sm: '.8rem',
      xs: '.7rem',
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
    },
    extend: {
      margin: {
        '0': '0',
        '1/2': '50%',
        '5/12': `${(100 / 12) * 5}%`,
        '1/3': `${100 / 3}%`,
        '1/4': '25%',
        '1/5': '20%',
        '1/6': `${100 / 6}%`,
        '1/12': `${100 / 12}%`,
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: `0 ${gutterWidth / 3}px`,
        },
        '.row': {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: `-${gutterWidth / 3}px`,
          marginRight: `-${gutterWidth / 3}px`,
        },
        '.gutter': {
          padding: `0 ${gutterWidth / 3}px`,
        },
      });
    },
  ],
};
