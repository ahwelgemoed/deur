/** @type {import('next').NextConfig} */

module.exports = {
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
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
  transpilePackages: ['@deur/design-system', 'nativewind'],
};
