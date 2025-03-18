import { withInstall } from "@ra/ra-utils"
import _Dialog from "./src/dialog.vue"

const RaDialog = withInstall(_Dialog)
export default RaDialog

export * from "./src/dialog"

declare module "vue" {
  export interface GlobalComponents {
    RaDialog: typeof RaDialog
  }
}
