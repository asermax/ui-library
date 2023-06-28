---
to: components/<%= h.changeCase.param(name) %>/stories/<%= h.changeCase.pascal(name) %>.stories.tsx
---
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { Meta, StoryObj } from "@storybook/react";
import { <%= h.changeCase.pascal(name) %> } from "../src/<%= h.changeCase.pascal(name) %>";

const meta: Meta<typeof <%= h.changeCase.pascal(name) %>> = {
  title: "<%= h.changeCase.pascal(name) %>",
  component: <%= h.changeCase.pascal(name) %>,
};

export default meta;
type Story = StoryObj<typeof <%= h.changeCase.pascal(name) %>>;

export const Simple: Story = {
  render: <%= h.changeCase.pascal(name) %>
}

