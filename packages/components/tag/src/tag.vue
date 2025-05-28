<template>
  <el-tooltip :content="getSlotText()" :disabled="tooltipIsShow" placement="top">
    <el-tag
      v-if="$slots.default && getSlotText()"
      :class="['ra-tag', props.effect == 'dot' ? 'dot-effect' : '']"
      :style="compStyle"
      v-bind="$attrs"
      @mouseenter="tooltipIsDisHandler($event)"
    >
      <span class="dot" v-if="props.effect == 'dot'"></span>
      <slot></slot>
    </el-tag>
    <span v-else @mouseenter="() => (tooltipIsShow = true)">-</span>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { ref, computed, useSlots } from "vue"
import { tagProps } from "./tag"
import { ElTag, ElTooltip } from "element-plus"

defineOptions({
  name: "RaTag"
})

const props = defineProps(tagProps)

const extraType = {
  primary: {
    color: "#2B80B9",
    backgroundColor: "rgba(43,128,185,0.1)",
    borderColor: "rgba(43,128,185,0.15)"
  },
  primary_dark: {
    color: "#5C9FEE ",
    backgroundColor: "rgba(92,159,238,0.1)",
    borderColor: "rgba(92,159,238,0.15)"
  },
  success: {
    color: "#60C888",
    backgroundColor: "rgba(96,200,136,0.1)",
    borderColor: "rgba(96,200,136,0.15)"
  },
  warning: {
    color: "#FF9900",
    backgroundColor: "rgba(255,153,0,0.1)",
    borderColor: "rgba(255,153,0,0.15)"
  },
  warning_dark: {
    color: "#D4B400",
    backgroundColor: "rgba(226,201,60,0.1)",
    borderColor: "rgba(226,201,60,0.2)"
  },
  danger: {
    color: "#F56C6C",
    backgroundColor: "rgba(245,108,108,0.1)",
    borderColor: "rgba(245,108,108,0.15)"
  },
  danger_dark: {
    color: "#FF66BF",
    backgroundColor: "rgba(255,102,191,0.1)",
    borderColor: "rgba(255,102,191,0.15)"
  },
  info: {
    color: "#999999",
    backgroundColor: "rgba(153,153,153,0.1)",
    borderColor: "rgba(153,153,153,0.15)"
  },
  info_purple: {
    color: "#9C5CEE",
    backgroundColor: "rgba(156,92,238,0.1)",
    borderColor: "rgba(156,92,238,0.15)"
  },
  info_lackblue: {
    color: "#48B5D3",
    backgroundColor: "rgba(72,181,211,0.1)",
    borderColor: "rgba(72,181,211,0.15)"
  }
}

const compStyle = computed(() => {
  return {
    color: extraType[props.type].color,
    backgroundColor: extraType[props.type].backgroundColor,
    borderColor: extraType[props.type].borderColor,
    cursor: props.cursor ? "pointer" : "",
    maxWidth: typeof props.maxWidth == "string" ? props.maxWidth : `${props.maxWidth}px`,
    "--mainColor": extraType[props.type].color
  }
})

const slots = useSlots()
const extractTextFromVNode = (vnode: any) => {
  if (typeof vnode.children === "string") {
    return vnode.children
  } else {
    return vnode.children.default().map(extractTextFromVNode).join("")
  }
}
const getSlotText = () => {
  if (slots.default) {
    return slots.default().map(extractTextFromVNode).join("")
  } else {
    return ""
  }
}

let tooltipIsShow = ref(false)
const tooltipIsDisHandler = (ev: any) => {
  //需要将el-tag的padding值一起计算 padding: 0 9px
  if (ev.target.offsetWidth < ev.target.children[0].scrollWidth + 20) {
    tooltipIsShow.value = false
  } else {
    tooltipIsShow.value = true
  }
}
</script>
