---
title: "empty"
outline: deep
lastUpdated: true
---

# Empty空状态

常用Empty空状态展示。

## 基础用法

<script setup>
import { InfoFilled } from '@element-plus/icons-vue' 
import RaEmpty from '@components/empty/src/empty.vue'
const propsData = [
  {
    params: "type",
    desc:"类型",
    paramType:"Enum",
    paramInf: "'noContent'|'noData'|'noNetwork'|'noResult'| 'noMessage'|'noFixed'|'404'|'500'",
    isRequired:"false",
    initValue:"'noData'"
  },
  {
    params: "title",
    desc:"标题",
    paramType:"String",
    isRequired:"false",
    initValue:"' '"
  },
  {
    params: "describe",
    desc:"描述",
    paramType:"String",
    isRequired:"false",
    initValue:"' '"
  },
  {
    params: "hideText",
    desc:"是否隐藏标题描述",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"false"
  },
]

const slotData = [
  {
    name: "default",
    desc:"默认插槽",
    isRequired: false
  }
]

let statusList = ['noContent','noData','noNetwork','noResult','noMessage','noFixed','404','500','403']
</script>

<div style="display:flex; align-items:center; flex-wrap: wrap">
  <div 
    v-for="item in statusList"
    :key="item"
    style="
      width: 31%;
      height: 280px;
      margin: 8px;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px;
      box-shadow:var(--el-box-shadow-lighter);
      display: flex;
    "
  >
    <ra-empty :type="item"></ra-empty>
  </div>
  
</div>

::: code-group

```vue [javascript]
<template>
  <ra-empty type="noContent"></ra-empty>
  <ra-empty type="noData"></ra-empty>
  <ra-empty type="noNetwork"></ra-empty>
  <ra-empty type="noResult"></ra-empty>
  <ra-empty type="noMessage"></ra-empty>
  <ra-empty type="noFixed"></ra-empty>
  <ra-empty type="404"></ra-empty>
  <ra-empty type="500"></ra-empty>
  <ra-empty type="403"></ra-empty>
</template>
```

:::

## 默认插槽

<div style="display:flex; align-items:center; flex-wrap: wrap">
  <div 
    style="
      width: 31%;
      height: 280px;
      margin: 8px;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px;
      box-shadow:var(--el-box-shadow-lighter);
      display: flex;
    "
  >
    <ra-empty>
      <el-button size="small">查看其他</el-button>
    </ra-empty>
  </div>
  
</div>

::: code-group

```vue [javascript]
<template>
  <ra-empty>
    <el-button size="small">查看其他</el-button>
  </ra-empty>
</template>
```

:::

## 属性说明

Empty属性:

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

Empty插槽:

<el-table border :data="slotData" stripe>
  <el-table-column prop="name" label="插槽名"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="isRequired" label="是否必填" />
</el-table>
