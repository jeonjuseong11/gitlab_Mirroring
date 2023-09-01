module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["google", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};
