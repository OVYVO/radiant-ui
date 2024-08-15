import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue, { rules } from "eslint-plugin-vue"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    parser: "vue-eslint-parser",
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off"
    }
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": false
    }
  },
  {
    ignores: [
      "*.sh",
      "*.md",
      "*.woff",
      "*.ttf",
      ".vscode",
      ".husky",
      ".github",

      "**/node_modules",
      "**/dist",

      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",

      "**/CHANGELOG*.md",
      "**/LICENSE*",

      "**/auto-import?(s).d.ts",
      "**/components.d.ts"
    ]
  }
]
