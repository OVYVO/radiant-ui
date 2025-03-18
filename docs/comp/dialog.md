---
title: "dialog"
outline: deep
lastUpdated: true
---

# Dialog弹窗

基于elment-plus二次封装的Dialog组件。

<script setup>
import {ref} from 'vue'
import { InfoFilled } from '@element-plus/icons-vue' 
import RaDialog from '@components/dialog/src/dialog.vue'

const propsData = [
  {
    params: "size",
    desc:"弹窗尺寸",
    paramType:"Enum",
    paramInf:"'default'|'small'|'large'",
    isRequired:"false",
    initValue:"'default'"
  },
  {
    params: "showClose",
    desc:"是否展示关闭按钮",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"true"
  },
  {
    params: "fullBody",
    desc:"是否展示全屏按钮",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"false"
  },
  {
    params: "footer",
    desc:"是否展示页脚",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"true"
  },
  {
    params: "confirmText",
    desc:"确认按钮文本",
    paramType:"String",
    isRequired:"false",
    initValue:"'提交'"
  },
  {
    params: "cancelText",
    desc:"取消按钮文本",
    paramType:"String",
    isRequired:"false",
    initValue:"'取消'"
  },
  {
    params: "maxHeight",
    desc:"body最大高度",
    paramType:"[Number|String]",
    isRequired:"false",
    initValue:"800"
  },
  {
    params: "zIndex",
    desc:"dialog层级",
    paramType:"Number",
    isRequired:"false",
    initValue:"100"
  },
  {
    params:'debounceTime',
    desc:"确认按钮防抖时长",
    paramType:"Number",
    isRequired:"false",
    initValue:"0"
  }
]
const slotData = [
  {
    name: "default",
    desc:"Body区默认插槽",
    isRequired: false
  },
  {
    name: "extra",
    desc:"Header操作区插槽",
    isRequired: false
  },
  {
    name: "header",
    desc:"Header插槽",
    isRequired: false
  },
  {
    name: "footer",
    desc:"Footer插槽",
    isRequired: false
  }
]
const eventData = [
  {
    name: "ok",
    desc:"确认事件",
    type: "Function",
    typeInf: "() => void"
  },
  {
    name: "close",
    desc:"取消事件",
    type: "Function",
    typeInf: "() => void"
  }
]

let dialogOneShow = ref(false)
let dialogTwoShow = ref(false)
let imgSrc1 = 'https://images.pexels.com/photos/29207369/pexels-photo-29207369.jpeg'
let imgSrc2 = "https://images.pexels.com/photos/28712680/pexels-photo-28712680.jpeg"
</script>

## 基础用法

<ra-dialog title="普通弹窗" :lock-scroll="false" v-model="dialogOneShow" @close="dialogOneShow=false" @ok="dialogOneShow=false">
<img :src="imgSrc1" style="width: 100%"/>
</ra-dialog>

<el-button @click="dialogOneShow=true">打开弹窗</el-button>

::: code-group

```vue [javascript]
<template>
  <ra-dialog v-model="dialogShow" title="普通弹窗" @close="handleClose" @ok="handleOk">
    <img :src="imgSrc" style="width: 100%" />
  </ra-dialog>
  <el-button @click="dialogShow = true">打开弹窗</el-button>
</template>

<script setup>
import { ref } from "vue"

let dialogShow = ref(false)
let imgSrc = "https://images.pexels.com/photos/29207369/pexels-photo-29207369.jpeg"

const handleClose = () => {
  //...业务逻辑
  dialogShow.value = false
}

const handleOk = () => {
  //...业务逻辑
  dialogShow.value = false
}
</script>
```

:::

## 设置body最大显示高度

::: tip
此属性用于设定body区域的最大高度限制，超过设置高度显示滚动条。默认为'800px'，如果您有自定义body区域高度的需求，请手动设置。
:::

<ra-dialog title="自定义高度弹窗" size="small" :lock-scroll="false" v-model="dialogTwoShow" @close="dialogTwoShow=false" @ok="dialogTwoShow=false" :maxHeight="500" fullBody>
<img :src="imgSrc2" style="width: 100%;"/>
</ra-dialog>

<el-button @click="dialogTwoShow=true">打开弹窗</el-button>

::: code-group

```vue {4} [javascript]
<template>
  <ra-dialog
    v-model="dialogShow"
    :maxHeight="300"
    size="small"
    title="自定义高度弹窗"
    fullBody
    @close="dialogShow = false"
    @ok="dialogShow = false"
  >
    <img :src="imgSrc" style="width: 100%" />
  </ra-dialog>
  <el-button @click="dialogShow = true">打开弹窗</el-button>
</template>

<script setup>
import { ref } from "vue"

let dialogShow = ref(false)
let imgSrc = "https://images.pexels.com/photos/28712680/pexels-photo-28712680.jpeg"
</script>
```

:::

## 属性说明

::: tip
Dialog基于el-dialog组件开发，适用于el-dialog的基础属性可自动继承，属性链接 [el-dialog API](https://element-plus.org/zh-CN/component/dialog.html#api)
:::

Dialog属性:

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

Dialog插槽:

<el-table border :data="slotData" stripe>
  <el-table-column prop="name" label="插槽名"/>
  <el-table-column prop="desc" label="说明"/>
  <el-table-column prop="isRequired" label="是否必填" />
</el-table>

Dialog事件:

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
