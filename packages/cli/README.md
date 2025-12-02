# Radiant UI CLI

CLI 工具用于构建和打包 Radiant UI 组件库。

## 自动导入支持

为了支持按需引入组件，我们提供了与 `unplugin-auto-import` 和 `unplugin-vue-components` 集成的解析器。

### 安装依赖

首先，确保你已经安装了必要的依赖：

```bash
npm install unplugin-vue-components unplugin-auto-import -D
```

### Vite 配置

在你的 `vite.config.ts` 文件中添加以下配置：

```ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { resolve } from "@radiant-ui/cli/plugin"

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [resolve()]
    }),
    Components({
      resolvers: [
        resolve({
          importStyle: "css" // 或者 'scss' 如果你想使用 SCSS 样式
        })
      ]
    })
  ]
})
```

### Webpack 配置

如果你使用 Webpack，可以这样配置：

```js
import AutoImport from "unplugin-auto-import/webpack"
import Components from "unplugin-vue-components/webpack"
import { resolve } from "@radiant-ui/cli/plugin"

export default {
  plugins: [
    AutoImport({
      resolvers: [resolve()]
    }),
    Components({
      resolvers: [
        resolve({
          importStyle: "css"
        })
      ]
    })
  ]
}
```

### 配置选项

`resolve` 函数接受以下选项：

- `importStyle`: 是否自动导入样式文件
  - `true`: 自动导入 CSS 样式 (默认)
  - `'css'`: 自动导入 CSS 样式
  - `'scss'`: 自动导入 SCSS 样式
  - `false`: 不自动导入样式
- `ssr`: 是否为服务端渲染使用 commonjs 版本
- `exclude`: 排除不需要自动导入的组件的正则表达式

示例：

```ts
Components({
  resolvers: [
    resolve({
      importStyle: "scss",
      ssr: false,
      exclude: /^(MyExclude)/
    })
  ]
})
```

通过以上配置，你可以享受自动导入组件的功能，而无需手动导入组件和样式文件。
