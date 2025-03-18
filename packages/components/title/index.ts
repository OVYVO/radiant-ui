import { withInstall } from "@ra/ra-utils"
import _Title from "./src/title.vue"

const RaTitle = withInstall(_Title)
export default RaTitle

export * from "./src/title"

declare module "vue" {
  export interface GlobalComponents {
    RaTitle: typeof RaTitle
  }
}
