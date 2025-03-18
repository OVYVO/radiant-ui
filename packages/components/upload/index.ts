import { withInstall } from "@radiant-ui/utils"
import _Upload from "./src/upload.vue"

const RaUpload = withInstall(_Upload)
export default RaUpload

export * from "./src/upload"

declare module "vue" {
  export interface GlobalComponents {
    RaUpload: typeof RaUpload
  }
}
