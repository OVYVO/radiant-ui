import RaActbtn from "./actbtn/index"
import RaTag from "./tag/index"
import RaOvertip from "./overtip/index"
import RaDialog from "./dialog/index"
import RaEmpty from "./empty/index"
import RaTitle from "./title/index"
import RaUpload from "./upload/index"

declare module "vue" {
  export interface GlobalComponents {
    RaActbtn: typeof RaActbtn
    RaTag: typeof RaTag
    RaOvertip: typeof RaOvertip
    RaDialog: typeof RaDialog
    RaEmpty: typeof RaEmpty
    RaTitle: typeof RaTitle
    RaUpload: typeof RaUpload
  }
}
