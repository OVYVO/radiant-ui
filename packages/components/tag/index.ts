import { withInstall } from "@ra/ra-utils"
import _Tag from "./src/tag.vue"

const RaTag = withInstall(_Tag)
export default RaTag

export * from "./src/tag"

declare module "vue" {
  export interface GlobalComponents {
    RaTag: typeof RaTag
  }
}
