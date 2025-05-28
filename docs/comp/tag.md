---
title: "tag"
outline: deep
lastUpdated: true
---

# Tag标签

常用状态tag标签，提供更多type及模式选择同时支持超长显示ToolTips提示。

## 基础用法

<script setup>
import { InfoFilled } from '@element-plus/icons-vue' 
import RaTag from '@components/tag/src/tag.vue'
const propsData = [
  {
    params: "type",
    desc:"状态",
    paramType:"Enum",
    paramInf: "'primary'|'primary_dark'|'success'|'info'|'info_purple'|'info_lackblue'|'warning'|'warning_dark'|'danger'|'danger_dark'",
    isRequired:"false",
    initValue:"'primary'"
  },
  {
    params: "effect",
    desc:"模式",
    paramType:"Enum",
    paramInf: "'dot' | ' '",
    isRequired:"false",
    initValue:"' '"
  },
  {
    params: "maxWidth",
    desc:"标签长度",
    paramType:"[String,Number]",
    paramInf: "",
    isRequired:"false",
    initValue:"100%"
  },
  {
    params: "cursor",
    desc:"是否鼠标手",
    paramType:"Boolean",
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
</script>

<style>
.tag-list>.el-tag{
  margin: 4px;
}
</style>

<div class="tag-list" style="width: 100%; display:flex; flex-wrap: wrap; ">
  <ra-tag type="primary">primary-tag</ra-tag>
  <ra-tag type="primary_dark" >primary_dark-tag</ra-tag>
  <ra-tag type="success" >success-tag</ra-tag>
  <ra-tag type="info" >info-tag</ra-tag>
  <ra-tag type="info_purple" >info_purple-tag</ra-tag>
  <ra-tag type="info_lackblue" >info_lackblue-tag</ra-tag>
  <ra-tag type="warning" >warning-tag</ra-tag>
  <ra-tag type="warning_dark" >warning_dark-tag</ra-tag>
  <ra-tag type="danger" >danger-tag</ra-tag>
  <ra-tag type="danger_dark">danger_dark-tag</ra-tag>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-tag type="primary">default-tag</ra-tag>
  <ra-tag type="primary_dark">green-tag</ra-tag>
  <ra-tag type="success">yellow-tag</ra-tag>
  <ra-tag type="info">orange-tag</ra-tag>
  <ra-tag type="info_purple">red-tag</ra-tag>
  <ra-tag type="info_lackblue">gray-tag</ra-tag>
  <ra-tag type="warning">blue-tag</ra-tag>
  <ra-tag type="warning_dark">purple-tag</ra-tag>
  <ra-tag type="danger">blue-tag</ra-tag>
  <ra-tag type="danger_dark">purple-tag</ra-tag>
  <ra-tag type="info_purple" effect="dot">dot-tag</ra-tag>
</template>
```

:::

## Dot模式

<div class="tag-list" style="width: 100%; display:flex; flex-wrap: wrap; ">
  <ra-tag type="info" effect="dot">dot-tag</ra-tag>
  <ra-tag type="info_purple" effect="dot">dot-tag</ra-tag>
  <ra-tag type="info_lackblue" effect="dot">dot-tag</ra-tag>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-tag type="info" effect="dot">dot-tag</ra-tag>
  <ra-tag type="info_purple" effect="dot">dot-tag</ra-tag>
  <ra-tag type="info_lackblue" effect="dot">dot-tag</ra-tag>
</template>
```

:::

## 超长显示省略号

<ra-tag type="info_purple" :maxWidth="100">这是一个超长的Tag标签</ra-tag>
::: code-group

```vue [javascript]
<template>
  <ra-tag type="info_purple" :maxWidth="100">这是一个超长的Tag标签</ra-tag>
</template>
```

:::

## 插槽

<div>
  <ra-tag type="primary">插槽内容</ra-tag>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-tag type="primary">插槽内容</ra-tag>
</template>
```

## 属性说明

::: tip
RaTag基于el-tag组件开发，适用于el-tag的基础属性可自动继承到RaTag组件
:::

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
