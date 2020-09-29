module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
