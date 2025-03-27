---
title: "快速开始"
outline: deep
lastUpdated: true
---

# 快速开始

本节将介绍如何在项目中使用通用工具方法
:package: 0.0.1

## 安装

::: code-group

```sh [pnpm]
$ pnpm add @ovyvo/ra-utils@latest
```

```sh [npm]
$ npm add @ovyvo/ra-utils@latest
```

```sh [yarn]
$ yarn add @ovyvo/ra-utils@latest
```

:::

## 使用

::: code-group

```vue
<script setup>
import { downFileFromBlob } from "@ovyvo/ra-utils"

const downloadFile = (url, fileName) => {
  downFileFromBlob(url, fileName)
}
</script>
```

:::
