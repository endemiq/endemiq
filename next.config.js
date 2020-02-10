require('dotenv').config();
const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN,
  },
};
