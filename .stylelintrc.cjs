module.exports = {
  extends: ["stylelint-config-standard-scss", "@ovyvo/stylelint-config"],
  rules: {
    "scss/dollar-variable-pattern": null,
    "plugin/selector-bem-pattern": {
      componentName: "[A-Z]+",
      preset: "bem",
      componentSelectors: {
        //初始选择器规则，可理解为顶层class规则
        initial: "^\\.{componentName}(?:__[-a-z]+)?(?:--[a-z]+)?$",
        //可理解为内层选择器规则
        combined: "^\\.{componentName}(?:__[-a-z]+)(?:--[a-z]+)?$"
      },
      utilitySelectors: "^\\.util-[a-z]+$",
      ignoreSelectors: ["^\\.el-", "/deep/", ">>>", "^\\.icon-"]
    }
  },
  plugins: ["stylelint-scss", "stylelint-selector-bem-pattern"]
}
