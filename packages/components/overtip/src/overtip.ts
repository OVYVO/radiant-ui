import { ExtractPropTypes, PropType } from "vue"

export const overtipProps = {
  content: {
    type: String as PropType<string>,
    default: ""
  },
  customClass: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  line: {
    type: Number as PropType<number>,
    default: 1
  },
  showTip: {
    type: Boolean as PropType<boolean>,
    default: true
  }
} as const

export type OvertipProps = ExtractPropTypes<typeof overtipProps>
