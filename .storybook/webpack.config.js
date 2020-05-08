const svgrConfig = require('../svgr.config');

module.exports = ({ config, mode }) => {
  // Make sure SVGs are not loaded with `file-loader`.
  config.module.rules[3].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: svgrConfig,
        },
        'url-loader',
      ],
    },
  );

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
