---
title: "快速开始"
outline: deep
lastUpdated: true
---

# 快速开始

本节将介绍如何在项目中使用组件库。

## 安装 {#installation}

### 前置准备 {#prerequisites}

因本组件库基于element-plus开发，因此要求您本地环境需满足以下条件：

- [vue](https://en.wikipedia.org/wiki/Markdown) 3.4及以上版本。
- [element-plus](https://element-plus.org/zh-CN/) 2.8及以上版本
- [Node.js](https://nodejs.org/) 18 及以上版本。

### 依赖安装 {#depinstall}

::: code-group

```sh [npm]
$ npm add @ovyvo/radiant-ui@latest
```

```sh [pnpm]
$ pnpm add @ovyvo/radiant-ui@latest
```

```sh [yarn]
$ yarn add @ovyvo/radiant-ui@latest
```

:::

### 项目使用 {#projectuse}

组件支持两种使用方式，全量引入及手动按需引入。

::: warning
注意：因组件库基于Element-plus开发，请在使用之前务必保证正确引入element-plus样式文件,保证组件样式正常
:::

```javascript
// main.ts
import "element-plus/dist/index.css"
```

#### 全量引入

```javascript
// main.ts
import { createApp } from "vue"
import RadiantUI from "@ovyvo/radiant-ui"
import "element-plus/dist/index.css"
import "@ovyvo/radiant-ui/dist/index.css"
import App from "./App.vue"

const app = createApp(App)

app.use(RadiantUI)
app.mount("#app")
```

#### 按需引入

```vue
<template>
  <ra-button>我是 RaButton</ra-button>
</template>
<script>
import { RaButton } from "@ovyvo/radiant-ui"
import "@ovyvo/radiant-ui/theme-chalk/src/ra-button.css"
export default {
  components: { RaButton }
}
</script>
```

## 规划

- 解决按需自动引入问题
- 解决样式依赖elment-plus引入问题
