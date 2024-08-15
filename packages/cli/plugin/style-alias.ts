// 导入包的名称和前缀常量
export const PKG_NAME = "radiant-ui"
export const PKG_PREFIX = "@radiant-ui"

import type { Plugin } from "rollup"
export const styleAliasPlugin = (): Plugin => {
  // 定义主题文件夹的名称
  const themeChalk = "theme-chalk"
  //@radiant-ui/theme-chalk
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}` as const
  //radiant-ui/theme-chalk
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const

  return {
    name: "style-alias-plugin",

    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk).replaceAll(".scss", ".css"),
        external: "absolute"
      }
    }
  }
}
