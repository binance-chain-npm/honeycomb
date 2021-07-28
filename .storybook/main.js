const svgrConfig = require('../svgr.config');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async (config) => {
    // Make sure SVGs are not loaded with `file-loader`.
    config.module.rules = config.module.rules.map((it) => {
      if (!it.test.source) return it;

      return {
        ...it,
        test: new RegExp(it.test.source.replace('svg|', '')),
      };
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: svgrConfig,
        },
        'url-loader',
      ],
    });

    return config;
  },
};
