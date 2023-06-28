---
to: components/<%= h.changeCase.param(name) %>/package.json
---
{
  "name": "@asermax/<%= h.changeCase.param(name) %>",
  "description": "<%= h.changeCase.pascal(name) %>",
  "version": "1.0.0",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "ssh://git@github.com/asermax/asermax-ui.git",
    "directory": "components/<%= h.changeCase.param(name) %>"
  },
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc -p tsconfig.build.json",
    "prepublishOnly": "lerna run build --scope=@asermax/<%= h.changeCase.param(name) %> --include-dependencies",
    "lint:eslint": "eslint .",
    "lint:types": "tsc",
    "lint-file:eslint": "eslint",
    "lint-file:types": "tsc-files",
    "lint-staged": "lint-staged"
  },
  "peerDependencies": {
    "@emotion/react": "^11.11",
    "@emotion/styled": "^11.11",
    "react": "^18.2"
  }
}
