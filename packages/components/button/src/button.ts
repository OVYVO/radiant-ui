import type { ExtractPropTypes, PropType } from "vue"

export const buttonProps = {
  actType: {
    type: String as PropType<"input" | "export">,
    default: "input",
    validator: (value: string) => {
      return ["input", "export"].includes(value)
    }
  },
  suffix: {
    type: String as PropType<String>,
    default: ""
  },
  exportAll: {
    type: Boolean as PropType<Boolean>
  }
} as const

export const buttonEmits = {
  click: (type?: string) => {}
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
