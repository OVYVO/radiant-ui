const guideBarList = [
  {
    text: "帮助",
    items: [
      { text: "快速开始", link: "/guide/start" },
      { text: "开发指南", link: "/guide/develop" }
    ]
  }
]

const compBarList = [
  {
    text: "基础组件",
    items: [{ text: "Actbtn按钮", link: "/comp/actbtn" }]
  }
  // {
  //   text: "页面组件",
  //   items: []
  // }
]

export const sidebar = {
  "/guide/": guideBarList,
  "/comp/": compBarList
}
