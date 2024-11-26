import Actbtn from "./actbtn/index"

declare module "vue" {
  export interface GlobalComponents {
    RaActbtn: typeof Actbtn
  }
}
