<template>
  <span :class="className" :style="compStyle" @click="emits('click')">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { tagProps } from "./tag"

defineOptions({
  name: "RaTag"
})

const props = defineProps(tagProps)
const emits = defineEmits(["click"])

const className = computed(() => {
  return ["ra-tag", `ra-tag-color__${props.color}`, `ra-tag-effect__${props.effect}`]
})

const compStyle = computed(() => {
  return {
    borderRadius: (typeof props.borderRadius == "number" ? `${props.borderRadius}px` : props.borderRadius) as string,
    cursor: props.cursor ? "pointer" : "default"
  }
})
</script>
