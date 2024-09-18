import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  entries: [
    "./index.ts",
    {
      builder: "mkdist",
      input: "./src",
      outDir: "./dist"
    }
  ],
  outDir: "dist",
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true
    }
  }
})
