import { ExtractPropTypes, PropType } from "vue"

export const tagProps = {
  color: {
    type: String as PropType<"default" | "green" | "yellow" | "orange" | "red" | "gray" | "blue" | "purple">,
    default: "default"
  },
  borderRadius: {
    type: [Number, String] as PropType<number | string>,
    default: 0
  },
  effect: {
    type: String as PropType<"dark" | "light" | "dot">,
    default: "light"
  },
  cursor: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const

export type TagProps = ExtractPropTypes<typeof tagProps>
