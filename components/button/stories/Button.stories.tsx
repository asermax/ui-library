/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    children: { control: "text" },
    onClick: { action: "clicked" },
    theme: { control: false },
    as: { control: false },
  },
  args: {
    color: "#bdb404",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Simple: Story = {
  args: {
    children: "Simple",
  },
};
