import { ExtractPropTypes, PropType } from "vue"

export const dialogProps = {
  size: { type: String as PropType<"default" | "small" | "large">, default: "default" },
  footer: { type: Boolean as PropType<boolean>, default: true },
  showClose: { type: Boolean as PropType<boolean>, default: true },
  fullBody: { type: Boolean as PropType<boolean>, default: false },
  confirmText: { type: String as PropType<string>, default: "提交" },
  cancelText: { type: String as PropType<string>, default: "取消" },
  maxHeight: { type: Number as PropType<number>, default: 800 },
  zIndex: { type: Number as PropType<number>, default: 100 },
  debounceTime: { type: Number as PropType<number>, default: 0 }
} as const

export type DialogProps = ExtractPropTypes<typeof dialogProps>
