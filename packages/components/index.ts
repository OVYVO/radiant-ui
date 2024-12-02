import type { App } from "vue"
import RaActbtn from "./actbtn"

const components = [RaActbtn]

export { RaActbtn }

export default {
  install: (app: App) => {
    components.forEach(item => {
      if (typeof item.install === "function") item.install(app)
    })
  }
}
