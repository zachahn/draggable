module.exports = {
  extends: ['plugin:shopify/esnext', 'plugin:shopify/prettier'],
  globals: {},
  rules: {
    'line-comment-position': 0,
    'no-console': 0,
    'shopify/strict-component-boundaries': 'off'
  },
  env: {
    browser: true
  }
};
