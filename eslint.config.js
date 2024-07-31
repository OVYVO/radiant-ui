import { defineConfig } from "@ovyvo/eslint-config"

export default [
  ...defineConfig({ scriptType: "typescript" }),
  {
    files: ["**/*.vue"],
    parser: "vue-eslint-parser"
  }
]
