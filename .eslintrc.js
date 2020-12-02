module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['literal-check'],
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'literal-check/literal-check': [2, ['tuya.'], ['tuya.m.device.media.latest', 'tuya.m.device.media.detail']],
  },
};
