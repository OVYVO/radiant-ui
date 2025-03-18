import type { App } from "vue"
import RaActbtn from "./actbtn"
import RaTag from "./tag"
import RaOvertip from "./overtip"
import RaDialog from "./dialog"
import RaEmpty from "./empty"
import RaTitle from "./title"
import RaUpload from "./upload"

const compList = [RaActbtn, RaTag, RaOvertip, RaDialog, RaEmpty, RaTitle, RaUpload]

export { RaActbtn, RaTag, RaOvertip, RaDialog, RaEmpty, RaTitle, RaUpload }

export default {
  install: (app: App) => {
    compList.forEach((item: any) => {
      item.install(app)
    })
  }
}
