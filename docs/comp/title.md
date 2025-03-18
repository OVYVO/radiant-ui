---
title: "title"
outline: deep
lastUpdated: true
---

# Title页头

页头title组件，通常用于显示页面title或表单分割title。

## 基础用法

<script setup>
import { Delete } from '@element-plus/icons-vue' 
import { InfoFilled } from '@element-plus/icons-vue' 
import RaTitle from '@components/title/src/title.vue'
const propsData = [
  {
    params: "title",
    desc:"页头标题",
    paramType:"string",
    isRequired:"false",
    initValue:"' '"
  },
  {
    params: "showLine",
    desc:"是否显示标线",
    paramType:"boolean",
    isRequired:"false",
    initValue:"true"
  },
]
const slotData = [
  {
    name: "prefix",
    desc:"前置插槽",
    isRequired: false
  },
  {
    name: "suffix",
    desc:"后置插槽",
    isRequired: false
  }
]

</script>

<div style="
  box-sizing: border-box;
  padding: 20px; 
  box-shadow:var(--el-box-shadow-lighter);
  border-radius: 10px;
">
  <ra-title title="简单标题"></ra-title>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-title title="简单标题"></ra-title>
</template>
```

:::

## 前置插槽

<div style="
  box-sizing: border-box;
  padding: 20px; 
  box-shadow:var(--el-box-shadow-lighter);
  border-radius: 10px;
">
  <ra-title title="简单标题">
    <template #prefix>
      <el-icon><InfoFilled /></el-icon>
      <span>注释文字</span>
    </template>
  </ra-title>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-title title="简单标题">
    <template #prefix>
      <el-icon><InfoFilled /></el-icon>
      <span>注释文字</span>
    </template>
  </ra-title>
</template>
```

:::

## 后置插槽

<div style="
  box-sizing: border-box;
  padding: 20px; 
  box-shadow:var(--el-box-shadow-lighter);
  border-radius: 10px;
">
  <ra-title title="简单标题">
    <template #suffix>
      <el-button size="small">新增</el-button>
    </template>
  </ra-title>
</div>
<div style="
  box-sizing: border-box;
  padding: 20px; 
  box-shadow:var(--el-box-shadow-lighter);
  border-radius: 10px;
  margin: 10px 0;
">
  <ra-title title="简单标题">
    <template #suffix>
      展开 >
    </template>
  </ra-title>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-title title="简单标题">
    <template #suffix>
      <el-button>新增</el-button>
    </template>
  </ra-title>
  <ra-title title="简单标题">
    <template #suffix>展开 ></template>
  </ra-title>
</template>
```

:::

## 属性说明

Title属性:

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

Title插槽:

<el-table border :data="slotData" stripe>
  <el-table-column prop="name" label="插槽名"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="isRequired" label="是否必填" />
</el-table>
