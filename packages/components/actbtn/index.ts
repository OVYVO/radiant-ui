import { withInstall } from "@radiant-ui/utils"
import _Button from "./src/actbtn.vue"

const Button = withInstall(_Button)
export default Button

export * from "./src/actbtn"

declare module "vue" {
  export interface GlobalComponents {
    RaButton: typeof Button
  }
}
