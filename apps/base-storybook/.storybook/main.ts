import path from 'path';

const config = {
  stories: ['../../../packages/design-system/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-outline',
    'storybook-tailwind-dark-mode',
    'storybook-addon-manual-mocks',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['nativewind', '@deur/design-system'],
        babelPlugins: ['nativewind/babel'],
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  // typescript: { reactDocgen: false },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return {
      ...config,
    };
  },
};
export default config;
