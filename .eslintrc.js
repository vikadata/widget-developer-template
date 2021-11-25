module.exports = {
  env: {
      browser: true,
      es6: true,
      node: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
      'eslint:recommended',
      'plugin:react/recommended'
  ],
  plugins: [
      'react-hooks'
  ],
  rules: {
      'react/prop-types': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
      react: {
          version: 'latest',
      },
  }
};
