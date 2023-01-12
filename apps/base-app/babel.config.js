module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'nativewind/babel',
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          alias: {
            '@': './src/*',
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
