const path = require('path');

// const withSass = require('@zeit/next-sass');

module.exports = {
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    };
    return config;
  },
};
