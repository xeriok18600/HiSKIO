module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    EXIF: true,
  },
  extends: [
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'plugin:prettierx/standardx',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettierx'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettierx/options': [
      'error',
      {
        semi: false,
        endOfLine: 'auto',
        singleQuote: true,
        spaceBeforeFunctionParen: true,
      },
    ],
  },
}
