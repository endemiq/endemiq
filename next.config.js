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
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN,
    CLOUDINARY_CLOUD: process.env.CLOUDINARY_CLOUD,
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
};
