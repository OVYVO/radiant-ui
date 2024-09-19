import { defineConfig } from "vitepress"
import { sidebar } from "./sideBar"
import { nav } from "./nav"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RadiantUI",
  description: "前端组件库",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: "radiant-ui",
    logo: "/logo.png",
    nav,
    sidebar,
    outline: {
      label: "页面导航"
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Ryan Yan"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/OVYVO/radiant-ui" }]
  }
})
