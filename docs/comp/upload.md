---
title: "upload"
outline: deep
lastUpdated: true
---

# Upload上传

文件上传组件，支持拖拽及按钮点击样式，输出文件列表，适用表单上传，列表导入等场景。

## 基础用法

<script setup>
import { ref } from 'vue'
import { ElMessage, ElIcon } from 'element-plus'
import { Delete, InfoFilled, Upload } from '@element-plus/icons-vue' 
import RaUpload from '@components/upload/src/upload.vue'
const propsData = [
  {
    params: "styleType",
    desc:"风格类型",
    paramType:"Enum",
    isRequired:"false",
    initValue:"'drag'",
    paramInf:"'drag' | 'btn'"
  },
  {
    params: "accepts",
    desc:"文件类型",
    paramType:"Array",
    isRequired:"true",
    initValue:"[]"
  },
  {
    params: "size",
    desc:"文件大小",
    paramType:"Number",
    isRequired:"false",
    initValue:"0(不限大小)"
  },
  {
    params: "limit",
    desc:"文件个数",
    paramType:"Number",
    isRequired:"false",
    initValue:"1"
  },
  {
    params: "nameLen",
    desc:"文件名字符限制",
    paramType:"Number",
    isRequired:"false",
    initValue:"50"
  },
  {
    params: "needTemplate",
    desc:"是否展示下载模板",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"true"
  },
]
const eventData = [
  {
    name: "handleTempDownload",
    desc: "点击下载模板回调",
    type: "Function",
    typeInf: "() => void"
  }
]
const slotData = [
  {
    name: "default",
    desc:"默认插槽(仅限按钮上传)",
    isRequired: false
  }
]

let fileList1 = ref([])
let fileList2 = ref([])
let fileList3 = ref([])
let downloadTemp = ()=>{
  ElMessage.success("下载模板")
}

</script>

<div style="
  box-sizing: border-box;
  padding: 20px; 
  box-shadow:var(--el-box-shadow-lighter);
  border-radius: 10px;
">
  <ra-upload v-model="fileList1" :accepts="['.xlsx']" @handleTempDownload="downloadTemp"></ra-upload>
</div>

::: code-group

```vue [javascript]
<template>
  <ra-upload v-model="fileList" :accepts="[.xlsx]" @handleTempDownload="downloadTemp"></ra-upload>
</template>

<script setup>
import { ref } from "vue"

const fileList = ref([])

const downloadTemp = () => {
  ElMessage.success("下载模板")
}
</script>
```

:::

## 按钮上传

<ra-upload v-model="fileList2" :limit="2" :accepts="['.xlsx']" styleType="btn"></ra-upload>

::: code-group

```vue [javascript]
<template>
  <ra-upload v-model="fileList" :limit="2" :accepts="[.xlsx]" styleType="btn"></ra-upload>
</template>
```

:::

## 默认插槽

<ra-upload v-model="fileList3" :accepts="['.xlsx']" styleType="btn">
  <el-button type="primary" :icon="Upload" circle />
</ra-upload>

::: code-group

```vue [javascript]
<ra-upload v-model="fileList3" :limit="2" :accepts="['.xlsx']" styleType="btn">
  <el-button type="primary" :icon="Upload" circle />
</ra-upload>
```

:::

## 属性说明

::: tip
本组件基于el-upload组件开发，未设置自动继承属性，有定制需求请联系相关开发人员添加！
:::

Upload属性:

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

Upload事件:

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

Upload插槽:

<el-table border :data="slotData" stripe>
  <el-table-column prop="name" label="插槽名"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="isRequired" label="是否必填" />
</el-table>
