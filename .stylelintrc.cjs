module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-rational-order",
    "stylelint-config-prettier"
  ],
  rules: {
    "block-no-empty": true,
    "rule-empty-line-before": "never",
    "order/order": ["custom-properties", "declarations"],
    "scss/dollar-variable-pattern": null,
    "unit-allowed-list": ["px", "vw", "vh", "%"]
  },
  plugins: ["stylelint-scss", "stylelint-order", "stylelint-config-rational-order/plugin"],
  ignoreFiles: [
    "**/*.js",
    "**/*.cjs",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
    "**/*.json",
    "**/*.md",
    "**/*.yaml",
    "node_modules/",
    "dist/",
    "public/",
    "docs/"
  ]
}
