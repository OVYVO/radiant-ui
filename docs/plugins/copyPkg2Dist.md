---
title: "copyPkg2Dist插件"
outline: deep
lastUpdated: true
---

# copyPkg2Dist插件

该插件用于辅助Electron打包时将package.json中的版本、项目名或者一些其他自定义信息抽离到项目打包产物目录中。

## package.json配置

> 该插件仅会响应`mode`为`electron`的打包模式，建议为Electron环境打包配置一条专属命令。

```json
{
  "scripts": {
    "build:electron": "vite build --mode electron"
  }
}
```

## vite.config.js配置

```javascript
import copyPkg2Dist from "@jg/jg-plugins/copyPkg2Dist"

export default defineConfig(({ mode }) => {
  return {
    plugins: [copyPkg2Dist(config)]
  }
})
```

## 自定义字段

> 插件接受一个`fields`配置字段，类型为Array。字段会自动将package.json中与该集合中key相匹配的值输出到打包产物对应的pkg_info.json中。如不配置该字段，默认将输出package.json中的`name`、`version`信息！

:::tip 🔊🔊🔊说明
请注意：为了避免一些无用信息的产出，插件默认排除package.json中的以下字段的输出

`["scripts", "private", "type", "husky", "lintStaged"]`
:::

```javascript
import copyPkg2Dist from "@jg/jg-plugins/copyPkg2Dist"

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      copyPkg2Dist({
        fields: ["version"]
      })
    ]
  }
})
```

## 自定义文件名

> 插件接受一个`fileName`配置字段，类型为String。用于自定义信息存储的文件名。目前强制文件名类型为json，请勿尝试其他文件类型，否则插件将无法工作。如不配置该字段，默认输出文件名为`package.json`

```javascript
import copyPkg2Dist from "@jg/jg-plugins/copyPkg2Dist"

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      copyPkg2Dist({
        fields: ["version"],
        fileName: "package.json"
      })
    ]
  }
})
```

## 自定义信息

> 插件接受一个`customFields`配置字段，类型为Object。用于插入自定义字段

:::tip 🔊🔊🔊说明
请注意：当自定义字段与package.json字段冲突时，自定义字段名优先级更高
:::

```javascript
import copyPkg2Dist from "@jg/jg-plugins/copyPkg2Dist"

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      copyPkg2Dist({
        fields: ["version"],
        fileName: "pkg_info.json",
        customFields: {
          buildTime: "2025-7-7 16:05:30"
        }
      })
    ]
  }
})
```
