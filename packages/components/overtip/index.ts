import { withInstall } from "@radiant-ui/utils"
import _Overtip from "./src/overtip.vue"

const RaOvertip = withInstall(_Overtip)
export default RaOvertip

export * from "./src/overtip"

declare module "vue" {
  export interface GlobalComponents {
    RaOvertip: typeof RaOvertip
  }
}
