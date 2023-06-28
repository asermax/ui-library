---
to: components/<%= h.changeCase.param(name) %>/tsconfig.build.json
---
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "noEmit": false,
    "declaration": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*",
  ],
}
