import { defineConfig } from "vite"
import { resolve } from "node:path"
import { projRoot, componentsPath } from "../utils/path"
import { excludeFiles } from "../utils/pkg"

import vue from "@vitejs/plugin-vue"
import glob from "fast-glob"

import { styleAliasPlugin } from "../plugin"

const OUTDIR_PATH = resolve(projRoot, "dist/lib")
const ENTRY_PATH = resolve(componentsPath)

const entrys = excludeFiles(
  glob.sync("**/*.{js,ts,vue}", {
    cwd: componentsPath,
    absolute: true,
    onlyFiles: true
  })
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [styleAliasPlugin(), vue()],
  build: {
    outDir: OUTDIR_PATH,
    emptyOutDir: true,
    lib: {
      entry: entrys,
      formats: ["cjs"]
    },
    rollupOptions: {
      external: ["vue", "element-plus", "lodash-es"],
      output: {
        preserveModules: true,
        preserveModulesRoot: ENTRY_PATH,
        exports: "named"
      }
    }
  }
})
