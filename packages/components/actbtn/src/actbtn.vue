<template>
  <el-button v-bind="$attrs" v-if="!props.exportAll" type="primary" @click="emits('click', '')">
    <template #default>
      <img :src="props.actType == 'input' ? Input : Export" alt="" style="width: 1em; height: 1em; margin-right: 4px" />
      {{ props.actType == "input" ? `${props.prefix}导入${props.suffix}` : `${props.prefix}导出${props.suffix}` }}
    </template>
  </el-button>
  <el-dropdown placement="bottom-end" v-bind="$attrs" v-else split-button type="primary" @click="emits('click', 'all')">
    <img style="width: 1em; height: 1em; margin-right: 4px" :src="Export" />
    导出全部
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="emits('click', 'current')">导出当前页</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import Input from "../../assets/images/import.png"
import Export from "../../assets/images/export.png"
import { buttonProps } from "./actbtn"
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus"

defineOptions({
  name: "RaActbtn"
})

const props = defineProps(buttonProps)
const emits = defineEmits<{
  (e: "click", type: String): void
}>()
</script>
