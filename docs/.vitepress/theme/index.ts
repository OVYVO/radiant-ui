import DefaultTheme from "vitepress/theme"
import ElementPlus from "element-plus"

import "./index.css"
import "@css/dist/index.css"
import "element-plus/dist/index.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  }
}
