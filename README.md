# conventional-commits-demo

## 概述

约定式提交规范是一种基于提交消息的轻量级约定。 它提供了一组用于创建清晰的提交历史的简单规则； 这使得编写基于规范的自动化工具变得更容易。 这个约定与 [SemVer](http://semver.org/) 相吻合， 在提交信息中描述新特性、bug 修复和破坏性变更。

提交说明的结构如下所示：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

## 示例

### 包含了描述以及正文内有破坏性变更的提交说明

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 包含了可选的 `!` 字符以提醒注意破坏性变更的提交说明

```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### 不包含正文的提交说明

```
docs: correct spelling of CHANGELOG
```
