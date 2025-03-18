<template>
  <el-tooltip :content="props.content" :disabled="tooltipIsShow" popper-class="ra-overtip" placement="top">
    <div
      :class="['ellipsis-content', ...customClass]"
      :style="compStyle"
      @click="emits('click')"
      @mouseenter="tooltipIsDisHandler($event)"
    >
      {{ props.content }}
    </div>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import { overtipProps } from "./overtip"
import { ElTooltip } from "element-plus"
defineOptions({
  name: "RaOvertip"
})

const props = defineProps(overtipProps)
const emits = defineEmits(["click"])
const compStyle = computed<any>(() => {
  return {
    "-webkit-line-clamp": props.line,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box"
  }
})

let tooltipIsShow = ref<boolean>(false)
const tooltipIsDisHandler = (e: any) => {
  if (props.showTip) {
    if (e.target.clientWidth < e.target.scrollWidth || e.target.clientHeight < e.target.scrollHeight) {
      tooltipIsShow.value = false
    } else {
      tooltipIsShow.value = true
    }
  } else {
    tooltipIsShow.value = true
  }
}
</script>
