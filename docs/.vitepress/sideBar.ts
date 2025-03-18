const compBarList = [
  {
    text: "帮助",
    items: [
      { text: "快速开始", link: "/comp/guide/start" },
      { text: "开发指南", link: "/comp/guide/develop" },
      { text: "更新记录", link: "/comp/guide/log" }
    ]
  },
  {
    text: "基础组件",
    items: [
      { text: "Actbtn按钮", link: "/comp/actbtn" },
      { text: "Tag标签", link: "/comp/tag" },
      { text: "Overtip文本", link: "/comp/overtip" },
      { text: "Dialog弹窗", link: "/comp/dialog" },
      { text: "Empty空状态", link: "/comp/empty" },
      { text: "Title页头", link: "/comp/title" },
      { text: "Upload上传", link: "/comp/upload" }
    ]
  },
  {
    text: "高阶组件",
    items: [{ text: "ScrollSelect滚动加载", link: "/comp/scrollSelect" }]
  }
]

const utilsBarList = [
  {
    text: "帮助",
    items: [
      { text: "安装教程", link: "/utils/guide/start" },
      { text: "更新记录", link: "/utils/guide/log" }
    ]
  },
  {
    text: "基础方法",
    items: [{ text: "函数总览", link: "/utils/overview" }]
  },
  {
    text: "高阶方法",
    items: [{ text: "公共请求", link: "/utils/service" }]
  }
]

export const sidebar = {
  "/comp/": compBarList,
  "/utils/": utilsBarList
}
