const path = require('path');

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    };
    return config;
  },
});
