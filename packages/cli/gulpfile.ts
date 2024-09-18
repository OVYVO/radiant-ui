import type { TaskFunction } from "gulp"
import { parallel, series, dest, src } from "gulp"
import rename from "gulp-rename"

import { run } from "./utils/process"
import { projRoot, cliPath, themeChalkPath, hooksPath, outPutDir } from "./utils/path"

const clean = async () => {
  await run("pnpm clean", projRoot)
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
  await run("pnpm build", themeChalkPath)
}
const buildHooks = async () => {
  await run("pnpm build", hooksPath)
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
  clean,
  parallel(buildEs, buildCjs, buildLib, buildThemeChalk, buildHooks, copyPackage, copyLicense)
)

export default build
