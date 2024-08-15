import type { ExtractPropTypes, PropType } from "vue"

export const buttonProps = {
  size: [Number, String] as PropType<number | string>
} as const

export type buttonPropr = ExtractPropTypes<typeof buttonProps>
