// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  extends: ['@modern-js-app'],
  rules: {
    // 关闭不可console
    'no-console': 'off',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['../tsconfig.json'],
  },
};
