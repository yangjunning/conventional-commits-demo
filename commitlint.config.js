module.exports = {
  extends: ['@commitlint/config-conventional','cz'],
  rules: {
    'scope-case': [1, 'always', 'pascal-case'],
    'subject-case': [0],
    'subject-full-stop': [0],
  }
};