module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'import/named': ['off'],
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
};
