/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@deur/design-system']);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    // Set the alias from `react-native` to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    // Add custom `.web.{jsx?,tsx?}` extension resolver
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    return config;
  },
});
