import _Icon from "./src/icon.vue"
import { withInstall } from "@radiant/utils/widthInstall"

const Icon = withInstall(_Icon)

export default Icon

export * from "./src/icon"

declare module "vue" {
  export interface GlobalComponents {
    RaIcon: typeof Icon
  }
}
