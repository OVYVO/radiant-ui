---
title: "actbutton"
outline: deep
lastUpdated: true
---

# ActBtn按钮

列表页数据导入导出按钮，支持批量导出及全量导出。

## 基础用法

<script setup>
import RaActbtn from '@components/button/src/button.vue'
const propsData = [
  {
    params: "actType",
    desc:"按钮类型",
    paramType:"String<'input' | 'export'>",
    canEmpty:"false",
    initValue:"input"
  },
  {
    params: "suffix",
    desc:"按钮前缀",
    paramType:"String",
    canEmpty:"false",
    initValue:"-"
  },
  {
    params: "exportAll",
    desc:"导出全部",
    paramType:"Boolean",
    canEmpty:"false",
    initValue:"-"
  }
]

</script>

<ra-actbtn actType="input" type="danger"></ra-actbtn>
<ra-actbtn actType="export" type="warning"></ra-actbtn>
<ra-actbtn exportAll ></ra-actbtn>

::: code-group

```vue [javascript]
<template>
  <ra-actbtn actType="input" type="danger"></ra-actbtn>
  <ra-actbtn actType="export" type="warning"></ra-actbtn>
  <ra-actbtn exportAll></ra-actbtn>
</template>

<script setup>
import { RaActButton } from "radiant-ui"
</script>
```

:::

## 添加前缀

<ra-actbtn actType="input" suffix="手动"></ra-actbtn>

::: code-group

```vue [javascript]
<template>
  <ra-actbtn actType="input" suffix="手动"></ra-actbtn>
</template>
```

:::

## 属性说明

::: tip
导入导出按钮基于el-button组件开发，适用于el-button的基础属性可自动继承到act-btn组件
:::

<el-table :data="propsData" stripe>
  <el-table-column prop="params" label="参数"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="paramType" label="类型" width="200"/>
  <el-table-column prop="canEmpty" label="是否必填" />
  <el-table-column prop="initValue" label="默认值" />
</el-table>
