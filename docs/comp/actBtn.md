---
title: "actbtn"
outline: deep
lastUpdated: true
---

# ActBtn按钮

列表页数据导入导出按钮，支持批量导出及全量导出。

## 基础用法

<script setup>
import RaActbtn from '@components/actbtn/src/actbtn.vue'
import { InfoFilled } from '@element-plus/icons-vue' 
const propsData = [
  {
    params: "actType",
    desc:"按钮类型",
    paramType:"Enum",
    isRequired:"false",
    initValue:"input"
  },
  {
    params: "prefix",
    desc:"按钮前缀",
    paramType:"String",
    isRequired:"false",
    initValue:"-"
  },
  {
    params: "suffix",
    desc:"按钮后缀",
    paramType:"String",
    isRequired:"false",
    initValue:"-"
  },
  {
    params: "exportAll",
    desc:"导出全部",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"-"
  }
]

const eventData = [
  {
    name: "click",
    desc: "点击事件",
    type: "Function",
    typeInf: "(type: ' ' | 'all' | 'current') => void"
  }
]

</script>

<ra-actbtn actType="input" type="danger"></ra-actbtn>
<ra-actbtn actType="export" type="warning"></ra-actbtn>
<ra-actbtn exportAll style="margin-left: 12px"></ra-actbtn>

::: code-group

```vue [javascript]
<template>
  <ra-actbtn actType="input" type="danger"></ra-actbtn>
  <ra-actbtn actType="export" type="warning"></ra-actbtn>
  <ra-actbtn exportAll></ra-actbtn>
</template>
```

:::

## 添加前(后)缀

<ra-actbtn actType="input" prefix="手动" suffix="列表"></ra-actbtn>

::: code-group

```vue [javascript]
<template>
  <ra-actbtn actType="input" prefix="手动" suffix="列表"></ra-actbtn>
</template>
```

:::

## 属性说明

::: tip
导入导出按钮基于el-button组件开发，适用于el-button的基础属性可自动继承到actbtn组件
:::

Actbtn属性:

<el-table border :data="propsData" stripe>
  <el-table-column prop="params" label="参数"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="paramType" label="类型">
    <template #default={row}>
      {{row.paramType}}
      <el-tooltip v-if="row.paramType == 'Enum'" content="'input' | 'output'" placement="bottom">
        <el-icon><InfoFilled /></el-icon>
      </el-tooltip>
    </template>
  </el-table-column>
  <el-table-column prop="isRequired" label="是否必填" />
  <el-table-column prop="initValue" label="默认值" />
</el-table>

Actbtn事件:

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
