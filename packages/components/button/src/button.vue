<template>
  <el-button v-bind="$attrs" v-if="!props.exportAll" type="primary" @click="handleClick()">
    <template #default>
      <img :src="props.actType == 'input' ? Input : Export" alt="" style="width: 1em; height: 1em; margin-right: 6px" />
      {{ props.actType == "input" ? `${props.suffix}导入` : `${props.suffix}导出` }}
    </template>
  </el-button>
  <el-dropdown v-bind="$attrs" v-else split-button type="primary" @click="handleClick('all')" style="margin-left: 12px">
    <img style="width: 1em; height: 1em" :src="Export" />
    &nbsp;导出全部
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleClick('current')">导出当前页</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import Input from "../../assets/images/import.png"
import Export from "../../assets/images/export.png"
import { buttonProps, buttonEmits } from "./button"
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus"

defineOptions({
  name: "RaActbtn"
})

const emits = defineEmits(buttonEmits)
const props = defineProps(buttonProps)

const handleClick = (type: string = "") => {
  emits("click", type)
}
</script>

<style lang="scss" scoped></style>
