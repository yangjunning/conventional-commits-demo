module.exports = {
  extends: ['cz'],
  rules: {
    'scope-case': [1, 'always', 'pascal-case'],
    'subject-case': [0],
    'subject-full-stop': [0],
    "type-enum": [
      2,
      "always",
      [
              "feat✨",
              "fix🐞",
              "docs📚",
              "style💅",
              "refactor🛠",
              "perf🐎",
              "test🏁",
              "revert⏪",
              "chore🗯"
      ]
]
  }
};