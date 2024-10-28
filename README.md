<p align="center">
  <img src="https://ovyvo.github.io/radiant-ui/logo.png">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@ovyvo/radiant-ui">
    <img src="https://img.shields.io/npm/v/@ovyvo/radiant-ui.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/@ovyvo/radiant-ui?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/@ovyvo/radiant-ui?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/@ovyvo/radiant-ui/dist/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/@ovyvo/radiant-ui/theme-chalk/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="COMMITIZEN">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
</p>

> 适用于 Vue3.0 的简易组件库

## 安装

```shell
npm install @ovyvo/radiant-ui -S
// or
yarn add @ovyvo/radiant-ui -S
// or
cnpm install @ovyvo/radiant-ui -S
```

## 快速开始

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

> 详情参见 [快速开始](https://ovyvo.github.io/radiant-ui/guide/start.html) 文档.

## 链接

- 项目搭建及技术点分析详见[个人博客](https://ovyvo.github.io/yanblog.github.io/)

## LICENSE

[MIT](LICENSE)
