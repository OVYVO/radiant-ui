import { withInstall } from "@radiant-ui/utils"
import _Psdinput from "./src/psdinput.vue"

const RaPsdinput = withInstall(_Psdinput)
export default RaPsdinput

export * from "./src/psdinput"

declare module "vue" {
  export interface GlobalComponents {
    RaPsdinput: typeof RaPsdinput
  }
}
