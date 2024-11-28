<p align="center">
  <img src="https://ovyvo.github.io/radiant-ui/logo.png">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@ovyvo/radiant-ui">
    <img src="https://img.shields.io/npm/v/@ovyvo/radiant-ui.svg">
  </a>
  <a href="https://www.npmjs.com/package/@ovyvo/radiant-ui">
    <img src="https://img.shields.io/badge/node-%20%3E%3D%2018-47c219" />
  </a>
  <a href="https://npmcharts.com/compare/@ovyvo/radiant-ui?minimal=true">
    <img src="https://img.shields.io/npm/dm/@ovyvo/radiant-ui.svg" />
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
import "element-plus/dist/index.css"
import RadiantUI from "@ovyvo/radiant-ui"
import "@ovyvo/radiant-ui/index.css"
import App from "./App.vue"

const app = createApp(App)

app.use(RadiantUI)
app.mount("#app")
```

#### 按需引入

```vue
<template>
  <ra-actbtn></ra-actbtn>
</template>

<script setup>
import { RaActbtn } from "@ovyvo/radiant-ui"
import "@ovyvo/radiant-ui/theme-chalk/src/ra-actbtn.css"
</script>
```

> 详情参见 [快速开始](https://ovyvo.github.io/radiant-ui/guide/start.html) 文档.

## 链接

- 项目搭建及技术点分析详见[个人博客](https://ovyvo.github.io/yanblog.github.io/)

## LICENSE

[MIT](LICENSE)
