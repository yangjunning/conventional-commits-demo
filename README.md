[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg?maxAge=2592000)](https://conventionalcommits.org) [![Coverage Status](https://coveralls.io/repos/github/yangjunning/conventional-commits-demo/badge.svg?branch=master)](https://coveralls.io/github/yangjunning/conventional-commits-demo?branch=master) [![codecov](https://codecov.io/gh/yangjunning/conventional-commits-demo/branch/master/graph/badge.svg?token=5isBPzt8E8)](https://codecov.io/gh/yangjunning/conventional-commits-demo) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) 

## 前言

规范化 `git commit` 对于提高 `git log` 可读性、可控的版本控制和 changelog 生成都有着重要的作用。然而阻碍我们脚步的不只是团队的推广，单单对于一系列工具的配置都让人头大。这其中主要就是 commitlint 和 commitizen 的配合使用以及自定义提交规范。本文总结了目前的最佳实践给大家，如果有帮助，赏个star足矣。

## Conventional Commits 约定式提交规范

[Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/) 是一种用于给提交信息增加人机可读含义的规范。约定式提交规范是一种基于消息的轻量级约定。它提供了一组用于创建清晰的提交历史的简单规则；这使得编写基于规范的自动化工具变得更容易。这个约定与 [SemVer](http://semver.org/) 相吻合，在提交信息中描述新特性、bug 修复和破坏性变更。

提交说明的结构如下所示：

```
<类型>([可选的作用域]): <描述>

[可选的正文]

[可选的脚注]
```

### 类型（type）

- `feat:`:  类型为 `feat` 的提交表示在代码库中新增了一个功能（这和语义化版本中的 [`MINOR`](https://semver.org/lang/zh-CN/#摘要) 相对应）。 
- `fix:`：类型为 `fix` 的 提交表示在代码库中修复了一个 bug （这和语义化版本中的 [`PATCH`](https://semver.org/lang/zh-CN/#摘要) 相对应）。
- `docs:`: 只是更改文档。
- `style:`: 不影响代码含义的变化（空白、格式化、缺少分号等）。
- `refactor:`: 代码重构，既不修复错误也不添加功能。
- `perf:`: 改进性能的代码更改。
- `test:`: 添加确实测试或更正现有的测试。 
- `build:`: 影响构建系统或外部依赖关系的更改（示例范围：gulp、broccoli、NPM）。
- `ci:`: 更改持续集成文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）。
- `chore:`:  其他不修改`src`或`test`文件。
- `revert:`: commit 回退。

### 范围（scope）

可以为提交类型添加一个围在圆括号内的作用域，以为其提供额外的上下文信息。例如 `feat(parser): adds ability to parse arrays.`。

### BREAKING CHANGE

在可选的正文或脚注的起始位置带有 `BREAKING CHANGE:` 的提交，表示引入了破坏性 API 变更（这和语义化版本中的 [`MAJOR`](https://semver.org/lang/zh-CN/#摘要) 相对应）。 破坏性变更可以是任意 *类型* 提交的一部分。

### 示例

#### 包含了描述以及正文内有破坏性变更的提交说明

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### 包含了可选的 `!` 字符以提醒注意破坏性变更的提交说明

```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

#### 不包含正文的提交说明

```
docs: correct spelling of CHANGELOG
```

#### 包含作用域的提交说明

```
feat(lang): add polish language
```

#### 为 fix 编写的提交说明，包含（可选的） issue 编号

```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

### 约定式提交规范

1. 每个提交都**必须**使用类型字段前缀，它由一个名词组成，诸如`feat`或`fix`，其后接一个**可选的**作用域字段，以及一个**必要的**冒号（英文半角）和空格。
2. 当一个提交为应用或类库实现了新特性时，**必须**使用`feat`类型。
3. 当一个提交为应用修复 bug 时，**必须**使用`fix`类型。
4. 作用域字段可以跟随在类型字段后面。作用有**必须**是一个描述某部分代码的名词，并用圆括号包围，例如：`fix(parser): `
5. 描述字段**必须**紧接在类型/作用域前缀的空格之后。描述指的是对代码变更的简短总结，例如：`fix:array parsing issue when multiplejspaces were contained in string`。
6. 在简短描述之后，**可以**编写更长的提交正文，为代码变更提供额外的上下文信息。正文**必须**起始于描述字段结束的一个空行后。
7. 在正文结束的一个空行之后，**可以**编写一行或或多行脚注。脚注**必须**包含关于提交的元信息，例如：关联的合并请求、Reviewer、破坏性变更、每条元信息一行。
8. 破坏性变更**必须**标示在正文区域最开始处，或脚注区域中某一行的开始。一个破坏性变更**必须**包含大写的文本`BREAKING CHANGE`，后面紧跟冒号和空格。
9. 在`BREAKING CHANGE:`之后**必须**提供描述，以描述对 API 的变更。例如：`BREAKING CHANGE: enviroment variables now take precedence over cofig files`。
10. 在提交说明中，**可以**使用`feat`和`fix`之外的类型。
11. 工具的实现**必须不**区分大小写地解析构成约定式提交的信息单元，只有`BREAKING CHANGE`  **必须**是大写的。
12. **可以**在类型/作用域前缀之后，`:`之前，附加`!`字符，以进一步提醒注意破坏性变更。当有`!`前缀时，正文或脚注内必须包含`BREAKING CHANGE: description`

### 为什么使用约定式提交

- 自动化生产 CHANGELOG。
- 基于提交的类型，自动决定语义化的版本变更。
- 向同事、公众与其他利益关系者传达变化的性质。
- 触发构建和部署流程。
- 让人们探索一个更加结构化的提交历史，以便降低对你的项目作出贡献的难度。

## cz-customizable

可自定义的Commitizen插件（或独立实用运行）可帮助实现一致的提交消息。

安装 cz-customizable：

```sh
$ yarn add cz-customizable -D
```

向 package.json 添加新的 script：

```json
{
  "scripts" : {
    ...
    "commit": "./node_modules/cz-customizable/standalone.js"
  }
}
```

在根目录新建 `.cz-config.js` 并复制 [cz-config-EXAMPLE.js](https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js) 到文件。

效果：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d049880526b4738ba54915d182831c4~tplv-k3u1fbpfcp-zoom-1.image)

## commitlint

commitlint检查您的提交消息是否符合[conventional commit format](https://conventionalcommits.org/)。

1、安装 @commitlint/cli、husky：

```shell
$ yarn add -D @commitlint/cli husky
```

2、添加 git commit hooks 到 package.json：

```json
{
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

3、安装 commitlint-config-cz：

commitlint-config-cz 合并 cz-customizable 的配置 `{types,scopes,scopeOverrides}` 和 commitlint 的配置 `{type-enum,scope-enum}`。这样，你就可以在一个地方维护 types 和 scopes。

```shell
$ yarn add commitlint-config-cz -D
```

4、在 `commitlint.config.js` 中用 `cz` 扩展您的 commitlint 配置：

```js
module.exports = {
  extends: ['cz'],
  rules: {
    // must add these rules
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never']
  }
};
```

## vscode commitizen

在 VS Code 中搜索装 vscode commitizen，然后就可以摆脱命令行了，而且这个插件是和前面所有的配置兼容的，效果如下：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c46df7e45f584f63b99b1748c5b6e743~tplv-k3u1fbpfcp-zoom-1.image)

## GitHub Actions

新建一个 github workflow `.github/workflows/commitlint.yml`，作用是在提交 pull_request 时，检查信息:

```yml
name: Lint Commit Messages
on: [pull_request]

jobs:
  commitlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v1
        with:
          node-version: '10.x'
      - run: npm install
      - name: Add dependencies for commitlint action
        # $GITHUB_WORKSPACE is the path to your repository
        run: echo "::set-env name=NODE_PATH::$GITHUB_WORKSPACE/node_modules"
      # Now the commitlint action will run considering its own dependencies and yours as well 🚀
      - uses: wagoid/commitlint-github-action@v2
```

## standard-version

[standard-version](https://link.zhihu.com/?target=https%3A//github.com/conventional-changelog/standard-version) 是一款遵循[语义化版本（ semver）](https://link.zhihu.com/?target=https%3A//semver.org/)和 [commit message 标准规范](https://link.zhihu.com/?target=https%3A//conventionalcommits.org/) 的版本和 changelog 自动化工具。通常情况线下，我们会在 master 分支进行如下的版本发布操作：

1. `git pull origin master`
2. 根据 `package.json` 中的 `version` 更新版本号，更新 CHANGELOG
3. `git add .`
4. `git commit`
5. `git tag` 打版本操作
6. `git push --tags`：push 版本 tag 和 master 分支到仓库

其中 **2，3，4，5** 是 standard-version 工具会自动完成的工作，配合本地的 shell 脚本，则可以自动完成一系列版本发布的工作了。

### 安装 & 使用

```shell
$ yarn add -D standard-version
```

```json
// package.json 
{
  "scripts": {
    "release": "standard-version"
  }
}
```

- First Release：`yarn release --first-release`
- Cutting Release：`yarn release`
- Release as a Pre-Release：`yarn release --prerelease` or `yarn release --prerelease alpha`
- Release as a Target Type Imperatively (`npm version`-like)：`yarn release --release-as minor` or `yarn release --release-as 1.1.0`，可以合并 `--prerelease`以此方便发布实验性特性
- Prevent Git Hooks：`yarn release --no-verify`

## Catch Me

> GitHub: [youngjuning](https://github.com/youngjuning) | 微信: `yang_jun_ning` | 公众号: `前端早茶馆` | 邮箱: youngjuning@aliyun.com

|                             微信                             |                             投食                             |                            公众号                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://i.loli.net/2020/02/22/q2tLiGYvhIxm3Fl.jpg" width="200px"/> | <img src="https://i.loli.net/2020/02/23/q56X1eYZuITQpsj.png" width="200px"/> | <img src="https://i.loli.net/2020/07/28/6AyutjZ1XI4aUDV.jpg" width="200px"/> |

本文首发于[杨俊宁的博客](https://youngjuning.js.org/)，创作不易，您的点赞👍是我坚持的动力！！！
