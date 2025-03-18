import fs from "fs"
import { execSync } from "child_process"
import chalk from "chalk"

try {
  // 检查 package.json 是否存在
  if (!fs.existsSync("package.json")) {
    console.error(chalk.red("❌ 错误：package.json 文件不存在"))
    process.exit(1)
  }

  // 读取并解析 package.json
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))

  // 检查版本号是否存在
  if (!packageJson.version) {
    console.error(chalk.red("❌ 错误：package.json 中未找到 version 字段"))
    process.exit(1)
  }

  // 获取当前分支名
  let branchName
  try {
    branchName = execSync("git rev-parse --abbrev-ref HEAD").toString().trim()
  } catch (error) {
    console.error(chalk.red("❌ 错误：无法获取当前分支名，请确保在 Git 仓库中"))
    console.error(chalk.red(`错误详情：${error.message}`))
    process.exit(1)
  }

  // 检查分支名是否包含版本号
  if (!["main", "master"].includes(branchName) && !branchName.includes(packageJson.version)) {
    console.error(chalk.red("\n❌ 版本检查失败！"))
    console.error(chalk.yellow("\n当前分支名：") + chalk.white(branchName))
    console.error(chalk.yellow("package.json 版本：") + chalk.white(packageJson.version))
    console.error(chalk.red("\n请确保分支名包含正确的版本号"))
    process.exit(1)
  }

  console.log(chalk.green("\n✅ 版本检查通过！"))
  console.log(chalk.blue(`当前分支：${branchName}`))
  console.log(chalk.blue(`版本号：${packageJson.version}\n`))
} catch (error) {
  console.error(chalk.red("❌ 脚本执行出错："))
  console.error(chalk.red(error.message))
  process.exit(1)
}
