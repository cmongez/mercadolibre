module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'no-debugger': 'off',
    'no-console': 'warn',
  },
};
