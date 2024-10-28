import type { TaskFunction } from "gulp"
import { series, dest, src } from "gulp"
import rename from "gulp-rename"

import { run } from "./utils/process"
import { cliPath, themeChalkPath, utilsPath, hooksPath, outPutDir } from "./utils/path"

const buildUtils = async () => {
  await run("pnpm build:utils", utilsPath)
}
const buildHooks = async () => {
  await run("pnpm build:hooks", hooksPath)
}
const buildEs = async () => {
  await run("pnpm build:es", cliPath)
}
const buildCjs = async () => {
  await run("pnpm build:cjs", cliPath)
}
const buildLib = async () => {
  await run("pnpm build:lib", cliPath)
}
const buildThemeChalk = async () => {
  await run("pnpm build:theme", themeChalkPath)
}
const copyPackage = () => {
  return src("./build-info.json")
    .pipe(
      rename(path => {
        path.basename = `package`
      })
    )
    .pipe(dest(outPutDir))
}
const copyLicense = async () => {
  return src("../../LICENSE").pipe(dest(outPutDir))
}

export const build: TaskFunction = series(
  buildUtils,
  buildHooks,
  buildThemeChalk,
  buildEs,
  buildCjs,
  buildLib,
  copyPackage,
  copyLicense
)

export default build
