<template>
  <div class="ra-title">
    <div class="ra-title-title">{{ props.title }}</div>
    <div class="ra-title-prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </div>
    <div :class="['ra-title-line', showLine ? 'ra-title-line_show' : 'ra-title-line_hidden']"></div>
    <div class="ra-title-suffix">
      <slot name="suffix" v-if="$slots.suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { titleProps } from "./title"
defineOptions({
  name: "RaTitle"
})

const props = defineProps(titleProps)
</script>
