import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import vueeslint from "vue-eslint-parser"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["packages/components/**/*.vue"],
    languageOptions: { parser: vueeslint.parser, parserOptions: { parser: tseslint.parser } },
    rules: {
      "vue/block-lang": [
        "error",
        {
          script: {
            lang: "ts"
          }
        }
      ],
      "vue/block-order": [
        "error",
        {
          order: ["template", "script"]
        }
      ],
      "vue/no-restricted-block": [
        "error",
        {
          element: "style",
          message: "Do not use <style> block in this project."
        }
      ]
    }
  },
  {
    files: ["**/*.vue"],
    languageOptions: { parser: vueeslint.parser, parserOptions: { parser: tseslint.parser } },
    rules: {
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off"
    }
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off"
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

      "docs/**",

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
