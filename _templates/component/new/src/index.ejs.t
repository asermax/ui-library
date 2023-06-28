---
to: components/<%= h.changeCase.param(name) %>/src/index.ts
---
export { <%= h.changeCase.pascal(name) %> } from "./<%= h.changeCase.pascal(name) %>";
