import { ExtractPropTypes, PropType } from "vue"

export const psdinputProps = {
  placeholder: {
    type: String as PropType<string>,
    default: "请输入"
  }
} as const

export type PsdinputPropr = ExtractPropTypes<typeof psdinputProps>
