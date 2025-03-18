---
title: "快速开始"
outline: deep
lastUpdated: true
---

# 快速开始

本节将介绍如何在项目中使用组件库。

## 安装 {#installation}

### 前置准备 {#prerequisites}

本组件库基于element-plus开发，因此要求您本地环境需满足以下条件：

- [Vue](https://en.wikipedia.org/wiki/Markdown) 3.4及以上版本。
- [Element-plus](https://element-plus.org/zh-CN/) 2.8及以上版本
- [Lodash](https://www.lodashjs.com/) 4.17.21及以上版本
- [Node.js](https://nodejs.org/) 18 及以上版本。
- [@web/jg-plugin](http://192.168.100.91:82/web/jg-plugins) 0.0.28 及以上版本。

### 依赖安装 {#depinstall}

::: code-group

```sh [pnpm]
$ pnpm add radiant-ui@latest
```

```sh [npm]
$ npm add radiant-ui@latest
```

```sh [yarn]
$ yarn add radiant-ui@latest
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
import App from "./App.vue"

import RadiantUI from "radiant-ui" // [!code focus]
import "element-plus/dist/index.css" // [!code focus]
import "radiant-ui/index.css" // [!code focus]

const app = createApp(App)

app.use(RadiantUI) // [!code focus]
app.mount("#app")
```

#### 按需引入

```vue
<template>
  <jg-actbtn></jg-actbtn>
</template>
<script setup>
import { JgActbtn } from "radiant-ui"
import "radiant-ui/theme-chalk/src/jg-actbtn.css"
</script>
```
