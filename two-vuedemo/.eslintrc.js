module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": 1,
    "no-debugger": 1,
    "no-unused-vars": 1,
    "vue/no-unused-components": 1,
    "disable-next-line": 0
  }
};
