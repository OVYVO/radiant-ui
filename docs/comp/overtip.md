---
title: "overtip"
outline: deep
lastUpdated: true
---

# Overtip文本

用于单行或多行文本内容超出父级容器宽度，显示省略号，鼠标划入展示tooltips效果。

<script setup>
import { InfoFilled } from '@element-plus/icons-vue' 
import RaOvertip from '@components/overtip/src/overtip.vue'
const propsData = [
  {
    params: "content",
    desc:"文本内容",
    paramType:"String",
    isRequired:"true",
    initValue:"' '"
  },
  {
    params: "line",
    desc:"多行隐藏",
    paramType:"Number",
    isRequired:"false",
    initValue:"1"
  },
  {
    params: "customClass",
    desc:"自定义类名",
    paramType:"String[]",
    isRequired:"false",
    initValue:"[]"
  },
  {
    params: "showTip",
    desc:"是否显示tooptip",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"true"
  },
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

## 基础用法

<div style="
  width:200px;
  box-shadow:var(--el-box-shadow-lighter);
  border-radius:4px;
  padding:0 6px;"
>
  <ra-overtip content="这是一条超越了容器宽度的字符串"></ra-overtip>
</div>

::: code-group

```vue [javascript]
<template>
  <div style="width: 100px;">
    <ra-overtip content="这是一条超越了容器宽度的字符串"></ra-overtip>
  </div>
</template>
```

:::

## 多行隐藏

<div style="
  width:100px;
  box-shadow:var(--el-box-shadow-lighter);
  border-radius:4px; 
  padding:0 6px;"
>
  <ra-overtip :line="2" content="这是一条超越了容器宽度的多行字符串"></ra-overtip>
</div>

::: code-group

```vue [javascript]
<template>
  <div style="width: 100px;">
    <ra-overtip :line="2" content="这是一条超越了容器宽度的字符串"></ra-overtip>
  </div>
</template>
```

:::

## 控制是否展示tooltips

<div style="
  width:100px;
  box-shadow:var(--el-box-shadow-lighter);
  border-radius:4px; 
  padding:0 6px;"
>
  <ra-overtip :showTip="false" content="手动控制是否展示tooltips"></ra-overtip>
</div>

::: code-group

```vue [javascript]
<template>
  <div style="width: 100px;">
    <ra-overtip :showTip="false" content="手动控制是否展示tooltips"></ra-overtip>
  </div>
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
