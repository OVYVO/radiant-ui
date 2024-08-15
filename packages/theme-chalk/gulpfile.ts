import path from "path"
import { dest, parallel, series, src } from "gulp"
import gulpSass from "gulp-sass"
import dartSass from "sass"
import autoprefixer from "gulp-autoprefixer"
import rename from "gulp-rename"
import gulpConcat from "gulp-concat"
import cssnano from "gulp-cssnano"
import { deleteAsync } from "del"

const distRootFolder = path.resolve(__dirname, "dist")
const distSrcFolder = path.resolve(distRootFolder, "src")
const distBundleRoot = path.resolve(__dirname, "../../dist/theme-chalk")

const clean = async () => {
  await deleteAsync(["dist"])
}

const buildThemeChalk = () => {
  const sass = gulpSass(dartSass)
  const noradiantPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, "src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssnano())
    .pipe(
      rename(path => {
        if (!noradiantPrefixFile.test(path.basename)) {
          path.basename = `radiant-${path.basename}`
        }
      })
    )
    .pipe(dest(distSrcFolder))
    .pipe(gulpConcat("index.css"))
    .pipe(dest(distRootFolder))
}

const copyThemeChalkBundleSrc = () => {
  return src(`${distRootFolder}/**`).pipe(dest(distBundleRoot))
}

export default parallel(series(clean, buildThemeChalk, copyThemeChalkBundleSrc))
