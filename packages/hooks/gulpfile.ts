import path from "path"
import { dest, parallel, series, src } from "gulp"

const distBundleRoot = path.resolve(__dirname, "../../dist/hooks")

const copyHooks = () => {
  return src("./dist/**").pipe(dest(distBundleRoot))
}

export default parallel(series(copyHooks))
