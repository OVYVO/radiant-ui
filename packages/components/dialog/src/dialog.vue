<template>
  <el-dialog
    v-bind="$attrs"
    v-model="dialogVisible"
    :fullscreen="isfullScreen"
    :width="sizeMap[props.size]"
    :show-close="false"
    :close-on-click-modal="false"
    :append-to-body="true"
    :destroy-on-close="true"
    :draggable="true"
    :align-center="true"
    :z-index="props.zIndex"
    @close="onCancle"
    class="ra-dialog"
  >
    <template #header="{ titleClass }">
      <div class="ra-dialog-header">
        <slot name="header" v-if="$slots.header"></slot>
        <div v-else :class="['ra-dialog-title', titleClass]">
          {{ $attrs["title"] || "This is a Dialog" }}
        </div>
        <div class="ra-dialog-header_right">
          <slot name="extra"></slot>
          <template v-if="props.fullBody">
            <el-button :icon="FullScreen" link @click="isfullScreen = !isfullScreen"></el-button>
          </template>
          <template v-if="props.showClose">
            <el-button :icon="Close" link @click="onCancle"></el-button>
          </template>
        </div>
      </div>
    </template>
    <el-scrollbar :max-height="isfullScreen ? fullScreenMaxHeight : props.maxHeight">
      <div class="ra-dialog-body" :style="{ minHeight: isfullScreen ? `${fullScreenMaxHeight}px` : '' }">
        <slot></slot>
      </div>
    </el-scrollbar>
    <template #footer v-if="props.footer">
      <slot name="footer" v-if="$slots.footer"></slot>
      <template v-else>
        <el-button @click="onCancle">{{ props.cancelText }}</el-button>
        <el-button type="primary" @click="onOk">{{ props.confirmText }}</el-button>
      </template>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from "vue"
import { ElDialog, ElButton, ElScrollbar } from "element-plus"
import { FullScreen, Close } from "@element-plus/icons-vue"
import { dialogProps } from "./dialog"
import { debounce } from "lodash-es"

defineOptions({
  name: "RaDialog"
})

const props = defineProps(dialogProps)
const emits = defineEmits(["ok", "close"])

const sizeMap = {
  small: 560,
  default: 640,
  large: 1200
}

let dialogVisible = defineModel<boolean>()
let isfullScreen = ref<boolean>(false)
let fullScreenMaxHeight = ref<number>(0)
const onCancle = () => {
  dialogVisible.value = false
  emits("close")
}
let emitOk = debounce(() => {
  emits("ok")
}, 0)
const onOk = () => {
  emitOk.cancel()
  emitOk.flush()
  emitOk = debounce(() => {
    emits("ok")
  }, props.debounceTime)
  emitOk()
}
watch(dialogVisible, () => {
  setTimeout(() => {
    isfullScreen.value = false
  }, 200)
})
watch(isfullScreen, val => {
  if (!val) return
  nextTick(() => {
    const { innerHeight } = window
    fullScreenMaxHeight.value = props.footer ? innerHeight - 117 : innerHeight - 51
  })
})
</script>
