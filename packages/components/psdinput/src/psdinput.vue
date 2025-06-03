<template>
  <el-input class="ra-psdinput" :type="showText ? 'text' : 'password'" v-model="model" :placeholder="props.placeholder">
    <template #suffix>
      <span @click="showText = !showText">
        <el-icon v-if="showText"><View /></el-icon>
        <el-icon v-else><Hide /></el-icon>
      </span>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { View, Hide } from "@element-plus/icons-vue"
import { psdinputProps } from "./psdinput"

const props = defineProps(psdinputProps)

defineOptions({
  name: "RaPsdinput"
})

let model = defineModel()
let showText = ref(false)
</script>
