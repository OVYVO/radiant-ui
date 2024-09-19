import path from "path"
import { dest, series, src } from "gulp"
import gulpSass from "gulp-sass"
import dartSass from "sass"
import autoprefixer from "gulp-autoprefixer"
import rename from "gulp-rename"
import gulpConcat from "gulp-concat"
import cssnano from "gulp-cssnano"
import { deleteAsync } from "del"

const distRootFolder = path.resolve(__dirname, "dist")
const distSrcFolder = path.resolve(__dirname, "dist/src")
const distBundleFolder = path.resolve(__dirname, "../../dist/theme-chalk")
const distBundleRootFolder = path.resolve(__dirname, "../../dist")

const clean = async () => {
  await deleteAsync(["dist"])
}

const buildThemeChalk = () => {
  const sass = gulpSass(dartSass)
  const noJgPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, "src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssnano())
    .pipe(
      rename(path => {
        if (!noJgPrefixFile.test(path.basename)) {
          path.basename = `jg-${path.basename}`
        }
      })
    )
    .pipe(dest(distSrcFolder))
    .pipe(gulpConcat("index.css"))
    .pipe(dest(distRootFolder))
}

const copyThemeChalkBundleSrc = () => {
  return src(`${distRootFolder}/**`).pipe(dest(distBundleFolder))
}
const copyThemeChalkDistRoot = () => {
  return src(`${distRootFolder}/index.css`).pipe(dest(distBundleRootFolder))
}

export default series(clean, buildThemeChalk, copyThemeChalkBundleSrc, copyThemeChalkDistRoot)
