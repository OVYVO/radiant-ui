import { defineConfig } from "vite"
import { resolve } from "node:path"
import { projRoot, componentsPath } from "../utils/path"

import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"

const TSCONFIG_BUILD_PATH = resolve(componentsPath, "tsconfig.build.json")
const ENTRY_PATH = resolve(componentsPath, "index.ts")

const OUTDIR_TYPES_PATH = resolve(projRoot, "dist/types")
const OUTDIR_PATH = resolve(projRoot, "dist")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: TSCONFIG_BUILD_PATH,
      outDir: OUTDIR_TYPES_PATH
    })
  ],
  build: {
    outDir: OUTDIR_PATH,
    emptyOutDir: false,
    lib: {
      entry: ENTRY_PATH,
      formats: ["umd", "iife"],
      name: "radiantUI",
      fileName: format => `radiant-ui.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "@radiant-ui/utils", "element-plus"],
      output: {
        exports: "named",
        globals: {
          ["vue"]: "Vue",
          ["element-plus"]: "elementPlus",
          ["@radiant-ui/utils"]: "radiantUiUtils"
        }
      }
    }
  }
})
