/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'require-jsdoc': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'import/named': 'off',
    'import/no-unresolved': 'off',
  },
};
