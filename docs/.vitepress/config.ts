import { defineConfig } from "vitepress"
import { sidebar } from "./sideBar"
import { nav } from "./nav"
import path from "path"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/radiant-ui/",
  title: "前端组件库",
  description: "前端组件库",
  head: [["link", { rel: "icon", href: "/radiant-ui/logo.png" }]],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: "Radiant-UI",
    logo: "logo.png",
    nav,
    sidebar,
    outline: {
      label: "页面导航"
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present RyanYan"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/OVYVO/radiant-ui" }]
  },
  vite: {
    resolve: {
      alias: {
        "@components": path.join(__dirname, "../../packages/components"),
        "@css": path.join(__dirname, "../../packages/theme-chalk")
      }
    }
  },
  markdown: {
    lineNumbers: false, //显示代码行号
    image: {
      lazyLoading: true //图片懒加载
    }
  }
})
