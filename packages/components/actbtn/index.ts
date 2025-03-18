import { withInstall } from "@jg/jg-utils"
import _ActBtn from "./src/actbtn.vue"

const JgActbtn = withInstall(_ActBtn)
export default JgActbtn

declare module "vue" {
  export interface GlobalComponents {
    JgActbtn: typeof JgActbtn
  }
}
