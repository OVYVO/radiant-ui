module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss", "stylelint-config-rational-order"],
  rules: {
    "block-no-empty": true,
    "rule-empty-line-before": "never",
    "scss/dollar-variable-pattern": null,
    "unit-allowed-list": ["px", "vw", "vh", "%"]
  },
  plugins: ["stylelint-scss", "stylelint-order", "stylelint-config-rational-order/plugin"]
}
