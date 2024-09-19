---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Radiant-UI"
  text: "前端组件库"
  tagline: 适用于vue3桌面端应用
  image:
    src: /indexBac.png
    alt: Radiant-UI
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/start

features:
  - icon: 📦️
    title: 项目架构
    details: 项目整体使用Monorepo包管理模式，代码管理更清晰，打包部署更简单。
  - icon: 🔨
    title: 组件开发
    details: 关注组件的可扩展性，稳定性，实用性。拒绝为开发组件而开发组件。
  - icon: 📝
    title: 使用文档
    details: 使用vitePress搭建的组件文档，简单构建超级详细的使用教程
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: '/avator_boy1.png',
    name: 'RyanYan',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/OVYVO' }
    ]
  }
]
</script>

# 贡献者

::: tip
🎉🎉🎉欢迎加入我们，并期待您对此组件库做出贡献🎉🎉🎉
:::

<VPTeamMembers size="small" :members="members" />
