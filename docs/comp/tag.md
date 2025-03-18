---
title: "tag"
outline: deep
lastUpdated: true
---

# Tag标签

常用tag标签，包含多中状态选择及部分模式样式定制，支持插槽定义内容。

## 基础用法

<script setup>
import { Delete } from '@element-plus/icons-vue' 
import { InfoFilled } from '@element-plus/icons-vue' 
import RaTag from '@components/tag/src/tag.vue'
const propsData = [
  {
    params: "color",
    desc:"颜色",
    paramType:"Enum",
    paramInf: "'default'|'green'|'yellow'|'orange'|'red'|'gray'|'blue'|'purple'",
    isRequired:"false",
    initValue:"'default'"
  },
  {
    params: "effect",
    desc:"模式",
    paramType:"Enum",
    paramInf: "'dark'|'light'|'dot'",
    isRequired:"false",
    initValue:"'light'"
  },
  {
    params: "cursor",
    desc:"是否鼠标手",
    paramType:"boolean",
    isRequired:"false",
    initValue:"false"
  },
]
const slotData = [
  {
    name: "default",
    desc:"默认插槽",
    isRequired: true
  }
]
const eventData = [
  {
    name: "click",
    desc:"点击事件",
    type: "Function",
    typeInf: "() => void"
  }
]
</script>

<div style="display:flex; align-items:center;">
  <ra-tag color="default" cursor style="margin-right: 6px">default-tag</ra-tag>
  <ra-tag color="green" style="margin-right: 6px">green-tag</ra-tag>
  <ra-tag color="yellow" style="margin-right: 6px">yellow-tag</ra-tag>
  <ra-tag color="orange" style="margin-right: 6px">orange-tag</ra-tag>
  <ra-tag color="red" style="margin-right: 6px">red-tag</ra-tag>
  <ra-tag color="gray" style="margin-right: 6px">gray-tag</ra-tag>
  <ra-tag color="blue" style="margin-right: 6px">blue-tag</ra-tag>
  <ra-tag color="purple">purple-tag</ra-tag>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-tag color="default">default-tag</ra-tag>
  <ra-tag color="green">green-tag</ra-tag>
  <ra-tag color="yellow">yellow-tag</ra-tag>
  <ra-tag color="orange">orange-tag</ra-tag>
  <ra-tag color="red">red-tag</ra-tag>
  <ra-tag color="gray">gray-tag</ra-tag>
  <ra-tag color="blue">blue-tag</ra-tag>
  <ra-tag color="purple">purple-tag</ra-tag>
</template>
```

:::

## 插槽

<div>
  <ra-tag color="red" @click="consol.log('执行删除事件')">
    <el-text type="danger">
      <el-icon>
        <Delete />
      </el-icon>
      删除
    </el-text>
  </ra-tag>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-tag color="red" @click="consol.log('执行删除事件')">
    <el-text>
      <el-icon>
        <Delete />
      </el-icon>
      删除
    </el-text>
  </ra-tag>
</template>
```

:::

## 模式及手势

<ra-tag effect="dark" cursor style="margin-right: 6px">ra-tag</ra-tag>
<ra-tag effect="light" style="margin-right: 6px">ra-tag</ra-tag>
<ra-tag effect="dot">ra-tag</ra-tag>

::: code-group

```vue [javascript]
<template>
  <ra-tag effect="dark" cursor>ra-tag</ra-tag>
  <ra-tag effect="light">ra-tag</ra-tag>
  <ra-tag effect="dot">ra-tag</ra-tag>
</template>
```

:::

## 属性说明

Tag属性:

<el-table border :data="propsData" stripe>
  <el-table-column prop="params" label="参数"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="paramType" label="类型">
    <template #default={row}>
      {{row.paramType}}
      <el-tooltip v-if="row.paramType == 'Enum'" :content="row.paramInf" placement="bottom">
        <el-icon><InfoFilled /></el-icon>
      </el-tooltip>
    </template>
  </el-table-column>
  <el-table-column prop="isRequired" label="是否必填" />
  <el-table-column prop="initValue" label="默认值" />
</el-table>

Tag插槽:

<el-table border :data="slotData" stripe>
  <el-table-column prop="name" label="插槽名"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="isRequired" label="是否必填" />
</el-table>

Tag事件:

<el-table border :data="eventData" stripe>
  <el-table-column prop="name" label="事件名"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="type" label="类型">
    <template #default={row}>
      {{row.type}}
      <el-tooltip :content="row.typeInf" placement="bottom">
        <el-icon><InfoFilled /></el-icon>
      </el-tooltip>
    </template>
  </el-table-column>
</el-table>
