module.exports = {
  types: [
    {
      value: 'feat:zap:',
      name: 'feat:      新功能'
    },
    {
      value: 'fix:bug:',
      name: 'fix:       修复Bug'
    },
    {
      value: 'docs:memo:',
      name: 'docs:      文档变动'
    },
    {
      value: 'style:lipstick:',
      name: 'style:     不影响代码含义的变化(空白、格式化、缺少分号等)'
    },
    {
      value: 'refactor:recycle:',
      name: 'refactor:   重构代码，既不修复错误也不添加功能'
    },
    {
      value: 'perf:zap:',
      name: 'perf:      性能优化'
    },
    {
      value: 'test:white_check_mark:',
      name: 'test:      测试相关'
    },
    {
      value: 'build:building_construction:',
      name: 'build:       影响构建系统或外部依赖关系的更改'
    },
    {
      value: 'ci:construction_worker:',
      name: 'ci:          更改持续集成文件和脚本'
    },
    {
      value: 'chore:right_anger_bubble:',
      name: 'chore:       重新打包或更新依赖工具等杂活'
    },
    {
      value: 'revert:rewind:',
      name: 'revert:    Revert to a commit'
    },
    {
      value: 'wip:construction:',
      name: 'wip:       Work in progress'
    },
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '请选择 Commit 类型:',
    scope: '请选择影响范围 (Scope) (可选):',
    customScope: '请选择影响范围 (Scope) (可选):',
    subject: '请提供一段简要的 Commit 信息:\n',
    body: '请提供一段详细的信息来描述此次更改 (可选). 使用 "|" 来另起一行:\n',
    breaking: '是否有任何 BREAKING CHANGES (可选):\n',
    footer: '是否有任何 ISSUE 可以被此次 Commit 关闭 (可选). E.g.: #31, #34:\n',
    confirmCommit: '是否确认提交上述 Commit 信息?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat:sparkles:', 'fix:bug:', 'refactor♻:recycle:'],

  // limit subject length
  subjectLimit: 100,
};
