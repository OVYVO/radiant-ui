import { withInstall } from "@radiant-ui/utils"
import _Empty from "./src/empty.vue"

const RaEmpty = withInstall(_Empty)
export default RaEmpty

export * from "./src/empty"

declare module "vue" {
  export interface GlobalComponents {
    RaEmpty: typeof RaEmpty
  }
}
