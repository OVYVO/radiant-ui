---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Radiant-Frontend"
  text: "前端物料库"
  tagline: 基于Vue3、Typescript开发的共享物料
  image:
    src: /indexBac.png
    alt: Radiant-Frontend
  actions:
    - theme: brand
      text: 组件
      link: /comp/guide/start
    - theme: brand
      text: 方法
      link: /utils/guide/start
    - theme: brand
      text: Hooks
      link: /hooks/guide/start

features:
  - icon: 📦️
    title: 项目架构
    details: 项目整体使用Monorepo包管理模式，代码管理更清晰，打包部署更简单。
  - icon: 🔨
    title: 物料开发
    details: 关注物料可扩展性，稳定性，实用性。拒绝为开发物料而开发物料。
  - icon: 📝
    title: 使用文档
    details: 使用vitePress搭建的组件文档，简单构建超级详细的使用教程
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import AvatorBoy1 from '/avator_boy1.png'
import AvatorGirl1 from '/avator_girl1.png'
import AvatorBoy2 from '/avator_boy2.png'
const members = [
  {
    avatar: AvatorBoy1,
    name: 'RyanYan',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/OVYVO' }
    ]
  },
  {
    avatar: AvatorGirl1,
    name: '...',
    title: 'Developer',
    links: [
      { icon: 'github', link: '' }
    ]
  },
  {
    avatar: AvatorBoy2,
    name: '...',
    title: 'Developer',
    links: [
      { icon: 'github', link: '' }
    ]
  }
]
</script>

## 贡献者

::: tip
🎉🎉🎉欢迎加入我们，并期待您对此组件库做出贡献🎉🎉🎉
:::

<VPTeamMembers size="small" :members="members" />
