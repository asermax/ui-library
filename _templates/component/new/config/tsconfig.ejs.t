---
to: components/<%= h.changeCase.param(name) %>/tsconfig.json
---
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "noEmit": true
  },
  "include": [
    "src/**/*",
    "stories/**/*",
    ".eslintrc.js"
  ],
}
