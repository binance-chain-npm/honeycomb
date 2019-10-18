module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/named': ['off'],
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
};
