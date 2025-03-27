---
title: "useList"
outline: deep
lastUpdated: true
---

# ⚗️ useList

useList hook主要为列表页面提供：API请求、参数绑定、重置、查询及数据处理能力，兼容分页及非分页两种通用后台数据返回形式。

## 使用方式

:::tip 🔊🔊🔊说明
以下代码示例为基础参考示例，各项目组成员请依照个人风格自行组织template代码内容。
:::

### 1.分页模式(常用模式)

```js
// @/api/demo.js
import request from "@/service/index.js"

export function getDemoList(params = {}) {
  return request({
    url: "demo/list",
    method: "post",
    params
  })
}
```

```vue
<template>
  <div class="demo-list" v-loading="loading">
    <!--查询表单-->
    <el-form :inline="true">
      <el-form-item>
        <el-input v-model="queryForm.searchText" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <el-button @click="resetSearch">重置</el-button>
        <el-button @click="searchList">查询</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <vxe-table :data="tableData">
      <vxe-column type="seq" title="序号" />
      <vxe-column field="a" title="字段a" />
      <vxe-column field="b" title="字段b" />
    </vxe-table>
    <!--分页-->
    <el-pagination
      v-model:current-page="queryForm.pageNum"
      v-model:page-size="queryForm.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum"
      @size-change="getList"
      @current-change="getList"
    />
  </div>
</template>

<script setup>
import { useList } from "@hooks/useList.js"
import { getDemoList } from "@/api/demo.js"

const { tableData, totalNum, queryForm, loading, resetSearch, searchList, getList } = useList(
  getDemoList,
  {
    searchText: undefined
    pageNum: 1,
    pageSize: 10
  }
)
</script>
```

### 2.非分页模式

> 非分页模式下仅需要传递`pagination: false`即可

```vue
<template>...</template>

<script setup>
import { useList } from "@hooks/useList.js"
import { getDemoList } from "@/api/demo.js"

const { tableData, queryForm } = useList(
  getDemoList,
  { searchText: undefined },
  { pagination: false } //[!code highlight]
)
</script>
```

### 3.参数过滤

> 在一些特殊场景下需要保证重置操作时某参数固定不变，此时添加过滤项则是非常有效的手段。使用也非常简单，只需添加`exclude`配置即可。

```vue
<template>...</template>

<script setup>
import { useList } from "@hooks/useList.js"
import { getDemoList } from "@/api/demo.js"

const { tableData, queryForm } = useList(
  getDemoList,
  { queryType: 1 }, //[!code highlight]
  { exclude: ["queryType"] } //[!code highlight]
)
</script>
```

### 4.数据处理

> 有些场景需要对请求数据做一些处理，例如整合、过滤等，此时可以选择传入回调函数来达成这一目的。该函数接受一个list集合作为参数，不会对其他功能产生破坏性影响。

```vue {10-19}
<template>...</template>

<script setup>
import { useList } from "@hooks/useList.js"
import { getDemoList } from "@/api/demo.js"

const { tableData, queryForm } = useList(
  getDemoList,
  { pageNum: 1, pageSize: 12 },
  {
    listHandler: records => {
      return records.map(item => {
        return {
          id: item.id,
          name: item.name
        }
      })
    }
  }
)
</script>
```

### 5.请求回调

> 为支持列表请求后续事件处理，提供onSuccess、onError两个回调函数以供使用。

```vue {10-17}
<template>...</template>

<script setup>
import { useList } from "@hooks/useList.js"
import { getDemoList } from "@/api/demo.js"

const { tableData, queryForm } = useList(
  getDemoList,
  { pageNum: 1, pageSize: 12 },
  {
    onSuccess: () => {
      //请求成功的后续逻辑
    },
    onError: () => {
      //请求失败的后续逻辑
    }
  }
)
</script>
```

<script setup>
import JgActbtn from '@components/actbtn/src/actbtn.vue'
import { InfoFilled } from '@element-plus/icons-vue' 
const propsData = [
  {
    params: "apiRequest",
    desc:"请求方法",
    paramType:"Function",
    isRequired:"true",
    initValue:"-"
  },
  {
    params: "query",
    desc:"请求参数",
    paramType:"Object",
    isRequired:"false",
    initValue:"{}"
  },
  {
    params: "options",
    desc:"请求配置",
    paramType:"Object",
    isRequired:"false",
    initValue:"{}"
  },
]

const optionData = [
  {
    params: "pagination",
    desc:"分页模式",
    paramType:"Boolean",
    isRequired:"false",
    initValue:"true"
  },
  {
    params: "exclude",
    desc:"参数过滤",
    paramType:"Array<string>",
    isRequired:"false",
    initValue:"[]"
  },
  {
    params: "listHandler",
    desc:"数据处理",
    paramType:"Function",
    isRequired:"false",
    initValue:"null"
  },
  {
    params: "onSuccess",
    desc:"请求成功回调",
    paramType:"Function",
    isRequired:"false",
    initValue:"null"
  },
  {
    params: "onError",
    desc:"请求错误回调",
    paramType:"Function",
    isRequired:"false",
    initValue:"null"
  },
]

const responseData = [
  {
    params: "tableData",
    desc:"列表数据",
    paramType:"Ref<T[]>",
  },
  {
    params: "totalNum",
    desc:"数据总条数",
    paramType:"Ref<number>",
  },
  {
    params: "loading",
    desc:"数据加载状态",
    paramType:"Ref<boolean>",
  },
   {
    params: "queryForm",
    desc:"查询参数",
    paramType:"Ref<Record<string, any>>",
  },
   {
    params: "searchList",
    desc:"查询方法",
    paramType:"Function",
  },
  {
    params: "resetSearch",
    desc:"重置方法",
    paramType:"Function",
  },
  {
    params: "getList",
    desc:"数据请求",
    paramType:"Function",
  }
]

</script>

## 参数说明

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

:::details options参数详情
<el-table border :data="optionData" stripe>
<el-table-column prop="params" label="参数"/>
<el-table-column prop="desc" label="说明"/>
<el-table-column prop="paramType" label="类型" />
<el-table-column prop="isRequired" label="是否必填" />
<el-table-column prop="initValue" label="默认值" />
</el-table>
:::

## Expose变量说明

> 🔊🔊🔊以下变量或方法均可按需解构

<el-table border :data="responseData" stripe>
<el-table-column prop="params" label="返回值"/>
<el-table-column prop="desc" label="描述"/>
<el-table-column prop="paramType" label="类型"/>
</el-table>
