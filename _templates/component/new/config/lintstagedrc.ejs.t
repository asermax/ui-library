---
to: components/<%= h.changeCase.param(name) %>/.lintstagedrc.json
---
{
  "*.{ts,tsx}": ["yarn lint-file:eslint --fix", "yarn lint-file:types"]
}
