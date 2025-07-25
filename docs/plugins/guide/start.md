---
title: "快速开始"
outline: deep
lastUpdated: true
---

# 快速开始

本节将介绍如何在项目中使用插件
:package: 0.0.1

## 安装

::: code-group

```sh [pnpm]
$ pnpm add @ovyvo/vite-plugins@latest -D
```

```sh [npm]
$ npm add @ovyvo/vite-plugins@latest -D
```

```sh [yarn]
$ yarn add @ovyvo/vite-plugins@latest -D
```

:::

## 使用

```
import buildEndZipped from "@ovyvo/vite-plugins@latest"

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      buildEndZipped({
        needUpload: true
      }),
    ],
  }
})
```
