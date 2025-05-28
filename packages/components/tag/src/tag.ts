import { ExtractPropTypes, PropType } from "vue"

export const tagProps = {
  type: {
    type: String as PropType<
      | "primary"
      | "primary_dark"
      | "success"
      | "info"
      | "info_purple"
      | "info_lackblue"
      | "warning"
      | "warning_dark"
      | "danger"
      | "danger_dark"
    >,
    default: "primary"
  },
  maxWidth: {
    type: [Number, String] as PropType<number | string>,
    default: "100%"
  },
  effect: {
    type: String as PropType<"dot" | "">,
    default: ""
  },
  cursor: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const

export type TagProps = ExtractPropTypes<typeof tagProps>
