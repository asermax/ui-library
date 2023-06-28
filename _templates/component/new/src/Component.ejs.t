---
to: components/<%= h.changeCase.param(name) %>/src/<%= h.changeCase.pascal(name) %>.tsx
---
interface Props {
}

export const <%= h.changeCase.pascal(name) %> = (props: Props) => (
  <div>
    <h1><%= h.changeCase.pascal(name) %></h1>
  </div>
);
