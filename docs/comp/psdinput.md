---
title: "tag"
outline: deep
lastUpdated: true
---

# 密码输入框

密码输入框，控制密码可见。

## 基础用法

<script setup>
import {ref} from 'vue'
import { InfoFilled } from '@element-plus/icons-vue' 
import RaPsdinput from '@components/psdinput/src/psdinput.vue'
const propsData = [
  {
    params: "placeholder",
    desc: "文本提示",
    paramType: "String",
    paramInf: "",
    isRequired:"false",
    initValue:"'请输入'"
  }
]

let psd = ref('')

</script>

<ra-psdinput v-model="psd" style="width: 200px;"></ra-psdinput>

::: code-group

```vue [javascript]
<ra-psdinput v-model="psd"></ra-psdinput>
```

:::

## 属性说明

PsdInput属性:

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
