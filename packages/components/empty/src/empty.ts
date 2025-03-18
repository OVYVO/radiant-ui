import { ExtractPropTypes, PropType } from "vue"

export const emptyProps = {
  type: {
    type: String as PropType<
      "noContent" | "noData" | "noNetwork" | "noResult" | "noMessage" | "noFixed" | "404" | "500"
    >,
    default: "noData"
  },
  title: String as PropType<string>,
  describe: String as PropType<string>,
  hideText: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
