/* eslint-disable @typescript-eslint/no-empty-object-type */

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "*.vue" {
  import type { ComponentOptions } from "vue"
  const componentOptions: ComponentOptions
  export default componentOptions
}
