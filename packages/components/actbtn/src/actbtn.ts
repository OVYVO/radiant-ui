import type { ExtractPropTypes, PropType } from "vue"

export const buttonProps = {
  actType: {
    type: String as PropType<"input" | "export">,
    default: "input",
    validator: (value: string) => {
      return ["input", "export"].includes(value)
    }
  },
  prefix: {
    type: String as PropType<string>,
    default: ""
  },
  suffix: {
    type: String as PropType<string>,
    default: ""
  },
  exportAll: {
    type: Boolean as PropType<boolean>
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
