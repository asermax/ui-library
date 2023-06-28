---
to: components/<%= h.changeCase.param(name) %>/.eslintrc.js
---
module.exports = {
  extends: "../../.eslintrc.js",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
    ecmaVersion: 11,
  },
};
