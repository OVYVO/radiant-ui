<template>
  <i :class="bem.b()" :style="computedStyle">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNameSpace } from "@radiant/utils/bem"
import { iconProps } from "./icon"
import { computed } from "vue"
defineOptions({
  name: "ra-icon"
})

const bem = createNameSpace("icon")

const props = defineProps(iconProps)

const computedStyle = computed(() => {
  if (!props.color && !props.size) return {}
  return {
    color: props.color ? props.color : "",
    fontSize: props.size ? `${props.size}px` : ""
  }
})
</script>
