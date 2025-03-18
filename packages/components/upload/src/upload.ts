import { ExtractPropTypes, PropType } from "vue"

export const uploadProps = {
  styleType: { type: String as PropType<"drag" | "btn">, default: "drag" },
  size: { type: Number as PropType<number>, default: 0 },
  accepts: { type: Array as PropType<string[]>, default: [], required: true },
  limit: { type: Number as PropType<number>, default: 1 },
  nameLen: { type: Number as PropType<number>, default: 50 },
  needTemplate: { type: Boolean as PropType<boolean>, default: true }
} as const

export type UploadProps = ExtractPropTypes<typeof uploadProps>
