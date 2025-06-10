import { projRoot } from "./path"

export const excludeFiles = (files: string[]) => {
  const excludes = ["node_modules", "test", "mock", "dist", "global.d.ts", "images.d.ts"]
  return files.filter(path => {
    const position = path.startsWith(projRoot) ? projRoot.length : 0
    return !excludes.some(exclude => path.includes(exclude, position))
  })
}
