import { resolve } from "path"

export const projRoot = resolve(__dirname, "../../../")
export const compRoot = resolve(projRoot, "packages")

export const componentsPath = resolve(compRoot, "components")
export const utilsPath = resolve(compRoot, "utils")
export const themeChalkPath = resolve(compRoot, "theme-chalk")
export const cliPath = resolve(compRoot, "cli")

export const outPutDir = resolve(projRoot, "dist")
