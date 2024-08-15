//https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js
process.env.GITMOJI_PATH = ".gitmoji.json"

module.exports = {
  types: [
    { value: ":sparkles: feat", name: "✨ feat: 新功能" },
    { value: ":bug: fix", name: "🐛 fix: 修复Bug" },
    { value: ":wrench: config", name: "🔧 config: 配置修改" },
    { value: ":lipstick: style", name: "💄 style: 代码风格" },
    { value: ":zap: perf", name: "⚡️ perf: 代码优化" },
    { value: ":memo: docs", name: "📝 docs: 文档变更" },
    { value: ":rocket: chore", name: "🚀 chore: 变更构建流程或辅助工具" },
    { value: ":package: build", name: "📦️ build: 变更项目构建或外部依赖" }
  ],
  messages: {
    type: "请选择提交类型(必填):",
    subject: "请简要描述提交(必填):",
    confirmCommit: "确定提交此说明吗？"
  },
  skipQuestions: ["scope", "body", "breaking", "footer"]
}
