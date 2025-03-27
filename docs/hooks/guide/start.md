---
title: "快速开始"
outline: deep
lastUpdated: true
---

# 快速开始

本节将介绍如何在项目中使用Hooks
:package: 0.0.1

## 安装

::: code-group

```sh [pnpm]
$ pnpm add @ovyvo/ra-hooks@latest
```

```sh [npm]
$ npm add @ovyvo/ra-hooks@latest
```

```sh [yarn]
$ yarn add @jg/jg-hooks@latest
```

:::

## 使用

::: code-group

```vue
<script setup>
import { useList } from "@jg/hooks"
import { getLogList } from "@/api/logManagement.js"

const { tableData, totalNum, queryForm, loading, resetSearch, searchList, getList } = useList(
  getLogList,
  {
    searchText: "",
    type: 1,
    pageNum: 1,
    pageSize: 10
  },
  {
    exclude: ["type"]
  }
)
</script>
```

:::
