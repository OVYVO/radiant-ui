import { defineConfig } from "vitepress"
import { sidebar } from "./sideBar"
import { nav } from "./nav"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "巨耕前端组件库",
  description: "巨耕前端组件库",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: "JG-UI",
    logo: "/logo.png",
    nav,
    sidebar,
    outline: {
      label: "页面导航"
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Rayan Yan"
    },
    socialLinks: [{ icon: "github", link: "http://192.168.100.91:82/jugeng/web/common/jg-ui" }]
  }
})
