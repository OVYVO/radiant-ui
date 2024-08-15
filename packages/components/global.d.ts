import Button from "./button/index"

declare module "vue" {
  export interface GlobalComponents {
    RaButton: typeof Button
  }
}
