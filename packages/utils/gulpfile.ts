import path from "path"
import { dest, parallel, series, src } from "gulp"

const distBundleRoot = path.resolve(__dirname, "../../dist/utils")

const copyUtils = () => {
  return src("./dist/**").pipe(dest(distBundleRoot))
}

export default parallel(series(copyUtils))
