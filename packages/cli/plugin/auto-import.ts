// 导入包的名称和前缀常量
import { PKG_NAME, PKG_PREFIX } from "./style-alias"
import { readdirSync } from "fs"
import path from "path"
import { componentsPath } from "../utils/path"

// 兼容性处理：如果 unplugin-vue-components 不存在，则定义 ComponentResolver 类型
interface ComponentResolver {
  type: "component" | "directive"
  resolve: (
    name: string
  ) =>
    | Promise<{ name: string; from: string; sideEffects?: string } | undefined>
    | { name: string; from: string; sideEffects?: string }
    | undefined
}

export interface RadiantUIResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | "css" | "scss"

  /**
   * use commonjs lib & source css or scss for ssr
   */
  ssr?: boolean

  /**
   * exclude components that do not require automatic import
   */
  exclude?: RegExp
}

// 获取所有组件名称列表
function getComponentNames(): string[] {
  const files = readdirSync(componentsPath)
  return files.filter(file => {
    const isDir = file.charAt(0).toUpperCase() === file.charAt(0) && file !== "index.ts"
    return isDir
  })
}

/**
 * Resolver for unplugin-auto-import and unplugin-vue-components
 */
export function RadiantUIResolver(options: RadiantUIResolverOptions = {}): {
  type: "component"
  resolve: (name: string) => any
} {
  const { importStyle = "css", ssr = false, exclude } = options

  return {
    type: "component",
    resolve: (name: string) => {
      if (exclude && name.match(exclude)) return

      const componentNames = getComponentNames()

      if (componentNames.includes(name)) {
        const partialName = name.slice(2)
        const libPath = ssr ? "lib" : "es"

        let finalName = partialName
        // 处理特殊命名规则
        if (partialName.toLowerCase() !== partialName) {
          finalName = partialName.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`).substring(1)
        }

        return {
          name: name,
          from: `${PKG_NAME}/${libPath}/${finalName}`,
          sideEffects: importStyle
            ? `${PKG_NAME}/theme-chalk/${finalName}.${importStyle === "scss" ? "scss" : "css"}`
            : undefined
        }
      }
    }
  }
}

/**
 * Return the resolve function for unplugin-auto-import
 *
 * @param options - Resolver options
 * @returns ComponentResolver for unplugin-auto-import
 */
export function resolve(options: RadiantUIResolverOptions = {}) {
  return RadiantUIResolver(options)
}
