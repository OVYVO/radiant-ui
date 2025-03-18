import { ExtractPropTypes, PropType } from "vue"

export const titleProps = {
  title: String as PropType<string>,
  showLine: { type: Boolean as PropType<boolean>, default: true }
} as const

export type TitleProps = ExtractPropTypes<typeof titleProps>
